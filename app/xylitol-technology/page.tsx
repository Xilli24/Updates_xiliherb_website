import type { Metadata } from "next";
import Accordion from "@/components/Accordion";
import Callout from "@/components/Callout";
import StatCards from "@/components/StatCards";
import { ExtractionCards, VisionCards } from "@/components/TechSectionCards";
import RevealSection from "@/components/RevealSection";
import TechnologyTimeline from "@/components/TechnologyTimeline";
import { GRAIN } from "@/lib/constants";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Xylitol Technology — Enzymatic Hydrolysis & Corn Cob Bioconversion | XiliHerb",
  description:
    "XiliHerb's xylitol technology converts non-GMO corn cob hemicellulose into bio-based xylitol through enzymatic hydrolysis — without harsh acid catalysts, at ambient temperature, with near-zero feedstock cost. Currently in lab-scale development with three active extraction protocols.",
  openGraph: {
    title: "Xylitol Technology — Enzymatic Hydrolysis | XiliHerb",
    description: "Enzymatic hydrolysis of corn cob hemicellulose into bio-based xylitol. No harsh acids. Ambient temperature. Near-zero feedstock cost.",
  },
  twitter: {
    title: "Xylitol Technology | XiliHerb",
    description: "Enzymatic bioconversion of corn cob hemicellulose into bio-based xylitol. Lab-scale development stage.",
  },
};

const accordionItems = [
  {
    num: "01",
    title: "Sustainable Extraction Philosophy",
    content: (
      <RevealSection threshold={0} delay={0}>
        <div>
          <p className="text-[14px] font-medium mb-5" style={{ color: "#2C2C2C" }}>
            Research-Led Approaches to Resource-Efficient Processing
          </p>
          <p className="text-[15px] leading-[1.8] mb-5" style={{ color: "#6B6B6B" }}>
            At XiliHerb, sustainable extraction is viewed as more than a manufacturing
            step — it is a foundational design philosophy.
          </p>
          <p className="text-[15px] leading-[1.8] mb-2" style={{ color: "#6B6B6B" }}>
            We are exploring process pathways that emphasize resource efficiency, renewable
            feedstocks, and responsible utilization of agricultural biomass — understanding how
            naturally occurring compounds can be developed through scientifically grounded,
            sustainability-oriented extraction methodologies.
          </p>
          <ExtractionCards />
        </div>
      </RevealSection>
    ),
  },
  {
    num: "02",
    title: "Agricultural Resource Utilization",
    content: (
      <RevealSection threshold={0} delay={0}>
        <div>
          <p className="text-[14px] font-medium mb-5" style={{ color: "#2C2C2C" }}>
            Unlocking Greater Value From Agricultural Biomass
          </p>
          <p className="text-[15px] leading-[1.8] mb-2" style={{ color: "#6B6B6B" }}>
            XiliHerb uses agricultural feedstocks such as non-GMO corn cobs as raw material
            inputs for naturally derived ingredient pathways. Through biomass valorization,
            agricultural side streams support higher-value molecular applications while
            encouraging more circular resource utilization models.
          </p>
          <StatCards items={[
            { num: "40%",  unit: "of corn plant",  label: "Corn cob represents ~40% of the harvestable plant by dry weight" },
            { num: "90%+", unit: "xylan content",  label: "Corn cob hemicellulose is among the richest natural xylan sources" },
            { num: "₹0",   unit: "feedstock cost", label: "Agricultural residue sourced as a byproduct — near-zero raw material cost" },
          ]} />
        </div>
      </RevealSection>
    ),
  },
  {
    num: "03",
    title: "Future Technology Vision",
    content: (
      <RevealSection threshold={0} delay={0}>
        <div>
          <p className="text-[14px] font-medium mb-5" style={{ color: "#2C2C2C" }}>
            Advancing the Future of Sustainable Molecular Systems
          </p>
          <p className="text-[15px] leading-[1.8] mb-5" style={{ color: "#6B6B6B" }}>
            Looking ahead, XiliHerb contributes to a new generation of sustainable
            ingredient and molecular technologies shaped by biotechnology, renewable resources,
            and advanced process innovation.
          </p>
          <Callout text="XiliHerb is building intelligent and sustainable bioconversion systems that transform agricultural resources into high-value bio-based applications, integrating biotechnology with AI-assisted process optimisation to analyse enzyme activity, feedstock composition, and reaction conditions while accelerating research efficiency and reducing experimental iteration cycles." />
          <VisionCards />
        </div>
      </RevealSection>
    ),
  },
];

