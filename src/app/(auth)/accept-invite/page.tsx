"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { apiFetch, ApiError } from "@/lib/api";
import LiquidGlassFilter from "@/components/ui/LiquidGlassFilter";
import AuthBackground from "@/components/auth/AuthBackground";
import AcceptInviteSummaryPanel from "@/components/auth/accept-invite/AcceptInviteSummaryPanel";
import AcceptInviteCard from "@/components/auth/accept-invite/AcceptInviteCard";
import AcceptInviteLoading from "@/components/auth/accept-invite/AcceptInviteLoading";
import AcceptInviteError from "@/components/auth/accept-invite/AcceptInviteError";
import AcceptInviteSuccess from "@/components/auth/accept-invite/AcceptInviteSuccess";

type Status = "loading" | "form" | "error" | "success";

function AcceptInviteContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const token = searchParams.get("token");

    const [status, setStatus] = useState<Status>("loading");
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!token) {
            setStatus("error");
            setError("Missing invite token.");
            return;
        }

        (async () => {
            try {
                const { user } = await apiFetch<{
                    user: { fullName: string; email: string };
                }>("/auth/invite/verify", {
                    method: "POST",
                    body: { token },
                });
                setUserName(user.fullName);
                setUserEmail(user.email);
                setStatus("form");
            } catch (err) {
                setStatus("error");
                setError(
                    err instanceof ApiError ? err.message : "Could not verify invite."
                );
            }
        })();
    }, [token]);

    return (
        <main className="relative min-h-svh w-full overflow-hidden">
            <LiquidGlassFilter />
            <AuthBackground />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                    {/* LEFT: Summary panel (desktop only) */}
                    <div className="hidden lg:block lg:col-span-6 animate-auth-rise">
                        <AcceptInviteSummaryPanel />
                    </div>

                    {/* RIGHT: State-driven card */}
                    <div className="lg:col-span-6 flex justify-center lg:justify-end">
                        {status === "loading" && <AcceptInviteLoading />}

                        {status === "error" && (
                            <AcceptInviteError message={error ?? "Something went wrong."} />
                        )}

                        {status === "success" && <AcceptInviteSuccess />}

                        {status === "form" && (
                            <AcceptInviteCard
                                token={token ?? ""}
                                userName={userName}
                                userEmail={userEmail}
                                onSuccess={(setupCompletedAt) => {
                                    setStatus("success");
                                    // Preserve the original redirect logic
                                    setTimeout(() => {
                                        if (!setupCompletedAt) {
                                            router.replace("/setup-workspace");
                                        } else {
                                            router.replace(
                                                `${process.env.NEXT_PUBLIC_ADMIN_URL}/`
                                            );
                                        }
                                    }, 1500);
                                }}
                                onError={(message) => setError(message)}
                            />
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}

export default function AcceptInvitePage() {
    return (
        <Suspense fallback={<AcceptInviteLoading fullScreen />}>
            <AcceptInviteContent />
        </Suspense>
    );
}