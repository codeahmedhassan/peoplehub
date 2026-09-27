"use client";

import { SETUP_INDUSTRIES, SETUP_TIMEZONES } from "@/lib/constants";

export type CompanyData = {
    name: string;
    industry: string;
    timezone: string;
};

type Props = {
    value: CompanyData;
    onChange: (next: CompanyData) => void;
};

const inputClass =
    "w-full px-4 py-3 rounded-2xl bg-white/70 backdrop-blur-md border border-white/70 ring-1 ring-slate-900/5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100/60 transition-all";

const selectClass = `${inputClass} appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%2394a3b8%22 stroke-width=%222%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22><polyline points=%226 9 12 15 18 9%22/></svg>')] bg-[length:16px_16px] bg-[right_1rem_center] bg-no-repeat`;

export default function StepCompany({ value, onChange }: Props) {
    return (
        <div className="space-y-5">
            {/* Heading */}
            <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                    Tell us about your company.
                </h1>
                <p className="mt-2 text-sm text-slate-600">
                    We&apos;ll use this to configure defaults like pay cycles, holidays, and
                    reports.
                </p>
            </div>

            {/* Company name */}
            <div>
                <label
                    htmlFor="company-name"
                    className="block text-xs sm:text-sm font-semibold text-slate-700 mb-2"
                >
                    Company name
                </label>
                <input
                    id="company-name"
                    type="text"
                    required
                    autoFocus
                    autoComplete="organization"
                    placeholder="Acme Inc."
                    value={value.name}
                    onChange={(e) => onChange({ ...value, name: e.target.value })}
                    className={inputClass}
                />
                <p className="mt-2 text-[11px] text-slate-500">
                    This appears on paystubs, offer letters, and the employee directory.
                </p>
            </div>

            {/* Industry */}
            <div>
                <label
                    htmlFor="company-industry"
                    className="block text-xs sm:text-sm font-semibold text-slate-700 mb-2"
                >
                    Industry
                </label>
                <select
                    id="company-industry"
                    required
                    value={value.industry}
                    onChange={(e) => onChange({ ...value, industry: e.target.value })}
                    className={selectClass}
                >
                    <option value="" disabled>
                        Select an industry
                    </option>
                    {SETUP_INDUSTRIES.map((industry) => (
                        <option key={industry} value={industry}>
                            {industry}
                        </option>
                    ))}
                </select>
            </div>

            {/* Timezone */}
            <div>
                <label
                    htmlFor="company-timezone"
                    className="block text-xs sm:text-sm font-semibold text-slate-700 mb-2"
                >
                    Primary timezone
                </label>
                <select
                    id="company-timezone"
                    required
                    value={value.timezone}
                    onChange={(e) => onChange({ ...value, timezone: e.target.value })}
                    className={selectClass}
                >
                    <option value="" disabled>
                        Select a timezone
                    </option>
                    {SETUP_TIMEZONES.map((tz) => (
                        <option key={tz} value={tz}>
                            {tz}
                        </option>
                    ))}
                </select>
                <p className="mt-2 text-[11px] text-slate-500">
                    You can add more timezones for teams in other regions later.
                </p>
            </div>
        </div>
    );
}