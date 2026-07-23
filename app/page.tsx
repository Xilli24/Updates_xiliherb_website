import type { Metadata } from "next";
import Image from "next/image";
import { Leaf, FlaskConical, Droplets, Sparkles, Microscope, Globe, Sprout } from "lucide-react";
import { GRAIN } from "@/lib/constants";
import RadarHero from "@/components/RadarHero";
import HeroBgCarousel from "@/components/HeroBgCarousel";
import MagneticButton from "@/components/MagneticButton";
import JsonLd from "@/components/JsonLd";
import CardFlip from "@/components/ui/flip-card";

const steps = [
  { label: "Biomass",     Icon: Leaf,         iconAnim: "animate-[leafSway_3s_ease-in-out_infinite]" },
  { label: "Conversion",  Icon: FlaskConical,  iconAnim: "animate-[flaskBubble_2s_ease-in-out_infinite]" },
  { label: "Refinement",  Icon: Droplets,      iconAnim: "animate-[dropFall_2.2s_ease-in-out_infinite]" },
  { label: "Ingredients", Icon: Sparkles,      iconAnim: "animate-[sparkTwinkle_2.4s_ease-in-out_infinite]" },
];

export const metadata: Metadata = {
  title: "Xiliherb | Bio-Based Xylitol from Agricultural Biomass",
  description:
    "Xiliherb Naturals Pvt Ltd. From Biomass to Breakthrough — converting low-value corn cob biomass into high-value xylitol and sustainable bio-based ingredients through enzymatic bioprocessing.",
  alternates: {
    canonical: "https://www.xiliherb.com",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Xiliherb Naturals Pvt Ltd",
  "legalName": "Xiliherb Naturals Private Limited",
  "url": "https://www.xiliherb.com",
  "logo": "https://www.xiliherb.com/logoxili.svg",
  "description":
    "Xiliherb Naturals Pvt Ltd converts low-value agricultural biomass into high-value sustainable ingredients through innovative enzymatic bioprocessing. Xylitol from corn cob hemicellulose is our first validated output.",
  "slogan": "From Biomass to Breakthrough",
  "foundingDate": "2026",
  "foundingLocation": {
    "@type": "Place",
    "name": "Bangalore, India",
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "No. 472/7, Balaji Arcade, 20th L Cross Rd, Ejipura, Koramangala VI Bk",
    "addressLocality": "Bangalore",
    "addressRegion": "Karnataka",
    "postalCode": "560095",
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
    "Sustainable ingredient innovation",
  ],
  "sameAs": ["https://www.linkedin.com/company/xiliherb-naturals-private-limited"],
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Bio-Based Xylitol",
  "description": "High-purity xylitol produced from non-GMO corn cob hemicellulose through enzymatic bioconversion. Naturally identical to conventional xylitol, bio-derived, with full farm-to-lab traceability.",
  "image": "https://www.xiliherb.com/xylitol.jpg",
  "brand": { "@type": "Brand", "name": "XiliHerb" },
  "category": "Bio-based food ingredient",
  "material": "Agricultural biomass — non-GMO corn cob hemicellulose",
  "countryOfOrigin": "IN",
  "producer": { "@type": "Organization", "name": "XiliHerb", "url": "https://xiliherb.com" },
  "additionalProperty": [
    { "@type": "PropertyValue", "name": "Production method", "value": "Enzymatic hydrolysis and bioconversion" },
    { "@type": "PropertyValue", "name": "Feedstock", "value": "Non-GMO corn cob hemicellulose, India-grown" },
    { "@type": "PropertyValue", "name": "Development stage", "value": "Lab-scale validation" },
  ],
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "price": "0",
    "priceCurrency": "INR",
    "priceValidUntil": "2027-12-31",
    "url": "https://www.xiliherb.com/contact",
  },
};

