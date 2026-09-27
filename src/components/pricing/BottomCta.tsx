import Image from "next/image";
import { BOTTOM_CTA_IMAGE, BOTTOM_CTA_AVATARS } from "@/lib/constants";

export default function BottomCta() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
            <div className="relative rounded-3xl bg-linear-to-r from-blue-100/70 via-indigo-50/50 to-blue-200/40 border border-blue-100/80 p-8 sm:p-12 lg:p-14 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Left copy */}
                    <div className="lg:col-span-6 z-10">
                        <div className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-blue-100 text-blue-600 mb-4">
                            GET STARTED TODAY
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                            Ready to build a better workplace?
                        </h2>
                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8 max-w-md">
                            Join thousands of companies that trust PeopleHub to manage their most important
                            asset — their people.
                        </p>
                        <div className="flex flex-wrap items-center gap-3">
                            <a
                                href="#"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 transition-all shadow-md"
                            >
                                Start free trial
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white border border-slate-200 text-slate-800 text-sm font-semibold hover:bg-slate-50 transition-colors shadow-sm"
                            >
                                Contact sales
                            </a>
                        </div>
                    </div>

                    {/* Right visual */}
                    <div className="lg:col-span-6 relative flex justify-center items-center">
                        {/* Handwritten annotation */}
                        <div className="absolute top-2 right-4 z-20 pointer-events-none hidden sm:block">
                            <div className="font-handwriting text-blue-600 text-2xl leading-none text-right">
                                People
                                <br />
                                Drive
                                <br />
                                Progress
                                <svg
                                    className="w-12 h-12 ml-auto mt-1 text-blue-600 stroke-current fill-none"
                                    viewBox="0 0 48 40"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M38 4 C32 16, 20 24, 6 28 M6 28 L14 20 M6 28 L15 34"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2.2}
                                    />
                                </svg>
                            </div>
                        </div>

                        {/* Image + floating card */}
                        <div className="relative w-full max-w-md">
                            <div className="relative rounded-2xl overflow-hidden aspect-4/3 sm:aspect-[1.15/1] shadow-xl">
                                <Image
                                    alt="Smiling business leader"
                                    className="w-full h-full object-cover object-top"
                                    src={BOTTOM_CTA_IMAGE}
                                    width={640}
                                    height={560}
                                    unoptimized
                                />
                            </div>

                            <div className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-slate-100 shadow-xl max-w-52.5 z-20">
                                <p className="text-xs font-bold text-slate-900 leading-snug">
                                    Great teams build great things.
                                </p>
                                <div className="mt-2 flex items-center gap-2">
                                    <div className="flex -space-x-1.5 overflow-hidden">
                                        {BOTTOM_CTA_AVATARS.map((src, i) => (
                                            <Image
                                                key={i}
                                                alt={`User Avatar ${i + 1}`}
                                                className="inline-block h-5 w-5 rounded-full ring-1 ring-white object-cover"
                                                src={src}
                                                width={20}
                                                height={20}
                                                unoptimized
                                            />
                                        ))}
                                    </div>
                                    <div className="text-[10px] leading-tight">
                                        <span className="font-bold text-slate-800 block">10K+ teams</span>
                                        <span className="text-slate-400">choose PeopleHub</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}