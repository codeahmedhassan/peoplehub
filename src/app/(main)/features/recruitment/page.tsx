import type { Metadata } from "next";
import RecruitmentHero from "@/components/features/recruitment/RecruitmentHero";
import RecruitmentStatsBar from "@/components/features/recruitment/RecruitmentStatsBar";
import RecruitmentCapabilities from "@/components/features/recruitment/RecruitmentCapabilities";
import RecruitmentDeepDive from "@/components/features/recruitment/RecruitmentDeepDive";
import RecruitmentPipelinePreview from "@/components/features/recruitment/RecruitmentPipelinePreview";
import RecruitmentJobBoard from "@/components/features/recruitment/RecruitmentJobBoard";
import RecruitmentAutomations from "@/components/features/recruitment/RecruitmentAutomations";
import RecruitmentCompliance from "@/components/features/recruitment/RecruitmentCompliance";
import RecruitmentIntegrations from "@/components/features/recruitment/RecruitmentIntegrations";
import RecruitmentTestimonials from "@/components/features/recruitment/RecruitmentTestimonials";
import RecruitmentFaq from "@/components/features/recruitment/RecruitmentFaq";
import RelatedFeatures from "@/components/features/recruitment/RelatedFeatures";
import RecruitmentCta from "@/components/features/recruitment/RecruitmentCta";

export const metadata: Metadata = {
    title: "Recruitment — PeopleHub",
    description:
        "Hire faster from job posting to signed offer. Branded careers page, kanban pipeline, structured interviews, and offer-to-onboarding automation — all in one platform.",
};

export default function RecruitmentPage() {
    return (
        <main>
            <RecruitmentHero />
            <RecruitmentStatsBar />
            <RecruitmentCapabilities />
            <RecruitmentDeepDive />
            <RecruitmentPipelinePreview />
            <RecruitmentJobBoard />
            <RecruitmentAutomations />
            <RecruitmentCompliance />
            <RecruitmentIntegrations />
            <RecruitmentTestimonials />
            <RecruitmentFaq />
            <RelatedFeatures />
            <RecruitmentCta />
        </main>
    );
}