import type { Metadata } from "next";
import PayrollHero from "@/components/features/payroll/PayrollHero";
import PayrollStatsBar from "@/components/features/payroll/PayrollStatsBar";
import PayrollCapabilities from "@/components/features/payroll/PayrollCapabilities";
import PayrollDeepDive from "@/components/features/payroll/PayrollDeepDive";
import PayrollRunPreview from "@/components/features/payroll/PayrollRunPreview";
import PayrollCompliance from "@/components/features/payroll/PayrollCompliance";
import PayrollGlobal from "@/components/features/payroll/PayrollGlobal";
import PayrollIntegrations from "@/components/features/payroll/PayrollIntegrations";
import PayrollTestimonials from "@/components/features/payroll/PayrollTestimonials";
import PayrollFaq from "@/components/features/payroll/PayrollFaq";
import RelatedFeatures from "@/components/features/payroll/RelatedFeatures";
import PayrollCta from "@/components/features/payroll/PayrollCta";

export const metadata: Metadata = {
    title: "Payroll — PeopleHub",
    description:
        "Automated payroll in 40+ countries. Calculate, comply, and pay in minutes — with tax filings, multi-currency payouts, and year-end forms handled end to end.",
};

export default function PayrollPage() {
    return (
        <main>
            <PayrollHero />
            <PayrollStatsBar />
            <PayrollCapabilities />
            <PayrollDeepDive />
            <PayrollRunPreview />
            <PayrollCompliance />
            <PayrollGlobal />
            <PayrollIntegrations />
            <PayrollTestimonials />
            <PayrollFaq />
            <RelatedFeatures />
            <PayrollCta />
        </main>
    );
}