import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60,
  },
  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "@gsap/react",
      "@base-ui/react",
      "clsx",
      "tailwind-merge",
    ],
  },
};

export default nextConfig;

