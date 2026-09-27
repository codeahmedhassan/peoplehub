"use client";

import { useEffect, useState } from "react";
import {
    COOKIE_CATEGORIES,
    type CookieCategory,
} from "@/lib/constants";
import {
    ACCEPT_ALL_CONSENT,
    DEFAULT_CONSENT,
    ESSENTIAL_ONLY_CONSENT,
    clearConsent,
    getConsent,
    setConsent,
} from "@/lib/cookies";

const accentStyles: Record<
    CookieCategory["accent"],
    { bg: string; text: string; border: string; trackOn: string }
> = {
    blue: {
        bg: "bg-blue-100/70",
        text: "text-blue-600",
        border: "border-blue-100",
        trackOn: "bg-blue-600",
    },
    emerald: {
        bg: "bg-emerald-100/70",
        text: "text-emerald-600",
        border: "border-emerald-100",
        trackOn: "bg-emerald-600",
    },
    amber: {
        bg: "bg-amber-100/70",
        text: "text-amber-600",
        border: "border-amber-100",
        trackOn: "bg-amber-600",
    },
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
    const s = accentStyles[accent];
    return (
        <button
            type="button"
            role="switch"
            aria-checked={checked}
            disabled={disabled}
            onClick={() => onChange?.(!checked)}
            className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors ${checked ? s.trackOn : "bg-slate-200"
                } ${disabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer"}`}
        >
            <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-sm transition-transform ${checked ? "translate-x-6" : "translate-x-1"
                    }`}
            />
        </button>
    );
}

export default function CookiePreferencesWidget() {
    const [prefs, setPrefs] = useState({
        essential: true,
        analytics: false,
        marketing: false,
    });
    const [saved, setSaved] = useState(false);
    const [mounted, setMounted] = useState(false);

    // Hydrate from cookie
    useEffect(() => {
        const existing = getConsent();
        if (existing) {
            setPrefs({
                essential: true,
                analytics: existing.analytics,
                marketing: existing.marketing,
            });
        }
        setMounted(true);
    }, []);

    function toggle(id: "analytics" | "marketing", value: boolean) {
        setPrefs((p) => ({ ...p, [id]: value }));
        setSaved(false);
    }

    function save() {
        setConsent({
            version: DEFAULT_CONSENT.version,
            essential: true,
            analytics: prefs.analytics,
            marketing: prefs.marketing,
        });
        setSaved(true);
        // Fire a custom event so any analytics loader can respond
        window.dispatchEvent(new CustomEvent("peoplehub:consent-changed"));
        setTimeout(() => setSaved(false), 3000);
    }

    function acceptAll() {
        setConsent(ACCEPT_ALL_CONSENT);
        setPrefs({ essential: true, analytics: true, marketing: true });
        setSaved(true);
        window.dispatchEvent(new CustomEvent("peoplehub:consent-changed"));
        setTimeout(() => setSaved(false), 3000);
    }

    function essentialOnly() {
        setConsent(ESSENTIAL_ONLY_CONSENT);
        setPrefs({ essential: true, analytics: false, marketing: false });
        setSaved(true);
        window.dispatchEvent(new CustomEvent("peoplehub:consent-changed"));
        setTimeout(() => setSaved(false), 3000);
    }

    function reset() {
        clearConsent();
        setPrefs({ essential: true, analytics: false, marketing: false });
        setSaved(false);
        window.dispatchEvent(new CustomEvent("peoplehub:consent-changed"));
    }

    return (
        <div className="my-6 p-5 sm:p-6 rounded-3xl border border-slate-200/90 bg-slate-50/60">
            <div className="flex items-center justify-between gap-3 mb-5">
                <div>
                    <p className="text-sm font-bold text-slate-900">Your cookie preferences</p>
                    <p className="text-xs text-slate-500 mt-0.5">
                        Update what we&apos;re allowed to store on this device.
                    </p>
                </div>
                {mounted && (
                    <button
                        type="button"
                        onClick={reset}
                        className="text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors"
                    >
                        Reset
                    </button>
                )}
            </div>

            <div className="space-y-3">
                {COOKIE_CATEGORIES.map((category) => {
                    const s = accentStyles[category.accent];
                    const checked =
                        category.id === "essential"
                            ? true
                            : prefs[category.id as "analytics" | "marketing"];

                    return (
                        <div
                            key={category.id}
                            className={`p-4 rounded-2xl border ${s.border} bg-white flex items-start gap-4`}
                        >
                            <div className="min-w-0 flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                    <p className="text-sm font-bold text-slate-900">{category.title}</p>
                                    <span
                                        className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold ${s.bg} ${s.text}`}
                                    >
                                        {category.required ? "Always on" : "Optional"}
                                    </span>
                                </div>
                                <p className="text-xs text-slate-500 leading-relaxed">
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
                                        : (v) => toggle(category.id as "analytics" | "marketing", v)
                                }
                            />
                        </div>
                    );
                })}
            </div>

            {/* Actions */}
            <div className="mt-5 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
                <button
                    type="button"
                    onClick={essentialOnly}
                    className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-white border border-slate-200 text-slate-800 text-sm font-semibold hover:bg-slate-100 transition-colors"
                >
                    Essential only
                </button>
                <button
                    type="button"
                    onClick={acceptAll}
                    className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-white border border-slate-200 text-slate-800 text-sm font-semibold hover:bg-slate-100 transition-colors"
                >
                    Accept all
                </button>
                <button
                    type="button"
                    onClick={save}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-slate-950 text-white text-sm font-semibold hover:bg-slate-800 transition-all shadow-sm sm:ml-auto"
                >
                    Save preferences
                </button>
            </div>

            {saved && (
                <p className="mt-3 text-xs text-emerald-600 font-semibold flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                            d="M5 13l4 4L19 7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                        />
                    </svg>
                    Preferences saved.
                </p>
            )}
        </div>
    );
}