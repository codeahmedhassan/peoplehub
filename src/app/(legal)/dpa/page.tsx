import type { Metadata } from "next";
import DpaHero from "@/components/legal/DpaHero";
import { LegalTocMobile } from "@/components/legal/LegalToc";
import DpaContent from "@/components/legal/DpaContent";
import DpaAnnexes from "@/components/legal/DpaAnnexes";
import DpaRequestForm from "@/components/legal/DpaRequestForm";
import DpaContact from "@/components/legal/DpaContact";
import { DPA_SECTIONS } from "@/lib/constants";

export const metadata: Metadata = {
    title: "Data Processing Agreement (DPA) — PeopleHub",
    description:
        "PeopleHub's Data Processing Agreement for GDPR, UK GDPR, Swiss FADP, and CCPA/CPRA compliance. Download, countersign, and manage sub-processors.",
};

export default function DpaPage() {
    return (
        <main>
            <DpaHero />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:hidden pb-4">
                <LegalTocMobile sections={DPA_SECTIONS} />
            </div>

            <DpaContent />
            <DpaAnnexes />
            <DpaRequestForm />
            <DpaContact />
        </main>
    );
}