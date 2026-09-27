import {
    ATTENDANCE_CAPABILITIES,
    type AttendanceCapability,
} from "@/lib/constants";

function CapabilityIcon({ name }: { name: AttendanceCapability["icon"] }) {
    const common = {
        className: "w-5 h-5 sm:w-6 sm:h-6",
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24",
        "aria-hidden": true,
    } as const;

    switch (name) {
        case "clock":
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
        case "geo":
            return (
                <svg {...common}>
                    <path
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                    />
                    <path
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                    />
                </svg>
            );
        case "mobile":
            return (
                <svg {...common}>
                    <path
                        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                    />
                </svg>
            );
        case "policy":
            return (
                <svg {...common}>
                    <path
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                    />
                </svg>
            );
        case "report":
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
}

const accentStyles: Record<
    AttendanceCapability["accent"],
    { bg: string; text: string; hover: string }
> = {
    blue: { bg: "bg-blue-100/70", text: "text-blue-600", hover: "hover:border-blue-100" },
    emerald: { bg: "bg-emerald-100/70", text: "text-emerald-600", hover: "hover:border-emerald-100" },
    purple: { bg: "bg-purple-100/70", text: "text-purple-600", hover: "hover:border-purple-100" },
    amber: { bg: "bg-amber-100/70", text: "text-amber-600", hover: "hover:border-amber-100" },
    rose: { bg: "bg-rose-100/70", text: "text-rose-500", hover: "hover:border-rose-100" },
    cyan: { bg: "bg-cyan-100/70", text: "text-cyan-600", hover: "hover:border-cyan-100" },
};

export default function AttendanceCapabilities() {
    return (
        <section className="bg-slate-50/60 py-14 sm:py-20 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-14">
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wide bg-emerald-100/70 text-emerald-700 mb-3">
                        What you get
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-tight">
                        Every hour,
                        <br className="hidden sm:block" />{" "}
                        <span className="text-emerald-600">accounted for.</span>
                    </h2>
                    <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-600">
                        Six pillars that turn time and leave into data your finance team can
                        actually use.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
                    {ATTENDANCE_CAPABILITIES.map((cap) => {
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