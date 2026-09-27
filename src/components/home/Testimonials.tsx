import Image from "next/image";
import { TESTIMONIALS } from "@/lib/constants";

function Stars() {
    return (
        <div className="flex items-center gap-0.5" aria-label="5 out of 5 stars">
            {Array.from({ length: 5 }).map((_, i) => (
                <svg
                    key={i}
                    className="w-4 h-4 text-amber-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
            ))}
        </div>
    );
}

export default function Testimonials() {
    return (
        <section className="py-24 bg-slate-50" id="testimonials">
            <div className="max-w-310 mx-auto px-6">
                {/* Header */}
                <div className="max-w-2xl mx-auto text-center mb-14">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold tracking-wide mb-4">
                        LOVED BY TEAMS
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-tight">
                        Trusted by people teams{" "}
                        <span className="text-blue-600">around the world.</span>
                    </h2>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {TESTIMONIALS.map((t) => (
                        <figure
                            key={t.name}
                            className="p-7 rounded-2xl border border-slate-100 bg-white hover:shadow-card-soft transition-all duration-300 flex flex-col"
                        >
                            <Stars />
                            <blockquote className="mt-5 text-sm text-slate-700 leading-relaxed flex-1">
                                &ldquo;{t.quote}&rdquo;
                            </blockquote>
                            <figcaption className="mt-6 pt-5 border-t border-slate-100 flex items-center gap-3">
                                <Image
                                    alt={t.name}
                                    className="w-10 h-10 rounded-full object-cover"
                                    src={t.avatar}
                                    width={40}
                                    height={40}
                                    unoptimized
                                />
                                <div className="leading-tight">
                                    <p className="text-sm font-bold text-slate-900">{t.name}</p>
                                    <p className="text-xs text-slate-500 mt-0.5">{t.role}</p>
                                </div>
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    );
}