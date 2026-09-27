import Link from "next/link";
import { RELATED_FEATURES } from "@/lib/constants";

function RelatedIcon({ name }: { name: "clock" | "wallet" | "chart" }) {
    const common = {
        className: "w-5 h-5",
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
        case "wallet":
            return (
                <svg {...common}>
                    <path
                        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                    />
                </svg>
            );
        case "chart":
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

const accentStyles = {
    emerald: { bg: "bg-emerald-100/70", text: "text-emerald-600", hover: "hover:border-emerald-100" },
    purple: { bg: "bg-purple-100/70", text: "text-purple-600", hover: "hover:border-purple-100" },
    cyan: { bg: "bg-cyan-100/70", text: "text-cyan-600", hover: "hover:border-cyan-100" },
};

export default function RelatedFeatures() {
    return (
        <section className="bg-slate-50/60 py-14 sm:py-20 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wide bg-blue-100/70 text-blue-600 mb-3">
                        Related features
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                        Employee Management works best
                        <br className="hidden sm:block" />{" "}
                        <span className="text-blue-600">with the whole platform.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                    {RELATED_FEATURES.map((feature) => {
                        const styles = accentStyles[feature.accent];
                        return (
                            <Link
                                key={feature.title}
                                href={feature.href}
                                className={`group p-5 sm:p-6 rounded-2xl border border-slate-100 bg-white ${styles.hover} hover:shadow-card-soft transition-all duration-300 flex flex-col`}
                            >
                                <div
                                    className={`w-11 h-11 rounded-xl ${styles.bg} ${styles.text} flex items-center justify-center mb-4`}
                                >
                                    <RelatedIcon name={feature.icon} />
                                </div>
                                <h3 className="text-base font-bold text-slate-900">{feature.title}</h3>
                                <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed flex-1">
                                    {feature.description}
                                </p>
                                <span
                                    className={`inline-flex items-center gap-1.5 text-sm font-bold mt-4 ${styles.text}`}
                                >
                                    Explore
                                    <svg
                                        className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                                    </svg>
                                </span>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}