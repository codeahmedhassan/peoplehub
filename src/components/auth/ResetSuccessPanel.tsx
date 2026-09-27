"use client";

import Link from "next/link";
import { RESET_SUCCESS_ACTIONS } from "@/lib/constants";

function ArrowRight() {
    return (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
        </svg>
    );
}

export default function ResetSuccessPanel() {
    return (
        <div className="animate-auth-rise text-center">
            {/* Success icon with pulse ring */}
            <div className="flex justify-center mb-5">
                <div className="relative">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                        <svg
                            className="w-7 h-7 sm:w-8 sm:h-8"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path
                                d="M5 13l4 4L19 7"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2.5}
                            />
                        </svg>
                    </div>
                    <span
                        aria-hidden="true"
                        className="absolute inset-0 rounded-full ring-4 ring-emerald-100/60 animate-pulse"
                    />
                </div>
            </div>

            {/* Heading */}
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Password updated.
            </h1>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
                Your new password is active. For your security, we signed you out of all
                other devices. Sign in again to continue.
            </p>

            {/* Actions */}
            <div className="mt-7 space-y-3">
                {RESET_SUCCESS_ACTIONS.filter((a) => a.primary).map((action) => (
                    <Link
                        key={action.href}
                        href={action.href}
                        className="
              relative inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full overflow-hidden
              w-full
              text-white text-sm font-semibold
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
                            className="absolute inset-0 rounded-full bg-slate-950/90"
                        />
                        <span className="relative flex items-center gap-2">
                            <span
                                aria-hidden="true"
                                className="pointer-events-none absolute inset-x-6 top-0 h-[1.5px] rounded-full bg-linear-to-r from-transparent via-white/60 to-transparent"
                            />
                            {action.label}
                            <ArrowRight />
                        </span>
                    </Link>
                ))}
            </div>

            {/* Trust footer */}
            <ul className="mt-6 space-y-2 text-left max-w-xs mx-auto">
                {[
                    "New password hashed with bcrypt",
                    "All other sessions revoked",
                    "Full audit log entry created",
                ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[11px] text-slate-500">
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
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}