import Image from "next/image";
import HeroDashboard from "./HeroDashboard";
import { TRUST_BADGES } from "@/lib/constants";

function ArrowRight() {
    return (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
        </svg>
    );
}

function CheckIcon() {
    return (
        <svg
            className="w-4 h-4 text-blue-600 stroke-[2.5]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
        >
            <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

const AVATARS = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuB5Y0ZB9ZdnDX4m3iwh1UuvBRcLPFTn3hZ6OtWEGH8UtiMlxKLnOejIJelpfS9M7InUNZ9SG0mwiXVMPlWgPXHiUoLLYk7tKURg8-VXK673yh0ejSzhi7WriW4_lqqXeXJ322VhKI5wLS2BCrzGhSXBM9FG-u9sbpHo1cb_zNJSE43CC9kMmlVT_6D1pDJnu8CMDWOOaXz6ZABBpbuvDorI8YK08L72vLrGH0ruKPmDwaGfCN1aTUSzSQ",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDo5DF3fumwayqLw09Zpk9b5C-hWzfyJj3dDXMKbWYVOkeB-Osz9L5vIHM_8SX3laU-2n1QotWSXOOYdg_jCxsoHhHUci3aQGjInGx8MIE2cGmEysAdllEGvNHDERbuG5IVeXghL_g_BjlU8ERlp8QFcBAakwK3-Nm3RhjBbc59Ax5xYcScQ5Qkl7XgJxHqpQNVw_xjN6kMWZxy1ASYBpYFMeLpfNgsUdyDmw45Av30Hp44hURaZhOy4Q",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA4pyoWMAakt7ztD3PsWmSlZ7Kckc3yOV2ZKIzlFrW-xpY4YKFkA3YDNazG-tNAsWe9VJxoLQzKRZQF9ZxgK2TJcpDF7v1tXUfxxp6OnEa6i9lzwt0dyS8LaAXEn_T6u3Pd827oiFN9JcgUfYt2l9FW3S-xcVSTgJj2iswKGXLraoce5memCNHwfknpLimxJpzKUTHjJrG0UXgmb0KK-o8wLYGcknp384uAa3xywFYcwCJwfU8dKowfTg",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBhljpdYVzecRwdbPmayJwkoIq044CWGkaLwIuq5pHbJWZmkeSnTulwWWwKtU1TyFKlY_eq9BhYCZmrg46k6SzFWxf8uv-VLMuggz_zLOL9Oy-K3kxuuF1CihbBWOR8Q_NIx-1nrqjqDeQuZMCVI9p1mqg89ptHqrRttazo0ynx_2Ssk2-vJ1O4aoCRxrFV2Y2vONs490lNSE30W3KgPehvHHkHUbg35r14eUb7J6pC_sYKSW0eVrf4Gg",
];

export default function HeroSection() {
    return (
        <section className="relative pt-20 sm:pt-30 pb-20 overflow-hidden hero-bg-gradient">
            {/* Ambient swoosh decoration */}
            <div className="absolute inset-0 pointer-events-none opacity-40">
                <svg
                    className="w-full h-full"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 1440 900"
                    aria-hidden="true"
                >
                    <path
                        d="M-100 200 C300 100, 600 350, 1000 120 C1200 -20, 1400 40, 1600 80"
                        filter="blur(50px)"
                        stroke="url(#hero-swoosh)"
                        strokeLinecap="round"
                        strokeWidth={60}
                    />
                    <defs>
                        <linearGradient id="hero-swoosh" x1="0%" x2="100%" y1="0%" y2="100%">
                            <stop stopColor="#93c5fd" stopOpacity="0.6" />
                            <stop offset="100%" stopColor="#c7d2fe" stopOpacity="0.3" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            <div className="max-w-310 mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
                    {/* Left content */}
                    <div className="lg:col-span-5 pt-4">
                        <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold tracking-wide mb-6">
                            All-in-one HR platform
                        </div>

                        <h1 className="text-[52px] sm:text-[60px] leading-[1.08] font-extrabold text-slate-900 tracking-tight">
                            A simpler way
                            <br />
                            to manage your
                            <br />
                            <span className="text-blue-600">people.</span>
                        </h1>

                        <p className="mt-6 text-[17px] leading-relaxed text-slate-600 max-w-115">
                            From hiring to payroll, PeopleHub helps modern companies streamline HR, automate
                            everyday work, and focus on what really matters — their people.
                        </p>

                        <div className="mt-8 flex flex-wrap items-center gap-3.5">
                            <a
                                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-slate-950 text-white font-semibold text-sm hover:bg-slate-800 transition-all shadow-md hover:shadow-lg"
                                href="#trial"
                            >
                                <span>Start free trial</span>
                                <ArrowRight />
                            </a>
                            <a
                                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-white border border-slate-200 text-slate-700 font-semibold text-sm hover:bg-slate-50 transition-colors shadow-sm"
                                href="#demo"
                            >
                                <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <circle cx="12" cy="12" fill="none" r="10" stroke="currentColor" strokeWidth={2} />
                                    <polygon fill="currentColor" points="10,8 16,12 10,16" />
                                </svg>
                                <span>See how it works</span>
                            </a>
                        </div>

                        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-semibold text-slate-600">
                            {TRUST_BADGES.map((badge) => (
                                <span key={badge} className="inline-flex items-center gap-1.5">
                                    <CheckIcon />
                                    {badge}
                                </span>
                            ))}
                        </div>

                        <div className="mt-9 flex items-center gap-4 pt-4 border-t border-slate-200/60">
                            <div className="flex -space-x-2">
                                {AVATARS.map((src, i) => (
                                    <Image
                                        key={i}
                                        alt={`Avatar ${i + 1}`}
                                        className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                                        src={src}
                                        width={32}
                                        height={32}
                                        unoptimized
                                    />
                                ))}
                            </div>
                            <div>
                                <p className="text-xs font-bold text-slate-900 leading-none">10,000+</p>
                                <p className="text-xs text-slate-500 mt-0.5">companies trust PeopleHub</p>
                            </div>
                        </div>
                    </div>

                    {/* Right dashboard */}
                    <HeroDashboard />
                </div>
            </div>
        </section>
    );
}