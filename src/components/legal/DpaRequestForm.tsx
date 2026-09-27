"use client";

import { useState } from "react";

function ArrowRight() {
    return (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
        </svg>
    );
}

function CheckIcon() {
    return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
                d="M5 13l4 4L19 7"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
            />
        </svg>
    );
}

function Spinner() {
    return (
        <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeOpacity="0.25" strokeWidth="4" />
            <path
                d="M22 12a10 10 0 0 1-10 10"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
            />
        </svg>
    );
}

type FormState = "idle" | "submitting" | "success";

const inputClass =
    "w-full px-4 py-3 rounded-2xl border border-slate-200 bg-white text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all";

export default function DpaRequestForm() {
    const [state, setState] = useState<FormState>("idle");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setState("submitting");
        // Simulated — replace with your real DPA request pipeline.
        const payload = Object.fromEntries(new FormData(e.currentTarget).entries());
        console.log("DPA countersignature request:", payload);
        await new Promise((res) => setTimeout(res, 900));
        setState("success");
    }

    return (
        <section
            id="countersign"
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24"
        >
            <div className="rounded-3xl border border-slate-200/90 bg-white overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-12">
                    {/* Left: info panel */}
                    <aside className="lg:col-span-5 relative bg-linear-to-br from-blue-50/70 via-white to-indigo-50/50 p-6 sm:p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-slate-100">
                        <div
                            aria-hidden="true"
                            className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-blue-200/30 blur-3xl pointer-events-none"
                        />

                        <div className="relative">
                            <div className="inline-flex items-center px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wide bg-white text-blue-600 border border-blue-100 mb-5">
                                Countersignature
                            </div>

                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                                Need a signed DPA?
                                <br className="hidden sm:block" />{" "}
                                <span className="text-blue-600">We&apos;ve got you.</span>
                            </h2>

                            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                                Download the PDF, sign it, and send it back — or fill in the form and
                                we&apos;ll prepare a pre-filled copy for you. Our legal team countersigns
                                within 2 business days.
                            </p>

                            <ul className="mt-7 space-y-3">
                                {[
                                    "Pre-signed for GDPR, UK GDPR & Swiss FADP",
                                    "No cost — free for all customers",
                                    "Countersigned within 2 business days",
                                    "Custom terms supported on Enterprise",
                                ].map((item) => (
                                    <li
                                        key={item}
                                        className="flex items-start gap-2.5 text-sm text-slate-700"
                                    >
                                        <span className="text-emerald-500 shrink-0 mt-0.5">
                                            <CheckIcon />
                                        </span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-8 pt-6 border-t border-slate-200/70">
                                <p className="text-xs text-slate-500 leading-relaxed">
                                    Prefer to handle it yourself?{" "}
                                    <a
                                        href="/legal/peoplehub-dpa-v3.2.pdf"
                                        download
                                        className="font-semibold text-blue-600 hover:underline"
                                    >
                                        Download the PDF
                                    </a>{" "}
                                    and email it to{" "}
                                    <a
                                        href="mailto:dpa@peoplehub.com"
                                        className="font-semibold text-blue-600 hover:underline"
                                    >
                                        dpa@peoplehub.com
                                    </a>
                                    .
                                </p>
                            </div>
                        </div>
                    </aside>

                    {/* Right: form */}
                    <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10">
                        {state === "success" ? (
                            <div className="flex flex-col items-center justify-center text-center py-8 sm:py-12 min-h-85">
                                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5">
                                    <svg
                                        className="w-7 h-7 sm:w-8 sm:h-8"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path
                                            d="M5 13l4 4L19 7"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2.5}
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                                    Request received.
                                </h3>
                                <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-md">
                                    Our legal team will prepare your countersigned DPA and send it within
                                    2 business days. Check your inbox for a confirmation.
                                </p>
                                <button
                                    type="button"
                                    onClick={() => setState("idle")}
                                    className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-200 text-slate-700 text-sm font-semibold hover:bg-slate-50 transition-colors"
                                >
                                    Submit another request
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                {/* Company */}
                                <div>
                                    <label
                                        htmlFor="dpa-company"
                                        className="block text-xs sm:text-sm font-semibold text-slate-700 mb-2"
                                    >
                                        Company legal name
                                    </label>
                                    <input
                                        id="dpa-company"
                                        name="company"
                                        type="text"
                                        required
                                        placeholder="Acme, Inc."
                                        className={inputClass}
                                    />
                                </div>

                                {/* Signatory name + title */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label
                                            htmlFor="dpa-name"
                                            className="block text-xs sm:text-sm font-semibold text-slate-700 mb-2"
                                        >
                                            Signatory name
                                        </label>
                                        <input
                                            id="dpa-name"
                                            name="signatoryName"
                                            type="text"
                                            required
                                            placeholder="Jane Cooper"
                                            className={inputClass}
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="dpa-title"
                                            className="block text-xs sm:text-sm font-semibold text-slate-700 mb-2"
                                        >
                                            Title
                                        </label>
                                        <input
                                            id="dpa-title"
                                            name="signatoryTitle"
                                            type="text"
                                            required
                                            placeholder="Head of Legal"
                                            className={inputClass}
                                        />
                                    </div>
                                </div>

                                {/* Email + plan */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label
                                            htmlFor="dpa-email"
                                            className="block text-xs sm:text-sm font-semibold text-slate-700 mb-2"
                                        >
                                            Work email
                                        </label>
                                        <input
                                            id="dpa-email"
                                            name="email"
                                            type="email"
                                            required
                                            placeholder="legal@acme.com"
                                            className={inputClass}
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="dpa-plan"
                                            className="block text-xs sm:text-sm font-semibold text-slate-700 mb-2"
                                        >
                                            Plan
                                        </label>
                                        <select
                                            id="dpa-plan"
                                            name="plan"
                                            required
                                            defaultValue=""
                                            className={`${inputClass} appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%2394a3b8%22 stroke-width=%222%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22><polyline points=%226 9 12 15 18 9%22/></svg>')] bg-size-[16px_16px] bg-position-[right_1rem_center] bg-no-repeat`}
                                        >
                                            <option value="" disabled>
                                                Select a plan
                                            </option>
                                            <option value="starter">Starter</option>
                                            <option value="growth">Growth</option>
                                            <option value="business">Business</option>
                                            <option value="enterprise">Enterprise</option>
                                            <option value="trial">Free trial</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Special requirements */}
                                <div>
                                    <label
                                        htmlFor="dpa-notes"
                                        className="block text-xs sm:text-sm font-semibold text-slate-700 mb-2"
                                    >
                                        Special requirements{" "}
                                        <span className="font-normal text-slate-400">(optional)</span>
                                    </label>
                                    <textarea
                                        id="dpa-notes"
                                        name="notes"
                                        rows={4}
                                        placeholder="E.g., governing law, jurisdiction, custom security commitments…"
                                        className={`${inputClass} resize-none`}
                                    />
                                </div>

                                {/* Consent */}
                                <label className="flex items-start gap-3 cursor-pointer select-none">
                                    <input
                                        type="checkbox"
                                        name="consent"
                                        required
                                        className="mt-0.5 w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 focus:ring-offset-0"
                                    />
                                    <span className="text-[12px] text-slate-500 leading-relaxed">
                                        I confirm I&apos;m authorized to request a DPA on behalf of this
                                        company and agree to the{" "}
                                        <a
                                            href="/legal/privacy"
                                            className="font-semibold text-blue-600 hover:underline"
                                        >
                                            Privacy Policy
                                        </a>
                                        .
                                    </span>
                                </label>

                                {/* Submit */}
                                <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-3 sm:justify-between">
                                    <p className="text-[11px] sm:text-xs text-slate-400 order-2 sm:order-1">
                                        Response within 2 business days.
                                    </p>
                                    <button
                                        type="submit"
                                        disabled={state === "submitting"}
                                        className="order-1 sm:order-2 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-slate-950 text-white text-sm font-semibold hover:bg-slate-800 disabled:opacity-70 disabled:cursor-not-allowed transition-all shadow-md w-full sm:w-auto"
                                    >
                                        {state === "submitting" ? (
                                            <>
                                                <Spinner />
                                                <span>Sending…</span>
                                            </>
                                        ) : (
                                            <>
                                                <span>Request countersignature</span>
                                                <ArrowRight />
                                            </>
                                        )}
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}