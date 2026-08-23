/**
 * Placeholder studio copy. Team members and figures are invented —
 * replace before launch.
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
  /** Rendered in the avatar tile in place of a photo. */
  initials: string;
}

export const intro = {
  eyebrow: "ABOUT US",
  headline: "A small studio that finishes things.",
  lede: "Fourth Edition is a software house building high-performance digital products and the brand systems around them. We work in small teams, ship on short cycles, and stay past launch.",
};

export const stats: AboutStat[] = [
  { label: "Founded", value: "2022" },
  { label: "Projects shipped", value: "48" },
  { label: "Average team size", value: "4" },
  { label: "Clients retained", value: "86%" },
];

export const values: StudioValue[] = [
  {
    index: "01",
    title: "No first drafts",
    description:
      "The version you see is the version we would ship. Everything before that stays in the branch.",
  },
  {
    index: "02",
    title: "Small teams, short cycles",
    description:
      "Four people who own the whole problem beat twelve who each own a slice of it. Two-week cycles, always a live URL.",
  },
  {
    index: "03",
    title: "Performance is a feature",
    description:
      "Budgets are set at kickoff and enforced in CI. A slow build is an unfinished build.",
  },
  {
    index: "04",
    title: "We stay past launch",
    description:
      "Handover includes documentation your team can act on, and we watch the numbers with you for the first month.",
  },
];

export const timeline: Milestone[] = [
  {
    year: "2022",
    title: "Studio founded",
    description:
      "Three engineers and a designer, one shared office, and a first client who needed a storefront rebuilt in six weeks.",
  },
  {
    year: "2023",
    title: "Design practice added",
    description:
      "Brand and product design brought in-house so identity and build stop being separate conversations.",
  },
  {
    year: "2024",
    title: "First enterprise rollout",
    description:
      "A bespoke CRM replacing nine years of spreadsheets — and the start of our systems practice.",
  },
  {
    year: "2025",
    title: "Mobile team formed",
    description:
      "A dedicated cross-platform group, launched off the back of two consecutive store approvals on first submission.",
  },
  {
    year: "2026",
    title: "Fourth Edition, fourth edition",
    description:
      "The studio site rebuilt from scratch. Codebase actively compiled.",
  },
];

export const team: TeamMember[] = [
  {
    name: "Placeholder One",
    role: "Founder & Principal Engineer",
    focus: "Architecture, performance, delivery",
    initials: "P1",
  },
  {
    name: "Placeholder Two",
    role: "Design Director",
    focus: "Brand systems, product design",
    initials: "P2",
  },
  {
    name: "Placeholder Three",
    role: "Lead Engineer, Mobile",
    focus: "React Native, offline-first systems",
    initials: "P3",
  },
  {
    name: "Placeholder Four",
    role: "Engagement Lead",
    focus: "Scoping, rollout, client comms",
    initials: "P4",
  },
];
