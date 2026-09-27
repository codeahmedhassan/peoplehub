"use client";

import { useState } from "react";
import {
    ATTENDANCE_DEEP_DIVE,
    type AttendanceDeepDiveTab,
} from "@/lib/constants";

const accentStyles: Record<
    AttendanceDeepDiveTab["accent"],
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

function TabVisual({ tab }: { tab: AttendanceDeepDiveTab }) {
    const s = accentStyles[tab.accent];

    return (
        <div className="relative w-full aspect-4/3 rounded-2xl border border-slate-200/90 bg-white shadow-dashboard overflow-hidden">
            <div className="h-9 border-b border-slate-100 flex items-center px-3 gap-2 bg-slate-50/60">
                <span className="w-2 h-2 rounded-full bg-slate-200" />
                <span className="w-2 h-2 rounded-full bg-slate-200" />
                <span className="w-2 h-2 rounded-full bg-slate-200" />
                <span className="ml-2 text-[10px] font-semibold text-slate-500">{tab.label}</span>
            </div>

            <div className="p-4 space-y-3">
                {/* Track view */}
                {tab.id === "track" && (
                    <>
                        <div className="rounded-xl border border-slate-100 p-3 flex items-center gap-3">
                            <div className={`w-12 h-12 rounded-full ${s.bg} flex items-center justify-center text-[10px] font-bold ${s.text}`}>
                                09:02
                            </div>
                            <div className="flex-1 space-y-1.5">
                                <div className="h-2 w-1/2 rounded-full bg-slate-200" />
                                <div className="h-1.5 w-1/3 rounded-full bg-slate-100" />
                            </div>
                            <div className="h-6 w-14 rounded-full bg-emerald-100" />
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                            {["08:59", "09:01", "09:03"].map((time) => (
                                <div key={time} className="rounded-lg border border-slate-100 p-2 text-center">
                                    <p className="text-[9px] text-slate-400">Clock-in</p>
                                    <p className="text-[11px] font-bold text-slate-700 mt-0.5">{time}</p>
                                </div>
                            ))}
                        </div>
                    </>
                )}

                {/* Approve view */}
                {tab.id === "approve" && (
                    <div className="space-y-2">
                        {[0, 1, 2].map((i) => (
                            <div
                                key={i}
                                className="rounded-lg border border-slate-100 p-2.5 flex items-center gap-3"
                            >
                                <div className={`w-8 h-8 rounded-full ${s.bg}`} />
                                <div className="flex-1 space-y-1">
                                    <div className="h-1.5 w-2/3 rounded-full bg-slate-200" />
                                    <div className="h-1.5 w-1/2 rounded-full bg-slate-100" />
                                </div>
                                <div className={`h-6 w-14 rounded-full ${s.bg}`} />
                            </div>
                        ))}
                    </div>
                )}

                {/* Policy view */}
                {tab.id === "policy" && (
                    <div className="space-y-2.5 pt-1">
                        {["Accrual", "Carryover", "Notice"].map((label, i) => (
                            <div key={label} className="flex items-center gap-3">
                                <span className="text-[9px] text-slate-400 w-16">{label}</span>
                                <div className="flex-1 h-2 rounded-full bg-slate-100 overflow-hidden">
                                    <div
                                        className={`h-full rounded-full ${s.bg}`}
                                        style={{ width: `${[75, 45, 60][i]}%` }}
                                    />
                                </div>
                                <span className="text-[9px] text-slate-500 w-8 text-right">
                                    {["15d", "5d", "14d"][i]}
                                </span>
                            </div>
                        ))}
                    </div>
                )}

                {/* Insights view */}
                {tab.id === "insights" && (
                    <>
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
                            <span>Mon</span>
                            <span>Wed</span>
                            <span>Fri</span>
                            <span>Sun</span>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default function AttendanceDeepDive() {
    const [activeId, setActiveId] = useState(ATTENDANCE_DEEP_DIVE[0].id);
    const active =
        ATTENDANCE_DEEP_DIVE.find((t) => t.id === activeId) ?? ATTENDANCE_DEEP_DIVE[0];
    const styles = accentStyles[active.accent];

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24">
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
                <div className="inline-flex items-center px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wide bg-emerald-100/70 text-emerald-700 mb-3">
                    Deep dive
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-tight">
                    Track. Approve.
                    <br className="hidden sm:block" />{" "}
                    <span className="text-emerald-600">Report. Repeat.</span>
                </h2>
                <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-600">
                    Four views that cover the entire lifecycle of a work hour — from
                    clock-in to payroll-ready total.
                </p>
            </div>

            {/* Tabs */}
            <div
                role="tablist"
                aria-label="Attendance & leave deep dive"
                className="flex flex-wrap justify-center gap-2 mb-8 sm:mb-10"
            >
                {ATTENDANCE_DEEP_DIVE.map((tab) => {
                    const isActive = tab.id === activeId;
                    const s = accentStyles[tab.accent];
                    return (
                        <button
                            key={tab.id}
                            role="tab"
                            aria-selected={isActive}
                            aria-controls={`att-panel-${tab.id}`}
                            id={`att-tab-${tab.id}`}
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
                id={`att-panel-${active.id}`}
                aria-labelledby={`att-tab-${active.id}`}
                className="rounded-3xl border border-slate-200/90 bg-white overflow-hidden"
            >
                <div className="grid grid-cols-1 lg:grid-cols-12">
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