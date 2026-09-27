import Link from "next/link";
import { SETUP_SUMMARY_ITEMS } from "@/lib/constants";

function SummaryIcon({
    name,
}: {
    name: "clock" | "settings" | "users";
}) {
    const common = {
        className: "w-4 h-4",
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24",
        "aria-hidden": true,
    } as const;

    switch (name) {
        case "clock":
            return (
                <svg {...common}>
                    <path
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                    />
                </svg>
            );
        case "settings":
            return (
                <svg {...common}>
                    <path
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                    />
                    <path
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                    />
                </svg>
            );
        case "users":
            return (
                <svg {...common}>
                    <path
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                    />
                </svg>
            );
    }
}

export default function SetupSummaryPanel() {
    return (
        <div className="animate-auth-rise">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wide bg-white/70 backdrop-blur-md border border-white/70 text-blue-600 mb-6">
                Getting started
            </div>

            <h2 className="text-4xl xl:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.08]">
                Let&apos;s set up
                <br />
                <span className="text-blue-600">your workspace.</span>
            </h2>

            <p className="mt-5 text-base text-slate-600 leading-relaxed max-w-md">
                A few quick details so PeopleHub feels like home from day one. You can change
                everything later from settings.
            </p>

            {/* Highlights */}
            <ul className="mt-8 space-y-4 max-w-md">
                {SETUP_SUMMARY_ITEMS.map((item) => (
                    <li key={item.title} className="flex items-start gap-3">
                        <span className="w-9 h-9 rounded-xl bg-blue-100/70 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                            <SummaryIcon name={item.icon} />
                        </span>
                        <div>
                            <p className="text-sm font-bold text-slate-900">{item.title}</p>
                            <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>

            {/* Need help */}
            <div className="mt-10 flex items-center gap-3">
                <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors"
                >
                    <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                    >
                        <path
                            d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                        />
                    </svg>
                    Need a hand? Talk to support
                </Link>
            </div>
        </div>
    );
}