"use client";

import {
    PASSWORD_STRENGTH_LABELS,
    PASSWORD_STRENGTH_COLORS,
    type PasswordStrength as Strength,
} from "@/lib/constants";

export function scorePassword(password: string): Strength {
    if (!password) return "weak";
    let score = 0;
    if (password.length >= 8) score++;
    if (password.length >= 12) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;
    if (score <= 1) return "weak";
    if (score === 2) return "fair";
    if (score === 3 || score === 4) return "good";
    return "strong";
}

export default function PasswordStrength({ value }: { value: string }) {
    const strength = scorePassword(value);
    const colors = PASSWORD_STRENGTH_COLORS[strength];
    const fill =
        strength === "weak"
            ? "w-1/4"
            : strength === "fair"
                ? "w-2/4"
                : strength === "good"
                    ? "w-3/4"
                    : "w-full";

    // Rule checks for the hint list
    const rules = [
        { label: "At least 8 characters", ok: value.length >= 8 },
        { label: "One uppercase letter", ok: /[A-Z]/.test(value) },
        { label: "One number", ok: /[0-9]/.test(value) },
        { label: "One special character", ok: /[^A-Za-z0-9]/.test(value) },
    ];

    return (
        <div className="mt-2.5 space-y-2">
            {/* Meter */}
            <div className="flex items-center gap-2.5">
                <div className="flex-1 h-1.5 rounded-full bg-slate-200/70 overflow-hidden">
                    <div
                        className={`h-full rounded-full ${colors.bar} ${fill} transition-all duration-300`}
                    />
                </div>
                <span
                    className={`text-[11px] font-semibold ${colors.text} transition-colors w-16 text-right`}
                >
                    {value ? PASSWORD_STRENGTH_LABELS[strength] : ""}
                </span>
            </div>

            {/* Rules — only shown when the user is typing */}
            {value && strength !== "strong" && (
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
                    {rules.map((rule) => (
                        <li
                            key={rule.label}
                            className={`flex items-center gap-1.5 text-[11px] transition-colors ${rule.ok ? "text-emerald-600" : "text-slate-400"
                                }`}
                        >
                            {rule.ok ? (
                                <svg className="w-3 h-3 shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                    <path
                                        clipRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        fillRule="evenodd"
                                    />
                                </svg>
                            ) : (
                                <svg className="w-3 h-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <circle cx="12" cy="12" r="9" strokeWidth={2} />
                                </svg>
                            )}
                            {rule.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}