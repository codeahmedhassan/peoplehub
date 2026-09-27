import { PRICING_FAQS } from "@/lib/constants";

export default function PricingFaq() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
                <div>
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide bg-blue-100/70 text-blue-600 mb-3">
                        FAQ
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                        Frequently asked <span className="text-blue-600">questions</span>
                    </h2>
                </div>
                <div className="max-w-md text-left lg:text-right">
                    <p className="text-xs sm:text-sm text-slate-500 mb-3 leading-relaxed">
                        Still have questions? We&apos;re here to help. If you can&apos;t find the answer
                        you&apos;re looking for, feel free to contact our support team.
                    </p>
                    <a
                        href="#"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-slate-300 text-xs sm:text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                    >
                        Contact support
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                        </svg>
                    </a>
                </div>
            </div>

            {/* 2-column grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Column 1 */}
                <div className="space-y-4">
                    {PRICING_FAQS.slice(0, 4).map((item) => (
                        <FaqItem key={item.question} question={item.question} answer={item.answer} />
                    ))}
                </div>
                {/* Column 2 */}
                <div className="space-y-4">
                    {PRICING_FAQS.slice(4).map((item) => (
                        <FaqItem key={item.question} question={item.question} answer={item.answer} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
    return (
        <details className="group border border-slate-200/90 rounded-2xl p-4 bg-white open:shadow-card-soft transition-all">
            <summary className="w-full flex items-center justify-between text-left cursor-pointer list-none">
                <span className="text-sm sm:text-[15px] font-semibold text-slate-800 flex items-center gap-2">
                    <svg
                        className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-open:text-blue-600 group-open:rotate-90 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                    >
                        <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                    </svg>
                    {question}
                </span>
                <span
                    aria-hidden="true"
                    className="text-slate-400 text-lg font-light group-hover:text-blue-600 group-open:text-blue-600 group-open:hidden"
                >
                    +
                </span>
                <span
                    aria-hidden="true"
                    className="hidden group-open:inline text-blue-600 text-lg font-light"
                >
                    -
                </span>
            </summary>
            <div className="mt-3 pl-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                {answer}
            </div>
        </details>
    );
}