export default function PlanGuidanceBanner() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
            <div className="bg-blue-50/60 rounded-2xl border border-blue-100 p-5 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-600/10 text-blue-600 flex items-center justify-center shrink-0">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path
                                d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.8}
                            />
                        </svg>
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900 text-base sm:text-lg">
                            Not sure which plan is right for you?
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                            Answer a few questions and we&apos;ll recommend the best plan for your team.
                        </p>
                    </div>
                </div>
                <div className="w-full md:w-auto shrink-0">
                    <a
                        href="#"
                        className="w-full md:w-auto inline-flex items-center justify-center gap-1.5 px-6 py-2.5 rounded-full bg-white border border-blue-200 text-blue-600 text-sm font-semibold hover:bg-blue-50 transition-colors shadow-sm"
                    >
                        Help me choose
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}