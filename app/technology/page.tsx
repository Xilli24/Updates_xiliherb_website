import Accordion from "@/components/Accordion";

const GRAIN = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E")`;

function Cards({ items }: { items: string[] }) {
  return (
    <div className="grid sm:grid-cols-2 gap-3 mt-5">
      {items.map((item) => (
        <div
          key={item}
          className="p-4 text-[13px] leading-relaxed"
          style={{ background: "#E8E6DE", borderLeft: "2px solid #C9CBBE", borderRadius: "2px", color: "#6B6A62" }}
        >
          {item}
        </div>
      ))}
    </div>
  );
}

function Callout({ text }: { text: string }) {
  return (
    <div
      className="my-8 p-8 relative overflow-hidden"
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

const accordionItems = [
  {
    num: "01",
    title: "Sustainable Extraction Philosophy",
    content: (
      <div>
        <p className="text-[14px] font-medium mb-5" style={{ color: "#44433E" }}>
          Research-Led Approaches to Resource-Efficient Processing
        </p>
        <p className="text-[15px] leading-[1.8] mb-5" style={{ color: "#6B6A62" }}>
          At XiliHerb, sustainable extraction is viewed as more than a manufacturing
          step — it is a foundational design philosophy.
        </p>
        <p className="text-[15px] leading-[1.8]" style={{ color: "#6B6A62" }}>
          We are exploring process pathways that emphasize resource efficiency, renewable
          feedstocks, and responsible utilization of agricultural biomass — understanding how
          naturally occurring compounds can be developed through scientifically grounded,
          sustainability-oriented extraction methodologies.
        </p>
      </div>
    ),
  },
  {
    num: "02",
    title: "Agricultural Resource Utilization",
    content: (
      <div>
        <p className="text-[14px] font-medium mb-5" style={{ color: "#44433E" }}>
          Unlocking Greater Value From Agricultural Biomass
        </p>
        <p className="text-[15px] leading-[1.8] mb-5" style={{ color: "#6B6A62" }}>
          XiliHerb is exploring technologies that utilize agricultural feedstocks such as
          non-GMO corn cobs as raw material inputs for naturally derived ingredient pathways.
          Through biomass valorization approaches, we are studying how agricultural side
          streams can support higher-value molecular applications while encouraging more
          circular resource utilization models.
        </p>
        <p className="text-[15px] leading-[1.8]" style={{ color: "#6B6A62" }}>
          This reflects a broader commitment toward reducing dependency on conventional
          resource-intensive systems and creating sustainable value chains rooted in
          renewable biological resources.
        </p>
      </div>
    ),
  },
  {
    num: "03",
    title: "Xylitol Technology Direction",
    content: (
      <div>
        <p className="text-[14px] font-medium mb-5" style={{ color: "#44433E" }}>
          Exploring Naturally Derived Xylitol Pathways
        </p>
        <p className="text-[15px] leading-[1.8] mb-5" style={{ color: "#6B6A62" }}>
          Our research is focused on sustainable extraction and conversion approaches that
          can support future bio-based xylitol pathways through renewable feedstock
          utilization and process-oriented innovation.
        </p>
        <Callout text="The objective is not simply ingredient production, but the development of foundational technologies that align scientific advancement, sustainability priorities, and long-term industrial relevance." />
        <p className="text-[13px] font-medium mb-1" style={{ color: "#44433E" }}>Key areas of exploration:</p>
        <Cards items={[
          "Agricultural biomass valorization",
          "Sustainable extraction methodologies",
          "Bio-based molecular conversion pathways",
          "Resource-efficient processing systems",
          "Circular economy integration",
          "Future-oriented ingredient technologies",
        ]} />
      </div>
    ),
  },
  {
    num: "04",
    title: "Future Technology Vision",
    content: (
      <div>
        <p className="text-[14px] font-medium mb-5" style={{ color: "#44433E" }}>
          Advancing the Future of Sustainable Molecular Systems
        </p>
        <p className="text-[15px] leading-[1.8] mb-5" style={{ color: "#6B6A62" }}>
          Looking ahead, XiliHerb envisions contributing to a new generation of sustainable
          ingredient and molecular technologies shaped by biotechnology, renewable resources,
          and advanced process innovation.
        </p>
        <Callout text="Our long-term ambition is to help enable industrial systems where agricultural resources can be transformed more intelligently, efficiently, and sustainably into higher-value bio-based applications." />
      </div>
    ),
  },
];

export default function Technology() {
  return (
    <div>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden" style={{ background: "#0A2D3A" }}>
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: GRAIN }} />
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at 70% 40%, rgba(22,88,111,0.35) 0%, transparent 65%)" }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-8 pt-28 pb-24">
          <p className="text-[11px] uppercase tracking-[0.2em] font-medium mb-7" style={{ color: "#C9CBBE" }}>
            Technology
          </p>
          <h1
            className="text-4xl md:text-[52px] font-semibold leading-tight mb-8"
            style={{ color: "#F5F4EF", fontFamily: "var(--font-display)" }}
          >
            Engineering Sustainable Pathways for Next-Generation Bio-Based Ingredients
          </h1>
          <div className="space-y-5 max-w-2xl">
            <p className="text-[15px] leading-[1.8]" style={{ color: "rgba(245,244,239,0.78)" }}>
              Our technology direction combines biotechnology, extraction science, and agricultural
              resource utilization to explore how renewable biomass can support more sustainable
              molecular and ingredient pathways.
            </p>
            <p className="text-[14px] leading-[1.8]" style={{ color: "rgba(245,244,239,0.55)" }}>
              Currently in technology development stage, the company is focused on research-oriented
              process innovation for scalable, environmentally responsible bio-based ingredient production.
            </p>
          </div>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(to right, transparent 5%, #C9CBBE 50%, transparent 95%)" }}
        />
      </section>

      {/* ── TECHNOLOGY AREAS ── */}
      <section style={{ background: "#F5F4EF" }}>
        <div className="max-w-5xl mx-auto px-8 py-20">
          <p
            className="text-[11px] uppercase tracking-[0.2em] font-medium mb-14"
            style={{ color: "#C9CBBE" }}
          >
            Technology Areas
          </p>
          <Accordion items={accordionItems} />
        </div>
      </section>

    </div>
  );
}
