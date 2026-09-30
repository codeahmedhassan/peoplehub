// Signup page

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import LiquidGlassFilter from "@/components/ui/LiquidGlassFilter";
import AuthBackground from "@/components/auth/AuthBackground";
import SignUpCard from "@/components/auth/SignUpCard";
import {
    SIGNUP_HIGHLIGHTS,
    SIGNUP_BENEFITS,
    SIGNUP_TESTIMONIAL,
} from "@/lib/constants";

export const metadata: Metadata = {
    title: "Start your free trial — PeopleHub",
    description:
        "Create your PeopleHub account in minutes. Free for 14 days, no credit card required. Manage employees, payroll, and HR from one clean dashboard.",
};

function HighlightIcon({ name }: { name: "sparkle" | "bolt" | "shield" }) {
    const common = {
        className: "w-4 h-4",
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24",
        "aria-hidden": true,
    } as const;

    switch (name) {
        case "sparkle":
            return (
                <svg {...common}>
                    <path
                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                    />
                </svg>
            );
        case "bolt":
            return (
                <svg {...common}>
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
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

export default function SignUpPage() {
    return (
        <main className="relative min-h-svh w-full overflow-hidden">
            <LiquidGlassFilter />
            <AuthBackground />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-12 sm:pb-16 lg:pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                    {/* LEFT: Trust panel (desktop only) */}
                    <div className="hidden lg:block lg:col-span-6 animate-auth-rise">
                        <div className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wide bg-white/70 backdrop-blur-md border border-white/70 text-blue-600 mb-6">
                            Free 14-day trial
                        </div>

                        <h2 className="text-4xl xl:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.08]">
                            Everything your team
                            <br />
                            needs to{" "}
                            <span className="text-blue-600">run HR right.</span>
                        </h2>

                        <p className="mt-5 text-base text-slate-600 leading-relaxed max-w-md">
                            Start in minutes. Invite your team, import your people, and run your
                            first payroll — all from one place.
                        </p>

                        {/* Highlights */}
                        <ul className="mt-8 space-y-4 max-w-md">
                            {SIGNUP_HIGHLIGHTS.map((h) => (
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

                        {/* Benefits list */}
                        <div className="mt-8 p-5 rounded-2xl bg-white/50 backdrop-blur-md border border-white/70 ring-1 ring-slate-900/5 max-w-md">
                            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-3">
                                Included in every trial
                            </p>
                            <ul className="space-y-2">
                                {SIGNUP_BENEFITS.map((benefit) => (
                                    <li
                                        key={benefit}
                                        className="flex items-start gap-2 text-xs sm:text-sm text-slate-700"
                                    >
                                        <svg
                                            className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            aria-hidden="true"
                                        >
                                            <path
                                                clipRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                fillRule="evenodd"
                                            />
                                        </svg>
                                        <span>{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

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
                                    &ldquo;{SIGNUP_TESTIMONIAL.quote}&rdquo;
                                </p>
                                <figcaption className="mt-4 flex items-center gap-3">
                                    <Image
                                        alt={SIGNUP_TESTIMONIAL.name}
                                        className="w-9 h-9 rounded-full object-cover ring-2 ring-white"
                                        src={SIGNUP_TESTIMONIAL.avatar}
                                        width={36}
                                        height={36}
                                        unoptimized
                                    />
                                    <div className="leading-tight">
                                        <p className="text-xs font-bold text-slate-900">
                                            {SIGNUP_TESTIMONIAL.name}
                                        </p>
                                        <p className="text-[11px] text-slate-500 mt-0.5">
                                            {SIGNUP_TESTIMONIAL.role}
                                        </p>
                                    </div>
                                </figcaption>
                            </div>
                        </figure>

                        {/* Back link */}
                        <div className="mt-10">
                            <Link
                                href="/"
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
                                Back to home
                            </Link>
                        </div>
                    </div>

                    {/* RIGHT: Sign-up card */}
                    <div className="lg:col-span-6 flex justify-center lg:justify-end">
                        <SignUpCard />
                    </div>
                </div>

                {/* Mobile-only back link */}
                <div className="lg:hidden mt-8 text-center">
                    <Link
                        href="/"
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
                        Back to home
                    </Link>
                </div>
            </div>
        </main>
    );
}