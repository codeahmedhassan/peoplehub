const PAYROLL_BREAKDOWN = [
    { label: "Base salary", value: "$6,250.00", sign: "+" },
    { label: "Bonus", value: "$500.00", sign: "+" },
    { label: "Health insurance", value: "$180.00", sign: "-" },
    { label: "401(k) contribution", value: "$250.00", sign: "-" },
    { label: "Federal tax", value: "$842.00", sign: "-" },
    { label: "State tax", value: "$310.00", sign: "-" },
];

const RECENT_RUNS = [
    { period: "Mar 2025", total: "$478,320", status: "Paid", date: "Mar 28" },
    { period: "Feb 2025", total: "$471,850", status: "Paid", date: "Feb 28" },
    { period: "Jan 2025", total: "$468,220", status: "Paid", date: "Jan 31" },
];

export default function PayrollRunPreview() {
    return (
        <section className="bg-slate-50/60 py-14 sm:py-20 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wide bg-purple-100/70 text-purple-700 mb-3">
                        Live preview
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-tight">
                        From review to paid
                        <br className="hidden sm:block" />{" "}
                        <span className="text-purple-600">in three clicks.</span>
                    </h2>
                    <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-600">
                        Review totals, spot changes, and approve — with everything your team
                        needs to trust the numbers.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                    {/* Pay run dashboard */}
                    <div className="relative rounded-3xl border border-slate-200/90 bg-white shadow-dashboard overflow-hidden">
                        <div className="h-10 border-b border-slate-100 flex items-center px-4 gap-2 bg-slate-50/60">
                            <span className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                            <span className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                            <span className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                            <span className="ml-3 text-[11px] font-semibold text-slate-500">
                                Payroll — April 2025
                            </span>
                        </div>

                        <div className="p-5 sm:p-6">
                            {/* Summary card */}
                            <div className="rounded-2xl border border-purple-100 bg-linear-to-br from-purple-50/70 to-indigo-50/50 p-5">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-[10px] uppercase tracking-wider font-bold text-purple-600">
                                        April pay run
                                    </span>
                                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-600">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                        Ready to submit
                                    </span>
                                </div>
                                <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight tabular-nums">
                                    $482,140
                                    <span className="text-lg font-bold text-slate-400">.00</span>
                                </p>
                                <p className="text-xs text-slate-500 mt-1">
                                    248 employees · 12 contractors · pay date Apr 30
                                </p>

                                <button
                                    type="button"
                                    className="relative mt-5 w-full rounded-full overflow-hidden h-11 transition-transform active:scale-[0.98]"
                                >
                                    <span
                                        aria-hidden="true"
                                        className="absolute inset-0 rounded-full"
                                        style={{
                                            backdropFilter: "url(#liquid-glass-distortion) blur(2px) saturate(1.4)",
                                            WebkitBackdropFilter: "blur(14px) saturate(1.4)",
                                        }}
                                    />
                                    <span
                                        aria-hidden="true"
                                        className="absolute inset-0 rounded-full bg-purple-600/95"
                                    />
                                    <span className="relative flex items-center justify-center gap-2 h-full text-white text-sm font-semibold">
                                        <span
                                            aria-hidden="true"
                                            className="pointer-events-none absolute inset-x-8 top-0 h-[1.5px] rounded-full bg-linear-to-r from-transparent via-white/60 to-transparent"
                                        />
                                        Run payroll
                                    </span>
                                </button>
                            </div>

                            {/* Breakdown grid */}
                            <div className="mt-4 grid grid-cols-3 gap-2">
                                {[
                                    { label: "Gross", value: "$520K" },
                                    { label: "Deductions", value: "$38K" },
                                    { label: "Net", value: "$482K" },
                                ].map((item) => (
                                    <div
                                        key={item.label}
                                        className="rounded-xl border border-slate-100 p-3"
                                    >
                                        <p className="text-[10px] uppercase tracking-wider text-slate-400">
                                            {item.label}
                                        </p>
                                        <p className="text-sm font-bold text-slate-900 mt-1 tabular-nums">
                                            {item.value}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* Recent runs */}
                            <div className="mt-5">
                                <p className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 mb-2">
                                    Recent runs
                                </p>
                                <div className="space-y-2">
                                    {RECENT_RUNS.map((run) => (
                                        <div
                                            key={run.period}
                                            className="flex items-center justify-between px-3 py-2 rounded-xl bg-slate-50 border border-slate-100"
                                        >
                                            <span className="text-xs font-semibold text-slate-700">
                                                {run.period}
                                            </span>
                                            <span className="text-xs font-bold text-slate-900 tabular-nums">
                                                {run.total}
                                            </span>
                                            <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-600">
                                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                                {run.status}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Paystub breakdown */}
                    <div className="relative rounded-3xl border border-slate-200/90 bg-white shadow-dashboard overflow-hidden">
                        <div className="h-10 border-b border-slate-100 flex items-center px-4 gap-2 bg-slate-50/60">
                            <span className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                            <span className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                            <span className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                            <span className="ml-3 text-[11px] font-semibold text-slate-500">
                                Paystub — Amara O.
                            </span>
                        </div>

                        <div className="p-5 sm:p-6">
                            {/* Employee header */}
                            <div className="flex items-center gap-3 mb-5">
                                <span className="w-11 h-11 rounded-full bg-linear-to-br from-purple-200 to-indigo-200 shrink-0" />
                                <div className="min-w-0">
                                    <p className="text-sm font-bold text-slate-900 truncate">
                                        Amara Okafor
                                    </p>
                                    <p className="text-[11px] text-slate-500">
                                        Product Designer · Design · Lisbon
                                    </p>
                                </div>
                            </div>

                            {/* Breakdown list */}
                            <div className="space-y-2">
                                {PAYROLL_BREAKDOWN.map((item) => (
                                    <div
                                        key={item.label}
                                        className="flex items-center justify-between py-1.5 border-b border-slate-100 last:border-b-0"
                                    >
                                        <span className="text-xs text-slate-600">{item.label}</span>
                                        <span
                                            className={`text-xs font-semibold tabular-nums ${item.sign === "+" ? "text-slate-900" : "text-slate-500"
                                                }`}
                                        >
                                            {item.sign}
                                            {item.value}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* Net pay */}
                            <div className="mt-4 pt-4 border-t-2 border-slate-900 flex items-center justify-between">
                                <span className="text-sm font-bold text-slate-900">Net pay</span>
                                <span className="text-lg font-extrabold text-slate-900 tabular-nums">
                                    $5,168.00
                                </span>
                            </div>

                            <div className="mt-4 flex items-center justify-between text-[10px] text-slate-400">
                                <span>Paid via ACH · Apr 30</span>
                                <span className="inline-flex items-center gap-1 text-emerald-600 font-semibold">
                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} />
                                    </svg>
                                    Paystub delivered
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}