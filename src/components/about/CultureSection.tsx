import Image from "next/image";
import { ABOUT_PERKS } from "@/lib/constants";

export default function CultureSection() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-center">
                {/* Image first on mobile, second on desktop */}
                <div className="lg:col-span-6 order-2 lg:order-1">
                    <div className="relative rounded-3xl overflow-hidden aspect-4/3 sm:aspect-5/4 shadow-xl border border-slate-100">
                        <Image
                            alt="PeopleHub team collaborating in a modern office"
                            className="w-full h-full object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDurz-KK--hLxXufvkNUtbQ0yNIX_RGT7t68tciij-j5JjhO2HPfADmL2lbzPIRsyqE2KDjXWs6KrD8Nj2CnuEjpqrHpLEX0AgnqnN8oWNP9trgiulqfBi1jr5yeHsdigNa_Pna-V0_Ca5Ygz8990vG2jatc7kIep-vTcQvsLj5IvVyGFiCWsM2dhDgW4VCRwvu_kljb25H-bKNaraIK7qKigjTwzB7H03-oda0pJKMTKnquHL-BgOhwg"
                            width={800}
                            height={640}
                            unoptimized
                        />
                    </div>
                </div>

                {/* Copy */}
                <div className="lg:col-span-6 order-1 lg:order-2">
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wide bg-blue-100/70 text-blue-600 mb-3">
                        Life at PeopleHub
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-tight">
                        A place where
                        <br className="hidden sm:block" />{" "}
                        <span className="text-blue-600">work feels good.</span>
                    </h2>
                    <p className="mt-4 sm:mt-5 text-sm sm:text-base text-slate-600 leading-relaxed">
                        We believe great products come from teams that feel supported — so we invest
                        heavily in the things that make work sustainable, not just productive.
                    </p>

                    {/* Perks grid — 1 col mobile, 2 col sm+ */}
                    <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 sm:gap-y-5">
                        {ABOUT_PERKS.map((perk) => (
                            <div key={perk.label} className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-lg bg-blue-100/70 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                                    <svg
                                        className="w-4 h-4"
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
                                <div className="min-w-0">
                                    <p className="text-sm font-bold text-slate-900">{perk.label}</p>
                                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                                        {perk.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}