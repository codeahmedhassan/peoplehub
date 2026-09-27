const TEAM_BOARD = [
    { name: "Amara O.", status: "In", time: "09:02", color: "emerald" },
    { name: "Daniel K.", status: "In", time: "08:58", color: "emerald" },
    { name: "Priya R.", status: "Break", time: "12:15", color: "amber" },
    { name: "Jonas W.", status: "In", time: "09:05", color: "emerald" },
    { name: "Sofia M.", status: "Leave", time: "All day", color: "blue" },
    { name: "Marco S.", status: "In", time: "08:45", color: "emerald" },
];

const statusStyles: Record<string, string> = {
    emerald: "bg-emerald-50 text-emerald-600",
    amber: "bg-amber-50 text-amber-600",
    blue: "bg-blue-50 text-blue-600",
};

export default function AttendanceTimeClockPreview() {
    return (
        <section className="bg-slate-50/60 py-14 sm:py-20 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wide bg-emerald-100/70 text-emerald-700 mb-3">
                        Live preview
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-tight">
                        The clock-in experience
                        <br className="hidden sm:block" />{" "}
                        <span className="text-emerald-600">your team will actually like.</span>
                    </h2>
                    <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-600">
                        A kiosk view for shared devices and a live board for managers — both
                        beautifully simple, both in real time.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                    {/* Kiosk panel */}
                    <div className="relative rounded-3xl border border-slate-200/90 bg-white shadow-dashboard overflow-hidden">
                        <div className="h-10 border-b border-slate-100 flex items-center px-4 gap-2 bg-slate-50/60">
                            <span className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                            <span className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                            <span className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                            <span className="ml-3 text-[11px] font-semibold text-slate-500">
                                Kiosk — Front desk
                            </span>
                        </div>

                        <div className="p-6 sm:p-10 flex flex-col items-center text-center">
                            <p className="text-[11px] uppercase tracking-wider font-semibold text-slate-400">
                                Live
                            </p>
                            <p className="mt-1 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight tabular-nums">
                                09:14:37
                            </p>
                            <p className="text-xs sm:text-sm text-slate-500 mt-1">
                                Tuesday, April 22 · Lisbon HQ
                            </p>

                            {/* Clock-in button */}
                            <button
                                type="button"
                                className="relative mt-7 w-full max-w-xs rounded-full overflow-hidden h-14 transition-transform active:scale-[0.98]"
                            >
                                <span
                                    aria-hidden="true"
                                    className="absolute inset-0 rounded-full"
                                    style={{
                                        backdropFilter: "url(#liquid-glass-distortion) blur(2px) saturate(1.4)",
                                        WebkitBackdropFilter: "blur(14px) saturate(1.4)",
                                    }}
                                />
                                <span
                                    aria-hidden="true"
                                    className="absolute inset-0 rounded-full bg-emerald-600/95"
                                />
                                <span className="relative flex items-center justify-center gap-2 h-full text-white text-base font-bold">
                                    <span
                                        aria-hidden="true"
                                        className="pointer-events-none absolute inset-x-8 top-0 h-[1.5px] rounded-full bg-linear-to-r from-transparent via-white/60 to-transparent"
                                    />
                                    Clock in
                                </span>
                            </button>

                            <p className="mt-4 text-[11px] text-slate-400">
                                Or scan your badge on the reader
                            </p>

                            {/* Recent activity */}
                            <div className="mt-6 w-full space-y-2">
                                {[
                                    { name: "Amara O.", time: "09:02" },
                                    { name: "Daniel K.", time: "08:58" },
                                    { name: "Jonas W.", time: "09:05" },
                                ].map((entry) => (
                                    <div
                                        key={entry.name}
                                        className="flex items-center justify-between px-3 py-2 rounded-xl bg-slate-50 border border-slate-100"
                                    >
                                        <div className="flex items-center gap-2">
                                            <span className="w-6 h-6 rounded-full bg-linear-to-br from-emerald-200 to-teal-200" />
                                            <span className="text-xs font-semibold text-slate-700">
                                                {entry.name}
                                            </span>
                                        </div>
                                        <span className="text-[11px] text-slate-500 tabular-nums">
                                            {entry.time}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Team board panel */}
                    <div className="relative rounded-3xl border border-slate-200/90 bg-white shadow-dashboard overflow-hidden">
                        <div className="h-10 border-b border-slate-100 flex items-center px-4 gap-2 bg-slate-50/60">
                            <span className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                            <span className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                            <span className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                            <span className="ml-3 text-[11px] font-semibold text-slate-500">
                                Team board — Today
                            </span>
                        </div>

                        {/* Summary row */}
                        <div className="px-4 sm:px-6 py-3 border-b border-slate-100 flex items-center justify-between gap-3">
                            <div className="flex items-center gap-2">
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-600 border border-emerald-100">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                    4 in
                                </span>
                                <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-amber-50 text-amber-600 border border-amber-100">
                                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                                    1 on break
                                </span>
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-blue-50 text-blue-600 border border-blue-100">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                    1 leave
                                </span>
                            </div>
                        </div>

                        {/* Rows */}
                        <div className="divide-y divide-slate-100">
                            {TEAM_BOARD.map((p) => (
                                <div
                                    key={p.name}
                                    className="px-4 sm:px-6 py-3 flex items-center gap-3"
                                >
                                    <span className="w-9 h-9 rounded-full bg-linear-to-br from-emerald-200 to-teal-200 shrink-0" />
                                    <div className="flex-1 min-w-0">
                                        <p className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                                            {p.name}
                                        </p>
                                        <p className="text-[10px] sm:text-[11px] text-slate-500">
                                            Last action · {p.time}
                                        </p>
                                    </div>
                                    <span
                                        className={`shrink-0 inline-flex items-center px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-semibold ${statusStyles[p.color]}`}
                                    >
                                        {p.status}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}