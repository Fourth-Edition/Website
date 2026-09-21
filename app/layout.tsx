import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Fourth Edition — Software House | فورث إديشن للبرمجيات",
  description:
    "High-performance websites, web & mobile applications, CRM/ERP systems, branding, and marketing services.",
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
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
          <main className="flex-grow flex flex-col">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}

