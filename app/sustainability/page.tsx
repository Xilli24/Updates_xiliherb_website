import type { Metadata } from "next";
import AccordionGrid from "@/components/AccordionGrid";
import StatCards from "@/components/StatCards";
import FeatureCards from "@/components/FeatureCards";
import ComparisonTable from "@/components/ComparisonTable";
import TopoLines from "@/components/TopoLines";
import { GRAIN } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Sustainability — XiliHerb",
  description:
    "Sustainability is core to how XiliHerb builds — from circular economy thinking and agricultural value creation to responsible resource utilization and long-term environmental impact.",
};

const gridItems = [
  {
    num: "01",
    title: "Our Sustainability Vision",
    content: (
      <div>
        <p className="text-[13px] font-medium mb-3" style={{ color: "#44433E" }}>
          The scale of the opportunity
        </p>
        <StatCards items={[
          { num: "60M",  unit: "tonnes/year", label: "Corn cob agricultural waste generated in India annually" },
          { num: "3×",   unit: "less water",  label: "Bio-based extraction vs conventional chemical processing" },
          { num: "100%", unit: "renewable",   label: "All feedstocks sourced from post-harvest crop residues" },
        ]} />
      </div>
    ),
  },
  {
    num: "02",
    title: "Agricultural Value Creation",
    content: (
      <div>
        <p className="text-[14px] leading-[1.75] mb-4" style={{ color: "#6B6A62" }}>
          Large volumes of agricultural resources remain underutilized despite their
          potential to support higher-value applications.
        </p>
        <ComparisonTable rows={[
          { factor: "Feedstock",     conventional: "Imported birch wood",            ours: "Domestic corn cob waste" },
          { factor: "Process",       conventional: "High-pressure hydrogenation",    ours: "Enzymatic bioconversion" },
          { factor: "Waste output",  conventional: "Significant chemical effluent",  ours: "Lignin reused as bioenergy" },
          { factor: "Supply chain",  conventional: "Import-dependent",               ours: "India-grown, locally sourced" },
        ]} />
      </div>
    ),
  },
  {
    num: "03",
    title: "Circular Economy Thinking",
    content: (
      <div>
        <p className="text-[14px] leading-[1.75] mb-4" style={{ color: "#6B6A62" }}>
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
    num: "04",
    title: "Health & Sustainability",
    content: (
      <div>
        <p className="text-[14px] leading-[1.75] mb-4" style={{ color: "#6B6A62" }}>
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
      <section data-section="dark" className="relative overflow-hidden" style={{ background: "#0F2A18" }}>
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: GRAIN, zIndex: 0 }} />
        <TopoLines />
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at 60% 30%, rgba(39,94,53,0.6) 0%, transparent 60%)", zIndex: 2 }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-8 pt-28 pb-24">
          <p
            className="text-[11px] uppercase tracking-[0.2em] font-medium mb-7"
            style={{ color: "#C9CBBE" }}
          >
            Sustainability &amp; Impact
          </p>
          <h1
            className="text-4xl md:text-[52px] font-semibold leading-tight mb-8"
            style={{ color: "#F5F4EF", fontFamily: "var(--font-display)" }}
          >
            Building Innovation with Long-Term Responsibility
          </h1>
          <div className="space-y-5 max-w-2xl">
            <p className="text-[15px] leading-[1.8]" style={{ color: "rgba(245,244,239,0.78)" }}>
              At XiliHerb, sustainability is not an afterthought — it is a core part of how
              we think about technology, innovation, and long-term impact.
            </p>
            <p className="text-[15px] leading-[1.8]" style={{ color: "rgba(245,244,239,0.78)" }}>
              We believe future ingredient technologies should create value not only through
              products, but also through responsible resource utilization, sustainable processing
              systems, and broader ecosystem development.
            </p>
          </div>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(to right, transparent 5%, #C9CBBE 50%, transparent 95%)" }}
        />
      </section>

      {/* ── SUSTAINABILITY AREAS ── */}
      <section data-section="light" style={{ background: "#F5F4EF" }}>
        <div className="max-w-5xl mx-auto px-8 py-20">
          <p
            className="text-[13px] uppercase tracking-[0.16em] font-medium mb-14"
            style={{ color: "#44433E" }}
          >
            Our Approach
          </p>
          <AccordionGrid items={gridItems} />
        </div>
      </section>

    </div>
  );
}
