import { CONTACT_FAQS } from "@/lib/constants";

export default function SupportFaq() {
    return (
        <section className="bg-slate-50/60 py-14 sm:py-20 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                    {/* Left: heading */}
                    <div className="lg:col-span-5">
                        <div className="inline-flex items-center px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wide bg-blue-100/70 text-blue-600 mb-3">
                            Common questions
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-tight">
                            Quick answers,
                            <br className="hidden sm:block" />{" "}
                            <span className="text-blue-600">before you ask.</span>
                        </h2>
                        <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed max-w-sm">
                            A few things people usually want to know when they reach out. If yours
                            isn&apos;t here, just send us a message.
                        </p>
                        <a
                            className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors"
                            href="#contact-form"
                        >
                            Send a message
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                            </svg>
                        </a>
                    </div>

                    {/* Right: accordion */}
                    <div className="lg:col-span-7 space-y-3">
                        {CONTACT_FAQS.map((item, i) => (
                            <details
                                key={item.question}
                                className="group rounded-2xl border border-slate-100 bg-white open:shadow-card-soft transition-all duration-300"
                                open={i === 0}
                            >
                                <summary className="flex items-center justify-between gap-4 p-4 sm:p-5 cursor-pointer list-none">
                                    <span className="text-sm sm:text-base font-bold text-slate-900 pr-2">
                                        {item.question}
                                    </span>
                                    <span
                                        aria-hidden="true"
                                        className="w-7 h-7 shrink-0 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 group-open:bg-blue-600 group-open:border-blue-600 group-open:text-white transition-all"
                                    >
                                        <svg
                                            className="w-3.5 h-3.5 group-open:rotate-45 transition-transform duration-300"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                d="M12 4v16m8-8H4"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2.5}
                                            />
                                        </svg>
                                    </span>
                                </summary>
                                <div className="px-4 sm:px-5 pb-4 sm:pb-5 -mt-1">
                                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                                        {item.answer}
                                    </p>
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}