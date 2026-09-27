"use client";

import { useState } from "react";
import { FEATURE_MODULES, type FeatureModule } from "@/lib/constants";
import Link from "next/link";

/* ---------------- Icon set for tabs ---------------- */

function TabIcon({ id }: { id: string }) {
    const common = {
        className: "w-4 h-4",
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24",
        "aria-hidden": true,
    } as const;

    switch (id) {
        case "employees":
            return (
                <svg {...common}>
                    <path
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                    />
                </svg>
            );
        case "attendance":
            return (
                <svg {...common}>
                    <path
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                    />
                </svg>
            );
        case "payroll":
            return (
                <svg {...common}>
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 8v8m-3-5h6" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                </svg>
            );
        case "recruitment":
            return (
                <svg {...common}>
                    <path
                        d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                    />
                </svg>
            );
        case "performance":
            return (
                <svg {...common}>
                    <path
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                    />
                </svg>
            );
        case "analytics":
            return (
                <svg {...common}>
                    <path
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                    />
                </svg>
            );
    }
    return null;
}

/* ---------------- Accent colors ---------------- */

const accentStyles: Record<
    FeatureModule["accent"],
    { bg: string; text: string; ring: string; bullet: string; pill: string }
> = {
    blue: {
        bg: "bg-blue-50",
        text: "text-blue-600",
        ring: "ring-blue-100",
        bullet: "text-blue-600",
        pill: "bg-blue-100/70 text-blue-600",
    },
    emerald: {
        bg: "bg-emerald-50",
        text: "text-emerald-600",
        ring: "ring-emerald-100",
        bullet: "text-emerald-600",
        pill: "bg-emerald-100/70 text-emerald-600",
    },
    purple: {
        bg: "bg-purple-50",
        text: "text-purple-600",
        ring: "ring-purple-100",
        bullet: "text-purple-600",
        pill: "bg-purple-100/70 text-purple-600",
    },
    amber: {
        bg: "bg-amber-50",
        text: "text-amber-600",
        ring: "ring-amber-100",
        bullet: "text-amber-600",
        pill: "bg-amber-100/70 text-amber-600",
    },
    rose: {
        bg: "bg-rose-50",
        text: "text-rose-600",
        ring: "ring-rose-100",
        bullet: "text-rose-500",
        pill: "bg-rose-100/70 text-rose-500",
    },
    cyan: {
        bg: "bg-cyan-50",
        text: "text-cyan-600",
        ring: "ring-cyan-100",
        bullet: "text-cyan-600",
        pill: "bg-cyan-100/70 text-cyan-600",
    },
};

/* ---------------- Mini visual per module ---------------- */
/* Each tab gets a subtle, on-brand mockup so the panel isn't just text. */

