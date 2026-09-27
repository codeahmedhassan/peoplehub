// src/components/layout/conditional-footer.tsx
"use client";

import { usePathname } from "next/navigation";
import Footer from "./footer";

const HIDDEN_ROUTES = [
    "/signin",
    "/signup",
    "/forgot-password",
    "/verify",
    "/verify-email",
    "/setup-workspace",
    "/reset-password",
];

export default function ConditionalFooter() {
    const pathname = usePathname();
    if (HIDDEN_ROUTES.some((r) => pathname.startsWith(r))) return null;
    return <Footer />;
}
