import Image from "next/image";
import {
  DASHBOARD_SIDEBAR,
  DASHBOARD_STATS,
  GROWTH_CHART,
  DEPARTMENT_DATA,
} from "@/lib/constants";

/* ---------- Small icon primitives ---------- */

function SidebarIcon({ name }: { name: string }) {
  const paths: Record<string, React.ReactNode> = {
    grid: (
      <path
        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    ),
    users: (
      <path
        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    ),
    clock: (
      <path
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    ),
    calendar: (
      <path
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    ),
    wallet: (
      <path
        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    ),
    "user-plus": (
      <path
        d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    ),
    bolt: (
      <path
        d="M13 10V3L4 14h7v7l9-11h-7z"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    ),
    chart: (
      <path
        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    ),
    cog: (
      <>
        <path
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
        <path
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
      </>
    ),
  };

  return (
    <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

/* ---------- Trend badge color map ---------- */

const trendColors: Record<string, string> = {
  emerald: "text-emerald-600 bg-emerald-50",
  rose: "text-rose-500 bg-rose-50",
  blue: "text-blue-600 bg-blue-50",
};

/* ---------- Component ---------- */

export default function HeroDashboard() {
  return (
    <div className="lg:col-span-7 relative mt-12 lg:mt-0">
      {/* Handwritten top annotation — hidden on small screens */}
      <div className="hidden xl:block absolute -top-8 right-6 z-20 text-blue-600 font-handwriting text-xl rotate-6 pointer-events-none select-none">
        <span className="block text-center leading-tight">
          Better
          <br />
          Teams
          <br />
          Brighter
          <br />
          Tomorrows
        </span>
        <svg
          className="w-12 h-10 ml-auto -mt-1 text-blue-500 rotate-12"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 60 40"
          aria-hidden="true"
        >
          <path
            d="M10,5 C30,5 45,25 25,35 M25,35 L35,32 M25,35 L28,24"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Dashboard mockup */}
      <div className="dashboard-perspective bg-white rounded-2xl border border-slate-200/90 shadow-dashboard overflow-hidden">
        {/* Dashboard header */}
        <div className="h-12 sm:h-14 border-b border-slate-100 flex items-center justify-between px-3 sm:px-5 bg-white gap-2">
          <div className="flex items-center gap-3 sm:gap-6 min-w-0">
            <div className="flex items-center gap-2 shrink-0">
              <Image
                alt="Logo"
                className="w-5 h-5 object-contain"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGJqs_gWKvdH2pBvtoZfm9eoeRoQD2Y4ULsXN-V8Mfjm5rciveCR9Tys1OhXOFGzyvFtWurWdRV2xLK5bnBDm0dfsE9hn-WytElhd_dfmccmTGn9xFgvtyad_BatPZTlWJsexzuLBOe4erwG9fGnP8_2l0M4b6CLqBxXc436PaIlS0aM16MCaz12EDQl_SVemDIGuPf3QykgYqMm_Vo9su207O9HoT1OLJE072tWrkIxU-HHmPbvf0jN3d1Vx3rAN-jfs"
                width={20}
                height={20}
                unoptimized
              />
              <span className="text-xs font-bold tracking-tight text-slate-800 xs:inline">
                PeopleHub
              </span>
            </div>
            {/* Search hidden on mobile, shows from sm up */}
            <div className="relative hidden md:block">
              <svg
                className="w-3.5 h-3.5 absolute left-3 top-2.5 text-slate-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              </svg>
              <input
                className="pl-8 pr-3 py-1.5 text-xs bg-slate-50 rounded-lg border-0 text-slate-600 w-40 lg:w-56 placeholder-slate-400 focus:ring-1 focus:ring-blue-500"
                placeholder="Search employees, departments..."
                readOnly
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button type="button" className="text-slate-400 hover:text-slate-600" aria-label="Notifications">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              </svg>
            </button>
            <div className="flex items-center gap-2 pl-2 border-l border-slate-100">
              <Image
                alt="Ahmed"
                className="w-6 h-6 rounded-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiSa3If68xC1bRLoPoJyq_cLf8jqpYvme_tfH0H9YEgHNXweSAdC7itTLgqi9KrNCHVdOD6mQ0XurXcre3JEoGSwV9_d05RIIm5PMANS1rSFQ835-JTviSZi31YYMTM30ADA5O1nCz1-G20ThW1Thq2p023FZtuOxrnh75pmwKxLKg76Dnpgte8sujKEJAAS5lmjN_53ivoSinqidxENamgN1kMkS8eCbmc2wPxdJ_fk5hx24kIN528w"
                width={24}
                height={24}
                unoptimized
              />
              <div className="text-left text-[11px] leading-tight hidden lg:block">
                <p className="font-bold text-slate-800">Ahmed</p>
                <p className="text-[9px] text-slate-400 font-medium">Admin</p>
              </div>
              <svg className="w-3 h-3 text-slate-400 hidden sm:block" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
              </svg>
            </div>
          </div>
        </div>

        {/* Body — sidebar collapses on mobile, stays side-by-side from md up */}
        <div className="grid grid-cols-1 md:grid-cols-12 md:min-h-95">
          {/* Sidebar — horizontal scroll strip on mobile, vertical sidebar from md up */}
          <aside className="md:col-span-3 border-b md:border-b-0 md:border-r border-slate-100 p-2 sm:p-3 bg-slate-50/50 text-[11px]">
            {/* Mobile: horizontal scroll strip */}
            <div className="flex md:hidden items-center gap-1.5 overflow-x-auto scrollbar-hide pb-1">
              {DASHBOARD_SIDEBAR.map((item) => (
                <div
                  key={item.label}
                  className={
                    item.active
                      ? "flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-blue-50 text-blue-700 font-semibold whitespace-nowrap shrink-0"
                      : "flex items-center gap-1.5 px-2.5 py-1.5 text-slate-600 hover:bg-slate-100 rounded-lg whitespace-nowrap shrink-0"
                  }
                >
                  <SidebarIcon name={item.icon} />
                  <span className="text-[10px]">{item.label}</span>
                </div>
              ))}
            </div>

            {/* Desktop: vertical list */}
            <div className="hidden md:block space-y-1">
              {DASHBOARD_SIDEBAR.map((item) => (
                <div
                  key={item.label}
                  className={
                    item.active
                      ? "flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-blue-50 text-blue-700 font-semibold"
                      : "flex items-center gap-2 px-2.5 py-1.5 text-slate-600 hover:bg-slate-100 rounded-lg"
                  }
                >
                  <SidebarIcon name={item.icon} />
                  {item.label}
                </div>
              ))}
            </div>
          </aside>

          {/* Main */}
          <main className="md:col-span-9 p-3 sm:p-4 bg-slate-50/20">
            <div className="flex items-start sm:items-center justify-between mb-3 gap-2">
              <div className="min-w-0">
                <h2 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                  Good morning, Ahmed <span className="text-sm">👋</span>
                </h2>
                <p className="text-[10px] text-slate-500">
                  Here&apos;s what&apos;s happening at your company today.
                </p>
              </div>
              <div className="text-[10px] text-slate-400 flex items-center gap-1 shrink-0">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  />
                </svg>
                <span className="hidden sm:inline">Tue, Apr 22, 2025</span>
              </div>
            </div>

            {/* Stats — 2 cols on mobile, 4 cols from sm up */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
              {DASHBOARD_STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white p-2.5 rounded-xl border border-slate-100 shadow-sm"
                >
                  <p className="text-[9px] text-slate-400 font-medium truncate">{stat.label}</p>
                  <p className="text-sm sm:text-base font-bold text-slate-900 mt-0.5">{stat.value}</p>
                  <span
                    className={`inline-block mt-1 text-[8px] font-semibold px-1.5 py-0.5 rounded ${trendColors[stat.trendColor]}`}
                  >
                    {stat.trend}
                  </span>
                </div>
              ))}
            </div>

            {/* Charts — stack on mobile, 7/5 split from sm up */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-2">
              {/* Bar chart */}
              <div className="sm:col-span-7 bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold text-slate-800">Employee Growth</span>
                  <span className="text-[8px] text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded border border-slate-100 whitespace-nowrap">
                    Last 6 months ▾
                  </span>
                </div>
                <div className="h-24 flex items-end justify-between px-1 sm:px-2 pt-4 gap-1">
                  {GROWTH_CHART.map((bar) => (
                    <div key={bar.month} className="flex flex-col items-center gap-1 flex-1 min-w-0">
                      <div
                        className={`w-3 sm:w-3.5 rounded-t-sm ${bar.color}`}
                        style={{ height: `${bar.height}px` }}
                      />
                      <span className="text-[8px] text-slate-400">{bar.month}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Donut chart */}
              <div className="sm:col-span-5 bg-white p-3 rounded-xl border border-slate-100 shadow-sm flex flex-col justify-between">
                <span className="text-[10px] font-bold text-slate-800">Department Distribution</span>
                <div className="flex items-center justify-between gap-3 sm:gap-2 mt-2">
                  <div className="relative w-16 h-16 sm:w-16 sm:h-16 flex items-center justify-center shrink-0">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36" aria-hidden="true">
                      {DEPARTMENT_DATA.map((seg) => (
                        <circle
                          key={seg.name}
                          cx="18"
                          cy="18"
                          fill="transparent"
                          r="14"
                          stroke={seg.color}
                          strokeDasharray={seg.dasharray}
                          strokeDashoffset={seg.offset}
                          strokeWidth={5}
                        />
                      ))}
                    </svg>
                  </div>
                  <div className="text-[8px] space-y-0.5 text-slate-500 min-w-0 flex-1">
                    {DEPARTMENT_DATA.map((seg) => (
                      <div key={seg.name} className="flex items-center gap-1">
                        <span
                          className="w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ backgroundColor: seg.color }}
                        />
                        <span className="truncate">
                          {seg.name} {seg.percent}%
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Handwritten bottom annotation — hidden below xl */}
      <div className="hidden xl:flex absolute -bottom-8 right-2 items-center gap-2 text-slate-700 pointer-events-none select-none">
        <span className="text-[10px] font-bold tracking-wider text-slate-600 uppercase">
          BUILT FOR MODERN COMPANIES
        </span>
        <svg
          className="w-9 h-7 text-blue-500"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.8}
          viewBox="0 0 40 30"
          aria-hidden="true"
        >
          <path
            d="M5,22 C18,22 28,12 25,5 C23,0 12,5 20,20 C24,25 35,22 38,18"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}