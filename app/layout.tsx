import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProgressBar from "../components/ProgressBar";
import ChatBot from "../components/ChatBot";
import type { Metadata } from "next";
import { SITE } from "@/lib/site-config";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.canonicalBase),
  title: {
    default: `${SITE.legalName} | From Biomass to Breakthrough`,
    template: `%s | ${SITE.brand}`,
  },
  description:
    `${SITE.legalName} converts low-value agricultural biomass into high-value sustainable ingredients through innovative bioprocessing. Naturally derived xylitol from corn cob residues — India's agricultural bioconversion platform.`,
  keywords: [
    "xiliherb",
    "xiliherb naturals",
    "xiliherb naturals pvt ltd",
    "bio-based xylitol",
    "agricultural biomass bioconversion",
    "corn cob xylitol india",
    "enzymatic hydrolysis",
    "sustainable ingredients",
    "biomass valorization",
    "circular bioeconomy india",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    title: `${SITE.legalName} | From Biomass to Breakthrough`,
    description:
      `${SITE.legalName} — converting agricultural biomass into high-value sustainable ingredients through innovative enzymatic bioprocessing. Naturally derived xylitol from corn cob residues.`,
    url: SITE.canonicalBase,
    siteName: SITE.brand,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: `${SITE.canonicalBase}/logoxili.png`,
        width: 340,
        height: 274,
        alt: `${SITE.legalName} — From Biomass to Breakthrough`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.legalName} | From Biomass to Breakthrough`,
    description:
      `${SITE.legalName} — converting agricultural biomass into high-value sustainable ingredients through innovative bioprocessing.`,
    images: [`${SITE.canonicalBase}/logoxili.png`],
  },
  verification: {
    google: "FgsAuQDRVtfLhzN9NL0mwRGChVrSHeKTU-XTeWyi084",
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
        <ChatBot />
      </body>
    </html>
  );
}
