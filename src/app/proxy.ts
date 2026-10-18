// proxy.ts (marketing app — localhost:3001)
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const API_BASE_URL =
    process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "") ||
    "http://localhost:3000/api/v1";

const ADMIN_URL =
    process.env.NEXT_PUBLIC_ADMIN_URL || "http://localhost:3002";

const ACCESS_COOKIE = "ph_at";
const SIGNUP_PENDING_COOKIE = "ph_signup";

type SessionUser = {
    emailVerified?: boolean;
    setupCompletedAt?: string | null;
};

type SessionState =
    | "unauthenticated"
    | "unverified"
    | "needs-setup"
    | "ready";

async function getSessionState(cookieHeader: string): Promise<SessionState> {
    // Fast path — no cookie, no session. Skip the network call.
    if (!cookieHeader.includes(`${ACCESS_COOKIE}=`)) {
        return "unauthenticated";
    }

    try {
        const res = await fetch(`${API_BASE_URL}/auth/session`, {
            headers: { cookie: cookieHeader },
            cache: "no-store",
        });
        if (!res.ok) return "unauthenticated";

        const data = (await res.json()) as {
            data?: { authenticated?: boolean; user?: SessionUser | null };
        };
        if (!data?.data?.authenticated || !data.data.user) {
            return "unauthenticated";
        }

        const user = data.data.user;
        if (!user.emailVerified) return "unverified";
        if (!user.setupCompletedAt) return "needs-setup";
        return "ready";
    } catch {
        return "unauthenticated";
    }
}

export async function proxy(req: NextRequest) {
    const { pathname } = req.nextUrl;
    const cookieHeader = req.headers.get("cookie") || "";

    // /verify-email/confirm is never gated — the URL token is the proof.
    // Users may also arrive here from a different device.
    if (pathname.startsWith("/verify-email/confirm")) {
        return NextResponse.next();
    }

    // Handle the auth-entry pages + gated pages in one place.
    const GATED = [
        "/signup",
        "/signin",
        "/verify-email",
        "/setup-workspace",
    ];

    const isGated = GATED.some(
        (p) => pathname === p || pathname.startsWith(`${p}/`)
    );
    if (!isGated) return NextResponse.next();

    const state = await getSessionState(cookieHeader);
    const hasPendingSignup = Boolean(
        req.cookies.get(SIGNUP_PENDING_COOKIE)?.value
    );

    switch (state) {
        case "unauthenticated":
            // Not signed in.
            if (pathname === "/setup-workspace" || pathname.startsWith("/setup-workspace/")) {
                return NextResponse.redirect(new URL("/signin", req.url));
            }
            if (pathname === "/verify-email") {
                if (!hasPendingSignup) {
                    return NextResponse.redirect(new URL("/signup", req.url));
                }
            }
            // /signup, /signin → allow
            return NextResponse.next();

        case "unverified":
            // Signed in but email not verified.
            // Allowed: /verify-email
            // Redirect everything else to /verify-email.
            if (pathname === "/verify-email") return NextResponse.next();
            return NextResponse.redirect(new URL("/verify-email", req.url));

        case "needs-setup":
            // Verified but no workspace yet.
            // Allowed: /setup-workspace
            // Redirect everything else to /setup-workspace.
            if (
                pathname === "/setup-workspace" ||
                pathname.startsWith("/setup-workspace/")
            ) {
                return NextResponse.next();
            }
            return NextResponse.redirect(new URL("/setup-workspace", req.url));

        case "ready":
            // Fully onboarded. Send them to the admin panel.
            return NextResponse.redirect(new URL("/", ADMIN_URL));
    }
}

export const config = {
    matcher: [
        "/signup",
        "/signin",
        "/verify-email",
        "/verify-email/:path*",
        "/setup-workspace/:path*",
    ],
};