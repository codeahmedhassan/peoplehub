import { FAQS } from "@/lib/constants";

export default function Faq() {
    return (
        <section className="py-24 bg-white" id="faq">
            <div className="max-w-310 mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Left: heading */}
                    <div className="lg:col-span-5">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold tracking-wide mb-4">
                            FAQ
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-tight">
                            Questions,
                            <br />
                            <span className="text-blue-600">answered.</span>
                        </h2>
                        <p className="mt-4 text-slate-600 text-sm leading-relaxed max-w-sm">
                            Everything you need to know about PeopleHub. Can&apos;t find what you&apos;re
                            looking for? Reach out to our team — we reply within a few hours.
                        </p>
                        <a
                            className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors"
                            href="#contact"
                        >
                            Contact support
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                />
                            </svg>
                        </a>
                    </div>

                    {/* Right: accordion */}
                    <div className="lg:col-span-7 space-y-3">
                        {FAQS.map((item, i) => (
                            <details
                                key={item.question}
                                className="group rounded-2xl border border-slate-100 bg-white open:shadow-card-soft transition-all duration-300"
                                open={i === 0}
                            >
                                <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none">
                                    <span className="text-sm sm:text-base font-bold text-slate-900">
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
                                <div className="px-5 pb-5 -mt-1">
                                    <p className="text-sm text-slate-600 leading-relaxed">{item.answer}</p>
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}