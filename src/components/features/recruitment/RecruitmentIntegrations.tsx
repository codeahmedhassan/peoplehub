import { RECRUITMENT_INTEGRATIONS } from "@/lib/constants";

export default function RecruitmentIntegrations() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-14">
                <div className="max-w-lg">
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wide bg-rose-100/70 text-rose-700 mb-3">
                        Integrations
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-tight">
                        Where you source,
                        <br className="hidden sm:block" />{" "}
                        <span className="text-rose-600">we connect.</span>
                    </h2>
                </div>
                <p className="text-sm sm:text-base text-slate-600 max-w-md leading-relaxed">
                    Job boards, calendar tools, video platforms, and e-signature — all
                    native, all in one pipeline.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {RECRUITMENT_INTEGRATIONS.map((integration) => (
                    <div
                        key={integration.name}
                        className="flex items-start gap-3 p-4 rounded-2xl border border-slate-100 bg-white hover:border-slate-200 hover:shadow-card-soft transition-all duration-300"
                    >
                        <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center font-extrabold text-sm shrink-0">
                            {integration.name.charAt(0)}
                        </div>
                        <div className="min-w-0">
                            <p className="text-sm font-bold text-slate-900 truncate">
                                {integration.name}
                            </p>
                            <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                                {integration.purpose}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-8 text-center">
                <a
                    href="/features"
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-900 hover:text-rose-600 transition-colors"
                >
                    See all 40+ integrations
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                    </svg>
                </a>
            </div>
        </section>
    );
}