"use client";

import { useState } from "react";
import { EMPLOYEE_DEEP_DIVE, type EmployeeDeepDiveTab } from "@/lib/constants";

const accentStyles: Record<
    EmployeeDeepDiveTab["accent"],
    { bg: string; bgSoft: string; text: string; bullet: string; pill: string }
> = {
    blue: {
        bg: "bg-blue-50",
        bgSoft: "bg-blue-50/40",
        text: "text-blue-600",
        bullet: "text-blue-600",
        pill: "bg-blue-100/70 text-blue-600",
    },
    emerald: {
        bg: "bg-emerald-50",
        bgSoft: "bg-emerald-50/40",
        text: "text-emerald-600",
        bullet: "text-emerald-600",
        pill: "bg-emerald-100/70 text-emerald-600",
    },
    purple: {
        bg: "bg-purple-50",
        bgSoft: "bg-purple-50/40",
        text: "text-purple-600",
        bullet: "text-purple-600",
        pill: "bg-purple-100/70 text-purple-600",
    },
    amber: {
        bg: "bg-amber-50",
        bgSoft: "bg-amber-50/40",
        text: "text-amber-600",
        bullet: "text-amber-600",
        pill: "bg-amber-100/70 text-amber-600",
    },
};

/* Mini visual per tab */
function TabVisual({ tab }: { tab: EmployeeDeepDiveTab }) {
    const s = accentStyles[tab.accent];

    return (
        <div className="relative w-full aspect-4/3 rounded-2xl border border-slate-200/90 bg-white shadow-dashboard overflow-hidden">
            {/* Title bar */}
            <div className="h-9 border-b border-slate-100 flex items-center px-3 gap-2 bg-slate-50/60">
                <span className="w-2 h-2 rounded-full bg-slate-200" />
                <span className="w-2 h-2 rounded-full bg-slate-200" />
                <span className="w-2 h-2 rounded-full bg-slate-200" />
                <span className="ml-2 text-[10px] font-semibold text-slate-500">{tab.label}</span>
            </div>

            <div className="p-4 space-y-3">
                {/* Records view */}
                {tab.id === "records" && (
                    <>
                        <div className="flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-xl ${s.bg}`} />
                            <div className="flex-1 space-y-1.5">
                                <div className="h-2 w-1/3 rounded-full bg-slate-200" />
                                <div className="h-1.5 w-1/2 rounded-full bg-slate-100" />
                            </div>
                            <div className={`h-6 w-16 rounded-full ${s.bg}`} />
                        </div>
                        <div className="grid grid-cols-2 gap-2 pt-1">
                            {[0, 1, 2, 3].map((i) => (
                                <div key={i} className="rounded-lg border border-slate-100 p-2 space-y-1.5">
                                    <div className="h-1.5 w-1/3 rounded-full bg-slate-100" />
                                    <div className="h-2 w-2/3 rounded-full bg-slate-200" />
                                </div>
                            ))}
                        </div>
                    </>
                )}

                {/* Structure view */}
                {tab.id === "structure" && (
                    <div className="pt-2">
                        <div className="flex justify-center mb-3">
                            <div className={`w-12 h-12 rounded-xl ${s.bg} flex items-center justify-center text-[10px] font-bold ${s.text}`}>
                                CEO
                            </div>
                        </div>
                        <div className="flex justify-center gap-2 mb-3">
                            {["VP 1", "VP 2", "VP 3"].map((label) => (
                                <div key={label} className="w-12 h-10 rounded-lg border border-slate-200 flex items-center justify-center text-[9px] text-slate-500">
                                    {label}
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-center gap-1.5">
                            {[...Array(6)].map((_, i) => (
                                <div key={i} className="w-8 h-8 rounded-lg bg-slate-100" />
                            ))}
                        </div>
                    </div>
                )}

                {/* Workflows view */}
                {tab.id === "workflows" && (
                    <div className="pt-1 space-y-3">
                        {["New hire", "Promotion", "Offboarding"].map((label, i) => (
                            <div key={label} className="flex items-center gap-2">
                                <div className={`w-2 h-2 rounded-full ${s.bg}`} />
                                <div className="flex-1 h-2 rounded-full bg-slate-100 overflow-hidden">
                                    <div
                                        className={`h-full rounded-full ${s.bg}`}
                                        style={{ width: `${[85, 55, 30][i]}%` }}
                                    />
                                </div>
                                <span className="text-[9px] text-slate-400 w-16">{label}</span>
                            </div>
                        ))}
                    </div>
                )}

                {/* Insights view */}
                {tab.id === "insights" && (
                    <div className="pt-2 space-y-3">
                        <div className="h-20 flex items-end gap-1.5">
                            {[40, 62, 55, 78, 68, 88, 72].map((h, i) => (
                                <div
                                    key={i}
                                    className={`flex-1 rounded-t-sm ${s.bg}`}
                                    style={{ height: `${h}%` }}
                                />
                            ))}
                        </div>
                        <div className="flex justify-between text-[9px] text-slate-400">
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

export default function EmployeeDeepDive() {
    const [activeId, setActiveId] = useState(EMPLOYEE_DEEP_DIVE[0].id);
    const active =
        EMPLOYEE_DEEP_DIVE.find((t) => t.id === activeId) ?? EMPLOYEE_DEEP_DIVE[0];
    const styles = accentStyles[active.accent];

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24">
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
                <div className="inline-flex items-center px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wide bg-blue-100/70 text-blue-600 mb-3">
                    Deep dive
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-tight">
                    See it in <span className="text-blue-600">four views.</span>
                </h2>
                <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-600">
                    Records, structure, workflows, and insights — a tour of how every
                    employee detail becomes actionable data.
                </p>
            </div>

            {/* Tab bar */}
            <div
                role="tablist"
                aria-label="Employee management deep dive"
                className="flex flex-wrap justify-center gap-2 mb-8 sm:mb-10"
            >
                {EMPLOYEE_DEEP_DIVE.map((tab) => {
                    const isActive = tab.id === activeId;
                    const s = accentStyles[tab.accent];
                    return (
                        <button
                            key={tab.id}
                            role="tab"
                            aria-selected={isActive}
                            aria-controls={`emp-panel-${tab.id}`}
                            id={`emp-tab-${tab.id}`}
                            onClick={() => setActiveId(tab.id)}
                            className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold border transition-all duration-200 ${isActive
                                    ? `${s.bg} ${s.text} border-transparent shadow-sm`
                                    : "bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900"
                                }`}
                        >
                            {tab.label}
                        </button>
                    );
                })}
            </div>

            {/* Panel */}
            <div
                role="tabpanel"
                id={`emp-panel-${active.id}`}
                aria-labelledby={`emp-tab-${active.id}`}
                className="rounded-3xl border border-slate-200/90 bg-white overflow-hidden"
            >
                <div className="grid grid-cols-1 lg:grid-cols-12">
                    {/* Copy */}
                    <div className="lg:col-span-6 p-6 sm:p-8 lg:p-12 flex flex-col justify-center order-2 lg:order-1">
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
                            {active.bullets.map((b) => (
                                <li key={b} className="flex items-start gap-2.5 text-sm text-slate-700">
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
                                    <span>{b}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Visual */}
                    <div
                        className={`lg:col-span-6 relative p-6 sm:p-8 lg:p-12 flex items-center justify-center order-1 lg:order-2 ${styles.bgSoft}`}
                    >
                        <div
                            aria-hidden="true"
                            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full ${styles.bg} blur-3xl opacity-60`}
                        />
                        <div className="relative w-full max-w-md">
                            <TabVisual tab={active} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}