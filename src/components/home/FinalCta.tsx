export default function FinalCta() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-310 mx-auto px-6">
                <div className="relative overflow-hidden rounded-3xl bg-slate-950 px-8 py-16 sm:px-16 sm:py-20 text-center">
                    {/* Subtle atmospheric glows */}
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -top-32 -left-24 w-96 h-96 rounded-full bg-blue-600/30 blur-3xl"
                    />
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -bottom-32 -right-24 w-96 h-96 rounded-full bg-indigo-500/25 blur-3xl"
                    />

                    <div className="relative max-w-2xl mx-auto">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 border border-white/15 text-blue-200 text-xs font-semibold tracking-wide mb-6">
                            14-DAY FREE TRIAL
                        </div>

                        <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-white tracking-tight leading-tight">
                            Ready to simplify
                            <br />
                            how you manage people?
                        </h2>
                        <p className="mt-5 text-slate-300 text-sm sm:text-base leading-relaxed max-w-lg mx-auto">
                            Join 10,000+ companies using PeopleHub to run HR smoothly. No credit card, no
                            commitment — just a cleaner way to work.
                        </p>

                        <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
                            <a
                                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-slate-900 font-semibold text-sm hover:bg-slate-100 transition-all shadow-lg"
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
                            <a
                                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/5 border border-white/15 text-white font-semibold text-sm hover:bg-white/10 transition-all"
                                href="#demo"
                            >
                                Book a demo
                            </a>
                        </div>

                        <p className="mt-6 text-xs text-slate-400">
                            No credit card required · Cancel anytime
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}