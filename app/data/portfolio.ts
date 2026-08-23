/**
 * Placeholder case studies. Clients and figures are invented — swap them
 * for real work before launch. `slug` drives /portfolio/[slug].
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
  featured?: boolean;
}

export const categories: Array<ProjectCategory | "All"> = [
  "All",
  "Web",
  "Mobile",
  "Enterprise",
  "Branding",
];

export const projects: Project[] = [
  {
    slug: "northwind-commerce",
    title: "Northwind Commerce",
    client: "Northwind Traders",
    category: "Web",
    year: "2026",
    summary:
      "A wholesale storefront rebuilt around a punishing performance budget and a catalogue of 40,000 SKUs.",
    body: [
      "Northwind's previous storefront took eleven seconds to render a category page. Buyers were abandoning carts before the grid painted.",
      "We rebuilt the catalogue on a server-rendered stack with incremental caching, moved search to a dedicated index, and cut the client bundle by two thirds.",
      "The result is a storefront that renders the first product row in under a second on a mid-range phone over 4G.",
    ],
    services: ["Web Applications", "UI/UX", "Performance"],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Algolia"],
    metrics: [
      { label: "LCP", value: "0.9s" },
      { label: "Conversion", value: "+31%" },
      { label: "Bundle size", value: "-64%" },
    ],
    featured: true,
  },
  {
    slug: "meridian-field",
    title: "Meridian Field",
    client: "Meridian Logistics",
    category: "Mobile",
    year: "2026",
    summary:
      "An offline-first field app for drivers working through dead zones across three countries.",
    body: [
      "Drivers were filling out paper manifests and re-keying them at depot — a two-hour lag on every route and a steady trickle of transcription errors.",
      "Meridian Field syncs opportunistically: everything works offline, conflicts resolve on reconnect, and dispatch sees status changes the moment a signal returns.",
      "Rolled out to 400 drivers over six weeks with no depot downtime.",
    ],
    services: ["Mobile Applications", "UI/UX"],
    stack: ["React Native", "SQLite", "Expo", "Node.js"],
    metrics: [
      { label: "Drivers", value: "400+" },
      { label: "Sync errors", value: "-92%" },
      { label: "Admin hours saved", value: "60/wk" },
    ],
    featured: true,
  },
  {
    slug: "contoso-crm",
    title: "Contoso CRM",
    client: "Contoso Retail",
    category: "Enterprise",
    year: "2025",
    summary:
      "A bespoke CRM replacing nine years of spreadsheets, shared inboxes, and tribal knowledge.",
    body: [
      "Contoso's sales team ran on a shared drive. Pipeline lived in one person's head and forecasting was a monthly guess.",
      "We modelled their actual process rather than a generic sales funnel, migrated a decade of records, and built reporting the leadership team reads without a translator.",
      "Adoption hit 100% in the first month because the tool matched how the team already worked.",
    ],
    services: ["Enterprise Systems", "Data Migration", "Training"],
    stack: ["Next.js", "PostgreSQL", "Prisma", "Vercel"],
    metrics: [
      { label: "Records migrated", value: "1.2M" },
      { label: "Adoption", value: "100%" },
      { label: "Forecast accuracy", value: "+18%" },
    ],
  },
  {
    slug: "atlas-identity",
    title: "Atlas Identity",
    client: "Atlas Ventures",
    category: "Branding",
    year: "2025",
    summary:
      "A full identity system for a fund that had outgrown its founding-era logo.",
    body: [
      "Atlas had four versions of its mark in circulation and no written rules about any of them.",
      "We built a single system — mark, typography, colour scales, motion — and documented it so their internal team can extend it without calling us.",
      "Shipped with a launch kit covering deck templates, social assets, and a rebuilt site.",
    ],
    services: ["Branding & Identity", "Web Applications"],
    stack: ["Figma", "Next.js", "Motion"],
    metrics: [
      { label: "Assets delivered", value: "140" },
      { label: "Guideline pages", value: "36" },
      { label: "Rollout", value: "5 weeks" },
    ],
  },
  {
    slug: "harbor-analytics",
    title: "Harbor Analytics",
    client: "Harbor Health",
    category: "Web",
    year: "2025",
    summary:
      "A clinical reporting dashboard that turns overnight batch exports into decisions before rounds.",
    body: [
      "Harbor's analysts were assembling the morning report by hand from four separate exports.",
      "We built a warehouse-backed dashboard with scheduled ingestion, saved views per department, and audit-friendly exports.",
      "The morning report now builds itself at 05:00 and lands in inboxes before the first shift.",
    ],
    services: ["Web Applications", "Data Engineering"],
    stack: ["Next.js", "BigQuery", "dbt", "TypeScript"],
    metrics: [
      { label: "Report prep", value: "4h → 0" },
      { label: "Departments", value: "12" },
      { label: "Daily users", value: "310" },
    ],
  },
  {
    slug: "orbit-wallet",
    title: "Orbit Wallet",
    client: "Orbit Financial",
    category: "Mobile",
    year: "2024",
    summary:
      "A consumer payments app taken from blank repository to App Store in fourteen weeks.",
    body: [
      "Orbit had a licence, a launch date, and no product.",
      "We ran design and engineering in parallel from week two, shipping a TestFlight build every Friday so compliance could review continuously rather than at the end.",
      "Approved on first submission to both stores.",
    ],
    services: ["Mobile Applications", "UI/UX", "Branding & Identity"],
    stack: ["React Native", "Node.js", "Stripe", "Detox"],
    metrics: [
      { label: "Time to store", value: "14 wks" },
      { label: "Crash-free", value: "99.8%" },
      { label: "Store rating", value: "4.7" },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
