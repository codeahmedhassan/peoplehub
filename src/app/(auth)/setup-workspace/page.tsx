"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import LiquidGlassFilter from "@/components/ui/LiquidGlassFilter";
import AuthBackground from "@/components/auth/AuthBackground";
import SetupWorkspaceShell from "@/components/auth/SetupWorkspaceShell";
import SetupSummaryPanel from "@/components/auth/SetupSummaryPanel";
import { apiFetch, ApiError } from "@/lib/api";

type SessionUser = {
    id: string;
    fullName: string;
    email: string;
    emailVerified: boolean;
    status: string;
};

export default function SetupWorkspacePage() {
    const router = useRouter();
    const [user, setUser] = useState<SessionUser | null>(null);
    const [checking, setChecking] = useState(true);

    useEffect(() => {
        let cancelled = false;

        (async () => {
            try {
                const data = await apiFetch<{ user: SessionUser | null }>("/auth/me");
                if (cancelled) return;
                if (!data.user) {
                    router.replace("/signin?next=%2Fsetup-workspace");
                    return;
                }
                if (!data.user.emailVerified) {
                    // Authenticated but email not verified — this only happens
                    // if the server-side cookie doesn't match, which is unusual.
                    router.replace("/verify-email");
                    return;
                }
                setUser(data.user);
            } catch (err) {
                if (cancelled) return;
                if (err instanceof ApiError && err.status === 401) {
                    router.replace("/signin?next=%2Fsetup-workspace");
                } else {
                    router.replace("/signin");
                }
            } finally {
                if (!cancelled) setChecking(false);
            }
        })();

        return () => {
            cancelled = true;
        };
    }, [router]);

    if (checking || !user) {
        return (
            <main className="relative min-h-svh w-full overflow-hidden">
                <LiquidGlassFilter />
                <AuthBackground />
                <div className="relative z-10 flex items-center justify-center min-h-svh">
                    <div className="flex items-center gap-3 text-slate-600 text-sm">
                        <svg className="w-5 h-5 animate-spin text-blue-600" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeOpacity="0.25" strokeWidth="3" />
                            <path d="M22 12a10 10 0 0 1-10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                        </svg>
                        <span>Preparing your workspace…</span>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="relative min-h-svh w-full overflow-hidden">
            <LiquidGlassFilter />
            <AuthBackground />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-12 sm:pb-16 lg:pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                    <div className="hidden lg:block lg:col-span-5 lg:sticky lg:top-28">
                        <SetupSummaryPanel />
                    </div>
                    <div className="lg:col-span-7 flex justify-center lg:justify-end">
                        <SetupWorkspaceShell />
                    </div>
                </div>
            </div>
        </main>
    );
}