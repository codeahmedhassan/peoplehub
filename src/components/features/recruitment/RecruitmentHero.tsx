import Link from "next/link";
import { RECRUITMENT_HERO_BADGES } from "@/lib/constants";

function CheckCircle() {
    return (
        <svg
            className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-rose-600 shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
        >
            <path
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
            />
        </svg>
    );
}

function ArrowRight() {
    return (
        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
        </svg>
    );
}

export default function RecruitmentHero() {
    return (
        <section className="relative z-10 pt-20 sm:pt-25 pb-10 sm:pb-12 overflow-hidden hero-bg-gradient">
            {/* Atmospheric swoosh — rose accent */}
            <div className="absolute inset-0 pointer-events-none opacity-30 sm:opacity-40">
                <svg className="w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1440 900" aria-hidden="true">
                    <path
                        d="M-100 200 C300 100, 600 350, 1000 120 C1200 -20, 1400 40, 1600 80"
                        filter="blur(50px)"
                        stroke="url(#recruitment-hero-swoosh)"
                        strokeLinecap="round"
                        strokeWidth={60}
                    />
                    <defs>
                        <linearGradient id="recruitment-hero-swoosh" x1="0%" x2="100%" y1="0%" y2="100%">
                            <stop stopColor="#fda4af" stopOpacity="0.45" />
                            <stop offset="100%" stopColor="#fecdd3" stopOpacity="0.25" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Breadcrumb */}
                <nav aria-label="Breadcrumb" className="mb-6 sm:mb-8 flex justify-start">
                    <ol className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-medium text-slate-500">
                        <li>
                            <Link href="/features" className="hover:text-rose-600 transition-colors">
                                Features
                            </Link>
                        </li>
                        <li aria-hidden="true" className="text-slate-300">/</li>
                        <li className="text-slate-900 font-semibold">Recruitment</li>
                    </ol>
                </nav>

                {/* Handwritten annotation */}
                <div className="hidden lg:block absolute right-10 top-8 select-none pointer-events-none">
                    <div className="relative text-rose-600 font-handwriting text-2xl leading-tight -rotate-4">
                        Hire
                        <br />
                        The
                        <br />
                        Best
                        <svg
                            className="absolute -bottom-10 -left-12 w-14 h-14 text-rose-500 -rotate-12"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 54 48"
                            aria-hidden="true"
                        >
                            <path
                                d="M42 4 C32 18, 12 16, 8 36 M8 36 L16 36 M8 36 L9 26"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2.2}
                            />
                        </svg>
                    </div>
                </div>

                <div className="text-center max-w-3xl mx-auto">
                    {/* Pill */}
                    <div className="inline-flex items-center px-3 py-1 sm:px-3.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold tracking-wide uppercase bg-rose-100/70 text-rose-700 mb-4 sm:mb-5">
                        Recruitment
                    </div>

                    {/* Headline */}
                    <h1 className="text-[32px] leading-[1.15] sm:text-4xl sm:leading-[1.12] md:text-5xl lg:text-[3.4rem] lg:leading-[1.12] font-extrabold text-slate-900 tracking-tight">
                        Hire great people,
                        <br className="hidden sm:block" />{" "}
                        <span className="text-rose-600">without the chaos.</span>
                    </h1>

                    {/* Sub */}
                    <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed px-2">
                        A branded careers page, a drag-and-drop pipeline, structured
                        interviews, and offer-to-onboarding automation — everything your
                        hiring team needs in one place.
                    </p>

                    {/* Badges */}
                    <div className="mt-5 sm:mt-6 flex flex-wrap items-center justify-center gap-y-2 gap-x-4 sm:gap-x-6 text-[11px] sm:text-xs md:text-sm font-medium text-slate-700">
                        {RECRUITMENT_HERO_BADGES.map((badge) => (
                            <div key={badge} className="flex items-center gap-1.5">
                                <CheckCircle />
                                <span>{badge}</span>
                            </div>
                        ))}
                    </div>

                    {/* CTAs */}
                    <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-3.5">
                        <Link
                            href="/signup"
                            className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-rose-600 text-white font-semibold text-sm hover:bg-rose-700 transition-all shadow-md hover:shadow-lg"
                        >
                            <span>Start free trial</span>
                            <ArrowRight />
                        </Link>
                        <a
                            href="#demo"
                            className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-white border border-slate-200 text-slate-700 font-semibold text-sm hover:bg-slate-50 transition-colors shadow-sm"
                        >
                            <svg className="w-4 h-4 text-rose-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <circle cx="12" cy="12" fill="none" r="10" stroke="currentColor" strokeWidth={2} />
                                <polygon fill="currentColor" points="10,8 16,12 10,16" />
                            </svg>
                            <span>Watch a demo</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}