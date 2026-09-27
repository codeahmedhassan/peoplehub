"use client";

import { SETUP_INVITE_MAX, SETUP_ROLES, type TeamRole } from "@/lib/constants";

export type Invite = {
    id: string;
    email: string;
    role: TeamRole;
};

type Props = {
    invites: Invite[];
    onChange: (next: Invite[]) => void;
};

const inputClass =
    "w-full px-3 py-2.5 rounded-xl bg-white/70 backdrop-blur-md border border-white/70 ring-1 ring-slate-900/5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100/60 transition-all";

const selectClass = `${inputClass} appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%2394a3b8%22 stroke-width=%222%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22><polyline points=%226 9 12 15 18 9%22/></svg>')] bg-[length:14px_14px] bg-[right_0.75rem_center] bg-no-repeat pr-8`;

function newInvite(): Invite {
    return {
        id: Math.random().toString(36).slice(2, 10),
        email: "",
        role: "member",
    };
}

export default function StepInviteTeam({ invites, onChange }: Props) {
    function updateInvite(id: string, patch: Partial<Invite>) {
        onChange(invites.map((inv) => (inv.id === id ? { ...inv, ...patch } : inv)));
    }

    function removeInvite(id: string) {
        onChange(invites.filter((inv) => inv.id !== id));
    }

    function addInvite() {
        if (invites.length >= SETUP_INVITE_MAX) return;
        onChange([...invites, newInvite()]);
    }

    const canAdd = invites.length < SETUP_INVITE_MAX;

    return (
        <div className="space-y-5">
            <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                    Invite your teammates.
                </h1>
                <p className="mt-2 text-sm text-slate-600">
                    Optional — you can skip this and add people later. Invites are sent when you
                    finish setup.
                </p>
            </div>

            {/* Invite rows */}
            {invites.length > 0 ? (
                <div className="space-y-3">
                    {invites.map((invite, index) => (
                        <div
                            key={invite.id}
                            className="p-3 rounded-2xl border border-slate-200/90 bg-white/60 backdrop-blur-sm"
                        >
                            <div className="flex flex-col sm:flex-row gap-2.5">
                                {/* Email */}
                                <div className="flex-1 min-w-0">
                                    <label
                                        htmlFor={`invite-${invite.id}`}
                                        className="sr-only"
                                    >
                                        Email for invite {index + 1}
                                    </label>
                                    <input
                                        id={`invite-${invite.id}`}
                                        type="email"
                                        placeholder="teammate@company.com"
                                        value={invite.email}
                                        onChange={(e) =>
                                            updateInvite(invite.id, { email: e.target.value })
                                        }
                                        className={inputClass}
                                    />
                                </div>

                                {/* Role */}
                                <div className="sm:w-40 shrink-0">
                                    <label
                                        htmlFor={`role-${invite.id}`}
                                        className="sr-only"
                                    >
                                        Role for invite {index + 1}
                                    </label>
                                    <select
                                        id={`role-${invite.id}`}
                                        value={invite.role}
                                        onChange={(e) =>
                                            updateInvite(invite.id, { role: e.target.value as TeamRole })
                                        }
                                        className={selectClass}
                                    >
                                        {SETUP_ROLES.map((role) => (
                                            <option key={role.id} value={role.id}>
                                                {role.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Remove */}
                                <button
                                    type="button"
                                    onClick={() => removeInvite(invite.id)}
                                    aria-label={`Remove invite ${index + 1}`}
                                    className="w-full sm:w-10 h-10 sm:h-10 shrink-0 rounded-xl border border-slate-200 bg-white text-slate-400 hover:text-rose-600 hover:border-rose-200 hover:bg-rose-50 transition-colors flex items-center justify-center"
                                >
                                    <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path
                                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M1 7h22M9 7V4a1 1 0 011-1h4a1 1 0 011 1v3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="p-5 rounded-2xl border border-dashed border-slate-300 bg-slate-50/40 text-center">
                    <p className="text-sm text-slate-500">
                        No teammates added yet — add someone below or skip this step.
                    </p>
                </div>
            )}

            {/* Add button */}
            <button
                type="button"
                onClick={addInvite}
                disabled={!canAdd}
                className={`
          w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full
          text-sm font-semibold transition-all
          ${canAdd
                        ? "border border-dashed border-blue-300 text-blue-600 hover:bg-blue-50/60"
                        : "border border-slate-200 text-slate-400 cursor-not-allowed"
                    }
        `}
            >
                <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                >
                    <path
                        d="M12 4v16m8-8H4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                    />
                </svg>
                <span>
                    {canAdd
                        ? `Add another invite (${invites.length}/${SETUP_INVITE_MAX})`
                        : `Maximum ${SETUP_INVITE_MAX} invites reached`}
                </span>
            </button>

            {/* Role legend */}
            <details className="group rounded-2xl border border-slate-200/90 bg-white/60 p-4">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                    <span className="text-xs font-semibold text-slate-700">
                        What do these roles mean?
                    </span>
                    <svg
                        className="w-3.5 h-3.5 text-slate-400 group-open:rotate-180 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                    >
                        <path
                            d="M19 9l-7 7-7-7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                        />
                    </svg>
                </summary>
                <ul className="mt-3 space-y-2.5">
                    {SETUP_ROLES.map((role) => (
                        <li key={role.id} className="flex items-start gap-2.5">
                            <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-blue-100/70 text-blue-700 text-[10px] font-bold shrink-0 mt-0.5">
                                {role.label}
                            </span>
                            <span className="text-[11px] text-slate-500 leading-relaxed">
                                {role.description}
                            </span>
                        </li>
                    ))}
                </ul>
            </details>
        </div>
    );
}