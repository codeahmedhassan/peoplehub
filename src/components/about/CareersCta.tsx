import Image from "next/image";

export default function CareersCta() {
    return (
        <section id="careers" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 sm:pb-20 lg:pb-24">
            <div className="relative rounded-3xl bg-linear-to-r from-blue-50/90 via-sky-50/60 to-indigo-50/70 border border-blue-100/60 p-6 sm:p-10 lg:p-14 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-center">
                    {/* Copy */}
                    <div className="lg:col-span-6 z-10">
                        <div className="inline-flex items-center px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-bold tracking-wider uppercase bg-white/80 text-blue-600 mb-4">
                            We&apos;re hiring
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-tight">
                            Come build
                            <br className="hidden sm:block" />{" "}
                            <span className="text-blue-600">the future of work.</span>
                        </h2>
                        <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed max-w-md">
                            We&apos;re a remote-first team of 48 across 12 countries. If you care
                            deeply about craft, ownership, and making HR feel human — we&apos;d
                            love to meet you.
                        </p>
                        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
                            <a
                                href="#"
                                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-slate-950 text-white font-semibold text-sm hover:bg-slate-800 transition-all shadow-md"
                            >
                                View open roles
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="inline-flex items-center justify-center px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-white border border-slate-200 text-slate-800 font-semibold text-sm hover:bg-slate-50 transition-colors"
                            >
                                Meet the team
                            </a>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="lg:col-span-6 relative">
                        <div className="relative rounded-2xl overflow-hidden shadow-lg border border-white aspect-4/3 sm:aspect-16/10">
                            <Image
                                alt="PeopleHub team members at a company gathering"
                                className="w-full h-full object-cover"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWwX_VW-rgBTDDXaGjgDsoWH2slQzTFt_8uqd5ejjrQuDFpaGYPNiHkqEX0LaMO9lQZWCm2mMpbnZsUiMUp7RW0NbJTXBp-4nU7RPA-dzPelDgvJ1eF0CdjIh0_1Gq5QUVJvGrpQHLsUzLP_t4L1xUrQtkvgyiJXg1HVVPHkR_eEORabvFb3pEONylzK0LXJ8fod0KHsALKJ0_WhQf6Ph1ntD6BCZsdXy5y0iFSRWsHBdl_FA8rIsrIQ"
                                width={800}
                                height={500}
                                unoptimized
                            />
                        </div>

                        {/* Floating card — pinned bottom-left on all sizes */}
                        <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-md border border-slate-100 max-w-45 sm:max-w-55">
                            <p className="text-[11px] sm:text-xs font-bold text-slate-900 leading-snug">
                                Remote-first.
                                <br />
                                Globally minded.
                            </p>
                            <p className="text-[9px] sm:text-[10px] text-slate-500 mt-1.5">
                                Hubs in Lisbon · Berlin · Toronto
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}