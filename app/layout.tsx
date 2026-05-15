import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProgressBar from "../components/ProgressBar";
import ChatBot from "../components/ChatBot";
import type { Metadata } from "next";
import "./globals.css";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "XiliHerb — Agricultural Bioconversion Platform | India",
  description:
    "XiliHerb is an India-based biotechnology platform converting agricultural crop residue into bio-based molecules through enzymatic bioconversion. Xylitol is our first validated output — with arabinoxylan and lignin derivatives following from the same platform.",
  openGraph: {
    title: "XiliHerb — Agricultural Bioconversion Platform",
    description: "India-based biotech platform converting agricultural residues into bio-based molecules. Xylitol is the first validated output.",
    siteName: "XiliHerb",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    title: "XiliHerb — Agricultural Bioconversion Platform",
    description: "India-based biotech platform converting agricultural residues into bio-based molecules.",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "XiliHerb",
  "url": "https://xiliherb.com",
  "logo": "https://xiliherb.com/logoxili.svg",
  "description": "India-based biotechnology platform converting agricultural crop residue into bio-based molecules through enzymatic bioconversion.",
  "foundingDate": "2026",
  "foundingLocation": {
    "@type": "Place",
    "name": "Bangalore, India",
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Bangalore",
    "addressRegion": "Karnataka",
    "addressCountry": "IN",
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "team@xiliherb.com",
    "contactType": "general",
  },
  "memberOf": {
    "@type": "Organization",
    "name": "AIC-GKVK Innovation Hub",
    "url": "https://www.uasbangalore.edu.in",
  },
  "knowsAbout": [
    "Enzymatic hydrolysis",
    "Agricultural biomass valorisation",
    "Bio-based xylitol production",
    "Corn cob hemicellulose extraction",
    "Circular bioeconomy",
    "Enzymatic bioconversion",
    "Arabinoxylan",
    "Sustainable ingredient manufacturing",
  ],
  "sameAs": [
    "https://www.linkedin.com/company/xiliherb",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="flex flex-col min-h-screen">
        <JsonLd data={organizationSchema} />
        <ProgressBar />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ChatBot />
      </body>
    </html>
  );
}
