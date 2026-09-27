export default function NotFoundBackground() {
    return (
        <div
            aria-hidden="true"
            className="absolute inset-0 overflow-hidden pointer-events-none"
        >
            {/* Base gradient */}
            <div className="absolute inset-0 bg-linear-to-br from-white via-blue-50/40 to-indigo-50/60" />

            {/* Drifting blobs — reuse existing animation from sign-in */}
            <div className="absolute -top-40 -left-40 w-105 sm:w-140 h-105 sm:h-140 rounded-full bg-blue-200/40 blur-3xl animate-auth-blob" />
            <div
                className="absolute -bottom-48 -right-32 w-115 sm:w-155 h-115 sm:h-155 rounded-full bg-indigo-200/40 blur-3xl animate-auth-blob"
                style={{ animationDelay: "-8s" }}
            />
            <div
                className="absolute top-1/4 right-1/4 w-[320px] sm:w-105 h-80 sm:h-105 rounded-full bg-sky-200/30 blur-3xl animate-auth-blob"
                style={{ animationDelay: "-14s" }}
            />

            {/* Grid overlay — fades toward edges */}
            <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, #0f172a 1px, transparent 1px), linear-gradient(to bottom, #0f172a 1px, transparent 1px)",
                    backgroundSize: "48px 48px",
                    maskImage:
                        "radial-gradient(circle at 50% 45%, black 0%, transparent 75%)",
                    WebkitMaskImage:
                        "radial-gradient(circle at 50% 45%, black 0%, transparent 75%)",
                }}
            />

            {/* Radial vignette — keeps the center legible */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,transparent_0%,transparent_45%,rgba(255,255,255,0.6)_85%)]" />
        </div>
    );
}