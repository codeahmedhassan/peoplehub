"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import LiquidGlassFilter from "@/components/ui/LiquidGlassFilter";
import AuthBackground from "@/components/auth/AuthBackground";
import { apiFetch, ApiError } from "@/lib/api";

type Status = "verifying" | "success" | "error";

export default function VerifyEmailConfirmPage() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const token = searchParams.get("token");

    const [status, setStatus] = useState<Status>("verifying");
    const [message, setMessage] = useState("Verifying your email…");

    // Guards against React Strict Mode double-running the effect.
    const ranRef = useRef(false);

    useEffect(() => {
        if (ranRef.current) return;
        ranRef.current = true;

        console.log("[verify-email/confirm] starting, token =", token?.slice(0, 20) + "…");

        if (!token) {
            setStatus("error");
            setMessage("Verification link is missing a token.");
            return;
        }

        (async () => {
            try {
                console.log("[verify-email/confirm] POST /auth/verify-email");
                await apiFetch("/auth/verify-email", {
                    method: "POST",
                    body: { token },
                });
                console.log("[verify-email/confirm] 200 — success");

                setStatus("success");
                setMessage("Email verified. Taking you to your workspace…");

                setTimeout(() => {
                    console.log("[verify-email/confirm] redirecting to /setup-workspace");
                    router.replace("/setup-workspace");

                    // Hard-navigation fallback in case router.replace is a no-op.
                    setTimeout(() => {
                        if (window.location.pathname.startsWith("/verify-email")) {
                            console.warn("[verify-email/confirm] router.replace timed out; hard navigating");
                            window.location.href = "/setup-workspace";
                        }
                    }, 500);
                }, 800);
            } catch (err) {
                console.error("[verify-email/confirm] failed:", err);
                setStatus("error");
                setMessage(
                    err instanceof ApiError
                        ? err.message
                        : "We couldn't verify your email. The link may be expired."
                );
            }
        })();
    }, [token, router]);

    const accent =
        status === "success"
            ? "text-emerald-600"
            : status === "error"
                ? "text-rose-600"
                : "text-blue-600";

    return (
        <main className="relative min-h-svh w-full overflow-hidden">
            <LiquidGlassFilter />
            <AuthBackground />

            <div className="relative z-10 max-w-md mx-auto px-4 pt-32 pb-16">
                <div className="relative rounded-4xl overflow-hidden animate-auth-rise">
                    <div
                        aria-hidden="true"
                        className="absolute inset-0 rounded-4xl"
                        style={{
                            backdropFilter: "url(#liquid-glass-distortion) blur(2px) saturate(1.4)",
                            WebkitBackdropFilter: "blur(18px) saturate(1.4)",
                        }}
                    />
                    <div aria-hidden="true" className="absolute inset-0 rounded-4xl bg-white/60" />

                    <div className="relative rounded-4xl border border-white/70 ring-1 ring-slate-900/5 shadow-[0_30px_60px_-20px_rgba(15,23,42,0.18)] p-8 sm:p-10">
                        <span
                            aria-hidden="true"
                            className="pointer-events-none absolute inset-x-8 top-0 h-[1.5px] rounded-full bg-linear-to-r from-transparent via-white to-transparent"
                        />

                        <div className="flex items-center gap-2.5 mb-8">
                            <Link href="/" className="flex items-center gap-2.5">
                                <Image
                                    alt="PeopleHub Logo"
                                    className="h-8 w-8 object-contain"
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

                        <div className="flex flex-col items-center text-center">
                            {status === "verifying" && (
                                <svg
                                    className="w-10 h-10 animate-spin text-blue-600 mb-6"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeOpacity="0.25" strokeWidth="3" />
                                    <path d="M22 12a10 10 0 0 1-10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                                </svg>
                            )}
                            {status === "success" && (
                                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} />
                                    </svg>
                                </div>
                            )}
                            {status === "error" && (
                                <div className="w-16 h-16 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center mb-6">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 9v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                                    </svg>
                                </div>
                            )}

                            <h1 className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${accent}`}>
                                {status === "verifying" && "Verifying your email"}
                                {status === "success" && "Welcome to PeopleHub"}
                                {status === "error" && "Verification failed"}
                            </h1>

                            <p className="mt-3 text-sm text-slate-600 leading-relaxed">{message}</p>

                            {status === "error" && (
                                <div className="mt-6 flex flex-col sm:flex-row gap-2">
                                    <Link
                                        href="/signup"
                                        className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-slate-950 text-white text-sm font-semibold hover:bg-slate-800 transition-colors"
                                    >
                                        Back to sign up
                                    </Link>
                                    <Link
                                        href="/signin"
                                        className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-white/70 backdrop-blur border border-white/70 ring-1 ring-slate-900/5 text-slate-800 text-sm font-semibold hover:bg-white transition-colors"
                                    >
                                        Go to sign in
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}