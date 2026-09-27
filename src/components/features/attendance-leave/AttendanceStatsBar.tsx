import { ATTENDANCE_STATS } from "@/lib/constants";

export default function AttendanceStatsBar() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-14">
            <div className="rounded-3xl border border-emerald-100 bg-linear-to-r from-emerald-50/60 via-white to-teal-50/60 px-5 sm:px-8 lg:px-12 py-7 sm:py-9 lg:py-11">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    {ATTENDANCE_STATS.map((stat, i) => (
                        <div
                            key={stat.label}
                            className={`text-center lg:text-left ${i !== ATTENDANCE_STATS.length - 1
                                ? "lg:border-r lg:border-emerald-100 lg:pr-8"
                                : ""
                                }`}
                        >
                            <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                                {stat.value}
                            </p>
                            <p className="mt-1.5 text-[11px] sm:text-xs lg:text-sm text-slate-500 font-medium leading-snug">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}