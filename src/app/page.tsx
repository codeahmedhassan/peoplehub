import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import ClientLogos from "@/components/home/ClientLogos";
import FeaturesSection from "@/components/home/FeaturesSection";
import StatsStrip from "@/components/home/StatsStrip";
import CallToActionBanner from "@/components/home/CallToActionBanner";
import HowItWorks from "@/components/home/HowItWorks";
import Pricing from "@/components/home/Pricing";
import Testimonials from "@/components/home/Testimonials";
import Faq from "@/components/home/Faq";
import FinalCta from "@/components/home/FinalCta";

export const metadata: Metadata = {
  title: "PeopleHub - A simpler way to manage your people",
  description:
    "A premium HR management platform. From hiring to payroll, PeopleHub helps modern companies streamline HR, automate everyday work, and focus on what really matters — their people.",
};

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ClientLogos />
      <FeaturesSection />
      <StatsStrip />
      <CallToActionBanner />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <Faq />
      <FinalCta />
    </main>
  );
}