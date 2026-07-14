// Shared Tailwind classes for the mobile showcase mock — plain TS
// constants (not CSS variables), built from Tailwind's own slate/sky
// palette so every screen in the mock stays visually consistent.
// Each value must stay a complete, literal class name (no string
// concatenation at the call site) so Tailwind's build-time scanner
// can find it and generate the CSS.
export const shop = {
  bg: "bg-white",
  surface: "bg-slate-50",
  ink: "text-slate-900",
  inkBg: "bg-slate-900",
  onAccent: "text-white",
  muted: "text-slate-500",
  line: "border-slate-200",
  accent: "text-sky-600",
  accentBg: "bg-sky-600",
  accentBorder: "border-sky-600",
  accentSoft: "bg-sky-50",
  accentGlow: "bg-sky-400/20",
} as const;
