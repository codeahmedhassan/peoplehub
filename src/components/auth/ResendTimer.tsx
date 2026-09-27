"use client";

import { useEffect, useState } from "react";
import { OTP_RESEND_SECONDS } from "@/lib/constants";

type Props = {
    /** Total seconds before resend is allowed. */
    seconds?: number;
    /** Called when the user clicks resend. Return a promise to keep the button in loading state. */
    onResend: () => Promise<void> | void;
    /** Disable the timer externally (e.g., while the parent is submitting). */
    disabled?: boolean;
};

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

export default function ResendTimer({
    seconds = OTP_RESEND_SECONDS,
    onResend,
    disabled = false,
}: Props) {
    const [remaining, setRemaining] = useState(seconds);
    const [resending, setResending] = useState(false);

    // Countdown
    useEffect(() => {
        if (remaining <= 0) return;
        const t = setTimeout(() => setRemaining((r) => r - 1), 1000);
        return () => clearTimeout(t);
    }, [remaining]);

    async function handleResend() {
        if (remaining > 0 || resending || disabled) return;
        setResending(true);
        try {
            await onResend();
            // Restart the timer after a successful resend
            setRemaining(seconds);
        } finally {
            setResending(false);
        }
    }

    // Progress ring values
    const pct = (remaining / seconds) * 100;
    const dash = 2 * Math.PI * 9; // radius 9
    const offset = dash - (pct / 100) * dash;

    const canResend = remaining <= 0 && !resending && !disabled;

    return (
        <div className="flex items-center justify-center gap-3 text-xs sm:text-sm">
            {remaining > 0 ? (
                <>
                    {/* Countdown ring */}
                    <div className="relative w-6 h-6 shrink-0">
                        <svg className="w-full h-full -rotate-90" viewBox="0 0 24 24" aria-hidden="true">
                            <circle
                                cx="12"
                                cy="12"
                                r="9"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                className="text-slate-200"
                            />
                            <circle
                                cx="12"
                                cy="12"
                                r="9"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeDasharray={dash}
                                strokeDashoffset={offset}
                                className="text-blue-500 transition-[stroke-dashoffset] duration-1000 ease-linear"
                            />
                        </svg>
                    </div>

                    <span className="text-slate-500">
                        Resend available in{" "}
                        <span className="font-bold text-slate-700 tabular-nums">
                            {remaining}s
                        </span>
                    </span>
                </>
            ) : (
                <button
                    type="button"
                    onClick={handleResend}
                    disabled={!canResend}
                    className={`
            inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold
            transition-all
            ${canResend
                            ? "bg-blue-600 text-white hover:bg-blue-700 shadow-sm"
                            : "bg-slate-100 text-slate-400 cursor-not-allowed"
                        }
          `}
                >
                    {resending ? (
                        <>
                            <Spinner />
                            <span>Sending…</span>
                        </>
                    ) : (
                        <>
                            <svg
                                className="w-3.5 h-3.5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path
                                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                />
                            </svg>
                            <span>Resend code</span>
                        </>
                    )}
                </button>
            )}
        </div>
    );
}