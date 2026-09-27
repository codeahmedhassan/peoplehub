import { EMPLOYEE_CAPABILITIES, type EmployeeCapability } from "@/lib/constants";

function CapabilityIcon({ name }: { name: EmployeeCapability["icon"] }) {
    const common = {
        className: "w-5 h-5 sm:w-6 sm:h-6",
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24",
        "aria-hidden": true,
    } as const;

    switch (name) {
        case "profile":
            return (
                <svg {...common}>
                    <path
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                    />
                </svg>
            );
        case "org":
            return (
                <svg {...common}>
                    <path
                        d="M12 4v4m0 0H8a2 2 0 00-2 2v2m6-4h4a2 2 0 012 2v2M6 16h4m8 0h-4m-4 0v4m8-4v4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                    />
                    <circle cx="12" cy="4" r="2" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                    <circle cx="6" cy="20" r="2" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                    <circle cx="18" cy="20" r="2" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                    <circle cx="6" cy="12" r="2" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                    <circle cx="18" cy="12" r="2" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                </svg>
            );
        case "docs":
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
        case "search":
            return (
                <svg {...common}>
                    <path
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
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
        case "permissions":
            return (
                <svg {...common}>
                    <path
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                    />
                </svg>
            );
    }
}

const accentStyles: Record<
    EmployeeCapability["accent"],
    { bg: string; text: string; hover: string }
> = {
    blue: { bg: "bg-blue-100/70", text: "text-blue-600", hover: "hover:border-blue-100" },
    emerald: { bg: "bg-emerald-100/70", text: "text-emerald-600", hover: "hover:border-emerald-100" },
    purple: { bg: "bg-purple-100/70", text: "text-purple-600", hover: "hover:border-purple-100" },
    amber: { bg: "bg-amber-100/70", text: "text-amber-600", hover: "hover:border-amber-100" },
    rose: { bg: "bg-rose-100/70", text: "text-rose-500", hover: "hover:border-rose-100" },
    cyan: { bg: "bg-cyan-100/70", text: "text-cyan-600", hover: "hover:border-cyan-100" },
};

export default function EmployeeCapabilities() {
    return (
        <section className="bg-slate-50/60 py-14 sm:py-20 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-14">
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wide bg-blue-100/70 text-blue-600 mb-3">
                        What you get
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-tight">
                        Everything about
                        <br className="hidden sm:block" />{" "}
                        <span className="text-blue-600">every employee.</span>
                    </h2>
                    <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-600">
                        Six core capabilities that turn scattered records into a single, trustworthy
                        source of truth.
                    </p>
                </div>

                {/* Grid: 1 → 2 → 3 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
                    {EMPLOYEE_CAPABILITIES.map((cap) => {
                        const styles = accentStyles[cap.accent];
                        return (
                            <div
                                key={cap.id}
                                className={`p-5 sm:p-6 rounded-2xl border border-slate-100 bg-white ${styles.hover} hover:shadow-card-soft transition-all duration-300 flex items-start gap-3.5 sm:gap-4`}
                            >
                                <div
                                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl ${styles.bg} ${styles.text} flex items-center justify-center shrink-0`}
                                >
                                    <CapabilityIcon name={cap.icon} />
                                </div>
                                <div className="min-w-0">
                                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                                        {cap.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-slate-500 mt-1.5 leading-relaxed">
                                        {cap.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}