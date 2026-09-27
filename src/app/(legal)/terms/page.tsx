import type { Metadata } from "next";
import LegalHero from "@/components/legal/LegalHero";
import { LegalTocMobile } from "@/components/legal/LegalToc";
import TermsContent from "@/components/legal/TermsContent";
import TermsContact from "@/components/legal/TermsContact";
import { TERMS_SECTIONS } from "@/lib/constants";

export const metadata: Metadata = {
    title: "Terms of Service — PeopleHub",
    description:
        "The terms that govern your use of PeopleHub. Written in plain language, with fair terms on billing, data, liability, and termination.",
};

export default function TermsPage() {
    return (
        <main>
            <LegalHero
                badge="Legal"
                title="Terms of Service"
                subtitle="The rules of the road for using PeopleHub. Written to be read — not to hide things."
                lastUpdated="April 22, 2025"
                effectiveDate="May 1, 2025"
            />

            {/* Mobile TOC */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:hidden pb-4">
                <LegalTocMobile sections={TERMS_SECTIONS} />
            </div>

            <TermsContent />
            <TermsContact />
        </main>
    );
}