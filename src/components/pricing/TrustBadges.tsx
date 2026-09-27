import { PRICING_BADGES } from "@/lib/constants";

export default function TrustBadges() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
            <p className="text-center text-[11px] font-bold tracking-widest text-slate-400 uppercase mb-6">
                Enterprise-grade security & compliance
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
                {PRICING_BADGES.map((badge) => (
                    <div key={badge.label} className="flex flex-col items-center text-center">
                        <span className="text-sm sm:text-base font-extrabold text-slate-700 tracking-tight">
                            {badge.label}
                        </span>
                        <span className="text-[10px] uppercase tracking-wider text-slate-400 mt-0.5">
                            {badge.sub}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}