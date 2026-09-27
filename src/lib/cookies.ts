/**
 * Lightweight cookie helpers. No dependencies.
 * Consent cookies are readable by both client and server, which makes
 * them ideal for a policy that may need to gate SSR or analytics loading.
 */

export const COOKIE_CONSENT_KEY = "peoplehub_cookie_consent";
export const COOKIE_CONSENT_VERSION = "1"; // bump this when policy changes

export type ConsentState = {
    version: string;
    /** Timestamp (ms) of when consent was recorded. */
    timestamp: number;
    essential: true; // always true — essential cookies don't require consent
    analytics: boolean;
    marketing: boolean;
};

export const DEFAULT_CONSENT: ConsentState = {
    version: COOKIE_CONSENT_VERSION,
    timestamp: 0,
    essential: true,
    analytics: false,
    marketing: false,
};

export const ACCEPT_ALL_CONSENT: Omit<ConsentState, "timestamp"> = {
    version: COOKIE_CONSENT_VERSION,
    essential: true,
    analytics: true,
    marketing: true,
};

export const ESSENTIAL_ONLY_CONSENT: Omit<ConsentState, "timestamp"> = {
    version: COOKIE_CONSENT_VERSION,
    essential: true,
    analytics: false,
    marketing: false,
};

/** Read the consent cookie. Returns null if missing or invalid. */
export function getConsent(): ConsentState | null {
    if (typeof document === "undefined") return null;
    const raw = document.cookie
        .split("; ")
        .find((row) => row.startsWith(`${COOKIE_CONSENT_KEY}=`));

    if (!raw) return null;

    try {
        const value = decodeURIComponent(raw.split("=").slice(1).join("="));
        const parsed = JSON.parse(value) as ConsentState;

        // Reject stale versions — re-prompt when the policy changes
        if (parsed.version !== COOKIE_CONSENT_VERSION) return null;
        if (typeof parsed.essential !== "boolean") return null;

        return parsed;
    } catch {
        return null;
    }
}

/** Write the consent cookie for one year. */
export function setConsent(consent: Omit<ConsentState, "timestamp">): ConsentState {
    const full: ConsentState = { ...consent, timestamp: Date.now() };
    const oneYear = 60 * 60 * 24 * 365;
    const value = encodeURIComponent(JSON.stringify(full));

    document.cookie = `${COOKIE_CONSENT_KEY}=${value}; Max-Age=${oneYear}; Path=/; SameSite=Lax${location.protocol === "https:" ? "; Secure" : ""
        }`;

    return full;
}

/** Clear the consent cookie (used by "Reset preferences" in the policy page). */
export function clearConsent(): void {
    document.cookie = `${COOKIE_CONSENT_KEY}=; Max-Age=0; Path=/; SameSite=Lax`;
}