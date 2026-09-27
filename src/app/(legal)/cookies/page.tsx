import type { Metadata } from "next";
import LegalHero from "@/components/legal/LegalHero";
import { LegalTocMobile } from "@/components/legal/LegalToc";
import CookiesContent from "@/components/legal/CookiesContent";
import CookiesContact from "@/components/legal/CookiesContact";
import { COOKIES_SECTIONS } from "@/lib/constants";

export const metadata: Metadata = {
    title: "Cookie Policy — PeopleHub",
    description:
        "How PeopleHub uses cookies and similar technologies, what categories we use, and how you can manage your preferences at any time.",
};

export default function CookiesPage() {
    return (
        <main>
            <LegalHero
                badge="Legal"
                title="Cookie Policy"
                subtitle="How we use cookies — and how you stay in control of them."
                lastUpdated="April 22, 2025"
                effectiveDate="May 1, 2025"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:hidden pb-4">
                <LegalTocMobile sections={COOKIES_SECTIONS} />
            </div>

            <CookiesContent />
            <CookiesContact />
        </main>
    );
}