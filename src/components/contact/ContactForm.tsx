"use client";

import { useState } from "react";
import {
    CONTACT_TOPICS,
    CONTACT_COMPANY_SIZES,
    CONTACT_FORM_TRUST,
} from "@/lib/constants";

type FormState = "idle" | "submitting" | "success" | "error";

function ArrowRight() {
    return (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
        </svg>
    );
}

function CheckCircle() {
    return (
        <svg
            className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
        >
            <path
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
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

export default function ContactForm() {
    const [state, setState] = useState<FormState>("idle");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setState("submitting");

        // Simulated submission — replace with a real fetch to your API / form endpoint.
        const formData = new FormData(e.currentTarget);
        const payload = Object.fromEntries(formData.entries());
        console.log("Contact form submission:", payload);

        try {
            await new Promise((res) => setTimeout(res, 900));
            setState("success");
        } catch {
            setState("error");
        }
    }

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-24">
            <div className="rounded-3xl border border-slate-100 bg-white overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-12">
                    {/* Left: supporting content (renders above form on mobile) */}
                    <aside className="lg:col-span-5 relative bg-linear-to-br from-blue-50/70 via-white to-indigo-50/50 p-6 sm:p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-slate-100">
                        {/* Subtle decorative blob */}
                        <div
                            aria-hidden="true"
                            className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-blue-200/30 blur-3xl pointer-events-none"
                        />

                        <div className="relative">
                            <div className="inline-flex items-center px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wide bg-white text-blue-600 border border-blue-100 mb-5">
                                Send us a message
                            </div>

                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                                Tell us a bit about
                                <br className="hidden sm:block" />{" "}
                                <span className="text-blue-600">what you need.</span>
                            </h2>

                            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                                Fill in the form and a real person on our team will get back to you —
                                usually within a few hours.
                            </p>

                            {/* Trust list */}
                            <ul className="mt-7 space-y-3">
                                {CONTACT_FORM_TRUST.map((item) => (
                                    <li
                                        key={item}
                                        className="flex items-start gap-2.5 text-sm text-slate-700"
                                    >
                                        <CheckCircle />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Decorative handwritten note — desktop only */}
                            <div className="hidden lg:block mt-10 relative text-blue-600 font-handwriting text-xl leading-tight -rotate-3">
                                We read
                                <br />
                                every message
                                <svg
                                    className="mt-2 w-12 h-10 text-blue-500"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    viewBox="0 0 60 40"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M10,5 C30,5 45,25 25,35 M25,35 L35,32 M25,35 L28,24"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                        </div>
                    </aside>

                    {/* Right: form */}
                    <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10">
                        {state === "success" ? (
                            <div className="flex flex-col items-center justify-center text-center py-8 sm:py-12 min-h-75 sm:min-h-100">
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
                                    Message sent.
                                </h3>
                                <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-sm">
                                    Thanks for reaching out. We&apos;ll be in touch within 4 business hours
                                    — keep an eye on your inbox.
                                </p>
                                <button
                                    type="button"
                                    onClick={() => setState("idle")}
                                    className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-200 text-slate-700 text-sm font-semibold hover:bg-slate-50 transition-colors"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5" noValidate={false}>
                                {/* Row 1: Name + Email */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                                    <div>
                                        <label
                                            htmlFor="fullName"
                                            className="block text-xs sm:text-sm font-semibold text-slate-700 mb-2"
                                        >
                                            Full name
                                        </label>
                                        <input
                                            id="fullName"
                                            name="fullName"
                                            type="text"
                                            required
                                            autoComplete="name"
                                            placeholder="Jane Cooper"
                                            className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-white text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="workEmail"
                                            className="block text-xs sm:text-sm font-semibold text-slate-700 mb-2"
                                        >
                                            Work email
                                        </label>
                                        <input
                                            id="workEmail"
                                            name="workEmail"
                                            type="email"
                                            required
                                            autoComplete="email"
                                            placeholder="jane@company.com"
                                            className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-white text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
                                        />
                                    </div>
                                </div>

                                {/* Row 2: Company + Size */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                                    <div>
                                        <label
                                            htmlFor="company"
                                            className="block text-xs sm:text-sm font-semibold text-slate-700 mb-2"
                                        >
                                            Company
                                        </label>
                                        <input
                                            id="company"
                                            name="company"
                                            type="text"
                                            required
                                            autoComplete="organization"
                                            placeholder="Acme Inc."
                                            className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-white text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="companySize"
                                            className="block text-xs sm:text-sm font-semibold text-slate-700 mb-2"
                                        >
                                            Company size
                                        </label>
                                        <select
                                            id="companySize"
                                            name="companySize"
                                            required
                                            defaultValue=""
                                            className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-white text-sm text-slate-900 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%2394a3b8%22 stroke-width=%222%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22><polyline points=%226 9 12 15 18 9%22/></svg>')] bg-size-[16px_16px] bg-position-[right_1rem_center] bg-no-repeat"
                                        >
                                            <option value="" disabled>
                                                Select a size
                                            </option>
                                            {CONTACT_COMPANY_SIZES.map((size) => (
                                                <option key={size} value={size}>
                                                    {size}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                {/* Topic */}
                                <div>
                                    <label
                                        htmlFor="topic"
                                        className="block text-xs sm:text-sm font-semibold text-slate-700 mb-2"
                                    >
                                        What can we help with?
                                    </label>
                                    <select
                                        id="topic"
                                        name="topic"
                                        required
                                        defaultValue=""
                                        className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-white text-sm text-slate-900 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%2394a3b8%22 stroke-width=%222%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22><polyline points=%226 9 12 15 18 9%22/></svg>')] bg-size-[16px_16px] bg-position-[right_1rem_center] bg-no-repeat"
                                    >
                                        <option value="" disabled>
                                            Select a topic
                                        </option>
                                        {CONTACT_TOPICS.map((topic) => (
                                            <option key={topic} value={topic}>
                                                {topic}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Message */}
                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-xs sm:text-sm font-semibold text-slate-700 mb-2"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={5}
                                        placeholder="Tell us a little about what you're looking for…"
                                        className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-white text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all resize-none"
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
                                    <span className="text-[12px] sm:text-xs text-slate-500 leading-relaxed">
                                        I agree to be contacted about my inquiry. I&apos;ve read and agree to
                                        the{" "}
                                        <a href="#privacy" className="font-semibold text-blue-600 hover:underline">
                                            Privacy Policy
                                        </a>
                                        .
                                    </span>
                                </label>

                                {/* Error */}
                                {state === "error" && (
                                    <div className="p-3 rounded-2xl bg-rose-50 border border-rose-100 text-xs sm:text-sm text-rose-600">
                                        Something went wrong. Please try again or email us directly at
                                        sales@peoplehub.com.
                                    </div>
                                )}

                                {/* Submit */}
                                <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-3 sm:justify-between">
                                    <p className="text-[11px] sm:text-xs text-slate-400 order-2 sm:order-1">
                                        We typically respond within 4 business hours.
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
                                                <span>Send message</span>
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