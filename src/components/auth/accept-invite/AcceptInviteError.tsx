"use client";

import Link from "next/link";

type Props = {
    message: string;
};

export default function AcceptInviteError({ message }: Props) {
    return (
        <div className="relative rounded-4xl overflow-hidden w-full max-w-md mx-auto animate-auth-rise">
            <div
                aria-hidden="true"
                className="absolute inset-0 rounded-4xl"
                style={{
                    backdropFilter: "url(#liquid-glass-distortion) blur(2px) saturate(1.4)",
                    WebkitBackdropFilter: "blur(18px) saturate(1.4)",
                }}
            />
            <div aria-hidden="true" className="absolute inset-0 rounded-4xl bg-white/60" />
            <div
                className="
          relative rounded-4xl
          border border-white/70 ring-1 ring-slate-900/5
          shadow-[0_1px_1px_rgba(255,255,255,0.7)_inset,0_-1px_2px_rgba(15,23,42,0.06)_inset,0_30px_60px_-20px_rgba(15,23,42,0.18),0_4px_12px_-4px_rgba(15,23,42,0.08)]
          p-6 sm:p-8 lg:p-10 text-center
        "
            >
                {/* Icon */}
                <div className="flex justify-center mb-5">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center">
                        <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path
                                d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                            />
                        </svg>
                    </div>
                </div>

                {/* Heading */}
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                    Invalid invite.
                </h1>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
                    {message}
                </p>
                <p className="mt-2 text-xs text-slate-500 leading-relaxed max-w-sm mx-auto">
                    Invite links expire after 7 days. Ask your admin to send a fresh one.
                </p>

                {/* Actions */}
                <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5">
                    <Link
                        href="/signin"
                        className="
              relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full overflow-hidden
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
                            Back to sign in
                        </span>
                    </Link>
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white border border-slate-200 text-slate-800 text-sm font-semibold hover:bg-slate-50 transition-colors"
                    >
                        Contact support
                    </Link>
                </div>
            </div>
        </div>
    );
}