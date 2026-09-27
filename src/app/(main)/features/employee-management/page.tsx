import type { Metadata } from "next";
import EmployeeHero from "@/components/features/employee-management/EmployeeHero";
import EmployeeStatsBar from "@/components/features/employee-management/EmployeeStatsBar";
import EmployeeCapabilities from "@/components/features/employee-management/EmployeeCapabilities";
import EmployeeDeepDive from "@/components/features/employee-management/EmployeeDeepDive";
import EmployeeDashboardPreview from "@/components/features/employee-management/EmployeeDashboardPreview";
import EmployeeWorkflows from "@/components/features/employee-management/EmployeeWorkflows";
import EmployeeSecurity from "@/components/features/employee-management/EmployeeSecurity";
import EmployeeIntegrations from "@/components/features/employee-management/EmployeeIntegrations";
import EmployeeTestimonials from "@/components/features/employee-management/EmployeeTestimonials";
import EmployeeFaq from "@/components/features/employee-management/EmployeeFaq";
import RelatedFeatures from "@/components/features/employee-management/RelatedFeatures";
import EmployeeCta from "@/components/features/employee-management/EmployeeCta";

export const metadata: Metadata = {
    title: "Employee Management — PeopleHub",
    description:
        "A single source of truth for every employee. Rich profiles, live org charts, documents, custom fields, and audit-ready history — all in one platform.",
};

export default function EmployeeManagementPage() {
    return (
        <main>
            <EmployeeHero />
            <EmployeeStatsBar />
            <EmployeeCapabilities />
            <EmployeeDeepDive />
            <EmployeeDashboardPreview />
            <EmployeeWorkflows />
            <EmployeeSecurity />
            <EmployeeIntegrations />
            <EmployeeTestimonials />
            <EmployeeFaq />
            <RelatedFeatures />
            <EmployeeCta />
        </main>
    );
}