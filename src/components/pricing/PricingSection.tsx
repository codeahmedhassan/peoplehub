"use client";

import Image from "next/image";
import { useState } from "react";
import {
    PRICING_TIERS,
    PRICING_TRUST_BADGES,
    PRICING_SOCIAL_AVATARS,
    type BillingCycle,
    type PricingTier,
} from "@/lib/constants";

/* ---------------- Small icon set ---------------- */

function CheckCircle() {
    return (
        <svg className="w-4 h-4 text-blue-600 fill-blue-600 text-white" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path
                clipRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                fillRule="evenodd"
            />
        </svg>
    );
}

function CheckSmall() {
    return (
        <svg className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path
                clipRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                fillRule="evenodd"
            />
        </svg>
    );
}

function CrossSmall() {
    return (
        <svg className="w-4 h-4 text-slate-300 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
        </svg>
    );
}

function ArrowRight() {
    return (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
        </svg>
    );
}

/* Tier icons */
function TierIcon({ name }: { name: PricingTier["icon"] }) {
    const common = {
        className: "w-5 h-5",
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24",
        "aria-hidden": true,
    } as const;

    switch (name) {
        case "bolt":
            return (
                <svg {...common}>
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                </svg>
            );
        case "grid":
            return (
                <svg {...common}>
                    <path
                        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                    />
                </svg>
            );
        case "building":
            return (
                <svg {...common}>
                    <path
                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                    />
                </svg>
            );
        case "enterprise":
            return (
                <svg {...common}>
                    <path
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                    />
                </svg>
            );
    }
}

/* Tier color scheme — locked (Tailwind can't do dynamic class names) */
const tierStyles: Record<
    PricingTier["color"],
    { iconBg: string; iconText: string }
> = {
    blue: { iconBg: "bg-blue-50", iconText: "text-blue-600" },
    emerald: { iconBg: "bg-emerald-50", iconText: "text-emerald-600" },
    purple: { iconBg: "bg-purple-50", iconText: "text-purple-600" },
    amber: { iconBg: "bg-amber-50", iconText: "text-amber-600" },
};

/* ---------------- Card ---------------- */

