import Link from "next/link";
import { Leaf, FlaskConical, Droplets, Sparkles } from "lucide-react";

const GRAIN = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E")`;

const pillars = [
  {
    num: "01",
    title: "Feedstock Exploration",
    desc: "Evaluating agricultural residues — including non-GMO corn cobs — as scalable raw material inputs for naturally derived ingredient pathways.",
  },
  {
    num: "02",
    title: "Conversion Pathways",
    desc: "Exploring bioconversion and sustainable extraction techniques for bio-based molecular transformation and circular resource utilization.",
  },
  {
    num: "03",
    title: "Platform Thinking",
    desc: "Designing a long-term technology system capable of generating multiple ingredient outputs from a single renewable biomass feedstock.",
  },
];

const steps = [
  { label: "Biomass",     Icon: Leaf },
  { label: "Conversion",  Icon: FlaskConical },
  { label: "Refinement",  Icon: Droplets },
  { label: "Ingredients", Icon: Sparkles },
];

export default function Home() {
  return (
    <div>

      {/* ══════════ HERO — Obsidian ══════════ */}
      <section
        className="relative overflow-hidden"
        style={{ background: "#1A1A18", minHeight: "90vh" }}
      >
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: GRAIN }} />
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at 75% 50%, rgba(201,203,190,0.05) 0%, transparent 65%)" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-8 py-32">
          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* Left — copy */}
            <div>
              <p
                className="text-[11px] uppercase tracking-[0.2em] font-medium mb-7"
                style={{ color: "#C9CBBE" }}
              >
                Science-Driven Bio Innovation
              </p>

              <h1
                className="text-5xl md:text-[58px] font-semibold leading-[1.06] mb-8"
                style={{ color: "#F5F4EF", fontFamily: "var(--font-display)" }}
              >
                Engineering Sustainable Pathways for Bio-Based Ingredients
              </h1>

              <p
                className="text-[15px] leading-[1.8] mb-5 max-w-lg"
                style={{ color: "#6B6A62" }}
              >
                XiliHerb is a science-driven biotechnology startup advancing natural
                extract and molecular conversion technologies using renewable
                agricultural resources.
              </p>

              <p
                className="text-[14px] leading-[1.8] mb-10 max-w-lg"
                style={{ color: "#44433E" }}
              >
                At the intersection of biotechnology, sustainability, and process
                innovation, we are developing scalable approaches to next-generation
                ingredient systems through research-led innovation and agricultural
                biomass valorization.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <Link
                  href="/about"
                  className="text-[13px] font-medium px-6 py-3 transition-opacity hover:opacity-80"
                  style={{ background: "#F5F4EF", color: "#1A1A18", borderRadius: "2px" }}
                >
                  Explore Our Vision
                </Link>
                <Link
                  href="/contact"
                  className="text-[13px] px-6 py-3 transition-colors hover:bg-white/5"
                  style={{
                    border: "1px solid rgba(245,244,239,0.2)",
                    color: "#F5F4EF",
                    borderRadius: "2px",
                  }}
                >
                  Partner With Us
                </Link>
              </div>

              <p
                className="text-[11px] uppercase tracking-[0.14em]"
                style={{ color: "#44433E" }}
              >
                Science-Led &nbsp;·&nbsp; Biotechnology &nbsp;·&nbsp; Agricultural Biomass Valorization
              </p>
            </div>

            {/* Right — animated SVG */}
            <div className="flex justify-center">
              <svg
                width="480"
                height="240"
                viewBox="0 0 520 240"
                xmlns="http://www.w3.org/2000/svg"
                style={{ borderRadius: "4px" }}
              >
                <defs>
                  <linearGradient id="fg" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%"   stopColor="#44433E" />
                    <stop offset="50%"  stopColor="#6B6A62" />
                    <stop offset="100%" stopColor="#C9CBBE" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="b" />
                    <feMerge>
                      <feMergeNode in="b" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                <rect width="520" height="240" rx="4" fill="#222220" />

                <path
                  d="M 80 120 C 180 60, 340 180, 440 120"
                  stroke="url(#fg)"
                  strokeWidth="1.5"
                  fill="none"
                  strokeDasharray="6 4"
                >
                  <animate attributeName="stroke-dashoffset" values="0;10" dur="1.2s" repeatCount="indefinite" />
                </path>

                <g filter="url(#glow)">
                  <circle cx="80"  cy="120" r="14" fill="#44433E" />
                  <circle cx="260" cy="120" r="14" fill="#6B6A62" />
                  <circle cx="440" cy="120" r="14" fill="#C9CBBE" />
                </g>

                <text x="80"  y="154" textAnchor="middle" fontSize="9" fill="#6B6A62" fontFamily="Arial" letterSpacing="1.5">BIOMASS</text>
                <text x="260" y="154" textAnchor="middle" fontSize="9" fill="#6B6A62" fontFamily="Arial" letterSpacing="1.5">CONVERSION</text>
                <text x="440" y="154" textAnchor="middle" fontSize="9" fill="#6B6A62" fontFamily="Arial" letterSpacing="1.5">INGREDIENT</text>

                <circle r="4" fill="#C9CBBE" opacity="0.9">
                  <animateMotion dur="3s" repeatCount="indefinite" path="M 80 120 C 180 60, 340 180, 440 120" />
                </circle>
              </svg>
            </div>

          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(to right, transparent 5%, #C9CBBE 50%, transparent 95%)" }}
        />
      </section>

      {/* ══════════ WHAT WE BUILD — Linen ══════════ */}
      <section style={{ background: "#F5F4EF" }}>
        <div className="max-w-7xl mx-auto px-8 py-28">

          <div className="mb-16">
            <p
              className="text-[11px] uppercase tracking-[0.2em] font-medium mb-5"
              style={{ color: "#C9CBBE" }}
            >
              What We Build &nbsp;&nbsp; 01 / 03
            </p>
            <h2
              className="text-3xl md:text-[38px] font-semibold leading-tight max-w-2xl"
              style={{ color: "#1A1A18", fontFamily: "var(--font-display)" }}
            >
              Designing a New Approach to Sustainable Ingredient Production
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((item) => (
              <div
                key={item.num}
                className="pt-8"
                style={{ borderTop: "1px solid #E8E6DE" }}
              >
                <span
                  className="font-mono text-[11px]"
                  style={{ color: "#C9CBBE" }}
                >
                  {item.num}.
                </span>
                <h3
                  className="text-[17px] font-semibold mt-4 mb-3 leading-snug"
                  style={{ color: "#1A1A18", fontFamily: "var(--font-display)" }}
                >
                  {item.title}
                </h3>
                <p className="text-[14px] leading-[1.75]" style={{ color: "#6B6A62" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════ PROCESS — Obsidian ══════════ */}
      <section className="relative overflow-hidden" style={{ background: "#1A1A18" }}>
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: GRAIN }} />

        <div className="relative z-10 max-w-7xl mx-auto px-8 py-28">

          <div className="text-center mb-20">
            <p
              className="text-[11px] uppercase tracking-[0.2em] font-medium mb-5"
              style={{ color: "#C9CBBE" }}
            >
              Technology Direction &nbsp;&nbsp; 02 / 03
            </p>
            <h2
              className="text-3xl md:text-[38px] font-semibold leading-tight max-w-2xl mx-auto"
              style={{ color: "#F5F4EF", fontFamily: "var(--font-display)" }}
            >
              From Agricultural Biomass to Future-Ready Ingredient Systems
            </h2>
            <p
              className="mt-6 text-[15px] max-w-xl mx-auto leading-[1.8]"
              style={{ color: "#6B6A62" }}
            >
              We are developing research-oriented process systems focused on sustainable
              extraction, biomass utilization, and bio-based molecular innovation.
            </p>
          </div>

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-12 md:gap-0 max-w-3xl mx-auto">
            <div
              className="hidden md:block absolute top-[27px] left-[56px] right-[56px] h-px"
              style={{ background: "linear-gradient(to right, #44433E, #6B6A62, #C9CBBE)" }}
            />
            {steps.map(({ label, Icon }, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center gap-4">
                <div
                  className="w-14 h-14 flex items-center justify-center rounded-full border"
                  style={{ background: "#222220", borderColor: "#44433E" }}
                >
                  <Icon className="w-5 h-5" style={{ color: "#C9CBBE" }} />
                </div>
                <p
                  className="text-[11px] uppercase tracking-[0.14em]"
                  style={{ color: "#6B6A62" }}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════ CTA — Linen ══════════ */}
      <section style={{ background: "#F5F4EF" }}>
        <div className="max-w-7xl mx-auto px-8 py-28">
          <div className="grid lg:grid-cols-[1fr,auto] gap-16 items-end">

            <div>
              <p
                className="text-[11px] uppercase tracking-[0.2em] font-medium mb-5"
                style={{ color: "#C9CBBE" }}
              >
                Long-Term Vision &nbsp;&nbsp; 03 / 03
              </p>
              <h2
                className="text-3xl md:text-[44px] font-semibold leading-[1.1] max-w-2xl"
                style={{ color: "#1A1A18", fontFamily: "var(--font-display)" }}
              >
                Building the Future of Sustainable Ingredient Innovation.
              </h2>
              <p
                className="mt-5 text-[15px] leading-[1.8] max-w-xl"
                style={{ color: "#6B6A62" }}
              >
                We welcome collaboration across science, sustainability, biotechnology,
                and future-oriented industrial ecosystems.
              </p>
            </div>

            <div className="flex flex-col gap-3 shrink-0 min-w-[180px]">
              <Link
                href="/contact"
                className="text-[13px] font-medium px-6 py-3 text-center transition-opacity hover:opacity-80"
                style={{ background: "#1A1A18", color: "#F5F4EF", borderRadius: "2px" }}
              >
                Connect With Us
              </Link>
              <Link
                href="/technology"
                className="text-[13px] px-6 py-3 text-center transition-colors hover:bg-[#E8E6DE]"
                style={{
                  border: "1px solid #E8E6DE",
                  color: "#1A1A18",
                  borderRadius: "2px",
                }}
              >
                Explore Our Technology
              </Link>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
