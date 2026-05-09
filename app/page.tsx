import Image from "next/image";
import { Leaf, FlaskConical, Droplets, Sparkles } from "lucide-react";
import { GRAIN } from "@/lib/constants";
import HeroCarousel from "@/components/HeroCarousel";
import TypewriterText from "@/components/TypewriterText";
import MagneticButton from "@/components/MagneticButton";

const pillars = [
  {
    num: "01",
    title: "Feedstock Selection",
    desc: "Non-GMO corn cobs and other agricultural residues serve as our scalable raw material inputs for naturally derived ingredient pathways.",
  },
  {
    num: "02",
    title: "Conversion Pathways",
    desc: "We apply bioconversion and sustainable extraction techniques for bio-based molecular transformation and circular resource utilization.",
  },
  {
    num: "03",
    title: "Platform Thinking",
    desc: "Our technology platform generates multiple ingredient outputs from a single renewable biomass feedstock.",
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
        data-section="dark"
        className="relative overflow-hidden"
        style={{ background: "#1A1A18", minHeight: "90vh" }}
      >
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: GRAIN }} />
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at 75% 50%, rgba(201,203,190,0.05) 0%, transparent 65%)" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-8 py-32">
          <div className="grid lg:grid-cols-2 gap-20 items-start">

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
                <TypewriterText
                  text="Engineering Sustainable Pathways for Bio-Based Ingredients"
                  delay={300}
                />
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
                innovation, we build scalable next-generation ingredient systems through
                research-led process development and agricultural biomass valorization.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <MagneticButton
                  href="/about"
                  className="text-[13px] font-medium px-6 py-3 transition-opacity hover:opacity-80"
                  style={{ background: "#F5F4EF", color: "#1A1A18", borderRadius: "2px" }}
                >
                  Explore Our Vision
                </MagneticButton>
                <MagneticButton
                  href="/contact"
                  className="text-[13px] px-6 py-3 transition-colors hover:bg-white/5"
                  style={{
                    border: "1px solid rgba(245,244,239,0.2)",
                    color: "#F5F4EF",
                    borderRadius: "2px",
                  }}
                >
                  Partner With Us
                </MagneticButton>
              </div>

              <p
                className="text-[11px] uppercase tracking-[0.14em]"
                style={{ color: "#44433E" }}
              >
                Science-Led &nbsp;·&nbsp; Biotechnology &nbsp;·&nbsp; Agricultural Biomass Valorization
              </p>
            </div>

            {/* Right — image carousel */}
            <div className="hidden lg:block">
              <HeroCarousel />
            </div>

          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(to right, transparent 5%, #C9CBBE 50%, transparent 95%)" }}
        />
        <div
          style={{
            position: "absolute", right: "-24px", bottom: "-36px",
            opacity: 0.045, pointerEvents: "none", zIndex: 0,
            userSelect: "none",
          }}
          aria-hidden="true"
        >
          <Image
            src="/logoxili.png"
            alt=""
            width={340}
            height={274}
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </div>
      </section>

      {/* ══════════ WHAT WE BUILD — Linen ══════════ */}
      <section data-section="light" style={{ background: "#F5F4EF" }}>
        <div className="max-w-7xl mx-auto px-8 py-28">

          <div className="mb-16">
            <p
              className="text-[13px] uppercase tracking-[0.16em] font-medium mb-5"
              style={{ color: "#44433E" }}
            >
              What We Build &nbsp;&nbsp; 01 / 03
            </p>
            <h2
              className="text-3xl md:text-[38px] font-semibold leading-tight max-w-2xl"
              style={{ color: "#1A1A18", fontFamily: "var(--font-display)" }}
            >
              A New Standard in Sustainable Ingredient Production
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
      <section data-section="dark" className="relative overflow-hidden" style={{ background: "#1A1A18" }}>
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
              Our process systems combine sustainable extraction, biomass utilization,
              and bio-based molecular innovation into a coherent, scalable pipeline.
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
      <section data-section="light" style={{ background: "#F5F4EF" }}>
        <div className="max-w-7xl mx-auto px-8 py-28">
          <div className="grid lg:grid-cols-[1fr,auto] gap-16 items-end">

            <div>
              <p
                className="text-[13px] uppercase tracking-[0.16em] font-medium mb-5"
                style={{ color: "#44433E" }}
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
              <MagneticButton
                href="/contact"
                className="text-[13px] font-medium px-6 py-3 text-center transition-opacity hover:opacity-80"
                style={{ background: "#1A1A18", color: "#F5F4EF", borderRadius: "2px" }}
              >
                Connect With Us
              </MagneticButton>
              <MagneticButton
                href="/technology"
                className="text-[13px] px-6 py-3 text-center transition-colors hover:bg-[#E8E6DE]"
                style={{
                  border: "1px solid #E8E6DE",
                  color: "#1A1A18",
                  borderRadius: "2px",
                }}
              >
                Explore Our Technology
              </MagneticButton>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
