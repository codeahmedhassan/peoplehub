import { ADD_ONS, type AddOn } from "@/lib/constants";

function AddOnIcon({ name }: { name: AddOn["icon"] }) {
    const common = {
        className: "w-5 h-5",
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24",
        "aria-hidden": true,
    } as const;

    switch (name) {
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
        case "globe":
            return (
                <svg {...common}>
                    <path
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                    />
                </svg>
            );
        case "bot":
            return (
                <svg {...common}>
                    <path
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2z"
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
    }
}

export default function AddOns() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
                <div>
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide bg-blue-100/70 text-blue-600 mb-3">
                        Add-ons
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                        Extend any plan{" "}
                        <span className="text-blue-600">your way.</span>
                    </h2>
                </div>
                <p className="text-sm text-slate-500 max-w-md leading-relaxed">
                    Optional extras you can attach to any paid plan — billed monthly, cancel any time.
                </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {ADD_ONS.map((addon) => (
                    <div
                        key={addon.name}
                        className="p-6 rounded-2xl border border-slate-100 bg-white hover:border-blue-100 hover:shadow-card-soft transition-all duration-300 flex items-start gap-4"
                    >
                        <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                            <AddOnIcon name={addon.icon} />
                        </div>
                        <div className="flex-1">
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <h3 className="text-sm font-bold text-slate-900">{addon.name}</h3>
                                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                                        {addon.description}
                                    </p>
                                </div>
                                <div className="text-right shrink-0">
                                    <p className="text-lg font-extrabold text-slate-900 leading-none">
                                        {addon.price}
                                    </p>
                                    <p className="text-[10px] text-slate-500 mt-1 leading-tight max-w-25">
                                        {addon.period}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}