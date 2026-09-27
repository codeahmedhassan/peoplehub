import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import LiquidGlassFilter from "@/components/ui/LiquidGlassFilter";
import AuthBackground from "@/components/auth/AuthBackground";
import ForgotPasswordCard from "@/components/auth/ForgotPasswordCard";
import {
    FORGOT_HIGHLIGHTS,
    FORGOT_TESTIMONIAL,
} from "@/lib/constants";

export const metadata: Metadata = {
    title: "Reset your password — PeopleHub",
    description:
        "Forgot your PeopleHub password? Enter your email and we'll send you a secure reset link. Usually arrives within 30 seconds.",
};

function HighlightIcon({
    name,
}: {
    name: "shield" | "clock" | "support";
}) {
    const common = {
        className: "w-4 h-4",
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24",
        "aria-hidden": true,
    } as const;

    switch (name) {
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
        case "support":
            return (
                <svg {...common}>
                    <path
                        d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                    />
                </svg>
            );
    }
}

export default function ForgotPasswordPage() {
    return (
        <main className="relative min-h-svh w-full overflow-hidden">
            <LiquidGlassFilter />
            <AuthBackground />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-12 sm:pb-16 lg:pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                    {/* LEFT: Trust panel (desktop only) */}
                    <div className="hidden lg:block lg:col-span-6 animate-auth-rise">
                        <div className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wide bg-white/70 backdrop-blur-md border border-white/70 text-blue-600 mb-6">
                            Password recovery
                        </div>

                        <h2 className="text-4xl xl:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.08]">
                            Locked out?
                            <br />
                            <span className="text-blue-600">We&apos;ll get you back in.</span>
                        </h2>

                        <p className="mt-5 text-base text-slate-600 leading-relaxed max-w-md">
                            Reset links are quick, secure, and expire automatically. You&apos;ll be
                            back in your workspace before your next meeting.
                        </p>

                        {/* Highlights */}
                        <ul className="mt-8 space-y-4 max-w-md">
                            {FORGOT_HIGHLIGHTS.map((h) => (
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

                        {/* Testimonial — floating glass card */}
                        <figure className="relative mt-10 rounded-2xl overflow-hidden max-w-md animate-auth-float">
                            <div
                                aria-hidden="true"
                                className="absolute inset-0 rounded-2xl"
                                style={{
                                    backdropFilter:
                                        "url(#liquid-glass-distortion) blur(2px) saturate(1.4)",
                                    WebkitBackdropFilter: "blur(14px) saturate(1.4)",
                                }}
                            />
                            <div
                                aria-hidden="true"
                                className="absolute inset-0 rounded-2xl bg-white/55 border border-white/70 ring-1 ring-slate-900/5"
                            />
                            <div className="relative p-5">
                                <span
                                    aria-hidden="true"
                                    className="pointer-events-none absolute inset-x-6 top-0 h-px rounded-full bg-linear-to-r from-transparent via-white/90 to-transparent"
                                />
                                <p className="text-sm text-slate-700 leading-relaxed">
                                    &ldquo;{FORGOT_TESTIMONIAL.quote}&rdquo;
                                </p>
                                <figcaption className="mt-4 flex items-center gap-3">
                                    <Image
                                        alt={FORGOT_TESTIMONIAL.name}
                                        className="w-9 h-9 rounded-full object-cover ring-2 ring-white"
                                        src={FORGOT_TESTIMONIAL.avatar}
                                        width={36}
                                        height={36}
                                        unoptimized
                                    />
                                    <div className="leading-tight">
                                        <p className="text-xs font-bold text-slate-900">
                                            {FORGOT_TESTIMONIAL.name}
                                        </p>
                                        <p className="text-[11px] text-slate-500 mt-0.5">
                                            {FORGOT_TESTIMONIAL.role}
                                        </p>
                                    </div>
                                </figcaption>
                            </div>
                        </figure>

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

                    {/* RIGHT: Card */}
                    <div className="lg:col-span-6 flex justify-center lg:justify-end">
                        <ForgotPasswordCard />
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