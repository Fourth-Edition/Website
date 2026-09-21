/**
 * Real Portfolio Case Studies for 4th Edition Software.
 * `slug` drives /portfolio/[slug].
 */

export type ProjectCategory = "Web" | "Mobile" | "Enterprise" | "Branding";

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  slug: string;
  title: string;
  client: string;
  category: ProjectCategory;
  year: string;
  /** One line for the card. */
  summary: string;
  /** Paragraphs for the detail page. */
  body: string[];
  services: string[];
  stack: string[];
  metrics: ProjectMetric[];
  highlights?: string[];
  featured?: boolean;
  coverImage: string;
  galleryImages: string[];
}

export const categories: Array<ProjectCategory | "All"> = [
  "All",
  "Web",
  "Enterprise",
];

export const projects: Project[] = [
  {
    slug: "sales-system",
    title: "Enterprise Sales & Lead Pipeline CRM",
    client: "High-Volume Trading & Supply Enterprise",
    category: "Enterprise",
    year: "2026",
    summary:
      "A modern, full-stack Enterprise CRM and Sales Management System built to optimize sales pipelines, streamline lead allocation, and track employee performance in real time.",
    body: [
      "The Enterprise Sales Management System was engineered to eliminate lead leakage, enhance sales team accountability, and streamline customer follow-ups for high-volume trading and supply operations.",
      "The platform connects sales representatives and administrators through a unified, real-time dashboard. Sales reps can log calls, take point-in-time interaction notes, schedule follow-up reminders, and manage deal stages. Administrators gain full visibility over team efficiency, conversion rates, call outcome distributions, and automated lead reassignments with immutable audit snapshot history.",
      "Designed specifically with a native Right-to-Left (RTL) Arabic enterprise user experience, strict data validation, and responsive mobile-first views, it empowers organizations to make data-driven decisions while managing thousands of customer records effortlessly.",
    ],
    services: [
      "Enterprise Systems",
      "UI/UX Design",
      "Database Architecture",
      "RTL Localization",
    ],
    stack: [
      "Next.js 16",
      "React 19",
      "Supabase",
      "TypeScript",
      "Tailwind CSS v4",
      "Recharts",
      "Zod",
      "SheetJS",
    ],
    metrics: [
      { label: "Lead Waste", value: "0%" },
      { label: "Audit Timeline", value: "100%" },
      { label: "Agent Onboarding", value: "< 30m" },
    ],
    highlights: [
      "Smart Sales Pipeline with dynamic deal stages and automated lead recycling queues (No Answer, Closed Phone).",
      "Bulk & single lead reassignment with append-only JSONB snapshot history audit trail.",
      "Role-Based Access Control (RBAC) separating administrative controls from sales agent views.",
      "Real-time analytics engine with custom date filtering (Today, Week, Month, Custom).",
      "High-speed Excel bulk onboarding (.xlsx) with duplicate detection and client/server validation.",
    ],
    featured: true,
    coverImage: "/images/projects/sales-system/cover.png",
    galleryImages: [
      "/images/projects/sales-system/cover.png",
      "/images/projects/sales-system/1.png",
      "/images/projects/sales-system/2.png",
      "/images/projects/sales-system/3.png",
      "/images/projects/sales-system/4.png",
      "/images/projects/sales-system/5.png",
    ],
  },
  {
    slug: "dr-cardiology",
    title: "Dr. Ahmad Mahmoud Cardiology Practice",
    client: "Dr. Ahmad Mahmoud Clinic (Mohandessin, Cairo)",
    category: "Web",
    year: "2026",
    summary:
      "A high-performance medical landing page and clinical portal integrating 3D cardiac diagnostics, interventional catheterization highlights, and streamlined patient appointment scheduling.",
    body: [
      "Led by Professor Dr. Ahmad Mahmoud — Professor of Cardiology at Cairo University (Kasr Al-Ainy) and Fellow of the European Society of Cardiology (ESC) — the practice brings over 20 years of clinical and academic excellence to patient care.",
      "The digital platform presents clear, non-invasive cardiac diagnostic services, intelligent drug-eluting stenting (DES) procedures, hypertension & arrhythmia management, and emergency cardiac interventions.",
      "Engineered to build patient trust with interactive 3D Echo highlights, verified patient ratings (4.9/5), and an intuitive appointment booking experience optimized across desktop, tablet, and mobile devices.",
    ],
    services: [
      "Websites & Web Apps",
      "UI/UX Design",
      "Branding & Identity",
      "SEO & Performance",
    ],
    stack: [
      "Next.js",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "Framer Motion",
    ],
    metrics: [
      { label: "Clinical Experience", value: "20+ Yrs" },
      { label: "Cardiac Interventions", value: "5,000+" },
      { label: "Patient Satisfaction", value: "4.9 / 5" },
    ],
    highlights: [
      "Interventional Cardiology & Smart Stenting (Emergency primary PCI and drug-eluting stent placement).",
      "3D Cardiac Diagnostics showcase (3D Echocardiography, Holter monitoring, non-invasive ECG evaluation).",
      "Hypertension & Rhythm Management comprehensive care plan guides.",
      "Preventive Cardiology & Screening risk-factor assessment tools.",
      "Over 10,000 patients successfully treated across 20+ years of Kasr Al-Ainy academic excellence.",
    ],
    featured: true,
    coverImage: "/images/projects/dr-cardiology/cover.png",
    galleryImages: [
      "/images/projects/dr-cardiology/cover.png",
      "/images/projects/dr-cardiology/1.png",
      "/images/projects/dr-cardiology/2.png",
      "/images/projects/dr-cardiology/3.png",
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
