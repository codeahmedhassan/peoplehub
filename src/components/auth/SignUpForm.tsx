"use client";

import { useState } from "react";
import PasswordStrength, { scorePassword } from "./PasswordStrength";
import {
    SIGNUP_COMPANY_SIZES,
    SIGNUP_ROLES,
} from "@/lib/constants";

function UserIcon() {
    return (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
            />
        </svg>
    );
}

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

function BuildingIcon() {
    return (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
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
            <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
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

const inputClass =
    "w-full pl-11 pr-4 py-3 rounded-2xl bg-white/70 backdrop-blur-md border border-white/70 ring-1 ring-slate-900/5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100/60 transition-all";

export default function SignUpForm() {
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    const passwordsMatch = password.length > 0 && password === confirm;
    const passwordsMismatch = confirm.length > 0 && password !== confirm;
    const canSubmit =
        scorePassword(password) !== "weak" && passwordsMatch && !submitting;

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!canSubmit) return;
        setSubmitting(true);
        // Simulated submission — replace with your real signup call.
        const payload = Object.fromEntries(new FormData(e.currentTarget).entries());
        console.log("Signup payload:", payload);
        await new Promise((res) => setTimeout(res, 900));
        setSubmitting(false);
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            {/* Row 1: Full name */}
            <div>
                <label htmlFor="fullName" className="block text-xs sm:text-sm font-semibold text-slate-700 mb-2">
                    Full name
                </label>
                <div className="relative">
                    <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                        <UserIcon />
                    </span>
                    <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        required
                        autoComplete="name"
                        placeholder="Jane Cooper"
                        className={inputClass}
                    />
                </div>
            </div>

            {/* Row 2: Work email */}
            <div>
                <label htmlFor="email" className="block text-xs sm:text-sm font-semibold text-slate-700 mb-2">
                    Work email
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
                        placeholder="jane@company.com"
                        className={inputClass}
                    />
                </div>
            </div>

            {/* Row 3: Company + role (side by side on sm+) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="company" className="block text-xs sm:text-sm font-semibold text-slate-700 mb-2">
                        Company
                    </label>
                    <div className="relative">
                        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                            <BuildingIcon />
                        </span>
                        <input
                            id="company"
                            name="company"
                            type="text"
                            required
                            autoComplete="organization"
                            placeholder="Acme Inc."
                            className={inputClass}
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="companySize" className="block text-xs sm:text-sm font-semibold text-slate-700 mb-2">
                        Company size
                    </label>
                    <select
                        id="companySize"
                        name="companySize"
                        required
                        defaultValue=""
                        className="w-full px-4 py-3 rounded-2xl bg-white/70 backdrop-blur-md border border-white/70 ring-1 ring-slate-900/5 text-sm text-slate-900 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100/60 transition-all appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%2394a3b8%22 stroke-width=%222%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22><polyline points=%226 9 12 15 18 9%22/></svg>')] bg-size-[16px_16px] bg-position-[right_1rem_center] bg-no-repeat"
                    >
                        <option value="" disabled>
                            Select a size
                        </option>
                        {SIGNUP_COMPANY_SIZES.map((s) => (
                            <option key={s} value={s}>
                                {s}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Row 4: Role */}
            <div>
                <label htmlFor="role" className="block text-xs sm:text-sm font-semibold text-slate-700 mb-2">
                    Your role
                </label>
                <select
                    id="role"
                    name="role"
                    required
                    defaultValue=""
                    className="w-full px-4 py-3 rounded-2xl bg-white/70 backdrop-blur-md border border-white/70 ring-1 ring-slate-900/5 text-sm text-slate-900 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100/60 transition-all appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%2394a3b8%22 stroke-width=%222%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22><polyline points=%226 9 12 15 18 9%22/></svg>')] bg-size-[16px_16px] bg-position-[right_1rem_center] bg-no-repeat"
                >
                    <option value="" disabled>
                        Select your role
                    </option>
                    {SIGNUP_ROLES.map((r) => (
                        <option key={r} value={r}>
                            {r}
                        </option>
                    ))}
                </select>
            </div>

            {/* Row 5: Password */}
            <div>
                <label htmlFor="password" className="block text-xs sm:text-sm font-semibold text-slate-700 mb-2">
                    Password
                </label>
                <div className="relative">
                    <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                        <LockIcon />
                    </span>
                    <input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        required
                        autoComplete="new-password"
                        placeholder="Create a password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={`${inputClass} pr-12`}
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
                <PasswordStrength value={password} />
            </div>

            {/* Row 6: Confirm password */}
            <div>
                <label htmlFor="confirm" className="block text-xs sm:text-sm font-semibold text-slate-700 mb-2">
                    Confirm password
                </label>
                <div className="relative">
                    <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                        <LockIcon />
                    </span>
                    <input
                        id="confirm"
                        name="confirm"
                        type={showConfirm ? "text" : "password"}
                        required
                        autoComplete="new-password"
                        placeholder="Re-enter your password"
                        value={confirm}
                        onChange={(e) => setConfirm(e.target.value)}
                        className={`${inputClass} pr-12 ${passwordsMismatch ? "border-rose-300 ring-rose-100" : ""
                            } ${passwordsMatch ? "border-emerald-300 ring-emerald-100" : ""}`}
                    />
                    <button
                        type="button"
                        onClick={() => setShowConfirm((v) => !v)}
                        aria-label={showConfirm ? "Hide password" : "Show password"}
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100/70 transition-colors flex items-center justify-center"
                    >
                        <EyeIcon open={showConfirm} />
                    </button>
                </div>
                {passwordsMismatch && (
                    <p className="mt-2 text-[11px] text-rose-600">Passwords don&apos;t match.</p>
                )}
                {passwordsMatch && (
                    <p className="mt-2 text-[11px] text-emerald-600">Passwords match.</p>
                )}
            </div>

            {/* Terms */}
            <label className="flex items-start gap-3 cursor-pointer select-none pt-1">
                <input
                    type="checkbox"
                    name="terms"
                    required
                    className="mt-0.5 w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 focus:ring-offset-0"
                />
                <span className="text-[12px] text-slate-500 leading-relaxed">
                    I agree to the{" "}
                    <a href="#terms" className="font-semibold text-blue-600 hover:underline">
                        Terms of Service
                    </a>{" "}
                    .
                </span>
            </label>
            <label className="flex items-start gap-3 cursor-pointer select-none pt-1">
                <input
                    type="checkbox"
                    name="terms"
                    required
                    className="mt-0.5 w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 focus:ring-offset-0"
                />
                <span className="text-[12px] text-slate-500 leading-relaxed">
                    I agree to the{" "}
                    <a href="#privacy" className="font-semibold text-blue-600 hover:underline">
                        Privacy Policy
                    </a>
                    .
                </span>
            </label>

            {/* Liquid glass submit button */}
            <button
                type="submit"
                disabled={!canSubmit}
                className="
          relative w-full rounded-full overflow-hidden
          h-12 mt-2
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
                            <span>Creating your account…</span>
                        </>
                    ) : (
                        <>
                            <span>Create free account</span>
                            <ArrowRight />
                        </>
                    )}
                </span>
            </button>

            <p className="text-center text-[11px] text-slate-400 pt-1">
                No credit card required · 14-day free trial · Cancel anytime
            </p>
        </form>
    );
}