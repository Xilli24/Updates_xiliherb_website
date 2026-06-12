import type { Metadata } from "next";
import { BookOpen, Lightbulb, Cpu, Globe, Sprout } from "lucide-react";
import Callout from "@/components/Callout";
import { CollaborationCards } from "@/components/ui/pricing-page";
import RevealSection from "@/components/RevealSection";
import { GRAIN } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Partner, Invest & Collaborate — XiliHerb Agri-Biotech Ecosystem",
  description:
    "XiliHerb is open to seed investment, research collaboration, agricultural sourcing partnerships, and B2B supply discussions. Incubated at AIC-GKVK, Bangalore. Currently seeking aligned partners for pilot-scale development of our agricultural bioconversion platform.",
  alternates: {
    canonical: "https://www.xiliherb.com/innovation",
  },
  openGraph: {
    title: "Partner & Invest — XiliHerb Agri-Biotech",
    description: "Open to seed investment, research collaboration, FPO sourcing partnerships, and B2B supply discussions. Incubated at AIC-GKVK Bangalore.",
  },
};

export default function Innovation() {
  return (
    <div>

      {/* ── HERO ── */}
      <section data-section="dark" className="relative overflow-hidden" style={{ background: "#1E3F6E" }}>
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: GRAIN }} />
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at 75% 50%, rgba(91,172,46,0.10) 0%, transparent 65%)" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-8 pt-28 pb-24">
          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* Left — copy */}
            <div>
              <RevealSection delay={0}>
                <div>
                  <p
                    className="text-[11px] uppercase tracking-[0.2em] font-medium mb-7"
                    style={{ color: "#5BAC2E" }}
                  >
                    Innovation Ecosystem
                  </p>
                  <h1
                    className="text-4xl md:text-[52px] font-semibold leading-tight mb-8"
                    style={{ color: "#F7F6F2", fontFamily: "var(--font-display)" }}
                  >
                    Backed by AIC-GKVK — <span style={{ color: "#5BAC2E" }}>Built for the Long Term</span>
                  </h1>
                  <div className="space-y-5 max-w-2xl mb-10">
                    <p className="text-[15px] leading-[1.8]" style={{ color: "rgba(255,255,255,0.78)" }}>
                      XiliHerb is proudly associated with the Agri-Innovation Centre (AIC) and the University of Agricultural Sciences, GKVK, Bangalore innovation ecosystem.
                    </p>
                    <p className="text-[15px] leading-[1.8]" style={{ color: "rgba(255,255,255,0.78)" }}>
                      Access to mentorship, research networks, startup infrastructure, and
                      innovation-driven communities plays an important role in strengthening our
                      long-term technology and sustainability vision.
                    </p>
                  </div>
                </div>
              </RevealSection>

              {/* Compact credentials */}
              <div
                className="flex gap-10 pt-6 mt-2"
                style={{ borderTop: "1px solid rgba(255,255,255,0.10)" }}
              >
                {([
                  { label: "AIC", sub: "GKVK · UASB", desc: "Top agri-innovation incubator, Bangalore" },
                  { label: "2026", sub: "Cohort", desc: "Selected for AIC incubation programme" },
                ] as const).map(({ label, sub, desc }) => (
                  <div key={label} className="flex gap-3">
                    <div
                      style={{
                        width: "3px",
                        borderRadius: "2px",
                        background: "linear-gradient(to bottom, #5BAC2E, rgba(91,172,46,0.1))",
                        flexShrink: 0,
                        alignSelf: "stretch",
                      }}
                    />
                    <div>
                      <div className="flex items-baseline gap-2.5 mb-1.5">
                        <span
                          style={{
                            color: "#5BAC2E",
                            fontSize: "28px",
                            fontWeight: 700,
                            fontFamily: "var(--font-display)",
                            lineHeight: 1,
                          }}
                        >
                          {label}
                        </span>
                        <span
                          style={{
                            color: "rgba(255,255,255,0.40)",
                            fontSize: "11px",
                            letterSpacing: "0.13em",
                            textTransform: "uppercase",
                          }}
                        >
                          {sub}
                        </span>
                      </div>
                      <p style={{ color: "rgba(255,255,255,0.62)", fontSize: "13px", lineHeight: "1.6" }}>
                        {desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — glassmorphism ecosystem cards */}
            <div className="hidden lg:grid grid-cols-2 gap-4 content-center" style={{ height: "480px" }}>
              {([
                {
                  cls: "glass-float-1",
                  Icon: BookOpen,
                  title: "Research & Mentorship",
                  desc: "Access to academic research networks and experienced innovation mentors within the agri-tech space.",
                },
                {
                  cls: "glass-float-2",
                  Icon: Lightbulb,
                  title: "Innovation Environment",
                  desc: "Purpose-built startup infrastructure designed for deep-tech and agri-biotech innovation journeys.",
                },
                {
                  cls: "glass-float-3",
                  Icon: Cpu,
                  title: "Technical Guidance",
                  desc: "Expert support across technology development, process validation, and ecosystem collaboration.",
                },
                {
                  cls: "glass-float-4",
                  Icon: Globe,
                  title: "Sustainability Networks",
                  desc: "Exposure to sustainability-focused innovation communities and global bio-based industry networks.",
                },
              ] as const).map(({ cls, Icon, title, desc }) => (
                <div
                  key={title}
                  className={cls}
                  style={{
                    background: "rgba(255,255,255,0.16)",
                    backdropFilter: "blur(24px)",
                    WebkitBackdropFilter: "blur(24px)",
                    border: "1px solid rgba(255,255,255,0.32)",
                    borderRadius: "16px",
                    padding: "22px",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.20), inset 0 1px 0 rgba(255,255,255,0.30)",
                  }}
                >
                  <div
                    style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "10px",
                      background: "rgba(91,172,46,0.18)",
                      border: "1px solid rgba(91,172,46,0.35)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "14px",
                    }}
                  >
                    <Icon size={16} style={{ color: "#5BAC2E" }} />
                  </div>
                  <p
                    style={{
                      color: "#F7F6F2",
                      fontSize: "13px",
                      fontWeight: 600,
                      marginBottom: "8px",
                      fontFamily: "var(--font-display)",
                    }}
                  >
                    {title}
                  </p>
                  <p style={{ color: "rgba(255,255,255,0.60)", fontSize: "12px", lineHeight: "1.75" }}>
                    {desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(to right, transparent 5%, #5BAC2E 50%, transparent 95%)" }}
        />
      </section>

      {/* ── 01: THE OPPORTUNITY ── */}
      <section data-section="light" className="py-24" style={{ background: "#F7F6F2" }}>
        <div className="max-w-6xl mx-auto px-8">

          {/* Section header */}
          <div className="flex items-end gap-8 mb-12">
            <p
              className="text-[80px] font-bold leading-none select-none shrink-0"
              style={{ color: "#E0E0DA", fontFamily: "var(--font-display)" }}
            >
              01
            </p>
            <div className="pb-1" style={{ borderTop: "2px solid #5BAC2E", paddingTop: "16px" }}>
              <span className="text-[11px] uppercase tracking-[0.14em]" style={{ color: "#5BAC2E" }}>
                The Opportunity
              </span>
              <h2
                className="text-xl font-semibold mt-2 leading-snug"
                style={{ color: "#1E3F6E", fontFamily: "var(--font-display)" }}
              >
                A $1.3B Market India Currently Imports Entirely
              </h2>
            </div>
          </div>

          <RevealSection delay={100}>
            <div>
              <p className="text-[15px] leading-[1.8] mb-8 max-w-2xl" style={{ color: "#6B6B6B" }}>
                Global demand for xylitol is growing at 6% annually. India produces virtually none
                domestically — importing almost entirely from China and Europe. XiliHerb is building
                the domestic alternative.
              </p>

              {/* Stat cards */}
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                {([
                  {
                    stat: "~$1.3B",
                    label: "global market size · 2024",
                    sub: "Xylitol used across food, oral care & pharma industries",
                  },
                  {
                    stat: "6%",
                    label: "CAGR through 2030",
                    sub: "Driven by clean-label and sugar-reduction trends globally",
                  },
                  {
                    stat: "~100%",
                    label: "India's import dependency",
                    sub: "No domestic bio-based xylitol producer exists at scale",
                  },
                ] as const).map(({ stat, label, sub }) => (
                  <div
                    key={stat}
                    className="p-6"
                    style={{
                      background: "#EEEEE8",
                      border: "1px solid #E0E0DA",
                      borderRadius: "2px",
                    }}
                  >
                    <p
                      className="text-[32px] font-bold leading-none mb-1"
                      style={{ color: "#1E3F6E", fontFamily: "var(--font-display)" }}
                    >
                      {stat}
                    </p>
                    <p className="text-[11px] uppercase tracking-[0.12em] font-medium mb-3" style={{ color: "#5BAC2E" }}>
                      {label}
                    </p>
                    <p className="text-[13px] leading-[1.65]" style={{ color: "#6B6B6B" }}>
                      {sub}
                    </p>
                  </div>
                ))}
              </div>

              {/* Opportunity callout */}
              <div
                className="flex gap-4 p-6"
                style={{
                  background: "rgba(91,172,46,0.06)",
                  borderLeft: "3px solid #5BAC2E",
                  borderRadius: "2px",
                }}
              >
                <Sprout size={18} strokeWidth={1.5} className="shrink-0 mt-0.5" style={{ color: "#5BAC2E" }} />
                <p className="text-[14px] leading-[1.75]" style={{ color: "#4A4A4A" }}>
                  India generates 30M+ tonnes of corn cob residues annually — most burned in open fields.
                  XiliHerb converts this into the same high-purity xylitol currently imported at a premium.
                </p>
              </div>
            </div>
          </RevealSection>

        </div>
      </section>

      {/* ── 02: COLLABORATION ── */}
      <section data-section="light" className="py-24" style={{ background: "#F7F6F2", borderTop: "1px solid #E0E0DA" }}>
        <div className="max-w-6xl mx-auto px-8">

          {/* Section header */}
          <div className="flex items-end gap-8 mb-12">
            <p
              className="text-[80px] font-bold leading-none select-none shrink-0"
              style={{ color: "#E0E0DA", fontFamily: "var(--font-display)" }}
            >
              02
            </p>
            <div className="pb-1" style={{ borderTop: "2px solid #5BAC2E", paddingTop: "16px" }}>
              <span className="text-[11px] uppercase tracking-[0.14em]" style={{ color: "#5BAC2E" }}>
                Collaboration
              </span>
              <h2
                className="text-xl font-semibold mt-2 leading-snug"
                style={{ color: "#1E3F6E", fontFamily: "var(--font-display)" }}
              >
                Building Meaningful Innovation Through Collaboration
              </h2>
            </div>
          </div>

          <RevealSection delay={100}>
            <div>
              <p className="text-[15px] leading-[1.8] mb-8 max-w-2xl" style={{ color: "#6B6B6B" }}>
                We believe meaningful innovation is built through collaboration, shared
                learning, and ecosystem partnerships.
              </p>

              {/* 4 cards in one row */}
              <RevealSection delay={200}>
                <CollaborationCards />
              </RevealSection>

              <Callout text="As we continue to strengthen our technology direction, we remain open to partnerships aligned with our long-term vision for sustainable bio-based innovation." />
            </div>
          </RevealSection>

        </div>
      </section>

    </div>
  );
}
