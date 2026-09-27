"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ResendTimer from "./ResendTimer";
import { VERIFY_EMAIL_STEPS } from "@/lib/constants";

type Props = {
    email: string;
};

/* ---------- Icons ---------- */

function MailCheckIcon() {
    return (
        <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
            />
            <path d="M9 13l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} />
        </svg>
    );
}

function ArrowRight() {
    return (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
        </svg>
    );
}

/* ---------- Step indicator ---------- */

function StepIndicator() {
    return (
        <div className="flex items-center gap-2 mb-6">
            {VERIFY_EMAIL_STEPS.map((step, i) => (
                <div key={step.label} className="flex items-center gap-2 flex-1">
                    <div className="flex items-center gap-2 min-w-0">
                        <span
                            className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 transition-colors ${step.done
                                    ? "bg-emerald-500 text-white"
                                    : step.active
                                        ? "bg-blue-600 text-white"
                                        : "bg-slate-200 text-slate-500"
                                }`}
                        >
                            {step.done ? (
                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} />
                                </svg>
                            ) : (
                                i + 1
                            )}
                        </span>
                        <span
                            className={`text-[11px] font-semibold truncate hidden sm:inline ${step.done
                                    ? "text-emerald-600"
                                    : step.active
                                        ? "text-blue-600"
                                        : "text-slate-400"
                                }`}
                        >
                            {step.label}
                        </span>
                    </div>
                    {i < VERIFY_EMAIL_STEPS.length - 1 && (
                        <span
                            className={`flex-1 h-px min-w-2 ${step.done ? "bg-emerald-200" : "bg-slate-200"
                                }`}
                        />
                    )}
                </div>
            ))}
        </div>
    );
}

/* ---------- Main ---------- */

export default function VerifyEmailCard({ email }: Props) {
    const [resendCount, setResendCount] = useState(0);
    const [elapsed, setElapsed] = useState(0);

    // Track how long the user has been on this page — drives the "still waiting" hint
    useEffect(() => {
        const t = setInterval(() => setElapsed((s) => s + 1), 1000);
        return () => clearInterval(t);
    }, []);

    async function handleResend() {
        // Simulated resend — replace with your real endpoint.
        console.log("Resending verification email to:", email);
        await new Promise((res) => setTimeout(res, 800));
        setResendCount((n) => n + 1);
    }

    const showWaitingHint = elapsed >= 60;

    return (
        <div
            className="
        relative rounded-4xl overflow-hidden
        animate-auth-rise
        w-full max-w-md mx-auto
      "
            style={{ animationDelay: "0.1s" }}
        >
            {/* LAYER 1 — distortion */}
            <div
                aria-hidden="true"
                className="absolute inset-0 rounded-4xl"
                style={{
                    backdropFilter: "url(#liquid-glass-distortion) blur(2px) saturate(1.4)",
                    WebkitBackdropFilter: "blur(18px) saturate(1.4)",
                }}
            />
            {/* LAYER 2 — tint */}
            <div aria-hidden="true" className="absolute inset-0 rounded-4xl bg-white/60" />
            {/* LAYER 3 — content */}
            <div
                className="
          relative rounded-4xl
          border border-white/70
          ring-1 ring-slate-900/5
          shadow-[0_1px_1px_rgba(255,255,255,0.7)_inset,0_-1px_2px_rgba(15,23,42,0.06)_inset,0_30px_60px_-20px_rgba(15,23,42,0.18),0_4px_12px_-4px_rgba(15,23,42,0.08)]
          p-6 sm:p-8 lg:p-10
        "
            >
                {/* Specular top glint */}
                <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-8 top-0 h-[1.5px] rounded-full bg-linear-to-r from-transparent via-white to-transparent opacity-95"
                />
                <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-10 top-0 h-8 rounded-full bg-linear-to-b from-white/50 to-transparent blur-sm"
                />

                {/* Brand */}
                <div className="flex items-center gap-2.5 mb-6">
                    <Link href="/" className="flex items-center gap-2.5 group">
                        <Image
                            alt="PeopleHub Logo"
                            className="h-8 w-8 object-contain transform group-hover:scale-105 transition-transform"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhwYK06kCqRIIgkTvfhja_Rm32aYS9R97-hnSaE4dE9dpBDl8HFyEO0aOc2jWcMouvNIZvLHNavCAV98aCeU6spd-tyMLDlDNFLuG3Y3qjw6a5FpGZWSevxhNZf10fkhpX140cvew0BsOfkh5cVUuTjDEZ6a4fsQ_uS_6zf4mlS5Ko7HiiwUDbSJsvmfWTXRZKXmBfr3W1mV-k_al3sUFwO_AmmYAw8EBDCEsTE4Wje71uDFyigUqF1DA1oAuWD2GuE4Y"
                            width={32}
                            height={32}
                            unoptimized
                        />
                        <span className="text-base sm:text-lg font-extrabold tracking-tight text-slate-900">
                            PeopleHub
                        </span>
                    </Link>
                </div>

                {/* Steps */}
                <StepIndicator />

                {/* Icon */}
                <div className="flex justify-center mb-5">
                    <div className="relative">
                        <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                            <MailCheckIcon />
                        </div>
                        {/* Soft pulse ring */}
                        <span
                            aria-hidden="true"
                            className="absolute inset-0 rounded-full ring-4 ring-blue-100/60 animate-pulse"
                        />
                    </div>
                </div>

                {/* Heading */}
                <div className="text-center mb-6">
                    <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                        Check your inbox.
                    </h1>
                    <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                        We sent a verification link to
                    </p>
                    <p className="mt-1 text-sm font-bold text-slate-900 break-all">
                        {email}
                    </p>
                </div>

                {/* Primary actions */}
                <div className="space-y-3">
                    {/* Open email provider (deep links) */}
                    <div className="grid grid-cols-2 gap-2.5">
                        <a
                            href="https://mail.google.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                relative inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full overflow-hidden
                text-xs sm:text-sm font-semibold text-slate-800
                transition-transform active:scale-[0.98]
              "
                        >
                            <span
                                aria-hidden="true"
                                className="absolute inset-0 rounded-full"
                                style={{
                                    backdropFilter:
                                        "url(#liquid-glass-distortion) blur(2px) saturate(1.4)",
                                    WebkitBackdropFilter: "blur(14px) saturate(1.4)",
                                }}
                            />
                            <span
                                aria-hidden="true"
                                className="absolute inset-0 rounded-full bg-white/60 border border-white/70 ring-1 ring-slate-900/5"
                            />
                            <span className="relative flex items-center gap-1.5">
                                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                </svg>
                                <span>Open Gmail</span>
                            </span>
                        </a>
                        <a
                            href="https://outlook.live.com/mail"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                relative inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full overflow-hidden
                text-xs sm:text-sm font-semibold text-slate-800
                transition-transform active:scale-[0.98]
              "
                        >
                            <span
                                aria-hidden="true"
                                className="absolute inset-0 rounded-full"
                                style={{
                                    backdropFilter:
                                        "url(#liquid-glass-distortion) blur(2px) saturate(1.4)",
                                    WebkitBackdropFilter: "blur(14px) saturate(1.4)",
                                }}
                            />
                            <span
                                aria-hidden="true"
                                className="absolute inset-0 rounded-full bg-white/60 border border-white/70 ring-1 ring-slate-900/5"
                            />
                            <span className="relative flex items-center gap-1.5">
                                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fill="#0078D4" d="M22 6l-10 7L2 6V4h20v2z" />
                                    <path fill="#0078D4" d="M2 6v12a2 2 0 002 2h16a2 2 0 002-2V6l-10 7L2 6z" opacity=".7" />
                                </svg>
                                <span>Open Outlook</span>
                            </span>
                        </a>
                    </div>

                    {/* Divider */}
                    <div className="relative py-1">
                        <div className="absolute inset-0 flex items-center" aria-hidden="true">
                            <div className="w-full border-t border-slate-200/70" />
                        </div>
                        <div className="relative flex justify-center">
                            <span className="bg-white/60 backdrop-blur-md px-3 text-[10px] uppercase tracking-wider font-semibold text-slate-400">
                                Didn&apos;t get it?
                            </span>
                        </div>
                    </div>

                    {/* Resend timer */}
                    <ResendTimer onResend={handleResend} seconds={30} />

                    {resendCount > 0 && (
                        <p className="mt-3 text-center text-[11px] sm:text-xs text-emerald-600 font-semibold animate-cookie-fade">
                            Verification email resent. Please check your inbox again.
                        </p>
                    )}
                </div>

                {/* Waiting hint — appears after 60s on the page */}
                {showWaitingHint && resendCount === 0 && (
                    <p className="mt-5 text-center text-[11px] text-slate-400 leading-relaxed animate-cookie-fade">
                        Still waiting? Try clicking <strong className="text-slate-600">Resend code</strong>{" "}
                        above, or check your spam folder.
                    </p>
                )}

                {/* Change email / back to signin */}
                <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm">
                    <Link
                        href="/signup"
                        className="font-semibold text-slate-600 hover:text-slate-900 transition-colors"
                    >
                        Wrong email? Sign up again
                    </Link>
                    <span aria-hidden="true" className="hidden sm:inline text-slate-300">·</span>
                    <Link
                        href="/signin"
                        className="inline-flex items-center gap-1 font-bold text-blue-600 hover:text-blue-700 transition-colors"
                    >
                        Back to sign in
                        <ArrowRight />
                    </Link>
                </div>
            </div>
        </div>
    );
}