function TierCard({ tier, cycle }: { tier: PricingTier; cycle: BillingCycle }) {
    const styles = tierStyles[tier.color];
    const price = tier.price[cycle];
    const periodLabel = tier.periodLabel[cycle];
    const highlighted = tier.highlighted;

    const formattedPrice =
        price === null ? "Custom pricing" : price === 0 ? "$0" : `$${price}`;

    const isEnterprise = tier.id === "enterprise";

    return (
        <div
            className={`relative bg-white rounded-3xl p-6 flex flex-col h-full transition-shadow ${highlighted
                ? "border-2 border-blue-600 shadow-xl ring-4 ring-blue-50"
                : "border border-slate-200/90 shadow-sm hover:shadow-md"
                }`}
        >
            {highlighted && (
                <div className="absolute -top-3.5 left-6 bg-blue-600 text-white font-semibold text-[11px] uppercase tracking-wider px-3.5 py-1 rounded-full shadow-sm">
                    Most popular
                </div>
            )}

            {/* Header */}
            <div className={`flex items-center gap-3 mb-4 ${highlighted ? "mt-1" : ""}`}>
                <div
                    className={`w-10 h-10 rounded-xl ${styles.iconBg} flex items-center justify-center ${styles.iconText}`}
                >
                    <TierIcon name={tier.icon} />
                </div>
                <div>
                    <h3 className="font-bold text-slate-900 text-lg">{tier.name}</h3>
                    <p className="text-xs text-slate-500 leading-tight">{tier.tagline}</p>
                </div>
            </div>

            {/* Price */}
            <div className="mb-5">
                <div className="flex items-baseline">
                    <span
                        className={`font-extrabold text-slate-900 ${isEnterprise ? "text-2xl sm:text-3xl tracking-tight" : "text-4xl"
                            }`}
                    >
                        {formattedPrice}
                    </span>
                    {!isEnterprise && (
                        <span className="text-slate-500 text-sm font-medium ml-1.5">
                            / {cycle === "yearly" ? "user / mo" : "month"}
                        </span>
                    )}
                </div>
                <p className={`text-xs text-slate-500 ${isEnterprise ? "mt-2" : "mt-1"}`}>
                    {periodLabel}
                </p>
            </div>

            {/* CTA */}
            <a
                href="#"
                className={`w-full py-2.5 px-4 rounded-full font-semibold text-sm flex items-center justify-center gap-1.5 transition-colors mb-6 ${highlighted
                    ? "bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/25"
                    : "border border-slate-200 text-slate-800 hover:bg-slate-50"
                    }`}
            >
                {tier.cta}
                <ArrowRight />
            </a>

            {/* Features */}
            <div className="space-y-3 pt-2 text-xs flex-1">
                {tier.features.map((feature) => (
                    <div
                        key={feature.label}
                        className={`flex items-start gap-2.5 ${feature.included
                            ? highlighted
                                ? "text-slate-800 font-medium"
                                : "text-slate-700"
                            : "text-slate-400"
                            }`}
                    >
                        {feature.included ? <CheckSmall /> : <CrossSmall />}
                        <span>{feature.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

/* ---------------- Main section ---------------- */

export default function PricingSection() {
    const [cycle, setCycle] = useState<BillingCycle>("monthly");

    return (
        <>
            {/* HERO */}
            <section className="relative z-10 pt-30 pb-12 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    {/* Handwritten annotation (desktop right) */}
                    <div className="hidden lg:block absolute right-16 top-0 select-none pointer-events-none">
                        <div className="relative text-blue-600 font-handwriting text-2xl leading-tight -rotate-4">
                            Invest in
                            <br />
                            Your People
                            <br />
                            Build a Brighter
                            <br />
                            Tomorrow
                            <svg
                                className="absolute -bottom-10 -left-12 w-14 h-14 text-blue-600 stroke-current fill-none -rotate-12"
                                viewBox="0 0 54 48"
                                aria-hidden="true"
                            >
                                <path
                                    d="M42 4 C32 18, 12 16, 8 36 M8 36 L16 36 M8 36 L9 26"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2.2}
                                />
                            </svg>
                        </div>
                    </div>

                    <div className="text-center max-w-3xl mx-auto">
                        <div className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-blue-100/70 text-blue-600 mb-5">
                            PRICING
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold text-slate-900 tracking-tight leading-[1.12]">
                            Simple, transparent pricing for{" "}
                            <span className="text-blue-600">every team.</span>
                        </h1>
                        <p className="mt-4 text-base sm:text-lg text-slate-600">
                            Choose the plan that fits your business. Start free, upgrade anytime.
                        </p>

                        {/* Trust badges */}
                        <div className="mt-6 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs sm:text-sm font-medium text-slate-700">
                            {PRICING_TRUST_BADGES.map((badge) => (
                                <div key={badge} className="flex items-center gap-1.5">
                                    <CheckCircle />
                                    <span>{badge}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Floating social proof card */}
                    <div className="mt-8 lg:mt-0 lg:absolute lg:right-4 lg:bottom-2 flex justify-center">
                        <div className="bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-full border border-slate-200/80 shadow-sm flex items-center gap-3">
                            <div className="flex -space-x-2 overflow-hidden">
                                {PRICING_SOCIAL_AVATARS.map((src, i) => (
                                    <Image
                                        key={i}
                                        alt={`User Avatar ${i + 1}`}
                                        className="inline-block h-7 w-7 rounded-full ring-2 ring-white object-cover"
                                        src={src}
                                        width={28}
                                        height={28}
                                        unoptimized
                                    />
                                ))}
                            </div>
                            <div className="text-left text-xs leading-snug">
                                <p className="font-bold text-slate-900">10,000+</p>
                                <p className="text-slate-500 font-normal">companies trust PeopleHub</p>
                            </div>
                        </div>
                    </div>

                    {/* Billing toggle */}
                    <div className="mt-12 flex items-center justify-center gap-3">
                        <div
                            className="inline-flex p-1 bg-slate-100 rounded-full border border-slate-200"
                            role="tablist"
                            aria-label="Billing cycle"
                        >
                            <button
                                type="button"
                                role="tab"
                                aria-selected={cycle === "monthly"}
                                onClick={() => setCycle("monthly")}
                                className={`px-5 py-1.5 rounded-full text-sm font-semibold transition-all ${cycle === "monthly"
                                    ? "shadow-sm bg-blue-600 text-white"
                                    : "text-slate-600 hover:text-slate-900"
                                    }`}
                            >
                                Monthly
                            </button>
                            <button
                                type="button"
                                role="tab"
                                aria-selected={cycle === "yearly"}
                                onClick={() => setCycle("yearly")}
                                className={`px-5 py-1.5 rounded-full text-sm font-semibold transition-all ${cycle === "yearly"
                                    ? "shadow-sm bg-blue-600 text-white"
                                    : "text-slate-600 hover:text-slate-900"
                                    }`}
                            >
                                Yearly
                            </button>
                        </div>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-700">
                            Save 20%
                        </span>
                    </div>
                </div>
            </section>

            {/* CARDS */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
                    {PRICING_TIERS.map((tier) => (
                        <TierCard key={tier.id} tier={tier} cycle={cycle} />
                    ))}
                </div>
            </section>
        </>
    );
}