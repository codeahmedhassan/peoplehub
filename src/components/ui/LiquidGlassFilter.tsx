/**
 * Renders the SVG defs used by the `backdrop-filter: url(#liquid-glass-distortion)`
 * technique. Place exactly ONE of these per page tree (or once in the root layout).
 */
export default function LiquidGlassFilter() {
    return (
        <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
            <defs>
                <filter
                    id="liquid-glass-distortion"
                    x="-20%"
                    y="-20%"
                    width="140%"
                    height="140%"
                >
                    <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.008 0.005"
                        numOctaves="2"
                        seed="7"
                        result="noise"
                    />
                    <feGaussianBlur in="noise" stdDeviation="2" result="blurredNoise" />
                    <feDisplacementMap
                        in="SourceGraphic"
                        in2="blurredNoise"
                        scale="50"
                        xChannelSelector="R"
                        yChannelSelector="G"
                    />
                </filter>
            </defs>
        </svg>
    );
}