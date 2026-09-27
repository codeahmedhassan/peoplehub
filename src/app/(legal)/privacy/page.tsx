import type { Metadata } from "next";
import LegalHero from "@/components/legal/LegalHero";
import { LegalTocMobile } from "@/components/legal/LegalToc";
import LegalContent from "@/components/legal/LegalContent";
import LegalContact from "@/components/legal/LegalContact";
import { PRIVACY_SECTIONS } from "@/lib/constants";

export const metadata: Metadata = {
    title: "Privacy Policy — PeopleHub",
    description:
        "How PeopleHub collects, uses, and protects your personal data. GDPR and CCPA aligned. Full transparency — no data selling, ever.",
};

export default function PrivacyPage() {
    return (
        <main>
            <LegalHero
                badge="Legal"
                title="Privacy Policy"
                subtitle="How we collect, use, and protect your personal information. Plain language, no surprises."
                lastUpdated="April 22, 2025"
                effectiveDate="May 1, 2025"
            />

            {/* Mobile TOC — sits above the article on small screens */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:hidden pb-4">
                <LegalTocMobile sections={PRIVACY_SECTIONS} />
            </div>

            <LegalContent />
            <LegalContact />
        </main>
    );
}