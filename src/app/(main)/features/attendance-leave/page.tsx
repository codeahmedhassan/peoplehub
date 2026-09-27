import type { Metadata } from "next";
import AttendanceHero from "@/components/features/attendance-leave/AttendanceHero";
import AttendanceStatsBar from "@/components/features/attendance-leave/AttendanceStatsBar";
import AttendanceCapabilities from "@/components/features/attendance-leave/AttendanceCapabilities";
import AttendanceDeepDive from "@/components/features/attendance-leave/AttendanceDeepDive";
import AttendanceTimeClockPreview from "@/components/features/attendance-leave/AttendanceTimeClockPreview";
import AttendanceLeavePolicies from "@/components/features/attendance-leave/AttendanceLeavePolicies";
import AttendanceAutomations from "@/components/features/attendance-leave/AttendanceAutomations";
import AttendanceCompliance from "@/components/features/attendance-leave/AttendanceCompliance";
import AttendanceIntegrations from "@/components/features/attendance-leave/AttendanceIntegrations";
import AttendanceTestimonials from "@/components/features/attendance-leave/AttendanceTestimonials";
import AttendanceFaq from "@/components/features/attendance-leave/AttendanceFaq";
import RelatedFeatures from "@/components/features/attendance-leave/RelatedFeatures";
import AttendanceCta from "@/components/features/attendance-leave/AttendanceCta";

export const metadata: Metadata = {
    title: "Attendance & Leave Management — PeopleHub",
    description:
        "Track hours from web, mobile, kiosk, or hardware. Automate leave, overtime, and compliance. Feed accurate time straight into payroll — all in one platform.",
};

export default function AttendanceLeavePage() {
    return (
        <main>
            <AttendanceHero />
            <AttendanceStatsBar />
            <AttendanceCapabilities />
            <AttendanceDeepDive />
            <AttendanceTimeClockPreview />
            <AttendanceLeavePolicies />
            <AttendanceAutomations />
            <AttendanceCompliance />
            <AttendanceIntegrations />
            <AttendanceTestimonials />
            <AttendanceFaq />
            <RelatedFeatures />
            <AttendanceCta />
        </main>
    );
}