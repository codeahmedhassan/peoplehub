import { ATTENDANCE_LEAVE_TYPES } from "@/lib/constants";

function LeaveIcon({
    name,
}: {
    name: "sun" | "health" | "family" | "book" | "heart" | "clock";
}) {
    const common = {
        className: "w-5 h-5",
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24",
        "aria-hidden": true,
    } as const;

    switch (name) {
        case "sun":
            return (
                <svg {...common}>
                    <path
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                    />
                </svg>
            );
        case "health":
            return (
                <svg {...common}>
                    <path
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                    />
                </svg>
            );
        case "family":
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
        case "book":
            return (
                <svg {...common}>
                    <path
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                    />
                </svg>
            );
        case "heart":
            return (
                <svg {...common}>
                    <path
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                    />
                </svg>
            );
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
    }
}

const accentStyles: Record<
    "amber" | "rose" | "purple" | "blue" | "emerald" | "cyan",
    { bg: string; text: string; hover: string }
> = {
    amber: { bg: "bg-amber-100/70", text: "text-amber-600", hover: "hover:border-amber-100" },
    rose: { bg: "bg-rose-100/70", text: "text-rose-500", hover: "hover:border-rose-100" },
    purple: { bg: "bg-purple-100/70", text: "text-purple-600", hover: "hover:border-purple-100" },
    blue: { bg: "bg-blue-100/70", text: "text-blue-600", hover: "hover:border-blue-100" },
    emerald: { bg: "bg-emerald-100/70", text: "text-emerald-600", hover: "hover:border-emerald-100" },
    cyan: { bg: "bg-cyan-100/70", text: "text-cyan-600", hover: "hover:border-cyan-100" },
};

export default function AttendanceLeavePolicies() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-14">
                <div className="max-w-lg">
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wide bg-emerald-100/70 text-emerald-700 mb-3">
                        Leave policies
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-tight">
                        Every leave type.
                        <br className="hidden sm:block" />{" "}
                        <span className="text-emerald-600">Every rule. One place.</span>
                    </h2>
                </div>
                <p className="text-sm sm:text-base text-slate-600 max-w-md leading-relaxed">
                    Configure everything — from accrual rates to approval chains — per team,
                    region, or seniority. Compliance is built in, not bolted on.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                {ATTENDANCE_LEAVE_TYPES.map((leave) => {
                    const styles = accentStyles[leave.accent];
                    return (
                        <div
                            key={leave.name}
                            className={`p-5 sm:p-6 rounded-2xl border border-slate-100 bg-white ${styles.hover} hover:shadow-card-soft transition-all duration-300`}
                        >
                            <div
                                className={`w-11 h-11 rounded-xl ${styles.bg} ${styles.text} flex items-center justify-center mb-4`}
                            >
                                <LeaveIcon name={leave.icon} />
                            </div>
                            <h3 className="text-sm sm:text-base font-bold text-slate-900">
                                {leave.name}
                            </h3>
                            <p className="text-xs sm:text-sm text-slate-500 mt-1.5 leading-relaxed">
                                {leave.detail}
                            </p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}