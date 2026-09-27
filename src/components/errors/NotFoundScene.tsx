"use client";

import { useEffect, useRef, useState } from "react";

/* Each digit's depth — the "4"s are further back than the "0" */
const DIGIT_LAYERS = [
    { char: "4", depth: -60, weight: "font-extrabold", color: "text-blue-600" },
    { char: "0", depth: 0, weight: "font-extrabold", color: "text-slate-900" },
    { char: "4", depth: -60, weight: "font-extrabold", color: "text-blue-600" },
];

export default function NotFoundScene() {
    const sceneRef = useRef<HTMLDivElement | null>(null);
    const [tilt, setTilt] = useState({ x: 0, y: 0 });
    const [isTouch, setIsTouch] = useState(false);

    // Detect touch devices and skip mouse handlers
    useEffect(() => {
        if (typeof window === "undefined") return;
        const touch =
            "ontouchstart" in window ||
            (navigator.maxTouchPoints ?? 0) > 0 ||
            window.matchMedia("(hover: none)").matches;
        setIsTouch(touch);
    }, []);

    // Track cursor position relative to scene center
    useEffect(() => {
        if (isTouch) return;
        const el = sceneRef.current;
        if (!el) return;

        const handleMove = (e: MouseEvent) => {
            const rect = el.getBoundingClientRect();
            const cx = rect.left + rect.width / 2;
            const cy = rect.top + rect.height / 2;
            const dx = (e.clientX - cx) / (rect.width / 2);
            const dy = (e.clientY - cy) / (rect.height / 2);

            // Clamp and soften
            const MAX_ROT = 12;
            setTilt({
                x: -Math.max(-1, Math.min(1, dy)) * MAX_ROT,
                y: Math.max(-1, Math.min(1, dx)) * MAX_ROT,
            });
        };

        const handleLeave = () => setTilt({ x: 0, y: 0 });

        window.addEventListener("mousemove", handleMove, { passive: true });
        el.addEventListener("mouseleave", handleLeave);
        return () => {
            window.removeEventListener("mousemove", handleMove);
            el.removeEventListener("mouseleave", handleLeave);
        };
    }, [isTouch]);

    // Parse the digit string to color the middle one differently
    return (
        <div
            ref={sceneRef}
            className="scene-3d relative select-none pointer-events-none"
            aria-hidden="true"
        >
            {/* "404" digits wrapper */}
            <div
                className="relative animate-notfound-float"
                style={{
                    transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                    transformStyle: "preserve-3d",
                }}
            >
                <div className="flex items-center justify-center gap-1 sm:gap-3 lg:gap-5">
                    {DIGIT_LAYERS.map((layer, i) => (
                        <span
                            key={i}
                            className={`
                digit-3d
                ${layer.weight}
                ${layer.color}
                text-[110px] leading-none
                sm:text-[160px]
                md:text-[200px]
                lg:text-[260px]
                tracking-tight
                drop-shadow-[0_18px_40px_rgba(15,23,42,0.15)]
              `}
                            style={{
                                transform: `translateZ(${layer.depth}px)`,
                                // Multi-layer text-shadow gives the digits "thickness"
                                textShadow:
                                    layer.color === "text-blue-600"
                                        ? `
                      0 1px 0 #1d4ed8,
                      0 2px 0 #1e40af,
                      0 3px 0 #1e3a8a,
                      0 4px 0 #1e3a8a,
                      0 6px 12px rgba(37, 99, 235, 0.35),
                      0 10px 24px rgba(37, 99, 235, 0.2)
                    `
                                        : `
                      0 1px 0 #0f172a,
                      0 2px 0 #0b132b,
                      0 3px 0 #0b132b,
                      0 4px 0 #081019,
                      0 6px 12px rgba(15, 23, 42, 0.35),
                      0 10px 24px rgba(15, 23, 42, 0.2)
                    `,
                            }}
                        >
                            {layer.char}
                        </span>
                    ))}
                </div>
            </div>

            {/* Ground shadow beneath the digits */}
            <div
                className="mt-4 sm:mt-5 lg:mt-7 mx-auto w-56 sm:w-72 md:w-80 lg:w-96 h-6 sm:h-8 lg:h-10 rounded-[100%] bg-slate-900/40 blur-2xl animate-notfound-shadow"
                aria-hidden="true"
            />

            {/* Decorative floating dots around the scene — subtle 3D cue */}
            {[
                { top: "10%", left: "12%", size: 8, delay: "0s" },
                { top: "22%", right: "14%", size: 6, delay: "-1.5s" },
                { bottom: "18%", left: "18%", size: 10, delay: "-3s" },
                { bottom: "26%", right: "10%", size: 7, delay: "-4.5s" },
            ].map((dot, i) => (
                <span
                    key={i}
                    className="absolute rounded-full bg-blue-400/60 blur-[1px] animate-auth-float"
                    style={{
                        top: dot.top,
                        left: dot.left,
                        right: dot.right,
                        bottom: dot.bottom,
                        width: `${dot.size}px`,
                        height: `${dot.size}px`,
                        animationDelay: dot.delay,
                    }}
                />
            ))}
        </div>
    );
}