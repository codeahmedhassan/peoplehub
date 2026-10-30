type Props = {
    fullScreen?: boolean;
};

function Spinner({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
    const dims =
        size === "lg" ? "w-12 h-12" : size === "sm" ? "w-6 h-6" : "w-8 h-8";
    return (
        <svg className={`${dims} animate-spin text-blue-600`} viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeOpacity="0.2" strokeWidth="3" />
            <path
                d="M22 12a10 10 0 0 1-10 10"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
            />
        </svg>
    );
}

export default function AcceptInviteLoading({ fullScreen = false }: Props) {
    if (fullScreen) {
        return (
            <div className="min-h-svh flex items-center justify-center">
                <Spinner size="lg" />
            </div>
        );
    }

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
          p-10 sm:p-12
          flex flex-col items-center text-center
        "
            >
                <Spinner />
                <p className="mt-4 text-sm text-slate-600">Verifying your invite…</p>
            </div>
        </div>
    );
}