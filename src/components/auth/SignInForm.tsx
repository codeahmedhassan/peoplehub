"use client";

import Link from "next/link";
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

function LockIcon() {
    return (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
            />
        </svg>
    );
}

function EyeIcon({ open }: { open: boolean }) {
    return open ? (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
            />
            <path
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
            />
        </svg>
    ) : (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
                d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.542 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
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

export default function SignInForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setSubmitting(true);
        // Simulated submission — replace with your auth call.
        const payload = Object.fromEntries(new FormData(e.currentTarget).entries());
        console.log("Sign-in payload:", payload);
        await new Promise((res) => setTimeout(res, 900));
        setSubmitting(false);
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            {/* Email */}
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
                        placeholder="you@company.com"
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
            </div>

            {/* Password */}
            <div>
                <div className="flex items-center justify-between mb-2">
                    <label htmlFor="password" className="block text-xs sm:text-sm font-semibold text-slate-700">
                        Password
                    </label>
                    <Link
                        href="/forgot-password"
                        className="text-[11px] sm:text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                    >
                        Forgot password?
                    </Link>
                </div>
                <div className="relative">
                    <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                        <LockIcon />
                    </span>
                    <input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        required
                        autoComplete="current-password"
                        placeholder="Enter your password"
                        className="
              w-full pl-11 pr-12 py-3 rounded-2xl
              bg-white/70 backdrop-blur-md
              border border-white/70
              ring-1 ring-slate-900/5
              text-sm text-slate-900 placeholder-slate-400
              focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100/60
              transition-all
            "
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword((v) => !v)}
                        aria-label={showPassword ? "Hide password" : "Show password"}
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100/70 transition-colors flex items-center justify-center"
                    >
                        <EyeIcon open={showPassword} />
                    </button>
                </div>
            </div>

            {/* Remember me */}
            <label className="flex items-center gap-2.5 cursor-pointer select-none">
                <input
                    type="checkbox"
                    name="remember"
                    className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 focus:ring-offset-0"
                />
                <span className="text-xs sm:text-sm text-slate-600">Keep me signed in</span>
            </label>

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
                {/* LAYER 1 — liquid distortion */}
                <span
                    aria-hidden="true"
                    className="absolute inset-0 rounded-full"
                    style={{
                        backdropFilter: "url(#liquid-glass-distortion) blur(2px) saturate(1.4)",
                        WebkitBackdropFilter: "blur(14px) saturate(1.4)",
                    }}
                />
                {/* LAYER 2 — dark tint (keeps button CTA-dark) */}
                <span
                    aria-hidden="true"
                    className="absolute inset-0 rounded-full bg-slate-950/90"
                />
                {/* LAYER 3 — content + speculars */}
                <span className="relative flex items-center justify-center gap-2 h-full px-6 text-white text-sm font-semibold">
                    {/* Top glint */}
                    <span
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-x-6 top-0 h-[1.5px] rounded-full bg-linear-to-r from-transparent via-white/60 to-transparent"
                    />
                    {submitting ? (
                        <>
                            <Spinner />
                            <span>Signing in…</span>
                        </>
                    ) : (
                        <>
                            <span>Sign in</span>
                            <ArrowRight />
                        </>
                    )}
                </span>
            </button>

            {/* Divider */}
            <div className="relative py-1">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="w-full border-t border-slate-200/70" />
                </div>
                <div className="relative flex justify-center">
                    <span className="bg-white/60 backdrop-blur-md px-3 text-[11px] uppercase tracking-wider font-semibold text-slate-400">
                        Or
                    </span>
                </div>
            </div>
        </form>
    );
}