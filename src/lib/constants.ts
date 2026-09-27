/* ============================================================
   HOME PAGE DATA
   ============================================================ */

/* ---------- Navbar links ---------- */
export const NAV_LINKS = [
    { label: "Features", dropdown: false, href: "/features" },
    { label: "Pricing", dropdown: false, href: "/pricing" },
    { label: "About", dropdown: false, href: "/about" },
    { label: "Contact", dropdown: false, href: "/contact" },
] as const;

/* ---------- Trust Badges ---------- */
export const TRUST_BADGES = [
    "No credit card required",
    "14-day free trial",
    "Cancel anytime",
] as const;

/* ---------- Trusted Companies ---------- */
export const TRUSTED_COMPANIES = [
    "Stripe",
    "Slack",
    "Notion",
    "Shopify",
    "Linear",
    "Vercel",
    "Figma",
    "Webflow",
] as const;

/* ---------- Features ---------- */
export type Feature = {
    title: string;
    description: string;
    color: "blue" | "emerald" | "purple" | "rose" | "amber" | "cyan";
    icon: "team" | "calendar" | "payroll" | "recruitment" | "performance" | "analytics";
};

export const FEATURES: Feature[] = [
    {
        title: "Employee Management",
        description: "Keep all employee information organized and accessible.",
        color: "blue",
        icon: "team",
    },
    {
        title: "Attendance & Leave",
        description: "Track attendance, manage leave requests, and set policies.",
        color: "emerald",
        icon: "calendar",
    },
    {
        title: "Payroll",
        description: "Automate payroll with accuracy and compliance.",
        color: "purple",
        icon: "payroll",
    },
    {
        title: "Recruitment",
        description: "Streamline hiring from job posting to onboarding.",
        color: "rose",
        icon: "recruitment",
    },
    {
        title: "Performance",
        description: "Set goals, run reviews, and help your team grow.",
        color: "amber",
        icon: "performance",
    },
    {
        title: "Reports & Analytics",
        description: "Get real insights to make better decisions.",
        color: "cyan",
        icon: "analytics",
    },
];

/* ---------- Dashboard sidebar ---------- */
export const DASHBOARD_SIDEBAR = [
    { label: "Overview", icon: "grid", active: true },
    { label: "Employees", icon: "users", active: false },
    { label: "Attendance", icon: "clock", active: false },
    { label: "Leave", icon: "calendar", active: false },
    { label: "Payroll", icon: "wallet", active: false },
    { label: "Recruitment", icon: "user-plus", active: false },
    { label: "Performance", icon: "bolt", active: false },
    { label: "Reports", icon: "chart", active: false },
    { label: "Settings", icon: "cog", active: false },
] as const;

/* ---------- Dashboard stats ---------- */
export const DASHBOARD_STATS = [
    { label: "Total Employees", value: "248", trend: "+12% from last month", trendColor: "emerald" },
    { label: "On Leave", value: "12", trend: "↓ 2% from last month", trendColor: "rose" },
    { label: "New Hires", value: "8", trend: "+33% from last month", trendColor: "emerald" },
    { label: "Open Positions", value: "5", trend: "+2 this week", trendColor: "blue" },
] as const;

/* ---------- Growth chart ---------- */
export const GROWTH_CHART = [
    { month: "Jan", height: 35, color: "bg-blue-100" },
    { month: "Feb", height: 48, color: "bg-blue-200" },
    { month: "Mar", height: 58, color: "bg-blue-300" },
    { month: "Apr", height: 64, color: "bg-blue-400" },
    { month: "May", height: 72, color: "bg-blue-500" },
    { month: "Jun", height: 82, color: "bg-blue-600" },
] as const;

/* ---------- Department data ---------- */
export const DEPARTMENT_DATA = [
    { name: "Engineering", percent: 35, color: "#3b82f6", dasharray: "35 65", offset: 0 },
    { name: "Design", percent: 20, color: "#06b6d4", dasharray: "20 80", offset: -35 },
    { name: "Marketing", percent: 18, color: "#10b981", dasharray: "18 82", offset: -55 },
    { name: "Sales", percent: 15, color: "#f59e0b", dasharray: "15 85", offset: -73 },
    { name: "Others", percent: 12, color: "#8b5cf6", dasharray: "12 88", offset: -88 },
] as const;

/* ---------- How it works ---------- */
export const HOW_IT_WORKS_STEPS = [
    {
        step: "01",
        title: "Create your workspace",
        description:
            "Sign up in seconds and set up your company profile. No credit card, no setup fees.",
        icon: "workspace" as const,
    },
    {
        step: "02",
        title: "Import your people",
        description:
            "Upload employees via CSV or connect your existing HR tools. Everything syncs in real time.",
        icon: "import" as const,
    },
    {
        step: "03",
        title: "Automate & grow",
        description:
            "Run payroll, track leave, and manage performance — all from one clean dashboard.",
        icon: "growth" as const,
    },
];

/* ---------- Stats strip ---------- */
export const STATS = [
    { value: "10,000+", label: "Companies onboarded" },
    { value: "1.2M+", label: "Employees managed" },
    { value: "99.9%", label: "Uptime guarantee" },
    { value: "4.9/5", label: "Average customer rating" },
] as const;

/* ---------- Pricing ---------- */
export type PricingPlan = {
    name: string;
    price: string;
    period: string;
    description: string;
    features: string[];
    cta: string;
    highlighted: boolean;
};

export const PRICING_PLANS: PricingPlan[] = [
    {
        name: "Starter",
        price: "$6",
        period: "/ user / month",
        description: "For small teams just getting started with structured HR.",
        features: [
            "Up to 25 employees",
            "Employee records & directory",
            "Attendance & leave tracking",
            "Basic reports",
            "Email support",
        ],
        cta: "Start free trial",
        highlighted: false,
    },
    {
        name: "Growth",
        price: "$12",
        period: "/ user / month",
        description: "For growing companies that need automation and insights.",
        features: [
            "Up to 250 employees",
            "Everything in Starter",
            "Payroll & compliance",
            "Recruitment pipeline",
            "Performance reviews",
            "Priority support",
        ],
        cta: "Start free trial",
        highlighted: true,
    },
    {
        name: "Enterprise",
        price: "Custom",
        period: "tailored to you",
        description: "For large organizations with advanced security and scale.",
        features: [
            "Unlimited employees",
            "Everything in Growth",
            "SSO & advanced security",
            "Custom integrations & API",
            "Dedicated success manager",
            "SLA & audit logs",
        ],
        cta: "Talk to sales",
        highlighted: false,
    },
];

/* ---------- Testimonials ---------- */
export const TESTIMONIALS = [
    {
        quote:
            "PeopleHub replaced four different tools for us. Payroll that used to take days now takes minutes.",
        name: "Sarah Chen",
        role: "Head of People, Northwind",
        avatar:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuB5Y0ZB9ZdnDX4m3iwh1UuvBRcLPFTn3hZ6OtWEGH8UtiMlxKLnOejIJelpfS9M7InUNZ9SG0mwiXVMPlWgPXHiUoLLYk7tKURg8-VXK673yh0ejSzhi7WriW4_lqqXeXJ322VhKI5wLS2BCrzGhSXBM9FG-u9sbpHo1cb_zNJSE43CC9kMmlVT_6D1pDJnu8CMDWOOaXz6ZABBpbuvDorI8YK08L72vLrGH0ruKPmDwaGfCN1aTUSzSQ",
    },
    {
        quote:
            "The cleanest HR platform we've used. Our team actually enjoys logging in, which says a lot.",
        name: "Marcus Alvarez",
        role: "COO, Bright Labs",
        avatar:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDo5DF3fumwayqLw09Zpk9b5C-hWzfyJj3dDXMKbWYVOkeB-Osz9L5vIHM_8SX3laU-2n1QotWSXOOYdg_jCxsoHhHUci3aQGjInGx8MIE2cGmEysAdllEGvNHDERbuG5IVeXghL_g_BjlU8ERlp8QFcBAakwK3-Nm3RhjBbc59Ax5xYcScQ5Qkl7XgJxHqpQNVw_xjN6kMWZxy1ASYBpYFMeLpfNgsUdyDmw45Av30Hp44hURaZhOy4Q",
    },
    {
        quote:
            "Onboarding new hires used to be chaos. Now it's a single flow — and compliance is handled automatically.",
        name: "Priya Nair",
        role: "HR Director, Vertex",
        avatar:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuA4pyoWMAakt7ztD3PsWmSlZ7Kckc3yOV2ZKIzlFrW-xpY4YKFkA3YDNazG-tNAsWe9VJxoLQzKRZQF9ZxgK2TJcpDF7v1tXUfxxp6OnEa6i9lzwt0dyS8LaAXEn_T6u3Pd827oiFN9JcgUfYt2l9FW3S-xcVSTgJj2iswKGXLraoce5memCNHwfknpLimxJpzKUTHjJrG0UXgmb0KK-o8wLYGcknp384uAa3xywFYcwCJwfU8dKowfTg",
    },
] as const;

/* ---------- FAQ ---------- */
export const FAQS = [
    {
        question: "How long does setup take?",
        answer:
            "Most teams are fully up and running in under a day. You can import employees via CSV, connect existing HR tools, and start managing leave and payroll immediately.",
    },
    {
        question: "Is my data secure?",
        answer:
            "Yes. We're SOC 2 Type II compliant, encrypt data at rest and in transit, and support SSO, 2FA, and granular role-based permissions on Enterprise plans.",
    },
    {
        question: "Can I migrate from my current HR system?",
        answer:
            "Absolutely. We provide free migration assistance for Growth and Enterprise plans, including data mapping, import validation, and post-migration support.",
    },
    {
        question: "Do you offer a free trial?",
        answer:
            "Yes — every plan includes a 14-day free trial. No credit card required, and you can cancel anytime.",
    },
    {
        question: "What happens if I outgrow my plan?",
        answer:
            "You can upgrade at any time. Your data, settings, and integrations carry over instantly, and we'll prorate the difference.",
    },
] as const;



/* ============================================================
   PRICING PAGE DATA
   ============================================================ */

/* ---------- Billing Cycles ---------- */
export type BillingCycle = "monthly" | "yearly";

/* ---------- Pricing Features ---------- */
export type PricingFeature = {
    label: string;
    included: boolean;
};

/* ---------- Pricing Tiers ---------- */
export type PricingTier = {
    id: "starter" | "growth" | "business" | "enterprise";
    name: string;
    tagline: string;
    /** null = custom pricing */
    price: Record<BillingCycle, number | null>;
    periodLabel: Record<BillingCycle, string>;
    cta: string;
    highlighted: boolean;
    color: "blue" | "emerald" | "purple" | "amber";
    icon: "bolt" | "grid" | "building" | "enterprise";
    features: PricingFeature[];
};

export const PRICING_TIERS: PricingTier[] = [
    {
        id: "starter",
        name: "Starter",
        tagline: "Perfect for small teams getting started.",
        price: { monthly: 0, yearly: 0 },
        periodLabel: { monthly: "Free forever for up to 10 employees", yearly: "Free forever for up to 10 employees" },
        cta: "Get started",
        highlighted: false,
        color: "blue",
        icon: "bolt",
        features: [
            { label: "Up to 10 employees", included: true },
            { label: "Employee management", included: true },
            { label: "Attendance & leave", included: true },
            { label: "Basic reports", included: true },
            { label: "Email support", included: true },
            { label: "Payroll", included: false },
            { label: "Performance management", included: false },
            { label: "Recruitment", included: false },
            { label: "Advanced analytics", included: false },
            { label: "Priority support", included: false },
        ],
    },
    {
        id: "growth",
        name: "Growth",
        tagline: "Ideal for growing businesses.",
        price: { monthly: 49, yearly: 39 },
        periodLabel: { monthly: "Billed monthly", yearly: "Billed annually ($468/yr)" },
        cta: "Start free trial",
        highlighted: false,
        color: "emerald",
        icon: "grid",
        features: [
            { label: "Up to 100 employees", included: true },
            { label: "Employee management", included: true },
            { label: "Attendance & leave", included: true },
            { label: "Payroll", included: true },
            { label: "Recruitment", included: true },
            { label: "Performance management", included: true },
            { label: "Standard reports", included: true },
            { label: "Email support", included: true },
            { label: "Advanced analytics", included: false },
            { label: "Priority support", included: false },
        ],
    },
    {
        id: "business",
        name: "Business",
        tagline: "Built for fast-growing teams.",
        price: { monthly: 99, yearly: 79 },
        periodLabel: { monthly: "Billed monthly", yearly: "Billed annually ($948/yr)" },
        cta: "Start free trial",
        highlighted: true,
        color: "purple",
        icon: "building",
        features: [
            { label: "Up to 500 employees", included: true },
            { label: "Everything in Growth", included: true },
            { label: "Advanced reports & analytics", included: true },
            { label: "Custom workflows", included: true },
            { label: "Multi-department support", included: true },
            { label: "Document management", included: true },
            { label: "API access", included: true },
            { label: "Priority support", included: true },
            { label: "Dedicated account manager", included: false },
        ],
    },
    {
        id: "enterprise",
        name: "Enterprise",
        tagline: "For large organizations with custom needs.",
        price: { monthly: null, yearly: null },
        periodLabel: { monthly: "Tailored to your requirements", yearly: "Tailored to your requirements" },
        cta: "Contact sales",
        highlighted: false,
        color: "amber",
        icon: "enterprise",
        features: [
            { label: "Unlimited employees", included: true },
            { label: "Everything in Business", included: true },
            { label: "Advanced security & compliance", included: true },
            { label: "Custom integrations", included: true },
            { label: "Dedicated account manager", included: true },
            { label: "SLA & uptime guarantees", included: true },
            { label: "On-premise deployment (optional)", included: true },
            { label: "Custom training & onboarding", included: true },
            { label: "24/7 priority support", included: true },
        ],
    },
];

/* ---------- Pricing Trust Badges ---------- */
export const PRICING_TRUST_BADGES = [
    "No hidden fees",
    "14-day free trial",
    "Cancel anytime",
] as const;

/* ---------- Pricing Social Avatars ---------- */
export const PRICING_SOCIAL_AVATARS = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDwXPvMpuVXdIxRpEhGPyJl_jfbx-fPoV4yYsvQXWDQXSEm4gwbzaoyMbO2qyaFGkPsRbuhdeYpiHtJ10mXcGiUJ-oeJfLq7Cg0sLoQwu1JI3P2B5YaF5UxNMRflBlRlEaVpbdK-fwZovRal_gXF3hd177ioYRv8PPrRfJs_HO3jsLvanZ8Lhhzf2dgjLubN1qalxCzMqYKdqR4QwV5GmBM91C3vUziYPXGesXsHsaRO0wC8hPT-jqW9g",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAeT5QqMWhGDdcP7L23k60FpLODCia4WHC1_ZDPOq_UG8XUidVFz3BQd53D1Xx-Vc4S56e8qAptli33YM63jvLmVKxZpQzfh1JWhuJphTyQzFzVb1B74co6nK_Ung3YgkcS3emYH9aaAsFK_WLJ9zNx21WcNGc1mep1Fuv-PUYAafgVc8HL7Me4YLS5s7ij8ToKqTEHG20csvSqN76NFmQYUEMQid1p-YKeinXoAwsmrgdsxA-uyZcqwQ",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCKnhCZCSsZ22m7SO3W4TyuB-oymtxvX4fohkqW6Dy5pkQpY7CiBix6lqR9-CiloRmMWD9PRG4l2RkOJF6Nv6EyFfmx-ODvZLaOInzIOTMu1N2I7mYjKCsp7OHaNSksmNTRgqeHSQZc2EuZB7PQiv1xJpsrIKcx6s8IFv5jHIDmAnfvgUfWfacRQ2YDmns8pOjdRhYDImhd8ntY6IxzNVCQIP8sJqsmK5gHmBo5dIWM9-q7mTiK_AhwqQ",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBYc6Y22a9VlGQTdvAO92w0brQY849J4msgXjSgqVo9G4aEBQ5pVqVW9JC7gyg_Dc7mjLaXOwfX2NRqfaPAxLJzp8iZF4EZLSB5VJBlk12ior92DaERWXNNxfHK2thyareuJ7AE0qWkPBoJJw-Mf3PVqz8pgwSY7bbuzylCOsLuVfd31Ev9zEdo_sHLicd2AUmlRYzXF3z2r5s-1Ne80ZRJLUZOuPAWzv-nNrha_V8YqKxf-96m_7kiRw",
] as const;

