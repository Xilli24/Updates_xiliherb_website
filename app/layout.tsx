import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "XiliHerb | Plant-Derived Xylitol from Sustainable Biomass",
  description:
    "XiliHerb produces high-purity xylitol from agricultural biomass for food, oral care, and pharmaceutical industries. Research-backed, scalable, and sustainably sourced.",
  keywords: "xylitol, plant-derived xylitol, sustainable biomass, food grade xylitol, pharmaceutical xylitol, oral care",
  openGraph: {
    title: "XiliHerb | Plant-Derived Xylitol",
    description: "High-purity xylitol from sustainable agricultural biomass.",
    siteName: "XiliHerb",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
