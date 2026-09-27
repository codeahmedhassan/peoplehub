import Link from "next/link";

type Props = {
    title?: string;
    subtitle?: string;
    version?: string;
    lastUpdated?: string;
    effectiveDate?: string;
    pdfHref?: string;
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

function DownloadIcon() {
    return (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
                d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16"
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

export default function DpaHero({
    title = "Data Processing Agreement",
    subtitle = "Our GDPR, UK GDPR, Swiss FADP, and CCPA/CPRA-compliant Data Processing Agreement.",
    version = "3.2",
    lastUpdated = "April 22, 2025",
    effectiveDate = "May 1, 2025",
    pdfHref = "/legal/peoplehub-dpa-v3.2.pdf",
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
                        <li className="text-slate-900 font-semibold">Data Processing Agreement</li>
                    </ol>
                </nav>

                {/* Pill */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold tracking-wide uppercase bg-blue-100/70 text-blue-600 mb-4">
                    Legal · DPA
                    <span className="inline-flex items-center px-1.5 py-0.5 rounded-full bg-white/80 text-blue-600 text-[9px]">
                        v{version}
                    </span>
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

                {/* Primary CTAs — download + countersign */}
                <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
                    <a
                        href={pdfHref}
                        download
                        className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-slate-950 text-white text-sm font-semibold hover:bg-slate-800 transition-all shadow-md"
                    >
                        <DownloadIcon />
                        <span>Download PDF</span>
                    </a>
                    <a
                        href="#countersign"
                        className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white border border-slate-200 text-slate-800 text-sm font-semibold hover:bg-slate-50 transition-colors"
                    >
                        <span>Request countersignature</span>
                        <ArrowRight />
                    </a>
                </div>

                {/* Quick links */}
                <div className="mt-6 flex flex-wrap items-center gap-3">
                    <a
                        href="#annexes"
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                    >
                        View annexes
                        <ArrowRight />
                    </a>
                    <span aria-hidden="true" className="text-slate-300">·</span>
                    <a
                        href="#subprocessors"
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                    >
                        Sub-processors
                        <ArrowRight />
                    </a>
                    <span aria-hidden="true" className="text-slate-300">·</span>
                    <a
                        href="/legal/privacy"
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                    >
                        Privacy Policy
                        <ArrowRight />
                    </a>
                </div>
            </div>
        </section>
    );
}