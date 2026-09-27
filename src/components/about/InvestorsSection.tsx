import { ABOUT_INVESTORS } from "@/lib/constants";

export default function InvestorsSection() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 sm:pb-20 lg:pb-24">
            <p className="text-center text-[10px] sm:text-[11px] font-bold tracking-widest text-slate-400 uppercase mb-6 sm:mb-8">
                Backed by the best
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-8 sm:gap-x-12 lg:gap-x-16 gap-y-6 sm:gap-y-8">
                {ABOUT_INVESTORS.map((inv) => (
                    <div key={inv.name} className="text-center">
                        <p className="text-base sm:text-lg lg:text-xl font-extrabold text-slate-700 tracking-tight">
                            {inv.name}
                        </p>
                        <p className="text-[10px] sm:text-[11px] uppercase tracking-wider text-slate-400 mt-0.5">
                            {inv.round}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}