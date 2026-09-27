import { ABOUT_TIMELINE } from "@/lib/constants";

export default function TimelineSection() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24">
            {/* Header */}
            <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-16">
                <div className="inline-flex items-center px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wide bg-blue-100/70 text-blue-600 mb-3">
                    Our journey
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-tight">
                    Six years,
                    <br className="hidden sm:block" />{" "}
                    <span className="text-blue-600">still day one.</span>
                </h2>
                <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-600">
                    The moments that shaped who we are — and where we&apos;re heading.
                </p>
            </div>

            {/* ---------- MOBILE / TABLET: simple vertical timeline ---------- */}
            <div className="lg:hidden relative pl-8 sm:pl-10">
                {/* Vertical line */}
                <div
                    aria-hidden="true"
                    className="absolute left-3 sm:left-4 top-2 bottom-2 w-px bg-linear-to-b from-blue-200 via-blue-200 to-transparent"
                />

                <div className="space-y-6 sm:space-y-8">
                    {ABOUT_TIMELINE.map((item) => (
                        <div key={item.year} className="relative">
                            {/* Dot */}
                            <div
                                aria-hidden="true"
                                className="absolute -left-8 sm:-left-10 top-1.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white border-2 border-blue-500 flex items-center justify-center"
                            >
                                <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-blue-600" />
                            </div>

                            {/* Card */}
                            <div className="p-4 sm:p-5 rounded-2xl border border-slate-100 bg-white hover:shadow-card-soft transition-shadow">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-blue-100/70 text-blue-600">
                                        {item.year}
                                    </span>
                                </div>
                                <h3 className="text-sm sm:text-base font-bold text-slate-900">
                                    {item.title}
                                </h3>
                                <p className="text-xs sm:text-sm text-slate-500 mt-1.5 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ---------- DESKTOP: alternating centered timeline ---------- */}
            <div className="hidden lg:block relative">
                {/* Center vertical line */}
                <div
                    aria-hidden="true"
                    className="absolute left-1/2 -translate-x-1/2 top-2 bottom-2 w-px bg-linear-to-b from-transparent via-blue-200 to-transparent"
                />

                <div className="space-y-14">
                    {ABOUT_TIMELINE.map((item, i) => {
                        const isLeft = i % 2 === 0;
                        return (
                            <div
                                key={item.year}
                                className={`relative grid grid-cols-2 gap-12 items-center ${isLeft ? "" : "direction-rtl"
                                    }`}
                            >
                                {/* Center dot */}
                                <div
                                    aria-hidden="true"
                                    className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white border-2 border-blue-500 flex items-center justify-center shadow-sm z-10"
                                >
                                    <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                                </div>

                                {/* Left content slot */}
                                {isLeft ? (
                                    <>
                                        <TimelineCard item={item} align="right" />
                                        <div />
                                    </>
                                ) : (
                                    <>
                                        <div />
                                        <TimelineCard item={item} align="left" />
                                    </>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

/* Desktop card with directional alignment */
function TimelineCard({
    item,
    align,
}: {
    item: { year: string; title: string; description: string };
    align: "left" | "right";
}) {
    return (
        <div
            className={`p-6 rounded-2xl border border-slate-100 bg-white hover:shadow-card-soft transition-shadow ${align === "right" ? "text-right" : "text-left"
                }`}
        >
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-blue-100/70 text-blue-600 mb-2">
                {item.year}
            </span>
            <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
            <p className="text-sm text-slate-500 mt-2 leading-relaxed">{item.description}</p>
        </div>
    );
}