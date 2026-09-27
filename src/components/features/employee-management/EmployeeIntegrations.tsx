import { EMPLOYEE_INTEGRATIONS } from "@/lib/constants";

function IntegrationTile({
    name,
    purpose,
}: {
    name: string;
    purpose: string;
}) {
    return (
        <div className="flex items-start gap-3 p-4 rounded-2xl border border-slate-100 bg-white hover:border-slate-200 hover:shadow-card-soft transition-all duration-300">
            <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center font-extrabold text-sm shrink-0">
                {name.charAt(0)}
            </div>
            <div className="min-w-0">
                <p className="text-sm font-bold text-slate-900 truncate">{name}</p>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">{purpose}</p>
            </div>
        </div>
    );
}

export default function EmployeeIntegrations() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24">
            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-14">
                <div className="max-w-lg">
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wide bg-blue-100/70 text-blue-600 mb-3">
                        Integrations
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-tight">
                        Connected to the
                        <br className="hidden sm:block" />{" "}
                        <span className="text-blue-600">tools you already use.</span>
                    </h2>
                </div>
                <p className="text-sm sm:text-base text-slate-600 max-w-md leading-relaxed">
                    Employee records stay in sync with your identity provider, comms stack,
                    finance tools, and legacy systems — automatically.
                </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {EMPLOYEE_INTEGRATIONS.map((integration) => (
                    <IntegrationTile
                        key={integration.name}
                        name={integration.name}
                        purpose={integration.purpose}
                    />
                ))}
            </div>

            <div className="mt-8 text-center">
                <a
                    href="/features"
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