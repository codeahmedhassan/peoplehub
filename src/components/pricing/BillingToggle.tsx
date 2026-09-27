"use client";

import type { BillingCycle } from "@/lib/constants";

type Props = {
    value: BillingCycle;
    onChange: (cycle: BillingCycle) => void;
};

export default function BillingToggle({ value, onChange }: Props) {
    return (
        <div className="mt-12 flex items-center justify-center gap-3">
            <div
                className="inline-flex p-1 bg-slate-100 rounded-full border border-slate-200"
                role="tablist"
                aria-label="Billing cycle"
            >
                <button
                    type="button"
                    role="tab"
                    aria-selected={value === "monthly"}
                    onClick={() => onChange("monthly")}
                    className={`px-5 py-1.5 rounded-full text-sm font-semibold transition-all ${value === "monthly"
                            ? "shadow-sm bg-blue-600 text-white"
                            : "text-slate-600 hover:text-slate-900"
                        }`}
                >
                    Monthly
                </button>
                <button
                    type="button"
                    role="tab"
                    aria-selected={value === "yearly"}
                    onClick={() => onChange("yearly")}
                    className={`px-5 py-1.5 rounded-full text-sm font-semibold transition-all ${value === "yearly"
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
    );
}