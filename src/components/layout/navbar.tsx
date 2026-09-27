"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/lib/constants";

function ChevronDown() {
  return (
    <svg
      className="w-4 h-4 text-slate-500"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return open ? (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    </svg>
  ) : (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [mobileOpen]);

  const isActive = (href: string) =>
    (href === "/pricing" && pathname === "/pricing") ||
    (href === "/features" && pathname.startsWith("/features")) ||
    (href === "/about" && pathname === "/about") ||
    (href === "/contact" && pathname === "/contact");

  return (
    <>
      <header className="fixed top-3 sm:top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-1.5rem)] sm:w-[calc(100%-2rem)] max-w-295">
        {/* SVG filter — unused when the mobile menu is closed but kept in DOM */}
        <svg className="absolute w-0 h-0" aria-hidden="true">
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

        {/* Main glass bar */}
        <div className="relative rounded-full h-14">
          <div
            className="absolute inset-0 rounded-full overflow-hidden"
            style={{
              backdropFilter: "url(#liquid-glass-distortion) blur(2px) saturate(1.4)",
              WebkitBackdropFilter: "blur(14px) saturate(1.4)",
            }}
          />
          <div className="absolute inset-0 rounded-full bg-white/15 overflow-hidden" />

          <div
            className="
              relative rounded-full h-14
              px-3 sm:px-5
              flex items-center justify-between
              isolate overflow-hidden
              border border-white/50
              shadow-[0_1px_1px_rgba(255,255,255,0.7)_inset,0_-1px_2px_rgba(15,23,42,0.08)_inset,0_20px_40px_-12px_rgba(15,23,42,0.25),0_4px_12px_-4px_rgba(15,23,42,0.12)]
            "
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-4 top-0 h-[1.5px] rounded-full bg-linear-to-r from-transparent via-white to-transparent opacity-95"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-10 top-0 h-6 rounded-full bg-linear-to-b from-white/60 to-transparent blur-sm"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-2 left-0 w-px bg-linear-to-b from-transparent via-white/80 to-transparent"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-2 right-0 w-px bg-linear-to-b from-transparent via-white/80 to-transparent"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-8 bottom-0 h-px bg-linear-to-r from-transparent via-slate-900/15 to-transparent"
            />

            {/* Brand */}
            <Link className="relative flex items-center gap-2 sm:gap-2.5 group shrink-0" href="/">
              <Image
                alt="PeopleHub Logo"
                className="h-7 w-7 sm:h-8 sm:w-8 object-contain transform group-hover:scale-105 transition-transform"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhwYK06kCqRIIgkTvfhja_Rm32aYS9R97-hnSaE4dE9dpBDl8HFyEO0aOc2jWcMouvNIZvLHNavCAV98aCeU6spd-tyMLDlDNFLuG3Y3qjw6a5FpGZWSevxhNZf10fkhpX140cvew0BsOfkh5cVUuTjDEZ6a4fsQ_uS_6zf4mlS5Ko7HiiwUDbSJsvmfWTXRZKXmBfr3W1mV-k_al3sUFwO_AmmYAw8EBDCEsTE4Wje71uDFyigUqF1DA1oAuWD2GuE4Y"
                width={32}
                height={32}
                unoptimized
              />
              <span className="text-base sm:text-lg font-extrabold tracking-tight text-slate-900">
                PeopleHub
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="relative hidden md:flex items-center gap-5 lg:gap-7 text-[13px] lg:text-[14px] font-medium text-slate-700">
              {NAV_LINKS.map((link) => {
                const active = isActive(link.href);
                const className = `relative flex items-center gap-1 transition-colors ${active
                  ? "px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 font-semibold"
                  : "hover:text-slate-950"
                  }`;
                return (
                  <Link key={link.label} href={link.href} className={className}>
                    <span>{link.label}</span>
                    {link.dropdown && <ChevronDown />}
                  </Link>
                );
              })}
            </nav>

            {/* Right actions */}
            <div className="relative flex items-center gap-2 sm:gap-4 shrink-0">
              <Link
                className="hidden md:inline text-[13px] lg:text-[14px] font-semibold text-slate-800 hover:text-slate-950 transition-colors"
                href="/signin"
              >
                Sign in
              </Link>

              <Link
                className="
                  hidden sm:inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-full
                  text-white text-[12px] sm:text-[13px] font-semibold
                  transition-all
                  bg-slate-950/90
                  shadow-[0_1px_0_rgba(255,255,255,0.2)_inset,0_4px_12px_-2px_rgba(15,23,42,0.4)]
                  hover:bg-slate-800
                "
                href="/signup"
              >
                <span>Get started</span>
                <ArrowRight />
              </Link>

              <button
                type="button"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu-panel"
                onClick={() => setMobileOpen((v) => !v)}
                className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-full text-slate-700 hover:bg-white/40 active:bg-white/60 transition-colors"
              >
                <MenuIcon open={mobileOpen} />
              </button>
            </div>
          </div>
        </div>

        {/* ---------- Mobile dropdown panel ---------- */}
        {/* Rendered only when open — no invisible overlay blocking touches */}
        {mobileOpen && (
          <div
            id="mobile-menu-panel"
            className="md:hidden mt-2 animate-cookie-fade"
          >
            <div className="relative rounded-[28px] overflow-hidden">
              <div
                className="absolute inset-0 rounded-[28px]"
                style={{
                  backdropFilter:
                    "url(#liquid-glass-distortion) blur(2px) saturate(1.4)",
                  WebkitBackdropFilter: "blur(14px) saturate(1.4)",
                }}
              />
              <div className="absolute inset-0 rounded-[28px] bg-white/30" />
              <div
                className="
                  relative rounded-[28px] p-3
                  border border-white/50
                  shadow-[0_1px_1px_rgba(255,255,255,0.7)_inset,0_-1px_2px_rgba(15,23,42,0.08)_inset,0_20px_40px_-12px_rgba(15,23,42,0.25),0_4px_12px_-4px_rgba(15,23,42,0.12)]
                "
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-6 top-0 h-[1.5px] rounded-full bg-linear-to-r from-transparent via-white to-transparent opacity-95"
                />

                <nav className="flex flex-col gap-1">
                  {NAV_LINKS.map((link) => {
                    const active = isActive(link.href);
                    return (
                      <Link
                        key={link.label}
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className={`flex items-center justify-between px-4 py-3 rounded-2xl text-[15px] font-medium transition-colors ${active
                          ? "bg-blue-50/80 text-blue-600 font-semibold"
                          : "text-slate-800 hover:bg-white/50"
                          }`}
                      >
                        <span>{link.label}</span>
                        {link.dropdown && <ChevronDown />}
                      </Link>
                    );
                  })}
                </nav>

                <div className="my-2 h-px bg-slate-900/10" />

                <div className="flex flex-col gap-1.5 px-1 pb-1">
                  <Link
                    href="/signin"
                    onClick={() => setMobileOpen(false)}
                    className="px-4 py-3 rounded-2xl text-center text-[15px] font-semibold text-slate-800 hover:bg-white/50 transition-colors"
                  >
                    Sign in
                  </Link>
                  <Link
                    href="/signup"
                    onClick={() => setMobileOpen(false)}
                    className="
                      inline-flex items-center justify-center gap-2
                      px-4 py-3 rounded-full
                      text-white text-[14px] font-semibold
                      bg-slate-950/90
                      shadow-[0_1px_0_rgba(255,255,255,0.2)_inset,0_4px_12px_-2px_rgba(15,23,42,0.4)]
                      hover:bg-slate-800
                      transition-all
                    "
                  >
                    <span>Get started</span>
                    <ArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Backdrop — ONLY rendered when the menu is open.
          Conditionally mounting prevents the "invisible overlay blocks taps"
          issue entirely. */}
      {mobileOpen && (
        <div
          aria-hidden="true"
          onClick={() => setMobileOpen(false)}
          className="md:hidden fixed inset-0 z-40 bg-slate-900/20 backdrop-blur-sm animate-cookie-fade"
        />
      )}
    </>
  );
}