/* ---------- Pricing Faqs ---------- */
export const PRICING_FAQS = [
    {
        question: "Is there a free trial?",
        answer:
            "Yes, we offer a 14-day full-featured free trial for both Growth and Business plans. No credit card is required to sign up.",
    },
    {
        question: "Can I change plans later?",
        answer:
            "You can upgrade, downgrade, or switch between monthly and annual billing cycles at any time directly in your account settings.",
    },
    {
        question: "What payment methods do you accept?",
        answer:
            "We accept all major credit cards (Visa, MasterCard, American Express) as well as ACH and wire transfers for Enterprise customers.",
    },
    {
        question: "Do you offer refunds?",
        answer:
            "If you're unsatisfied with PeopleHub for any reason within your first 30 days of paid service, our support team will gladly issue a full refund.",
    },
    {
        question: "Is my data secure?",
        answer:
            "Yes, we adhere to SOC 2 Type II certifications, strict GDPR compliance, and end-to-end 256-bit AES encryption at rest and in transit.",
    },
    {
        question: "Can I import my existing employee data?",
        answer:
            "Easily. You can import CSV, Excel spreadsheets, or sync automatically with platforms like Gusto, Rippling, BambooHR, and QuickBooks.",
    },
    {
        question: "Do you support multiple locations?",
        answer:
            "Yes! Growth and Business tiers natively handle multi-entity, remote workforces across states and international boundaries.",
    },
    {
        question: "Do you offer a custom plan for large organizations?",
        answer:
            "Yes. Our Enterprise tier includes custom contracting, custom SLAs, dedicated customer success managers, and on-premise solutions.",
    },
] as const;

/* ---------- Bottom CTA Image ---------- */
export const BOTTOM_CTA_IMAGE =
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDurz-KK--hLxXufvkNUtbQ0yNIX_RGT7t68tciij-j5JjhO2HPfADmL2lbzPIRsyqE2KDjXWs6KrD8Nj2CnuEjpqrHpLEX0AgnqnN8oWNP9trgiulqfBi1jr5yeHsdigNa_Pna-V0_Ca5Ygz8990vG2jatc7kIep-vTcQvsLj5IvVyGFiCWsM2dhDgW4VCRwvu_kljb25H-bKNaraIK7qKigjTwzB7H03-oda0pJKMTKnquHL-BgOhwg";

/* ---------- Bottom CTA Avatars ---------- */
export const BOTTOM_CTA_AVATARS = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuB2tWW1yyC-eVtP4vsHSZo54DiEN6bODNyNhIwMbMAiyMcAtABSFCebFpEHL_ecrBfG_sgTkg0KMYLICM2FByXqO5yAsRKnIpu33P8JpsnHY04nRnaNbH5pP1H4ow9eyQh6teEyECM8O0Bf2pQ6vwTETAQCHlpWjZySKbGHc71zeGVIod9KsOyt1Mf9y7IPym6MkuOhxJt5X10_ZK2VMh2QxTPqK6jx5dbCrETdKioxsjGAD_4oKQN5vQ",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuADAFaAIP0fFQPJb6Gicjmpo1GtKDB59_nvzJWxUJmLzCU4IO-jKIh5IHiyEofWUgHGecejqHR1eK8iABRaNebUCzOSQ0xZ3SMEOsEOVA_mkuAvMnXPJSYGjtWManqkyp4NVP2h6n4Dpg2d_eAbk5S7XfYZ-_p81WzG-g34edkmrL6wp5ISpXkxpo5tKlWyP0Swl7pZRvW9cTKrhyf0nO9dupWysNy9drXT3VxEJxHkBcr6dyBstKzjPw",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAkrJ8byrm3RJHQwCwkc2NXHlEwGq6wSWh2zqrn0EFfg7jdpZhOXF3wAz893kBSDfyEAwlv5BAUakjFuGqd_hQ1YfKsPVpDKE6ddjfkbVXlaj_pIrlqY2H9otKPG2VK_ZsxGM3pG1fDQTT5a8jDYscNKrpgmVn17gLkXHRJ73z-MUUIBSgAZ8Cf1DMNGZa9VR_m58Fb7OxO33472CqpCyeZjJtE8MD_CbkpHrSeaJ-xBLRfTQzQZPRRQg",
] as const;

/* ---------- Value props ---------- */
export const PRICING_VALUE_PROPS = [
    {
        title: "Free to start",
        description: "Launch with the Starter plan at no cost. Upgrade only when you grow.",
        icon: "sparkles" as const,
    },
    {
        title: "No hidden fees",
        description: "Flat, transparent pricing. What you see is exactly what you pay.",
        icon: "receipt" as const,
    },
    {
        title: "Cancel anytime",
        description: "No lock-in contracts. Downgrade or cancel with a single click.",
        icon: "shield" as const,
    },
    {
        title: "Grows with you",
        description: "Scale from 10 to 10,000 employees without switching platforms.",
        icon: "trend" as const,
    },
];

/* ---------- Comparison table ---------- */
export type ComparisonGroup = {
    group: string;
    rows: {
        feature: string;
        starter: string | boolean;
        growth: string | boolean;
        business: string | boolean;
        enterprise: string | boolean;
    }[];
};

export const COMPARISON_GROUPS: ComparisonGroup[] = [
    {
        group: "Core HR",
        rows: [
            { feature: "Employee records", starter: true, growth: true, business: true, enterprise: true },
            { feature: "Org chart & directory", starter: true, growth: true, business: true, enterprise: true },
            { feature: "Document storage", starter: "1 GB", growth: "25 GB", business: "250 GB", enterprise: "Unlimited" },
            { feature: "Employee count", starter: "Up to 10", growth: "Up to 100", business: "Up to 500", enterprise: "Unlimited" },
        ],
    },
    {
        group: "Time & Attendance",
        rows: [
            { feature: "Attendance tracking", starter: true, growth: true, business: true, enterprise: true },
            { feature: "Leave management", starter: true, growth: true, business: true, enterprise: true },
            { feature: "Shift scheduling", starter: false, growth: true, business: true, enterprise: true },
            { feature: "Overtime & timesheets", starter: false, growth: false, business: true, enterprise: true },
        ],
    },
    {
        group: "Payroll & Finance",
        rows: [
            { feature: "Automated payroll", starter: false, growth: true, business: true, enterprise: true },
            { feature: "Tax filing & compliance", starter: false, growth: true, business: true, enterprise: true },
            { feature: "Multi-currency support", starter: false, growth: false, business: true, enterprise: true },
            { feature: "Custom pay structures", starter: false, growth: false, business: true, enterprise: true },
        ],
    },
    {
        group: "Hiring & Growth",
        rows: [
            { feature: "Recruitment pipeline", starter: false, growth: true, business: true, enterprise: true },
            { feature: "Onboarding workflows", starter: false, growth: true, business: true, enterprise: true },
            { feature: "Performance reviews", starter: false, growth: true, business: true, enterprise: true },
            { feature: "Goals & OKRs", starter: false, growth: false, business: true, enterprise: true },
        ],
    },
    {
        group: "Analytics & Reporting",
        rows: [
            { feature: "Standard reports", starter: true, growth: true, business: true, enterprise: true },
            { feature: "Custom report builder", starter: false, growth: false, business: true, enterprise: true },
            { feature: "Advanced analytics", starter: false, growth: false, business: true, enterprise: true },
            { feature: "Data export & API", starter: false, growth: true, business: true, enterprise: true },
        ],
    },
    {
        group: "Security & Support",
        rows: [
            { feature: "Two-factor auth", starter: true, growth: true, business: true, enterprise: true },
            { feature: "SSO / SAML", starter: false, growth: false, business: true, enterprise: true },
            { feature: "Audit logs", starter: false, growth: false, business: true, enterprise: true },
            { feature: "Dedicated success manager", starter: false, growth: false, business: false, enterprise: true },
            { feature: "Support", starter: "Email", growth: "Email", business: "Priority", enterprise: "24/7 + Slack" },
        ],
    },
];

export const COMPARISON_COLUMNS = ["Starter", "Growth", "Business", "Enterprise"] as const;
export type ComparisonColumn = (typeof COMPARISON_COLUMNS)[number];

/* ---------- Add-ons ---------- */
export type AddOn = {
    name: string;
    description: string;
    price: string;
    period: string;
    icon: "users" | "globe" | "bot" | "lock";
};

export const ADD_ONS: AddOn[] = [
    {
        name: "Extra seats",
        description: "Add more employee seats to any paid plan at a flat rate.",
        price: "$2",
        period: "per user / month",
        icon: "users",
    },
    {
        name: "Global payroll",
        description: "Run payroll across 60+ countries with local compliance built in.",
        price: "$99",
        period: "per country / month",
        icon: "globe",
    },
    {
        name: "AI Assistant",
        description: "Automate HR replies, resume screening, and policy drafting with AI.",
        price: "$39",
        period: "per month",
        icon: "bot",
    },
    {
        name: "Advanced security",
        description: "SSO, audit logs, and IP allow-listing for compliance-heavy teams.",
        price: "$49",
        period: "per month",
        icon: "lock",
    },
];

/* ---------- Guarantee ---------- */
export const GUARANTEE_POINTS = [
    "30-day money-back guarantee",
    "No setup or migration fees",
    "Free data export if you leave",
] as const;

/* ---------- Testimonial ---------- */
export const PRICING_TESTIMONIAL = {
    quote:
        "We evaluated six HR platforms. PeopleHub won on pricing, but it kept us on product. Payroll that took three days now runs itself.",
    name: "Elena Rodrigues",
    role: "VP of People, Cadence Labs",
    avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB5Y0ZB9ZdnDX4m3iwh1UuvBRcLPFTn3hZ6OtWEGH8UtiMlxKLnOejIJelpfS9M7InUNZ9SG0mwiXVMPlWgPXHiUoLLYk7tKURg8-VXK673yh0ejSzhi7WriW4_lqqXeXJ322VhKI5wLS2BCrzGhSXBM9FG-u9sbpHo1cb_zNJSE43CC9kMmlVT_6D1pDJnu8CMDWOOaXz6ZABBpbuvDorI8YK08L72vLrGH0ruKPmDwaGfCN1aTUSzSQ",
} as const;

/* ---------- Trust badges ---------- */
export const PRICING_BADGES = [
    { label: "SOC 2 Type II", sub: "Certified" },
    { label: "GDPR", sub: "Compliant" },
    { label: "ISO 27001", sub: "Certified" },
    { label: "256-bit AES", sub: "Encryption" },
    { label: "99.9%", sub: "Uptime SLA" },
] as const;

/* ============================================================
   FEATURES PAGE DATA
   ============================================================ */

/* ---------- Hero annotations ---------- */
export const FEATURES_HERO_BADGES = [
    "No setup fees",
    "Free onboarding",
    "Cancel anytime",
] as const;

/* ---------- Interactive tabs (module explorer) ---------- */
export type FeatureModule = {
    id: string;
    label: string;
    headline: string;
    description: string;
    bullets: string[];
    stats: { value: string; label: string }[];
    accent: "blue" | "emerald" | "purple" | "amber" | "rose" | "cyan";
    href: string;
};

export const FEATURE_MODULES: FeatureModule[] = [
    {
        id: "employees",
        label: "Employee Management",
        headline: "Every person, one clean profile.",
        description:
            "Centralize records, documents, roles, and history in a single source of truth. Search, filter, and act in seconds — no spreadsheets, no silos.",
        bullets: [
            "Custom fields and org charts",
            "Document storage and e-signatures",
            "Role-based access and audit logs",
            "Bulk import from CSV or existing HRIS",
        ],
        stats: [
            { value: "1.2M+", label: "Employees managed" },
            { value: "< 1s", label: "Search latency" },
        ],
        accent: "blue",
        href: "/features/employee-management",
    },
    {
        id: "attendance",
        label: "Attendance & Leave",
        headline: "Time tracking that just works.",
        description:
            "Log attendance from web, mobile, or hardware. Approve leave in a click. Enforce policies automatically, across teams and time zones.",
        bullets: [
            "Geo-tagged clock-in and clock-out",
            "Automated leave accruals and balances",
            "Custom policies per department or region",
            "Calendar sync with Google and Outlook",
        ],
        stats: [
            { value: "99.9%", label: "Sync reliability" },
            { value: "-82%", label: "Time spent on approvals" },
        ],
        accent: "emerald",
        href: "/features/attendance-leave",
    },
    {
        id: "payroll",
        label: "Payroll",
        headline: "Run payroll in minutes, not days.",
        description:
            "Automated calculations, tax filings, and compliance. Pay employees and contractors across currencies without leaving the platform.",
        bullets: [
            "Automated tax filing in 40+ regions",
            "Multi-currency and multi-entity support",
            "Direct deposit and contractor payouts",
            "Real-time payroll cost analytics",
        ],
        stats: [
            { value: "-95%", label: "Payroll prep time" },
            { value: "40+", label: "Countries supported" },
        ],
        accent: "purple",
        href: "/features/payroll",
    },
    {
        id: "recruitment",
        label: "Recruitment",
        headline: "Hire faster, from posting to offer.",
        description:
            "A complete applicant tracking system with career pages, interviews, and offers — all wired into your HR data so onboarding starts the moment they sign.",
        bullets: [
            "Branded careers page in minutes",
            "Kanban pipeline and scorecards",
            "Interview scheduling with Google Meet / Zoom",
            "Offer letters with e-signature",
        ],
        stats: [
            { value: "-40%", label: "Time to hire" },
            { value: "3x", label: "More interviews per recruiter" },
        ],
        accent: "rose",
        href: "/features/recruitment",
    },
    {
        id: "performance",
        label: "Performance",
        headline: "Goals, reviews, and growth — aligned.",
        description:
            "OKRs, 1-on-1s, and 360° reviews in one place. Managers get clear signals. Employees see what success looks like.",
        bullets: [
            "OKR and goal tracking with check-ins",
            "360° reviews and self-assessments",
            "Continuous feedback and recognition",
            "Calibration and promotion workflows",
        ],
        stats: [
            { value: "+24%", label: "Engagement score" },
            { value: "92%", label: "Review completion rate" },
        ],
        accent: "amber",
        href: "/features#performance-management",
    },
    {
        id: "analytics",
        label: "Reports & Analytics",
        headline: "Insights your board will love.",
        description:
            "A full reporting suite with ready-made dashboards and a drag-and-drop report builder. Export, schedule, or push to your warehouse.",
        bullets: [
            "50+ pre-built reports and dashboards",
            "Custom report builder — no SQL needed",
            "Scheduled email and Slack delivery",
            "Warehouse sync (Snowflake, BigQuery, S3)",
        ],
        stats: [
            { value: "50+", label: "Ready-made reports" },
            { value: "5 min", label: "To first insight" },
        ],
        accent: "cyan",
        href: "/features#reports-analytics",
    },
];

/* ---------- Workflow section ---------- */
export const WORKFLOW_STEPS = [
    {
        step: "01",
        title: "Capture",
        description: "Data flows in from employees, managers, hardware, and integrations — automatically.",
    },
    {
        step: "02",
        title: "Automate",
        description: "Policies, approvals, and calculations run in the background. No reminders needed.",
    },
    {
        step: "03",
        title: "Analyze",
        description: "Live dashboards surface what matters. Export or push insights wherever you need them.",
    },
] as const;

