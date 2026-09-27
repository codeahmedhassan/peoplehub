import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Caveat } from "next/font/google";
import Navbar from "@/components/layout/navbar";
import "./globals.css";
import ConditionalFooter from "@/components/layout/conditional-footer";
import CookieConsent from "@/components/consent/CookieConsent";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PeopleHub - A simpler way to manage your people",
  description:
    "From hiring to payroll, PeopleHub helps modern companies streamline HR, automate everyday work, and focus on what really matters — their people.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${caveat.variable} scroll-smooth`}
      style={{ colorScheme: "light" }}
    >
      <body className="bg-white text-slate-800 font-sans antialiased overflow-x-hidden selection:bg-blue-100 selection:text-blue-700">
        <Navbar />
        {children}
        <ConditionalFooter />
        <CookieConsent />
      </body>
    </html>
  );
}