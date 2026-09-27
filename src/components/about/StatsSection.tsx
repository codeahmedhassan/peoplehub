import { ABOUT_BIG_STATS } from "@/lib/constants";

export default function StatsSection() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 sm:pb-20 lg:pb-24">
            <div className="rounded-3xl bg-linear-to-r from-blue-50/80 via-white to-indigo-50/60 border border-blue-100/70 px-5 sm:px-8 lg:px-12 py-8 sm:py-10 lg:py-14">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    {ABOUT_BIG_STATS.map((stat, i) => (
                        <div
                            key={stat.label}
                            className={`text-center lg:text-left ${i !== ABOUT_BIG_STATS.length - 1
                                ? "lg:border-r lg:border-slate-200/70 lg:pr-8"
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