const techArticleSchema = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": "Xylitol Technology: Enzymatic Bioconversion of Corn Cob Hemicellulose",
  "description": "XiliHerb's xylitol technology converts non-GMO corn cob hemicellulose into bio-based xylitol through enzymatic hydrolysis at ambient temperature without harsh acid catalysts.",
  "about": [
    {
      "@type": "Thing",
      "name": "Enzymatic hydrolysis",
      "description": "Biological process converting xylan polysaccharides into fermentable xylose without strong acid catalysts",
    },
    {
      "@type": "Thing",
      "name": "Corn cob hemicellulose",
      "description": "Agricultural biomass fraction containing 30-35% xylan — primary feedstock for XiliHerb's xylitol bioconversion platform",
    },
    {
      "@type": "Thing",
      "name": "Bio-based xylitol",
      "description": "Sugar alcohol produced from xylose via enzymatic bioconversion — naturally identical to conventional xylitol, used in food, oral care and pharmaceutical industries",
    },
  ],
  "keywords": "xylitol technology, enzymatic hydrolysis xylitol, corn cob valorisation, xylan bioconversion, bio-based xylitol production, hemicellulose extraction India, xylose fermentation, xylitol manufacturing process",
  "applicationCategory": "Biotechnology",
  "author": {
    "@type": "Organization",
    "name": "XiliHerb",
  },
  "publisher": {
    "@type": "Organization",
    "name": "XiliHerb",
    "url": "https://xiliherb.com",
  },
};

export default function Technology() {
  return (
    <div>
      <JsonLd data={techArticleSchema} />

      {/* ── HERO ── */}
      <section data-section="dark" className="relative overflow-hidden" style={{ background: "#1E3F6E" }}>
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: GRAIN }} />
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at 70% 40%, rgba(26,155,160,0.25) 0%, transparent 65%)" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-8 pt-28 pb-24">
          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* Left — copy */}
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] font-medium mb-7" style={{ color: "#5BAC2E" }}>
                Technology
              </p>
              <RevealSection delay={0}>
                <div>
                  <h1
                    className="text-4xl md:text-[52px] font-semibold leading-tight mb-8"
                    style={{ color: "#F7F6F2", fontFamily: "var(--font-display)" }}
                  >
                    Xylitol Technology: From Corn Cob to <span style={{ color: "#5BAC2E" }}>Bio-Based Molecule</span>
                  </h1>
                  <div className="space-y-5 max-w-2xl">
                    <p className="text-[15px] leading-[1.8]" style={{ color: "rgba(255,255,255,0.78)" }}>
                      Our technology combines biotechnology, extraction science, and agricultural
                      resource utilization to convert renewable biomass into sustainable molecular
                      and ingredient pathways. Our primary feedstock is non-GMO corn cob
                      hemicellulose — an agricultural residue naturally rich in xylan and sourced
                      from India-grown farms.
                    </p>
                    <p className="text-[14px] leading-[1.8]" style={{ color: "rgba(255,255,255,0.55)" }}>
                      Currently in technology development stage, the company is focused on research-oriented
                      process innovation for scalable, environmentally responsible bio-based ingredient production.
                    </p>
                  </div>
                </div>
              </RevealSection>
            </div>

            {/* Right — orbital process timeline */}
            <div className="hidden lg:block relative" style={{ height: "480px" }}>
              <TechnologyTimeline />
            </div>

          </div>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(to right, transparent 5%, #5BAC2E 50%, transparent 95%)" }}
        />
      </section>

      {/* ── TECHNOLOGY AREAS ── */}
      <section data-section="light" style={{ background: "#F7F6F2" }}>
        <div className="max-w-5xl mx-auto px-8 py-20">
          <p
            className="text-[13px] uppercase tracking-[0.16em] font-medium mb-14"
            style={{ color: "#2C2C2C" }}
          >
            Technology Areas
          </p>
          <Accordion items={accordionItems} />
        </div>
      </section>

    </div>
  );
}
