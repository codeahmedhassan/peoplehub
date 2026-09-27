"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FORGOT_EMAIL_HELP_STEPS } from "@/lib/constants";

function MailCheckIcon() {
    return (
        <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
            />
            <path
                d="M9 13l2 2 4-4"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
            />
        </svg>
    );
}

function Spinner() {
    return (
        <svg className="w-3.5 h-3.5 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeOpacity="0.25" strokeWidth="4" />
            <path
                d="M22 12a10 10 0 0 1-10 10"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
            />
        </svg>
    );
}

type Props = {
    email: string;
    onBack: () => void;
};

const RESEND_COOLDOWN_SECONDS = 30;

export default function ResetSentPanel({ email, onBack }: Props) {
    const [cooldown, setCooldown] = useState(RESEND_COOLDOWN_SECONDS);
    const [resending, setResending] = useState(false);
    const [resendCount, setResendCount] = useState(0);

    // Countdown timer
    useEffect(() => {
        if (cooldown <= 0) return;
        const t = setTimeout(() => setCooldown((c) => c - 1), 1000);
        return () => clearTimeout(t);
    }, [cooldown]);

    async function handleResend() {
        if (cooldown > 0 || resending) return;
        setResending(true);
        // Simulated resend — replace with your real call.
        console.log("Resending reset link to:", email);
        await new Promise((res) => setTimeout(res, 800));
        setResending(false);
        setResendCount((n) => n + 1);
        setCooldown(RESEND_COOLDOWN_SECONDS);
    }

    return (
        <div className="animate-auth-rise">
            {/* Icon */}
            <div className="flex justify-center mb-5">
                <div className="relative">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                        <MailCheckIcon />
                    </div>
                    {/* Soft pulse ring */}
                    <span
                        aria-hidden="true"
                        className="absolute inset-0 rounded-full ring-4 ring-emerald-100/60 animate-pulse"
                    />
                </div>
            </div>

            {/* Heading */}
            <div className="text-center mb-6">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                    Check your inbox.
                </h1>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    We sent a password reset link to
                </p>
                <p className="mt-1 text-sm font-bold text-slate-900 break-all">
                    {email}
                </p>
            </div>

            {/* Actions */}
            <div className="space-y-3">
                <button
                    type="button"
                    onClick={handleResend}
                    disabled={cooldown > 0 || resending}
                    className="
            relative w-full rounded-full overflow-hidden
            h-11
            disabled:opacity-60 disabled:cursor-not-allowed
            transition-transform active:scale-[0.98]
          "
                >
                    <span
                        aria-hidden="true"
                        className="absolute inset-0 rounded-full"
                        style={{
                            backdropFilter: "url(#liquid-glass-distortion) blur(2px) saturate(1.4)",
                            WebkitBackdropFilter: "blur(14px) saturate(1.4)",
                        }}
                    />
                    <span
                        aria-hidden="true"
                        className="absolute inset-0 rounded-full bg-white/60 border border-white/70 ring-1 ring-slate-900/5"
                    />
                    <span className="relative flex items-center justify-center gap-2 h-full px-6 text-slate-800 text-sm font-semibold">
                        {resending ? (
                            <>
                                <Spinner />
                                <span>Resending…</span>
                            </>
                        ) : cooldown > 0 ? (
                            <span>Resend in {cooldown}s</span>
                        ) : (
                            <span>Resend reset link</span>
                        )}
                    </span>
                </button>

                <button
                    type="button"
                    onClick={onBack}
                    className="
            w-full h-11 rounded-full
            text-sm font-semibold text-slate-700
            hover:bg-white/50 transition-colors
          "
                >
                    Try a different email
                </button>
            </div>

            {resendCount > 0 && (
                <p className="mt-3 text-center text-[11px] sm:text-xs text-emerald-600 font-semibold">
                    Reset link resent. Please check your inbox again.
                </p>
            )}

            {/* Divider */}
            <div className="relative my-6">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="w-full border-t border-slate-200/70" />
                </div>
                <div className="relative flex justify-center">
                    <span className="bg-white/60 backdrop-blur-md px-3 text-[11px] uppercase tracking-wider font-semibold text-slate-400">
                        Didn&apos;t get it?
                    </span>
                </div>
            </div>

            {/* Help checklist */}
            <ul className="space-y-2.5">
                {FORGOT_EMAIL_HELP_STEPS.map((step) => (
                    <li
                        key={step}
                        className="flex items-start gap-2 text-[12px] sm:text-xs text-slate-600"
                    >
                        <span className="w-4 h-4 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center shrink-0 mt-0.5 text-[9px] font-bold">
                            ?
                        </span>
                        <span className="leading-relaxed">{step}</span>
                    </li>
                ))}
            </ul>

            <p className="mt-6 text-center text-xs sm:text-sm text-slate-500">
                Or{" "}
                <Link
                    href="/contact"
                    className="font-bold text-blue-600 hover:text-blue-700 transition-colors"
                >
                    contact support
                </Link>{" "}
                and we&apos;ll verify your identity.
            </p>
        </div>
    );
}