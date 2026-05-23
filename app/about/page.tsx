import type { Metadata } from "next";
import Callout from "@/components/Callout";
import ComparisonTable from "@/components/ComparisonTable";
import RevealImage from "@/components/RevealImage";
import AboutCards from "@/components/AboutCards";
import type { SectionMeta } from "@/components/AboutCards";
import DisciplineVenn from "@/components/DisciplineVenn";
import BrochureSection from "@/components/BrochureSection";

export const metadata: Metadata = {
  title: "About XiliHerb — Our Story, Conviction & Platform Vision",
  description:
    "XiliHerb was founded on a single observation: India burns millions of tonnes of corn cob residue annually while importing the same molecules it could produce domestically. We are building the bioconversion platform to close that gap — science-first, India-rooted, globally designed.",
  openGraph: {
    title: "About XiliHerb — Our Story & Platform Vision",
    description: "Founded on one observation: India burns what it could build with. We are building the bioconversion platform to close that gap.",
  },
};

const sections: SectionMeta[] = [
  {
    num: "01",
    label: "Our Vision",
    title: "Building Smarter Pathways for Sustainable Molecular Innovation",
    teaser:
      "We believe ingredient innovation will be shaped by technologies that are simultaneously more sustainable, resource-efficient, and scientifically advanced.",
  },
  {
    num: "02",
    label: "Technology Direction",
    title: "Research-Led Development for Bio-Based Ingredient Systems",
    teaser:
      "Exploring sustainable extraction and conversion technologies that enable naturally derived ingredient pathways from agricultural biomass.",
  },
  {
    num: "03",
    label: "Why Natural Extracts",
    title: "Advancing a More Sustainable Ingredient Future",
    teaser:
      "Natural extract technologies represent an important shift toward more environmentally responsible and resource-conscious industrial systems.",
  },
];

export default function About() {
  return (
    <div>

      {/* ── HERO ── */}
      <section
        data-section="dark"
        className="relative overflow-hidden"
        style={{ background: "#1E3F6E" }}
      >
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at 15% 70%, rgba(26,155,160,0.2) 0%, transparent 60%)", zIndex: 0 }}
        />
        <div
          className="absolute inset-0 dot-grid pointer-events-none"
          style={{ opacity: 0.18, zIndex: 0 }}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-8 pt-28 pb-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left — copy */}
            <div>
              <p
                className="text-[13px] uppercase tracking-[0.16em] font-medium mb-10"
                style={{ color: "#5BAC2E" }}
              >
                About XiliHerb
              </p>
              <h1
                className="text-5xl md:text-[56px] font-semibold leading-[1.06] mb-8"
                style={{ color: "#F7F6F2", fontFamily: "var(--font-display)" }}
              >
                A Science-First Company at the Frontier of <span style={{ color: "#5BAC2E" }}>Bio-Based Innovation</span>
              </h1>
              <div className="space-y-4">
                <p className="text-[15px] leading-[1.8]" style={{ color: "rgba(255,255,255,0.75)" }}>
                  XiliHerb is a science-driven biotechnology startup advancing natural extract and
                  molecular conversion technologies using renewable agricultural resources.
                </p>
                <p className="text-[13px] leading-[1.8]" style={{ color: "rgba(255,255,255,0.5)" }}>
                  Rather than positioning ourselves as a conventional product company, XiliHerb is
                  being built as a long-term technology and innovation platform — advancing scalable
                  bio-based processing systems for applications including naturally derived xylitol
                  and future health-focused ingredients.
                </p>
              </div>
            </div>

            {/* Right — discipline Venn diagram */}
            <div className="hidden lg:flex items-center justify-center" style={{ height: "460px" }}>
              <DisciplineVenn />
            </div>

          </div>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(to right, transparent 5%, #5BAC2E 50%, transparent 95%)" }}
        />
      </section>

      {/* ── SECTION CARDS ── */}
      <section data-section="light" style={{ background: "#F7F6F2" }}>
        <div className="max-w-6xl mx-auto px-8 py-20">
          <p
            className="text-[13px] uppercase tracking-[0.16em] font-medium mb-12"
            style={{ color: "#2C2C2C" }}
          >
            Explore Our Story
          </p>

          <AboutCards sections={sections}>

            {/* 01 — Vision */}
            <div>
              <p className="text-[15px] leading-[1.8] mb-5" style={{ color: "#6B6B6B" }}>
                We believe the future of ingredient innovation will be shaped by technologies
                that are simultaneously more sustainable, resource-efficient, and scientifically
                advanced.
              </p>
              <p className="text-[15px] leading-[1.8] mb-6" style={{ color: "#6B6B6B" }}>
                XiliHerb's vision is to help accelerate the transition toward bio-based
                ingredient ecosystems by developing technologies that utilize renewable
                feedstocks, reduce dependency on conventional chemical-intensive pathways,
                and unlock greater value from agricultural resources.
              </p>
              <Callout text="Our long-term ambition is to contribute to a new generation of sustainable molecular production systems — where science, scalability, and environmental responsibility can coexist." />
            </div>

            {/* 02 — Technology Direction */}
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-[15px] leading-[1.8] mb-5" style={{ color: "#6B6B6B" }}>
                  XiliHerb is currently focused on exploring sustainable extraction and conversion technologies that can enable naturally derived ingredient pathways from agricultural biomass.
                </p>
                <p className="text-[15px] leading-[1.8]" style={{ color: "#6B6B6B" }}>
                  Our approach combines scientific research, process development, and sustainability-oriented engineering — with a focus on long-term platform potential rather than short-term product commercialization.
                </p>
              </div>
              <RevealImage
                src="/processabout.jpg"
                alt="Processing technology"
                width={520}
                height={360}
                style={{ filter: "saturate(0.8)" }}
              />
            </div>

            {/* 03 — Why Natural Extracts */}
            <div>
              <p className="text-[15px] leading-[1.8] mb-5" style={{ color: "#6B6B6B" }}>
                Natural extract technologies represent an important shift toward more
                environmentally responsible and resource-conscious industrial systems.
              </p>
              <p className="text-[15px] leading-[1.8] mb-6" style={{ color: "#6B6B6B" }}>
                As industries increasingly seek sustainable alternatives to traditional
                ingredient manufacturing approaches, there is growing importance in developing
                technologies that can leverage renewable biological resources more efficiently
                and responsibly.
              </p>
              <ComparisonTable
                convSubtitle="Petroleum-based · Synthetic"
                xiliSubtitle="Bio-derived · Farm-to-lab"
                rows={[
                  { factor: "Raw material",     conventional: "Petroleum or imported hardwood",       ours: "Domestic agricultural crop residue" },
                  { factor: "Chemistry",        conventional: "Synthetic catalysts & solvents",       ours: "Enzymatic & bio-based conversion" },
                  { factor: "Carbon footprint", conventional: "High — energy-intensive refining",     ours: "Low — ambient-temperature process" },
                  { factor: "Traceability",     conventional: "Multi-tier opaque supply chain",       ours: "Direct farm-to-lab sourcing" },
                  { factor: "End product",      conventional: "Chemically identical but synthetic",   ours: "Naturally identical, bio-derived" },
                ]}
              />
              <Callout text="At XiliHerb, we see natural extract and bio-based ingredient innovation as part of a broader transition toward circular and sustainable industrial ecosystems — where agricultural resources, scientific advancement, and process innovation can collectively create long-term value." />
            </div>

          </AboutCards>
        </div>
      </section>

      <BrochureSection />

    </div>
  );
}
