import { COMPARISON_GROUPS, COMPARISON_COLUMNS } from "@/lib/constants";

function CellValue({ value }: { value: string | boolean }) {
    if (value === true) {
        return (
            <svg
                className="w-4 h-4 text-blue-600 mx-auto"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-label="Included"
            >
                <path
                    clipRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    fillRule="evenodd"
                />
            </svg>
        );
    }
    if (value === false) {
        return (
            <svg
                className="w-4 h-4 text-slate-300 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-label="Not included"
            >
                <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
            </svg>
        );
    }
    return <span className="text-xs font-medium text-slate-700">{value}</span>;
}

export default function ComparisonTable() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-12">
                <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide bg-blue-100/70 text-blue-600 mb-3">
                    Compare plans
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                    Every feature, <span className="text-blue-600">side by side.</span>
                </h2>
                <p className="mt-3 text-sm sm:text-base text-slate-600">
                    Find the exact plan that matches your team&apos;s needs.
                </p>
            </div>

            {/* Desktop table */}
            <div className="hidden lg:block rounded-3xl border border-slate-200/90 bg-white overflow-hidden">
                {/* Sticky header row */}
                <div className="sticky top-24 z-10 grid grid-cols-5 bg-slate-50/80 backdrop-blur-md border-b border-slate-200">
                    <div className="px-6 py-5 text-xs font-bold uppercase tracking-wider text-slate-500">
                        Features
                    </div>
                    {COMPARISON_COLUMNS.map((col) => (
                        <div
                            key={col}
                            className="px-6 py-5 text-center text-sm font-bold text-slate-900"
                        >
                            {col}
                        </div>
                    ))}
                </div>

                {/* Grouped rows */}
                {COMPARISON_GROUPS.map((group, gi) => (
                    <div key={group.group}>
                        <div className="grid grid-cols-5 bg-slate-50/40 border-b border-slate-100">
                            <div className="px-6 py-3 col-span-5 text-[11px] font-bold uppercase tracking-wider text-blue-600">
                                {group.group}
                            </div>
                        </div>
                        {group.rows.map((row) => (
                            <div
                                key={row.feature}
                                className={`grid grid-cols-5 border-b border-slate-100 hover:bg-slate-50/50 transition-colors ${gi === COMPARISON_GROUPS.length - 1 ? "last:border-b-0" : ""
                                    }`}
                            >
                                <div className="px-6 py-4 text-sm text-slate-700 font-medium">
                                    {row.feature}
                                </div>
                                <div className="px-6 py-4 flex items-center justify-center">
                                    <CellValue value={row.starter} />
                                </div>
                                <div className="px-6 py-4 flex items-center justify-center">
                                    <CellValue value={row.growth} />
                                </div>
                                <div className="px-6 py-4 flex items-center justify-center bg-blue-50/30">
                                    <CellValue value={row.business} />
                                </div>
                                <div className="px-6 py-4 flex items-center justify-center">
                                    <CellValue value={row.enterprise} />
                                </div>
                            </div>
                        ))}
                    </div>
                ))}

                {/* Bottom CTA row */}
                <div className="grid grid-cols-5 bg-slate-50/60 border-t border-slate-200">
                    <div className="px-6 py-5 text-sm font-medium text-slate-500">
                        Ready to get started?
                    </div>
                    {COMPARISON_COLUMNS.map((col) => (
                        <div key={col} className="px-6 py-5 flex justify-center">
                            <a
                                href="#"
                                className={`inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold transition-colors ${col === "Business"
                                        ? "bg-blue-600 text-white hover:bg-blue-700"
                                        : "border border-slate-200 text-slate-700 hover:bg-white"
                                    }`}
                            >
                                Choose {col}
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            {/* Mobile accordion */}
            <div className="lg:hidden space-y-4">
                {COMPARISON_GROUPS.map((group) => (
                    <details
                        key={group.group}
                        className="rounded-2xl border border-slate-200/90 bg-white overflow-hidden"
                        open={group.group === "Core HR"}
                    >
                        <summary className="px-4 py-3 text-sm font-bold text-slate-900 cursor-pointer list-none flex items-center justify-between">
                            {group.group}
                            <svg
                                className="w-4 h-4 text-slate-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                            </svg>
                        </summary>
                        <div className="border-t border-slate-100">
                            {group.rows.map((row) => (
                                <div
                                    key={row.feature}
                                    className="px-4 py-3 border-b border-slate-100 last:border-b-0"
                                >
                                    <p className="text-sm font-medium text-slate-800 mb-2">{row.feature}</p>
                                    <div className="grid grid-cols-4 gap-2 text-center">
                                        {COMPARISON_COLUMNS.map((col) => {
                                            const val = row[col.toLowerCase() as "starter" | "growth" | "business" | "enterprise"];
                                            return (
                                                <div key={col}>
                                                    <p className="text-[10px] uppercase tracking-wider text-slate-400 mb-1">
                                                        {col}
                                                    </p>
                                                    <div className="flex justify-center">
                                                        <CellValue value={val} />
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </details>
                ))}
            </div>
        </section>
    );
}