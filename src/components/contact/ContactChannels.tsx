import { CONTACT_CHANNELS } from "@/lib/constants";

function ChannelIcon({ name }: { name: "sales" | "support" | "press" }) {
    const common = {
        className: "w-5 h-5 sm:w-6 sm:h-6",
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24",
        "aria-hidden": true,
    } as const;

    switch (name) {
        case "sales":
            return (
                <svg {...common}>
                    <path
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                    />
                </svg>
            );
        case "support":
            return (
                <svg {...common}>
                    <path
                        d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                    />
                </svg>
            );
        case "press":
            return (
                <svg {...common}>
                    <path
                        d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                    />
                </svg>
            );
    }
}

const accentStyles: Record<
    "blue" | "emerald" | "purple",
    { bg: string; text: string; hover: string }
> = {
    blue: { bg: "bg-blue-100/70", text: "text-blue-600", hover: "hover:border-blue-100" },
    emerald: { bg: "bg-emerald-100/70", text: "text-emerald-600", hover: "hover:border-emerald-100" },
    purple: { bg: "bg-purple-100/70", text: "text-purple-600", hover: "hover:border-purple-100" },
};

function ArrowRight() {
    return (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
        </svg>
    );
}

export default function ContactChannels() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 sm:pb-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                {CONTACT_CHANNELS.map((channel) => {
                    const styles = accentStyles[channel.accent];
                    return (
                        <a
                            key={channel.title}
                            href={channel.href}
                            className={`group p-5 sm:p-6 rounded-2xl border border-slate-100 bg-white ${styles.hover} hover:shadow-card-soft transition-all duration-300 flex flex-col`}
                        >
                            <div className="flex items-center gap-3 sm:gap-4 mb-4">
                                <div
                                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl ${styles.bg} ${styles.text} flex items-center justify-center shrink-0`}
                                >
                                    <ChannelIcon name={channel.icon} />
                                </div>
                                <div className="min-w-0">
                                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                                        {channel.title}
                                    </h3>
                                </div>
                            </div>
                            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-4 flex-1">
                                {channel.description}
                            </p>
                            <div className="flex items-center justify-between gap-2 pt-3 border-t border-slate-100">
                                <span className={`text-xs sm:text-sm font-semibold ${styles.text} truncate`}>
                                    {channel.action}
                                </span>
                                <span
                                    className={`shrink-0 ${styles.text} group-hover:translate-x-0.5 transition-transform`}
                                >
                                    <ArrowRight />
                                </span>
                            </div>
                        </a>
                    );
                })}
            </div>
        </section>
    );
}