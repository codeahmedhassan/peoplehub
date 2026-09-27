import Link from "next/link";

type Props = {
    badge: string;
    title: string;
    subtitle: string;
    lastUpdated: string;
    effectiveDate: string;
};

function CalendarIcon() {
    return (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
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

export default function LegalHero({
    badge,
    title,
    subtitle,
    lastUpdated,
    effectiveDate,
}: Props) {
    return (
        <section className="relative z-10 pt-20 sm:pt-25 pb-8 sm:pb-10">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Breadcrumb */}
                <nav aria-label="Breadcrumb" className="mb-6 sm:mb-8">
                    <ol className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-medium text-slate-500">
                        <li>
                            <Link href="/" className="hover:text-blue-600 transition-colors">
                                Home
                            </Link>
                        </li>
                        <li aria-hidden="true" className="text-slate-300">/</li>
                        <li>
                            <span className="text-slate-500">Legal</span>
                        </li>
                        <li aria-hidden="true" className="text-slate-300">/</li>
                        <li className="text-slate-900 font-semibold">{title}</li>
                    </ol>
                </nav>

                {/* Pill */}
                <div className="inline-flex items-center px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold tracking-wide uppercase bg-blue-100/70 text-blue-600 mb-4">
                    {badge}
                </div>

                {/* Title */}
                <h1 className="text-[32px] leading-[1.15] sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                    {title}
                </h1>

                {/* Subtitle */}
                <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
                    {subtitle}
                </p>

                {/* Metadata */}
                <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] sm:text-xs text-slate-500">
                    <div className="flex items-center gap-1.5">
                        <CalendarIcon />
                        <span>
                            <strong className="text-slate-700 font-semibold">Last updated:</strong>{" "}
                            {lastUpdated}
                        </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <CalendarIcon />
                        <span>
                            <strong className="text-slate-700 font-semibold">Effective:</strong>{" "}
                            {effectiveDate}
                        </span>
                    </div>
                </div>

                {/* Quick links */}
                <div className="mt-6 flex flex-wrap items-center gap-3">
                    <a
                        href="#information-we-collect"
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                    >
                        Jump to what we collect
                        <ArrowRight />
                    </a>
                    <span aria-hidden="true" className="text-slate-300">·</span>
                    <a
                        href="#your-rights"
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                    >
                        Your rights
                        <ArrowRight />
                    </a>
                    <span aria-hidden="true" className="text-slate-300">·</span>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                    >
                        Contact us
                        <ArrowRight />
                    </a>
                </div>
            </div>
        </section>
    );
}