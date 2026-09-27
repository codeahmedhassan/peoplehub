"use client";

import { useEffect, useRef, useState } from "react";
import { OTP_LENGTH } from "@/lib/constants";

type Props = {
    length?: number;
    disabled?: boolean;
    error?: boolean;
    success?: boolean;
    autoSubmit?: boolean;
    onComplete: (code: string) => void;
    onChange?: (code: string) => void;
};

export default function OtpInput({
    length = OTP_LENGTH,
    disabled = false,
    error = false,
    success = false,
    autoSubmit = true,
    onComplete,
    onChange,
}: Props) {
    const [values, setValues] = useState<string[]>(Array(length).fill(""));
    const refs = useRef<Array<HTMLInputElement | null>>([]);

    // Focus first input on mount
    useEffect(() => {
        if (!disabled) refs.current[0]?.focus();
    }, [disabled]);

    // Reset when disabled toggles off (e.g., after error)
    useEffect(() => {
        if (!disabled && !error && !success) return;
    }, [disabled, error, success]);

    function commit(next: string[]) {
        setValues(next);
        const joined = next.join("");
        onChange?.(joined);
        if (autoSubmit && joined.length === length && next.every((v) => v !== "")) {
            onComplete(joined);
        }
    }

    function handleChange(index: number, raw: string) {
        // Only digits
        const digit = raw.replace(/\D/g, "").slice(-1);
        if (!digit) return;

        const next = [...values];
        next[index] = digit;
        commit(next);

        // Auto-advance
        if (index < length - 1) {
            refs.current[index + 1]?.focus();
        }
    }

    function handleKeyDown(
        index: number,
        e: React.KeyboardEvent<HTMLInputElement>
    ) {
        // Backspace
        if (e.key === "Backspace") {
            e.preventDefault();
            const next = [...values];
            if (next[index]) {
                next[index] = "";
                commit(next);
            } else if (index > 0) {
                next[index - 1] = "";
                commit(next);
                refs.current[index - 1]?.focus();
            }
            return;
        }

        // Arrow navigation
        if (e.key === "ArrowLeft" && index > 0) {
            e.preventDefault();
            refs.current[index - 1]?.focus();
        }
        if (e.key === "ArrowRight" && index < length - 1) {
            e.preventDefault();
            refs.current[index + 1]?.focus();
        }

        // Home / End
        if (e.key === "Home") {
            e.preventDefault();
            refs.current[0]?.focus();
        }
        if (e.key === "End") {
            e.preventDefault();
            refs.current[length - 1]?.focus();
        }
    }

    function handlePaste(e: React.ClipboardEvent<HTMLInputElement>) {
        e.preventDefault();
        const pasted = e.clipboardData
            .getData("text")
            .replace(/\D/g, "")
            .slice(0, length);
        if (!pasted) return;

        const next = Array(length)
            .fill("")
            .map((_, i) => pasted[i] ?? "");
        commit(next);

        // Focus the last filled input (or the next empty one)
        const lastFilled = Math.min(pasted.length, length - 1);
        refs.current[lastFilled]?.focus();
    }

    function handleFocus(e: React.FocusEvent<HTMLInputElement>) {
        e.target.select();
    }

    return (
        <div
            role="group"
            aria-label="Verification code"
            className={`grid grid-cols-6 gap-2 sm:gap-3 ${error ? "animate-otp-shake" : ""
                }`}
        >
            {Array.from({ length }).map((_, i) => {
                const filled = values[i] !== "";
                return (
                    <div key={i} className="relative">
                        {/* Liquid-glass backdrop for each cell */}
                        <div
                            aria-hidden="true"
                            className="absolute inset-0 rounded-2xl overflow-hidden"
                        >
                            <div
                                className="absolute inset-0 rounded-2xl"
                                style={{
                                    backdropFilter:
                                        "url(#liquid-glass-distortion) blur(2px) saturate(1.4)",
                                    WebkitBackdropFilter: "blur(14px) saturate(1.4)",
                                }}
                            />
                            <div className="absolute inset-0 rounded-2xl bg-white/70" />
                        </div>

                        {/* The actual input */}
                        <input
                            ref={(el) => {
                                refs.current[i] = el;
                            }}
                            type="text"
                            inputMode="numeric"
                            pattern="[0-9]*"
                            maxLength={1}
                            autoComplete={i === 0 ? "one-time-code" : "off"}
                            aria-label={`Digit ${i + 1} of ${length}`}
                            disabled={disabled}
                            value={values[i]}
                            onChange={(e) => handleChange(i, e.target.value)}
                            onKeyDown={(e) => handleKeyDown(i, e)}
                            onPaste={handlePaste}
                            onFocus={handleFocus}
                            className={`
                relative w-full aspect-square rounded-2xl text-center text-xl sm:text-2xl font-bold text-slate-900
                bg-transparent
                border
                transition-all duration-200
                focus:outline-none
                disabled:opacity-60 disabled:cursor-not-allowed
                ${error
                                    ? "border-rose-300 ring-2 ring-rose-100"
                                    : success
                                        ? "border-emerald-300 ring-2 ring-emerald-100 bg-emerald-50/40"
                                        : filled
                                            ? "border-blue-300 ring-2 ring-blue-100"
                                            : "border-white/70 ring-1 ring-slate-900/5"
                                }
                focus:border-blue-400 focus:ring-2 focus:ring-blue-100
                caret-transparent
              `}
                            style={{
                                // Slight scale-up when the cell contains a digit
                                transform: filled ? "scale(1.02)" : "scale(1)",
                                transition: "transform 150ms ease, border-color 150ms ease",
                            }}
                        />
                    </div>
                );
            })}
        </div>
    );
}