import { LegalTocDesktop } from "./LegalToc";
import {
    COOKIES_SECTIONS,
    COOKIE_CATEGORIES,
    type CookieCategory,
} from "@/lib/constants";
import CookiePreferencesWidget from "@/components/consent/CookiePreferencesWidget";

/* ---------- Prose primitives (self-contained) ---------- */

function P({ children }: { children: React.ReactNode }) {
    return (
        <p className="text-sm sm:text-base text-slate-600 leading-[1.75]">{children}</p>
    );
}

function H2({ id, children }: { id: string; children: React.ReactNode }) {
    return (
        <h2
            id={id}
            className="scroll-mt-28 text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mt-10 sm:mt-12 mb-4"
        >
            {children}
        </h2>
    );
}

function UL({ children }: { children: React.ReactNode }) {
    return (
        <ul className="mt-3 space-y-2 text-sm sm:text-base text-slate-600 leading-[1.75]">
            {children}
        </ul>
    );
}

function LI({ children }: { children: React.ReactNode }) {
    return (
        <li className="flex items-start gap-3">
            <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-2.5" />
            <span>{children}</span>
        </li>
    );
}

function Callout({
    tone,
    title,
    children,
}: {
    tone: "info" | "important";
    title: string;
    children: React.ReactNode;
}) {
    const styles =
        tone === "info"
            ? "bg-blue-50/70 border-blue-100 text-blue-900"
            : "bg-amber-50/70 border-amber-100 text-amber-900";
    const iconColor = tone === "info" ? "text-blue-600" : "text-amber-600";

    return (
        <div className={`my-6 p-4 sm:p-5 rounded-2xl border ${styles}`}>
            <div className="flex items-start gap-3">
                <svg
                    className={`w-5 h-5 shrink-0 mt-0.5 ${iconColor}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                >
                    {tone === "info" ? (
                        <path
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                        />
                    ) : (
                        <path
                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                        />
                    )}
                </svg>
                <div className="min-w-0">
                    <p className="text-sm font-bold mb-1">{title}</p>
                    <div className="text-xs sm:text-sm leading-relaxed opacity-90">{children}</div>
                </div>
            </div>
        </div>
    );
}

/* ---------- Category card (used inside the "Categories" section) ---------- */

const accentStyles: Record<
    CookieCategory["accent"],
    { bg: string; text: string; border: string; dot: string }
> = {
    blue: {
        bg: "bg-blue-100/70",
        text: "text-blue-600",
        border: "border-blue-100",
        dot: "bg-blue-500",
    },
    emerald: {
        bg: "bg-emerald-100/70",
        text: "text-emerald-600",
        border: "border-emerald-100",
        dot: "bg-emerald-500",
    },
    amber: {
        bg: "bg-amber-100/70",
        text: "text-amber-600",
        border: "border-amber-100",
        dot: "bg-amber-500",
    },
};

function CategoryCard({ category }: { category: CookieCategory }) {
    const s = accentStyles[category.accent];
    return (
        <div className={`p-5 rounded-2xl border ${s.border} bg-white`}>
            <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-2.5">
                    <span className={`w-2 h-2 rounded-full ${s.dot}`} />
                    <h3 className="text-sm font-bold text-slate-900">{category.title}</h3>
                </div>
                <span
                    className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold ${s.bg} ${s.text}`}
                >
                    {category.required ? "Always on" : "Optional"}
                </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {category.description}
            </p>
            <p className="mt-3 text-[11px] text-slate-400 font-mono break-all">
                Examples: {category.examples}
            </p>
        </div>
    );
}

/* ---------- Main component ---------- */

