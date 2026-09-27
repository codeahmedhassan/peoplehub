import {
    DPA_ANNEX_1,
    DPA_ANNEX_2,
    DPA_ANNEX_3,
} from "@/lib/constants";

function AnnexHeader({
    number,
    title,
    description,
}: {
    number: string;
    title: string;
    description: string;
}) {
    return (
        <div className="mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-100/70 text-blue-600 mb-3">
                Annex {number}
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {title}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
                {description}
            </p>
        </div>
    );
}

function InfoRow({ label, children }: { label: string; children: React.ReactNode }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-4 py-4 border-b border-slate-100 last:border-b-0">
            <p className="sm:col-span-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                {label}
            </p>
            <div className="sm:col-span-8 text-sm text-slate-700 leading-relaxed">
                {children}
            </div>
        </div>
    );
}

export default function DpaAnnexes() {
    return (
        <section
            id="annexes-content"
            className="bg-slate-50/60 py-14 sm:py-20 lg:py-24"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 sm:space-y-20">
                {/* ---------- Annex 1 ---------- */}
                <div className="max-w-4xl mx-auto">
                    <AnnexHeader
                        number="1"
                        title="Details of Processing"
                        description="The specific details of the processing carried out by PeopleHub on behalf of the Customer."
                    />

                    <div className="rounded-3xl border border-slate-200/90 bg-white p-5 sm:p-7">
                        <InfoRow label="Subject matter">{DPA_ANNEX_1.subjectMatter}</InfoRow>
                        <InfoRow label="Duration">{DPA_ANNEX_1.duration}</InfoRow>
                        <InfoRow label="Nature of processing">{DPA_ANNEX_1.nature}</InfoRow>
                        <InfoRow label="Purpose">{DPA_ANNEX_1.purpose}</InfoRow>

                        <InfoRow label="Categories of Personal Data">
                            <ul className="space-y-1.5">
                                {DPA_ANNEX_1.dataTypes.map((item) => (
                                    <li key={item} className="flex items-start gap-2.5">
                                        <span className="w-1 h-1 rounded-full bg-blue-500 shrink-0 mt-2" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </InfoRow>

                        <InfoRow label="Categories of Data Subjects">
                            <ul className="space-y-1.5">
                                {DPA_ANNEX_1.dataSubjects.map((item) => (
                                    <li key={item} className="flex items-start gap-2.5">
                                        <span className="w-1 h-1 rounded-full bg-blue-500 shrink-0 mt-2" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </InfoRow>

                        <InfoRow label="Special categories">
                            {DPA_ANNEX_1.specialCategories}
                        </InfoRow>
                    </div>
                </div>

                {/* ---------- Annex 2 ---------- */}
                <div className="max-w-5xl mx-auto">
                    <AnnexHeader
                        number="2"
                        title="Technical & Organizational Measures"
                        description="The security controls PeopleHub applies to protect Personal Data. Reviewed annually."
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {DPA_ANNEX_2.map((tom) => (
                            <div
                                key={tom.category}
                                className="p-5 sm:p-6 rounded-2xl border border-slate-100 bg-white"
                            >
                                <h3 className="text-sm font-bold text-slate-900 mb-3">
                                    {tom.category}
                                </h3>
                                <ul className="space-y-2">
                                    {tom.controls.map((control) => (
                                        <li
                                            key={control}
                                            className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed"
                                        >
                                            <svg
                                                className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    clipRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    fillRule="evenodd"
                                                />
                                            </svg>
                                            <span>{control}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ---------- Annex 3 ---------- */}
                <div id="subprocessors" className="max-w-5xl mx-auto">
                    <AnnexHeader
                        number="3"
                        title="Authorized Sub-processors"
                        description="The current list of third parties engaged by PeopleHub to process Personal Data on behalf of the Customer."
                    />

                    {/* Desktop table */}
                    <div className="hidden md:block rounded-2xl border border-slate-200/90 bg-white overflow-hidden">
                        <div className="grid grid-cols-12 gap-3 bg-slate-50/70 border-b border-slate-200 px-5 py-3 text-[10px] uppercase tracking-wider font-semibold text-slate-500">
                            <span className="col-span-3">Sub-processor</span>
                            <span className="col-span-4">Purpose</span>
                            <span className="col-span-3">Location</span>
                            <span className="col-span-2">Category</span>
                        </div>
                        {DPA_ANNEX_3.map((sub, i) => (
                            <div
                                key={sub.name}
                                className={`grid grid-cols-12 gap-3 px-5 py-4 ${i !== DPA_ANNEX_3.length - 1 ? "border-b border-slate-100" : ""
                                    } hover:bg-slate-50/40 transition-colors`}
                            >
                                <div className="col-span-3">
                                    <p className="text-sm font-bold text-slate-900">{sub.name}</p>
                                </div>
                                <div className="col-span-4">
                                    <p className="text-xs text-slate-600 leading-relaxed">
                                        {sub.purpose}
                                    </p>
                                </div>
                                <div className="col-span-3">
                                    <p className="text-xs text-slate-600 leading-relaxed">
                                        {sub.location}
                                    </p>
                                </div>
                                <div className="col-span-2">
                                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-600">
                                        {sub.category}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Mobile cards */}
                    <div className="md:hidden space-y-3">
                        {DPA_ANNEX_3.map((sub) => (
                            <div
                                key={sub.name}
                                className="p-4 rounded-2xl border border-slate-200/90 bg-white"
                            >
                                <div className="flex items-start justify-between gap-3 mb-2">
                                    <p className="text-sm font-bold text-slate-900">{sub.name}</p>
                                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-600 shrink-0">
                                        {sub.category}
                                    </span>
                                </div>
                                <p className="text-xs text-slate-600 leading-relaxed">{sub.purpose}</p>
                                <p className="text-[11px] text-slate-400 mt-2">{sub.location}</p>
                            </div>
                        ))}
                    </div>

                    {/* Change notification CTA */}
                    <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50/60 p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-4">
                        <div className="flex-1">
                            <p className="text-sm font-bold text-slate-900">
                                Subscribe to sub-processor change notifications
                            </p>
                            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                                Get an email at least 30 days before we add or replace any sub-processor.
                            </p>
                        </div>
                        <a
                            href="mailto:dpa@peoplehub.com?subject=Subscribe%20to%20sub-processor%20notifications"
                            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-slate-950 text-white text-sm font-semibold hover:bg-slate-800 transition-all shadow-sm shrink-0"
                        >
                            Subscribe
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}