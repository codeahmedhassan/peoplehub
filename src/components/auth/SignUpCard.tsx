"use client";

import Link from "next/link";
import Image from "next/image";
import SignUpForm from "./SignUpForm";
import SocialSignIn from "./SocialSignIn";
import { SIGNUP_STEPS } from "@/lib/constants";

function StepIndicator() {
    return (
        <div className="flex items-center gap-2 mb-6">
            {SIGNUP_STEPS.map((step, i) => (
                <div key={step.label} className="flex items-center gap-2 flex-1">
                    <div className="flex items-center gap-2 min-w-0">
                        <span
                            className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 transition-colors ${step.active
                                ? "bg-blue-600 text-white"
                                : "bg-slate-200 text-slate-500"
                                }`}
                        >
                            {i + 1}
                        </span>
                        <span
                            className={`text-[11px] font-semibold truncate hidden sm:inline ${step.active ? "text-blue-600" : "text-slate-400"
                                }`}
                        >
                            {step.label}
                        </span>
                    </div>
                    {i < SIGNUP_STEPS.length - 1 && (
                        <span className="flex-1 h-px bg-slate-200 min-w-2" />
                    )}
                </div>
            ))}
        </div>
    );
}

export default function SignUpCard() {
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

                {/* Progress */}
                <StepIndicator />

                {/* Heading */}
                <div className="mb-6">
                    <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                        Create your account.
                    </h1>
                    <p className="mt-2 text-sm text-slate-600">
                        Free for 14 days. No credit card. Cancel anytime.
                    </p>
                </div>

                {/* Social sign-up */}
                <div className="mb-5">
                    <SocialSignIn />
                </div>

                {/* Form */}
                <SignUpForm />

                {/* Footer link */}
                <p className="mt-6 text-center text-xs sm:text-sm text-slate-500">
                    Already have an account?{" "}
                    <Link
                        href="/signin"
                        className="font-bold text-blue-600 hover:text-blue-700 transition-colors"
                    >
                        Sign in
                    </Link>
                </p>
            </div>
        </div>
    );
}