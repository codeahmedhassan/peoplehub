import { LegalTocDesktop } from "./LegalToc";
import { TERMS_SECTIONS } from "@/lib/constants";

/* ---------- Reusable prose primitives ---------- */

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

function H3({ children }: { children: React.ReactNode }) {
    return (
        <p className="text-sm sm:text-base font-bold text-slate-900 mt-6">{children}</p>
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

/* ---------- Main component ---------- */

export default function TermsContent() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
                {/* Left: TOC */}
                <div className="lg:col-span-3">
                    <LegalTocDesktop sections={TERMS_SECTIONS} />
                </div>

                {/* Right: content */}
                <article className="lg:col-span-9 max-w-3xl">
                    {/* 1. Agreement to terms */}
                    <H2 id="agreement">1. Agreement to terms</H2>
                    <div className="space-y-4">
                        <P>
                            These Terms of Service (the &ldquo;Terms&rdquo;) form a legally binding
                            agreement between you or the company you represent (&ldquo;Customer,&rdquo;
                            &ldquo;you,&rdquo; or &ldquo;your&rdquo;) and PeopleHub, Inc.
                            (&ldquo;PeopleHub,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
                            &ldquo;our&rdquo;) and govern your access to and use of the PeopleHub
                            platform, website, and related services (collectively, the
                            &ldquo;Services&rdquo;).
                        </P>
                        <P>
                            By creating an account, accessing, or using the Services, you agree to be
                            bound by these Terms. If you are entering into these Terms on behalf of a
                            company or other legal entity, you represent that you have the authority to
                            bind that entity. If you do not agree to these Terms, do not use the
                            Services.
                        </P>
                    </div>

                    <Callout tone="info" title="Enterprise customers">
                        If you have signed a separate Master Services Agreement (MSA) with PeopleHub,
                        that agreement takes precedence over these Terms for any conflict. Enterprise
                        agreements also include our Data Processing Addendum (DPA) by reference.
                    </Callout>

                    {/* 2. Definitions */}
                    <H2 id="definitions">2. Definitions</H2>
                    <div className="space-y-4">
                        <UL>
                            <LI>
                                <strong>&ldquo;Customer Data&rdquo;</strong> means any data, content, or
                                information that you or your authorized users submit to or through the
                                Services, including employee records, documents, and configuration.
                            </LI>
                            <LI>
                                <strong>&ldquo;End User&rdquo;</strong> means any individual authorized by
                                you to access the Services, including your employees, contractors, and
                                administrators.
                            </LI>
                            <LI>
                                <strong>&ldquo;Order Form&rdquo;</strong> means an ordering document or
                                online subscription flow that specifies the Services you have purchased,
                                the subscription term, and the applicable fees.
                            </LI>
                            <LI>
                                <strong>&ldquo;Personal Data&rdquo;</strong> has the meaning given in our{" "}
                                <a
                                    href="/legal/privacy"
                                    className="font-semibold text-blue-600 hover:underline"
                                >
                                    Privacy Policy
                                </a>{" "}
                                and in applicable data protection laws.
                            </LI>
                        </UL>
                    </div>

                    {/* 3. Account registration */}
                    <H2 id="account">3. Account registration</H2>
                    <div className="space-y-4">
                        <P>
                            To use most features of the Services, you must create an account. You agree
                            to:
                        </P>
                        <UL>
                            <LI>Provide accurate, current, and complete information during registration.</LI>
                            <LI>Maintain and promptly update your account information.</LI>
                            <LI>
                                Keep your login credentials confidential and secure. You are responsible
                                for all activity that occurs under your account.
                            </LI>
                            <LI>
                                Notify us immediately at{" "}
                                <a
                                    href="mailto:security@peoplehub.com"
                                    className="font-semibold text-blue-600 hover:underline"
                                >
                                    security@peoplehub.com
                                </a>{" "}
                                if you suspect unauthorized access.
                            </LI>
                        </UL>
                        <P>
                            You must be at least 18 years old (or the age of legal majority in your
                            jurisdiction) to create an account.
                        </P>
                    </div>

                    {/* 4. Use of the service */}
                    <H2 id="use-of-service">4. Use of the service</H2>
                    <div className="space-y-4">
                        <H3>Permitted use</H3>
                        <P>
                            Subject to these Terms, we grant you a non-exclusive, non-transferable,
                            worldwide right to access and use the Services during your subscription term
                            for your internal business purposes.
                        </P>

                        <H3>Restrictions</H3>
                        <P>You agree not to:</P>
                        <UL>
                            <LI>
                                Reverse engineer, decompile, or attempt to derive the source code of the
                                Services, except to the extent permitted by law.
                            </LI>
                            <LI>
                                Resell, sublicense, or make the Services available to any third party
                                except as expressly permitted.
                            </LI>
                            <LI>
                                Use the Services to build a competing product or to conduct competitive
                                analysis without our written consent.
                            </LI>
                            <LI>
                                Interfere with or disrupt the integrity or performance of the Services.
                            </LI>
                            <LI>
                                Attempt to gain unauthorized access to the Services or their related
                                systems.
                            </LI>
                            <LI>
                                Upload or transmit malicious code, or use the Services to send spam or
                                unlawful communications.
                            </LI>
                            <LI>
                                Use the Services in violation of any applicable law, including data
                                protection and employment laws.
                            </LI>
                        </UL>

                        <H3>Your responsibilities</H3>
                        <P>
                            You are responsible for your End Users&apos; compliance with these Terms.
                            You agree to obtain any consents required to upload Personal Data about your
                            employees or candidates, and to maintain appropriate notices.
                        </P>
                    </div>

                    {/* 5. Subscriptions & billing */}
                    <H2 id="subscriptions">5. Subscriptions &amp; billing</H2>
                    <div className="space-y-4">
                        <H3>Fees and payment</H3>
                        <P>
                            You agree to pay all fees specified in your Order Form. Unless otherwise
                            stated, fees are billed in advance on a monthly or annual basis and are
                            non-refundable except as required by law or as expressly stated in these
                            Terms.
                        </P>

                        <H3>Automatic renewal</H3>
                        <P>
                            Subscriptions automatically renew at the end of each term unless you cancel
                            before the renewal date. We will notify you at least 30 days before
                            renewal. You can cancel anytime from your account settings.
                        </P>

                        <H3>Free trials</H3>
                        <P>
                            We may offer free trials. Trial periods are limited to one per customer. At
                            the end of a trial, your subscription will automatically convert to a paid
                            plan unless you cancel. No credit card is required during the trial period.
                        </P>

                        <H3>Price changes</H3>
                        <P>
                            We may change subscription prices with at least 30 days&apos; notice before
                            your next renewal. Price changes apply only at renewal and will never
                            retroactively affect your current term.
                        </P>

                        <H3>Taxes</H3>
                        <P>
                            Fees are exclusive of applicable taxes, which will be added to your invoice
                            where required by law. You are responsible for all sales, use, VAT, and
                            similar taxes.
                        </P>
                    </div>

                    <Callout tone="info" title="14-day refund guarantee">
                        If you are unsatisfied with the Services for any reason within 14 days of your
                        first paid subscription, contact us at{" "}
                        <a
                            href="mailto:billing@peoplehub.com"
                            className="font-semibold text-blue-600 hover:underline"
                        >
                            billing@peoplehub.com
                        </a>{" "}
                        and we will issue a full refund — no questions asked.
                    </Callout>

                    {/* 6. Customer data */}
                    <H2 id="customer-data">6. Customer data</H2>
                    <div className="space-y-4">
                        <H3>Ownership</H3>
                        <P>
                            You retain all rights, title, and interest in Customer Data. We do not
                            acquire any ownership of your data. You grant us a limited license to
                            process Customer Data solely to provide the Services and as described in
                            our{" "}
                            <a
                                href="/legal/privacy"
                                className="font-semibold text-blue-600 hover:underline"
                            >
                                Privacy Policy
                            </a>{" "}
                            and DPA.
                        </P>

                        <H3>Data protection</H3>
                        <P>
                            Where we process Personal Data on your behalf, we act as a data processor
                            and you act as a data controller. Our processing is governed by our Data
                            Processing Addendum, which is incorporated into these Terms by reference.
                        </P>

                        <H3>Aggregated data</H3>
                        <P>
                            We may collect and use aggregated, de-identified data derived from your use
                            of the Services to improve and develop our products. Such data will never
                            identify you, your employees, or your customers.
                        </P>

                        <H3>Data export</H3>
                        <P>
                            You can export Customer Data at any time during your subscription in standard
                            formats. After termination, we will make Customer Data available for export
                            for 30 days, after which it will be securely deleted.
                        </P>
                    </div>

                    {/* 7. Intellectual property */}
                    <H2 id="ip">7. Intellectual property</H2>
                    <div className="space-y-4">
                        <H3>Our IP</H3>
                        <P>
                            The Services, including all software, design, text, graphics, logos, and
                            documentation, are owned by PeopleHub or its licensors and are protected by
                            copyright, trademark, and other intellectual property laws. Except as
                            expressly granted in these Terms, no rights are transferred to you.
                        </P>

                        <H3>Feedback</H3>
                        <P>
                            If you submit feedback, suggestions, or ideas about the Services, you grant
                            us a perpetual, royalty-free license to use them to improve our products —
                            without obligation or compensation.
                        </P>

                        <H3>Trademarks</H3>
                        <P>
                            PeopleHub and the PeopleHub logo are trademarks of PeopleHub, Inc. You may
                            not use our trademarks without prior written permission, except as permitted
                            for referring to the Services accurately.
                        </P>
                    </div>

                    {/* 8. Third-party services */}
                    <H2 id="third-party">8. Third-party services</H2>
                    <div className="space-y-4">
                        <P>
                            The Services may integrate with third-party products and services (e.g.,
                            payroll providers, identity providers, communication tools). Your use of
                            those third-party services is governed by their own terms, and we are not
                            responsible for their performance or practices.
                        </P>
                        <P>
                            If a third-party service becomes unavailable or ceases to support our
                            integration, we may modify or remove the integration without liability.
                        </P>
                    </div>

                    {/* 9. Confidentiality */}
                    <H2 id="confidentiality">9. Confidentiality</H2>
                    <div className="space-y-4">
                        <P>
                            Each party agrees to protect the other&apos;s confidential information with
                            at least the same degree of care it uses to protect its own confidential
                            information — and never less than reasonable care.
                        </P>
                        <P>
                            Confidential information may be disclosed only to employees, contractors,
                            and advisors who need to know it and who are bound by confidentiality
                            obligations. This obligation survives termination of these Terms for a period
                            of five (5) years.
                        </P>
                    </div>

                    {/* 10. Warranties & disclaimers */}
                    <H2 id="warranties">10. Warranties &amp; disclaimers</H2>
                    <div className="space-y-4">
                        <H3>Our warranties</H3>
                        <P>
                            We warrant that: (a) the Services will materially conform to their
                            documentation; (b) we will provide the Services with reasonable skill and
                            care; and (c) we maintain industry-standard security certifications, as
                            described in our Security Overview.
                        </P>

                        <H3>Disclaimers</H3>
                        <P>
                            EXCEPT AS EXPRESSLY STATED, THE SERVICES ARE PROVIDED &ldquo;AS IS&rdquo; AND
                            &ldquo;AS AVAILABLE,&rdquo; WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS,
                            IMPLIED, OR STATUTORY. WE DISCLAIM ALL IMPLIED WARRANTIES OF MERCHANTABILITY,
                            FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                        </P>
                        <P>
                            We do not warrant that the Services will be uninterrupted or error-free, or
                            that they will meet your specific requirements.
                        </P>
                    </div>

                    <Callout tone="important" title="Not legal, tax, or HR advice">
                        PeopleHub is a software platform. It does not provide legal, tax, or employment
                        advice. You are responsible for your compliance obligations under applicable
                        employment, tax, and data protection laws in the jurisdictions where you
                        operate.
                    </Callout>

                    {/* 11. Limitation of liability */}
                    <H2 id="liability">11. Limitation of liability</H2>
                    <div className="space-y-4">
                        <H3>Exclusion of indirect damages</H3>
                        <P>
                            TO THE MAXIMUM EXTENT PERMITTED BY LAW, NEITHER PARTY WILL BE LIABLE FOR ANY
                            INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR FOR
                            LOST PROFITS, REVENUE, OR DATA — EVEN IF ADVISED OF THE POSSIBILITY OF SUCH
                            DAMAGES.
                        </P>

                        <H3>Liability cap</H3>
                        <P>
                            Each party&apos;s total aggregate liability under these Terms will not exceed
                            the total amount of fees paid or payable by you in the twelve (12) months
                            preceding the event giving rise to the claim.
                        </P>

                        <H3>Exceptions</H3>
                        <P>
                            Nothing in this section limits liability for: (a) gross negligence or
                            willful misconduct; (b) breach of confidentiality obligations; (c)
                            infringement of the other party&apos;s intellectual property; or (d)
                            obligations under our DPA.
                        </P>
                    </div>

                    {/* 12. Indemnification */}
                    <H2 id="indemnification">12. Indemnification</H2>
                    <div className="space-y-4">
                        <H3>By PeopleHub</H3>
                        <P>
                            We will defend you against any third-party claim alleging that the Services
                            infringe a patent, copyright, or trademark, and will pay damages finally
                            awarded. If such a claim arises, we may modify the Services, procure rights,
                            or terminate your subscription with a pro-rata refund.
                        </P>

                        <H3>By you</H3>
                        <P>
                            You will defend and indemnify us against any third-party claim arising from:
                            (a) your Customer Data; (b) your use of the Services in violation of these
                            Terms or applicable laws; or (c) your End Users&apos; use of the Services.
                        </P>
                    </div>

                    {/* 13. Term & termination */}
                    <H2 id="term-termination">13. Term &amp; termination</H2>
                    <div className="space-y-4">
                        <H3>Term</H3>
                        <P>
                            These Terms are effective from the date you first use the Services and
                            continue until your subscription terminates.
                        </P>

                        <H3>Termination for convenience</H3>
                        <P>
                            You may cancel your subscription at any time from your account settings. If
                            you cancel mid-term, your subscription remains active until the end of the
                            current billing period.
                        </P>

                        <H3>Termination for cause</H3>
                        <P>
                            Either party may terminate immediately if the other party materially breaches
                            these Terms and fails to cure the breach within 30 days of notice.
                        </P>

                        <H3>Effect of termination</H3>
                        <P>
                            Upon termination: (a) your access to the Services ends; (b) you may export
                            Customer Data for 30 days; and (c) we will delete Customer Data after that
                            period, subject to legal retention obligations.
                        </P>
                    </div>

                    <Callout tone="info" title="No surprise exits">
                        We don&apos;t lock you in. You can cancel anytime, export your data, and walk
                        away. No termination fees, no hostage data, no drama.
                    </Callout>

                    {/* 14. Governing law */}
                    <H2 id="governing-law">14. Governing law &amp; dispute resolution</H2>
                    <div className="space-y-4">
                        <P>
                            These Terms are governed by the laws of Portugal, without regard to its
                            conflict-of-law principles. For Enterprise customers with a signed MSA, the
                            governing law may be specified in that agreement.
                        </P>
                        <P>
                            Any dispute arising from these Terms will be resolved in the courts of
                            Lisbon, Portugal — except that either party may seek injunctive relief in any
                            court of competent jurisdiction to protect its intellectual property or
                            confidential information.
                        </P>
                        <P>
                            Before filing a formal dispute, both parties agree to attempt resolution
                            through good-faith negotiations for at least 30 days.
                        </P>
                    </div>

                    {/* 15. Changes to terms */}
                    <H2 id="changes">15. Changes to these Terms</H2>
                    <div className="space-y-4">
                        <P>
                            We may update these Terms from time to time. When we make material changes,
                            we will notify you by email and/or through a prominent notice in the
                            Services at least 30 days before the changes take effect.
                        </P>
                        <P>
                            Your continued use of the Services after changes take effect constitutes
                            acceptance of the updated Terms. If you do not agree to the changes, you may
                            terminate your subscription before the effective date.
                        </P>
                    </div>

                    {/* 16. Contact */}
                    <H2 id="contact">16. Contact us</H2>
                    <div className="space-y-4">
                        <P>
                            If you have questions about these Terms, please contact us:
                        </P>
                        <div className="mt-5 p-5 rounded-2xl border border-slate-200/90 bg-slate-50/60 space-y-3">
                            <div className="flex items-start gap-3">
                                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 w-20 shrink-0 mt-0.5">
                                    Legal
                                </span>
                                <a
                                    href="mailto:legal@peoplehub.com"
                                    className="text-sm font-semibold text-blue-600 hover:underline break-all"
                                >
                                    legal@peoplehub.com
                                </a>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 w-20 shrink-0 mt-0.5">
                                    Sales
                                </span>
                                <a
                                    href="mailto:sales@peoplehub.com"
                                    className="text-sm font-semibold text-blue-600 hover:underline break-all"
                                >
                                    sales@peoplehub.com
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
                            These Terms were last updated on April 22, 2025 and are effective as of May
                            1, 2025.
                        </p>
                    </div>
                </article>
            </div>
        </section>
    );
}