export default function AuthBackground() {
    return (
        <div
            aria-hidden="true"
            className="absolute inset-0 overflow-hidden pointer-events-none"
        >
            {/* Base gradient */}
            <div className="absolute inset-0 bg-linear-to-br from-white via-blue-50/40 to-indigo-50/60" />

            {/* Drifting blobs */}
            <div className="absolute -top-32 -left-32 w-95 sm:w-130 h-95 sm:h-130 rounded-full bg-blue-200/40 blur-3xl animate-auth-blob" />
            <div
                className="absolute -bottom-40 -right-24 w-105 sm:w-140 h-105 sm:h-140 rounded-full bg-indigo-200/40 blur-3xl animate-auth-blob"
                style={{ animationDelay: "-6s" }}
            />
            <div
                className="absolute top-1/3 left-1/2 w-70 sm:w-90 h-70 sm:h-90 -translate-x-1/2 rounded-full bg-sky-200/30 blur-3xl animate-auth-blob"
                style={{ animationDelay: "-12s" }}
            />

            {/* Subtle grid overlay for texture */}
            <div
                className="absolute inset-0 opacity-[0.035]"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, #0f172a 1px, transparent 1px), linear-gradient(to bottom, #0f172a 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                }}
            />

            {/* Radial vignette to keep the center legible */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,transparent_0%,transparent_40%,rgba(255,255,255,0.6)_85%)]" />
        </div>
    );
}