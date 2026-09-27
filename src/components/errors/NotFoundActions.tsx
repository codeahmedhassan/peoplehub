import Link from "next/link";
import { NOT_FOUND_SUGGESTIONS } from "@/lib/constants";

function SuggestionIcon({
    name,
}: {
    name: "home" | "sparkles" | "tag" | "message";
}) {
    const common = {
        className: "w-5 h-5",
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24",
        "aria-hidden": true,
    } as const;

    switch (name) {
        case "home":
            return (
                <svg {...common}>
                    <path
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                    />
                </svg>
            );
        case "sparkles":
            return (
                <svg {...common}>
                    <path
                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                    />
                </svg>
            );
        case "tag":
            return (
                <svg {...common}>
                    <path
                        d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                    />
                </svg>
            );
        case "message":
            return (
                <svg {...common}>
                    <path
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                    />
                </svg>
            );
    }
}

const accentStyles: Record<
    "blue" | "emerald" | "purple" | "rose",
    { bg: string; text: string; hover: string }
> = {
    blue: { bg: "bg-blue-100/70", text: "text-blue-600", hover: "hover:border-blue-200" },
    emerald: {
        bg: "bg-emerald-100/70",
        text: "text-emerald-600",
        hover: "hover:border-emerald-200",
    },
    purple: {
        bg: "bg-purple-100/70",
        text: "text-purple-600",
        hover: "hover:border-purple-200",
    },
    rose: {
        bg: "bg-rose-100/70",
        text: "text-rose-600",
        hover: "hover:border-rose-200",
    },
};

export default function NotFoundActions() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {NOT_FOUND_SUGGESTIONS.map((item) => {
                const s = accentStyles[item.accent];
                return (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={`
              group relative rounded-2xl overflow-hidden
              border border-white/70 ring-1 ring-slate-900/5
              bg-white/70 backdrop-blur-md
              ${s.hover}
              hover:shadow-card-soft hover:-translate-y-0.5
              transition-all duration-300
              p-4 sm:p-5 text-left
            `}
                    >
                        {/* Top glint */}
                        <span
                            aria-hidden="true"
                            className="pointer-events-none absolute inset-x-6 top-0 h-px rounded-full bg-linear-to-r from-transparent via-white to-transparent opacity-90"
                        />

                        <div className="flex items-start gap-3.5">
                            <span
                                className={`w-10 h-10 rounded-xl ${s.bg} ${s.text} flex items-center justify-center shrink-0`}
                            >
                                <SuggestionIcon name={item.icon} />
                            </span>

                            <div className="min-w-0 flex-1">
                                <div className="flex items-center justify-between gap-2">
                                    <p className="text-sm sm:text-base font-bold text-slate-900">
                                        {item.title}
                                    </p>
                                    <span
                                        className={`${s.text} opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all`}
                                    >
                                        <svg
                                            className="w-4 h-4"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                        >
                                            <path
                                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                            />
                                        </svg>
                                    </span>
                                </div>
                                <p className="text-xs sm:text-sm text-slate-500 mt-0.5 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
}