export default function CookiesContent() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
                <div className="lg:col-span-3">
                    <LegalTocDesktop sections={COOKIES_SECTIONS} />
                </div>

                <article className="lg:col-span-9 max-w-3xl">
                    {/* 1. Introduction */}
                    <H2 id="introduction">1. Introduction</H2>
                    <div className="space-y-4">
                        <P>
                            This Cookie Policy explains how PeopleHub, Inc. (&ldquo;PeopleHub,&rdquo;
                            &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) uses cookies and
                            similar technologies (such as pixels, tags, and local storage) on our
                            website, applications, and services (collectively, the
                            &ldquo;Services&rdquo;).
                        </P>
                        <P>
                            It should be read alongside our{" "}
                            <a
                                href="/legal/privacy"
                                className="font-semibold text-blue-600 hover:underline"
                            >
                                Privacy Policy
                            </a>
                            , which explains how we collect, use, and protect personal information more
                            broadly.
                        </P>
                    </div>

                    {/* 2. What are cookies */}
                    <H2 id="what-are-cookies">2. What are cookies?</H2>
                    <div className="space-y-4">
                        <P>
                            Cookies are small text files placed on your device when you visit a website.
                            They allow the site to remember your actions and preferences over time —
                            like keeping you logged in, remembering your language, or storing your
                            consent choice.
                        </P>
                        <P>
                            Similar technologies include:
                        </P>
                        <UL>
                            <LI>
                                <strong>Local storage</strong> and{" "}
                                <strong>session storage</strong> — browser storage mechanisms with similar
                                purposes to cookies.
                            </LI>
                            <LI>
                                <strong>Pixels and web beacons</strong> — tiny images embedded in pages or
                                emails that report when they&apos;re loaded.
                            </LI>
                            <LI>
                                <strong>Software development kits (SDKs)</strong> — used in our mobile apps
                                for the same purposes as cookies on the web.
                            </LI>
                        </UL>
                        <P>
                            In this policy, we refer to all of these collectively as
                            &ldquo;cookies.&rdquo;
                        </P>
                    </div>

                    {/* 3. How we use cookies */}
                    <H2 id="how-we-use">3. How we use cookies</H2>
                    <div className="space-y-4">
                        <P>We use cookies for three broad purposes:</P>
                        <UL>
                            <LI>
                                <strong>To operate the Services.</strong> Authentication, security, load
                                balancing, and remembering your preferences.
                            </LI>
                            <LI>
                                <strong>To improve the Services.</strong> Understanding how visitors use
                                the site so we can make it better.
                            </LI>
                            <LI>
                                <strong>To market our products.</strong> Measuring campaign effectiveness
                                and delivering relevant ads on third-party platforms — only with your
                                consent.
                            </LI>
                        </UL>
                        <P>
                            We never use cookies to sell your personal information, and we never set
                            marketing cookies without your explicit opt-in.
                        </P>
                    </div>

                    {/* 4. Categories */}
                    <H2 id="cookie-categories">4. Categories we use</H2>
                    <div className="space-y-4">
                        <P>
                            We group cookies into three categories based on their purpose and whether
                            they require your consent:
                        </P>

                        <div className="mt-6 space-y-3">
                            {COOKIE_CATEGORIES.map((category) => (
                                <CategoryCard key={category.id} category={category} />
                            ))}
                        </div>
                    </div>

                    {/* 5. Third-party cookies */}
                    <H2 id="third-party">5. Third-party cookies</H2>
                    <div className="space-y-4">
                        <P>
                            Some cookies on the Services are set by third parties — analytics providers,
                            advertising platforms, and integrated tools. These third parties have their
                            own privacy policies, which we encourage you to review.
                        </P>
                        <P>Categories of third parties we use include:</P>
                        <UL>
                            <LI>
                                <strong>Analytics providers</strong> — to help us understand usage patterns.
                            </LI>
                            <LI>
                                <strong>Marketing platforms</strong> — to deliver and measure advertising.
                            </LI>
                            <LI>
                                <strong>Payment processors</strong> — for fraud prevention and secure
                                transactions.
                            </LI>
                            <LI>
                                <strong>Customer support tools</strong> — for live chat and help desk.
                            </LI>
                        </UL>
                    </div>

                    {/* 6. Managing preferences */}
                    <H2 id="managing">6. Managing your preferences</H2>
                    <div className="space-y-4">
                        <P>
                            You can update your cookie preferences at any time using the widget below.
                            Your choice is remembered on this device and can be changed whenever you
                            like.
                        </P>

                        <CookiePreferencesWidget />

                        <P>
                            Note: essential cookies cannot be disabled, as they&apos;re required for the
                            Services to function securely.
                        </P>
                    </div>

                    {/* 7. Browser controls */}
                    <H2 id="browser-controls">7. Browser-level controls</H2>
                    <div className="space-y-4">
                        <P>
                            Most web browsers allow you to control cookies through their settings. You
                            can typically:
                        </P>
                        <UL>
                            <LI>View what cookies are stored and delete them individually.</LI>
                            <LI>Block third-party cookies.</LI>
                            <LI>Block cookies from specific sites.</LI>
                            <LI>Block all cookies from being set.</LI>
                            <LI>Delete all cookies when you close your browser.</LI>
                        </UL>
                        <P>
                            Instructions for the most common browsers:
                        </P>
                        <UL>
                            <LI>
                                <a
                                    href="https://support.google.com/chrome/answer/95647"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-semibold text-blue-600 hover:underline"
                                >
                                    Google Chrome
                                </a>
                            </LI>
                            <LI>
                                <a
                                    href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-semibold text-blue-600 hover:underline"
                                >
                                    Mozilla Firefox
                                </a>
                            </LI>
                            <LI>
                                <a
                                    href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-semibold text-blue-600 hover:underline"
                                >
                                    Apple Safari
                                </a>
                            </LI>
                            <LI>
                                <a
                                    href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-semibold text-blue-600 hover:underline"
                                >
                                    Microsoft Edge
                                </a>
                            </LI>
                        </UL>
                        <Callout tone="info" title="Disabling cookies may break things">
                            If you disable essential cookies, some parts of the Services — including the
                            ability to log in — will not work.
                        </Callout>
                    </div>

                    {/* 8. Do Not Track */}
                    <H2 id="do-not-track">8. Do Not Track</H2>
                    <div className="space-y-4">
                        <P>
                            Some browsers offer a &ldquo;Do Not Track&rdquo; (DNT) signal. Because there
                            is no industry consensus on how to interpret DNT, we don&apos;t currently
                            respond to it — but our cookie consent tool gives you granular control that
                            covers the same intent.
                        </P>
                        <P>
                            If you are a California resident, you can exercise your opt-out rights under
                            the CCPA/CPRA through the preferences widget above.
                        </P>
                    </div>

                    {/* 9. Changes */}
                    <H2 id="changes">9. Changes to this policy</H2>
                    <div className="space-y-4">
                        <P>
                            We may update this Cookie Policy from time to time. When we make material
                            changes — for example, adding new cookie categories — we will notify you and
                            request fresh consent through the cookie banner.
                        </P>
                        <P>
                            The &ldquo;last updated&rdquo; date at the top of this page reflects the most
                            recent version.
                        </P>
                    </div>

                    {/* 10. Contact */}
                    <H2 id="contact">10. Contact us</H2>
                    <div className="space-y-4">
                        <P>
                            If you have questions about our use of cookies, please contact us:
                        </P>
                        <div className="mt-5 p-5 rounded-2xl border border-slate-200/90 bg-slate-50/60 space-y-3">
                            <div className="flex items-start gap-3">
                                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 w-20 shrink-0 mt-0.5">
                                    Email
                                </span>
                                <a
                                    href="mailto:privacy@peoplehub.com"
                                    className="text-sm font-semibold text-blue-600 hover:underline break-all"
                                >
                                    privacy@peoplehub.com
                                </a>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 w-20 shrink-0 mt-0.5">
                                    Address
                                </span>
                                <span className="text-sm text-slate-700">
                                    Av. da Liberdade 110, 1250-146 Lisboa, Portugal
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 pt-8 border-t border-slate-100">
                        <p className="text-xs text-slate-400 italic">
                            This policy was last updated on April 22, 2025 and is effective as of May 1,
                            2025.
                        </p>
                    </div>
                </article>
            </div>
        </section>
    );
}