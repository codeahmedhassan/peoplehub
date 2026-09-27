import type { Metadata } from "next";
import Link from "next/link";
import LiquidGlassFilter from "@/components/ui/LiquidGlassFilter";
import AuthBackground from "@/components/auth/AuthBackground";
import VerifyEmailCard from "@/components/auth/VerifyEmailCard";
import VerifyEmailHelpPanel from "@/components/auth/VerifyEmailHelpPanel";
import { VERIFY_EMAIL_HIGHLIGHTS } from "@/lib/constants";

export const metadata: Metadata = {
    title: "Verify your email — PeopleHub",
    description:
        "We sent a verification link to your inbox. Click it to activate your PeopleHub account.",
};

function HighlightIcon({
    name,
}: {
    name: "bolt" | "clock" | "shield";
}) {
    const common = {
        className: "w-4 h-4",
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24",
        "aria-hidden": true,
    } as const;

    switch (name) {
        case "bolt":
            return (
                <svg {...common}>
                    <path
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                    />
                </svg>
            );
        case "clock":
            return (
                <svg {...common}>
                    <path
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                    />
                </svg>
            );
        case "shield":
            return (
                <svg {...common}>
                    <path
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                    />
                </svg>
            );
    }
}

type Props = {
    searchParams: Promise<{ email?: string }>;
};

export default async function VerifyEmailPage({ searchParams }: Props) {
    const params = await searchParams;
    const email = params.email ?? "you@company.com";

    return (
        <main className="relative min-h-svh w-full overflow-hidden">
            <LiquidGlassFilter />
            <AuthBackground />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-12 sm:pb-16 lg:pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                    {/* LEFT: Trust panel (desktop only) */}
                    <div className="hidden lg:block lg:col-span-6 animate-auth-rise">
                        <div className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wide bg-white/70 backdrop-blur-md border border-white/70 text-blue-600 mb-6">
                            Email verification
                        </div>

                        <h2 className="text-4xl xl:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.08]">
                            Almost there.
                            <br />
                            <span className="text-blue-600">Check your inbox.</span>
                        </h2>

                        <p className="mt-5 text-base text-slate-600 leading-relaxed max-w-md">
                            We sent you a verification link. One click and your workspace is ready
                            — no credit card, no setup fees, just a calmer way to run HR.
                        </p>

                        {/* Highlights */}
                        <ul className="mt-8 space-y-4 max-w-md">
                            {VERIFY_EMAIL_HIGHLIGHTS.map((h) => (
                                <li key={h.title} className="flex items-start gap-3">
                                    <span className="w-9 h-9 rounded-xl bg-blue-100/70 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                                        <HighlightIcon name={h.icon} />
                                    </span>
                                    <div>
                                        <p className="text-sm font-bold text-slate-900">{h.title}</p>
                                        <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                                            {h.description}
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        {/* Back link */}
                        <div className="mt-10">
                            <Link
                                href="/signin"
                                className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors"
                            >
                                <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M10 19l-7-7m0 0l7-7m-7 7h18"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                    />
                                </svg>
                                Back to sign in
                            </Link>
                        </div>
                    </div>

                    {/* RIGHT: Card + help panel */}
                    <div className="lg:col-span-6 flex flex-col items-center lg:items-end gap-4">
                        <VerifyEmailCard email={email} />
                        <VerifyEmailHelpPanel email={email} />
                    </div>
                </div>

                {/* Mobile-only back link */}
                <div className="lg:hidden mt-8 text-center">
                    <Link
                        href="/signin"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors"
                    >
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path
                                d="M10 19l-7-7m0 0l7-7m-7 7h18"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                            />
                        </svg>
                        Back to sign in
                    </Link>
                </div>
            </div>
        </main>
    );
}