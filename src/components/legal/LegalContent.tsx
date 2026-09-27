import { LegalTocDesktop } from "./LegalToc";
import { PRIVACY_SECTIONS } from "@/lib/constants";

/* Small helpers to keep prose clean */
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

export default function LegalContent() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
                {/* Left: TOC (desktop only) */}
                <div className="lg:col-span-3">
                    <LegalTocDesktop sections={PRIVACY_SECTIONS} />
                </div>

                {/* Right: content */}
                <article className="lg:col-span-9 max-w-3xl">
                    {/* Section 1 */}
                    <H2 id="introduction">1. Introduction</H2>
                    <div className="space-y-4">
                        <P>
                            PeopleHub, Inc. (&ldquo;PeopleHub,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
                            &ldquo;our&rdquo;) provides a cloud-based human resources management platform.
                            This Privacy Policy explains how we collect, use, disclose, and safeguard
                            information when you use our website, applications, and services
                            (collectively, the &ldquo;Services&rdquo;).
                        </P>
                        <P>
                            We are committed to protecting the privacy of everyone who interacts with
                            PeopleHub — including our customers, their employees, job applicants, and
                            visitors to our website. We do not sell personal information, and we take
                            strong measures to ensure that the data entrusted to us is handled
                            responsibly.
                        </P>
                        <P>
                            By using the Services, you agree to the collection and use of information in
                            accordance with this policy. If you do not agree, please do not use the
                            Services.
                        </P>
                    </div>

                    <Callout tone="info" title="For our customers' employees">
                        If your employer uses PeopleHub, they are the &ldquo;data controller&rdquo;
                        of your personal information and we act as the &ldquo;data processor.&rdquo;
                        Requests about your data should be directed to your employer first. We
                        support them in honoring your rights.
                    </Callout>

                    {/* Section 2 */}
                    <H2 id="information-we-collect">2. Information we collect</H2>
                    <div className="space-y-4">
                        <P>
                            We collect information in three ways: information you provide directly,
                            information collected automatically when you use the Services, and
                            information received from third parties.
                        </P>

                        <p className="text-sm sm:text-base font-bold text-slate-900 mt-6">
                            Information you provide
                        </p>
                        <UL>
                            <LI>
                                <strong>Account information.</strong> Name, email address, company name,
                                job title, phone number, and password when you sign up.
                            </LI>
                            <LI>
                                <strong>Billing information.</strong> Payment method details, billing
                                address, and tax identifiers when you subscribe to a paid plan.
                            </LI>
                            <LI>
                                <strong>Employee data.</strong> When you use PeopleHub to manage your
                                workforce, you may upload employee records (including names, contact
                                details, job information, compensation, and documents) on behalf of your
                                employees.
                            </LI>
                            <LI>
                                <strong>Communications.</strong> Content of messages you send us via
                                email, support chat, or in-product feedback.
                            </LI>
                        </UL>

                        <p className="text-sm sm:text-base font-bold text-slate-900 mt-6">
                            Information collected automatically
                        </p>
                        <UL>
                            <LI>
                                <strong>Usage data.</strong> Pages viewed, features used, clickstream data,
                                session duration, and referring URLs.
                            </LI>
                            <LI>
                                <strong>Device and log data.</strong> IP address, browser type and version,
                                operating system, device identifiers, and timestamps.
                            </LI>
                            <LI>
                                <strong>Cookies and similar technologies.</strong> See Section 10 for
                                details on how we use cookies and how you can control them.
                            </LI>
                        </UL>

                        <p className="text-sm sm:text-base font-bold text-slate-900 mt-6">
                            Information from third parties
                        </p>
                        <UL>
                            <LI>
                                Identity and authentication providers (e.g., Okta, Google, Microsoft) when
                                you use single sign-on.
                            </LI>
                            <LI>
                                Payment processors when you subscribe to a paid plan.
                            </LI>
                            <LI>
                                Marketing and analytics partners, subject to your consent where required.
                            </LI>
                        </UL>
                    </div>

                    {/* Section 3 */}
                    <H2 id="how-we-use">3. How we use information</H2>
                    <div className="space-y-4">
                        <P>
                            We use the information we collect for the following purposes:
                        </P>
                        <UL>
                            <LI>To provide, operate, and maintain the Services.</LI>
                            <LI>
                                To process transactions, send related information, and provide
                                customer support.
                            </LI>
                            <LI>
                                To personalize your experience and remember your preferences.
                            </LI>
                            <LI>
                                To send administrative messages such as security alerts, policy updates,
                                and service announcements.
                            </LI>
                            <LI>
                                To send marketing and promotional communications, where you have opted in.
                            </LI>
                            <LI>
                                To monitor and analyze trends, usage, and activity to improve the Services.
                            </LI>
                            <LI>
                                To detect, prevent, and address technical issues, fraud, or security
                                incidents.
                            </LI>
                            <LI>
                                To comply with legal obligations and enforce our agreements.
                            </LI>
                        </UL>
                        <P>
                            We do not use employee data uploaded by our customers for our own marketing
                            or advertising purposes. That data is used solely to provide the Services.
                        </P>
                    </div>

                    {/* Section 4 */}
                    <H2 id="legal-bases">4. Legal bases for processing</H2>
                    <div className="space-y-4">
                        <P>
                            If you are located in the European Economic Area (EEA), the United Kingdom,
                            or Switzerland, we process your personal information under the following
                            legal bases:
                        </P>
                        <UL>
                            <LI>
                                <strong>Contract.</strong> Processing necessary to perform our contract with
                                you (e.g., providing the Services, processing payments).
                            </LI>
                            <LI>
                                <strong>Legitimate interests.</strong> Processing for our legitimate
                                business interests, such as improving the Services, ensuring security, and
                                preventing fraud — balanced against your rights.
                            </LI>
                            <LI>
                                <strong>Consent.</strong> Where you have given us explicit consent, for
                                example for marketing emails or non-essential cookies.
                            </LI>
                            <LI>
                                <strong>Legal obligation.</strong> Processing necessary to comply with
                                applicable laws.
                            </LI>
                        </UL>
                    </div>

                    {/* Section 5 */}
                    <H2 id="sharing">5. Sharing &amp; disclosure</H2>
                    <div className="space-y-4">
                        <P>
                            <strong className="text-slate-900">
                                We never sell your personal information.
                            </strong>{" "}
                            We may share information only in the limited circumstances described below.
                        </P>

                        <p className="text-sm sm:text-base font-bold text-slate-900 mt-6">
                            Service providers
                        </p>
                        <P>
                            We share information with third-party vendors who help us operate the
                            Services — including cloud hosting providers, payment processors,
                            communication tools, and analytics services. These providers are bound by
                            contracts that require them to protect your data and use it only for the
                            purposes we specify.
                        </P>

                        <p className="text-sm sm:text-base font-bold text-slate-900 mt-6">
                            Legal requirements
                        </p>
                        <P>
                            We may disclose information if required to do so by law or in response to
                            valid requests from public authorities (e.g., a court order or subpoena).
                            We will notify you where legally permitted.
                        </P>

                        <p className="text-sm sm:text-base font-bold text-slate-900 mt-6">
                            Business transfers
                        </p>
                        <P>
                            If PeopleHub is involved in a merger, acquisition, or sale of assets, your
                            information may be transferred as part of that transaction. We will notify
                            you of any change in ownership or use of your personal information.
                        </P>

                        <p className="text-sm sm:text-base font-bold text-slate-900 mt-6">
                            With your consent
                        </p>
                        <P>
                            We may share information for any other purpose with your explicit consent.
                        </P>
                    </div>

                    {/* Section 6 */}
                    <H2 id="international">6. International transfers</H2>
                    <div className="space-y-4">
                        <P>
                            PeopleHub operates globally. Your information may be transferred to and
                            processed in countries other than your own, including the United States and
                            the European Union. When we transfer personal information from the EEA, the
                            UK, or Switzerland, we rely on appropriate safeguards such as Standard
                            Contractual Clauses approved by the European Commission.
                        </P>
                        <P>
                            We also offer data residency options on Business and Enterprise plans, so
                            you can choose where your data is stored (EU, US, or APAC).
                        </P>
                    </div>

                    {/* Section 7 */}
                    <H2 id="retention">7. Data retention</H2>
                    <div className="space-y-4">
                        <P>
                            We retain personal information for as long as necessary to provide the
                            Services, comply with our legal obligations, resolve disputes, and enforce
                            our agreements.
                        </P>
                        <UL>
                            <LI>
                                <strong>Account data:</strong> retained for the life of your account, then
                                deleted within 90 days of account closure.
                            </LI>
                            <LI>
                                <strong>Employee data:</strong> retained according to your configuration.
                                Default retention is the duration of your subscription.
                            </LI>
                            <LI>
                                <strong>Billing and tax records:</strong> retained for up to 10 years to
                                comply with accounting and tax laws.
                            </LI>
                            <LI>
                                <strong>Usage and log data:</strong> retained for up to 24 months.
                            </LI>
                        </UL>
                        <P>
                            When retention periods expire, we securely delete or anonymize the
                            information.
                        </P>
                    </div>

                    {/* Section 8 */}
                    <H2 id="your-rights">8. Your rights</H2>
                    <div className="space-y-4">
                        <P>
                            Depending on your location, you may have the following rights regarding your
                            personal information:
                        </P>
                        <UL>
                            <LI>
                                <strong>Access.</strong> Request a copy of the personal information we hold
                                about you.
                            </LI>
                            <LI>
                                <strong>Correction.</strong> Request that we correct inaccurate or
                                incomplete information.
                            </LI>
                            <LI>
                                <strong>Deletion.</strong> Request that we delete your personal information,
                                subject to certain legal exceptions.
                            </LI>
                            <LI>
                                <strong>Portability.</strong> Request a machine-readable copy of your data
                                for transfer to another service.
                            </LI>
                            <LI>
                                <strong>Objection.</strong> Object to certain processing, including
                                direct marketing.
                            </LI>
                            <LI>
                                <strong>Restriction.</strong> Request that we restrict processing in certain
                                circumstances.
                            </LI>
                            <LI>
                                <strong>Withdraw consent.</strong> Withdraw consent at any time where
                                processing is based on consent.
                            </LI>
                        </UL>
                        <P>
                            To exercise any of these rights, email{" "}
                            <a
                                href="mailto:privacy@peoplehub.com"
                                className="font-semibold text-blue-600 hover:underline"
                            >
                                privacy@peoplehub.com
                            </a>
                            . We respond to all requests within 30 days. If your data was uploaded by
                            your employer, we will forward your request to them.
                        </P>
                    </div>

                    <Callout tone="important" title="California residents">
                        Under the CCPA/CPRA, you have the right to know what personal information we
                        collect, to request deletion, to opt out of the &ldquo;sale&rdquo; of personal
                        information (we do not sell), and to non-discrimination for exercising your
                        rights.
                    </Callout>

                    {/* Section 9 */}
                    <H2 id="security">9. Security</H2>
                    <div className="space-y-4">
                        <P>
                            We take the security of your data seriously. We implement and maintain
                            industry-standard safeguards, including:
                        </P>
                        <UL>
                            <LI>256-bit AES encryption at rest and TLS 1.2+ in transit.</LI>
                            <LI>SOC 2 Type II certified controls, independently audited annually.</LI>
                            <LI>Role-based access controls and least-privilege principles.</LI>
                            <LI>Continuous monitoring, logging, and incident response procedures.</LI>
                            <LI>Regular penetration testing and vulnerability scanning.</LI>
                        </UL>
                        <P>
                            While we work hard to protect your information, no method of transmission or
                            storage is 100% secure. We cannot guarantee absolute security.
                        </P>
                    </div>

                    {/* Section 10 */}
                    <H2 id="cookies">10. Cookies &amp; tracking</H2>
                    <div className="space-y-4">
                        <P>
                            We use cookies and similar tracking technologies to operate and improve the
                            Services.
                        </P>
                        <UL>
                            <LI>
                                <strong>Essential cookies.</strong> Required for authentication, security,
                                and core functionality. These cannot be disabled.
                            </LI>
                            <LI>
                                <strong>Analytics cookies.</strong> Help us understand how users interact
                                with the Services. You can opt out.
                            </LI>
                            <LI>
                                <strong>Marketing cookies.</strong> Used to deliver relevant ads on
                                third-party platforms. Only set with your consent.
                            </LI>
                        </UL>
                        <P>
                            You can manage your cookie preferences at any time from our cookie banner or
                            your browser settings. Disabling certain cookies may affect functionality.
                        </P>
                    </div>

                    {/* Section 11 */}
                    <H2 id="children">11. Children&apos;s privacy</H2>
                    <div className="space-y-4">
                        <P>
                            The Services are not intended for individuals under the age of 16. We do not
                            knowingly collect personal information from children. If you believe we have
                            collected information from a child, please contact us at{" "}
                            <a
                                href="mailto:privacy@peoplehub.com"
                                className="font-semibold text-blue-600 hover:underline"
                            >
                                privacy@peoplehub.com
                            </a>{" "}
                            and we will delete it promptly.
                        </P>
                    </div>

                    {/* Section 12 */}
                    <H2 id="changes">12. Changes to this policy</H2>
                    <div className="space-y-4">
                        <P>
                            We may update this Privacy Policy from time to time to reflect changes in
                            our practices or applicable laws. When we make material changes, we will
                            notify you by email and/or by a prominent notice on the Services at least
                            30 days before the changes take effect.
                        </P>
                        <P>
                            We encourage you to review this page periodically to stay informed about how
                            we protect your information.
                        </P>
                    </div>

                    {/* Section 13 */}
                    <H2 id="contact">13. Contact us</H2>
                    <div className="space-y-4">
                        <P>
                            If you have questions, concerns, or requests regarding this Privacy Policy
                            or our data practices, please contact us:
                        </P>
                        <div className="mt-5 p-5 rounded-2xl border border-slate-200/90 bg-slate-50/60 space-y-3">
                            <div className="flex items-start gap-3">
                                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 w-20 shrink-0 mt-0.5">
                                    General
                                </span>
                                <a
                                    href="mailto:privacy@peoplehub.com"
                                    className="text-sm font-semibold text-blue-600 hover:underline break-all"
                                >
                                    privacy@peoplehub.com
                                </a>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 w-20 shrink-0 mt-0.5">
                                    DPO
                                </span>
                                <a
                                    href="mailto:dpo@peoplehub.com"
                                    className="text-sm font-semibold text-blue-600 hover:underline break-all"
                                >
                                    dpo@peoplehub.com
                                </a>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 w-20 shrink-0 mt-0.5">
                                    Address
                                </span>
                                <span className="text-sm text-slate-700">
                                    Av. da Liberdade 110, 1250-146 Lisboa, Portugal
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* End mark */}
                    <div className="mt-12 pt-8 border-t border-slate-100">
                        <p className="text-xs text-slate-400 italic">
                            This policy was last updated on April 22, 2025 and is effective as of May 1,
                            2025.
                        </p>
                    </div>
                </article>
            </div>
        </section>
    );
}