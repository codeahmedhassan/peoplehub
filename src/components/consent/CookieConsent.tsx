"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
    COOKIE_CATEGORIES,
    type CookieCategory,
} from "@/lib/constants";
import {
    ACCEPT_ALL_CONSENT,
    DEFAULT_CONSENT,
    ESSENTIAL_ONLY_CONSENT,
    getConsent,
    setConsent,
} from "@/lib/cookies";

/* ---------- Icon ---------- */

function CookieIcon() {
    return (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.6" />
            <circle cx="9" cy="9" r="1.2" fill="currentColor" />
            <circle cx="15" cy="10" r="1.2" fill="currentColor" />
            <circle cx="10" cy="15" r="1.2" fill="currentColor" />
            <circle cx="15" cy="15.5" r="1.2" fill="currentColor" />
        </svg>
    );
}

/* ---------- Toggle (inline, small) ---------- */

const accentTrack: Record<CookieCategory["accent"], string> = {
    blue: "bg-blue-600",
    emerald: "bg-emerald-600",
    amber: "bg-amber-600",
};

function Toggle({
    checked,
    disabled,
    onChange,
    accent,
}: {
    checked: boolean;
    disabled?: boolean;
    onChange?: (v: boolean) => void;
    accent: CookieCategory["accent"];
}) {
    return (
        <button
            type="button"
            role="switch"
            aria-checked={checked}
            disabled={disabled}
            onClick={() => onChange?.(!checked)}
            className={`relative inline-flex h-5 w-9 shrink-0 items-center rounded-full transition-colors ${checked ? accentTrack[accent] : "bg-slate-300"
                } ${disabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer"}`}
        >
            <span
                className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white shadow-sm transition-transform ${checked ? "translate-x-4.5" : "translate-x-1"
                    }`}
            />
        </button>
    );
}

/* ---------- Banner ---------- */

export default function CookieConsent() {
    const [visible, setVisible] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const [prefs, setPrefs] = useState({
        essential: true,
        analytics: false,
        marketing: false,
    });

    // Show only if no valid consent stored
    useEffect(() => {
        const existing = getConsent();
        if (!existing) {
            const t = setTimeout(() => setVisible(true), 400);
            return () => clearTimeout(t);
        }
    }, []);

    // Lock body scroll while the banner is visible
    useEffect(() => {
        if (!visible) return;
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = prev;
        };
    }, [visible]);

    function commit(consent: Omit<typeof DEFAULT_CONSENT, "timestamp">) {
        setConsent(consent);
        window.dispatchEvent(new CustomEvent("peoplehub:consent-changed"));
        setVisible(false);
    }

    function handleAcceptAll() {
        setPrefs({ essential: true, analytics: true, marketing: true });
        commit(ACCEPT_ALL_CONSENT);
    }

    function handleEssentialOnly() {
        setPrefs({ essential: true, analytics: false, marketing: false });
        commit(ESSENTIAL_ONLY_CONSENT);
    }

    function handleSaveCustom() {
        commit({
            version: DEFAULT_CONSENT.version,
            essential: true,
            analytics: prefs.analytics,
            marketing: prefs.marketing,
        });
    }

    if (!visible) return null;

    return (
        <>
            {/* ---------- Full-screen liquid-glass overlay ---------- */}
            <div
                aria-hidden="true"
                className="fixed inset-0 z-55 animate-cookie-fade"
            >
                {/* Layer 2 — soft white tint so the page reads "paused", not "blacked out" */}
                <div className="absolute inset-0 bg-black/55" />
                {/* Layer 3 — subtle radial vignette for depth */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,transparent_0%,transparent_50%,rgba(0,0,0,0.10)_100%)]" />
            </div>

            {/* ---------- Banner card ---------- */}
            <div
                role="dialog"
                aria-modal="true"
                aria-label="Cookie preferences"
                aria-live="polite"
                className="fixed inset-0 z-60 flex items-end sm:items-center justify-center p-3 sm:p-6 pointer-events-none"
            >
                <div className="w-full max-w-2xl animate-cookie-rise pointer-events-auto">
                    {/* Liquid-glass container */}
                    <div className="relative rounded-3xl overflow-hidden">
                        {/* Layer 2 — tint */}
                        <div
                            aria-hidden="true"
                            className="absolute inset-0 rounded-3xl bg-white"
                        />
                        {/* Layer 3 — content */}
                        <div
                            className="
                relative rounded-3xl
                border border-white/70
                ring-1 ring-slate-900/5
                shadow-[0_1px_1px_rgba(255,255,255,0.7)_inset,0_-1px_2px_rgba(15,23,42,0.06)_inset,0_30px_60px_-20px_rgba(15,23,42,0.25),0_4px_12px_-4px_rgba(15,23,42,0.12)]
                p-5 sm:p-6
              "
                        >
                            {/* Top specular glint */}
                            <span
                                aria-hidden="true"
                                className="pointer-events-none absolute inset-x-8 top-0 h-[1.5px] rounded-full bg-linear-to-r from-transparent via-white to-transparent opacity-95"
                            />

                            {/* Header */}
                            <div className="flex items-start gap-3 mb-4">
                                <div className="w-10 h-10 rounded-2xl bg-blue-100/70 text-blue-600 flex items-center justify-center shrink-0">
                                    <CookieIcon />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <p className="text-sm font-bold text-slate-900">
                                        We use cookies — but only what you allow
                                    </p>
                                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                                        Essential cookies keep the site working. Analytics and marketing
                                        cookies are optional and only set with your consent. Read our{" "}
                                        <Link
                                            href="/legal/cookies"
                                            className="font-semibold text-blue-600 hover:underline"
                                        >
                                            Cookie Policy
                                        </Link>
                                        .
                                    </p>
                                </div>
                            </div>

                            {/* Expanded preferences */}
                            {expanded && (
                                <div className="mb-4 space-y-2.5 animate-cookie-fade">
                                    {COOKIE_CATEGORIES.map((category) => {
                                        const checked =
                                            category.id === "essential"
                                                ? true
                                                : prefs[category.id as "analytics" | "marketing"];

                                        return (
                                            <div
                                                key={category.id}
                                                className="flex items-start gap-3 p-3 rounded-2xl bg-white/80 border border-white/90"
                                            >
                                                <div className="min-w-0 flex-1">
                                                    <div className="flex items-center gap-2">
                                                        <p className="text-xs font-bold text-slate-900">
                                                            {category.title}
                                                        </p>
                                                        {category.required && (
                                                            <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                                                                Always on
                                                            </span>
                                                        )}
                                                    </div>
                                                    <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                                                        {category.description}
                                                    </p>
                                                </div>
                                                <Toggle
                                                    checked={checked}
                                                    disabled={category.required}
                                                    accent={category.accent}
                                                    onChange={
                                                        category.required
                                                            ? undefined
                                                            : (v) =>
                                                                setPrefs((p) => ({
                                                                    ...p,
                                                                    [category.id]: v,
                                                                }))
                                                    }
                                                />
                                            </div>
                                        );
                                    })}
                                </div>
                            )}

                            {/* Actions */}
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2.5">
                                {expanded ? (
                                    <>
                                        <button
                                            type="button"
                                            onClick={() => setExpanded(false)}
                                            className="inline-flex items-center justify-center px-4 py-2.5 rounded-full text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors order-3 sm:order-1 sm:ml-auto cursor-pointer"
                                        >
                                            Back
                                        </button>
                                        <button
                                            type="button"
                                            onClick={handleEssentialOnly}
                                            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-white border border-slate-200 text-slate-800 text-xs sm:text-sm font-semibold hover:bg-slate-50 transition-colors order-1 sm:order-2 cursor-pointer"
                                        >
                                            Essential only
                                        </button>
                                        <button
                                            type="button"
                                            onClick={handleSaveCustom}
                                            className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full bg-slate-950 text-white text-xs sm:text-sm font-semibold hover:bg-slate-800 transition-all shadow-sm order-2 sm:order-3 cursor-pointer"
                                        >
                                            Save preferences
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <button
                                            type="button"
                                            onClick={() => setExpanded(true)}
                                            className="inline-flex items-center justify-center px-4 py-2.5 rounded-full text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors order-3 sm:order-1 sm:ml-auto cursor-pointer"
                                        >
                                            Customize
                                        </button>
                                        <button
                                            type="button"
                                            onClick={handleEssentialOnly}
                                            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-white border border-slate-200 text-slate-800 text-xs sm:text-sm font-semibold hover:bg-slate-50 transition-colors order-2 sm:order-2 cursor-pointer"
                                        >
                                            Essential only
                                        </button>
                                        <button
                                            type="button"
                                            onClick={handleAcceptAll}
                                            className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full bg-slate-950 text-white text-xs sm:text-sm font-semibold hover:bg-slate-800 transition-all shadow-sm order-1 sm:order-3 cursor-pointer"
                                        >
                                            Accept all
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}