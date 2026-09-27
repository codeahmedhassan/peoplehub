"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { OTP_HELP_ITEMS } from "@/lib/constants";

const DISMISS_KEY = "peoplehub_otp_help_dismissed";

function HelpIcon({ name }: { name: "mail" | "key" | "support" }) {
    const common = {
        className: "w-4 h-4",
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24",
        "aria-hidden": true,
    } as const;

    switch (name) {
        case "mail":
            return (
                <svg {...common}>
                    <path
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                    />
                </svg>
            );
        case "key":
            return (
                <svg {...common}>
                    <path
                        d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
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

export default function VerifyHelpPanel() {
    const [open, setOpen] = useState(false);
    const [dismissed, setDismissed] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const isDismissed =
            typeof window !== "undefined" &&
            sessionStorage.getItem(DISMISS_KEY) === "1";
        setDismissed(isDismissed);
        setMounted(true);
    }, []);

    function dismiss() {
        sessionStorage.setItem(DISMISS_KEY, "1");
        setDismissed(true);
    }

    if (!mounted || dismissed) return null;

    return (
        <div className="relative rounded-4xl overflow-hidden
        animate-auth-rise
        w-full max-w-md mx-auto">
            <div className="relative rounded-2xl overflow-hidden animate-auth-rise" style={{ animationDelay: "0.2s" }}>
                {/* Liquid-glass treatment */}
                <div
                    aria-hidden="true"
                    className="absolute inset-0 rounded-2xl"
                    style={{
                        backdropFilter: "url(#liquid-glass-distortion) blur(2px) saturate(1.4)",
                        WebkitBackdropFilter: "blur(14px) saturate(1.4)",
                    }}
                />
                <div
                    aria-hidden="true"
                    className="absolute inset-0 rounded-2xl bg-white/55 border border-white/70 ring-1 ring-slate-900/5"
                />
                <div className="relative p-4">
                    <span
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-x-6 top-0 h-px rounded-full bg-linear-to-r from-transparent via-white/90 to-transparent"
                    />

                    {/* Header row — click to expand */}
                    <button
                        type="button"
                        onClick={() => setOpen((o) => !o)}
                        aria-expanded={open}
                        aria-controls="otp-help-content"
                        className="w-full flex items-center justify-between gap-3 text-left"
                    >
                        <span className="flex items-center gap-2">
                            <span className="w-7 h-7 rounded-full bg-blue-100/70 text-blue-600 flex items-center justify-center">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path
                                        d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                    />
                                </svg>
                            </span>
                            <span className="text-xs sm:text-sm font-bold text-slate-900">
                                Trouble signing in?
                            </span>
                        </span>
                        <span className="flex items-center gap-2">
                            <span
                                onClick={(e) => {
                                    e.stopPropagation();
                                    dismiss();
                                }}
                                role="button"
                                tabIndex={0}
                                aria-label="Dismiss help panel"
                                onKeyDown={(e) => {
                                    if (e.key === "Enter" || e.key === " ") {
                                        e.stopPropagation();
                                        dismiss();
                                    }
                                }}
                                className="w-6 h-6 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-white/60 transition-colors cursor-pointer"
                            >
                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                                </svg>
                            </span>
                            <svg
                                className={`w-4 h-4 text-slate-400 transition-transform duration-200 cursor-pointer ${open ? "rotate-180" : ""
                                    }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                            </svg>
                        </span>
                    </button>

                    {/* Collapsible content */}
                    <div
                        id="otp-help-content"
                        className={`grid transition-all duration-300 ease-out ${open
                            ? "grid-rows-[1fr] opacity-100 mt-4"
                            : "grid-rows-[0fr] opacity-0 mt-0"
                            }`}
                    >
                        <div className="overflow-hidden">
                            <ul className="space-y-3">
                                {OTP_HELP_ITEMS.map((item) => (
                                    <li key={item.title} className="flex items-start gap-2.5">
                                        <span className="w-6 h-6 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center shrink-0 mt-0.5">
                                            <HelpIcon name={item.icon} />
                                        </span>
                                        <div>
                                            <p className="text-xs sm:text-sm font-bold text-slate-900">
                                                {item.title}
                                            </p>
                                            <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-4 pt-3 border-t border-slate-200/70">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors"
                                >
                                    Contact support
                                    <svg
                                        className="w-3.5 h-3.5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path
                                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}