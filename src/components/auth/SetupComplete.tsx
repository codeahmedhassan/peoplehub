"use client";

import Link from "next/link";
import { CompanyData } from "./StepCompany";

function ArrowRight() {
    return (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
        </svg>
    );
}

type Props = {
    company: CompanyData;
    teamSize: string;
    inviteCount: number;
};

export default function SetupComplete({ company, teamSize, inviteCount }: Props) {
    const summary = [
        { label: "Company", value: company.name || "—" },
        { label: "Industry", value: company.industry || "—" },
        { label: "Timezone", value: company.timezone || "—" },
        { label: "Team size", value: teamSize || "—" },
        {
            label: "Invites",
            value: inviteCount > 0 ? `${inviteCount} pending` : "None sent",
        },
    ];

    return (
        <div className="animate-auth-rise text-center">
            {/* Success icon */}
            <div className="flex justify-center mb-6">
                <div className="relative">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                        <svg
                            className="w-8 h-8 sm:w-10 sm:h-10"
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
                    </div>
                    <span
                        aria-hidden="true"
                        className="absolute inset-0 rounded-full ring-4 ring-emerald-100/60 animate-pulse"
                    />
                </div>
            </div>

            {/* Heading */}
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Your workspace is ready.
            </h1>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-sm mx-auto">
                We&apos;ve set everything up based on your answers. Jump in and start exploring
                — or take the guided tour.
            </p>

            {/* Summary card */}
            <div className="mt-7 p-5 rounded-2xl bg-white/70 backdrop-blur-md border border-white/70 ring-1 ring-slate-900/5 text-left">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Your workspace
                </p>
                <dl className="space-y-2.5">
                    {summary.map((item) => (
                        <div key={item.label} className="flex items-start justify-between gap-3 text-sm">
                            <dt className="text-slate-500 shrink-0">{item.label}</dt>
                            <dd className="font-semibold text-slate-900 text-right break-all min-w-0">
                                {item.value}
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>

            {/* Actions */}
            <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5">
                <Link
                    href="/"
                    className="
            relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full overflow-hidden
            text-white text-sm font-semibold
            transition-transform active:scale-[0.98]
          "
                >
                    <span
                        aria-hidden="true"
                        className="absolute inset-0 rounded-full"
                        style={{
                            backdropFilter:
                                "url(#liquid-glass-distortion) blur(2px) saturate(1.4)",
                            WebkitBackdropFilter: "blur(14px) saturate(1.4)",
                        }}
                    />
                    <span
                        aria-hidden="true"
                        className="absolute inset-0 rounded-full bg-slate-950/90"
                    />
                    <span className="relative flex items-center gap-2">
                        Go to dashboard
                        <ArrowRight />
                    </span>
                </Link>
                <Link
                    href="/features"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white border border-slate-200 text-slate-800 text-sm font-semibold hover:bg-slate-50 transition-colors"
                >
                    Take the tour
                </Link>
            </div>

            <p className="mt-5 text-[11px] text-slate-400">
                You can adjust any of these settings from your workspace settings.
            </p>
        </div>
    );
}