/**
 * Authentic Fourth Edition Company Information & Story.
 */

export interface AboutStat {
  label: string;
  value: string;
}

export interface StudioValue {
  index: string;
  title: string;
  description: string;
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  focus: string;
  initials: string;
}

export const intro = {
  eyebrow: "ABOUT FOURTH EDITION",
  headline: "Redefining software engineering & digital solutions.",
  lede: "Founded in January 2026, Fourth Edition is an architectural software atelier. We skip traditional trial-and-error phases to deliver mature, production-ready software built by an elite, highly agile technical nucleus.",
};

export const stats: AboutStat[] = [
  { label: "Founded", value: "Jan 2026" },
  { label: "Projects Shipped", value: "5+" },
  { label: "Maturity Phase", value: "Edition 4" },
  { label: "Team Focus", value: "100% Lean" },
];

export const values: StudioValue[] = [
  {
    index: "01",
    title: "Stage 4 Maturity from Day One",
    description:
      "Derived from our name '4th Edition' — we bypass the 3 basic development stages (planning, trial, initial dev) to deliver fully mature, future-proof software.",
  },
  {
    index: "02",
    title: "Lean High-Efficiency Nucleus",
    description:
      "A compact team of elite engineers beats bloated departments. Extreme agility, rapid decision-making, and zero execution delay.",
  },
  {
    index: "03",
    title: "Systematic Design & Architecture",
    description:
      "We pair meticulous architectural planning with modern, clean code to tailor solutions precisely to client requirements.",
  },
  {
    index: "04",
    title: "Built for Rapid Execution",
    description:
      "Innovative, flexible software solutions designed to help ambitious businesses thrive in a fast-paced technology landscape.",
  },
];

export const timeline: Milestone[] = [
  {
    year: "Jan 2026",
    title: "The Launch & Core Foundation (البداية والانطلاق)",
    description:
      "Founded with an ambitious vision to redefine software services. Assembled a high-competency technical nucleus prioritizing efficiency, rapid decision-making, and execution over bloated team size.",
  },
  {
    year: "Early 2026",
    title: "The '4th Edition' Philosophy (التطور وبناء الهوية)",
    description:
      "Established the brand identity around '4th Edition' — symbolizing full professional maturity, skipping basic trial phases directly to production-ready software. Combined systematic design with modern code bases.",
  },
  {
    year: "2026",
    title: "Expansion & 5+ Shipped Products (التوسع والإنجازات)",
    description:
      "Proved market reliability and competitive strength by engineering and launching over 5 successful software systems across enterprise CRM, medical portals, and high-performance web platforms.",
  },
];

export const team: TeamMember[] = [
  {
    name: "Engineering Nucleus",
    role: "Architectural & Technical Leadership",
    focus: "Full-Stack Architecture, System Design & Rapid Delivery",
    initials: "4E",
  },
];
