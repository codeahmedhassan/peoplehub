import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import StorySection from "@/components/about/StorySection";
import MissionValues from "@/components/about/MissionValues";
import TimelineSection from "@/components/about/TimelineSection";
import StatsSection from "@/components/about/StatsSection";
import TeamSection from "@/components/about/TeamSection";
import CultureSection from "@/components/about/CultureSection";
import InvestorsSection from "@/components/about/InvestorsSection";
import CareersCta from "@/components/about/CareersCta";
import AboutCta from "@/components/about/AboutCta";

export const metadata: Metadata = {
    title: "About PeopleHub — Building the future of people operations",
    description:
        "We're on a mission to make HR simple, human, and reliable for every team. Learn about our story, our values, and the people behind PeopleHub.",
};

export default function AboutPage() {
    return (
        <main>
            <AboutHero />
            <StorySection />
            <MissionValues />
            <TimelineSection />
            <StatsSection />
            <TeamSection />
            <CultureSection />
            <InvestorsSection />
            <CareersCta />
            <AboutCta />
        </main>
    );
}