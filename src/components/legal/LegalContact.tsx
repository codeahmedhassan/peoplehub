import Link from "next/link";

function ArrowRight() {
    return (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
        </svg>
    );
}

export default function LegalContact() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-24">
            <div className="rounded-3xl border border-slate-100 bg-linear-to-br from-blue-50/60 via-white to-indigo-50/50 p-6 sm:p-10 lg:p-12">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    <div className="max-w-lg">
                        <div className="inline-flex items-center px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wide bg-white text-blue-600 border border-blue-100 mb-3">
                            Still have questions?
                        </div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                            We&apos;re happy to walk you through it.
                        </h2>
                        <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                            Our privacy team can answer questions about GDPR, CCPA, data residency,
                            DPAs, or anything else you need for your compliance review.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 lg:shrink-0">
                        <a
                            href="mailto:privacy@peoplehub.com"
                            className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-slate-950 text-white font-semibold text-sm hover:bg-slate-800 transition-all shadow-md"
                        >
                            <span>Email our privacy team</span>
                            <ArrowRight />
                        </a>
                        <Link
                            href="/terms"
                            className="inline-flex items-center justify-center px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-white border border-slate-200 text-slate-800 font-semibold text-sm hover:bg-slate-50 transition-colors"
                        >
                            Read Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}