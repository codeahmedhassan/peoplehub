import { PRICING_PLANS, type PricingPlan } from "@/lib/constants";

function CheckIcon({ highlighted }: { highlighted: boolean }) {
    return (
        <svg
            className={`w-4 h-4 shrink-0 ${highlighted ? "text-blue-600" : "text-blue-600"}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
        >
            <path
                d="M5 13l4 4L19 7"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
            />
        </svg>
    );
}

function PlanCard({ plan }: { plan: PricingPlan }) {
    const { highlighted } = plan;
    return (
        <div
            className={`relative rounded-3xl border p-8 flex flex-col transition-all duration-300 ${highlighted
                    ? "border-blue-200 bg-white shadow-dashboard lg:-translate-y-2"
                    : "border-slate-100 bg-white hover:shadow-card-soft"
                }`}
        >
            {highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center px-3 py-1 rounded-full bg-blue-600 text-white text-[11px] font-bold tracking-wide uppercase">
                    Most popular
                </span>
            )}

            <div className="mb-6">
                <h3 className="text-lg font-bold text-slate-900">{plan.name}</h3>
                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed min-h-9">
                    {plan.description}
                </p>
            </div>

            <div className="mb-6">
                <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-slate-900 tracking-tight">
                        {plan.price}
                    </span>
                    {plan.price !== "Custom" && (
                        <span className="text-sm text-slate-500 font-medium">{plan.period}</span>
                    )}
                </div>
                {plan.price === "Custom" && (
                    <span className="text-sm text-slate-500 font-medium">{plan.period}</span>
                )}
            </div>

            <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-slate-600">
                        <CheckIcon highlighted={highlighted} />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>

            <a
                href="#trial"
                className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all ${highlighted
                        ? "bg-slate-950 text-white hover:bg-slate-800 shadow-md"
                        : "bg-white border border-slate-200 text-slate-800 hover:bg-slate-50"
                    }`}
            >
                {plan.cta}
            </a>
        </div>
    );
}

export default function Pricing() {
    return (
        <section className="py-24 bg-white" id="pricing">
            <div className="max-w-310 mx-auto px-6">
                {/* Header */}
                <div className="max-w-2xl mx-auto text-center mb-16">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold tracking-wide mb-4">
                        PRICING
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-tight">
                        Simple pricing that{" "}
                        <span className="text-blue-600">scales with you.</span>
                    </h2>
                    <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                        Start free for 14 days. No credit card required. Cancel anytime.
                    </p>
                </div>

                {/* Plans */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                    {PRICING_PLANS.map((plan) => (
                        <PlanCard key={plan.name} plan={plan} />
                    ))}
                </div>

                {/* Footnote */}
                <p className="text-center text-xs text-slate-400 mt-10">
                    Prices in USD. Volume discounts available for 500+ employees.
                </p>
            </div>
        </section>
    );
}