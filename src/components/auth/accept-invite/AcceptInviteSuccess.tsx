export default function AcceptInviteSuccess() {
    return (
        <div className="relative rounded-4xl overflow-hidden w-full max-w-md mx-auto animate-auth-rise">
            <div
                aria-hidden="true"
                className="absolute inset-0 rounded-4xl"
                style={{
                    backdropFilter: "url(#liquid-glass-distortion) blur(2px) saturate(1.4)",
                    WebkitBackdropFilter: "blur(18px) saturate(1.4)",
                }}
            />
            <div aria-hidden="true" className="absolute inset-0 rounded-4xl bg-white/60" />
            <div
                className="
          relative rounded-4xl
          border border-white/70 ring-1 ring-slate-900/5
          shadow-[0_1px_1px_rgba(255,255,255,0.7)_inset,0_-1px_2px_rgba(15,23,42,0.06)_inset,0_30px_60px_-20px_rgba(15,23,42,0.18),0_4px_12px_-4px_rgba(15,23,42,0.08)]
          p-6 sm:p-8 lg:p-10 text-center
        "
            >
                {/* Success icon with pulse ring */}
                <div className="flex justify-center mb-5">
                    <div className="relative">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                            <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path
                                    d="M5 13l4 4L19 7"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2.5}
                                />
                            </svg>
                        </div>
                        <span
                            aria-hidden="true"
                            className="absolute inset-0 rounded-full ring-4 ring-emerald-100/60 animate-pulse"
                        />
                    </div>
                </div>

                {/* Heading */}
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                    Welcome to PeopleHub!
                </h1>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
                    Your account is activated. Taking you to your workspace…
                </p>

                {/* Loading bar */}
                <div className="mt-6 h-1 rounded-full bg-slate-200/70 overflow-hidden">
                    <div className="h-full w-1/2 rounded-full bg-emerald-500 animate-auth-shimmer" />
                </div>
            </div>
        </div>
    );
}