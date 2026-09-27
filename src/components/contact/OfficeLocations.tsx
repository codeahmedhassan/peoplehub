import { OFFICES } from "@/lib/constants";

function PinIcon() {
    return (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
            />
            <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
        </svg>
    );
}

function ClockIcon() {
    return (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
            />
        </svg>
    );
}

export default function OfficeLocations() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-24">
            {/* Header */}
            <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-14">
                <div className="inline-flex items-center px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wide bg-blue-100/70 text-blue-600 mb-3">
                    Our offices
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-tight">
                    Three hubs.
                    <br className="hidden sm:block" />{" "}
                    <span className="text-blue-600">One global team.</span>
                </h2>
                <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-600">
                    Distributed by design — someone&apos;s always online to help.
                </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                {OFFICES.map((office) => (
                    <div
                        key={office.city}
                        className="p-5 sm:p-6 rounded-2xl border border-slate-100 bg-white hover:border-blue-100 hover:shadow-card-soft transition-all duration-300"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <span className="text-3xl sm:text-4xl leading-none" aria-hidden="true">
                                {office.flag}
                            </span>
                            <div className="min-w-0">
                                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                                    {office.city}
                                </h3>
                                <p className="text-[10px] sm:text-xs uppercase tracking-wider text-blue-600 font-semibold mt-0.5">
                                    {office.role}
                                </p>
                            </div>
                        </div>

                        <div className="space-y-3 pt-3 border-t border-slate-100">
                            <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                                <span className="text-slate-400 shrink-0 mt-0.5">
                                    <PinIcon />
                                </span>
                                <span className="leading-relaxed">{office.address}</span>
                            </div>
                            <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-600">
                                <span className="text-slate-400 shrink-0">
                                    <ClockIcon />
                                </span>
                                <span>{office.timezone}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}