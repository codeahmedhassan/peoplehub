function MiniChart() {
    const bars = [35, 48, 58, 64, 72, 82];
    return (
        <div className="flex items-end gap-1 h-14">
            {bars.map((h, i) => (
                <div
                    key={i}
                    className="flex-1 rounded-t-sm bg-blue-500/80"
                    style={{ height: `${h}%` }}
                />
            ))}
        </div>
    );
}

const RECENT = [
    { name: "Amara Okafor", role: "Product Designer", dept: "Design", status: "Active" },
    { name: "Daniel Kim", role: "Staff Engineer", dept: "Engineering", status: "Active" },
    { name: "Priya Raman", role: "People Partner", dept: "People", status: "On leave" },
    { name: "Jonas Weber", role: "Account Executive", dept: "Sales", status: "Active" },
    { name: "Sofia Marchetti", role: "Ops Analyst", dept: "Operations", status: "Active" },
];

export default function EmployeeDashboardPreview() {
    return (
        <section className="bg-slate-50/60 py-14 sm:py-20 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-14">
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wide bg-blue-100/70 text-blue-600 mb-3">
                        Employee directory
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-tight">
                        The directory your
                        <br className="hidden sm:block" />{" "}
                        <span className="text-blue-600">team will actually use.</span>
                    </h2>
                    <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-600">
                        Search, filter, and act on any employee record in seconds — with the
                        visual polish of a modern SaaS product.
                    </p>
                </div>

                {/* Dashboard mockup */}
                <div className="relative">
                    {/* Background blob */}
                    <div
                        aria-hidden="true"
                        className="hidden lg:block absolute inset-x-20 -inset-y-6 rounded-[40px] bg-linear-to-r from-blue-100/50 via-indigo-100/40 to-sky-100/50 blur-2xl"
                    />

                    <div className="relative rounded-3xl border border-slate-200/90 bg-white shadow-dashboard overflow-hidden">
                        {/* Window chrome */}
                        <div className="h-10 border-b border-slate-100 flex items-center px-4 gap-2 bg-slate-50/60">
                            <span className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                            <span className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                            <span className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                            <span className="ml-3 text-[11px] font-semibold text-slate-500">
                                PeopleHub — Employees
                            </span>
                        </div>

                        {/* Toolbar */}
                        <div className="px-4 sm:px-6 py-3 sm:py-4 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center gap-3">
                            <div className="flex-1 flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-50 border border-slate-100 max-w-md">
                                <svg className="w-4 h-4 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                    />
                                </svg>
                                <span className="text-xs text-slate-400 truncate">
                                    Search by name, role, department, or skill…
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold bg-blue-50 text-blue-600 border border-blue-100">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                    Engineering (42)
                                </span>
                                <span className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-600 border border-emerald-100">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                    Design (12)
                                </span>
                                <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-[11px] font-semibold bg-slate-900 text-white">
                                    + New
                                </span>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="grid grid-cols-1 lg:grid-cols-12">
                            {/* Employee list */}
                            <div className="lg:col-span-8 border-b lg:border-b-0 lg:border-r border-slate-100">
                                {/* Table header (desktop only) */}
                                <div className="hidden sm:grid grid-cols-12 gap-3 px-4 sm:px-6 py-3 border-b border-slate-100 text-[10px] uppercase tracking-wider text-slate-400 font-semibold">
                                    <span className="col-span-6">Employee</span>
                                    <span className="col-span-3">Department</span>
                                    <span className="col-span-3">Status</span>
                                </div>

                                {/* Rows */}
                                <div className="divide-y divide-slate-100">
                                    {RECENT.map((p, i) => (
                                        <div
                                            key={p.name}
                                            className={`grid grid-cols-12 gap-3 px-4 sm:px-6 py-3.5 items-center transition-colors hover:bg-slate-50/60 ${i === 0 ? "bg-blue-50/30" : ""
                                                }`}
                                        >
                                            {/* Employee */}
                                            <div className="col-span-12 sm:col-span-6 flex items-center gap-3">
                                                <div className="relative shrink-0">
                                                    <div className="w-9 h-9 rounded-full bg-linear-to-br from-blue-200 to-indigo-200" />
                                                    <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 ring-2 ring-white" />
                                                </div>
                                                <div className="min-w-0">
                                                    <p className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                                                        {p.name}
                                                    </p>
                                                    <p className="text-[10px] sm:text-xs text-slate-500 truncate">
                                                        {p.role}
                                                    </p>
                                                </div>
                                            </div>
                                            {/* Department */}
                                            <div className="col-span-6 sm:col-span-3">
                                                <span className="text-[10px] sm:text-xs font-medium text-slate-600">
                                                    {p.dept}
                                                </span>
                                            </div>
                                            {/* Status */}
                                            <div className="col-span-6 sm:col-span-3">
                                                <span
                                                    className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold ${p.status === "Active"
                                                        ? "bg-emerald-50 text-emerald-600"
                                                        : "bg-amber-50 text-amber-600"
                                                        }`}
                                                >
                                                    <span
                                                        className={`w-1.5 h-1.5 rounded-full ${p.status === "Active" ? "bg-emerald-500" : "bg-amber-500"
                                                            }`}
                                                    />
                                                    {p.status}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Side stats */}
                            <div className="lg:col-span-4 p-4 sm:p-6 space-y-4 bg-slate-50/40">
                                {/* Headcount card */}
                                <div className="rounded-2xl border border-slate-100 bg-white p-4">
                                    <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">
                                        Total headcount
                                    </p>
                                    <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
                                        248
                                    </p>
                                    <p className="text-[10px] text-emerald-600 font-semibold mt-1">
                                        +12% from last quarter
                                    </p>
                                    <div className="mt-3">
                                        <MiniChart />
                                    </div>
                                </div>

                                {/* Recent joiners */}
                                <div className="rounded-2xl border border-slate-100 bg-white p-4">
                                    <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold mb-3">
                                        Recent joiners
                                    </p>
                                    <div className="flex -space-x-2">
                                        {[0, 1, 2, 3, 4].map((i) => (
                                            <div
                                                key={i}
                                                className="w-8 h-8 rounded-full ring-2 ring-white bg-linear-to-br from-blue-200 to-indigo-200"
                                            />
                                        ))}
                                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full ring-2 ring-white bg-slate-100 text-[10px] font-bold text-slate-600">
                                            +8
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}