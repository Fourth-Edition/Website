/**
 * Placeholder service copy — real numbers, timelines and wording still
 * need a pass from the team. Structure is stable; edit the values.
 */

export interface Service {
  slug: string;
  /** Display index, e.g. "01" — rendered as a monospace marker on the card. */
  index: string;
  title: string;
  summary: string;
  deliverables: string[];
  timeline: string;
  startingAt: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    slug: "websites-web-apps",
    index: "01",
    title: "Websites & Web Apps",
    summary:
      "Custom marketing sites, portals, and rich web applications built to stay fast under real traffic.",
    deliverables: [
      "Design system & component library",
      "Server-rendered Next.js build",
      "CMS integration",
      "Analytics & performance budget",
    ],
    timeline: "6–12 weeks",
    startingAt: "50,000 EGP",
  },
  {
    slug: "ui-ux",
    index: "02",
    title: "UI / UX Design",
    summary:
      "Modern interfaces paired with thoughtful, user-centered flows — research through high-fidelity prototype.",
    deliverables: [
      "Discovery & user interviews",
      "Wireframes and user flows",
      "High-fidelity prototype",
      "Handoff documentation",
    ],
    timeline: "3–6 weeks",
    startingAt: "25,000 EGP",
  },
  {
    slug: "mobile-applications",
    index: "03",
    title: "Mobile Applications",
    summary:
      "Native and cross-platform apps for iOS and Android, from first build to store release.",
    deliverables: [
      "Cross-platform application",
      "Offline-first data layer",
      "Push notifications",
      "App Store & Play submission",
    ],
    timeline: "10–16 weeks",
    startingAt: "100,000 EGP",
  },
  {
    slug: "enterprise-systems",
    index: "04",
    title: "Enterprise Systems",
    summary:
      "CRM, ERP, and bespoke database systems that replace the spreadsheets your team has outgrown.",
    deliverables: [
      "Data model & migration plan",
      "Role-based access control",
      "Reporting dashboards",
      "Team training & rollout",
    ],
    timeline: "12–24 weeks",
    startingAt: "150,000 EGP",
  },
  {
    slug: "branding-identity",
    index: "05",
    title: "Branding & Identity",
    summary:
      "Visual systems, guidelines, and corporate identity packages that hold up across every surface.",
    deliverables: [
      "Logo & mark system",
      "Typography and colour scales",
      "Brand guidelines",
      "Launch asset kit",
    ],
    timeline: "4–8 weeks",
    startingAt: "35,000 EGP",
  },
  {
    slug: "marketing-services",
    index: "06",
    title: "Marketing Services",
    summary:
      "Conversion optimisation, search visibility, and digital strategy measured against revenue, not vanity metrics.",
    deliverables: [
      "Technical SEO audit",
      "Conversion funnel review",
      "Content & campaign plan",
      "Monthly reporting",
    ],
    timeline: "Ongoing",
    startingAt: "15,000 EGP / mo",
  },
];

export const process: ProcessStep[] = [
  {
    step: "01",
    title: "Scope",
    description:
      "A working session to pin down the problem, the constraints, and what success actually looks like. You leave with a written scope, not a sales deck.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "Flows, wireframes, then high-fidelity screens. We review in the browser, on real devices, at real breakpoints.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "Two-week cycles with a live staging URL from day one. You see progress continuously — no month-long silences.",
  },
  {
    step: "04",
    title: "Ship",
    description:
      "Deployment, monitoring, and a handover your team can act on. Documentation is part of the build, not an afterthought.",
  },
  {
    step: "05",
    title: "Iterate",
    description:
      "Post-launch we watch the numbers with you and fix what the data says is broken. First draft is never the last one.",
  },
];
