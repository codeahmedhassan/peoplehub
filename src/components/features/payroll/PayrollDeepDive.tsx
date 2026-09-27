"use client";

import { useState } from "react";
import {
    PAYROLL_DEEP_DIVE,
    type PayrollDeepDiveTab,
} from "@/lib/constants";

const accentStyles: Record<
    PayrollDeepDiveTab["accent"],
    { bg: string; bgSoft: string; text: string; bullet: string; pill: string }
> = {
    purple: {
        bg: "bg-purple-50",
        bgSoft: "bg-purple-50/40",
        text: "text-purple-600",
        bullet: "text-purple-600",
        pill: "bg-purple-100/70 text-purple-600",
    },
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
    amber: {
        bg: "bg-amber-50",
        bgSoft: "bg-amber-50/40",
        text: "text-amber-600",
        bullet: "text-amber-600",
        pill: "bg-amber-100/70 text-amber-600",
    },
};

function TabVisual({ tab }: { tab: PayrollDeepDiveTab }) {
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
                {/* Run view — pay run summary */}
                {tab.id === "run" && (
                    <>
                        <div className="rounded-xl border border-slate-100 p-3">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-[10px] text-slate-400 uppercase tracking-wider">
                                    April 2025 pay run
                                </span>
                                <span className={`text-[10px] font-bold ${s.text}`}>Ready</span>
                            </div>
                            <p className="text-lg font-extrabold text-slate-900 tabular-nums">
                                $482,140.00
                            </p>
                            <p className="text-[10px] text-slate-500 mt-0.5">
                                248 employees · 12 contractors
                            </p>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                            {["Gross", "Tax", "Net"].map((label, i) => (
                                <div key={label} className="rounded-lg border border-slate-100 p-2">
                                    <p className="text-[9px] text-slate-400">{label}</p>
                                    <p className="text-[11px] font-bold text-slate-700 mt-0.5">
                                        {["$520K", "$38K", "$482K"][i]}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </>
                )}

                {/* Comply view — filing checklist */}
                {tab.id === "comply" && (
                    <div className="space-y-2">
                        {["Federal 941", "State income tax", "Local filings", "FUTA / SUTA"].map(
                            (label, i) => (
                                <div
                                    key={label}
                                    className="rounded-lg border border-slate-100 p-2.5 flex items-center gap-3"
                                >
                                    <span
                                        className={`w-6 h-6 rounded-full ${s.bg} flex items-center justify-center text-[10px] font-bold ${s.text}`}
                                    >
                                        ✓
                                    </span>
                                    <span className="flex-1 text-[11px] font-semibold text-slate-700">
                                        {label}
                                    </span>
                                    <span className="text-[9px] text-slate-400">
                                        {["Filed", "Filed", "Q2", "Apr 30"][i]}
                                    </span>
                                </div>
                            )
                        )}
                    </div>
                )}

                {/* Global view — region rows */}
                {tab.id === "global" && (
                    <div className="space-y-2">
                        {[
                            { r: "United States", c: "USD", a: "$320,000" },
                            { r: "United Kingdom", c: "GBP", a: "£84,000" },
                            { r: "Germany", c: "EUR", a: "€62,000" },
                            { r: "India", c: "INR", a: "₹4.1M" },
                        ].map((row) => (
                            <div
                                key={row.r}
                                className="rounded-lg border border-slate-100 p-2.5 flex items-center justify-between"
                            >
                                <span className="text-[11px] font-semibold text-slate-700">
                                    {row.r}
                                </span>
                                <span className="text-[9px] text-slate-400">{row.c}</span>
                                <span className={`text-[11px] font-bold ${s.text}`}>{row.a}</span>
                            </div>
                        ))}
                    </div>
                )}

                {/* Insight view — bar chart */}
                {tab.id === "insight" && (
                    <>
                        <div className="h-20 flex items-end gap-1.5">
                            {[55, 60, 58, 68, 65, 72, 70].map((h, i) => (
                                <div
                                    key={i}
                                    className={`flex-1 rounded-t-sm ${s.bg}`}
                                    style={{ height: `${h}%` }}
                                />
                            ))}
                        </div>
                        <div className="flex justify-between text-[9px] text-slate-400">
                            <span>Oct</span>
                            <span>Dec</span>
                            <span>Feb</span>
                            <span>Apr</span>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default function PayrollDeepDive() {
    const [activeId, setActiveId] = useState(PAYROLL_DEEP_DIVE[0].id);
    const active =
        PAYROLL_DEEP_DIVE.find((t) => t.id === activeId) ?? PAYROLL_DEEP_DIVE[0];
    const styles = accentStyles[active.accent];

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24">
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
                <div className="inline-flex items-center px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wide bg-purple-100/70 text-purple-700 mb-3">
                    Deep dive
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-tight">
                    Run. Comply.
                    <br className="hidden sm:block" />{" "}
                    <span className="text-purple-600">Pay. Repeat.</span>
                </h2>
                <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-600">
                    Four phases of every pay cycle — from calculation to audit trail — and
                    what PeopleHub does at each step.
                </p>
            </div>

            {/* Tabs */}
            <div
                role="tablist"
                aria-label="Payroll deep dive"
                className="flex flex-wrap justify-center gap-2 mb-8 sm:mb-10"
            >
                {PAYROLL_DEEP_DIVE.map((tab) => {
                    const isActive = tab.id === activeId;
                    const s = accentStyles[tab.accent];
                    return (
                        <button
                            key={tab.id}
                            role="tab"
                            aria-selected={isActive}
                            aria-controls={`payroll-panel-${tab.id}`}
                            id={`payroll-tab-${tab.id}`}
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
                id={`payroll-panel-${active.id}`}
                aria-labelledby={`payroll-tab-${active.id}`}
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