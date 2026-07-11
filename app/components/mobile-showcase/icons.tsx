interface IconProps {
  className?: string;
}

const base = "w-full h-full";

export function BackIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M15 5 8 12l7 7" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function HeartIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 20s-7-4.35-9.5-8.7C.9 8.1 2.4 4.8 5.6 4.2c1.9-.35 3.7.5 4.9 2.1C11.7 4.7 13.5 3.85 15.4 4.2c3.2.6 4.7 3.9 3.1 7.1C16 15.65 12 20 12 20Z"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function StarIcon({ className = base, filled = true }: IconProps & { filled?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} className={className}>
      <path
        d="m12 3 2.8 5.9 6.4.8-4.7 4.5 1.2 6.4L12 17.6 6.3 20.6l1.2-6.4-4.7-4.5 6.4-.8L12 3Z"
        stroke="currentColor"
        strokeWidth={1.4}
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BagIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M6 8h12l1 12H5L6 8Z" stroke="currentColor" strokeWidth={1.6} strokeLinejoin="round" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" />
    </svg>
  );
}

export function HomeIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M4 11.5 12 4l8 7.5M6 9.5V20h12V9.5"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SearchIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="10.5" cy="10.5" r="6" stroke="currentColor" strokeWidth={1.6} />
      <path d="m19 19-4-4" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" />
    </svg>
  );
}

export function ProfileIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="8.5" r="3.2" stroke="currentColor" strokeWidth={1.6} />
      <path d="M5 19c1.4-3 4-4.5 7-4.5s5.6 1.5 7 4.5" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" />
    </svg>
  );
}

export function SignalIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 16 12" fill="currentColor" className={className}>
      <rect x="0" y="8" width="3" height="4" rx="0.5" />
      <rect x="4.5" y="5.5" width="3" height="6.5" rx="0.5" />
      <rect x="9" y="3" width="3" height="9" rx="0.5" />
      <rect x="13" y="0" width="3" height="12" rx="0.5" />
    </svg>
  );
}

export function BatteryIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 26 12" fill="none" className={className}>
      <rect x="0.75" y="0.75" width="21.5" height="10.5" rx="2.5" stroke="currentColor" strokeWidth={1} />
      <rect x="2.25" y="2.25" width="15" height="7.5" rx="1.2" fill="currentColor" />
      <path d="M24 4v4a2 2 0 0 0 0-4Z" fill="currentColor" />
    </svg>
  );
}
