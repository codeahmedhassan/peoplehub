"use client";

import { SETUP_TEAM_SIZES } from "@/lib/constants";

type Props = {
    value: string;
    onChange: (id: string) => void;
};

export default function StepTeamSize({ value, onChange }: Props) {
    return (
        <div className="space-y-5">
            <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                    How big is your team?
                </h1>
                <p className="mt-2 text-sm text-slate-600">
                    We&apos;ll recommend the right plan and set sensible limits for your workspace.
                </p>
            </div>

            {/* Grid of sizes */}
            <div
                role="radiogroup"
                aria-label="Team size"
                className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            >
                {SETUP_TEAM_SIZES.map((size) => {
                    const selected = value === size.id;
                    return (
                        <button
                            key={size.id}
                            type="button"
                            role="radio"
                            aria-checked={selected}
                            onClick={() => onChange(size.id)}
                            className={`
                relative text-left p-4 rounded-2xl border transition-all duration-200
                ${selected
                                    ? "border-blue-400 bg-blue-50/60 ring-2 ring-blue-100/60 shadow-sm"
                                    : "border-slate-200/90 bg-white hover:border-slate-300 hover:bg-slate-50/60"
                                }
              `}
                        >
                            {/* Check indicator */}
                            <span
                                className={`
                  absolute top-3.5 right-3.5 w-5 h-5 rounded-full flex items-center justify-center transition-all
                  ${selected
                                        ? "bg-blue-600 text-white"
                                        : "bg-slate-100 text-slate-300"
                                    }
                `}
                                aria-hidden="true"
                            >
                                {selected && (
                                    <svg
                                        className="w-3 h-3"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            d="M5 13l4 4L19 7"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={3}
                                        />
                                    </svg>
                                )}
                            </span>

                            <p
                                className={`text-base font-bold ${selected ? "text-blue-700" : "text-slate-900"
                                    }`}
                            >
                                {size.label}
                            </p>
                            <p className="mt-0.5 text-xs text-slate-500">{size.sublabel}</p>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}