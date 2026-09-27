'use client';
import { FEATURES, type Feature } from "@/lib/constants";
import { useRouter } from "next/navigation";

/* Feature icon resolver */
function FeatureIcon({ icon }: { icon: Feature["icon"] }) {
    const common = {
        className: "w-6 h-6",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        viewBox: "0 0 24 24",
        "aria-hidden": true,
    } as const;

    switch (icon) {
        case "team":
            return (
                <svg {...common}>
                    <path
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
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
                    />
                </svg>
            );
        case "payroll":
            return (
                <svg {...common}>
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 8v8m-3-5h6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            );
        case "recruitment":
            return (
                <svg {...common}>
                    <path
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            );
        case "performance":
            return (
                <svg {...common}>
                    <path
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            );
        case "analytics":
            return (
                <svg {...common}>
                    <path
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            );
    }
}

/* Tailwind can't dynamically generate these, so we map explicitly */
const colorStyles: Record<
    Feature["color"],
    { bg: string; text: string; hover: string }
> = {
    blue: { bg: "bg-blue-100/70", text: "text-blue-600", hover: "hover:border-blue-100" },
    emerald: { bg: "bg-emerald-100/70", text: "text-emerald-600", hover: "hover:border-emerald-100" },
    purple: { bg: "bg-purple-100/70", text: "text-purple-600", hover: "hover:border-purple-100" },
    rose: { bg: "bg-rose-100/70", text: "text-rose-500", hover: "hover:border-rose-100" },
    amber: { bg: "bg-amber-100/70", text: "text-amber-500", hover: "hover:border-amber-100" },
    cyan: { bg: "bg-cyan-100/70", text: "text-cyan-600", hover: "hover:border-cyan-100" },
};

export default function FeaturesSection() {
    const router = useRouter();
    return (
        <section className="py-24 bg-white" id="features">
            <div className="max-w-310 mx-auto px-6">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
                    <div>
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold tracking-wide mb-4">
                            WHY PEOPLEHUB
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-tight">
                            Everything you need
                            <br />
                            to build a <span className="text-blue-600">stronger team.</span>
                        </h2>
                    </div>
                    <div className="max-w-md">
                        <p className="text-slate-600 text-sm leading-relaxed mb-4">
                            PeopleHub brings all your HR processes into one simple, powerful platform — so you
                            can save time, stay compliant, and create a better employee experience.
                        </p>
                        <button
                            onClick={() => router.push("/features")}
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 border border-slate-200 rounded-full px-4 py-2 hover:bg-slate-50 transition-colors cursor-pointer"
                        >Explore all features
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {FEATURES.map((feature) => {
                        const styles = colorStyles[feature.color];
                        return (
                            <div
                                key={feature.title}
                                className={`p-6 rounded-2xl border border-slate-100 bg-white ${styles.hover} hover:shadow-card-soft transition-all duration-300 flex items-start gap-4`}
                            >
                                <div
                                    className={`w-12 h-12 rounded-xl ${styles.bg} ${styles.text} flex items-center justify-center shrink-0`}
                                >
                                    <FeatureIcon icon={feature.icon} />
                                </div>
                                <div>
                                    <h3 className="text-base font-bold text-slate-900">{feature.title}</h3>
                                    <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                                        {feature.description}
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