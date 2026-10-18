// src/lib/api.ts

import { WorkspacePayload, WorkspaceResponse } from "./constants";

const API_BASE_URL =
    process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "") ||
    "http://localhost:3000/api/v1";

export class ApiError extends Error {
    status: number;
    errors: { field: string; message: string }[];

    constructor(
        status: number,
        message: string,
        errors: { field: string; message: string }[] = []
    ) {
        super(message);
        this.name = "ApiError";
        this.status = status;
        this.errors = errors;
    }
}

type ApiFetchOptions = Omit<RequestInit, "body"> & {
    body?: unknown;
};

export async function apiFetch<T = unknown>(
    path: string,
    options: ApiFetchOptions = {}
): Promise<T> {
    const { body, headers, ...rest } = options;
    const url = `${API_BASE_URL}${path}`;

    // Visible in DevTools → Network → click request → Console.
    // Comment out or remove these once the flow is stable.
    console.log(`[apiFetch] → ${rest.method ?? "GET"} ${url}`, {
        body,
    });

    let res: Response;
    try {
        res = await fetch(url, {
            ...rest,
            credentials: "include", // sends & receives HttpOnly cookies
            headers: {
                "Content-Type": "application/json",
                ...(headers || {}),
            },
            body: body !== undefined ? JSON.stringify(body) : undefined,
        });
    } catch (networkErr) {
        console.error(`[apiFetch] ✖ network error for ${url}`, networkErr);
        throw new ApiError(
            0,
            "Cannot reach the server. Is the API running?"
        );
    }

    let data: any = null;
    const text = await res.text();
    if (text) {
        try {
            data = JSON.parse(text);
        } catch {
            data = { message: text };
        }
    }

    console.log(`[apiFetch] ← ${res.status} ${url}`, data);

    if (!res.ok) {
        throw new ApiError(
            res.status,
            data?.message || `Request failed with status ${res.status}`,
            data?.errors || []
        );
    }

    // Backend wraps success responses in { success, message, data }
    return (data?.data ?? data) as T;
}

export const workspaceApi = {
    setup: (payload: WorkspacePayload) =>
        apiFetch<{ workspace: WorkspaceResponse }>("/workspace/setup", {
            method: "POST",
            body: payload,
        }),

    me: () =>
        apiFetch<{ workspace: WorkspaceResponse | null }>("/workspace/me", {
            method: "GET",
        }),
};

// -------------------------------------------------------------------
// Auth API
// -------------------------------------------------------------------

export type AuthUser = {
    id: string;
    fullName: string;
    email: string;
    company?: string;
    companySize?: string;
    role?: string;
    status?: string;
    emailVerified: boolean;
    setupCompletedAt: string | null;
    createdAt: string;
};

export type LoginPayload = {
    email: string;
    password: string;
    rememberMe: boolean;
};

export const authApi = {
    login: (payload: LoginPayload) =>
        apiFetch<{ user: AuthUser; requiresVerification?: boolean }>(
            "/auth/login",
            { method: "POST", body: payload }
        ),
};