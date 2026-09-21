import type { Metadata, Viewport } from "next";
import "./globals.css";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import { geistMono, ebGaramond, cairo } from "./fonts";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { LanguageProvider } from "./context/LanguageContext";
import ClientDotField from "@/components/ClientDotField";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0d1117",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://fourthedtion.vercel.app"),
  title: {
    default: "Fourth Edition — Software House | فورث إديشن للبرمجيات",
    template: "%s | Fourth Edition",
  },
  description:
    "Engineering high-performance websites, web & mobile applications, CRM/ERP enterprise systems, branding, and digital growth services.",
  keywords: [
    "Software House",
    "Web Development Agency",
    "Mobile App Development",
    "Enterprise CRM Systems",
    "ERP Development",
    "UI/UX Design",
    "Branding Agency",
    "Digital Marketing",
    "شركة برمجيات",
    "تطوير مواقع",
    "تطبيقات الجوال",
    "أنظمة إدارية",
  ],
  authors: [{ name: "Fourth Edition Software Organization" }],
  creator: "Fourth Edition",
  publisher: "Fourth Edition",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://fourthedtion.vercel.app",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fourthedtion.vercel.app",
    siteName: "Fourth Edition Software House",
    title: "Fourth Edition — Software House | فورث إديشن للبرمجيات",
    description:
      "Engineering high-performance websites, custom web & mobile apps, and enterprise systems.",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Fourth Edition Software House",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fourth Edition — Software House | فورث إديشن للبرمجيات",
    description:
      "Engineering high-performance websites, custom web & mobile apps, and enterprise systems.",
    images: ["/logo.png"],
  },
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Fourth Edition",
  alternateName: "فورث إديشن للبرمجيات",
  url: "https://fourthedtion.vercel.app",
  logo: "https://fourthedtion.vercel.app/logo.png",
  image: "https://fourthedtion.vercel.app/logo.png",
  description:
    "High-performance websites, web & mobile applications, CRM/ERP enterprise systems, branding, and digital growth services.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "Remote / Worldwide",
  },
  sameAs: [
    "https://instagram.com",
    "https://linkedin.com",
    "https://github.com",
  ],
  offers: [
    {
      "@type": "Offer",
      name: "Web Application Development",
      description: "High-performance React/Next.js web applications.",
    },
    {
      "@type": "Offer",
      name: "Mobile Application Development",
      description: "Cross-platform iOS and Android mobile solutions.",
    },
    {
      "@type": "Offer",
      name: "Enterprise CRM / ERP Systems",
      description: "Custom operational software and automated pipelines.",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-screen",
        "antialiased",
        geistMono.variable,
        ebGaramond.variable,
        cairo.variable,
        "font-sans",
        geist.variable
      )}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`min-h-screen flex flex-col`}>
        <LanguageProvider>
          <NavBar />
          <ClientDotField
            glowColor="transparent"
            color="#18435a"
            dotRadius={2}
            gradientFrom="rgba(24, 67, 90, 0.35)"
            gradientTo="rgba(42, 98, 143, 0.25)"
          />
          <main id="main-content" className="flex-grow flex flex-col">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}


