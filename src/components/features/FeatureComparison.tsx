import { COMPARISON_ROWS } from "@/lib/constants";

function Cell({ value }: { value: string | boolean }) {
    if (value === true) {
        return (
            <svg
                className="w-4 h-4 text-blue-600 mx-auto"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-label="Yes"
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
                aria-label="No"
            >
                <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
            </svg>
        );
    }
    return <span className="text-xs sm:text-sm font-medium text-slate-700">{value}</span>;
}

export default function FeatureComparison() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-12">
                <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide bg-blue-100/70 text-blue-600 mb-3">
                    The honest comparison
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                    Why teams <span className="text-blue-600">switch to PeopleHub.</span>
                </h2>
                <p className="mt-3 text-sm sm:text-base text-slate-600">
                    A side-by-side look at what you get — versus spreadsheets and legacy HR tools.
                </p>
            </div>

            {/* Table */}
            <div className="rounded-3xl border border-slate-200/90 bg-white overflow-hidden">
                {/* Header row */}
                <div className="grid grid-cols-4 border-b border-slate-200 bg-slate-50/70">
                    <div className="px-4 sm:px-6 py-5 text-xs font-bold uppercase tracking-wider text-slate-500">
                        Capability
                    </div>
                    <div className="px-4 sm:px-6 py-5 text-center text-sm font-extrabold text-blue-600 bg-blue-50/50">
                        PeopleHub
                    </div>
                    <div className="px-4 sm:px-6 py-5 text-center text-sm font-bold text-slate-700">
                        Spreadsheets
                    </div>
                    <div className="px-4 sm:px-6 py-5 text-center text-sm font-bold text-slate-700">
                        Legacy HRIS
                    </div>
                </div>

                {/* Body */}
                {COMPARISON_ROWS.map((row) => (
                    <div
                        key={row.feature}
                        className="grid grid-cols-4 border-b border-slate-100 last:border-b-0 hover:bg-slate-50/40 transition-colors"
                    >
                        <div className="px-4 sm:px-6 py-4 text-xs sm:text-sm font-medium text-slate-700">
                            {row.feature}
                        </div>
                        <div className="px-4 sm:px-6 py-4 flex items-center justify-center bg-blue-50/30">
                            <Cell value={row.peoplehub} />
                        </div>
                        <div className="px-4 sm:px-6 py-4 flex items-center justify-center">
                            <Cell value={row.spreadsheets} />
                        </div>
                        <div className="px-4 sm:px-6 py-4 flex items-center justify-center">
                            <Cell value={row.legacy} />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}