export default function Home() {
  return (
    <div>
      <JsonLd data={organizationSchema} />
      <JsonLd data={productSchema} />

      {/* ══════════ HERO — Navy ══════════ */}
      <section
        data-section="dark"
        className="relative overflow-hidden"
        style={{ background: "#1E3F6E", minHeight: "90vh" }}
      >
        <HeroBgCarousel />
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: GRAIN }} />
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at 75% 50%, rgba(91,172,46,0.08) 0%, transparent 65%)" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-8 py-32">
          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* Left — copy */}
            <div>
              <p
                className="text-[11px] uppercase tracking-[0.2em] font-medium mb-7"
                style={{ color: "#5BAC2E" }}
              >
                Science-Driven Bio Innovation
              </p>

              <h1
                className="text-5xl md:text-[58px] font-semibold leading-[1.06] mb-5"
                style={{ color: "#F7F6F2", fontFamily: "var(--font-display)" }}
              >
                <span
                  className="block text-[26px] font-bold tracking-[0.04em] mb-3"
                  style={{ color: "#5BAC2E" }}
                >
                  Xiliherb
                </span>
                Engineering Sustainable Pathways for{" "}
                <span style={{ color: "#5BAC2E" }}>Bio-Based Ingredients</span>
              </h1>

              <p
                className="text-[12px] uppercase tracking-[0.18em] font-medium mb-5"
                style={{ color: "rgba(255,255,255,0.42)", fontStyle: "italic" }}
              >
                From Biomass to Breakthrough
              </p>

              <p
                className="text-[15px] leading-[1.8] mb-5 max-w-lg"
                style={{ color: "rgba(255,255,255,0.72)" }}
              >
                XiliHerb is a science-driven biotechnology startup advancing natural
                extract and molecular conversion technologies using renewable
                agricultural resources.
              </p>

              <p
                className="text-[14px] leading-[1.8] mb-10 max-w-lg"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                XiliHerb operates at the intersection of biotechnology, sustainability,
                and AI-driven process innovation, developing scalable bioconversion
                systems for naturally derived xylitol and next-generation bio-based
                ingredients. Our platform combines enzymatic science with AI-assisted
                process modelling to accelerate optimisation in biomass conversion
                research.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <MagneticButton
                  href="/about"
                  className="text-[13px] font-medium px-6 py-3 transition-opacity hover:opacity-80"
                  style={{ background: "#5BAC2E", color: "#FFFFFF", borderRadius: "2px" }}
                >
                  Explore Our Vision
                </MagneticButton>
                <MagneticButton
                  href="/contact"
                  className="text-[13px] px-6 py-3 transition-colors hover:bg-white/5"
                  style={{
                    border: "1px solid rgba(255,255,255,0.25)",
                    color: "#F7F6F2",
                    borderRadius: "2px",
                  }}
                >
                  Partner With Us
                </MagneticButton>
              </div>

              <p
                className="text-[11px] uppercase tracking-[0.14em]"
                style={{ color: "rgba(255,255,255,0.35)" }}
              >
                Science-Led &nbsp;·&nbsp; Biotechnology &nbsp;·&nbsp; Agricultural Biomass Valorization
              </p>
            </div>

            {/* Right — page navigation radar */}
            <div className="hidden lg:block">
              <RadarHero />
            </div>

          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(to right, transparent 5%, #5BAC2E 50%, transparent 95%)" }}
        />
        <div
          style={{
            position: "absolute", right: "-24px", bottom: "-36px",
            opacity: 0.045, pointerEvents: "none", zIndex: 0,
            userSelect: "none",
          }}
          aria-hidden="true"
        >
          <Image
            src="/logoxili.png"
            alt=""
            width={340}
            height={274}
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </div>
      </section>

      {/* ══════════ WHAT WE BUILD — Off-White ══════════ */}
      <section data-section="light" style={{ background: "#F7F6F2" }}>
        <div className="max-w-7xl mx-auto px-8 py-28">

          <div className="mb-16">
            <p
              className="text-[13px] uppercase tracking-[0.16em] font-medium mb-5"
              style={{ color: "#2C2C2C" }}
            >
              What We Build &nbsp;&nbsp; 01 / 03
            </p>
            <h2
              className="text-3xl md:text-[38px] font-semibold leading-tight max-w-2xl"
              style={{ color: "#1E3F6E", fontFamily: "var(--font-display)" }}
            >
              A New Standard in Sustainable Ingredient Production
            </h2>
          </div>

          <div className="flex flex-wrap gap-6">
            <CardFlip
              color="#5BAC2E"
              iconName="wheat"
              title="Feedstock Selection"
              subtitle="Agricultural residues, reimagined"
              description="Non-GMO corn cobs and other agricultural residues serve as our scalable raw material inputs for naturally derived ingredient pathways."
              features={[
                "High xylan content (30–35%)",
                "Zero-cost farm byproduct",
                "India-grown & locally sourced",
                "Diverts residues from open burning",
              ]}
            />
            <CardFlip
              color="#1A9BA0"
              iconName="flask"
              title="Conversion Pathways"
              subtitle="Chemistry without compromise"
              description="We apply bioconversion and sustainable extraction techniques for bio-based molecular transformation and circular resource utilization."
              features={[
                "No harsh acid catalysts",
                "High process selectivity",
                "Mild temperature & pressure",
                "Scalable batch architecture",
              ]}
            />
            <CardFlip
              color="#2D6B35"
              iconName="layers"
              title="Platform Thinking"
              subtitle="One feedstock, many outputs"
              description="Our technology platform generates multiple ingredient outputs from a single renewable biomass feedstock, maximising value at every stage."
              features={[
                "Xylitol as primary output",
                "Lignin → bioenergy input",
                "Cellulose → material feedstock",
                "Net-zero residue target",
              ]}
            />
          </div>

        </div>
      </section>

      {/* ══════════ PROCESS — Navy ══════════ */}
      <section data-section="dark" className="relative overflow-hidden" style={{ background: "#1E3F6E" }}>
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: GRAIN }} />

        <div className="relative z-10 max-w-7xl mx-auto px-8 py-28">

          <div className="text-center mb-20">
            <p
              className="text-[11px] uppercase tracking-[0.2em] font-medium mb-5"
              style={{ color: "#5BAC2E" }}
            >
              Technology Direction &nbsp;&nbsp; 02 / 03
            </p>
            <h2
              className="text-3xl md:text-[38px] font-semibold leading-tight max-w-2xl mx-auto"
              style={{ color: "#F7F6F2", fontFamily: "var(--font-display)" }}
            >
              From Agricultural Biomass to Future-Ready Ingredient Systems
            </h2>
            <p
              className="mt-6 text-[15px] max-w-xl mx-auto leading-[1.8]"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              Our process systems combine sustainable extraction, biomass utilization,
              and bio-based molecular innovation into a coherent, scalable pipeline.
            </p>
          </div>

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-12 md:gap-0 max-w-3xl mx-auto">
            <div
              className="hidden md:block absolute top-[27px] left-[56px] right-[56px] h-px"
              style={{ background: "linear-gradient(to right, #2D6B35, #5BAC2E, #1A9BA0)" }}
            />
            {steps.map(({ label, Icon, iconAnim }, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center gap-4">
                <div
                  className="w-14 h-14 flex items-center justify-center rounded-full border"
                  style={{ background: "#16325A", borderColor: "#2D6B35" }}
                >
                  <Icon className={`w-5 h-5 ${iconAnim}`} style={{ color: "#5BAC2E" }} />
                </div>
                <p
                  className="text-[11px] uppercase tracking-[0.14em]"
                  style={{ color: "rgba(255,255,255,0.55)" }}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════ CLOSING HERO — Organic Gradient ══════════ */}
      <section data-section="dark" className="relative overflow-hidden" style={{ background: "#061c2e" }}>

        {/* Layered organic gradient blobs */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: [
            "radial-gradient(ellipse at 72% 12%, rgba(26,155,160,0.55) 0%, transparent 50%)",
            "radial-gradient(ellipse at 88% 65%, rgba(20,110,118,0.35) 0%, transparent 45%)",
            "radial-gradient(ellipse at 18% 80%, rgba(45,107,53,0.30) 0%, transparent 50%)",
            "radial-gradient(ellipse at 40% 50%, rgba(30,63,110,0.15) 0%, transparent 60%)",
          ].join(", ")
        }} />

        <div className="relative z-10 max-w-7xl mx-auto px-8 py-32">

          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-12"
            style={{ border: "1px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.05)" }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#5BAC2E" }} />
            <span className="text-[11px] uppercase tracking-[0.22em] font-medium" style={{ color: "rgba(255,255,255,0.65)" }}>
              Long-Term Vision &nbsp;·&nbsp; 03 / 03
            </span>
          </div>

          {/* Heading */}
          <h2
            className="text-4xl md:text-[58px] font-semibold leading-[1.08] max-w-3xl mb-7"
            style={{ color: "#F7F6F2", fontFamily: "var(--font-display)" }}
          >
            Building the Future of{" "}
            <span style={{
              color: "#5BAC2E",
              textShadow: "0 0 35px rgba(91,172,46,0.65), 0 0 70px rgba(91,172,46,0.3)",
            }}>
              Sustainable
            </span>{" "}
            Ingredient Innovation.
          </h2>

          {/* Subtext */}
          <p className="text-[15px] leading-[1.85] max-w-lg mb-10" style={{ color: "rgba(255,255,255,0.58)" }}>
            We welcome collaboration across science, sustainability, biotechnology,
            and future-oriented industrial ecosystems.
          </p>

          {/* Domain pills */}
          <div className="flex flex-wrap gap-3 mb-10">
            {[
              { Icon: Microscope, label: "Science" },
              { Icon: Leaf,       label: "Sustainability" },
              { Icon: Sprout,     label: "Biotechnology" },
              { Icon: Globe,      label: "Ecosystems" },
            ].map(({ Icon: PillIcon, label }) => (
              <div
                key={label}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full transition-colors duration-300 hover:bg-white/10"
                style={{ border: "1px solid rgba(255,255,255,0.14)", background: "rgba(255,255,255,0.05)" }}
              >
                <PillIcon className="w-3.5 h-3.5" style={{ color: "#5BAC2E" }} />
                <span className="text-[13px] font-medium" style={{ color: "rgba(255,255,255,0.78)" }}>{label}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-6">
            <MagneticButton
              href="/contact"
              className="text-[13px] font-semibold px-7 py-3.5 rounded-lg transition-opacity hover:opacity-90"
              style={{ background: "#5BAC2E", color: "#061c2e" }}
            >
              Connect With Us
            </MagneticButton>
            <MagneticButton
              href="/xylitol-technology"
              className="inline-flex items-center gap-2 text-[13px] font-medium transition-colors hover:text-white"
              style={{ color: "rgba(255,255,255,0.60)" }}
            >
              Explore Our Technology
              <span style={{ color: "rgba(255,255,255,0.60)" }}>→</span>
            </MagneticButton>
          </div>

        </div>
      </section>

    </div>
  );
}
