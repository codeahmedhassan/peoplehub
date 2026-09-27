import { PAYROLL_COMPLIANCE } from "@/lib/constants";

function ComplianceIcon({
    name,
}: {
    name: "file" | "refresh" | "calendar" | "history";
}) {
    const common = {
        className: "w-5 h-5",
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24",
        "aria-hidden": true,
    } as const;

    switch (name) {
        case "file":
            return (
                <svg {...common}>
                    <path
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                    />
                </svg>
            );
        case "refresh":
            return (
                <svg {...common}>
                    <path
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                    />
                </svg>
            );
        case "calendar":
            return (
                <svg {...common}>
                    <path
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                    />
                </svg>
            );
        case "history":
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
    }
}

export default function PayrollCompliance() {
    return (
        <section className="bg-slate-50/60 py-14 sm:py-20 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative overflow-hidden rounded-3xl bg-slate-950 px-6 py-12 sm:px-12 sm:py-16">
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -top-32 -left-24 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-purple-600/25 blur-3xl"
                    />
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -bottom-32 -right-24 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-indigo-500/20 blur-3xl"
                    />

                    <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10">
                        <div className="lg:col-span-5">
                            <div className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-white/10 border border-white/15 text-purple-200 mb-5">
                                Compliance
                            </div>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                                Tax and filings,
                                <br />
                                <span className="text-purple-400">handled for you.</span>
                            </h2>
                            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                                Payroll compliance shouldn&apos;t be your team&apos;s job. PeopleHub
                                keeps up with the rules, files on time, and leaves an audit trail
                                you can hand to anyone.
                            </p>
                        </div>

                        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {PAYROLL_COMPLIANCE.map((feature) => (
                                <div
                                    key={feature.title}
                                    className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-300 flex items-center justify-center mb-3">
                                        <ComplianceIcon name={feature.icon} />
                                    </div>
                                    <h3 className="text-sm font-bold text-white">{feature.title}</h3>
                                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}