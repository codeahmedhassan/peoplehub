import { FEATURES_HERO_BADGES } from "@/lib/constants";

function CheckCircle() {
    return (
        <svg
            className="w-4 h-4 text-blue-600"
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
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
        </svg>
    );
}

export default function FeaturesHero() {
    return (
        <section className="relative z-10 pt-30 pb-12 overflow-hidden hero-bg-gradient">
            {/* Atmospheric swoosh */}
            <div className="absolute inset-0 pointer-events-none opacity-40">
                <svg
                    className="w-full h-full"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 1440 900"
                    aria-hidden="true"
                >
                    <path
                        d="M-100 200 C300 100, 600 350, 1000 120 C1200 -20, 1400 40, 1600 80"
                        filter="blur(50px)"
                        stroke="url(#features-hero-swoosh)"
                        strokeLinecap="round"
                        strokeWidth={60}
                    />
                    <defs>
                        <linearGradient id="features-hero-swoosh" x1="0%" x2="100%" y1="0%" y2="100%">
                            <stop stopColor="#93c5fd" stopOpacity="0.6" />
                            <stop offset="100%" stopColor="#c7d2fe" stopOpacity="0.3" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Handwritten annotation */}
                <div className="hidden lg:block absolute right-10 top-0 select-none pointer-events-none">
                    <div className="relative text-blue-600 font-handwriting text-2xl leading-tight -rotate-4">
                        Every Tool
                        <br />
                        Your Team
                        <br />
                        Actually
                        <br />
                        Needs
                        <svg
                            className="absolute -bottom-10 -left-12 w-14 h-14 text-blue-500 -rotate-12"
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
                    {/* Pill badge */}
                    <div className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-blue-100/70 text-blue-600 mb-5">
                        FEATURES
                    </div>

                    {/* Headline */}
                    <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold text-slate-900 tracking-tight leading-[1.12]">
                        Every HR process,
                        <br />
                        <span className="text-blue-600">beautifully connected.</span>
                    </h1>

                    {/* Subheading */}
                    <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        From the first interview to the final payslip, PeopleHub replaces the scattered
                        spreadsheets and disconnected tools your team relies on today.
                    </p>

                    {/* Trust badges */}
                    <div className="mt-6 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs sm:text-sm font-medium text-slate-700">
                        {FEATURES_HERO_BADGES.map((badge) => (
                            <div key={badge} className="flex items-center gap-1.5">
                                <CheckCircle />
                                <span>{badge}</span>
                            </div>
                        ))}
                    </div>

                    {/* CTAs */}
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
                        <a
                            href="#get-started"
                            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-slate-950 text-white font-semibold text-sm hover:bg-slate-800 transition-all shadow-md hover:shadow-lg"
                        >
                            <span>Start free trial</span>
                            <ArrowRight />
                        </a>
                        <a
                            href="#demo"
                            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-white border border-slate-200 text-slate-700 font-semibold text-sm hover:bg-slate-50 transition-colors shadow-sm"
                        >
                            <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <circle cx="12" cy="12" fill="none" r="10" stroke="currentColor" strokeWidth={2} />
                                <polygon fill="currentColor" points="10,8 16,12 10,16" />
                            </svg>
                            <span>Watch product tour</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}