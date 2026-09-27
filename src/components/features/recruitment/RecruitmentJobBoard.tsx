import { RECRUITMENT_JOB_BOARDS } from "@/lib/constants";

export default function RecruitmentJobBoard() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-14">
                <div className="max-w-lg">
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wide bg-rose-100/70 text-rose-700 mb-3">
                        Distribution
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-tight">
                        Post once.
                        <br className="hidden sm:block" />{" "}
                        <span className="text-rose-600">Reach everyone.</span>
                    </h2>
                </div>
                <p className="text-sm sm:text-base text-slate-600 max-w-md leading-relaxed">
                    Your job goes live on 20+ boards in one click. Every applicant lands in
                    one pipeline — with source tracking built in.
                </p>
            </div>

            {/* Grid of boards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                {RECRUITMENT_JOB_BOARDS.map((board) => (
                    <div
                        key={board}
                        className="flex items-center gap-3 p-4 rounded-2xl border border-slate-100 bg-white hover:border-rose-100 hover:shadow-card-soft transition-all duration-300"
                    >
                        <div className="w-9 h-9 rounded-lg bg-rose-50 text-rose-500 flex items-center justify-center font-extrabold text-xs shrink-0">
                            {board.charAt(0)}
                        </div>
                        <p className="text-sm font-bold text-slate-900 truncate">{board}</p>
                    </div>
                ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                <span className="text-xs text-slate-500">…and 15+ more boards</span>
                <a
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-900 hover:text-rose-600 transition-colors"
                >
                    Request a board
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                    </svg>
                </a>
            </div>
        </section>
    );
}