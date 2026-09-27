import { INTEGRATIONS } from "@/lib/constants";

function IntegrationIcon({ name }: { name: string }) {
    // Simple monogram so we don't need 12 SVGs. Each tile gets a branded circle + name.
    const initial = name.charAt(0).toUpperCase();
    return (
        <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center font-extrabold text-sm">
            {initial}
        </div>
    );
}

export default function IntegrationsGrid() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
                <div>
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide bg-blue-100/70 text-blue-600 mb-3">
                        Integrations
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                        Plays well <span className="text-blue-600">with your stack.</span>
                    </h2>
                </div>
                <p className="text-sm text-slate-500 max-w-md leading-relaxed">
                    Native integrations and a full REST API — so PeopleHub fits into your workflow,
                    not the other way around.
                </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {INTEGRATIONS.map((integration) => (
                    <div
                        key={integration.name}
                        className="flex items-center gap-3 p-4 rounded-2xl border border-slate-100 bg-white hover:border-slate-200 hover:shadow-card-soft transition-all duration-300"
                    >
                        <IntegrationIcon name={integration.name} />
                        <div className="min-w-0">
                            <p className="text-sm font-bold text-slate-900 truncate">{integration.name}</p>
                            <p className="text-[10px] uppercase tracking-wider text-slate-400 mt-0.5">
                                {integration.category}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer row */}
            <div className="mt-8 text-center">
                <a
                    href="#"
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors"
                >
                    See all 40+ integrations
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                    </svg>
                </a>
            </div>
        </section>
    );
}