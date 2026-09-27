import { TRUSTED_COMPANIES } from "@/lib/constants";

/* Individual brand marks — kept simple and monochrome per design spec */
function LogoMark({ name }: { name: string }) {
    switch (name) {
        case "Stripe":
            return <div className="flex items-center font-bold text-2xl tracking-tighter text-slate-700">stripe</div>;
        case "Slack":
            return (
                <div className="flex items-center gap-2 font-bold text-xl tracking-tight text-slate-700">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
                    </svg>
                    <span>slack</span>
                </div>
            );
        case "Notion":
            return (
                <div className="flex items-center gap-1.5 font-bold text-lg text-slate-700">
                    <span className="w-6 h-6 border-2 border-current rounded flex items-center justify-center text-xs font-serif">
                        N
                    </span>
                    <span>Notion</span>
                </div>
            );
        case "Shopify":
            return (
                <div className="flex items-center gap-1 font-bold text-lg text-slate-700">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M21.5 7.5L14 3 6.5 7.5 2 6l5 15 10 2 5-5-0.5-10.5z" />
                    </svg>
                    <span>shopify</span>
                </div>
            );
        case "Linear":
            return (
                <div className="flex items-center gap-2 font-bold text-lg text-slate-700">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                        <circle cx="12" cy="12" fill="none" r="10" stroke="currentColor" strokeWidth={3} />
                        <line stroke="currentColor" strokeWidth={2.5} x1="6" x2="18" y1="6" y2="18" />
                    </svg>
                    <span>Linear</span>
                </div>
            );
        case "Vercel":
            return (
                <div className="flex items-center gap-1.5 font-bold text-base text-slate-700">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                        <polygon points="12,2 24,22 0,22" />
                    </svg>
                    <span>Vercel</span>
                </div>
            );
        case "Figma":
            return (
                <div className="flex items-center gap-1.5 font-bold text-base text-slate-700">
                    <svg className="w-4 h-6 fill-current" viewBox="0 0 24 36" aria-hidden="true">
                        <path d="M12 0H6C2.68 0 0 2.68 0 6s2.68 6 6 6h6V0zM12 12H6c-3.32 0-6 2.68-6 6s2.68 6 6 6 6-2.68 6-6V12zM12 24v6c0 3.32-2.68 6-6 6s-6-2.68-6-6 2.68-6 6-6h6zM18 0h-6v12h6c3.32 0 6-2.68 6-6s-2.68-6-6-6zM24 18c0-3.32-2.68-6-6-6h-6v12h6c3.32 0 6-2.68 6-6z" />
                    </svg>
                    <span>Figma</span>
                </div>
            );
        case "Webflow":
            return (
                <div className="flex items-center gap-1 font-bold text-base text-slate-700">
                    <span className="font-extrabold text-lg">W</span>
                    <span>Webflow</span>
                </div>
            );
        default:
            return null;
    }
}

export default function ClientLogos() {
    return (
        <section className="py-12 border-y border-slate-100 bg-white">
            <div className="max-w-310 mx-auto px-6">
                <p className="text-center text-[11px] font-bold tracking-widest text-slate-400 uppercase mb-8">
                    TRUSTED BY FORWARD-THINKING COMPANIES
                </p>
                <div className="flex flex-wrap items-center justify-center sm:justify-between gap-8 md:gap-10 text-slate-400 grayscale opacity-80 hover:opacity-100 transition-opacity">
                    {TRUSTED_COMPANIES.map((name) => (
                        <LogoMark key={name} name={name} />
                    ))}
                </div>
            </div>
        </section>
    );
}