import { PRICING_VALUE_PROPS } from "@/lib/constants";

function ValueIcon({ name }: { name: "sparkles" | "receipt" | "shield" | "trend" }) {
    const common = {
        className: "w-5 h-5",
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
        case "receipt":
            return (
                <svg {...common}>
                    <path
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                    />
                </svg>
            );
        case "shield":
            return (
                <svg {...common}>
                    <path
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                    />
                </svg>
            );
        case "trend":
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
    }
}

export default function ValueProps() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {PRICING_VALUE_PROPS.map((prop) => (
                    <div
                        key={prop.title}
                        className="p-5 rounded-2xl border border-slate-100 bg-white hover:border-blue-100 hover:shadow-card-soft transition-all duration-300 flex items-start gap-3.5"
                    >
                        <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                            <ValueIcon name={prop.icon} />
                        </div>
                        <div>
                            <h3 className="text-sm font-bold text-slate-900">{prop.title}</h3>
                            <p className="text-xs text-slate-500 mt-1 leading-relaxed">{prop.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}