/* ---------- Integrations ---------- */
export const INTEGRATIONS = [
    { name: "Slack", category: "Communication" },
    { name: "Microsoft Teams", category: "Communication" },
    { name: "Google Workspace", category: "Productivity" },
    { name: "Zoom", category: "Meetings" },
    { name: "QuickBooks", category: "Finance" },
    { name: "Xero", category: "Finance" },
    { name: "Stripe", category: "Payments" },
    { name: "Workday", category: "HRIS" },
    { name: "BambooHR", category: "HRIS" },
    { name: "Greenhouse", category: "Recruiting" },
    { name: "Lever", category: "Recruiting" },
    { name: "Okta", category: "Identity" },
] as const;

/* ---------- Security ---------- */
export const SECURITY_FEATURES = [
    {
        title: "SOC 2 Type II",
        description: "Independently audited controls, annually renewed.",
        icon: "shield" as const,
    },
    {
        title: "256-bit AES encryption",
        description: "Data encrypted at rest and in transit, always.",
        icon: "lock" as const,
    },
    {
        title: "GDPR & CCPA",
        description: "Full compliance with regional privacy regulations.",
        icon: "globe" as const,
    },
    {
        title: "SSO & SAML",
        description: "Enterprise single sign-on with Okta, Azure AD, and Google.",
        icon: "key" as const,
    },
    {
        title: "Role-based access",
        description: "Granular permissions across users, teams, and data.",
        icon: "users" as const,
    },
    {
        title: "99.9% uptime SLA",
        description: "Multi-region infrastructure with failover protection.",
        icon: "activity" as const,
    },
];

/* ---------- Comparison: PeopleHub vs. alternatives ---------- */
export const COMPARISON_ROWS = [
    {
        feature: "Setup time",
        peoplehub: "Under 1 day",
        spreadsheets: "Weeks",
        legacy: "3–6 months",
    },
    {
        feature: "Automated payroll",
        peoplehub: true,
        spreadsheets: false,
        legacy: "Partial",
    },
    {
        feature: "Real-time analytics",
        peoplehub: true,
        spreadsheets: "Manual",
        legacy: "Add-on cost",
    },
    {
        feature: "Mobile app",
        peoplehub: true,
        spreadsheets: false,
        legacy: "Limited",
    },
    {
        feature: "API access",
        peoplehub: "Included",
        spreadsheets: false,
        legacy: "Premium tier",
    },
    {
        feature: "Compliance updates",
        peoplehub: "Automatic",
        spreadsheets: false,
        legacy: "Manual",
    },
    {
        feature: "Cost per employee",
        peoplehub: "From $2/mo",
        spreadsheets: "Hidden",
        legacy: "$15–25/mo",
    },
] as const;

/* ---------- Testimonials ---------- */
export const FEATURE_TESTIMONIALS = [
    {
        quote:
            "We replaced four separate tools with PeopleHub. Onboarding time dropped from two weeks to two days.",
        name: "Daniel Kim",
        role: "Head of Operations, Fathom",
        avatar:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDo5DF3fumwayqLw09Zpk9b5C-hWzfyJj3dDXMKbWYVOkeB-Osz9L5vIHM_8SX3laU-2n1QotWSXOOYdg_jCxsoHhHUci3aQGjInGx8MIE2cGmEysAdllEGvNHDERbuG5IVeXghL_g_BjlU8ERlp8QFcBAakwK3-Nm3RhjBbc59Ax5xYcScQ5Qkl7XgJxHqpQNVw_xjN6kMWZxy1ASYBpYFMeLpfNgsUdyDmw45Av30Hp44hURaZhOy4Q",
    },
    {
        quote:
            "Payroll used to take our finance team three full days. It now takes one afternoon.",
        name: "Amara Okafor",
        role: "CFO, Lattice Health",
        avatar:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuA4pyoWMAakt7ztD3PsWmSlZ7Kckc3yOV2ZKIzlFrW-xpY4YKFkA3YDNazG-tNAsWe9VJxoLQzKRZQF9ZxgK2TJcpDF7v1tXUfxxp6OnEa6i9lzwt0dyS8LaAXEn_T6u3Pd827oiFN9JcgUfYt2l9FW3S-xcVSTgJj2iswKGXLraoce5memCNHwfknpLimxJpzKUTHjJrG0UXgmb0KK-o8wLYGcknp384uAa3xywFYcwCJwfU8dKowfTg",
    },
    {
        quote:
            "The analytics are what sold our board. We finally know exactly where our people costs sit.",
        name: "Priya Raman",
        role: "VP People, Northwind",
        avatar:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuB5Y0ZB9ZdnDX4m3iwh1UuvBRcLPFTn3hZ6OtWEGH8UtiMlxKLnOejIJelpfS9M7InUNZ9SG0mwiXVMPlWgPXHiUoLLYk7tKURg8-VXK673yh0ejSzhi7WriW4_lqqXeXJ322VhKI5wLS2BCrzGhSXBM9FG-u9sbpHo1cb_zNJSE43CC9kMmlVT_6D1pDJnu8CMDWOOaXz6ZABBpbuvDorI8YK08L72vLrGH0ruKPmDwaGfCN1aTUSzSQ",
    },
] as const;

/* ============================================================
   (FEATURES) EMPLOYEE MANAGEMENT PAGE DATA
   ============================================================ */

/* ---------- Hero ---------- */
export const EMPLOYEE_HERO_BADGES = [
    "Unlimited records",
    "Custom fields",
    "Bank-grade security",
] as const;

/* ---------- Stats bar (immediately under hero) ---------- */
export const EMPLOYEE_STATS = [
    { value: "1.2M+", label: "Employee records managed" },
    { value: "< 1s", label: "Average search latency" },
    { value: "180+", label: "Custom fields available" },
    { value: "99.9%", label: "Data sync reliability" },
] as const;

/* ---------- Capability grid (6 cards) ---------- */
export type EmployeeCapability = {
    id: string;
    title: string;
    description: string;
    icon:
    | "profile"
    | "org"
    | "docs"
    | "search"
    | "history"
    | "permissions";
    accent: "blue" | "emerald" | "purple" | "amber" | "rose" | "cyan";
};

export const EMPLOYEE_CAPABILITIES: EmployeeCapability[] = [
    {
        id: "profiles",
        title: "Rich employee profiles",
        description:
            "A single source of truth for every person — contact info, job details, compensation, emergency contacts, and more.",
        icon: "profile",
        accent: "blue",
    },
    {
        id: "org-chart",
        title: "Live org chart",
        description:
            "Visualize reporting lines, team structures, and spans of control. Updates automatically as people move.",
        icon: "org",
        accent: "emerald",
    },
    {
        id: "documents",
        title: "Documents & e-signatures",
        description:
            "Store contracts, IDs, certifications, and policies. Send, sign, and track with a full audit trail.",
        icon: "docs",
        accent: "purple",
    },
    {
        id: "search",
        title: "Instant search",
        description:
            "Find anyone by name, role, department, skill, or custom field in under a second — with role-aware filters.",
        icon: "search",
        accent: "amber",
    },
    {
        id: "history",
        title: "Complete history",
        description:
            "Every change to every record, timestamped and attributable. Perfect for audits and compliance reviews.",
        icon: "history",
        accent: "rose",
    },
    {
        id: "permissions",
        title: "Granular permissions",
        description:
            "Control who sees what. Per-field, per-team, per-role access with SSO-backed identity.",
        icon: "permissions",
        accent: "cyan",
    },
];

/* ---------- Deep-dive tabs ---------- */
export type EmployeeDeepDiveTab = {
    id: string;
    label: string;
    headline: string;
    description: string;
    bullets: string[];
    accent: "blue" | "emerald" | "purple" | "amber";
};

export const EMPLOYEE_DEEP_DIVE: EmployeeDeepDiveTab[] = [
    {
        id: "records",
        label: "Records",
        headline: "Every detail, one clean profile.",
        description:
            "Capture the full picture of every employee — from their first day to their latest promotion. Structured, searchable, and always in sync.",
        bullets: [
            "Personal, job, compensation, and emergency data in one place",
            "Custom fields with types, validation, and visibility rules",
            "Attach documents directly to a profile",
            "Full field-level history for compliance",
        ],
        accent: "blue",
    },
    {
        id: "structure",
        label: "Structure",
        headline: "See your org exactly as it is.",
        description:
            "An interactive org chart that reflects reporting lines, teams, locations, and matrices in real time.",
        bullets: [
            "Drag-and-drop manager assignments",
            "Span-of-control and headcount views",
            "Multi-location and remote team filters",
            "Export to PDF for board decks",
        ],
        accent: "emerald",
    },
    {
        id: "workflows",
        label: "Workflows",
        headline: "Automate the busywork.",
        description:
            "Trigger approvals, notifications, and onboarding steps when something changes — no reminders needed.",
        bullets: [
            "New hire → equipment, payroll, and access flows",
            "Promotion → comp and manager updates",
            "Offboarding → revokes, returns, and archive",
            "Approval chains with SLAs and escalation",
        ],
        accent: "purple",
    },
    {
        id: "insights",
        label: "Insights",
        headline: "Turn records into answers.",
        description:
            "Headcount, attrition, tenure, cost, and diversity analytics — one click from any employee record.",
        bullets: [
            "Pre-built reports for HR and Finance",
            "Custom report builder, no SQL required",
            "Scheduled exports to email and Slack",
            "Warehouse sync to Snowflake or BigQuery",
        ],
        accent: "amber",
    },
];

/* ---------- Workflow automation examples ---------- */
export const EMPLOYEE_WORKFLOWS = [
    {
        trigger: "New hire accepted",
        actions: [
            "Create employee record",
            "Assign manager and team",
            "Send welcome packet for e-signature",
            "Provision payroll and benefits",
        ],
        accent: "blue" as const,
    },
    {
        trigger: "Promotion approved",
        actions: [
            "Update job title and level",
            "Adjust compensation plan",
            "Notify finance and manager",
            "Log the change for audit",
        ],
        accent: "emerald" as const,
    },
    {
        trigger: "Offboarding initiated",
        actions: [
            "Revoke system access",
            "Send equipment return request",
            "Trigger final payroll",
            "Archive profile with retention policy",
        ],
        accent: "amber" as const,
    },
];

/* ---------- Security features ---------- */
export const EMPLOYEE_SECURITY = [
    {
        title: "Field-level access control",
        description: "Compensation and personal data restricted per role and per team.",
        icon: "lock" as const,
    },
    {
        title: "Full audit trail",
        description: "Every view, edit, and export logged with timestamp and actor.",
        icon: "history" as const,
    },
    {
        title: "Data residency options",
        description: "EU, US, or APAC — choose where your employee data lives.",
        icon: "globe" as const,
    },
    {
        title: "SSO & SCIM provisioning",
        description: "Sync identities automatically from Okta, Azure AD, or Google.",
        icon: "key" as const,
    },
];

/* ---------- Integrations most relevant here ---------- */
export const EMPLOYEE_INTEGRATIONS = [
    { name: "Slack", purpose: "Birthdays, anniversaries, and org updates" },
    { name: "Google Workspace", purpose: "Directory sync and calendar integration" },
    { name: "Microsoft 365", purpose: "Azure AD provisioning and Teams presence" },
    { name: "Okta", purpose: "SSO and SCIM-based identity sync" },
    { name: "BambooHR", purpose: "One-time import from legacy HRIS" },
    { name: "Workday", purpose: "Bi-directional sync for enterprise teams" },
    { name: "Greenhouse", purpose: "Offer accepted → record auto-created" },
    { name: "Stripe", purpose: "Payouts tied directly to employee records" },
] as const;

/* ---------- Testimonials ---------- */
export const EMPLOYEE_TESTIMONIALS = [
    {
        quote:
            "We cut onboarding admin by 80%. New hires show up on day one with everything ready — laptop, payroll, access, the works.",
        name: "Ravi Patel",
        role: "Head of People, Fathom",
        avatar:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDo5DF3fumwayqLw09Zpk9b5C-hWzfyJj3dDXMKbWYVOkeB-Osz9L5vIHM_8SX3laU-2n1QotWSXOOYdg_jCxsoHhHUci3aQGjInGx8MIE2cGmEysAdllEGvNHDERbuG5IVeXghL_g_BjlU8ERlp8QFcBAakwK3-Nm3RhjBbc59Ax5xYcScQ5Qkl7XgJxHqpQNVw_xjN6kMWZxy1ASYBpYFMeLpfNgsUdyDmw45Av30Hp44hURaZhOy4Q",
    },
    {
        quote:
            "Our org chart used to live in a slide deck that was stale the moment we exported it. Now it just… updates itself.",
        name: "Nadia Rahman",
        role: "COO, Northwind",
        avatar:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuA4pyoWMAakt7ztD3PsWmSlZ7Kckc3yOV2ZKIzlFrW-xpY4YKFkA3YDNazG-tNAsWe9VJxoLQzKRZQF9ZxgK2TJcpDF7v1tXUfxxp6OnEa6i9lzwt0dyS8LaAXEn_T6u3Pd827oiFN9JcgUfYt2l9FW3S-xcVSTgJj2iswKGXLraoce5memCNHwfknpLimxJpzKUTHjJrG0UXgmb0KK-o8wLYGcknp384uAa3xywFYcwCJwfU8dKowfTg",
    },
    {
        quote:
            "Auditing used to take days. Now every change is on the record, and I can hand it to compliance in minutes.",
        name: "Elena Rodrigues",
        role: "VP People, Cadence Labs",
        avatar:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuB5Y0ZB9ZdnDX4m3iwh1UuvBRcLPFTn3hZ6OtWEGH8UtiMlxKLnOejIJelpfS9M7InUNZ9SG0mwiXVMPlWgPXHiUoLLYk7tKURg8-VXK673yh0ejSzhi7WriW4_lqqXeXJ322VhKI5wLS2BCrzGhSXBM9FG-u9sbpHo1cb_zNJSE43CC9kMmlVT_6D1pDJnu8CMDWOOaXz6ZABBpbuvDorI8YK08L72vLrGH0ruKPmDwaGfCN1aTUSzSQ",
    },
] as const;

/* ---------- FAQ ---------- */
export const EMPLOYEE_FAQS = [
    {
        question: "How many employee records can we store?",
        answer:
            "Unlimited. The Starter plan supports up to 10 active employees, Growth up to 100, Business up to 500, and Enterprise is unlimited. Archived records don't count against your seat count.",
    },
    {
        question: "Can we add our own fields to employee profiles?",
        answer:
            "Yes. You can add up to 180+ custom fields across multiple data types (text, date, dropdown, currency, file, and more), with per-field validation and visibility rules.",
    },
    {
        question: "How do we import from our current HRIS?",
        answer:
            "Every plan includes a CSV import wizard with field mapping. Growth and Enterprise plans include free assisted migration from BambooHR, Workday, Gusto, Rippling, and other common platforms.",
    },
    {
        question: "Who can see compensation data?",
        answer:
            "Only the roles you explicitly grant. Field-level permissions let you hide specific fields (like comp, SSN, or personal contact) from managers, teammates, or entire departments.",
    },
    {
        question: "Can employees update their own records?",
        answer:
            "Yes — you choose which fields are self-editable (like emergency contacts or addresses). Changes can require manager approval before taking effect.",
    },
    {
        question: "How long is historical data retained?",
        answer:
            "Forever, by default. Every change is versioned and timestamped. You can configure retention and purge policies per field or per record type to meet your compliance requirements.",
    },
    {
        question: "What happens when an employee leaves?",
        answer:
            "Their profile is archived — not deleted — so historical reporting stays accurate. You control retention duration and can permanently purge records on request.",
    },
    {
        question: "Is there an API for employee data?",
        answer:
            "Yes. Business and Enterprise plans include full REST API access with webhooks for employee create, update, and archive events. Growth plans get read-only API access.",
    },
] as const;

