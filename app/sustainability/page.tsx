import type { Metadata } from "next";
import { Accordion05 } from "@/components/ui/accordion-05";
import FeatureCards from "@/components/FeatureCards";
import ComparisonTable from "@/components/ComparisonTable";
import TopoLines from "@/components/TopoLines";
import SustainabilityBanner from "@/components/SustainabilityBanner";
import { GRAIN } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Sustainability — XiliHerb",
  description:
    "Sustainability is core to how XiliHerb builds — from circular economy thinking and agricultural value creation to responsible resource utilization and long-term environmental impact.",
};

const accordionItems = [
  {
    id: "01",
    title: "Agricultural Value Creation",
    content: (
      <div>
        <p className="text-[14px] leading-[1.75] mb-4" style={{ color: "#6B6B6B" }}>
          Large volumes of agricultural resources remain underutilized despite their
          potential to support higher-value applications.
        </p>
        <ComparisonTable
          convSubtitle="Chemical · Import-dependent"
          xiliSubtitle="Bio-based · Domestically Grown"
          rows={[
            { factor: "Feedstock",     conventional: "Imported birch wood",            ours: "Domestic corn cob waste" },
            { factor: "Process",       conventional: "High-pressure hydrogenation",    ours: "Enzymatic bioconversion" },
            { factor: "Waste output",  conventional: "Significant chemical effluent",  ours: "Lignin reused as bioenergy" },
            { factor: "Supply chain",  conventional: "Import-dependent",               ours: "India-grown, locally sourced" },
          ]}
        />
      </div>
    ),
  },
  {
    id: "02",
    title: "Circular Economy Thinking",
    content: (
      <div>
        <p className="text-[14px] leading-[1.75] mb-4" style={{ color: "#6B6B6B" }}>
          Our development philosophy is aligned with circular economy thinking and
          sustainable process design.
        </p>
        <FeatureCards items={[
          { icon: "Recycle",  title: "Zero-waste loop",    desc: "Lignin and cellulose residues re-enter the process as bioenergy inputs." },
          { icon: "Droplets", title: "Minimal water use",  desc: "Closed-loop water recycling reduces freshwater consumption by up to 60%." },
          { icon: "Leaf",     title: "No synthetic inputs", desc: "Fermentation and enzymatic steps replace chemical catalysts entirely." },
          { icon: "BarChart2", title: "Carbon tracking",   desc: "Every batch measured against a baseline emissions benchmark." },
        ]} />
      </div>
    ),
  },
  {
    id: "03",
    title: "Health & Sustainability",
    content: (
      <div>
        <p className="text-[14px] leading-[1.75] mb-4" style={{ color: "#6B6B6B" }}>
          Growing global interest in healthier and more sustainable alternatives is
          creating opportunities for innovation in natural ingredient systems.
        </p>
        <FeatureCards items={[
          { icon: "Heart",   title: "Lower glycaemic index", desc: "Xylitol has a GI of 7 vs sucrose at 65 — suitable for diabetic diets." },
          { icon: "Shield",  title: "Dental health",         desc: "Clinically shown to inhibit Streptococcus mutans, reducing cavity risk." },
          { icon: "Sprout",  title: "Natural origin",        desc: "Derived entirely from agricultural plant matter, no synthetic chemistry." },
          { icon: "Globe",   title: "Market demand",         desc: "Global xylitol market projected to reach $1.4B by 2030 (CAGR 5.8%)." },
        ]} />
      </div>
    ),
  },
];

export default function Sustainability() {
  return (
    <div>

      {/* ── HERO ── */}
      <section data-section="dark" className="relative overflow-hidden" style={{ background: "#1E3F6E" }}>
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: GRAIN, zIndex: 0 }} />
        <TopoLines />
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at 60% 30%, rgba(45,107,53,0.45) 0%, transparent 60%)", zIndex: 2 }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-8 pt-28 pb-24">
          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* Left — copy */}
            <div>
              <p
                className="text-[11px] uppercase tracking-[0.2em] font-medium mb-7"
                style={{ color: "#5BAC2E" }}
              >
                Sustainability &amp; Impact
              </p>
              <h1
                className="text-4xl md:text-[52px] font-semibold leading-tight mb-8"
                style={{ color: "#F7F6F2", fontFamily: "var(--font-display)" }}
              >
                Building Innovation with <span style={{ color: "#5BAC2E" }}>Long-Term Responsibility</span>
              </h1>
              <div className="space-y-5 max-w-xl">
                <p className="text-[15px] leading-[1.8]" style={{ color: "rgba(255,255,255,0.78)" }}>
                  At XiliHerb, sustainability is not an afterthought — it is a core part of how
                  we think about technology, innovation, and long-term impact.
                </p>
                <p className="text-[15px] leading-[1.8]" style={{ color: "rgba(255,255,255,0.78)" }}>
                  We believe future ingredient technologies should create value not only through
                  products, but also through responsible resource utilization, sustainable processing
                  systems, and broader ecosystem development.
                </p>
              </div>
            </div>

            {/* Right — animated stats + circular economy principles */}
            <SustainabilityBanner />

          </div>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(to right, transparent 5%, #5BAC2E 50%, transparent 95%)" }}
        />
      </section>

      {/* ── SUSTAINABILITY AREAS ── */}
      <section data-section="light" style={{ background: "#F7F6F2" }}>
        <div className="max-w-5xl mx-auto px-8 py-20">
          <p
            className="text-[13px] uppercase tracking-[0.16em] font-medium mb-14"
            style={{ color: "#2C2C2C" }}
          >
            Our Approach
          </p>
          <Accordion05 items={accordionItems} defaultValue="01" />
        </div>
      </section>

    </div>
  );
}
