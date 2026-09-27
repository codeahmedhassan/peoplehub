import Link from "next/link";
import { RECRUITMENT_RELATED } from "@/lib/constants";

function RelatedIcon({ name }: { name: "users" | "wallet" | "target" }) {
    const common = {
        className: "w-5 h-5",
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24",
        "aria-hidden": true,
    } as const;

    switch (name) {
        case "users":
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
        case "target":
            return (
                <svg {...common}>
                    <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                    <circle cx="12" cy="12" r="6" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                    <circle cx="12" cy="12" r="2" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                </svg>
            );
    }
}

const accentStyles = {
    blue: { bg: "bg-blue-100/70", text: "text-blue-600", hover: "hover:border-blue-100" },
    purple: { bg: "bg-purple-100/70", text: "text-purple-600", hover: "hover:border-purple-100" },
    amber: { bg: "bg-amber-100/70", text: "text-amber-600", hover: "hover:border-amber-100" },
};

export default function RelatedFeatures() {
    return (
        <section className="bg-slate-50/60 py-14 sm:py-20 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wide bg-rose-100/70 text-rose-700 mb-3">
                        Related features
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                        Recruitment works best
                        <br className="hidden sm:block" />{" "}
                        <span className="text-rose-600">with the whole platform.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                    {RECRUITMENT_RELATED.map((feature) => {
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