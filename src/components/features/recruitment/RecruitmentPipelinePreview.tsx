const PIPELINE_COLUMNS = [
    {
        stage: "Applied",
        count: 87,
        accent: "slate" as const,
        candidates: [
            { name: "Marco S.", role: "Backend Engineer", score: 0 },
            { name: "Ana P.", role: "Backend Engineer", score: 0 },
            { name: "Tom W.", role: "Backend Engineer", score: 0 },
        ],
    },
    {
        stage: "Screening",
        count: 34,
        accent: "blue" as const,
        candidates: [
            { name: "Henrik L.", role: "Account Executive", score: 4.2 },
            { name: "Sofia M.", role: "Ops Analyst", score: 4.5 },
            { name: "Ravi N.", role: "Account Executive", score: 4.1 },
        ],
    },
    {
        stage: "Interview",
        count: 18,
        accent: "purple" as const,
        candidates: [
            { name: "Amara O.", role: "Product Designer", score: 4.6 },
            { name: "Jonas W.", role: "Staff Engineer", score: 4.8 },
            { name: "Lena T.", role: "Product Designer", score: 4.4 },
        ],
    },
    {
        stage: "Offer",
        count: 6,
        accent: "amber" as const,
        candidates: [
            { name: "Priya R.", role: "People Partner", score: 4.9 },
            { name: "Kai M.", role: "Staff Engineer", score: 4.7 },
        ],
    },
    {
        stage: "Hired",
        count: 3,
        accent: "emerald" as const,
        candidates: [
            { name: "Nadia H.", role: "Product Designer", score: 4.8 },
            { name: "Felix B.", role: "Backend Engineer", score: 4.9 },
        ],
    },
];

const accentStyles: Record<
    "slate" | "blue" | "purple" | "amber" | "emerald",
    { bg: string; text: string; pill: string; dot: string }
> = {
    slate: {
        bg: "bg-slate-50",
        text: "text-slate-700",
        pill: "bg-slate-100 text-slate-600",
        dot: "bg-slate-400",
    },
    blue: {
        bg: "bg-blue-50/60",
        text: "text-blue-700",
        pill: "bg-blue-100 text-blue-600",
        dot: "bg-blue-500",
    },
    purple: {
        bg: "bg-purple-50/60",
        text: "text-purple-700",
        pill: "bg-purple-100 text-purple-600",
        dot: "bg-purple-500",
    },
    amber: {
        bg: "bg-amber-50/60",
        text: "text-amber-700",
        pill: "bg-amber-100 text-amber-600",
        dot: "bg-amber-500",
    },
    emerald: {
        bg: "bg-emerald-50/60",
        text: "text-emerald-700",
        pill: "bg-emerald-100 text-emerald-600",
        dot: "bg-emerald-500",
    },
};

export default function RecruitmentPipelinePreview() {
    return (
        <section className="bg-slate-50/60 py-14 sm:py-20 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wide bg-rose-100/70 text-rose-700 mb-3">
                        Live preview
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-tight">
                        A pipeline your team
                        <br className="hidden sm:block" />{" "}
                        <span className="text-rose-600">actually wants to open.</span>
                    </h2>
                    <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-600">
                        Drag, drop, score, and move. Kanban that feels as smooth as it looks.
                    </p>
                </div>

                {/* Board */}
                <div className="relative rounded-3xl border border-slate-200/90 bg-white shadow-dashboard overflow-hidden">
                    {/* Window chrome */}
                    <div className="h-10 border-b border-slate-100 flex items-center px-4 gap-2 bg-slate-50/60">
                        <span className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                        <span className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                        <span className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                        <span className="ml-3 text-[11px] font-semibold text-slate-500">
                            Pipeline — Backend Engineer
                        </span>
                    </div>

                    {/* Toolbar */}
                    <div className="px-4 sm:px-6 py-3 border-b border-slate-100 flex items-center justify-between gap-3 flex-wrap">
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-rose-500" />
                                <span className="text-xs font-semibold text-slate-700">
                                    Senior Backend Engineer
                                </span>
                            </div>
                            <span className="hidden sm:inline text-[10px] text-slate-400">
                                Engineering · Lisbon · Full-time
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-semibold bg-slate-100 text-slate-600">
                                148 candidates
                            </span>
                            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-semibold bg-slate-900 text-white">
                                + Add
                            </span>
                        </div>
                    </div>

                    {/* Board columns — horizontal scroll on mobile, grid on desktop */}
                    <div className="p-4 sm:p-6">
                        <div className="flex gap-3 sm:gap-4 overflow-x-auto pb-3 -mx-4 px-4 sm:mx-0 sm:px-0 snap-x snap-mandatory lg:grid lg:grid-cols-5 lg:overflow-visible lg:snap-none">
                            {PIPELINE_COLUMNS.map((col) => {
                                const s = accentStyles[col.accent];
                                return (
                                    <div
                                        key={col.stage}
                                        className="min-w-55 sm:min-w-60 lg:min-w-0 snap-start"
                                    >
                                        {/* Column header */}
                                        <div className="flex items-center justify-between mb-3">
                                            <div className="flex items-center gap-2">
                                                <span className={`w-2 h-2 rounded-full ${s.dot}`} />
                                                <span className="text-xs font-bold text-slate-700">
                                                    {col.stage}
                                                </span>
                                                <span
                                                    className={`inline-flex items-center px-1.5 py-0.5 rounded-full text-[9px] font-bold ${s.pill}`}
                                                >
                                                    {col.count}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Cards */}
                                        <div className="space-y-2">
                                            {col.candidates.map((cand) => (
                                                <div
                                                    key={cand.name}
                                                    className={`rounded-xl border border-slate-100 ${s.bg} p-3 hover:shadow-sm transition-shadow cursor-grab active:cursor-grabbing`}
                                                >
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <span className="w-7 h-7 rounded-full bg-linear-to-br from-rose-200 to-pink-200 shrink-0" />
                                                        <div className="min-w-0">
                                                            <p className="text-[11px] font-bold text-slate-900 truncate">
                                                                {cand.name}
                                                            </p>
                                                            <p className="text-[9px] text-slate-500 truncate">
                                                                {cand.role}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center justify-between">
                                                        {cand.score > 0 ? (
                                                            <span className="inline-flex items-center gap-0.5">
                                                                {[...Array(5)].map((_, i) => (
                                                                    <svg
                                                                        key={i}
                                                                        className={`w-2.5 h-2.5 ${i < Math.round(cand.score)
                                                                                ? "text-amber-400"
                                                                                : "text-slate-200"
                                                                            }`}
                                                                        fill="currentColor"
                                                                        viewBox="0 0 20 20"
                                                                        aria-hidden="true"
                                                                    >
                                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                                                    </svg>
                                                                ))}
                                                                <span className="ml-1 text-[9px] font-bold text-slate-600">
                                                                    {cand.score}
                                                                </span>
                                                            </span>
                                                        ) : (
                                                            <span className="text-[9px] text-slate-400">
                                                                Not scored
                                                            </span>
                                                        )}
                                                        <span className="text-[9px] text-slate-400">
                                                            Apr 22
                                                        </span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Mobile scroll hint */}
                        <p className="lg:hidden text-center text-[10px] text-slate-400 mt-2">
                            Swipe to see all stages →
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}