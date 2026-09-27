import Image from "next/image";
import { PRICING_TESTIMONIAL } from "@/lib/constants";

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

export default function TestimonialStrip() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
            <div className="rounded-3xl border border-slate-100 bg-linear-to-br from-slate-50 via-white to-blue-50/40 p-8 sm:p-12">
                <div className="max-w-3xl mx-auto text-center">
                    <Stars />

                    <blockquote className="mt-6 text-lg sm:text-xl md:text-2xl font-medium text-slate-800 leading-relaxed">
                        &ldquo;{PRICING_TESTIMONIAL.quote}&rdquo;
                    </blockquote>

                    <div className="mt-8 flex items-center justify-center gap-3">
                        <Image
                            alt={PRICING_TESTIMONIAL.name}
                            className="w-11 h-11 rounded-full object-cover ring-2 ring-white shadow-sm"
                            src={PRICING_TESTIMONIAL.avatar}
                            width={44}
                            height={44}
                            unoptimized
                        />
                        <div className="text-left">
                            <p className="text-sm font-bold text-slate-900 leading-none">
                                {PRICING_TESTIMONIAL.name}
                            </p>
                            <p className="text-xs text-slate-500 mt-1">{PRICING_TESTIMONIAL.role}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}