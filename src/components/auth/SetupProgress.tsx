"use client";

import { SETUP_STEPS, SETUP_TOTAL_STEPS } from "@/lib/constants";

type Props = {
    currentStep: number; // 0-indexed
};

export default function SetupProgress({ currentStep }: Props) {
    const progressPercent = ((currentStep + 1) / SETUP_TOTAL_STEPS) * 100;

    return (
        <div className="mb-7">
            {/* Labels + step numbers */}
            <div className="flex items-center gap-2 mb-3">
                {SETUP_STEPS.map((step, i) => {
                    const isComplete = i < currentStep;
                    const isActive = i === currentStep;
                    return (
                        <div key={step.id} className="flex items-center gap-2 flex-1">
                            <div className="flex items-center gap-2 min-w-0">
                                <span
                                    className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 transition-colors ${isComplete
                                        ? "bg-emerald-500 text-white"
                                        : isActive
                                            ? "bg-blue-600 text-white"
                                            : "bg-slate-200 text-slate-500"
                                        }`}
                                    aria-current={isActive ? "step" : undefined}
                                >
                                    {isComplete ? (
                                        <svg
                                            className="w-3.5 h-3.5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                        >
                                            <path
                                                d="M5 13l4 4L19 7"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={3}
                                            />
                                        </svg>
                                    ) : (
                                        i + 1
                                    )}
                                </span>
                                <span
                                    className={`text-[11px] font-semibold truncate hidden sm:inline transition-colors ${isComplete
                                        ? "text-emerald-600"
                                        : isActive
                                            ? "text-blue-600"
                                            : "text-slate-400"
                                        }`}
                                >
                                    {step.label}
                                </span>
                            </div>
                            {i < SETUP_STEPS.length - 1 && (
                                <span
                                    className={`flex-1 h-px min-w-2 transition-colors ${isComplete ? "bg-emerald-200" : "bg-slate-200"
                                        }`}
                                />
                            )}
                        </div>
                    );
                })}
            </div>

            {/* Progress bar */}
            <div
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={Math.round(progressPercent)}
                aria-label="Setup progress"
                className="h-1 rounded-full bg-slate-100 overflow-hidden"
            >
                <div
                    className="h-full rounded-full bg-linear-to-r from-blue-500 to-indigo-500 transition-[width] duration-500 ease-out"
                    style={{ width: `${progressPercent}%` }}
                />
            </div>

            <p className="mt-2 text-[11px] text-slate-400 font-medium">
                Step {currentStep + 1} of {SETUP_TOTAL_STEPS}
            </p>
        </div>
    );
}