import Image from "next/image";

const FLOATING_AVATARS = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAWVifd_PFUEh0qd7zSvTx3A606OMLo7H90u7kREO-eVVIyThYRuTLc1zhat0k9btwzwK731dmSyrE6mmFokX845fGbOk8DMDU7UQBXDBUoJ_CXk8In_Y--gp1whlhYG7-rdev3SqRomOkIN2xux8fuxLBZYy8N1Q2Wt0KZZFW3WylLBvtyul1Qo2YcMXWwFkUpwELaSXnn3-ZtSRMyNfA0dx9b-fR_aQXZpLLwxdUuI4VoCJOEe035Xw",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuB5MWLj8sSqxZ1Zc7H16pJY9wg1gDAQ5iQ4T837oeynahzuA0mkjPezZqzShGZKrDfpsTjLfzar8OfTO0McXZ0L38NzWOYe8sO9Ntdr_b3HQtGT0gg-nDgtRIisBLiRvXji_1-z-ltJzTtFWF4zR2rnMYyw9kSnM5LzKwuIa7pJrLOcHISqMkB4_ILfNTw30aS4QDqoiZP34mnlvhvDTzPo8Q1gg8LwIhfykdwxSSzLZNteroNX8ypchQ",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCXhXWurqwySmY7WcXeQnd7ScWgrtQ4UEuij3rmy9PbVSWUa113eE1PS9gZhiX2RIK5rsLSOskq0d-EAmz-W7Adk1ZVyxh9li7cAaLWPUkAUl60DwybSHCgeyXmvGfXm20ZuB9VlcOk_sRAOrwe5vkUOv2TL58r7YPYBqVew5dJHcVHIN3FC4UVygPtKma9xP18cw6j94DpVxoff0AqDPklebw-XFqJzdcq17hJL4lywn-Jl8zIJFZxow",
];

export default function CallToActionBanner() {
    return (
        <section className="py-12 bg-white">
            <div className="max-w-310 mx-auto px-6">
                <div className="relative rounded-3xl bg-linear-to-r from-blue-50/90 via-sky-50/60 to-indigo-50/70 p-8 sm:p-12 lg:p-14 overflow-hidden border border-blue-100/60">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        {/* Copy */}
                        <div className="lg:col-span-6 z-10">
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                                Built for people.
                                <br />
                                Designed for what&apos;s next.
                            </h2>
                            <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed max-w-md">
                                Whether you&apos;re a startup or an enterprise, PeopleHub adapts to your needs and
                                grows with you.
                            </p>
                            <div className="mt-8">
                                <a
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-950 text-white font-semibold text-sm hover:bg-slate-800 transition-all shadow-md"
                                    href="#signup"
                                >
                                    <span>Start building today</span>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path
                                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* Visual */}
                        <div className="lg:col-span-6 relative">
                            {/* Handwritten annotation */}
                            <div className="hidden sm:block absolute -top-4 -right-2 z-20 text-blue-600 font-handwriting text-xl rotate-3] pointer-events-none select-none">
                                <span className="block leading-tight text-center">
                                    People
                                    <br />
                                    Drive
                                    <br />
                                    Progress
                                </span>
                                <svg
                                    className="w-10 h-10 ml-auto text-blue-500 rotate-45"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    viewBox="0 0 50 40"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M5,10 C20,10 35,25 20,35 M20,35 L28,34 M20,35 L22,25"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>

                            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-white">
                                <Image
                                    alt="Diverse coworkers collaborating around a laptop in modern office"
                                    className="w-full h-72 sm:h-80 object-cover object-center"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWwX_VW-rgBTDDXaGjgDsoWH2slQzTFt_8uqd5ejjrQuDFpaGYPNiHkqEX0LaMO9lQZWCm2mMpbnZsUiMUp7RW0NbJTXBp-4nU7RPA-dzPelDgvJ1eF0CdjIh0_1Gq5QUVJvGrpQHLsUzLP_t4L1xUrQtkvgyiJXg1HVVPHkR_eEORabvFb3pEONylzK0LXJ8fod0KHsALKJ0_WhQf6Ph1ntD6BCZsdXy5y0iFSRWsHBdl_FA8rIsrIQ"
                                    width={640}
                                    height={320}
                                    unoptimized
                                />

                                {/* Floating card */}
                                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-md border border-slate-100 max-w-52.5">
                                    <p className="text-xs font-bold text-slate-900 leading-snug">
                                        A happier workplace starts here.
                                    </p>
                                    <div className="mt-2.5 flex items-center gap-2">
                                        <div className="flex -space-x-1.5">
                                            {FLOATING_AVATARS.map((src, i) => (
                                                <Image
                                                    key={i}
                                                    alt="User"
                                                    className="inline-block h-5 w-5 rounded-full ring-2 ring-white object-cover"
                                                    src={src}
                                                    width={20}
                                                    height={20}
                                                    unoptimized
                                                />
                                            ))}
                                        </div>
                                        <div>
                                            <span className="text-[10px] font-bold text-slate-800 block leading-none">
                                                10K+ teams
                                            </span>
                                            <span className="text-[8px] text-slate-400 block">choose PeopleHub</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}