/* ---------- Related features (for cross-linking) ---------- */
export const RELATED_FEATURES = [
    {
        title: "Attendance & Leave",
        description: "Time tracking, policies, and approvals that plug into every record.",
        href: "/features/attendance-leave",
        icon: "clock" as const,
        accent: "emerald" as const,
    },
    {
        title: "Payroll",
        description: "Payroll that reads directly from employee records — no spreadsheets.",
        href: "/features/payroll",
        icon: "wallet" as const,
        accent: "purple" as const,
    },
    {
        title: "Reports & Analytics",
        description: "Turn your employee data into board-ready insight in a click.",
        href: "/features/analytics",
        icon: "chart" as const,
        accent: "cyan" as const,
    },
] as const;


/*  ============================================================
    (FEATURES) ATTENDANCE & LEAVE MANAGEMENT PAGE DATA
    ============================================================ */

export const ATTENDANCE_HERO_BADGES = [
    "Geo-tagged clock-in",
    "Custom leave policies",
    "Payroll-ready exports",
] as const;

export const ATTENDANCE_STATS = [
    { value: "-82%", label: "Time spent on approvals" },
    { value: "99.9%", label: "Sync reliability" },
    { value: "60+", label: "Countries supported" },
    { value: "< 2s", label: "Clock-in to record" },
] as const;

/* ---------- Capabilities (6) ---------- */
export type AttendanceCapability = {
    id: string;
    title: string;
    description: string;
    icon:
    | "clock"
    | "calendar"
    | "geo"
    | "mobile"
    | "policy"
    | "report";
    accent: "blue" | "emerald" | "purple" | "amber" | "rose" | "cyan";
};

export const ATTENDANCE_CAPABILITIES: AttendanceCapability[] = [
    {
        id: "clock",
        title: "Smart clock-in / out",
        description:
            "Web, mobile, kiosk, or hardware — capture time from wherever your team works with a single tap.",
        icon: "clock",
        accent: "blue",
    },
    {
        id: "leave",
        title: "Leave management",
        description:
            "Requests, approvals, balances, and calendars — automated from day one, per team and per region.",
        icon: "calendar",
        accent: "emerald",
    },
    {
        id: "geo",
        title: "Geo & IP rules",
        description:
            "Restrict clock-ins to office IPs or GPS zones. Trust the data without policing it.",
        icon: "geo",
        accent: "purple",
    },
    {
        id: "mobile",
        title: "Mobile-first app",
        description:
            "Native iOS and Android apps with offline support — perfect for field, retail, and remote teams.",
        icon: "mobile",
        accent: "amber",
    },
    {
        id: "policy",
        title: "Flexible policies",
        description:
            "Accrual rules, carryover caps, blackout periods, and approval chains — configured per team or country.",
        icon: "policy",
        accent: "rose",
    },
    {
        id: "report",
        title: "Reports & exports",
        description:
            "Attendance summaries, overtime, leave balances, and payroll-ready hours — one click.",
        icon: "report",
        accent: "cyan",
    },
];

/* ---------- Deep-dive tabs ---------- */
export type AttendanceDeepDiveTab = {
    id: string;
    label: string;
    headline: string;
    description: string;
    bullets: string[];
    accent: "blue" | "emerald" | "purple" | "amber";
};

export const ATTENDANCE_DEEP_DIVE: AttendanceDeepDiveTab[] = [
    {
        id: "track",
        label: "Track",
        headline: "Time capture that just works.",
        description:
            "Whether your team is at a desk, on a shop floor, or on the road — PeopleHub captures accurate hours without friction.",
        bullets: [
            "One-tap clock-in from web, mobile, or kiosk",
            "Offline mode for field and retail teams",
            "Break tracking and auto-deductions",
            "Hardware integration (biometric, RFID, badge readers)",
        ],
        accent: "blue",
    },
    {
        id: "approve",
        label: "Approve",
        headline: "Approvals in a swipe, not a spreadsheet.",
        description:
            "Managers see exactly what needs their attention and clear it in seconds — with a full audit trail.",
        bullets: [
            "Approval inbox across teams and time zones",
            "Bulk approve or reject with notes",
            "Escalation rules and SLA tracking",
            "Slack and email notifications",
        ],
        accent: "emerald",
    },
    {
        id: "policy",
        label: "Policies",
        headline: "Rules that fit your business.",
        description:
            "Every team has different needs. Configure accruals, caps, blackouts, and approval chains per group.",
        bullets: [
            "Accrual rules with carryover caps",
            "Region-specific statutory holidays",
            "Blackout dates and minimum notice",
            "Manager, HR, and dual approvals",
        ],
        accent: "purple",
    },
    {
        id: "insights",
        label: "Insights",
        headline: "See the patterns, not just the punches.",
        description:
            "Overtime hotspots, absenteeism trends, and leave liability — one click from any team or region.",
        bullets: [
            "Real-time attendance dashboards",
            "Overtime cost and trend reports",
            "Leave balance liability analysis",
            "Payroll-ready exports to your finance stack",
        ],
        accent: "amber",
    },
];

/* ---------- Leave policy examples ---------- */
export const ATTENDANCE_LEAVE_TYPES = [
    {
        name: "Annual leave",
        icon: "sun" as const,
        accent: "amber" as const,
        detail: "Accrues monthly · carryover up to 5 days",
    },
    {
        name: "Sick leave",
        icon: "health" as const,
        accent: "rose" as const,
        detail: "Auto-approved on day 1 · doctor's note on day 3+",
    },
    {
        name: "Parental leave",
        icon: "family" as const,
        accent: "purple" as const,
        detail: "Region-specific statutory + company top-up",
    },
    {
        name: "Study leave",
        icon: "book" as const,
        accent: "blue" as const,
        detail: "Up to 10 days per year · manager approval",
    },
    {
        name: "Compassionate",
        icon: "heart" as const,
        accent: "emerald" as const,
        detail: "Unlimited · HR approval only",
    },
    {
        name: "Unpaid leave",
        icon: "clock" as const,
        accent: "cyan" as const,
        detail: "Custom rules · payroll deductions applied",
    },
] as const;

/* ---------- Automations ---------- */
export const ATTENDANCE_AUTOMATIONS = [
    {
        trigger: "Employee clocks in",
        actions: [
            "Record timestamp + location",
            "Validate against schedule and policies",
            "Notify manager if late or outside zone",
            "Feed time into payroll-ready totals",
        ],
        accent: "blue" as const,
    },
    {
        trigger: "Leave request submitted",
        actions: [
            "Route to correct approver",
            "Check team coverage and blackout dates",
            "Update leave balance in real time",
            "Sync to team calendar and payroll",
        ],
        accent: "emerald" as const,
    },
    {
        trigger: "Overtime threshold reached",
        actions: [
            "Flag for manager review",
            "Calculate overtime rate for payroll",
            "Notify HR if policy limit exceeded",
            "Log the event for compliance reporting",
        ],
        accent: "amber" as const,
    },
];

/* ---------- Compliance ---------- */
export const ATTENDANCE_COMPLIANCE = [
    {
        title: "Labor law compliance",
        description:
            "Pre-built rules for 60+ countries — maximum hours, rest periods, and overtime rates.",
        icon: "scale" as const,
    },
    {
        title: "Full audit trail",
        description:
            "Every edit, approval, and rejection logged with timestamp and actor — audit-ready.",
        icon: "history" as const,
    },
    {
        title: "Data residency",
        description:
            "EU, US, or APAC — choose where time and leave data lives. GDPR and CCPA ready.",
        icon: "globe" as const,
    },
    {
        title: "Role-based access",
        description:
            "Managers see their teams. HR sees the company. Finance sees the totals — nothing else.",
        icon: "lock" as const,
    },
];

/* ---------- Integrations ---------- */
export const ATTENDANCE_INTEGRATIONS = [
    { name: "Google Calendar", purpose: "Team calendar sync and leave visibility" },
    { name: "Microsoft Outlook", purpose: "Calendar and room booking sync" },
    { name: "Slack", purpose: "Approvals and status notifications in-channel" },
    { name: "MS Teams", purpose: "Presence integration and approvals" },
    { name: "QuickBooks", purpose: "Payroll-ready hours and overtime exports" },
    { name: "Xero", purpose: "Timesheet sync and payroll journals" },
    { name: "Gusto", purpose: "Direct timesheet → paycheck flow" },
    { name: "Rippling", purpose: "Cross-platform identity and payroll sync" },
] as const;

/* ---------- Testimonials ---------- */
export const ATTENDANCE_TESTIMONIALS = [
    {
        quote:
            "We run retail stores across four time zones. Attendance used to be a nightmare every Monday. Now it just… happens.",
        name: "Marco Silva",
        role: "Regional Ops Director, Brightline",
        avatar:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDo5DF3fumwayqLw09Zpk9b5C-hWzfyJj3dDXMKbWYVOkeB-Osz9L5vIHM_8SX3laU-2n1QotWSXOOYdg_jCxsoHhHUci3aQGjInGx8MIE2cGmEysAdllEGvNHDERbuG5IVeXghL_g_BjlU8ERlp8QFcBAakwK3-Nm3RhjBbc59Ax5xYcScQ5Qkl7XgJxHqpQNVw_xjN6kMWZxy1ASYBpYFMeLpfNgsUdyDmw45Av30Hp44hURaZhOy4Q",
    },
    {
        quote:
            "Our leave liability report used to take our finance team two days. Now it's a live dashboard we check weekly.",
        name: "Fatima Al-Zahra",
        role: "Finance Lead, Cadence Labs",
        avatar:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuA4pyoWMAakt7ztD3PsWmSlZ7Kckc3yOV2ZKIzlFrW-xpY4YKFkA3YDNazG-tNAsWe9VJxoLQzKRZQF9ZxgK2TJcpDF7v1tXUfxxp6OnEa6i9lzwt0dyS8LaAXEn_T6u3Pd827oiFN9JcgUfYt2l9FW3S-xcVSTgJj2iswKGXLraoce5memCNHwfknpLimxJpzKUTHjJrG0UXgmb0KK-o8wLYGcknp384uAa3xywFYcwCJwfU8dKowfTg",
    },
    {
        quote:
            "The geo-fencing feature ended every argument about who was where. Policy is enforced by software now, not by managers.",
        name: "Henrik Larsen",
        role: "Head of People, Northwind",
        avatar:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuB5Y0ZB9ZdnDX4m3iwh1UuvBRcLPFTn3hZ6OtWEGH8UtiMlxKLnOejIJelpfS9M7InUNZ9SG0mwiXVMPlWgPXHiUoLLYk7tKURg8-VXK673yh0ejSzhi7WriW4_lqqXeXJ322VhKI5wLS2BCrzGhSXBM9FG-u9sbpHo1cb_zNJSE43CC9kMmlVT_6D1pDJnu8CMDWOOaXz6ZABBpbuvDorI8YK08L72vLrGH0ruKPmDwaGfCN1aTUSzSQ",
    },
] as const;

/* ---------- FAQ ---------- */
export const ATTENDANCE_FAQS = [
    {
        question: "Can employees clock in from their phones?",
        answer:
            "Yes. Native iOS and Android apps support clock-in/out, break tracking, and leave requests. The app works offline and syncs when connectivity returns — ideal for field and retail teams.",
    },
    {
        question: "How do geo-fenced clock-ins work?",
        answer:
            "You define GPS zones (office, jobsite, warehouse) or IP allow-lists. Employees can only clock in from within those zones. Managers can override with a logged reason when needed.",
    },
    {
        question: "Can we set different leave policies per team or country?",
        answer:
            "Absolutely. Accrual rules, carryover caps, blackout dates, and approval chains are configurable per team, location, or country — with pre-built statutory rules for 60+ countries.",
    },
    {
        question: "How does attendance feed into payroll?",
        answer:
            "Once approved, hours, overtime, and leave deductions flow directly into payroll — as a native integration on Growth and above, or as a CSV/API export on Starter.",
    },
    {
        question: "Do you support overtime calculations?",
        answer:
            "Yes. Configure daily and weekly thresholds, rate multipliers (1.5x, 2x), and jurisdiction-specific rules. Overtime is flagged for approval before it hits payroll.",
    },
    {
        question: "What integrations are available?",
        answer:
            "Native integrations with Google Calendar, Outlook, Slack, MS Teams, QuickBooks, Xero, Gusto, and Rippling — plus hardware support for biometric, RFID, and badge-reader time clocks.",
    },
    {
        question: "Can managers approve leave on mobile?",
        answer:
            "Yes. Approvals are one tap from the mobile app, Slack, MS Teams, or email. Bulk-approval mode is available on web for managers handling large teams.",
    },
    {
        question: "How long is attendance data retained?",
        answer:
            "By default, forever — for compliance reporting. You can configure retention and purge policies per region to match local data-protection laws.",
    },
] as const;

/* ---------- Related features ---------- */
export const ATTENDANCE_RELATED = [
    {
        title: "Employee Management",
        description: "The directory everything else reads from — profiles, org charts, docs.",
        href: "/features/employee-management",
        icon: "users" as const,
        accent: "blue" as const,
    },
    {
        title: "Payroll",
        description: "Approved hours flow directly into payroll — no re-keying, no errors.",
        href: "/features/payroll",
        icon: "wallet" as const,
        accent: "purple" as const,
    },
    {
        title: "Reports & Analytics",
        description: "Overtime, absenteeism, and leave liability — one click away.",
        href: "/features/analytics",
        icon: "chart" as const,
        accent: "cyan" as const,
    },
] as const;

/* ============================================================
(FEATURES) PAYROLL PAGE DATA
   ============================================================ */

export const PAYROLL_HERO_BADGES = [
    "Automated tax filing",
    "Multi-currency payouts",
    "40+ countries supported",
] as const;

export const PAYROLL_STATS = [
    { value: "-95%", label: "Payroll prep time" },
    { value: "100%", label: "On-time pay runs" },
    { value: "40+", label: "Countries supported" },
    { value: "SOC 2", label: "Type II certified" },
] as const;

/* ---------- Capabilities (6) ---------- */
export type PayrollCapability = {
    id: string;
    title: string;
    description: string;
    icon:
    | "run"
    | "tax"
    | "multi"
    | "contractor"
    | "benefits"
    | "report";
    accent: "blue" | "emerald" | "purple" | "amber" | "rose" | "cyan";
};

export const PAYROLL_CAPABILITIES: PayrollCapability[] = [
    {
        id: "run",
        title: "One-click payroll runs",
        description:
            "Calculate gross-to-net for every employee in seconds. Review, approve, and pay — no spreadsheets.",
        icon: "run",
        accent: "purple",
    },
    {
        id: "tax",
        title: "Automated tax filing",
        description:
            "Federal, state, and local filings prepared and filed automatically in supported regions.",
        icon: "tax",
        accent: "blue",
    },
    {
        id: "multi",
        title: "Multi-currency payouts",
        description:
            "Pay employees in their local currency, from local accounts, at mid-market rates.",
        icon: "multi",
        accent: "emerald",
    },
    {
        id: "contractor",
        title: "Contractors & 1099s",
        description:
            "Pay contractors globally, auto-generate 1099s and equivalent forms, and stay compliant.",
        icon: "contractor",
        accent: "amber",
    },
    {
        id: "benefits",
        title: "Benefits & deductions",
        description:
            "Health, retirement, and custom deductions calculated automatically and reflected in every paystub.",
        icon: "benefits",
        accent: "rose",
    },
    {
        id: "report",
        title: "Payroll analytics",
        description:
            "Real-time payroll cost, headcount, and department breakdowns — exportable to your finance stack.",
        icon: "report",
        accent: "cyan",
    },
];

/* ---------- Deep-dive tabs ---------- */
export type PayrollDeepDiveTab = {
    id: string;
    label: string;
    headline: string;
    description: string;
    bullets: string[];
    accent: "purple" | "blue" | "emerald" | "amber";
};

