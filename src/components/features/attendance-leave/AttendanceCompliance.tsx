import { ATTENDANCE_COMPLIANCE } from "@/lib/constants";

function ComplianceIcon({
    name,
}: {
    name: "scale" | "history" | "globe" | "lock";
}) {
    const common = {
        className: "w-5 h-5",
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24",
        "aria-hidden": true,
    } as const;

    switch (name) {
        case "scale":
            return (
                <svg {...common}>
                    <path
                        d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
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
        case "globe":
            return (
                <svg {...common}>
                    <path
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                    />
                </svg>
            );
        case "lock":
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

export default function AttendanceCompliance() {
    return (
        <section className="bg-slate-50/60 py-14 sm:py-20 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative overflow-hidden rounded-3xl bg-slate-950 px-6 py-12 sm:px-12 sm:py-16">
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -top-32 -left-24 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-emerald-600/25 blur-3xl"
                    />
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -bottom-32 -right-24 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-teal-500/20 blur-3xl"
                    />

                    <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10">
                        <div className="lg:col-span-5">
                            <div className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-white/10 border border-white/15 text-emerald-200 mb-5">
                                Labor compliance
                            </div>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                                Compliant by default,
                                <br />
                                <span className="text-emerald-400">in every region.</span>
                            </h2>
                            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                                Working time rules differ everywhere. PeopleHub ships with
                                pre-built rules for 60+ countries and audit-ready logging — so
                                you don&apos;t have to become an employment lawyer.
                            </p>
                        </div>

                        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {ATTENDANCE_COMPLIANCE.map((feature) => (
                                <div
                                    key={feature.title}
                                    className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center mb-3">
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