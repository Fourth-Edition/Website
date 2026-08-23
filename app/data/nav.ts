export interface NavLink {
  label: string;
  href: string;
}

/**
 * Single source of truth for the primary navigation. The navbar renders
 * these in order — add a route here and it shows up there.
 */
export const navLinks: NavLink[] = [
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];
