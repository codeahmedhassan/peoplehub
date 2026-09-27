import Image from "next/image";
import { ABOUT_TEAM } from "@/lib/constants";

function LinkedInIcon() {
    return (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
    );
}

export default function TeamSection() {
    return (
        <section className="bg-slate-50/60 py-14 sm:py-20 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-14">
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wide bg-blue-100/70 text-blue-600 mb-3">
                        Leadership
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-tight">
                        The people behind{" "}
                        <span className="text-blue-600">the platform.</span>
                    </h2>
                    <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-600">
                        Operators, engineers, and designers who&apos;ve lived the HR problem from
                        the inside.
                    </p>
                </div>

                {/* Grid: 1 col tiny, 2 col sm, 4 col lg */}
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    {ABOUT_TEAM.map((member) => (
                        <div
                            key={member.name}
                            className="group rounded-2xl border border-slate-100 bg-white overflow-hidden hover:shadow-card-soft transition-all duration-300"
                        >
                            {/* Square avatar container */}
                            <div className="relative aspect-square overflow-hidden bg-slate-100">
                                <Image
                                    alt={member.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    src={member.avatar}
                                    width={400}
                                    height={400}
                                    unoptimized
                                />
                                {/* LinkedIn overlay */}
                                <a
                                    href={member.linkedin}
                                    aria-label={`${member.name} on LinkedIn`}
                                    className="absolute top-2 right-2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/90 backdrop-blur-md text-slate-700 flex items-center justify-center shadow-sm hover:bg-white hover:text-blue-600 transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100"
                                >
                                    <LinkedInIcon />
                                </a>
                            </div>
                            {/* Copy */}
                            <div className="p-3.5 sm:p-5">
                                <h3 className="text-sm sm:text-base font-bold text-slate-900 truncate">
                                    {member.name}
                                </h3>
                                <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 truncate">
                                    {member.role}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}