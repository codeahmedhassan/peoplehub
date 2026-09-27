import { EMPLOYEE_WORKFLOWS } from "@/lib/constants";

const accentStyles: Record<
    "blue" | "emerald" | "amber",
    { bg: string; text: string; dot: string; line: string }
> = {
    blue: {
        bg: "bg-blue-100/70",
        text: "text-blue-600",
        dot: "bg-blue-500",
        line: "bg-blue-100",
    },
    emerald: {
        bg: "bg-emerald-100/70",
        text: "text-emerald-600",
        dot: "bg-emerald-500",
        line: "bg-emerald-100",
    },
    amber: {
        bg: "bg-amber-100/70",
        text: "text-amber-600",
        dot: "bg-amber-500",
        line: "bg-amber-100",
    },
};

export default function EmployeeWorkflows() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24">
            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-14">
                <div className="max-w-lg">
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wide bg-blue-100/70 text-blue-600 mb-3">
                        Automations
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-tight">
                        One change.
                        <br className="hidden sm:block" />{" "}
                        <span className="text-blue-600">Ten things happen.</span>
                    </h2>
                </div>
                <p className="text-sm sm:text-base text-slate-600 max-w-md leading-relaxed">
                    When an employee&apos;s status changes, PeopleHub triggers the downstream
                    steps — no reminders, no missed handoffs.
                </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                {EMPLOYEE_WORKFLOWS.map((flow) => {
                    const s = accentStyles[flow.accent];
                    return (
                        <div
                            key={flow.trigger}
                            className="p-5 sm:p-6 rounded-2xl border border-slate-100 bg-white hover:shadow-card-soft transition-all duration-300"
                        >
                            {/* Trigger */}
                            <div className="flex items-center gap-2.5 mb-5">
                                <span className={`w-2 h-2 rounded-full ${s.dot}`} />
                                <p className={`text-[10px] font-bold uppercase tracking-wider ${s.text}`}>
                                    Trigger
                                </p>
                            </div>
                            <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-5">
                                {flow.trigger}
                            </h3>

                            {/* Actions timeline */}
                            <div className="relative pl-5">
                                <span
                                    aria-hidden="true"
                                    className={`absolute left-0.75 top-2 bottom-2 w-px ${s.line}`}
                                />
                                <ul className="space-y-3.5">
                                    {flow.actions.map((action, i) => (
                                        <li key={action} className="relative">
                                            <span
                                                className={`absolute -left-5 top-1.5 w-2 h-2 rounded-full ${s.dot} ring-2 ring-white`}
                                            />
                                            <p className="text-xs sm:text-sm text-slate-600 leading-snug">
                                                {action}
                                            </p>
                                            {i === flow.actions.length - 1 && (
                                                <span className="inline-flex items-center gap-1 mt-1.5 text-[10px] font-semibold text-slate-400">
                                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                        <path
                                                            d="M5 13l4 4L19 7"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2.5}
                                                        />
                                                    </svg>
                                                    Flow complete
                                                </span>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}