export const PAYROLL_DEEP_DIVE: PayrollDeepDiveTab[] = [
    {
        id: "run",
        label: "Run",
        headline: "Payroll in minutes, not days.",
        description:
            "From gross to net in one click. PeopleHub pulls approved hours, salaries, benefits, and deductions — and calculates everything before you review.",
        bullets: [
            "Gross-to-net calculation in seconds",
            "Live preview before submission",
            "Approval workflow with role-based sign-off",
            "Instant paystub delivery via email and app",
        ],
        accent: "purple",
    },
    {
        id: "comply",
        label: "Comply",
        headline: "Compliance handled end to end.",
        description:
            "Tax registrations, filings, and remittances are built into every pay run — no external accountant required.",
        bullets: [
            "Automated federal, state, and local tax filings",
            "Real-time updates to tax tables",
            "Year-end forms (W-2, 1099, equivalents) auto-generated",
            "Full audit trail for every calculation",
        ],
        accent: "blue",
    },
    {
        id: "global",
        label: "Global",
        headline: "Pay any team, anywhere.",
        description:
            "Run payroll across 40+ countries with local entities or our employer-of-record network — with a single dashboard.",
        bullets: [
            "Multi-currency payouts at mid-market rates",
            "Local compliance in every supported region",
            "Consolidated reporting across all entities",
            "Pay in local currency from local accounts",
        ],
        accent: "emerald",
    },
    {
        id: "insight",
        label: "Insight",
        headline: "Understand the true cost of your team.",
        description:
            "Payroll is your biggest expense. PeopleHub gives you the reporting to see it clearly — by team, department, and location.",
        bullets: [
            "Real-time payroll cost dashboards",
            "Cost per department, per location, per head",
            "Budget vs. actual variance reports",
            "Export to your ERP, warehouse, or BI tool",
        ],
        accent: "amber",
    },
];

/* ---------- Compliance capabilities ---------- */
export const PAYROLL_COMPLIANCE = [
    {
        title: "Automatic tax filings",
        description:
            "Federal, state, and local filings prepared, filed, and remitted on schedule — in every supported region.",
        icon: "file" as const,
    },
    {
        title: "Real-time tax updates",
        description:
            "Tax tables, rates, and rules updated automatically as laws change — no manual maintenance.",
        icon: "refresh" as const,
    },
    {
        title: "Year-end forms",
        description:
            "W-2s, 1099s, and international equivalents generated, distributed, and filed without lifting a finger.",
        icon: "calendar" as const,
    },
    {
        title: "Audit-ready logs",
        description:
            "Every calculation, change, and approval timestamped and attributable — ready for any audit.",
        icon: "history" as const,
    },
];

/* ---------- Global reach ---------- */
export const PAYROLL_REGIONS = [
    { region: "North America", countries: "US · CA · MX", flag: "🌎", primary: true },
    { region: "Europe", countries: "UK · DE · FR · ES · NL + 12", flag: "🌍", primary: true },
    { region: "Asia-Pacific", countries: "AU · NZ · SG · IN + 8", flag: "🌏", primary: true },
    { region: "Latin America", countries: "BR · AR · CO + 5", flag: "🌎", primary: false },
    { region: "Middle East", countries: "UAE · SA + 3", flag: "🌍", primary: false },
    { region: "Africa", countries: "ZA · KE · NG + 2", flag: "🌏", primary: false },
] as const;

/* ---------- Integrations ---------- */
export const PAYROLL_INTEGRATIONS = [
    { name: "QuickBooks", purpose: "Journal entries and GL sync" },
    { name: "Xero", purpose: "Payroll journal and invoice sync" },
    { name: "NetSuite", purpose: "Enterprise GL and cost allocation" },
    { name: "Sage", purpose: "Accounting and compliance workflows" },
    { name: "Gusto", purpose: "US payroll and benefits sync" },
    { name: "Stripe", purpose: "Instant payouts and wallet transfers" },
    { name: "Rippling", purpose: "Identity and device tie-ins" },
    { name: "Snowflake", purpose: "Payroll data warehouse sync" },
] as const;

/* ---------- Testimonials ---------- */
export const PAYROLL_TESTIMONIALS = [
    {
        quote:
            "Payroll used to take three people three days. Now it's one person, one afternoon, and everything files itself.",
        name: "Amara Okafor",
        role: "CFO, Lattice Health",
        avatar:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuA4pyoWMAakt7ztD3PsWmSlZ7Kckc3yOV2ZKIzlFrW-xpY4YKFkA3YDNazG-tNAsWe9VJxoLQzKRZQF9ZxgK2TJcpDF7v1tXUfxxp6OnEa6i9lzwt0dyS8LaAXEn_T6u3Pd827oiFN9JcgUfYt2l9FW3S-xcVSTgJj2iswKGXLraoce5memCNHwfknpLimxJpzKUTHjJrG0UXgmb0KK-o8wLYGcknp384uAa3xywFYcwCJwfU8dKowfTg",
    },
    {
        quote:
            "We operate in eleven countries. PeopleHub is the first platform that didn't make us hire an accountant per region.",
        name: "Lucas Bergmann",
        role: "VP Finance, Northwind",
        avatar:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDo5DF3fumwayqLw09Zpk9b5C-hWzfyJj3dDXMKbWYVOkeB-Osz9L5vIHM_8SX3laU-2n1QotWSXOOYdg_jCxsoHhHUci3aQGjInGx8MIE2cGmEysAdllEGvNHDERbuG5IVeXghL_g_BjlU8ERlp8QFcBAakwK3-Nm3RhjBbc59Ax5xYcScQ5Qkl7XgJxHqpQNVw_xjN6kMWZxy1ASYBpYFMeLpfNgsUdyDmw45Av30Hp44hURaZhOy4Q",
    },
    {
        quote:
            "The audit trail alone paid for the platform. Our external auditor finished a week earlier this year.",
        name: "Priya Raman",
        role: "Controller, Cadence Labs",
        avatar:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuB5Y0ZB9ZdnDX4m3iwh1UuvBRcLPFTn3hZ6OtWEGH8UtiMlxKLnOejIJelpfS9M7InUNZ9SG0mwiXVMPlWgPXHiUoLLYk7tKURg8-VXK673yh0ejSzhi7WriW4_lqqXeXJ322VhKI5wLS2BCrzGhSXBM9FG-u9sbpHo1cb_zNJSE43CC9kMmlVT_6D1pDJnu8CMDWOOaXz6ZABBpbuvDorI8YK08L72vLrGH0ruKPmDwaGfCN1aTUSzSQ",
    },
] as const;

/* ---------- FAQ ---------- */
export const PAYROLL_FAQS = [
    {
        question: "How long does it take to switch from our current provider?",
        answer:
            "Most teams migrate in under two weeks. Growth and Enterprise plans include free assisted migration — historical data, YTD totals, and employee records all move over cleanly.",
    },
    {
        question: "Do you file taxes on our behalf?",
        answer:
            "Yes. In supported regions, PeopleHub handles federal, state, and local filings end to end — including remittance and year-end forms. You retain full visibility and control.",
    },
    {
        question: "Can we run payroll in multiple currencies?",
        answer:
            "Yes. Pay in 40+ currencies, from local accounts, at mid-market rates with no hidden FX markup. Each employee is paid in their local currency.",
    },
    {
        question: "How are contractors handled?",
        answer:
            "Contractors are paid through the same platform, with compliance-aware onboarding, local contract templates, and automated 1099 or equivalent year-end forms.",
    },
    {
        question: "What happens if a pay run needs to be corrected?",
        answer:
            "You can void or adjust any pay run before submission. After submission, corrections flow through an off-cycle run — with a full audit trail for both.",
    },
    {
        question: "Does payroll integrate with our accounting system?",
        answer:
            "Yes. Native integrations with QuickBooks, Xero, NetSuite, Sage, and Snowflake push journals, invoices, and cost allocations automatically.",
    },
    {
        question: "How does payroll tie into attendance and leave?",
        answer:
            "Approved hours, overtime, and leave deductions flow into payroll automatically. No re-keying, no drift between systems.",
    },
    {
        question: "Is our payroll data secure?",
        answer:
            "Yes. SOC 2 Type II certified, 256-bit AES encryption at rest and in transit, and data residency options for EU, US, and APAC regions.",
    },
] as const;

/* ---------- Related features ---------- */
export const PAYROLL_RELATED = [
    {
        title: "Employee Management",
        description: "The directory that feeds every pay run — clean, current, complete.",
        href: "/features/employee-management",
        icon: "users" as const,
        accent: "blue" as const,
    },
    {
        title: "Attendance & Leave",
        description: "Approved hours and leave flow straight into payroll — automatically.",
        href: "/features/attendance-leave",
        icon: "clock" as const,
        accent: "emerald" as const,
    },
    {
        title: "Reports & Analytics",
        description: "Payroll cost, headcount, and variance reports — one click away.",
        href: "/features/analytics",
        icon: "chart" as const,
        accent: "cyan" as const,
    },
] as const;

/* ============================================================
(FEATURES) RECRUITMENT PAGE DATA
   ============================================================ */

export const RECRUITMENT_HERO_BADGES = [
    "Branded careers page",
    "Kanban pipeline",
    "Interview scheduling",
] as const;

export const RECRUITMENT_STATS = [
    { value: "-40%", label: "Time to hire" },
    { value: "3x", label: "Interviews per recruiter" },
    { value: "95%", label: "Offer acceptance rate" },
    { value: "12K+", label: "Hires made on PeopleHub" },
] as const;

/* ---------- Capabilities (6) ---------- */
export type RecruitmentCapability = {
    id: string;
    title: string;
    description: string;
    icon:
    | "board"
    | "careers"
    | "pipeline"
    | "schedule"
    | "offer"
    | "analytics";
    accent: "blue" | "emerald" | "purple" | "amber" | "rose" | "cyan";
};

export const RECRUITMENT_CAPABILITIES: RecruitmentCapability[] = [
    {
        id: "board",
        title: "Job openings board",
        description:
            "All your open roles in one view — approvals, hiring managers, headcount, and progress at a glance.",
        icon: "board",
        accent: "rose",
    },
    {
        id: "careers",
        title: "Branded careers page",
        description:
            "A polished, mobile-friendly careers site with your logo, colors, and messaging — live in minutes.",
        icon: "careers",
        accent: "blue",
    },
    {
        id: "pipeline",
        title: "Kanban pipeline",
        description:
            "Drag candidates through stages, add scorecards, and never lose track of a promising applicant.",
        icon: "pipeline",
        accent: "emerald",
    },
    {
        id: "schedule",
        title: "Interview scheduling",
        description:
            "Two-way calendar sync with Google and Outlook. Send invites, collect feedback, and move on.",
        icon: "schedule",
        accent: "purple",
    },
    {
        id: "offer",
        title: "Offers & e-signature",
        description:
            "Generate offer letters from templates, send for signature, and auto-create the employee record on acceptance.",
        icon: "offer",
        accent: "amber",
    },
    {
        id: "analytics",
        title: "Hiring analytics",
        description:
            "Time-to-hire, source quality, funnel conversion, and offer acceptance — always visible.",
        icon: "analytics",
        accent: "cyan",
    },
];

/* ---------- Deep-dive tabs ---------- */
export type RecruitmentDeepDiveTab = {
    id: string;
    label: string;
    headline: string;
    description: string;
    bullets: string[];
    accent: "rose" | "blue" | "emerald" | "amber";
};

export const RECRUITMENT_DEEP_DIVE: RecruitmentDeepDiveTab[] = [
    {
        id: "attract",
        label: "Attract",
        headline: "Open roles in front of the right people.",
        description:
            "Launch a branded careers page, post to job boards in one click, and let candidates apply in under two minutes — on any device.",
        bullets: [
            "Branded careers site with your colors and story",
            "One-click posting to LinkedIn, Indeed, and 20+ boards",
            "Mobile-optimized application flow",
            "Referral links with automatic tracking",
        ],
        accent: "rose",
    },
    {
        id: "assess",
        label: "Assess",
        headline: "Score candidates, not spreadsheets.",
        description:
            "Move candidates through stages with structured scorecards, automated reminders, and interview kits that keep your team aligned.",
        bullets: [
            "Drag-and-drop Kanban stages",
            "Structured scorecards and rubric-based ratings",
            "Automated interview reminders and follow-ups",
            "Resume parsing and keyword search",
        ],
        accent: "blue",
    },
    {
        id: "hire",
        label: "Hire",
        headline: "From offer to onboarding in one flow.",
        description:
            "Generate offer letters, route for approvals, send for e-signature, and create the employee record the moment it's signed.",
        bullets: [
            "Offer templates with custom fields",
            "Approval chains for comp and level",
            "E-signature in-platform or via DocuSign",
            "Auto-trigger onboarding on acceptance",
        ],
        accent: "emerald",
    },
    {
        id: "insights",
        label: "Insights",
        headline: "Know what's working — and what isn't.",
        description:
            "Source quality, funnel conversion, time-to-hire, and offer acceptance — with drill-downs by team, role, and recruiter.",
        bullets: [
            "Funnel and source-of-hire reports",
            "Time-to-hire by team and role",
            "Recruiter performance dashboards",
            "Diversity funnel analytics",
        ],
        accent: "amber",
    },
];

/* ---------- Hiring pipeline stages ---------- */
export const RECRUITMENT_PIPELINE = [
    { stage: "Applied", count: 87, color: "slate" },
    { stage: "Screening", count: 34, color: "blue" },
    { stage: "Interview", count: 18, color: "purple" },
    { stage: "Offer", count: 6, color: "amber" },
    { stage: "Hired", count: 3, color: "emerald" },
] as const;

/* ---------- Sample candidates for board ---------- */
export const RECRUITMENT_CANDIDATES = [
    { name: "Amara O.", role: "Product Designer", stage: "Interview", score: 4.6 },
    { name: "Jonas W.", role: "Staff Engineer", stage: "Interview", score: 4.8 },
    { name: "Priya R.", role: "People Partner", stage: "Offer", score: 4.9 },
    { name: "Henrik L.", role: "Account Executive", stage: "Screening", score: 4.2 },
    { name: "Sofia M.", role: "Ops Analyst", stage: "Screening", score: 4.5 },
    { name: "Marco S.", role: "Backend Engineer", stage: "Applied", score: 0 },
] as const;

/* ---------- Job board integrations ---------- */
export const RECRUITMENT_JOB_BOARDS = [
    "LinkedIn",
    "Indeed",
    "Glassdoor",
    "Wellfound",
    "Otta",
    "Hacker News",
    "Remote OK",
    "We Work Remotely",
] as const;

/* ---------- Automations ---------- */
export const RECRUITMENT_AUTOMATIONS = [
    {
        trigger: "Application received",
        actions: [
            "Parse resume and populate profile",
            "Screen against role requirements",
            "Route to recruiter with score",
            "Send acknowledgement to candidate",
        ],
        accent: "rose" as const,
    },
    {
        trigger: "Interview completed",
        actions: [
            "Collect scorecards from panel",
            "Aggregate feedback for hiring manager",
            "Advance or reject with reason logged",
            "Notify candidate within 24 hours",
        ],
        accent: "blue" as const,
    },
    {
        trigger: "Offer accepted",
        actions: [
            "Create employee record in HRIS",
            "Trigger onboarding workflow",
            "Provision payroll and benefits",
            "Notify manager, IT, and finance",
        ],
        accent: "emerald" as const,
    },
];

/* ---------- Compliance ---------- */
export const RECRUITMENT_COMPLIANCE = [
    {
        title: "EEO & diversity reporting",
        description:
            "Voluntary demographic collection, anonymized reporting, and audit-ready diversity funnels.",
        icon: "scale" as const,
    },
    {
        title: "GDPR candidate rights",
        description:
            "Data retention policies, right-to-erasure workflows, and consent tracking built in.",
        icon: "shield" as const,
    },
    {
        title: "Structured interviews",
        description:
            "Standardized scorecards and rubric-based scoring reduce bias and stand up to scrutiny.",
        icon: "clipboard" as const,
    },
    {
        title: "Immigration-aware offers",
        description:
            "Visa status tracking, sponsorship workflows, and region-specific contract templates.",
        icon: "globe" as const,
    },
];

