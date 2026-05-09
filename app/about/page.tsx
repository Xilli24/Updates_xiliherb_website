import type { Metadata } from "next";
import Divider from "@/components/Divider";
import Callout from "@/components/Callout";
import ComparisonTable from "@/components/ComparisonTable";
import RevealImage from "@/components/RevealImage";

export const metadata: Metadata = {
  title: "About — XiliHerb",
  description:
    "XiliHerb is a science-driven bio-innovation startup building sustainable technologies for natural extracts and next-generation bio-based ingredient systems.",
};

export default function About() {
  return (
    <div>

      {/* ── HERO — light editorial ── */}
      <section
        data-section="light"
        className="relative overflow-hidden"
        style={{ background: "#F5F4EF", minHeight: "62vh" }}
      >
        {/* radial gradient */}
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at 15% 70%, rgba(201,203,190,0.45) 0%, transparent 60%)", zIndex: 0 }}
        />
        {/* dot grid texture */}
        <div
          className="absolute inset-0 dot-grid pointer-events-none"
          style={{ opacity: 0.6, zIndex: 0 }}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-8 pt-28 pb-20">
          <p
            className="text-[13px] uppercase tracking-[0.16em] font-medium mb-10"
            style={{ color: "#44433E" }}
          >
            About XiliHerb
          </p>
          <div className="grid lg:grid-cols-[1fr,360px] gap-16 items-end">
            <h1
              className="text-5xl md:text-[62px] font-semibold leading-[1.04]"
              style={{ color: "#1A1A18", fontFamily: "var(--font-display)" }}
            >
              A Science-First Company at the Frontier of Bio-Based Innovation
            </h1>
            <div className="space-y-4 pb-1">
              <p className="text-[15px] leading-[1.8]" style={{ color: "#6B6A62" }}>
                XiliHerb is a science-driven bio-innovation startup developing sustainable
                technologies for natural extracts and next-generation bio-based ingredient systems.
              </p>
              <p className="text-[13px] leading-[1.8]" style={{ color: "#44433E" }}>
                Rather than positioning ourselves as a conventional product company, XiliHerb is
                being built as a long-term technology and innovation platform — where science,
                scalability, and environmental responsibility advance together.
              </p>
            </div>
          </div>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(to right, transparent 5%, #E8E6DE 50%, transparent 95%)" }}
        />
      </section>

      {/* ── 01: OUR VISION ── */}
      <section data-section="light" className="py-24 relative" style={{ background: "#F5F4EF" }}>
        {/* dot grid texture */}
        <div
          className="absolute inset-0 dot-grid pointer-events-none"
          style={{ opacity: 0.45, zIndex: 0 }}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-8">
          <div className="grid lg:grid-cols-[260px,1fr] gap-16 items-start">
            <div>
              <p
                className="text-[80px] font-bold leading-none select-none"
                style={{ color: "#E8E6DE", fontFamily: "var(--font-display)" }}
              >
                01
              </p>
              <div className="mt-4 pt-4" style={{ borderTop: "2px solid #C9CBBE" }}>
                <span className="text-[11px] uppercase tracking-[0.14em]" style={{ color: "#C9CBBE" }}>
                  Our Vision
                </span>
                <h2
                  className="text-xl font-semibold mt-2 leading-snug"
                  style={{ color: "#1A1A18", fontFamily: "var(--font-display)" }}
                >
                  Building Smarter Pathways for Sustainable Molecular Innovation
                </h2>
              </div>
            </div>
            <div>
              <p className="text-[15px] leading-[1.8] mb-5" style={{ color: "#6B6A62" }}>
                We believe the future of ingredient innovation will be shaped by technologies
                that are simultaneously more sustainable, resource-efficient, and scientifically
                advanced.
              </p>
              <p className="text-[15px] leading-[1.8] mb-5" style={{ color: "#6B6A62" }}>
                XiliHerb's vision is to help accelerate the transition toward bio-based
                ingredient ecosystems by developing technologies that utilize renewable
                feedstocks, reduce dependency on conventional chemical-intensive pathways,
                and unlock greater value from agricultural resources.
              </p>
              <Callout text="Our long-term ambition is to contribute to a new generation of sustainable molecular production systems — where science, scalability, and environmental responsibility can coexist." />
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ── 02: TECHNOLOGY DIRECTION ── */}
      <section data-section="light" className="py-24" style={{ background: "#FAFAF8" }}>
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid lg:grid-cols-[260px,1fr] gap-16 items-start">
            <div>
              <p
                className="text-[80px] font-bold leading-none select-none"
                style={{ color: "#E8E6DE", fontFamily: "var(--font-display)" }}
              >
                02
              </p>
              <div className="mt-4 pt-4" style={{ borderTop: "2px solid #C9CBBE" }}>
                <span className="text-[11px] uppercase tracking-[0.14em]" style={{ color: "#C9CBBE" }}>
                  Technology Direction
                </span>
                <h2
                  className="text-xl font-semibold mt-2 leading-snug"
                  style={{ color: "#1A1A18", fontFamily: "var(--font-display)" }}
                >
                  Research-Led Development for Bio-Based Ingredient Systems
                </h2>
              </div>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-[15px] leading-[1.8] mb-5" style={{ color: "#6B6A62" }}>
                  XiliHerb is currently focused on exploring sustainable extraction and conversion
                  technologies that can enable naturally derived ingredient pathways from
                  agricultural biomass.
                </p>
                <p className="text-[15px] leading-[1.8]" style={{ color: "#6B6A62" }}>
                  Our approach combines scientific research, process development, and
                  sustainability-oriented engineering — with a focus on long-term platform
                  potential rather than short-term product commercialization.
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
          </div>
        </div>
      </section>

      <Divider />

      {/* ── 03: WHY NATURAL EXTRACTS ── */}
      <section data-section="light" className="py-24 relative" style={{ background: "#F5F4EF" }}>
        {/* dot grid texture */}
        <div
          className="absolute inset-0 dot-grid pointer-events-none"
          style={{ opacity: 0.45, zIndex: 0 }}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-8">
          <div className="grid lg:grid-cols-[260px,1fr] gap-16 items-start">
            <div>
              <p
                className="text-[80px] font-bold leading-none select-none"
                style={{ color: "#E8E6DE", fontFamily: "var(--font-display)" }}
              >
                03
              </p>
              <div className="mt-4 pt-4" style={{ borderTop: "2px solid #C9CBBE" }}>
                <span className="text-[11px] uppercase tracking-[0.14em]" style={{ color: "#C9CBBE" }}>
                  Why Natural Extracts
                </span>
                <h2
                  className="text-xl font-semibold mt-2 leading-snug"
                  style={{ color: "#1A1A18", fontFamily: "var(--font-display)" }}
                >
                  Advancing a More Sustainable Ingredient Future
                </h2>
              </div>
            </div>
            <div>
              <p className="text-[15px] leading-[1.8] mb-5" style={{ color: "#6B6A62" }}>
                Natural extract technologies represent an important shift toward more
                environmentally responsible and resource-conscious industrial systems.
              </p>
              <p className="text-[15px] leading-[1.8] mb-5" style={{ color: "#6B6A62" }}>
                As industries increasingly seek sustainable alternatives to traditional
                ingredient manufacturing approaches, there is growing importance in developing
                technologies that can leverage renewable biological resources more efficiently
                and responsibly.
              </p>
              <ComparisonTable rows={[
                { factor: "Raw material",     conventional: "Petroleum or imported hardwood",       ours: "Domestic agricultural crop residue" },
                { factor: "Chemistry",        conventional: "Synthetic catalysts & solvents",       ours: "Enzymatic & bio-based conversion" },
                { factor: "Carbon footprint", conventional: "High — energy-intensive refining",     ours: "Low — ambient-temperature process" },
                { factor: "Traceability",     conventional: "Multi-tier opaque supply chain",       ours: "Direct farm-to-lab sourcing" },
                { factor: "End product",      conventional: "Chemically identical but synthetic",   ours: "Naturally identical, bio-derived" },
              ]} />
              <Callout text="At XiliHerb, we see natural extract and bio-based ingredient innovation as part of a broader transition toward circular and sustainable industrial ecosystems — where agricultural resources, scientific advancement, and process innovation can collectively create long-term value." />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
