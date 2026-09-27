"use client";

import { useEffect, useState } from "react";

type Section = { id: string; label: string };

/* ---------- Desktop sidebar (sticky) ---------- */

export function LegalTocDesktop({ sections }: { sections: Section[] }) {
    const [activeId, setActiveId] = useState<string>(sections[0]?.id ?? "");

    useEffect(() => {
        const handler = () => {
            const offsets = sections.map((s) => {
                const el = document.getElementById(s.id);
                if (!el) return { id: s.id, top: Infinity };
                const rect = el.getBoundingClientRect();
                return { id: s.id, top: rect.top };
            });

            // Pick the section whose top is closest above the 120px mark
            const visible = offsets
                .filter((o) => o.top <= 120)
                .sort((a, b) => b.top - a.top)[0];

            if (visible) setActiveId(visible.id);
        };

        handler();
        window.addEventListener("scroll", handler, { passive: true });
        return () => window.removeEventListener("scroll", handler);
    }, [sections]);

    return (
        <aside className="hidden lg:block sticky top-28 self-start">
            <div className="sticky top-28">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-3">
                    On this page
                </p>
                <nav aria-label="Table of contents">
                    <ul className="space-y-1.5 border-l border-slate-200">
                        {sections.map((s) => {
                            const isActive = s.id === activeId;
                            return (
                                <li key={s.id}>
                                    <a
                                        href={`#${s.id}`}
                                        className={`block pl-4 -ml-px border-l-2 py-1.5 text-[13px] leading-snug transition-colors ${isActive
                                                ? "border-blue-600 text-blue-600 font-semibold"
                                                : "border-transparent text-slate-500 hover:text-slate-900 hover:border-slate-300"
                                            }`}
                                    >
                                        {s.label}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>
        </aside>
    );
}

/* ---------- Mobile collapsible TOC ---------- */

export function LegalTocMobile({ sections }: { sections: Section[] }) {
    return (
        <details className="lg:hidden group rounded-2xl border border-slate-200/90 bg-white mb-6 open:shadow-card-soft transition-all">
            <summary className="flex items-center justify-between gap-3 px-4 py-3.5 cursor-pointer list-none">
                <span className="flex items-center gap-2 text-sm font-bold text-slate-900">
                    <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M4 6h16M4 12h16M4 18h10" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                    </svg>
                    Table of contents
                </span>
                <svg
                    className="w-4 h-4 text-slate-400 group-open:rotate-180 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                >
                    <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                </svg>
            </summary>
            <nav aria-label="Table of contents" className="border-t border-slate-100">
                <ul className="py-2">
                    {sections.map((s) => (
                        <li key={s.id}>
                            <a
                                href={`#${s.id}`}
                                className="block px-4 py-2.5 text-[13px] text-slate-600 hover:text-blue-600 hover:bg-slate-50 transition-colors"
                            >
                                {s.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </details>
    );
}

/* ---------- Default export wraps both for convenience ---------- */

export default function LegalToc({ sections }: { sections: Section[] }) {
    return (
        <>
            <LegalTocMobile sections={sections} />
        </>
    );
}