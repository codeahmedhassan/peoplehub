import { LegalTocDesktop } from "./LegalToc";
import { DPA_SECTIONS, DPA_SUMMARY, DPA_ROLES } from "@/lib/constants";

/* ---------- Prose primitives ---------- */

function P({ children }: { children: React.ReactNode }) {
    return (
        <p className="text-sm sm:text-base text-slate-600 leading-[1.75]">{children}</p>
    );
}

function H2({ id, children }: { id: string; children: React.ReactNode }) {
    return (
        <h2
            id={id}
            className="scroll-mt-28 text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mt-10 sm:mt-12 mb-4"
        >
            {children}
        </h2>
    );
}

function UL({ children }: { children: React.ReactNode }) {
    return (
        <ul className="mt-3 space-y-2 text-sm sm:text-base text-slate-600 leading-[1.75]">
            {children}
        </ul>
    );
}

function LI({ children }: { children: React.ReactNode }) {
    return (
        <li className="flex items-start gap-3">
            <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-2.5" />
            <span>{children}</span>
        </li>
    );
}

function Callout({
    tone,
    title,
    children,
}: {
    tone: "info" | "important";
    title: string;
    children: React.ReactNode;
}) {
    const styles =
        tone === "info"
            ? "bg-blue-50/70 border-blue-100 text-blue-900"
            : "bg-amber-50/70 border-amber-100 text-amber-900";
    const iconColor = tone === "info" ? "text-blue-600" : "text-amber-600";

    return (
        <div className={`my-6 p-4 sm:p-5 rounded-2xl border ${styles}`}>
            <div className="flex items-start gap-3">
                <svg
                    className={`w-5 h-5 shrink-0 mt-0.5 ${iconColor}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                >
                    {tone === "info" ? (
                        <path
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                        />
                    ) : (
                        <path
                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                        />
                    )}
                </svg>
                <div className="min-w-0">
                    <p className="text-sm font-bold mb-1">{title}</p>
                    <div className="text-xs sm:text-sm leading-relaxed opacity-90">{children}</div>
                </div>
            </div>
        </div>
    );
}

/* ---------- Summary cards ---------- */

const summaryAccent: Record<string, { bg: string; text: string }> = {
    shield: { bg: "bg-blue-100/70", text: "text-blue-600" },
    file: { bg: "bg-emerald-100/70", text: "text-emerald-600" },
    building: { bg: "bg-purple-100/70", text: "text-purple-600" },
};

function SummaryIcon({ name }: { name: "shield" | "file" | "building" }) {
    const common = {
        className: "w-5 h-5",
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24",
        "aria-hidden": true,
    } as const;

    if (name === "shield") {
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
    }
    if (name === "file") {
        return (
            <svg {...common}>
                <path
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                />
            </svg>
        );
    }
    return (
        <svg {...common}>
            <path
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
            />
        </svg>
    );
}

/* ---------- Main ---------- */

export default function DpaContent() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
                <div className="lg:col-span-3">
                    <LegalTocDesktop sections={DPA_SECTIONS} />
                </div>

                <article className="lg:col-span-9 max-w-3xl">
                    {/* Summary cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-10">
                        {DPA_SUMMARY.map((card) => {
                            const s = summaryAccent[card.icon];
                            return (
                                <div
                                    key={card.title}
                                    className="p-4 rounded-2xl border border-slate-100 bg-white"
                                >
                                    <div
                                        className={`w-9 h-9 rounded-xl ${s.bg} ${s.text} flex items-center justify-center mb-3`}
                                    >
                                        <SummaryIcon name={card.icon} />
                                    </div>
                                    <p className="text-sm font-bold text-slate-900">{card.title}</p>
                                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                                        {card.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>

                    {/* 1. Overview */}
                    <H2 id="overview">1. Overview</H2>
                    <div className="space-y-4">
                        <P>
                            This Data Processing Agreement (&ldquo;DPA&rdquo;) forms part of the
                            agreement between PeopleHub, Inc. (&ldquo;PeopleHub,&rdquo;
                            &ldquo;Processor&rdquo;) and the entity that has entered into the
                            PeopleHub Terms of Service (&ldquo;Customer,&rdquo;
                            &ldquo;Controller&rdquo;) and governs the processing of Personal Data
                            under applicable Data Protection Laws.
                        </P>
                        <P>
                            This DPA applies where PeopleHub processes Personal Data on behalf of the
                            Customer as part of the Services. It incorporates the Standard Contractual
                            Clauses (SCCs) approved by the European Commission (2021/914) for
                            international transfers, where applicable.
                        </P>
                        <P>
                            Unless otherwise defined here, capitalized terms have the meanings given
                            in the PeopleHub{" "}
                            <a
                                href="/legal/terms"
                                className="font-semibold text-blue-600 hover:underline"
                            >
                                Terms of Service
                            </a>{" "}
                            and in Regulation (EU) 2016/679 (the &ldquo;GDPR&rdquo;).
                        </P>
                    </div>

                    <Callout tone="info" title="Self-service vs. countersigned">
                        This page shows the DPA in full. If you don&apos;t need a countersigned copy,
                        you can accept these terms by continuing to use the Services. If you need a
                        signed version (common for enterprise security reviews), download the PDF
                        and send it back — see{" "}
                        <a href="#countersign" className="font-semibold underline">
                            Section 16
                        </a>
                        .
                    </Callout>

                    {/* 2. Definitions */}
                    <H2 id="definitions">2. Definitions</H2>
                    <div className="space-y-4">
                        <UL>
                            <LI>
                                <strong>&ldquo;Data Protection Laws&rdquo;</strong> means the GDPR, the UK
                                GDPR, the Swiss FADP, the CCPA/CPRA, and any other applicable data
                                protection laws.
                            </LI>
                            <LI>
                                <strong>&ldquo;Personal Data&rdquo;</strong> means any information
                                relating to an identified or identifiable natural person that is
                                processed by PeopleHub on behalf of the Customer under the Agreement.
                            </LI>
                            <LI>
                                <strong>&ldquo;Processing&rdquo;</strong> has the meaning given in Article
                                4(2) of the GDPR.
                            </LI>
                            <LI>
                                <strong>&ldquo;Sub-processor&rdquo;</strong> means any third party
                                engaged by PeopleHub to process Personal Data on behalf of the Customer.
                            </LI>
                            <LI>
                                <strong>&ldquo;Standard Contractual Clauses&rdquo;</strong> or
                                &ldquo;SCCs&rdquo; means the standard contractual clauses annexed to
                                European Commission Decision 2021/914.
                            </LI>
                            <LI>
                                <strong>&ldquo;Supervisory Authority&rdquo;</strong> means an independent
                                public authority responsible for monitoring the application of Data
                                Protection Laws.
                            </LI>
                        </UL>
                    </div>

                    {/* 3. Scope & roles */}
                    <H2 id="scope">3. Scope &amp; roles</H2>
                    <div className="space-y-4">
                        <P>
                            Under this DPA, the Customer acts as the <strong>Data Controller</strong>{" "}
                            and PeopleHub acts as the <strong>Data Processor</strong>. Where the
                            Customer engages a Sub-processor, PeopleHub remains liable for the
                            Sub-processor&apos;s performance.
                        </P>

                        {/* Roles table */}
                        <div className="mt-6 rounded-2xl border border-slate-200/90 overflow-hidden">
                            <div className="hidden sm:grid grid-cols-12 bg-slate-50/70 border-b border-slate-200 px-4 sm:px-5 py-3 text-[10px] uppercase tracking-wider font-semibold text-slate-500">
                                <span className="col-span-3">Role</span>
                                <span className="col-span-3">Party</span>
                                <span className="col-span-6">Description</span>
                            </div>
                            {DPA_ROLES.map((row, i) => (
                                <div
                                    key={row.role}
                                    className={`grid grid-cols-1 sm:grid-cols-12 gap-2 px-4 sm:px-5 py-4 ${i !== DPA_ROLES.length - 1 ? "border-b border-slate-100" : ""
                                        }`}
                                >
                                    <div className="sm:col-span-3">
                                        <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 sm:hidden">
                                            Role ·{" "}
                                        </span>
                                        <span className="text-sm font-bold text-slate-900">{row.role}</span>
                                    </div>
                                    <div className="sm:col-span-3">
                                        <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 sm:hidden">
                                            Party ·{" "}
                                        </span>
                                        <span className="text-xs sm:text-sm text-slate-700">{row.party}</span>
                                    </div>
                                    <div className="sm:col-span-6">
                                        <span className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                                            {row.description}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 4. Processing instructions */}
                    <H2 id="processing">4. Processing instructions</H2>
                    <div className="space-y-4">
                        <P>
                            PeopleHub will process Personal Data only on documented instructions from
                            the Customer. The Customer&apos;s instructions are set out in the Agreement,
                            this DPA (including the Annexes), and any configuration the Customer makes
                            within the Services.
                        </P>
                        <P>
                            PeopleHub will:
                        </P>
                        <UL>
                            <LI>
                                Process Personal Data only for the purposes described in Annex 1.
                            </LI>
                            <LI>
                                Not sell, rent, or share Personal Data with third parties except as
                                described in this DPA.
                            </LI>
                            <LI>
                                Promptly notify the Customer if, in its opinion, an instruction infringes
                                Data Protection Laws.
                            </LI>
                            <LI>
                                Process Personal Data in accordance with the confidentiality obligations
                                in Section 5.
                            </LI>
                        </UL>
                    </div>

                    {/* 5. Confidentiality */}
                    <H2 id="confidentiality">5. Confidentiality</H2>
                    <div className="space-y-4">
                        <P>
                            PeopleHub will ensure that any personnel authorized to process Personal
                            Data are subject to appropriate confidentiality obligations — whether
                            contractual or statutory — and have received adequate training on data
                            protection.
                        </P>
                        <P>
                            Confidentiality obligations survive termination of employment and continue
                            for as long as the personnel have access to Personal Data.
                        </P>
                    </div>

                    {/* 6. Security measures */}
                    <H2 id="security">6. Security measures</H2>
                    <div className="space-y-4">
                        <P>
                            PeopleHub will implement and maintain the technical and organizational
                            measures described in <strong>Annex 2</strong> to protect Personal Data
                            against accidental or unlawful destruction, loss, alteration, unauthorized
                            disclosure, or access.
                        </P>
                        <P>
                            These measures include encryption at rest and in transit, role-based access
                            control, continuous monitoring, regular penetration testing, and SOC 2 Type
                            II and ISO 27001 certifications.
                        </P>
                        <P>
                            PeopleHub may update these measures from time to time, provided the level of
                            protection is not reduced.
                        </P>
                    </div>

                    {/* 7. Sub-processors */}
                    <H2 id="subprocessors">7. Sub-processors</H2>
                    <div className="space-y-4">
                        <P>
                            The Customer grants PeopleHub a general authorization to engage
                            Sub-processors to assist in providing the Services. A current list of
                            Sub-processors is maintained in <strong>Annex 3</strong> and on this page.
                        </P>
                        <P>
                            PeopleHub will:
                        </P>
                        <UL>
                            <LI>
                                Impose on each Sub-processor data protection obligations no less
                                protective than those in this DPA.
                            </LI>
                            <LI>
                                Remain liable for the performance of its Sub-processors to the extent
                                required by Data Protection Laws.
                            </LI>
                            <LI>
                                Provide at least 30 days&apos; advance notice before adding or replacing
                                a Sub-processor.
                            </LI>
                        </UL>
                        <P>
                            The Customer may subscribe to Sub-processor change notifications by
                            emailing{" "}
                            <a
                                href="mailto:dpa@peoplehub.com"
                                className="font-semibold text-blue-600 hover:underline"
                            >
                                dpa@peoplehub.com
                            </a>
                            . If the Customer reasonably objects to a new Sub-processor, they may
                            terminate the affected portion of the Services.
                        </P>
                    </div>

                    {/* 8. International transfers */}
                    <H2 id="transfers">8. International transfers</H2>
                    <div className="space-y-4">
                        <P>
                            PeopleHub processes Personal Data primarily in the EU and the US. Where the
                            Customer is subject to the GDPR and Personal Data is transferred outside the
                            EEA, PeopleHub relies on:
                        </P>
                        <UL>
                            <LI>
                                The Standard Contractual Clauses (Module 2: Controller to Processor),
                                incorporated by reference into this DPA.
                            </LI>
                            <LI>
                                The UK International Data Transfer Addendum for transfers subject to the
                                UK GDPR.
                            </LI>
                            <LI>
                                Supplementary measures — including encryption in transit and at rest, and
                                data minimization — to protect Personal Data against government access.
                            </LI>
                        </UL>
                        <P>
                            Customers on Business and Enterprise plans can select EU, US, or APAC data
                            residency at no extra cost.
                        </P>
                    </div>

                    {/* 9. Data subject rights */}
                    <H2 id="data-subject-rights">9. Data subject rights</H2>
                    <div className="space-y-4">
                        <P>
                            PeopleHub will assist the Customer in responding to Data Subject requests
                            under Data Protection Laws — including access, rectification, erasure,
                            restriction, portability, and objection.
                        </P>
                        <P>
                            The Services include self-service tools that allow the Customer to fulfill
                            most requests directly (e.g., export, correction, and deletion of employee
                            records). Where additional assistance is required, PeopleHub will provide it
                            within the timeframes required by law.
                        </P>
                        <P>
                            PeopleHub will promptly notify the Customer if it receives a Data Subject
                            request relating to Personal Data processed on the Customer&apos;s behalf,
                            and will not respond directly unless legally required to do so.
                        </P>
                    </div>

                    {/* 10. Breach */}
                    <H2 id="breach">10. Personal Data breaches</H2>
                    <div className="space-y-4">
                        <P>
                            PeopleHub will notify the Customer without undue delay — and no later than
                            <strong> 48 hours</strong> — after becoming aware of a Personal Data breach
                            affecting Personal Data processed on the Customer&apos;s behalf.
                        </P>
                        <P>The notification will include, to the extent known:</P>
                        <UL>
                            <LI>The nature of the breach and the categories of data affected.</LI>
                            <LI>The likely consequences of the breach.</LI>
                            <LI>
                                The measures taken or proposed to address the breach and mitigate its
                                effects.
                            </LI>
                            <LI>The name and contact details of the PeopleHub point of contact.</LI>
                        </UL>
                        <P>
                            PeopleHub will cooperate with the Customer and take reasonable steps to
                            mitigate the breach. Notification of a breach is not an acknowledgement of
                            fault or liability.
                        </P>
                    </div>

                    <Callout tone="important" title="Incident response">
                        Our security team operates a 24/7 incident response process. Report suspected
                        vulnerabilities or breaches immediately to{" "}
                        <a
                            href="mailto:security@peoplehub.com"
                            className="font-semibold underline"
                        >
                            security@peoplehub.com
                        </a>
                        .
                    </Callout>

                    {/* 11. Audits */}
                    <H2 id="audits">11. Audits &amp; inspections</H2>
                    <div className="space-y-4">
                        <P>
                            PeopleHub will make available to the Customer all information necessary to
                            demonstrate compliance with this DPA, including:
                        </P>
                        <UL>
                            <LI>
                                Our most recent SOC 2 Type II report and ISO 27001 certificate.
                            </LI>
                            <LI>
                                Our completed security questionnaires and standard vendor-risk
                                documentation.
                            </LI>
                            <LI>
                                Written responses to reasonable audit questions within 30 days.
                            </LI>
                        </UL>
                        <P>
                            Where the above is insufficient, the Customer may conduct an audit once per
                            year (or more frequently as required by a Supervisory Authority), subject
                            to:
                        </P>
                        <UL>
                            <LI>At least 30 days&apos; prior written notice.</LI>
                            <LI>Reasonable scope and duration, avoiding disruption to the Services.</LI>
                            <LI>
                                Execution of a confidentiality agreement covering any PeopleHub
                                information reviewed.
                            </LI>
                            <LI>Customer bearing the cost of the audit unless material non-compliance is found.</LI>
                        </UL>
                    </div>

                    {/* 12. Return & deletion */}
                    <H2 id="return-deletion">12. Return &amp; deletion of Personal Data</H2>
                    <div className="space-y-4">
                        <P>
                            Upon termination or expiry of the Agreement, PeopleHub will, at the
                            Customer&apos;s choice:
                        </P>
                        <UL>
                            <LI>
                                Return Personal Data to the Customer in a structured, commonly used, and
                                machine-readable format (e.g., CSV or JSON export); or
                            </LI>
                            <LI>
                                Securely delete Personal Data and certify the deletion in writing.
                            </LI>
                        </UL>
                        <P>
                            PeopleHub will make Personal Data available for export for{" "}
                            <strong>30 days</strong> following termination. After that period, Personal
                            Data will be deleted from production systems within 30 days and from backups
                            within 90 days, unless retention is required by applicable law.
                        </P>
                    </div>

                    {/* 13. Liability */}
                    <H2 id="liability">13. Liability</H2>
                    <div className="space-y-4">
                        <P>
                            Each party&apos;s liability under this DPA is subject to the limitations and
                            exclusions of liability set out in the Agreement, except where Data
                            Protection Laws require otherwise.
                        </P>
                        <P>
                            Where PeopleHub acts as a Processor and infringes Data Protection Laws by
                            determining the purposes and means of processing, or by acting outside the
                            lawful instructions of the Customer, PeopleHub will be liable as a
                            Controller for the resulting damage.
                        </P>
                    </div>

                    {/* 14. Term */}
                    <H2 id="term">14. Term &amp; termination</H2>
                    <div className="space-y-4">
                        <P>
                            This DPA is effective from the date the Customer first uses the Services and
                            continues until the Agreement terminates, subject to the survival of
                            obligations that by their nature extend beyond termination (including
                            confidentiality, data return/deletion, and liability).
                        </P>
                    </div>

                    {/* 15. Annexes (link to the annexes section) */}
                    <H2 id="annexes">15. Annexes</H2>
                    <div className="space-y-4">
                        <P>
                            The following annexes form an integral part of this DPA:
                        </P>
                        <UL>
                            <LI>
                                <strong>Annex 1 — Details of Processing</strong>: categories of Personal
                                Data, Data Subjects, and the nature and purpose of processing.
                            </LI>
                            <LI>
                                <strong>Annex 2 — Technical &amp; Organizational Measures</strong>: the
                                security controls PeopleHub applies.
                            </LI>
                            <LI>
                                <strong>Annex 3 — Authorized Sub-processors</strong>: the current list of
                                Sub-processors and their purpose.
                            </LI>
                        </UL>
                        <P>
                            All three annexes are reproduced below in full for your convenience.
                        </P>
                    </div>

                    {/* 16. Contact */}
                    <H2 id="contact">16. Contact</H2>
                    <div className="space-y-4">
                        <P>
                            For questions about this DPA, or to request a countersigned copy, contact us:
                        </P>
                        <div className="mt-5 p-5 rounded-2xl border border-slate-200/90 bg-slate-50/60 space-y-3">
                            <div className="flex items-start gap-3">
                                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 w-24 shrink-0 mt-0.5">
                                    DPA inquiries
                                </span>
                                <a
                                    href="mailto:dpa@peoplehub.com"
                                    className="text-sm font-semibold text-blue-600 hover:underline break-all"
                                >
                                    dpa@peoplehub.com
                                </a>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 w-24 shrink-0 mt-0.5">
                                    Legal team
                                </span>
                                <a
                                    href="mailto:legal@peoplehub.com"
                                    className="text-sm font-semibold text-blue-600 hover:underline break-all"
                                >
                                    legal@peoplehub.com
                                </a>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 w-24 shrink-0 mt-0.5">
                                    Address
                                </span>
                                <span className="text-sm text-slate-700">
                                    Av. da Liberdade 110, 1250-146 Lisboa, Portugal
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 pt-8 border-t border-slate-100">
                        <p className="text-xs text-slate-400 italic">
                            This DPA was last updated on April 22, 2025 and is effective as of May 1,
                            2025. Version 3.2.
                        </p>
                    </div>
                </article>
            </div>
        </section>
    );
}