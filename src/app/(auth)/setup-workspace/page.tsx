import type { Metadata } from "next";
import LiquidGlassFilter from "@/components/ui/LiquidGlassFilter";
import AuthBackground from "@/components/auth/AuthBackground";
import SetupWorkspaceShell from "@/components/auth/SetupWorkspaceShell";
import SetupSummaryPanel from "@/components/auth/SetupSummaryPanel";

export const metadata: Metadata = {
    title: "Set up your workspace — PeopleHub",
    description:
        "Tell us a bit about your company so we can tailor PeopleHub to your team. Four quick steps, less than two minutes.",
};

export default function SetupWorkspacePage() {
    return (
        <main className="relative min-h-svh w-full overflow-hidden">
            <LiquidGlassFilter />
            <AuthBackground />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-12 sm:pb-16 lg:pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                    {/* LEFT: Summary panel (desktop only) */}
                    <div className="hidden lg:block lg:col-span-5 lg:sticky lg:top-28">
                        <SetupSummaryPanel />
                    </div>

                    {/* RIGHT: Setup shell */}
                    <div className="lg:col-span-7 flex justify-center lg:justify-end">
                        <SetupWorkspaceShell />
                    </div>
                </div>
            </div>
        </main>
    );
}