/* ---------- Integrations ---------- */
export const RECRUITMENT_INTEGRATIONS = [
    { name: "LinkedIn", purpose: "Job posting and talent sourcing" },
    { name: "Indeed", purpose: "Sponsored and organic job listings" },
    { name: "Greenhouse", purpose: "Import pipelines and historical data" },
    { name: "Lever", purpose: "Two-way sync for TA teams" },
    { name: "Google Calendar", purpose: "Interview scheduling" },
    { name: "Outlook", purpose: "Interview scheduling and invites" },
    { name: "Zoom", purpose: "Auto-generated meeting links" },
    { name: "DocuSign", purpose: "Offer letter e-signature" },
] as const;

/* ---------- Testimonials ---------- */
export const RECRUITMENT_TESTIMONIALS = [
    {
        quote:
            "We doubled our engineering team in six months without adding a single recruiter. The pipeline just works.",
        name: "Ravi Patel",
        role: "Head of Talent, Fathom",
        avatar:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDo5DF3fumwayqLw09Zpk9b5C-hWzfyJj3dDXMKbWYVOkeB-Osz9L5vIHM_8SX3laU-2n1QotWSXOOYdg_jCxsoHhHUci3aQGjInGx8MIE2cGmEysAdllEGvNHDERbuG5IVeXghL_g_BjlU8ERlp8QFcBAakwK3-Nm3RhjBbc59Ax5xYcScQ5Qkl7XgJxHqpQNVw_xjN6kMWZxy1ASYBpYFMeLpfNgsUdyDmw45Av30Hp44hURaZhOy4Q",
    },
    {
        quote:
            "Our interview-to-offer rate went up 30%. Structured scorecards ended the endless debriefs.",
        name: "Nadia Rahman",
        role: "VP People, Northwind",
        avatar:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuA4pyoWMAakt7ztD3PsWmSlZ7Kckc3yOV2ZKIzlFrW-xpY4YKFkA3YDNazG-tNAsWe9VJxoLQzKRZQF9ZxgK2TJcpDF7v1tXUfxxp6OnEa6i9lzwt0dyS8LaAXEn_T6u3Pd827oiFN9JcgUfYt2l9FW3S-xcVSTgJj2iswKGXLraoce5memCNHwfknpLimxJpzKUTHjJrG0UXgmb0KK-o8wLYGcknp384uAa3xywFYcwCJwfU8dKowfTg",
    },
    {
        quote:
            "Candidates tell us our process is the best they've experienced. That's the whole point of recruiting.",
        name: "Elena Rodrigues",
        role: "VP People, Cadence Labs",
        avatar:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuB5Y0ZB9ZdnDX4m3iwh1UuvBRcLPFTn3hZ6OtWEGH8UtiMlxKLnOejIJelpfS9M7InUNZ9SG0mwiXVMPlWgPXHiUoLLYk7tKURg8-VXK673yh0ejSzhi7WriW4_lqqXeXJ322VhKI5wLS2BCrzGhSXBM9FG-u9sbpHo1cb_zNJSE43CC9kMmlVT_6D1pDJnu8CMDWOOaXz6ZABBpbuvDorI8YK08L72vLrGH0ruKPmDwaGfCN1aTUSzSQ",
    },
] as const;

/* ---------- FAQ ---------- */
export const RECRUITMENT_FAQS = [
    {
        question: "Can I post to multiple job boards at once?",
        answer:
            "Yes. Publish a role once and it goes live on LinkedIn, Indeed, Glassdoor, Wellfound, and 20+ other boards simultaneously. Every application lands in the same pipeline with source tracking.",
    },
    {
        question: "Do I get a branded careers page?",
        answer:
            "Yes. Every plan includes a hosted careers site with your logo, brand colors, and custom sections (About, Values, Benefits). Add your own domain for a fully branded experience.",
    },
    {
        question: "How does interview scheduling work?",
        answer:
            "Two-way calendar sync with Google Calendar and Outlook. Candidates pick from your available slots, invites are auto-generated with Zoom or Meet links, and reminders go out automatically.",
    },
    {
        question: "Can candidates apply from their phone?",
        answer:
            "Yes. The application flow is mobile-first. Candidates can apply with LinkedIn, resume upload, or a quick-form — all in under two minutes, on any device.",
    },
    {
        question: "Does it support structured scorecards?",
        answer:
            "Yes. Build role-specific rubrics with rated competencies, custom questions, and notes. Scorecards are locked after submission and aggregated for hiring managers.",
    },
    {
        question: "What happens when an offer is accepted?",
        answer:
            "The candidate automatically becomes an employee record in PeopleHub, triggering the onboarding workflow — payroll, benefits, equipment, and system access all provisioned.",
    },
    {
        question: "Can I import candidates from our old ATS?",
        answer:
            "Yes. Growth and Enterprise plans include assisted migration from Greenhouse, Lever, Workable, and generic CSV imports — with candidates, scorecards, and history preserved.",
    },
    {
        question: "How do you handle GDPR and candidate data rights?",
        answer:
            "Consent is captured at application, data retention policies are configurable per region, and right-to-erasure requests are honored through a self-serve workflow. Full audit trail included.",
    },
] as const;

/* ---------- Related features ---------- */
export const RECRUITMENT_RELATED = [
    {
        title: "Employee Management",
        description: "Accepted offers become employee records — automatically.",
        href: "/features/employee-management",
        icon: "users" as const,
        accent: "blue" as const,
    },
    {
        title: "Payroll",
        description: "New hires are payroll-ready on day one — no data entry.",
        href: "/features/payroll",
        icon: "wallet" as const,
        accent: "purple" as const,
    },
    {
        title: "Performance",
        description: "Onboarding flows straight into goals, reviews, and growth.",
        href: "/features/performance",
        icon: "target" as const,
        accent: "amber" as const,
    },
] as const;


/* ============================================================
   ABOUT PAGE DATA
   ============================================================ */

/* ---------- Hero ---------- */
export const ABOUT_HERO_BADGES = [
    "Founded in 2019",
    "Remote-first team",
    "10,000+ customers",
] as const;

/* ---------- Story metrics ---------- */
export const ABOUT_STORY_METRICS = [
    { value: "2019", label: "Founded" },
    { value: "48", label: "Team members" },
    { value: "10K+", label: "Customers" },
    { value: "32", label: "Countries served" },
] as const;

/* ---------- Values ---------- */
export const ABOUT_VALUES = [
    {
        title: "People first",
        description:
            "Every product decision starts with a question: does this make someone's workday better?",
        icon: "heart" as const,
        accent: "blue" as const,
    },
    {
        title: "Simplicity wins",
        description:
            "HR software shouldn't need a manual. We obsess over making complex workflows feel obvious.",
        icon: "sparkle" as const,
        accent: "emerald" as const,
    },
    {
        title: "Earn trust daily",
        description:
            "We handle sensitive people data. Security, transparency, and honesty aren't features — they're the baseline.",
        icon: "shield" as const,
        accent: "purple" as const,
    },
    {
        title: "Build for the long run",
        description:
            "We're not chasing trends. We're building infrastructure that HR teams will rely on for decades.",
        icon: "mountain" as const,
        accent: "amber" as const,
    },
    {
        title: "Move with empathy",
        description:
            "Our customers are HR leaders who carry real weight. We design every interaction to respect that.",
        icon: "hands" as const,
        accent: "rose" as const,
    },
    {
        title: "Ship, learn, repeat",
        description:
            "We release every week. Feedback from real teams shapes the product faster than any roadmap.",
        icon: "rocket" as const,
        accent: "cyan" as const,
    },
];

/* ---------- Timeline ---------- */
export const ABOUT_TIMELINE = [
    {
        year: "2019",
        title: "PeopleHub is born",
        description:
            "Three HR operators and two engineers start building the tool they wished existed.",
    },
    {
        year: "2020",
        title: "First 100 customers",
        description:
            "Word-of-mouth growth. Payroll and attendance launch. Team grows to 12.",
    },
    {
        year: "2021",
        title: "Series A — $18M",
        description:
            "Backed by leading SaaS investors. Recruitment and performance modules ship.",
    },
    {
        year: "2022",
        title: "Going global",
        description:
            "Multi-currency payroll, GDPR compliance, and EU data residency go live.",
    },
    {
        year: "2023",
        title: "10,000 customers",
        description:
            "Trusted by HR teams in 32 countries. Analytics and API platform launch.",
    },
    {
        year: "2025",
        title: "The next chapter",
        description:
            "AI-powered HR workflows, deeper automation, and a reimagined mobile experience.",
    },
] as const;

/* ---------- Team ---------- */
export const ABOUT_TEAM = [
    {
        name: "Amara Okafor",
        role: "Co-founder & CEO",
        avatar:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuA4pyoWMAakt7ztD3PsWmSlZ7Kckc3yOV2ZKIzlFrW-xpY4YKFkA3YDNazG-tNAsWe9VJxoLQzKRZQF9ZxgK2TJcpDF7v1tXUfxxp6OnEa6i9lzwt0dyS8LaAXEn_T6u3Pd827oiFN9JcgUfYt2l9FW3S-xcVSTgJj2iswKGXLraoce5memCNHwfknpLimxJpzKUTHjJrG0UXgmb0KK-o8wLYGcknp384uAa3xywFYcwCJwfU8dKowfTg",
        linkedin: "#",
    },
    {
        name: "Daniel Kim",
        role: "Co-founder & CTO",
        avatar:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDo5DF3fumwayqLw09Zpk9b5C-hWzfyJj3dDXMKbWYVOkeB-Osz9L5vIHM_8SX3laU-2n1QotWSXOOYdg_jCxsoHhHUci3aQGjInGx8MIE2cGmEysAdllEGvNHDERbuG5IVeXghL_g_BjlU8ERlp8QFcBAakwK3-Nm3RhjBbc59Ax5xYcScQ5Qkl7XgJxHqpQNVw_xjN6kMWZxy1ASYBpYFMeLpfNgsUdyDmw45Av30Hp44hURaZhOy4Q",
        linkedin: "#",
    },
    {
        name: "Priya Raman",
        role: "Chief People Officer",
        avatar:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuB5Y0ZB9ZdnDX4m3iwh1UuvBRcLPFTn3hZ6OtWEGH8UtiMlxKLnOejIJelpfS9M7InUNZ9SG0mwiXVMPlWgPXHiUoLLYk7tKURg8-VXK673yh0ejSzhi7WriW4_lqqXeXJ322VhKI5wLS2BCrzGhSXBM9FG-u9sbpHo1cb_zNJSE43CC9kMmlVT_6D1pDJnu8CMDWOOaXz6ZABBpbuvDorI8YK08L72vLrGH0ruKPmDwaGfCN1aTUSzSQ",
        linkedin: "#",
    },
    {
        name: "Elena Rodrigues",
        role: "VP Product",
        avatar:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCKnhCZCSsZ22m7SO3W4TyuB-oymtxvX4fohkqW6Dy5pkQpY7CiBix6lqR9-CiloRmMWD9PRG4l2RkOJF6Nv6EyFfmx-ODvZLaOInzIOTMu1N2I7mYjKCsp7OHaNSksmNTRgqeHSQZc2EuZB7PQiv1xJpsrIKcx6s8IFv5jHIDmAnfvgUfWfacRQ2YDmns8pOjdRhYDImhd8ntY6IxzNVCQIP8sJqsmK5gHmBo5dIWM9-q7mTiK_AhwqQ",
        linkedin: "#",
    },
] as const;

/* ---------- Culture perks ---------- */
export const ABOUT_PERKS = [
    { label: "Remote-first", description: "Work from anywhere in 12+ countries." },
    { label: "Unlimited PTO", description: "Take the time you need, when you need it." },
    { label: "Equity for everyone", description: "Every team member owns a piece." },
    { label: "Learning budget", description: "$2,000/year for courses, books, events." },
    { label: "Health & wellness", description: "Full coverage plus a wellness stipend." },
    { label: "Home office setup", description: "$1,500 to build your ideal workspace." },
] as const;

/* ---------- Investors ---------- */
export const ABOUT_INVESTORS = [
    { name: "Sequoia", round: "Series B lead" },
    { name: "Benchmark", round: "Series A lead" },
    { name: "Y Combinator", round: "W20" },
    { name: "Index Ventures", round: "Series B" },
    { name: "Accel", round: "Series A" },
    { name: "First Round", round: "Seed" },
] as const;

/* ---------- Stats ---------- */
export const ABOUT_BIG_STATS = [
    { value: "10,000+", label: "Companies on PeopleHub" },
    { value: "1.2M+", label: "Employees managed" },
    { value: "32", label: "Countries served" },
    { value: "99.9%", label: "Uptime, 12-month avg" },
] as const;

/* ============================================================
   CONTACT PAGE DATA
   ============================================================ */

/* ---------- Hero badges ---------- */
export const CONTACT_HERO_BADGES = [
    "Reply within 4 hours",
    "Real humans, no bots",
    "Free onboarding call",
] as const;

/* ---------- Contact channels ---------- */
export const CONTACT_CHANNELS = [
    {
        title: "Talk to sales",
        description: "For pricing, demos, and enterprise plans.",
        action: "sales@peoplehub.com",
        href: "mailto:sales@peoplehub.com",
        icon: "sales" as const,
        accent: "blue" as const,
    },
    {
        title: "Product support",
        description: "Already a customer? We're here to help.",
        action: "support@peoplehub.com",
        href: "mailto:support@peoplehub.com",
        icon: "support" as const,
        accent: "emerald" as const,
    },
    {
        title: "Press & media",
        description: "For journalists and partnership inquiries.",
        action: "press@peoplehub.com",
        href: "mailto:press@peoplehub.com",
        icon: "press" as const,
        accent: "purple" as const,
    },
] as const;

/* ---------- Offices ---------- */
export const OFFICES = [
    {
        city: "Lisbon",
        role: "Global HQ",
        address: "Av. da Liberdade 110, 1250-146 Lisboa, Portugal",
        timezone: "WET · UTC+0",
        flag: "🇵🇹",
    },
    {
        city: "Berlin",
        role: "EU Operations",
        address: "Torstraße 61, 10119 Berlin, Germany",
        timezone: "CET · UTC+1",
        flag: "🇩🇪",
    },
    {
        city: "Toronto",
        role: "North America",
        address: "100 King St W, Toronto, ON M5X 1A9, Canada",
        timezone: "EST · UTC-5",
        flag: "🇨🇦",
    },
] as const;

/* ---------- Support FAQ (contact-specific) ---------- */
export const CONTACT_FAQS = [
    {
        question: "How quickly will I hear back?",
        answer:
            "Sales and support inquiries are answered within 4 business hours on average. Press requests are typically answered within 24 hours.",
    },
    {
        question: "Do you offer live demos?",
        answer:
            "Yes — every plan includes a free 30-minute onboarding call. Growth and Business customers can request additional live demos as needed.",
    },
    {
        question: "Can I schedule a call directly?",
        answer:
            "Absolutely. After submitting the form, you'll receive a link to book a 30-minute slot with our team at a time that works for you.",
    },
    {
        question: "Where is your support team based?",
        answer:
            "Support is distributed across our three hubs in Lisbon, Berlin, and Toronto — which means someone is almost always online.",
    },
] as const;

/* ---------- Dropdown options ---------- */
export const CONTACT_TOPICS = [
    "Sales & pricing",
    "Product demo",
    "Technical support",
    "Billing question",
    "Partnership",
    "Press & media",
    "Something else",
] as const;

export const CONTACT_COMPANY_SIZES = [
    "1–10 employees",
    "11–50 employees",
    "51–200 employees",
    "201–1,000 employees",
    "1,000+ employees",
] as const;

