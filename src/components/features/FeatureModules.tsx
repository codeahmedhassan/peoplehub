import { FEATURE_MODULES, type FeatureModule } from "@/lib/constants";

const accentStyles: Record<
    FeatureModule["accent"],
    { bg: string; text: string; pill: string }
> = {
    blue: { bg: "bg-blue-50", text: "text-blue-600", pill: "bg-blue-100/70 text-blue-600" },
    emerald: { bg: "bg-emerald-50", text: "text-emerald-600", pill: "bg-emerald-100/70 text-emerald-600" },
    purple: { bg: "bg-purple-50", text: "text-purple-600", pill: "bg-purple-100/70 text-purple-600" },
    amber: { bg: "bg-amber-50", text: "text-amber-600", pill: "bg-amber-100/70 text-amber-600" },
    rose: { bg: "bg-rose-50", text: "text-rose-500", pill: "bg-rose-100/70 text-rose-500" },
    cyan: { bg: "bg-cyan-50", text: "text-cyan-600", pill: "bg-cyan-100/70 text-cyan-600" },
};

function MockPanel({ module }: { module: FeatureModule }) {
    const s = accentStyles[module.accent];
    return (
        <div className="relative rounded-2xl border border-slate-200/90 bg-white shadow-dashboard overflow-hidden">
            {/* Header strip */}
            <div className="h-10 border-b border-slate-100 flex items-center px-4 gap-2 bg-slate-50/60">
                <span className="w-2 h-2 rounded-full bg-slate-200" />
                <span className="w-2 h-2 rounded-full bg-slate-200" />
                <span className="w-2 h-2 rounded-full bg-slate-200" />
                <span className="ml-3 text-[11px] font-semibold text-slate-500">{module.label}</span>
            </div>

            {/* Body */}
            <div className="p-5 space-y-4">
                <div className="flex items-center justify-between">
                    <div className="h-2.5 w-1/3 rounded-full bg-slate-100" />
                    <div className={`h-5 w-16 rounded-full ${s.bg}`} />
                </div>

                <div className="grid grid-cols-3 gap-3">
                    {[0, 1, 2].map((i) => (
                        <div key={i} className="rounded-xl border border-slate-100 p-3 space-y-2">
                            <div className={`w-7 h-7 rounded-lg ${s.bg}`} />
                            <div className="h-2 w-full rounded-full bg-slate-100" />
                            <div className="h-2 w-2/3 rounded-full bg-slate-100" />
                        </div>
                    ))}
                </div>

                <div className="rounded-xl border border-slate-100 p-4 space-y-3">
                    {[85, 62, 92].map((w, i) => (
                        <div key={i} className="flex items-center gap-3">
                            <div className="w-12 h-2 rounded-full bg-slate-100" />
                            <div className="flex-1 h-2 rounded-full bg-slate-100 overflow-hidden">
                                <div className={`h-full rounded-full ${s.bg}`} style={{ width: `${w}%` }} />
                            </div>
                            <div className="w-8 h-2 rounded-full bg-slate-100" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function FeatureModules() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
            {/* Section heading */}
            <div className="text-center max-w-2xl mx-auto mb-16">
                <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide bg-blue-100/70 text-blue-600 mb-3">
                    The complete suite
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                    Deep dive into <span className="text-blue-600">every module.</span>
                </h2>
                <p className="mt-3 text-sm sm:text-base text-slate-600">
                    Each module is fully integrated — so data flows where it should, and your team
                    stops copying between tools.
                </p>
            </div>

            {/* Alternating rows */}
            <div className="space-y-20 lg:space-y-24">
                {FEATURE_MODULES.map((mod, i) => {
                    const s = accentStyles[mod.accent];
                    const reversed = i % 2 === 1;

                    return (
                        <div
                            key={mod.id}
                            className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${reversed ? "lg:[direction:rtl]" : ""
                                }`}
                        >
                            {/* Copy */}
                            <div className="lg:col-span-5 lg:[direction:ltr]">
                                <div className={`inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${s.pill} mb-4`}>
                                    {String(i + 1).padStart(2, "0")} — {mod.label}
                                </div>
                                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                                    {mod.headline}
                                </h3>
                                <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                                    {mod.description}
                                </p>
                                <ul className="mt-6 space-y-3">
                                    {mod.bullets.map((b) => (
                                        <li key={b} className="flex items-start gap-2.5 text-sm text-slate-700">
                                            <svg
                                                className={`w-4 h-4 shrink-0 mt-0.5 ${s.text}`}
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    clipRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    fillRule="evenodd"
                                                />
                                            </svg>
                                            <span>{b}</span>
                                        </li>
                                    ))}
                                </ul>
                                <a
                                    href={mod.href}
                                    className={`mt-6 inline-flex items-center gap-1.5 text-sm font-bold ${s.text} hover:opacity-80 transition-opacity`}
                                >
                                    Explore {mod.label}
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                                    </svg>
                                </a>
                            </div>

                            {/* Visual */}
                            <div className="lg:col-span-7 lg:[direction:ltr]">
                                <div className={`relative p-6 sm:p-8 rounded-3xl ${s.bg}/40`}>
                                    <MockPanel module={mod} />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}