function ModuleVisual({ module }: { module: FeatureModule }) {
    const styles = accentStyles[module.accent];

    return (
        <div className="relative w-full aspect-4/3 rounded-2xl border border-slate-200/90 bg-white shadow-dashboard overflow-hidden">
            {/* Top bar */}
            <div className="h-9 border-b border-slate-100 flex items-center px-3 gap-2 bg-slate-50/60">
                <span className="w-2 h-2 rounded-full bg-slate-200" />
                <span className="w-2 h-2 rounded-full bg-slate-200" />
                <span className="w-2 h-2 rounded-full bg-slate-200" />
                <span className="ml-2 text-[10px] font-semibold text-slate-500">
                    {module.label}
                </span>
            </div>

            {/* Body — abstract UI hints per module */}
            <div className="p-4 space-y-3">
                <div className={`h-2 w-1/3 rounded-full ${styles.bg}`} />
                <div className="h-2 w-2/3 rounded-full bg-slate-100" />

                {/* Module-specific mock content */}
                {module.id === "employees" && (
                    <div className="grid grid-cols-3 gap-2 mt-4">
                        {[0, 1, 2, 3, 4, 5].map((i) => (
                            <div
                                key={i}
                                className="rounded-lg border border-slate-100 p-2 space-y-1.5"
                            >
                                <div className={`w-6 h-6 rounded-full ${styles.bg}`} />
                                <div className="h-1.5 w-full rounded-full bg-slate-100" />
                                <div className="h-1.5 w-2/3 rounded-full bg-slate-100" />
                            </div>
                        ))}
                    </div>
                )}

                {module.id === "attendance" && (
                    <div className="mt-4 space-y-2">
                        {[80, 60, 100, 45, 90].map((w, i) => (
                            <div key={i} className="flex items-center gap-2">
                                <div className="w-12 h-2 rounded-full bg-slate-100" />
                                <div className="flex-1 h-2 rounded-full bg-slate-100 overflow-hidden">
                                    <div
                                        className={`h-full rounded-full ${styles.bg}`}
                                        style={{ width: `${w}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {module.id === "payroll" && (
                    <div className="mt-4 grid grid-cols-2 gap-2">
                        {[0, 1, 2, 3].map((i) => (
                            <div
                                key={i}
                                className="rounded-lg border border-slate-100 p-2.5 space-y-1.5"
                            >
                                <div className="h-1.5 w-1/2 rounded-full bg-slate-100" />
                                <div className={`h-3 w-3/4 rounded ${styles.bg}`} />
                            </div>
                        ))}
                    </div>
                )}

                {module.id === "recruitment" && (
                    <div className="mt-4 grid grid-cols-3 gap-2">
                        {["Applied", "Interview", "Offer"].map((col, i) => (
                            <div key={i} className="space-y-2">
                                <p className="text-[9px] font-semibold text-slate-400 uppercase">
                                    {col}
                                </p>
                                {[0, 1].map((j) => (
                                    <div
                                        key={j}
                                        className="rounded-lg border border-slate-100 p-1.5 space-y-1"
                                    >
                                        <div className={`h-1.5 w-2/3 rounded-full ${styles.bg}`} />
                                        <div className="h-1.5 w-full rounded-full bg-slate-100" />
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                )}

                {module.id === "performance" && (
                    <div className="mt-4 space-y-3">
                        <div className="flex items-center justify-between">
                            <div className="h-2 w-1/4 rounded-full bg-slate-100" />
                            <div className={`text-[10px] font-bold ${styles.text}`}>84%</div>
                        </div>
                        <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                            <div className={`h-full w-[84%] rounded-full ${styles.bg}`} />
                        </div>
                        <div className="grid grid-cols-3 gap-2 pt-1">
                            {[0, 1, 2].map((i) => (
                                <div
                                    key={i}
                                    className="rounded-lg border border-slate-100 p-2 space-y-1"
                                >
                                    <div className="h-1.5 w-2/3 rounded-full bg-slate-100" />
                                    <div className={`h-1.5 w-1/2 rounded-full ${styles.bg}`} />
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {module.id === "analytics" && (
                    <div className="mt-4 space-y-3">
                        <div className="h-20 flex items-end gap-1.5">
                            {[40, 55, 48, 70, 62, 88, 76, 95].map((h, i) => (
                                <div
                                    key={i}
                                    className={`flex-1 rounded-t-sm ${styles.bg}`}
                                    style={{ height: `${h}%` }}
                                />
                            ))}
                        </div>
                        <div className="flex justify-between text-[8px] text-slate-400">
                            <span>Jan</span>
                            <span>Mar</span>
                            <span>May</span>
                            <span>Jul</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

/* ---------------- Main component ---------------- */

export default function FeatureTabs() {
    const [activeId, setActiveId] = useState(FEATURE_MODULES[0].id);
    const active = FEATURE_MODULES.find((m) => m.id === activeId) ?? FEATURE_MODULES[0];
    const styles = accentStyles[active.accent];

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-10">
                <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide bg-blue-100/70 text-blue-600 mb-3">
                    Explore the platform
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                    Six modules. <span className="text-blue-600">One platform.</span>
                </h2>
                <p className="mt-3 text-sm sm:text-base text-slate-600">
                    Click a module to see how it works — or scroll for the full tour.
                </p>
            </div>

            {/* Tab bar */}
            <div
                role="tablist"
                aria-label="Feature modules"
                className="flex flex-wrap justify-center gap-2 mb-10"
            >
                {FEATURE_MODULES.map((mod) => {
                    const isActive = mod.id === activeId;
                    const s = accentStyles[mod.accent];
                    return (
                        <button
                            key={mod.id}
                            role="tab"
                            aria-selected={isActive}
                            aria-controls={`panel-${mod.id}`}
                            id={`tab-${mod.id}`}
                            onClick={() => setActiveId(mod.id)}
                            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold border transition-all duration-200 ${isActive
                                ? `${s.bg} ${s.text} border-transparent shadow-sm`
                                : "bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900"
                                }`}
                        >
                            <TabIcon id={mod.id} />
                            {mod.label}
                        </button>
                    );
                })}
            </div>

            {/* Active panel */}
            <div
                role="tabpanel"
                id={`panel-${active.id}`}
                aria-labelledby={`tab-${active.id}`}
                className="rounded-3xl border border-slate-200/90 bg-white overflow-hidden"
            >
                <div className="grid grid-cols-1 lg:grid-cols-12">
                    {/* Left: copy */}
                    <div className="lg:col-span-6 p-8 sm:p-10 lg:p-14 flex flex-col justify-center">
                        <div
                            className={`inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${styles.pill} mb-4 w-fit`}
                        >
                            {active.label}
                        </div>

                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                            {active.headline}
                        </h3>

                        <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                            {active.description}
                        </p>

                        <ul className="mt-6 space-y-3">
                            {active.bullets.map((bullet) => (
                                <li
                                    key={bullet}
                                    className="flex items-start gap-2.5 text-sm text-slate-700"
                                >
                                    <svg
                                        className={`w-4 h-4 shrink-0 mt-0.5 ${styles.bullet}`}
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
                                    <span>{bullet}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Stats row */}
                        <div className="mt-8 grid grid-cols-2 gap-4 pt-6 border-t border-slate-100">
                            {active.stats.map((stat) => (
                                <div key={stat.label}>
                                    <p className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${styles.text}`}>
                                        {stat.value}
                                    </p>
                                    <p className="text-xs text-slate-500 mt-1">{stat.label}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8">
                            <Link
                                href={active.href}
                                className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors"
                            >
                                Learn more about {active.label.toLowerCase()}
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                                </svg>
                            </Link>
                        </div>
                    </div>

                    {/* Right: visual */}
                    <div
                        className={`lg:col-span-6 relative p-6 sm:p-10 lg:p-14 flex items-center justify-center ${styles.bg
                            }/40`}
                    >
                        {/* Soft atmospheric blob behind visual */}
                        <div
                            aria-hidden="true"
                            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full ${styles.bg} blur-3xl opacity-60`}
                        />
                        <div className="relative w-full max-w-md">
                            <ModuleVisual module={active} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}