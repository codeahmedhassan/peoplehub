import type { Metadata } from "next";
import PricingSection from "@/components/pricing/PricingSection";
import ValueProps from "@/components/pricing/ValueProps";
import PlanGuidanceBanner from "@/components/pricing/PlanGuidanceBanner";
import ComparisonTable from "@/components/pricing/ComparisonTable";
import AddOns from "@/components/pricing/AddOns";
import GuaranteeBand from "@/components/pricing/GuaranteeBand";
import TestimonialStrip from "@/components/pricing/TestimonialStrip";
import PricingFaq from "@/components/pricing/PricingFaq";
import TrustBadges from "@/components/pricing/TrustBadges";
import BottomCta from "@/components/pricing/BottomCta";

export const metadata: Metadata = {
    title: "PeopleHub — Simple, transparent pricing for every team",
    description:
        "Choose the plan that fits your business. Start free, upgrade anytime. No hidden fees, 14-day free trial, cancel anytime.",
};

export default function PricingPage() {
    return (
        <main>
            {/* 1. Hero + billing toggle + 4 pricing cards */}
            <PricingSection />

            {/* 2. Quick value props — 4 reasons */}
            <ValueProps />

            {/* 3. "Not sure? Let us help" banner */}
            <PlanGuidanceBanner />

            {/* 4. Detailed feature comparison matrix */}
            <ComparisonTable />

            {/* 5. Optional paid add-ons */}
            <AddOns />

            {/* 6. 30-day guarantee band */}
            <GuaranteeBand />

            {/* 7. Social proof — one strong testimonial */}
            <TestimonialStrip />

            {/* 8. FAQ */}
            <PricingFaq />

            {/* 9. Security & compliance badges */}
            <TrustBadges />

            {/* 10. Final conversion CTA */}
            <BottomCta />
        </main>
    );
}