import type { Metadata } from "next";
import FeaturesHero from "@/components/features/FeaturesHero";
import FeatureTabs from "@/components/features/FeatureTabs";
import FeatureModules from "@/components/features/FeatureModules";
import WorkflowSection from "@/components/features/WorkflowSection";
import IntegrationsGrid from "@/components/features/IntegrationsGrid";
import SecuritySection from "@/components/features/SecuritySection";
import FeatureComparison from "@/components/features/FeatureComparison";
import FeaturesTestimonials from "@/components/features/FeaturesTestimonials";
import FeaturesCta from "@/components/features/FeaturesCta";

export const metadata: Metadata = {
    title: "PeopleHub — Everything you need to run modern HR",
    description:
        "From employee records to payroll, recruitment, performance, and analytics — PeopleHub brings every HR process into one clean, powerful platform.",
};

export default function FeaturesPage() {
    return (
        <main>
            <FeaturesHero />
            <FeatureTabs />
            <FeatureModules />
            <WorkflowSection />
            <IntegrationsGrid />
            <SecuritySection />
            <FeatureComparison />
            <FeaturesTestimonials />
            <FeaturesCta />
        </main>
    );
}