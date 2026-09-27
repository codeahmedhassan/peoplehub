import Image from "next/image";
import { ABOUT_STORY_METRICS } from "@/lib/constants";

export default function StorySection() {
    return (
        <section id="story" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 items-center">
                {/* Copy — order-2 on mobile so image comes first visually */}
                <div className="lg:col-span-6 order-2 lg:order-1">
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wide bg-blue-100/70 text-blue-600 mb-3">
                        Our story
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-tight">
                        From a spreadsheet
                        <br className="hidden sm:block" />{" "}
                        to <span className="text-blue-600">48 teammates.</span>
                    </h2>
                    <div className="mt-5 sm:mt-6 space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                        <p>
                            In 2019, three HR leads and two engineers sat around a table in Lisbon
                            with a shared frustration: every HR tool they&apos;d used was either
                            bloated with features nobody needed, or so bare-bones it created
                            more work than it saved.
                        </p>
                        <p>
                            So they built something different — a platform that treats HR like the
                            people-first discipline it actually is. One system, clear workflows, and
                            an interface people could learn in an afternoon instead of a quarter.
                        </p>
                        <p>
                            Six years later, PeopleHub is used by more than 10,000 companies in 32
                            countries, and we&apos;re still building with the same obsessive care
                            about simplicity that started it all.
                        </p>
                    </div>

                    {/* Metrics — 2 cols mobile, 4 cols sm+ */}
                    <div className="mt-8 sm:mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-slate-100">
                        {ABOUT_STORY_METRICS.map((metric) => (
                            <div key={metric.label}>
                                <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                                    {metric.value}
                                </p>
                                <p className="text-[11px] sm:text-xs text-slate-500 mt-1 uppercase tracking-wider font-medium">
                                    {metric.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Image */}
                <div className="lg:col-span-6 order-1 lg:order-2">
                    <div className="relative rounded-3xl overflow-hidden aspect-4/3 sm:aspect-5/4 lg:aspect-4/5 shadow-xl border border-slate-100">
                        <Image
                            alt="PeopleHub team collaborating in a modern workspace"
                            className="w-full h-full object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWwX_VW-rgBTDDXaGjgDsoWH2slQzTFt_8uqd5ejjrQuDFpaGYPNiHkqEX0LaMO9lQZWCm2mMpbnZsUiMUp7RW0NbJTXBp-4nU7RPA-dzPelDgvJ1eF0CdjIh0_1Gq5QUVJvGrpQHLsUzLP_t4L1xUrQtkvgyiJXg1HVVPHkR_eEORabvFb3pEONylzK0LXJ8fod0KHsALKJ0_WhQf6Ph1ntD6BCZsdXy5y0iFSRWsHBdl_FA8rIsrIQ"
                            width={800}
                            height={1000}
                            unoptimized
                        />
                        {/* Floating card — smaller on mobile, repositions */}
                        <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-55 bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-2xl shadow-lg border border-slate-100">
                            <p className="text-[11px] sm:text-xs font-bold text-slate-900 leading-snug">
                                Built in Lisbon. Serving teams everywhere.
                            </p>
                            <p className="mt-1.5 text-[10px] sm:text-[11px] text-slate-500 leading-relaxed">
                                Remote-first since day one, with hubs in Lisbon, Berlin, and Toronto.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}