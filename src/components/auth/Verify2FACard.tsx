"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import OtpInput from "./OtpInput";
import ResendTimer from "./ResendTimer";
import { OTP_CHANNELS, type OtpChannel } from "@/lib/constants";

type VerificationState = "idle" | "verifying" | "error" | "success";

type Props = {
    channel?: OtpChannel;
    /** Masked destination shown under the heading, e.g., "j••••@acme.com" or "+1 ••• ••• 4567" */
    destination?: string;
    /** Called when verification succeeds. */
    onSuccess?: () => void;
};

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

export default function Verify2FACard({
    channel = "email",
    destination = "j••••@acme.com",
    onSuccess,
}: Props) {
    const [state, setState] = useState<VerificationState>("idle");
    const [attemptsLeft, setAttemptsLeft] = useState(3);
    const [resendCount, setResendCount] = useState(0);
    const [otpKey, setOtpKey] = useState(0); // remounts the OtpInput to clear it

    const channelInfo = OTP_CHANNELS[channel];

    async function handleComplete(code: string) {
        setState("verifying");

        // Simulated verification — replace with your real 2FA endpoint.
        // For demo: "123456" succeeds, everything else fails.
        console.log("Verifying 2FA code:", code);
        await new Promise((res) => setTimeout(res, 900));

        if (code === "123456") {
            setState("success");
            onSuccess?.();
            // Redirect would happen here in a real app
        } else {
            const remaining = attemptsLeft - 1;
            setAttemptsLeft(remaining);
            setState("error");
            // Reset the OTP field after the shake
            setTimeout(() => {
                setOtpKey((k) => k + 1);
                setState("idle");
            }, 500);
        }
    }

    async function handleResend() {
        // Simulated resend — replace with your real endpoint.
        console.log("Resending 2FA code via", channel);
        await new Promise((res) => setTimeout(res, 800));
        setResendCount((n) => n + 1);
        setOtpKey((k) => k + 1);
        setState("idle");
    }

    const isLocked = attemptsLeft <= 0;

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
                <div className="flex items-center gap-2.5 mb-6 sm:mb-8">
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

                {state === "success" ? (
                    /* ---------- Success view ---------- */
                    <div className="animate-auth-rise text-center py-4 sm:py-6">
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

                        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                            You&apos;re verified.
                        </h1>
                        <p className="mt-3 text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
                            Signing you in — hold tight. If you&apos;re not redirected in a few seconds,
                            continue manually.
                        </p>

                        <div className="mt-6">
                            <Link
                                href="/"
                                className="
                  relative inline-flex items-center gap-2 px-6 py-3 rounded-full overflow-hidden
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
                                    Continue to dashboard
                                    <ArrowRight />
                                </span>
                            </Link>
                        </div>
                    </div>
                ) : (
                    /* ---------- Verify view ---------- */
                    <>
                        {/* Heading */}
                        <div className="mb-6 sm:mb-7">
                            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                                Enter your verification code
                            </h1>
                            <p className="mt-2 text-sm text-slate-600">
                                {channelInfo.description}
                            </p>
                            <p className="mt-1 text-sm font-semibold text-slate-900 break-all">
                                {destination}
                            </p>
                        </div>

                        {/* OTP input */}
                        <OtpInput
                            key={otpKey}
                            autoSubmit
                            disabled={state === "verifying" || isLocked}
                            error={state === "error"}
                            success={false}          // ← inside the non-success branch, always false
                            onComplete={handleComplete}
                        />

                        {/* Status / error */}
                        {state === "verifying" && (
                            <p className="mt-3 text-xs text-slate-500 flex items-center justify-center gap-1.5 animate-cookie-fade">
                                <Spinner />
                                Verifying your code…
                            </p>
                        )}

                        {state === "error" && !isLocked && (
                            <p className="mt-3 text-xs text-rose-600 font-semibold text-center animate-cookie-fade">
                                Incorrect code. {attemptsLeft}{" "}
                                {attemptsLeft === 1 ? "attempt" : "attempts"} remaining.
                            </p>
                        )}

                        {isLocked && (
                            <div className="mt-4 p-3 rounded-2xl bg-rose-50 border border-rose-100 text-xs text-rose-600 leading-relaxed">
                                Too many incorrect attempts. For your security, this session has been
                                locked. Please{" "}
                                <Link href="/signin" className="font-bold underline">
                                    sign in again
                                </Link>
                                .
                            </div>
                        )}

                        {/* Resend + timer */}
                        {!isLocked && (
                            <div className="mt-6 pt-5 border-t border-slate-100">
                                <ResendTimer onResend={handleResend} disabled={state === "verifying"} />

                                {resendCount > 0 && (
                                    <p className="mt-3 text-[11px] sm:text-xs text-emerald-600 font-semibold text-center animate-cookie-fade">
                                        A new code has been sent.
                                    </p>
                                )}
                            </div>
                        )}

                        {/* Alternate options */}
                        <div className="mt-6 flex flex-col items-center gap-2 text-xs sm:text-sm">
                            {channel !== "authenticator" && (
                                <button
                                    type="button"
                                    className="text-slate-500 hover:text-slate-900 transition-colors font-medium"
                                >
                                    Use authenticator app instead
                                </button>
                            )}
                            <Link
                                href="/signin"
                                className="font-bold text-blue-600 hover:text-blue-700 transition-colors"
                            >
                                Back to sign in
                            </Link>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}