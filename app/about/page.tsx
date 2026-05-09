import Divider from "@/components/Divider";

const GRAIN = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E")`;


function Callout({ text }: { text: string }) {
  return (
    <div
      className="my-10 p-8 relative overflow-hidden"
      style={{ background: "#1A1A18", borderRadius: "2px" }}
    >
      <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: GRAIN }} />
      <p
        className="relative z-10 text-[17px] leading-[1.75] font-medium"
        style={{ color: "#F5F4EF", fontFamily: "var(--font-display)" }}
      >
        {text}
      </p>
    </div>
  );
}

export default function About() {
  return (
    <div>

      {/* ── HERO — light editorial ── */}
      <section
        className="relative overflow-hidden"
        style={{ background: "#F5F4EF", minHeight: "62vh" }}
      >
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at 15% 70%, rgba(201,203,190,0.45) 0%, transparent 60%)" }}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-8 pt-28 pb-20">
          <p
            className="text-[11px] uppercase tracking-[0.2em] font-medium mb-10"
            style={{ color: "#C9CBBE" }}
          >
            About XiliHerb
          </p>
          <div className="grid lg:grid-cols-[1fr,360px] gap-16 items-end">
            <h1
              className="text-5xl md:text-[62px] font-semibold leading-[1.04]"
              style={{ color: "#1A1A18", fontFamily: "var(--font-display)" }}
            >
              Engineering Sustainable Pathways for the Future of Bio-Based Ingredients
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
      <section className="py-24" style={{ background: "#F5F4EF" }}>
        <div className="max-w-6xl mx-auto px-8">
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
      <section className="py-24" style={{ background: "#FAFAF8" }}>
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
          </div>
        </div>
      </section>

      <Divider />

      {/* ── 03: WHY NATURAL EXTRACTS ── */}
      <section className="py-24" style={{ background: "#F5F4EF" }}>
        <div className="max-w-6xl mx-auto px-8">
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
              <Callout text="At XiliHerb, we see natural extract and bio-based ingredient innovation as part of a broader transition toward circular and sustainable industrial ecosystems — where agricultural resources, scientific advancement, and process innovation can collectively create long-term value." />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
