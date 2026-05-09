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

export default function Innovation() {
  return (
    <div>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden" style={{ background: "#1A1407" }}>
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: GRAIN }} />
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at 75% 50%, rgba(106,156,64,0.12) 0%, transparent 65%)" }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-8 pt-28 pb-24">
          <p
            className="text-[11px] uppercase tracking-[0.2em] font-medium mb-7"
            style={{ color: "#C9CBBE" }}
          >
            Innovation Ecosystem
          </p>
          <h1
            className="text-4xl md:text-[52px] font-semibold leading-tight mb-8"
            style={{ color: "#F5F4EF", fontFamily: "var(--font-display)" }}
          >
            Supported by Innovation Ecosystems
          </h1>
          <div className="space-y-5 max-w-2xl mb-10">
            <p className="text-[15px] leading-[1.8]" style={{ color: "rgba(245,244,239,0.78)" }}>
              XiliHerb is proudly associated with the AIC &amp; GKVK innovation ecosystem.
            </p>
            <p className="text-[15px] leading-[1.8]" style={{ color: "rgba(245,244,239,0.78)" }}>
              Access to mentorship, research networks, startup infrastructure, and
              innovation-driven communities plays an important role in strengthening our
              long-term technology and sustainability vision.
            </p>
            <p className="text-[14px] leading-[1.8]" style={{ color: "rgba(245,244,239,0.55)" }}>
              We value ecosystem collaboration as an important part of building meaningful
              and scalable innovation.
            </p>
          </div>
          <p className="text-[11px] uppercase tracking-[0.14em] mb-4" style={{ color: "rgba(201,203,190,0.6)" }}>
            Ecosystem Support Includes:
          </p>
          <div className="grid sm:grid-cols-2 gap-3 max-w-2xl">
            {[
              "Research & mentorship access",
              "Innovation-driven startup environment",
              "Technical guidance & ecosystem collaboration",
              "Exposure to sustainability-focused innovation networks",
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

      {/* ── 01: COLLABORATION & OPPORTUNITIES ── */}
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
                  Collaboration &amp; Opportunities
                </span>
                <h2
                  className="text-xl font-semibold mt-2 leading-snug"
                  style={{ color: "#1A1A18", fontFamily: "var(--font-display)" }}
                >
                  Building Meaningful Innovation Through Collaboration
                </h2>
              </div>
            </div>
            <div>
              <p className="text-[15px] leading-[1.8] mb-5" style={{ color: "#6B6A62" }}>
                We believe meaningful innovation is built through collaboration, shared
                learning, and ecosystem partnerships.
              </p>
              <p className="text-[13px] font-medium mb-1" style={{ color: "#44433E" }}>
                XiliHerb welcomes conversations with:
              </p>
              <Cards items={[
                "Researchers",
                "Sustainability partners",
                "Investors",
                "Food and biotech professionals",
                "Agricultural ecosystem stakeholders",
                "FPOs and sourcing networks",
                "Innovation-driven collaborators",
              ]} />
              <Callout text="As we continue to strengthen our technology direction, we remain open to partnerships aligned with our long-term vision for sustainable bio-based innovation." />
              <p className="text-[13px] font-medium mb-1" style={{ color: "#44433E" }}>Areas of Interest:</p>
              <Cards items={[
                "Sustainable sourcing ecosystems",
                "Agricultural value creation",
                "Research collaborations",
                "Sustainability-focused partnerships",
              ]} />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
