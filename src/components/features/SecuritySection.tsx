import { SECURITY_FEATURES } from "@/lib/constants";

function SecurityIcon({
    name,
}: {
    name: "shield" | "lock" | "globe" | "key" | "users" | "activity";
}) {
    const common = {
        className: "w-5 h-5",
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24",
        "aria-hidden": true,
    } as const;

    switch (name) {
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
        case "key":
            return (
                <svg {...common}>
                    <path
                        d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                    />
                </svg>
            );
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
        case "activity":
            return (
                <svg {...common}>
                    <path
                        d="M22 12h-4l-3 9L9 3l-3 9H2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                    />
                </svg>
            );
    }
}

export default function SecuritySection() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
            <div className="relative overflow-hidden rounded-3xl bg-slate-950 px-6 py-14 sm:px-12 sm:py-16">
                {/* Atmospheric glows */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-32 -left-24 w-96 h-96 rounded-full bg-blue-600/25 blur-3xl"
                />
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-32 -right-24 w-96 h-96 rounded-full bg-indigo-500/20 blur-3xl"
                />

                <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10">
                    {/* Left copy */}
                    <div className="lg:col-span-5">
                        <div className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-white/10 border border-white/15 text-blue-200 mb-5">
                            Trust & security
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                            Enterprise-grade security,
                            <br />
                            <span className="text-blue-400">built in from day one.</span>
                        </h2>
                        <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                            Your people data deserves more than a spreadsheet. We hold ourselves to the
                            strictest compliance and security standards — audited, encrypted, and
                            always available.
                        </p>
                        <a
                            href="#"
                            className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-slate-900 font-semibold text-sm hover:bg-slate-100 transition-all"
                        >
                            Read our security overview
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                            </svg>
                        </a>
                    </div>

                    {/* Right grid */}
                    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {SECURITY_FEATURES.map((feature) => (
                            <div
                                key={feature.title}
                                className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                            >
                                <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-300 flex items-center justify-center mb-3">
                                    <SecurityIcon name={feature.icon} />
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
        </section>
    );
}