import AccordionGrid from "@/components/AccordionGrid";

const GRAIN = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E")`;

function Cards({ items }: { items: string[] }) {
  return (
    <div className="grid gap-2 mt-4">
      {items.map((item) => (
        <div
          key={item}
          className="p-3 text-[13px] leading-relaxed"
          style={{ background: "#E8E6DE", borderLeft: "2px solid #C9CBBE", borderRadius: "2px", color: "#6B6A62" }}
        >
          {item}
        </div>
      ))}
    </div>
  );
}

const gridItems = [
  {
    num: "01",
    title: "Our Sustainability Vision",
    content: (
      <div>
        <p className="text-[13px] font-medium mb-1" style={{ color: "#44433E" }}>
          Technologies we are developing align with:
        </p>
        <Cards items={[
          "Sustainable extraction pathways",
          "Circular economy principles",
          "Resource optimization",
          "Long-term environmental responsibility",
        ]} />
        <p className="text-[13px] font-medium mt-6 mb-1" style={{ color: "#44433E" }}>
          Ingredient ecosystems we aim to contribute toward:
        </p>
        <Cards items={[
          "Cleaner and more sustainable",
          "Aligned with future health & environmental needs",
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
        <p className="text-[13px] font-medium mb-1" style={{ color: "#44433E" }}>
          Technologies we explore to support:
        </p>
        <Cards items={[
          "Better utilization of agricultural by-products",
          "Value-added processing",
          "Resource efficiency",
          "Sustainable sourcing ecosystems",
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
        <p className="text-[13px] font-medium mb-1" style={{ color: "#44433E" }}>
          Systems we are interested in:
        </p>
        <Cards items={[
          "Efficient resource utilization",
          "Waste minimization",
          "Sustainable processing pathways",
          "Long-term environmental responsibility",
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
        <p className="text-[13px] font-medium mb-1" style={{ color: "#44433E" }}>
          Technologies we aim to contribute toward:
        </p>
        <Cards items={[
          "Healthier ingredient pathways",
          "Sustainable alternatives",
          "Environmentally conscious innovation",
        ]} />
      </div>
    ),
  },
];

export default function Sustainability() {
  return (
    <div>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden" style={{ background: "#0F2A18" }}>
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: GRAIN }} />
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at 60% 30%, rgba(39,94,53,0.6) 0%, transparent 60%)" }}
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
          <div className="space-y-5 max-w-2xl mb-10">
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
          <p className="text-[11px] uppercase tracking-[0.14em] mb-4" style={{ color: "rgba(201,203,190,0.6)" }}>
            Our approach combines:
          </p>
          <div className="grid sm:grid-cols-2 gap-3 max-w-2xl">
            {[
              "Science-driven innovation",
              "Sustainability-focused thinking",
              "Agricultural value creation",
              "Environmentally responsible development",
            ].map((item) => (
              <div
                key={item}
                className="px-4 py-3 text-[13px] font-medium"
                style={{
                  background: "rgba(201,203,190,0.10)",
                  border: "1px solid rgba(201,203,190,0.25)",
                  color: "#C9CBBE",
                  borderRadius: "2px",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(to right, transparent 5%, #C9CBBE 50%, transparent 95%)" }}
        />
      </section>

      {/* ── SUSTAINABILITY AREAS ── */}
      <section style={{ background: "#F5F4EF" }}>
        <div className="max-w-5xl mx-auto px-8 py-20">
          <p
            className="text-[11px] uppercase tracking-[0.2em] font-medium mb-14"
            style={{ color: "#C9CBBE" }}
          >
            Our Approach
          </p>
          <AccordionGrid items={gridItems} />
        </div>
      </section>

    </div>
  );
}
