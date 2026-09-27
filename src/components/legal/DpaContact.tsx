function ArrowRight() {
    return (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
        </svg>
    );
}

export default function DpaContact() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-24">
            <div className="rounded-3xl border border-slate-100 bg-linear-to-br from-blue-50/60 via-white to-indigo-50/50 p-6 sm:p-10 lg:p-12">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    <div className="max-w-lg">
                        <div className="inline-flex items-center px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wide bg-white text-blue-600 border border-blue-100 mb-3">
                            Questions about the DPA?
                        </div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                            Our legal team is happy to help.
                        </h2>
                        <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                            Custom terms, sub-processor questions, SCC addenda, or vendor security
                            reviews — send us a message and we&apos;ll get back to you within 2 business
                            days.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 lg:shrink-0">
                        <a
                            href="mailto:dpa@peoplehub.com"
                            className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-slate-950 text-white font-semibold text-sm hover:bg-slate-800 transition-all shadow-md"
                        >
                            <span>Email dpa@peoplehub.com</span>
                            <ArrowRight />
                        </a>
                        <a
                            href="/legal/privacy"
                            className="inline-flex items-center justify-center px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-white border border-slate-200 text-slate-800 font-semibold text-sm hover:bg-slate-50 transition-colors"
                        >
                            Read Privacy Policy
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}