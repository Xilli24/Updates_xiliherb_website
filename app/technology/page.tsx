import type { Metadata } from "next";
import Image from "next/image";
import Accordion from "@/components/Accordion";
import Callout from "@/components/Callout";
import StatCards from "@/components/StatCards";
import FeatureCards from "@/components/FeatureCards";
import ProcessFlow from "@/components/ProcessFlow";
import RevealSection from "@/components/RevealSection";
import { GRAIN } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Technology — XiliHerb",
  description:
    "XiliHerb's technology combines sustainable extraction, agricultural biomass valorization, and bio-based molecular conversion to build next-generation ingredient systems.",
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
          <FeatureCards items={[
            { icon: "Leaf",          title: "Renewable feedstock",  desc: "Non-GMO corn cob residues — a crop byproduct with no competing use." },
            { icon: "FlaskConical",  title: "Enzymatic hydrolysis", desc: "Breaks xylan polysaccharides into fermentable xylose without strong acids." },
            { icon: "Recycle",       title: "Solvent recovery",     desc: "Process solvents are recovered and recycled within the same batch cycle." },
            { icon: "Zap",           title: "Low energy input",     desc: "Ambient-temperature bioconversion significantly reduces thermal energy load." },
          ]} />
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
    title: "Xylitol Technology Direction",
    content: (
      <RevealSection threshold={0} delay={0}>
        <div>
          <p className="text-[14px] font-medium mb-5" style={{ color: "#2C2C2C" }}>
            Naturally Derived Xylitol Pathways
          </p>
          <p className="text-[15px] leading-[1.8] mb-5" style={{ color: "#6B6B6B" }}>
            Our research targets sustainable extraction and conversion approaches that
            support bio-based xylitol pathways through renewable feedstock utilization
            and process-oriented innovation.
          </p>
          <Callout text="The objective is not simply ingredient production, but the development of foundational technologies that align scientific advancement, sustainability priorities, and long-term industrial relevance." />
          <ProcessFlow steps={[
            { num: "01", title: "Harvest",     desc: "Post-harvest corn cobs collected from partner farms" },
            { num: "02", title: "Pretreat",    desc: "Steam explosion breaks lignocellulosic structure" },
            { num: "03", title: "Hydrolyse",   desc: "Enzymes release xylose sugars from hemicellulose" },
            { num: "04", title: "Ferment",     desc: "Xylose converted via bioconversion pathway" },
            { num: "05", title: "Purify",      desc: "Chromatographic separation removes impurities" },
            { num: "06", title: "Crystallise", desc: "Food-grade xylitol crystals formed and dried" },
          ]} />
        </div>
      </RevealSection>
    ),
  },
  {
    num: "04",
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
          <Callout text="Our long-term ambition is to help enable industrial systems where agricultural resources can be transformed more intelligently, efficiently, and sustainably into higher-value bio-based applications." />
          <FeatureCards items={[
            { icon: "Layers",     title: "Multi-output platform", desc: "Same biomass feedstock can yield xylose, arabinoxylan, and lignin derivatives." },
            { icon: "Globe",      title: "Export readiness",      desc: "Targeting EU and US food-grade certifications for international supply." },
            { icon: "Users",      title: "FPO integration",       desc: "Direct sourcing partnerships with farmer producer organisations across Karnataka." },
            { icon: "Microscope", title: "R&D pipeline",          desc: "Three second-generation extraction protocols currently in lab-scale testing." },
          ]} />
        </div>
      </RevealSection>
    ),
  },
];

export default function Technology() {
  return (
    <div>

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
                    From Corn Cob to Ingredient: How Our Process Works
                  </h1>
                  <div className="space-y-5 max-w-2xl">
                    <p className="text-[15px] leading-[1.8]" style={{ color: "rgba(255,255,255,0.78)" }}>
                      Our technology combines biotechnology, extraction science, and agricultural
                      resource utilization to convert renewable biomass into sustainable molecular
                      and ingredient pathways.
                    </p>
                    <p className="text-[14px] leading-[1.8]" style={{ color: "rgba(255,255,255,0.55)" }}>
                      Currently in technology development stage, the company is focused on research-oriented
                      process innovation for scalable, environmentally responsible bio-based ingredient production.
                    </p>
                  </div>
                </div>
              </RevealSection>
            </div>

            {/* Right — image */}
            <div className="hidden lg:block relative" style={{ height: "480px", borderRadius: "4px", overflow: "hidden" }}>
              <Image
                src="/Techno.png"
                alt="XiliHerb technology process"
                fill
                className="hero-img-kenburns"
                style={{ objectFit: "cover" }}
                priority
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to right, #1E3F6E 0%, transparent 40%)" }}
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, #1E3F6E 0%, transparent 35%)" }}
              />
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
