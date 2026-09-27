import type { Metadata } from "next";
import Link from "next/link";
import LiquidGlassFilter from "@/components/ui/LiquidGlassFilter";
import NotFoundBackground from "@/components/errors/NotFoundBackground";
import NotFoundScene from "@/components/errors/NotFoundScene";
import NotFoundActions from "@/components/errors/NotFoundActions";
import { NOT_FOUND_QUICK_LINKS } from "@/lib/constants";

export const metadata: Metadata = {
    title: "Page not found — PeopleHub",
    description:
        "The page you're looking for doesn't exist. But don't worry — we've got a few suggestions.",
    robots: { index: false, follow: false },
};

export default function NotFound() {
    return (
        <main className="relative min-h-svh w-full overflow-hidden">
            <LiquidGlassFilter />
            <NotFoundBackground />

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24">
                <div className="flex flex-col items-center text-center">
                    {/* Pill */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wide bg-white/70 backdrop-blur-md border border-white/70 text-blue-600 mb-8 sm:mb-10">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                        Error 404
                    </div>

                    {/* 3D Scene */}
                    <NotFoundScene />

                    {/* Headline */}
                    <h1 className="mt-8 sm:mt-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-2xl">
                        This page took a wrong turn.
                    </h1>
                    <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed max-w-lg">
                        The link might be broken, the page may have moved, or it never existed
                        in the first place. Either way — let&apos;s get you back on track.
                    </p>

                    {/* Action card */}
                    <div className="mt-10 sm:mt-12 w-full max-w-3xl">
                        <NotFoundActions />
                    </div>

                    {/* Quick links */}
                    <div className="mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs sm:text-sm">
                        <span className="text-slate-400">Quick links:</span>
                        {NOT_FOUND_QUICK_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="font-semibold text-slate-700 hover:text-blue-600 transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}