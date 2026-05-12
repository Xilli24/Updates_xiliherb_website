import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProgressBar from "../components/ProgressBar";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "XiliHerb — Agricultural Bioconversion Platform | India",
  description:
    "XiliHerb is an India-based biotechnology platform that converts agricultural crop residue into high-value bio-based molecules using enzymatic bioconversion. Xylitol represents our first validated output, with additional bio-based ingredient opportunities emerging from the same platform.",
  keywords: "xylitol, plant-derived xylitol, sustainable biomass, food grade xylitol, pharmaceutical xylitol, oral care",
  openGraph: {
    title: "XiliHerb — Agricultural Bioconversion Platform | India",
    description: "XiliHerb is an India-based biotechnology platform that converts agricultural crop residue into high-value bio-based molecules using enzymatic bioconversion.",
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
    <html lang="en" data-scroll-behavior="smooth">
      <body className="flex flex-col min-h-screen">
        <ProgressBar />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
