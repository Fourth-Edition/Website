import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import { geistMono, ebGaramond } from "./fonts";

export const metadata: Metadata = {
  title: "Fourth Edition — Software House",
  description:
    "High-performance websites, web & mobile applications, CRM/ERP systems, branding, and marketing services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={` ${geistMono.variable}  ${ebGaramond.variable} h-screen antialiased`}
    >
      <body className={`min-h-screen flex flex-col`}>
        <NavBar />
        <main className="flex-grow flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
