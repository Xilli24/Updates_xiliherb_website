import type { Metadata } from "next";
import Image from "next/image";
import Callout from "@/components/Callout";
import FeatureCards from "@/components/FeatureCards";
import StatCards from "@/components/StatCards";
import RevealSection from "@/components/RevealSection";
import { GRAIN } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Innovation & Ecosystem — XiliHerb",
  description:
    "XiliHerb is proudly associated with the AIC-GKVK innovation ecosystem, supported by mentorship, research networks, and a community of sustainability-focused innovators.",
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
                      XiliHerb is proudly associated with the AIC &amp; GKVK innovation ecosystem.
                    </p>
                    <p className="text-[15px] leading-[1.8]" style={{ color: "rgba(255,255,255,0.78)" }}>
                      Access to mentorship, research networks, startup infrastructure, and
                      innovation-driven communities plays an important role in strengthening our
                      long-term technology and sustainability vision.
                    </p>
                  </div>
                </div>
              </RevealSection>
              <p className="text-[11px] uppercase tracking-[0.14em] mb-4" style={{ color: "rgba(91,172,46,0.7)" }}>
                Ecosystem Support Includes:
              </p>
              <RevealSection delay={150}>
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
                        background: "rgba(255,255,255,0.08)",
                        border: "1px solid rgba(255,255,255,0.18)",
                        color: "rgba(255,255,255,0.85)",
                        borderRadius: "2px",
                      }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </RevealSection>
            </div>

            {/* Right — image */}
            <div className="hidden lg:block relative" style={{ height: "480px", borderRadius: "4px", overflow: "hidden" }}>
              <Image
                src="/innova.png"
                alt="XiliHerb innovation ecosystem"
                fill
                className="hero-img-kenburns"
                style={{ objectFit: "cover" }}
                priority
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to right, #1E3F6E 0%, transparent 40%)" }}
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, #1E3F6E 0%, transparent 35%)" }}
              />
            </div>

          </div>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(to right, transparent 5%, #5BAC2E 50%, transparent 95%)" }}
        />
      </section>

      {/* ── 01: COLLABORATION & OPPORTUNITIES ── */}
      <section data-section="light" className="py-24" style={{ background: "#F7F6F2" }}>
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid lg:grid-cols-[260px,1fr] gap-16 items-start">
            <div>
              <p
                className="text-[80px] font-bold leading-none select-none"
                style={{ color: "#E0E0DA", fontFamily: "var(--font-display)" }}
              >
                01
              </p>
              <div className="mt-4 pt-4" style={{ borderTop: "2px solid #5BAC2E" }}>
                <span className="text-[11px] uppercase tracking-[0.14em]" style={{ color: "#5BAC2E" }}>
                  Collaboration &amp; Opportunities
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
                <p className="text-[15px] leading-[1.8] mb-5" style={{ color: "#6B6B6B" }}>
                  We believe meaningful innovation is built through collaboration, shared
                  learning, and ecosystem partnerships.
                </p>
                <RevealSection delay={200}>
                  <FeatureCards items={[
                    { icon: "Microscope",  title: "Research collaborators", desc: "University labs and independent researchers working on biomass or ingredient science." },
                    { icon: "Sprout",      title: "Agricultural partners",  desc: "FPOs and sourcing networks in corn-growing regions of Karnataka and Maharashtra." },
                    { icon: "TrendingUp",  title: "Investors",              desc: "Seed and pre-Series A investors aligned with deep-tech and agri-biotech." },
                    { icon: "Building2",   title: "Industry partners",      desc: "Food, pharma, and FMCG companies seeking natural ingredient supply alternatives." },
                  ]} />
                </RevealSection>
                <Callout text="As we continue to strengthen our technology direction, we remain open to partnerships aligned with our long-term vision for sustainable bio-based innovation." />
                <p className="text-[13px] font-medium mb-3" style={{ color: "#2C2C2C" }}>
                  Our ecosystem credentials:
                </p>
                <RevealSection delay={250}>
                  <StatCards cols={2} items={[
                    { num: "AIC",   unit: "GKVK · UASB",  label: "Incubated at AIC-GKVK, one of India's top agri-innovation incubators" },
                    { num: "2026",  unit: "cohort",        label: "Selected for the AIC incubation programme — Bangalore, Karnataka" },
                  ]} />
                </RevealSection>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

    </div>
  );
}
