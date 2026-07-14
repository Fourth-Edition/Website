// Shared Tailwind classes for the web (CRM) showcase mock — plain TS
// constants, not CSS variables, built from Tailwind's own slate/sky
// palette so every screen in the mock stays visually consistent.
// Each value must stay a complete, literal class name (no string
// concatenation at the call site) so Tailwind's build-time scanner
// can find it and generate the CSS.
export const web = {
  appBg: "bg-slate-100",
  panel: "bg-white",
  border: "border-slate-200",
  divide: "divide-slate-200",
  ink: "text-slate-900",
  muted: "text-slate-500",
  faint: "text-slate-400",
  accent: "text-sky-600",
  accentBg: "bg-sky-600",
  accentSoft: "bg-sky-50",
  onAccent: "text-white",
  navActive: "bg-sky-50 text-sky-700",
  navIdle: "text-slate-500",
} as const;

// Ordinal ramp (one hue, monotone light→dark) for the pipeline stage
// bar — funnel stages are ordered, so color carries that order rather
// than standing in for four unrelated categories.
export const pipelineRamp = [
  "bg-sky-400",
  "bg-sky-500",
  "bg-sky-600",
  "bg-sky-700",
] as const;

// Deal status — fixed/reserved colors, distinct from the sky accent
// family so status never impersonates a series. Dot + label always
// travel together, never color alone.
export const statusStyle = {
  won: { dot: "bg-emerald-500", text: "text-emerald-700", label: "Won" },
  pending: { dot: "bg-amber-500", text: "text-amber-700", label: "Pending" },
  lost: { dot: "bg-rose-500", text: "text-rose-700", label: "Lost" },
} as const;
