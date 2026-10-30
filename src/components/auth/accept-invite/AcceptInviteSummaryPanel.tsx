import { ACCEPT_INVITE_HIGHLIGHTS } from "@/lib/constants";

function HighlightIcon({
    name,
}: {
    name: "sparkles" | "lock" | "bolt";
}) {
    const common = {
        className: "w-4 h-4",
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24",
        "aria-hidden": true,
    } as const;

    switch (name) {
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
        case "lock":
            return (
                <svg {...common}>
                    <path
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                    />
                </svg>
            );
        case "bolt":
            return (
                <svg {...common}>
                    <path
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                    />
                </svg>
            );
    }
}

export default function AcceptInviteSummaryPanel() {
    return (
        <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wide bg-white/70 backdrop-blur-md border border-white/70 text-blue-600 mb-6">
                You&apos;re invited
            </div>

            <h2 className="text-4xl xl:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.08]">
                Welcome to
                <br />
                <span className="text-blue-600">the team.</span>
            </h2>

            <p className="mt-5 text-base text-slate-600 leading-relaxed max-w-md">
                Someone on your team has invited you to join their PeopleHub workspace.
                Set a password and you&apos;re in — takes about 30 seconds.
            </p>

            {/* Highlights */}
            <ul className="mt-8 space-y-4 max-w-md">
                {ACCEPT_INVITE_HIGHLIGHTS.map((h) => (
                    <li key={h.title} className="flex items-start gap-3">
                        <span className="w-9 h-9 rounded-xl bg-blue-100/70 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                            <HighlightIcon name={h.icon} />
                        </span>
                        <div>
                            <p className="text-sm font-bold text-slate-900">{h.title}</p>
                            <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                                {h.description}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}