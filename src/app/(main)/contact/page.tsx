import type { Metadata } from "next";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactChannels from "@/components/contact/ContactChannels";
import OfficeLocations from "@/components/contact/OfficeLocations";
import SupportFaq from "@/components/contact/SupportFaq";
import ContactCta from "@/components/contact/ContactCta";

export const metadata: Metadata = {
    title: "Contact PeopleHub — Talk to sales, support, or press",
    description:
        "Get in touch with the PeopleHub team. Sales, support, and press inquiries answered within 4 business hours. Book a demo or start a free trial today.",
};

export default function ContactPage() {
    return (
        <main>
            <ContactHero />
            <ContactChannels />
            <ContactForm />
            <OfficeLocations />
            <SupportFaq />
            <ContactCta />
        </main>
    );
}