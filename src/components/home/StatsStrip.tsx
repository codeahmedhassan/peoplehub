import { STATS } from "@/lib/constants";

export default function StatsStrip() {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-310 mx-auto px-6">
                <div className="rounded-3xl border border-slate-100 bg-linear-to-r from-blue-50/60 via-white to-indigo-50/60 px-6 py-10 sm:px-12">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {STATS.map((stat, i) => (
                            <div
                                key={stat.label}
                                className={`text-center lg:text-left ${i !== STATS.length - 1 ? "lg:border-r lg:border-slate-200/70 lg:pr-8" : ""
                                    }`}
                            >
                                <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                                    {stat.value}
                                </p>
                                <p className="mt-1.5 text-xs sm:text-sm text-slate-500 font-medium">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}