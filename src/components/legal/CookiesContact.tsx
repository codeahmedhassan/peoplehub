function ArrowRight() {
    return (
        <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
        >
            <path
                d="M14 5l7 7m0 0l-7 7m7-7H3"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
            />
        </svg>
    );
}

function CookieIcon() {
    return (
        <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
        >
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.6" />
            <circle cx="9" cy="9" r="1.2" fill="currentColor" />
            <circle cx="15" cy="10" r="1.2" fill="currentColor" />
            <circle cx="10" cy="15" r="1.2" fill="currentColor" />
            <circle cx="15" cy="15.5" r="1.2" fill="currentColor" />
        </svg>
    );
}

export default function CookiesContact() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-24">
            <div className="rounded-3xl border border-slate-100 bg-linear-to-br from-blue-50/60 via-white to-indigo-50/50 p-6 sm:p-10 lg:p-12">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    {/* Copy */}
                    <div className="max-w-lg">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wide bg-white text-blue-600 border border-blue-100 mb-3">
                            <CookieIcon />
                            Questions about cookies?
                        </div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                            We&apos;re happy to explain exactly what we store.
                        </h2>
                        <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                            Whether you&apos;re doing a privacy review, preparing a DPA, or just
                            curious about a specific cookie — our privacy team can walk you
                            through every category in detail.
                        </p>

                        {/* Quick facts row */}
                        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] sm:text-xs text-slate-500">
                            <span className="inline-flex items-center gap-1.5">
                                <span
                                    aria-hidden="true"
                                    className="w-1.5 h-1.5 rounded-full bg-emerald-500"
                                />
                                Reply within 2 business days
                            </span>
                            <span className="inline-flex items-center gap-1.5">
                                <span
                                    aria-hidden="true"
                                    className="w-1.5 h-1.5 rounded-full bg-blue-500"
                                />
                                GDPR &amp; CCPA knowledgeable team
                            </span>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 lg:shrink-0">
                        <a
                            href="mailto:privacy@peoplehub.com"
                            className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-slate-950 text-white font-semibold text-sm hover:bg-slate-800 transition-all shadow-md"
                        >
                            <span>Email our privacy team</span>
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

                {/* Secondary links row */}
                <div className="mt-8 pt-6 border-t border-slate-200/70 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs sm:text-sm">
                    <span className="text-slate-400 font-medium">Related:</span>
                    <a
                        href="/legal/terms"
                        className="inline-flex items-center gap-1 font-semibold text-slate-700 hover:text-blue-600 transition-colors"
                    >
                        Terms of Service
                        <ArrowRight />
                    </a>
                    <a
                        href="/legal/privacy#cookies"
                        className="inline-flex items-center gap-1 font-semibold text-slate-700 hover:text-blue-600 transition-colors"
                    >
                        Privacy &amp; cookies section
                        <ArrowRight />
                    </a>
                    <a
                        href="/contact"
                        className="inline-flex items-center gap-1 font-semibold text-slate-700 hover:text-blue-600 transition-colors"
                    >
                        General contact
                        <ArrowRight />
                    </a>
                </div>
            </div>
        </section>
    );
}