/* ---------- Form helper text ---------- */
export const CONTACT_FORM_TRUST = [
    "We respond within 4 hours",
    "Your data is never shared",
    "No spam, ever",
] as const;

/* ============================================================
   AUTH / SIGN-IN PAGE DATA
   ============================================================ */

export const SOCIAL_PROVIDERS = [
    { id: "google", label: "Google" },
    { id: "microsoft", label: "Microsoft" },
    { id: "apple", label: "Apple" },
] as const;

export type SocialProvider = (typeof SOCIAL_PROVIDERS)[number]["id"];

export const SIGNIN_HIGHLIGHTS = [
    {
        title: "Trusted by 10,000+ teams",
        description: "Used in 32 countries to run modern HR operations.",
        icon: "users" as const,
    },
    {
        title: "Bank-grade security",
        description: "SOC 2 Type II, GDPR, and 256-bit AES encryption.",
        icon: "shield" as const,
    },
    {
        title: "Free 14-day trial",
        description: "No credit card required. Cancel any time.",
        icon: "sparkle" as const,
    },
] as const;

export const SIGNIN_TESTIMONIAL = {
    quote:
        "We migrated from a legacy HRIS in a week. Our team was productive on PeopleHub from day one.",
    name: "Maya Chen",
    role: "Head of People, Northwind",
    avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB5Y0ZB9ZdnDX4m3iwh1UuvBRcLPFTn3hZ6OtWEGH8UtiMlxKLnOejIJelpfS9M7InUNZ9SG0mwiXVMPlWgPXHiUoLLYk7tKURg8-VXK673yh0ejSzhi7WriW4_lqqXeXJ322VhKI5wLS2BCrzGhSXBM9FG-u9sbpHo1cb_zNJSE43CC9kMmlVT_6D1pDJnu8CMDWOOaXz6ZABBpbuvDorI8YK08L72vLrGH0ruKPmDwaGfCN1aTUSzSQ",
} as const;


/* ============================================================
   SIGN-UP PAGE DATA
   ============================================================ */

export const SIGNUP_HIGHLIGHTS = [
    {
        title: "Start free — no card needed",
        description: "14-day trial with full access to every feature.",
        icon: "sparkle" as const,
    },
    {
        title: "Set up in under 5 minutes",
        description: "Import employees, invite teammates, and go live today.",
        icon: "bolt" as const,
    },
    {
        title: "Cancel any time, no questions",
        description: "Month-to-month billing after your trial ends.",
        icon: "shield" as const,
    },
] as const;

export const SIGNUP_STEPS = [
    { label: "Create account", active: true },
    { label: "Verify your email", active: false },
    { label: "Set up workspace", active: false },
] as const;

export const SIGNUP_BENEFITS = [
    "Unlimited employee records",
    "Attendance, leave, and payroll",
    "Hiring, onboarding, and reviews",
    "Reports, analytics, and API access",
    "Priority email and chat support",
] as const;

export const SIGNUP_COMPANY_SIZES = [
    "1–10 employees",
    "11–50 employees",
    "51–200 employees",
    "201–1,000 employees",
    "1,000+ employees",
] as const;

export const SIGNUP_ROLES = [
    "Founder / CEO",
    "HR lead",
    "People operations",
    "Finance",
    "IT / Admin",
    "Other",
] as const;

export const SIGNUP_TESTIMONIAL = {
    quote:
        "We were up and running on PeopleHub before lunch. Our team stopped using three other tools that same week.",
    name: "Jonas Weber",
    role: "COO, Draft Labs",
    avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDo5DF3fumwayqLw09Zpk9b5C-hWzfyJj3dDXMKbWYVOkeB-Osz9L5vIHM_8SX3laU-2n1QotWSXOOYdg_jCxsoHhHUci3aQGjInGx8MIE2cGmEysAdllEGvNHDERbuG5IVeXghL_g_BjlU8ERlp8QFcBAakwK3-Nm3RhjBbc59Ax5xYcScQ5Qkl7XgJxHqpQNVw_xjN6kMWZxy1ASYBpYFMeLpfNgsUdyDmw45Av30Hp44hURaZhOy4Q",
} as const;

/* ---------- Password strength ---------- */
export type PasswordStrength = "weak" | "fair" | "good" | "strong";

export const PASSWORD_STRENGTH_LABELS: Record<PasswordStrength, string> = {
    weak: "Too short",
    fair: "Fair",
    good: "Good",
    strong: "Strong",
};

export const PASSWORD_STRENGTH_COLORS: Record<
    PasswordStrength,
    { bar: string; text: string }
> = {
    weak: { bar: "bg-rose-400", text: "text-rose-600" },
    fair: { bar: "bg-amber-400", text: "text-amber-600" },
    good: { bar: "bg-blue-500", text: "text-blue-600" },
    strong: { bar: "bg-emerald-500", text: "text-emerald-600" },
};

/* ============================================================
   FORGOT PASSWORD PAGE DATA
   ============================================================ */

export const FORGOT_HIGHLIGHTS = [
    {
        title: "Secure by design",
        description:
            "Reset links are time-limited and single-use. Only you can access your account.",
        icon: "shield" as const,
    },
    {
        title: "Back in a minute",
        description:
            "Enter your email and we'll send a reset link — usually arrives within 30 seconds.",
        icon: "clock" as const,
    },
    {
        title: "Still stuck? We're here",
        description:
            "If you don't receive an email, our support team can verify and restore access.",
        icon: "support" as const,
    },
] as const;

export const FORGOT_TESTIMONIAL = {
    quote:
        "Forgot my password on a Friday afternoon. Had a reset link in under a minute and was back to work before my coffee cooled.",
    name: "Sofia Marchetti",
    role: "People Ops Manager, Novi Labs",
    avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCKnhCZCSsZ22m7SO3W4TyuB-oymtxvX4fohkqW6Dy5pkQpY7CiBix6lqR9-CiloRmMWD9PRG4l2RkOJF6Nv6EyFfmx-ODvZLaOInzIOTMu1N2I7mYjKCsp7OHaNSksmNTRgqeHSQZc2EuZB7PQiv1xJpsrIKcx6s8IFv5jHIDmAnfvgUfWfacRQ2YDmns8pOjdRhYDImhd8ntY6IxzNVCQIP8sJqsmK5gHmBo5dIWM9-q7mTiK_AhwqQ",
} as const;

export const FORGOT_EMAIL_HELP_STEPS = [
    "Check your spam or promotions folder",
    "Make sure you entered the right email",
    "Wait up to 5 minutes — it can be slow sometimes",
    "Still nothing? Contact our support team",
] as const;

/* ============================================================
   LEGAL / PRIVACY POLICY PAGE DATA
   ============================================================ */

export const PRIVACY_LAST_UPDATED = "April 22, 2025";
export const PRIVACY_EFFECTIVE_DATE = "May 1, 2025";

/* Sidebar table of contents */
export type LegalSection = {
    id: string;
    label: string;
};

export const PRIVACY_SECTIONS: LegalSection[] = [
    { id: "introduction", label: "1. Introduction" },
    { id: "information-we-collect", label: "2. Information we collect" },
    { id: "how-we-use", label: "3. How we use information" },
    { id: "legal-bases", label: "4. Legal bases" },
    { id: "sharing", label: "5. Sharing & disclosure" },
    { id: "international", label: "6. International transfers" },
    { id: "retention", label: "7. Data retention" },
    { id: "your-rights", label: "8. Your rights" },
    { id: "security", label: "9. Security" },
    { id: "cookies", label: "10. Cookies & tracking" },
    { id: "children", label: "11. Children's privacy" },
    { id: "changes", label: "12. Changes to this policy" },
    { id: "contact", label: "13. Contact us" },
];

/* Privacy summary cards shown at top of the page */
export const PRIVACY_SUMMARY = [
    {
        title: "Your data, your control",
        description:
            "Access, export, correct, or delete your personal data at any time from your account.",
        icon: "shield" as const,
    },
    {
        title: "We never sell your data",
        description:
            "We don't sell, rent, or trade personal information. Full stop.",
        icon: "lock" as const,
    },
    {
        title: "GDPR & CCPA aligned",
        description:
            "Built to comply with global privacy laws, including the EU GDPR and California CCPA.",
        icon: "globe" as const,
    },
] as const;

/* Contact block at the bottom */
export const PRIVACY_CONTACT = {
    email: "privacy@peoplehub.com",
    dpo: "dpo@peoplehub.com",
    address: "Av. da Liberdade 110, 1250-146 Lisboa, Portugal",
} as const;

/* ============================================================
   TERMS OF SERVICE PAGE DATA
   ============================================================ */

export const TERMS_LAST_UPDATED = "April 22, 2025";
export const TERMS_EFFECTIVE_DATE = "May 1, 2025";

export const TERMS_SECTIONS: LegalSection[] = [
    { id: "agreement", label: "1. Agreement to terms" },
    { id: "definitions", label: "2. Definitions" },
    { id: "account", label: "3. Account registration" },
    { id: "use-of-service", label: "4. Use of the service" },
    { id: "subscriptions", label: "5. Subscriptions & billing" },
    { id: "customer-data", label: "6. Customer data" },
    { id: "ip", label: "7. Intellectual property" },
    { id: "third-party", label: "8. Third-party services" },
    { id: "confidentiality", label: "9. Confidentiality" },
    { id: "warranties", label: "10. Warranties & disclaimers" },
    { id: "liability", label: "11. Limitation of liability" },
    { id: "indemnification", label: "12. Indemnification" },
    { id: "term-termination", label: "13. Term & termination" },
    { id: "governing-law", label: "14. Governing law" },
    { id: "changes", label: "15. Changes to terms" },
    { id: "contact", label: "16. Contact us" },
];

/* Summary cards shown near the top */
export const TERMS_SUMMARY = [
    {
        title: "Fair, plain language",
        description:
            "We've written these terms to be readable — no hidden traps, no legalese where plain words work.",
        icon: "book" as const,
    },
    {
        title: "Your data stays yours",
        description:
            "You own your Customer Data. We process it only to provide the Services, as described in our DPA.",
        icon: "lock" as const,
    },
    {
        title: "Cancel anytime",
        description:
            "Month-to-month billing on every plan. No lock-in, no early-termination fees.",
        icon: "calendar" as const,
    },
] as const;

/* Contact block at the bottom */
export const TERMS_CONTACT = {
    email: "legal@peoplehub.com",
    sales: "sales@peoplehub.com",
    address: "Av. da Liberdade 110, 1250-146 Lisboa, Portugal",
} as const;

/* ============================================================
   COOKIE POLICY PAGE DATA
   ============================================================ */

export const COOKIES_LAST_UPDATED = "April 22, 2025";
export const COOKIES_EFFECTIVE_DATE = "May 1, 2025";

export const COOKIES_SECTIONS: LegalSection[] = [
    { id: "introduction", label: "1. Introduction" },
    { id: "what-are-cookies", label: "2. What are cookies?" },
    { id: "how-we-use", label: "3. How we use cookies" },
    { id: "cookie-categories", label: "4. Categories we use" },
    { id: "third-party", label: "5. Third-party cookies" },
    { id: "managing", label: "6. Managing your preferences" },
    { id: "browser-controls", label: "7. Browser-level controls" },
    { id: "do-not-track", label: "8. Do Not Track" },
    { id: "changes", label: "9. Changes to this policy" },
    { id: "contact", label: "10. Contact us" },
];

/* Cookie categories — used on the page AND by the consent banner */
export type CookieCategory = {
    id: "essential" | "analytics" | "marketing";
    title: string;
    description: string;
    examples: string;
    required: boolean;
    accent: "blue" | "emerald" | "amber";
};

export const COOKIE_CATEGORIES: CookieCategory[] = [
    {
        id: "essential",
        title: "Strictly necessary",
        description:
            "Required for the Services to function — authentication, security, load balancing, and remembering your consent choice. These cannot be disabled.",
        examples: "session_id, csrf_token, peoplehub_cookie_consent",
        required: true,
        accent: "blue",
    },
    {
        id: "analytics",
        title: "Analytics & performance",
        description:
            "Help us understand how visitors use the Services so we can improve them. Data is aggregated and never used to identify you personally.",
        examples: "_ga, _gid, ph_analytics_session",
        required: false,
        accent: "emerald",
    },
    {
        id: "marketing",
        title: "Marketing & advertising",
        description:
            "Used to deliver relevant ads on third-party platforms and measure campaign effectiveness. Only set with your explicit consent.",
        examples: "_fbp, _gcl_au, li_sugr",
        required: false,
        accent: "amber",
    },
];

export const COOKIES_SUMMARY = [
    {
        title: "You're in control",
        description:
            "Choose which categories to allow. Essential cookies are always on — everything else is opt-in.",
        icon: "shield" as const,
    },
    {
        title: "Change your mind anytime",
        description:
            "Update or reset your preferences from this page or the banner at the bottom of the screen.",
        icon: "refresh" as const,
    },
    {
        title: "No dark patterns",
        description:
            "Accepting and rejecting are equally easy. No hidden toggles, no forced consent.",
        icon: "check" as const,
    },
] as const;

export const COOKIES_CONTACT = {
    email: "privacy@peoplehub.com",
    address: "Av. da Liberdade 110, 1250-146 Lisboa, Portugal",
} as const;


/* ============================================================
   DPA (DATA PROCESSING AGREEMENT) PAGE DATA
   ============================================================ */

export const DPA_LAST_UPDATED = "April 22, 2025";
export const DPA_EFFECTIVE_DATE = "May 1, 2025";
export const DPA_VERSION = "3.2";

export const DPA_SECTIONS: LegalSection[] = [
    { id: "overview", label: "1. Overview" },
    { id: "definitions", label: "2. Definitions" },
    { id: "scope", label: "3. Scope & roles" },
    { id: "processing", label: "4. Processing instructions" },
    { id: "confidentiality", label: "5. Confidentiality" },
    { id: "security", label: "6. Security measures" },
    { id: "subprocessors", label: "7. Sub-processors" },
    { id: "transfers", label: "8. International transfers" },
    { id: "data-subject-rights", label: "9. Data subject rights" },
    { id: "breach", label: "10. Personal data breaches" },
    { id: "audits", label: "11. Audits & inspections" },
    { id: "return-deletion", label: "12. Return & deletion" },
    { id: "liability", label: "13. Liability" },
    { id: "term", label: "14. Term & termination" },
    { id: "annexes", label: "15. Annexes" },
    { id: "contact", label: "16. Contact" },
];

/* Summary cards at top */
export const DPA_SUMMARY = [
    {
        title: "GDPR & CCPA ready",
        description:
            "Pre-signed for the EU GDPR, UK GDPR, Swiss FADP, and the California CCPA/CPRA.",
        icon: "shield" as const,
    },
    {
        title: "Free to countersign",
        description:
            "Download the PDF, sign it, and send it back. We'll countersign within 2 business days.",
        icon: "file" as const,
    },
    {
        title: "Enterprise-ready",
        description:
            "Includes Annex 1 (processing details), Annex 2 (TOMs), and Annex 3 (sub-processors).",
        icon: "building" as const,
    },
] as const;

/* Roles table */
export const DPA_ROLES = [
    {
        role: "Data Controller",
        party: "Customer",
        description:
            "Determines the purposes and means of processing Personal Data. Typically the employer of the Data Subjects.",
    },
    {
        role: "Data Processor",
        party: "PeopleHub",
        description:
            "Processes Personal Data on behalf of, and only on documented instructions from, the Controller.",
    },
    {
        role: "Sub-processor",
        party: "Third parties engaged by PeopleHub",
        description:
            "Engaged to assist in providing the Services. Listed in Annex 3 and bound by equivalent obligations.",
    },
    {
        role: "Data Subject",
        party: "Customer's employees, contractors, and applicants",
        description:
            "Individuals whose Personal Data is processed through the Services.",
    },
] as const;

