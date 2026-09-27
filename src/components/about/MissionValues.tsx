import { ABOUT_VALUES } from "@/lib/constants";

function ValueIcon({
    name,
}: {
    name: "heart" | "sparkle" | "shield" | "mountain" | "hands" | "rocket";
}) {
    const common = {
        className: "w-5 h-5 sm:w-6 sm:h-6",
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24",
        "aria-hidden": true,
    } as const;

    switch (name) {
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
        case "sparkle":
            return (
                <svg {...common}>
                    <path
                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                    />
                </svg>
            );
        case "shield":
            return (
                <svg {...common}>
                    <path
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                    />
                </svg>
            );
        case "mountain":
            return (
                <svg {...common}>
                    <path
                        d="M3 20h18M6 20l6-14 3 7 2-3 4 10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                    />
                </svg>
            );
        case "hands":
            return (
                <svg {...common}>
                    <path
                        d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 003 0m0 0V7a1.5 1.5 0 113 0v7.5m0 0V9a1.5 1.5 0 113 0v6.5M7 11.5a1.5 1.5 0 00-1.5 1.5v1.5a4.5 4.5 0 004.5 4.5h4a4.5 4.5 0 004.5-4.5V15a1.5 1.5 0 00-1.5-1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                    />
                </svg>
            );
        case "rocket":
            return (
                <svg {...common}>
                    <path
                        d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                    />
                </svg>
            );
    }
    return null;
}

const accentStyles: Record<
    "blue" | "emerald" | "purple" | "amber" | "rose" | "cyan",
    { bg: string; text: string; hover: string }
> = {
    blue: { bg: "bg-blue-100/70", text: "text-blue-600", hover: "hover:border-blue-100" },
    emerald: { bg: "bg-emerald-100/70", text: "text-emerald-600", hover: "hover:border-emerald-100" },
    purple: { bg: "bg-purple-100/70", text: "text-purple-600", hover: "hover:border-purple-100" },
    amber: { bg: "bg-amber-100/70", text: "text-amber-600", hover: "hover:border-amber-100" },
    rose: { bg: "bg-rose-100/70", text: "text-rose-500", hover: "hover:border-rose-100" },
    cyan: { bg: "bg-cyan-100/70", text: "text-cyan-600", hover: "hover:border-cyan-100" },
};

export default function MissionValues() {
    return (
        <section className="bg-slate-50/60 py-14 sm:py-20 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-14">
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wide bg-blue-100/70 text-blue-600 mb-3">
                        What we believe
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-tight">
                        Six principles,
                        <br className="hidden sm:block" />{" "}
                        <span className="text-blue-600">one obsession.</span>
                    </h2>
                    <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-600">
                        These aren&apos;t poster slogans. They&apos;re the filter every decision runs
                        through — from product design to hiring.
                    </p>
                </div>

                {/* Grid: 1 → 2 → 3 cols */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
                    {ABOUT_VALUES.map((value) => {
                        const styles = accentStyles[value.accent];
                        return (
                            <div
                                key={value.title}
                                className={`p-5 sm:p-6 rounded-2xl border border-slate-100 bg-white ${styles.hover} hover:shadow-card-soft transition-all duration-300 flex items-start gap-3.5 sm:gap-4`}
                            >
                                <div
                                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl ${styles.bg} ${styles.text} flex items-center justify-center shrink-0`}
                                >
                                    <ValueIcon name={value.icon} />
                                </div>
                                <div className="min-w-0">
                                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                                        {value.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-slate-500 mt-1.5 leading-relaxed">
                                        {value.description}
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