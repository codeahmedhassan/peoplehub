"use client";

import { useState } from "react";

function MailIcon() {
    return (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
            />
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

function Spinner() {
    return (
        <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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
    onSubmitted: (email: string) => void;
};

export default function ForgotPasswordForm({ onSubmitted }: Props) {
    const [email, setEmail] = useState("");
    const [submitting, setSubmitting] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!email || submitting) return;
        setSubmitting(true);
        // Simulated submission — replace with your real "send reset email" call.
        console.log("Forgot-password request for:", email);
        await new Promise((res) => setTimeout(res, 900));
        setSubmitting(false);
        onSubmitted(email);
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            <div>
                <label
                    htmlFor="email"
                    className="block text-xs sm:text-sm font-semibold text-slate-700 mb-2"
                >
                    Email address
                </label>
                <div className="relative">
                    <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                        <MailIcon />
                    </span>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        autoFocus
                        placeholder="you@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="
              w-full pl-11 pr-4 py-3 rounded-2xl
              bg-white/70 backdrop-blur-md
              border border-white/70
              ring-1 ring-slate-900/5
              text-sm text-slate-900 placeholder-slate-400
              focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100/60
              transition-all
            "
                    />
                </div>
                <p className="mt-2 text-[11px] sm:text-xs text-slate-500 leading-relaxed">
                    Enter the email you use for PeopleHub and we&apos;ll send you a reset link.
                </p>
            </div>

            {/* Liquid glass submit button */}
            <button
                type="submit"
                disabled={submitting}
                className="
          relative w-full rounded-full overflow-hidden
          h-12 mt-2
          disabled:opacity-70 disabled:cursor-not-allowed
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
                    className="absolute inset-0 rounded-full bg-slate-950/90"
                />
                <span className="relative flex items-center justify-center gap-2 h-full px-6 text-white text-sm font-semibold">
                    <span
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-x-6 top-0 h-[1.5px] rounded-full bg-linear-to-r from-transparent via-white/60 to-transparent"
                    />
                    {submitting ? (
                        <>
                            <Spinner />
                            <span>Sending reset link…</span>
                        </>
                    ) : (
                        <>
                            <span>Send reset link</span>
                            <ArrowRight />
                        </>
                    )}
                </span>
            </button>
        </form>
    );
}