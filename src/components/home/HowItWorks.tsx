import { HOW_IT_WORKS_STEPS } from "@/lib/constants";

function StepIcon({ name }: { name: "workspace" | "import" | "growth" }) {
    const common = {
        className: "w-6 h-6",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        viewBox: "0 0 24 24",
        "aria-hidden": true,
    } as const;

    switch (name) {
        case "workspace":
            return (
                <svg {...common}>
                    <path
                        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            );
        case "import":
            return (
                <svg {...common}>
                    <path
                        d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            );
        case "growth":
            return (
                <svg {...common}>
                    <path
                        d="M3 17l6-6 4 4 8-8M21 7v6h-6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            );
    }
}

export default function HowItWorks() {
    return (
        <section className="py-24 bg-slate-50" id="how-it-works">
            <div className="max-w-310 mx-auto px-6">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
                    <div>
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold tracking-wide mb-4">
                            HOW IT WORKS
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-tight">
                            Get started in minutes.
                        </h2>
                    </div>
                    <p className="text-slate-500 text-sm max-w-md leading-relaxed">
                        No complex setup. No long training. Just a few simple steps to get your HR system up
                        and running.
                    </p>
                </div>

                {/* Steps */}
                <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* connecting line (desktop only) */}
                    <div
                        aria-hidden="true"
                        className="hidden md:block absolute top-17 left-[16%] right-[16%] h-px bg-linear-to-r from-transparent via-blue-200 to-transparent"
                    />

                    {HOW_IT_WORKS_STEPS.map((step) => (
                        <div
                            key={step.step}
                            className="relative p-7 rounded-2xl border border-slate-100 bg-white hover:shadow-card-soft transition-all duration-300"
                        >
                            <div className="flex items-center justify-between mb-5">
                                <div className="w-12 h-12 rounded-xl bg-blue-100/70 text-blue-600 flex items-center justify-center shrink-0">
                                    <StepIcon name={step.icon} />
                                </div>
                                <span className="text-2xl font-extrabold text-slate-200 tracking-tight">
                                    {step.step}
                                </span>
                            </div>
                            <h3 className="text-base font-bold text-slate-900">{step.title}</h3>
                            <p className="text-xs text-slate-500 mt-2 leading-relaxed">{step.description}</p>
                        </div>
                    ))}
                </div>

                {/* CTA under steps */}
                <div className="mt-12 flex justify-center">
                    <a
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-950 text-white font-semibold text-sm hover:bg-slate-800 transition-all shadow-md"
                        href="#trial"
                    >
                        <span>Start free trial</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}