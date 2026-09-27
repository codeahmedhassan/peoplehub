function ArrowRight() {
    return (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
        </svg>
    );
}

export default function PayrollCta() {
    return (
        <section className="py-14 sm:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative overflow-hidden rounded-3xl bg-slate-950 px-6 sm:px-12 lg:px-16 py-12 sm:py-16 lg:py-20 text-center">
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -top-32 -left-24 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-purple-600/30 blur-3xl"
                    />
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -bottom-32 -right-24 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-indigo-500/25 blur-3xl"
                    />

                    <div className="relative max-w-2xl mx-auto">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 border border-white/15 text-purple-200 text-[10px] sm:text-xs font-semibold tracking-wide mb-5 sm:mb-6">
                            14-DAY FREE TRIAL
                        </div>

                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[46px] font-extrabold text-white tracking-tight leading-tight">
                            Close payroll in
                            <br className="hidden sm:block" />{" "}
                            an afternoon, not a week.
                        </h2>
                        <p className="mt-4 sm:mt-5 text-slate-300 text-sm sm:text-base leading-relaxed max-w-lg mx-auto">
                            Start free, migrate your payroll, and see why finance teams
                            love Mondays again.
                        </p>

                        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-3.5">
                            <a
                                href="#trial"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-slate-900 font-semibold text-sm hover:bg-slate-100 transition-all shadow-lg"
                            >
                                <span>Start free trial</span>
                                <ArrowRight />
                            </a>
                            <a
                                href="/pricing"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/5 border border-white/15 text-white font-semibold text-sm hover:bg-white/10 transition-all"
                            >
                                See pricing
                            </a>
                        </div>

                        <p className="mt-5 sm:mt-6 text-[11px] sm:text-xs text-slate-400">
                            No credit card required · Cancel anytime
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}