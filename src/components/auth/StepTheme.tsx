"use client";

import { SETUP_ACCENT_OPTIONS, SETUP_MODULES } from "@/lib/constants";

export type ThemeData = {
    accent: string;
    modules: Record<string, boolean>;
};

type Props = {
    value: ThemeData;
    onChange: (next: ThemeData) => void;
};

export default function StepTheme({ value, onChange }: Props) {
    function toggleModule(id: string) {
        onChange({
            ...value,
            modules: { ...value.modules, [id]: !value.modules[id] },
        });
    }

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                    Make it yours.
                </h1>
                <p className="mt-2 text-sm text-slate-600">
                    Pick an accent color and choose which modules to enable. Everything is
                    changeable later.
                </p>
            </div>

            {/* Accent color picker */}
            <div>
                <p className="text-xs sm:text-sm font-semibold text-slate-700 mb-3">
                    Accent color
                </p>
                <div
                    role="radiogroup"
                    aria-label="Accent color"
                    className="flex flex-wrap gap-2.5"
                >
                    {SETUP_ACCENT_OPTIONS.map((option) => {
                        const selected = value.accent === option.id;
                        return (
                            <button
                                key={option.id}
                                type="button"
                                role="radio"
                                aria-checked={selected}
                                aria-label={option.label}
                                onClick={() => onChange({ ...value, accent: option.id })}
                                className={`
                  relative w-10 h-10 rounded-full flex items-center justify-center
                  transition-all
                  ${selected ? "ring-2 ring-offset-2 ring-slate-900" : "hover:scale-105"}
                `}
                            >
                                <span className={`absolute inset-0.5 rounded-full ${option.class}`} />
                                {selected && (
                                    <svg
                                        className="relative w-4 h-4 text-white"
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
                                )}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Modules toggles */}
            <div>
                <p className="text-xs sm:text-sm font-semibold text-slate-700 mb-3">
                    Modules to enable
                </p>
                <div className="space-y-2.5">
                    {SETUP_MODULES.map((module) => {
                        const enabled = value.modules[module.id];
                        return (
                            <label
                                key={module.id}
                                className={`
                  flex items-center gap-4 p-4 rounded-2xl border cursor-pointer transition-all
                  ${enabled
                                        ? "border-blue-200 bg-blue-50/40"
                                        : "border-slate-200/90 bg-white hover:border-slate-300"
                                    }
                `}
                            >
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-bold text-slate-900">{module.label}</p>
                                    <p className="text-xs text-slate-500 mt-0.5">{module.description}</p>
                                </div>

                                {/* Toggle */}
                                <span
                                    className={`
                    relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors
                    ${enabled ? "bg-blue-600" : "bg-slate-300"}
                  `}
                                >
                                    <input
                                        type="checkbox"
                                        checked={enabled}
                                        onChange={() => toggleModule(module.id)}
                                        className="sr-only"
                                    />
                                    <span
                                        className={`
                      inline-block h-4 w-4 transform rounded-full bg-white shadow-sm transition-transform
                      ${enabled ? "translate-x-6" : "translate-x-1"}
                    `}
                                    />
                                </span>
                            </label>
                        );
                    })}
                </div>
                <p className="mt-3 text-[11px] text-slate-500">
                    Modules can be turned on or off anytime from Settings → Modules.
                </p>
            </div>
        </div>
    );
}