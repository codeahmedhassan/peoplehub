import { PAYROLL_REGIONS } from "@/lib/constants";

export default function PayrollGlobal() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-14">
                <div className="max-w-lg">
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wide bg-purple-100/70 text-purple-700 mb-3">
                        Global payroll
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-tight">
                        Pay every team,
                        <br className="hidden sm:block" />{" "}
                        <span className="text-purple-600">from one dashboard.</span>
                    </h2>
                </div>
                <p className="text-sm sm:text-base text-slate-600 max-w-md leading-relaxed">
                    Local entities or our employer-of-record network — the choice is yours.
                    Either way, everyone gets paid on time, in their currency.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                {PAYROLL_REGIONS.map((region) => (
                    <div
                        key={region.region}
                        className={`p-5 sm:p-6 rounded-2xl border ${region.primary
                            ? "border-purple-100 bg-linear-to-br from-purple-50/60 to-indigo-50/40"
                            : "border-slate-100 bg-white"
                            } hover:shadow-card-soft transition-all duration-300`}
                    >
                        <div className="flex items-start justify-between mb-4">
                            <span className="text-3xl leading-none" aria-hidden="true">
                                {region.flag}
                            </span>
                            {region.primary && (
                                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-purple-100 text-purple-700">
                                    Live
                                </span>
                            )}
                        </div>
                        <h3 className="text-sm sm:text-base font-bold text-slate-900">
                            {region.region}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-500 mt-1.5 leading-relaxed">
                            {region.countries}
                        </p>
                    </div>
                ))}
            </div>

            <p className="mt-8 text-center text-xs sm:text-sm text-slate-500">
                And more regions added every quarter —{" "}
                <a href="/contact" className="font-semibold text-purple-600 hover:text-purple-700 transition-colors">
                    talk to us
                </a>{" "}
                about yours.
            </p>
        </section>
    );
}