/* Annex 1: Processing details */
export const DPA_ANNEX_1 = {
    subjectMatter:
        "Provision of the PeopleHub platform for human resources management, including employee records, time and attendance, payroll coordination, recruitment, performance, and analytics.",
    duration:
        "The term of the Customer's subscription to the Services, plus any post-termination retention period described in the Agreement.",
    nature:
        "Collection, storage, organization, retrieval, consultation, use, disclosure by transmission, erasure, and destruction — all automated.",
    purpose:
        "Enabling the Customer to manage its workforce, comply with employment and tax obligations, and access HR analytics.",
    dataTypes: [
        "Identification data (name, employee ID, photo, government IDs where required)",
        "Contact data (work email, work phone, home address for payroll)",
        "Employment data (job title, department, hire date, manager, contract type)",
        "Compensation data (salary, bonus, equity, bank details for payouts)",
        "Attendance and leave data (clock-ins, leave balances, overtime)",
        "Performance data (goals, reviews, feedback, ratings)",
        "Recruitment data (applications, resumes, interview notes, offer letters)",
        "Documents (contracts, IDs, certifications, policy acknowledgments)",
    ],
    dataSubjects: [
        "Employees of the Customer",
        "Contractors and contingent workers of the Customer",
        "Job applicants of the Customer",
        "Former employees (within retention periods)",
    ],
    specialCategories:
        "Only where the Customer chooses to upload such data (e.g., health information for sick leave or accommodations). PeopleHub applies heightened safeguards to any such data.",
} as const;

/* Annex 2: Technical & Organizational Measures */
export type DpaTom = {
    category: string;
    controls: string[];
};

export const DPA_ANNEX_2: DpaTom[] = [
    {
        category: "Encryption",
        controls: [
            "256-bit AES encryption at rest (database and object storage)",
            "TLS 1.2+ in transit (all external and internal traffic)",
            "Encrypted backups with separately managed keys",
            "Field-level encryption for sensitive identifiers (e.g., SSN, bank account numbers)",
        ],
    },
    {
        category: "Access control",
        controls: [
            "Role-based access control (RBAC) with least-privilege principles",
            "SSO / SAML and SCIM provisioning supported",
            "Two-factor authentication enforced for administrative accounts",
            "Production access requires just-in-time approval and is fully logged",
        ],
    },
    {
        category: "Availability & resilience",
        controls: [
            "Multi-region deployment with automated failover",
            "99.9% uptime SLA for Business and Enterprise plans",
            "Daily automated backups with point-in-time recovery",
            "Documented and tested disaster recovery procedures",
        ],
    },
    {
        category: "Security operations",
        controls: [
            "24/7 monitoring and alerting on anomalous activity",
            "Annual third-party penetration testing",
            "Continuous vulnerability scanning of dependencies",
            "Documented incident response plan with defined SLAs",
        ],
    },
    {
        category: "Organizational controls",
        controls: [
            "Background checks for all employees with data access",
            "Mandatory annual security awareness training",
            "Written security policies reviewed at least annually",
            "Confidentiality obligations in every employee contract",
        ],
    },
    {
        category: "Certifications & audits",
        controls: [
            "SOC 2 Type II certified (renewed annually)",
            "ISO 27001 certified",
            "GDPR and CCPA/CPRA compliant",
            "Independent audit reports available to Business and Enterprise customers",
        ],
    },
];

/* Annex 3: Sub-processors */
export type DpaSubprocessor = {
    name: string;
    purpose: string;
    location: string;
    category: string;
};

export const DPA_ANNEX_3: DpaSubprocessor[] = [
    {
        name: "Amazon Web Services",
        purpose: "Cloud hosting and infrastructure",
        location: "EU · US · APAC (per Customer's data residency choice)",
        category: "Infrastructure",
    },
    {
        name: "Cloudflare",
        purpose: "CDN, DDoS protection, and edge security",
        location: "Global edge",
        category: "Infrastructure",
    },
    {
        name: "Stripe",
        purpose: "Subscription billing and payment processing",
        location: "US · EU",
        category: "Payments",
    },
    {
        name: "SendGrid",
        purpose: "Transactional email delivery",
        location: "US",
        category: "Communication",
    },
    {
        name: "Postmark",
        purpose: "Transactional email delivery (EU customers)",
        location: "EU",
        category: "Communication",
    },
    {
        name: "Twilio",
        purpose: "SMS notifications and 2FA",
        location: "US · EU",
        category: "Communication",
    },
    {
        name: "Sentry",
        purpose: "Application error monitoring (PII scrubbed)",
        location: "US",
        category: "Monitoring",
    },
    {
        name: "Datadog",
        purpose: "Infrastructure and application monitoring",
        location: "US · EU",
        category: "Monitoring",
    },
    {
        name: "Snowflake",
        purpose: "Data warehouse for customer analytics (opt-in)",
        location: "EU · US",
        category: "Analytics",
    },
    {
        name: "Okta",
        purpose: "Identity provider and SSO",
        location: "US · EU",
        category: "Identity",
    },
] as const;

/* Contact */
export const DPA_CONTACT = {
    email: "dpa@peoplehub.com",
    legal: "legal@peoplehub.com",
    address: "Av. da Liberdade 110, 1250-146 Lisboa, Portugal",
} as const;

/* ============================================================
   2FA VERIFICATION PAGE DATA
   ============================================================ */

export const OTP_LENGTH = 6;
export const OTP_RESEND_SECONDS = 30;
export const OTP_EXPIRY_SECONDS = 300; // 5 minutes

/* Where the code is sent — used to display the destination */
export type OtpChannel = "email" | "sms" | "authenticator";

export const OTP_CHANNELS: Record<
    OtpChannel,
    { label: string; description: string }
> = {
    email: {
        label: "Email",
        description: "We sent a 6-digit code to your email address.",
    },
    sms: {
        label: "SMS",
        description: "We sent a 6-digit code to your phone number.",
    },
    authenticator: {
        label: "Authenticator app",
        description: "Enter the 6-digit code from your authenticator app.",
    },
};

/* Help / recovery options shown in the sidebar */
export const OTP_HELP_ITEMS = [
    {
        title: "Didn't receive the code?",
        description:
            "Check your spam folder or wait for the resend timer. Codes expire after 5 minutes.",
        icon: "mail" as const,
    },
    {
        title: "Use a recovery code",
        description:
            "If you saved backup codes when you enabled 2FA, you can use one of those instead.",
        icon: "key" as const,
    },
    {
        title: "Lost access entirely?",
        description:
            "Contact your workspace admin or our support team to verify your identity.",
        icon: "support" as const,
    },
] as const;

/* Trust panel highlights on the left column (desktop only) */
export const OTP_HIGHLIGHTS = [
    {
        title: "Bank-grade security",
        description:
            "Two-factor authentication adds a second layer of protection to your account.",
        icon: "shield" as const,
    },
    {
        title: "Codes expire quickly",
        description:
            "Each code is valid for 5 minutes and can be used only once.",
        icon: "clock" as const,
    },
    {
        title: "You're in control",
        description:
            "Change your 2FA method anytime from your account security settings.",
        icon: "settings" as const,
    },
] as const;

/* ============================================================
   VERIFY EMAIL (sent) PAGE DATA
   ============================================================ */

export const VERIFY_EMAIL_RESEND_SECONDS = 30;
export const VERIFY_EMAIL_EXPIRY_MINUTES = 60; // link lifetime

/* Trust panel highlights (left column, desktop only) */
export const VERIFY_EMAIL_HIGHLIGHTS = [
    {
        title: "One click to activate",
        description:
            "Click the link in the email and your workspace is ready to use.",
        icon: "bolt" as const,
    },
    {
        title: "Link expires in 60 minutes",
        description:
            "For your security, verification links expire an hour after they're sent.",
        icon: "clock" as const,
    },
    {
        title: "No spam, ever",
        description:
            "We only send you the emails you asked for. You can unsubscribe anytime.",
        icon: "shield" as const,
    },
] as const;

/* Help / troubleshooting items */
export const VERIFY_EMAIL_HELP_ITEMS = [
    {
        title: "Check your spam or junk folder",
        description:
            "Verification emails sometimes get filtered. Add no-reply@peoplehub.com to your safe senders list.",
        icon: "mail" as const,
    },
    {
        title: "Wrong email address?",
        description:
            "If you mistyped it, sign up again with the correct one — or update it from your account settings.",
        icon: "edit" as const,
    },
    {
        title: "Still nothing after a few minutes?",
        description:
            "Wait for the resend timer, then try again. If it still doesn't arrive, contact our support team.",
        icon: "support" as const,
    },
] as const;

/* Steps shown in the card to reinforce the flow */
export type VerifyEmailStep = {
    label: string;
    done?: boolean;
    active?: boolean;
};

export const VERIFY_EMAIL_STEPS: VerifyEmailStep[] = [
    { label: "Account created", done: true },
    { label: "Verify your email", active: true },
    { label: "Set up workspace", done: false },
] as const;

/* ============================================================
   SETUP WORKSPACE PAGE DATA
   ============================================================ */

export const SETUP_TOTAL_STEPS = 4;

export const SETUP_STEPS = [
    { id: "company", label: "Company" },
    { id: "size", label: "Team size" },
    { id: "invite", label: "Invite team" },
    { id: "theme", label: "Finish" },
] as const;

export type SetupStepId = (typeof SETUP_STEPS)[number]["id"];

/* ---------- Company details ---------- */

export const SETUP_INDUSTRIES = [
    "Technology",
    "Finance",
    "Healthcare",
    "Retail & eCommerce",
    "Manufacturing",
    "Education",
    "Professional services",
    "Hospitality",
    "Non-profit",
    "Other",
] as const;

export const SETUP_TIMEZONES = [
    "UTC-08:00 Pacific Time",
    "UTC-05:00 Eastern Time",
    "UTC+00:00 Greenwich Mean Time",
    "UTC+01:00 Central European Time",
    "UTC+02:00 Eastern European Time",
    "UTC+04:00 Gulf Standard Time",
    "UTC+05:00 Pakistan Standard Time",
    "UTC+05:30 India Standard Time",
    "UTC+08:00 Singapore Time",
    "UTC+09:00 Japan Standard Time",
    "UTC+10:00 Australian Eastern Time",
] as const;

/* ---------- Team size ---------- */

export type TeamSizeRange = {
    id: string;
    label: string;
    sublabel: string;
    employees: string;
};

export const SETUP_TEAM_SIZES: TeamSizeRange[] = [
    {
        id: "solo",
        label: "Just me",
        sublabel: "Founder or solo operator",
        employees: "1",
    },
    {
        id: "small",
        label: "2–10",
        sublabel: "Small team",
        employees: "2–10",
    },
    {
        id: "growing",
        label: "11–50",
        sublabel: "Growing business",
        employees: "11–50",
    },
    {
        id: "midsize",
        label: "51–200",
        sublabel: "Mid-sized company",
        employees: "51–200",
    },
    {
        id: "large",
        label: "201–1,000",
        sublabel: "Large organization",
        employees: "201–1,000",
    },
    {
        id: "enterprise",
        label: "1,000+",
        sublabel: "Enterprise",
        employees: "1,000+",
    },
];

/* ---------- Invite team ---------- */

export type TeamRole = "admin" | "manager" | "member";

export const SETUP_ROLES: {
    id: TeamRole;
    label: string;
    description: string;
}[] = [
        {
            id: "admin",
            label: "Admin",
            description: "Full access to settings, billing, and team management.",
        },
        {
            id: "manager",
            label: "Manager",
            description: "Can manage people, approve requests, and view reports.",
        },
        {
            id: "member",
            label: "Member",
            description: "Can view their own data, request leave, and view the directory.",
        },
    ];

export const SETUP_INVITE_MAX = 10;

/* ---------- Theme / finish ---------- */

export const SETUP_ACCENT_OPTIONS = [
    { id: "blue", label: "Blue", class: "bg-blue-600" },
    { id: "emerald", label: "Emerald", class: "bg-emerald-600" },
    { id: "purple", label: "Purple", class: "bg-purple-600" },
    { id: "rose", label: "Rose", class: "bg-rose-600" },
    { id: "amber", label: "Amber", class: "bg-amber-500" },
    { id: "slate", label: "Slate", class: "bg-slate-900" },
] as const;

export const SETUP_MODULES = [
    {
        id: "employees",
        label: "Employee Management",
        description: "Records, org chart, documents",
        defaultOn: true,
    },
    {
        id: "attendance",
        label: "Attendance & Leave",
        description: "Time tracking, leave policies",
        defaultOn: true,
    },
    {
        id: "payroll",
        label: "Payroll",
        description: "Automated calculations & filings",
        defaultOn: false,
    },
    {
        id: "recruitment",
        label: "Recruitment",
        description: "Job postings, pipeline, offers",
        defaultOn: false,
    },
] as const;

/* ---------- Left summary panel highlights ---------- */

export const SETUP_SUMMARY_ITEMS = [
    {
        title: "Takes about 2 minutes",
        description: "Four quick steps and your workspace is ready to go.",
        icon: "clock" as const,
    },
    {
        title: "You can change it all later",
        description: "Nothing here is permanent — everything is editable from settings.",
        icon: "settings" as const,
    },
    {
        title: "Invite your team at the end",
        description: "Or skip it for now and add people whenever you're ready.",
        icon: "users" as const,
    },
] as const;

/* ============================================================
   RESET PASSWORD PAGE DATA
   ============================================================ */

export const RESET_HIGHLIGHTS = [
    {
        title: "Reset links are time-limited",
        description:
            "For your security, reset links expire 60 minutes after they're sent.",
        icon: "clock" as const,
    },
    {
        title: "Never shared, never stored",
        description:
            "Passwords are hashed with bcrypt. We never see or store them in plain text.",
        icon: "lock" as const,
    },
    {
        title: "Strong by default",
        description:
            "We enforce a minimum 8-character length with strength scoring as you type.",
        icon: "shield" as const,
    },
] as const;

export const RESET_TESTIMONIAL = {
    quote:
        "Reset my password in under a minute. Nice to see a company that takes security seriously — but doesn't make it painful.",
    name: "Maya Chen",
    role: "Head of People, Northwind",
    avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB5Y0ZB9ZdnDX4m3iwh1UuvBRcLPFTn3hZ6OtWEGH8UtiMlxKLnOejIJelpfS9M7InUNZ9SG0mwiXVMPlWgPXHiUoLLYk7tKURg8-VXK673yh0ejSzhi7WriW4_lqqXeXJ322VhKI5wLS2BCrzGhSXBM9FG-u9sbpHo1cb_zNJSE43CC9kMmlVT_6D1pDJnu8CMDWOOaXz6ZABBpbuvDorI8YK08L72vLrGH0ruKPmDwaGfCN1aTUSzSQ",
} as const;

export const RESET_SUCCESS_ACTIONS = [
    {
        label: "Sign in with new password",
        href: "/signin",
        primary: true,
    },
    {
        label: "Contact support",
        href: "/contact",
        primary: false,
    },
] as const;

/* ============================================================
   404 NOT FOUND PAGE DATA
   ============================================================ */

export const NOT_FOUND_SUGGESTIONS = [
    {
        title: "Home",
        description: "Back to where it all starts.",
        href: "/",
        icon: "home" as const,
        accent: "blue" as const,
    },
    {
        title: "Features",
        description: "See everything PeopleHub can do.",
        href: "/features",
        icon: "sparkles" as const,
        accent: "emerald" as const,
    },
    {
        title: "Pricing",
        description: "Plans for teams of every size.",
        href: "/pricing",
        icon: "tag" as const,
        accent: "purple" as const,
    },
    {
        title: "Contact",
        description: "Talk to a human about your needs.",
        href: "/contact",
        icon: "message" as const,
        accent: "rose" as const,
    },
] as const;

export const NOT_FOUND_QUICK_LINKS = [
    { label: "Sign in", href: "/signin" },
    { label: "Features", href: "/features" },
    { label: "About us", href: "/about" },
    { label: "Privacy", href: "/privacy" },
] as const;