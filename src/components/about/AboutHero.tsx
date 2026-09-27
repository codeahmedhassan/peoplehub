import { ABOUT_HERO_BADGES } from "@/lib/constants";

function CheckCircle() {
    return (
        <svg
            className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 shrink-0"
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
        <svg
            className="w-3.5 h-3.5 sm:w-4 sm:h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
        >
            <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
        </svg>
    );
}

export default function AboutHero() {
    return (
        <section className="relative z-10 pt-25 sm:pt-30 pb-10 sm:pb-12 overflow-hidden hero-bg-gradient">
            {/* Atmospheric swoosh — reduced opacity on mobile */}
            <div className="absolute inset-0 pointer-events-none opacity-30 sm:opacity-40">
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
                        stroke="url(#about-hero-swoosh)"
                        strokeLinecap="round"
                        strokeWidth={60}
                    />
                    <defs>
                        <linearGradient id="about-hero-swoosh" x1="0%" x2="100%" y1="0%" y2="100%">
                            <stop stopColor="#93c5fd" stopOpacity="0.6" />
                            <stop offset="100%" stopColor="#c7d2fe" stopOpacity="0.3" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Handwritten annotation — desktop only */}
                <div className="hidden lg:block absolute right-10 top-0 select-none pointer-events-none">
                    <div className="relative text-blue-600 font-handwriting text-2xl leading-tight -rotate-4">
                        People
                        <br />
                        Before
                        <br />
                        Product
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
                    <div className="inline-flex items-center px-3 py-1 sm:px-3.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold tracking-wide uppercase bg-blue-100/70 text-blue-600 mb-4 sm:mb-5">
                        About PeopleHub
                    </div>

                    {/* Headline — scales step by step for mobile legibility */}
                    <h1 className="text-[32px] leading-[1.15] sm:text-4xl sm:leading-[1.12] md:text-5xl lg:text-[3.4rem] lg:leading-[1.12] font-extrabold text-slate-900 tracking-tight">
                        We&apos;re building HR
                        <br className="hidden sm:block" />{" "}
                        <span className="text-blue-600">that people love.</span>
                    </h1>

                    {/* Subheading */}
                    <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed px-2">
                        PeopleHub started with a simple belief: the tools HR teams rely on every day
                        should be as thoughtful as the people they support. Six years later, that
                        belief still guides everything we build.
                    </p>

                    {/* Trust badges — wrap cleanly on mobile */}
                    <div className="mt-5 sm:mt-6 flex flex-wrap items-center justify-center gap-y-2 gap-x-4 sm:gap-x-6 text-[11px] sm:text-xs md:text-sm font-medium text-slate-700">
                        {ABOUT_HERO_BADGES.map((badge) => (
                            <div key={badge} className="flex items-center gap-1.5">
                                <CheckCircle />
                                <span>{badge}</span>
                            </div>
                        ))}
                    </div>

                    {/* CTAs — stack on smallest screens, sit inline from sm+ */}
                    <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-3.5">
                        <a
                            href="#careers"
                            className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-slate-950 text-white font-semibold text-sm hover:bg-slate-800 transition-all shadow-md hover:shadow-lg"
                        >
                            <span>Join our team</span>
                            <ArrowRight />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}