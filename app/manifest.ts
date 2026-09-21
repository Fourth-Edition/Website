import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Fourth Edition — Software House | فورث إديشن للبرمجيات",
    short_name: "Fourth Edition",
    description:
      "High-performance websites, web & mobile applications, CRM/ERP systems, branding, and marketing services.",
    start_url: "/",
    display: "standalone",
    background_color: "#0d1117",
    theme_color: "#0d1117",
    icons: [
      {
        src: "/icon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
