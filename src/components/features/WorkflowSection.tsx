import { WORKFLOW_STEPS } from "@/lib/constants";

export default function WorkflowSection() {
    return (
        <section className="py-24 bg-slate-50/60">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide bg-blue-100/70 text-blue-600 mb-3">
                        How it flows
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                        Your HR runs <span className="text-blue-600">on autopilot.</span>
                    </h2>
                    <p className="mt-3 text-sm sm:text-base text-slate-600">
                        Every module feeds the next. Data is captured, transformed, and surfaced — without
                        anyone re-typing a single field.
                    </p>
                </div>

                {/* Steps with connecting line */}
                <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div
                        aria-hidden="true"
                        className="hidden md:block absolute top-17 left-[16%] right-[16%] h-px bg-linear-to-r from-transparent via-blue-200 to-transparent"
                    />

                    {WORKFLOW_STEPS.map((step) => (
                        <div
                            key={step.step}
                            className="relative p-7 rounded-2xl border border-slate-100 bg-white hover:shadow-card-soft transition-all duration-300"
                        >
                            <div className="flex items-center justify-between mb-5">
                                <div className="w-12 h-12 rounded-xl bg-blue-100/70 text-blue-600 flex items-center justify-center font-extrabold text-sm shrink-0">
                                    {step.step}
                                </div>
                                <span className="text-2xl font-extrabold text-slate-100 tracking-tight">
                                    {step.step}
                                </span>
                            </div>
                            <h3 className="text-base font-bold text-slate-900">{step.title}</h3>
                            <p className="text-xs text-slate-500 mt-2 leading-relaxed">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}