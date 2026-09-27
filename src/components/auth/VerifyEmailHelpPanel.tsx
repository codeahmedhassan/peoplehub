"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { VERIFY_EMAIL_HELP_ITEMS } from "@/lib/constants";

const DISMISS_KEY = "peoplehub_verify_email_help_dismissed";

function HelpIcon({ name }: { name: "mail" | "edit" | "support" }) {
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
        case "edit":
            return (
                <svg {...common}>
                    <path
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
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

type Props = {
    email: string;
};

export default function VerifyEmailHelpPanel({ email }: Props) {
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
            <div
                className="relative rounded-2xl overflow-hidden animate-auth-rise"
                style={{ animationDelay: "0.2s" }}
            >
                {/* Liquid glass */}
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

                    {/* Header row */}
                    <div className="w-full flex items-center justify-between gap-3">
                        <button
                            type="button"
                            onClick={() => setOpen((o) => !o)}
                            aria-expanded={open}
                            aria-controls="verify-email-help-content"
                            className="flex-1 flex items-center gap-2 text-left"
                        >
                            <span className="w-7 h-7 rounded-full bg-blue-100/70 text-blue-600 flex items-center justify-center shrink-0">
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
                                Didn&apos;t receive the email?
                            </span>
                        </button>

                        <div className="flex items-center gap-1.5 shrink-0">
                            <button
                                type="button"
                                onClick={dismiss}
                                aria-label="Dismiss help panel"
                                className="w-6 h-6 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-white/60 transition-colors cursor-pointer"
                            >
                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                                </svg>
                            </button>
                            <button
                                type="button"
                                onClick={() => setOpen((o) => !o)}
                                aria-label={open ? "Collapse help" : "Expand help"}
                                className="w-6 h-6 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-white/60 transition-colors cursor-pointer"
                            >
                                <svg
                                    className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""
                                        }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Collapsible content */}
                    <div
                        id="verify-email-help-content"
                        className={`grid transition-all duration-300 ease-out ${open
                            ? "grid-rows-[1fr] opacity-100 mt-4"
                            : "grid-rows-[0fr] opacity-0 mt-0"
                            }`}
                    >
                        <div className="overflow-hidden">
                            <ul className="space-y-3">
                                {VERIFY_EMAIL_HELP_ITEMS.map((item) => (
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

                            <div className="mt-4 pt-3 border-t border-slate-200/70 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                                <p className="text-[11px] text-slate-500">
                                    Sent to <strong className="text-slate-700 break-all">{email}</strong>
                                </p>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors shrink-0"
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