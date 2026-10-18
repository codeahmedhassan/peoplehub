"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SetupProgress from "./SetupProgress";
import StepCompany, { type CompanyData } from "./StepCompany";
import StepTeamSize from "./StepTeamSize";
import StepTheme, { type ThemeData } from "./StepTheme";
import SetupComplete from "./SetupComplete";
import { SETUP_TOTAL_STEPS, workspaceApi } from "@/lib/constants";
import { ApiError } from "@/lib/api";

type FinishState = "form" | "submitting" | "complete";

function ArrowRight() {
    return (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
        </svg>
    );
}

function ArrowLeft() {
    return (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M10 19l-7-7m0 0l7-7m-7 7h18" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
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

/* Deterministic initial modules map */
const INITIAL_MODULES: Record<string, boolean> = {
    employees: true,
    attendance: true,
    payroll: false,
    recruitment: false,
};

export default function SetupWorkspaceShell() {
    const [step, setStep] = useState(0);
    const [finishState, setFinishState] = useState<FinishState>("form");
    const [error, setError] = useState<string | null>(null);

    // Form state
    const [company, setCompany] = useState<CompanyData>({
        name: "",
        industry: "",
        timezone: "",
    });
    const [teamSize, setTeamSize] = useState("");
    const [theme, setTheme] = useState<ThemeData>({
        accent: "blue",
        modules: INITIAL_MODULES,
    });

    // Validation per step
    const canProceed = (() => {
        if (step === 0)
            return company.name.trim().length > 0 && company.industry && company.timezone;
        if (step === 1) return teamSize !== "";
        return true; // step 2 (theme) always allows finish
    })();

    function next() {
        if (!canProceed) return;
        if (step < SETUP_TOTAL_STEPS - 1) {
            setStep(step + 1);
        } else {
            void finish();
        }
    }

    function back() {
        if (step > 0) setStep(step - 1);
    }

    function skip() {
        if (step < SETUP_TOTAL_STEPS - 1) setStep(step + 1);
        else void finish();
    }

    async function finish() {
        setError(null);
        setFinishState("submitting");
        try {
            await workspaceApi.setup({
                company: {
                    name: company.name.trim(),
                    industry: company.industry,
                    timezone: company.timezone,
                },
                teamSize,
                theme: {
                    accent: theme.accent,
                    modules: {
                        employees: Boolean(theme.modules.employees),
                        attendance: Boolean(theme.modules.attendance),
                        payroll: Boolean(theme.modules.payroll),
                        recruitment: Boolean(theme.modules.recruitment),
                    },
                },
            });
            setFinishState("complete");
        } catch (err) {
            setFinishState("form");
            setError(
                err instanceof ApiError
                    ? err.message
                    : "Something went wrong. Please try again."
            );
        }
    }

    return (
        <div
            className="
        relative rounded-4xl overflow-hidden
        animate-auth-rise
        w-full max-w-xl mx-auto
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
                {/* Specular glint */}
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

                {finishState === "complete" ? (
                    <SetupComplete company={company} teamSize={teamSize} />
                ) : (
                    <>
                        {/* Progress */}
                        <SetupProgress currentStep={step} />

                        {/* Step content */}
                        <div key={step} className="animate-cookie-fade">
                            {step === 0 && <StepCompany value={company} onChange={setCompany} />}
                            {step === 1 && <StepTeamSize value={teamSize} onChange={setTeamSize} />}
                            {step === 2 && <StepTheme value={theme} onChange={setTheme} />}
                        </div>

                        {error && (
                            <p className="mt-4 text-sm text-rose-600 text-center" role="alert">
                                {error}
                            </p>
                        )}

                        {/* Navigation */}
                        <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col-reverse sm:flex-row sm:items-center gap-2.5 sm:gap-3">
                            {step > 0 ? (
                                <button
                                    type="button"
                                    onClick={back}
                                    disabled={finishState === "submitting"}
                                    className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full text-sm font-semibold text-slate-600 hover:text-slate-900 hover:bg-white/60 transition-colors disabled:opacity-60"
                                >
                                    <ArrowLeft />
                                    <span>Back</span>
                                </button>
                            ) : (
                                <Link
                                    href="/"
                                    className="inline-flex items-center justify-center px-4 py-3 rounded-full text-sm font-semibold text-slate-500 hover:text-slate-900 hover:bg-white/60 transition-colors"
                                >
                                    Cancel
                                </Link>
                            )}

                            <div className="flex-1 flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-2.5">
                                {/* Skip — visible on invite + theme steps, or when they can't proceed but want to move on */}
                                {step === 2 && (
                                    <button
                                        type="button"
                                        onClick={skip}
                                        disabled={finishState === "submitting"}
                                        className="inline-flex items-center justify-center px-4 py-3 rounded-full text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors disabled:opacity-60"
                                    >
                                        Skip for now
                                    </button>
                                )}

                                {/* Next / Finish */}
                                <button
                                    type="button"
                                    onClick={next}
                                    disabled={!canProceed || finishState === "submitting"}
                                    className={`
                    relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full overflow-hidden
                    text-white text-sm font-semibold
                    transition-transform
                    ${!canProceed || finishState === "submitting"
                                            ? "opacity-60 cursor-not-allowed"
                                            : "active:scale-[0.98]"
                                        }
                  `}
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
                                        {finishState === "submitting" ? (
                                            <>
                                                <Spinner />
                                                <span>Setting up…</span>
                                            </>
                                        ) : step === SETUP_TOTAL_STEPS - 1 ? (
                                            <>
                                                <span>Finish setup</span>
                                                <ArrowRight />
                                            </>
                                        ) : (
                                            <>
                                                <span>Continue</span>
                                                <ArrowRight />
                                            </>
                                        )}
                                    </span>
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}