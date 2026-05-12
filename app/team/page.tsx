import type { Metadata } from "next";
import Link from "next/link";
import { GRAIN } from "@/lib/constants";
import RevealSection from "@/components/RevealSection";
import TeamBanner from "@/components/TeamBanner";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Team & Advisors — The Scientists Behind XiliHerb",
  description:
    "Meet the researchers, engineers, and scientific advisors building XiliHerb's agricultural bioconversion platform — supported by expertise from IISc Bangalore, GKVK University of Agricultural Sciences, and India's agri-biotech innovation ecosystem.",
  openGraph: {
    title: "Team & Advisors | XiliHerb",
    description: "Researchers, engineers and advisors from IISc Bangalore and GKVK building India's agricultural bioconversion platform.",
  },
};

/* ─── Data ────────────────────────────────────────────────────── */

const founder = {
  initials: "XH",
  gradient: "linear-gradient(135deg, #1E3F6E 0%, #1A9BA0 100%)",
  name: "Founder Name",
  role: "Founder & CEO",
  bio: "A science-driven entrepreneur at the intersection of biotechnology and sustainable agricultural innovation. Dedicated to building long-term technology platforms that advance naturally derived ingredient systems and circular bio-based industrial processes.",
  tags: ["Biotechnology", "Sustainable Innovation", "Agricultural Systems"],
};

const team = [
  {
    initials: "TM",
    gradient: "linear-gradient(135deg, #2D6B35 0%, #5BAC2E 100%)",
    name: "Team Member",
    role: "Head of Research & Development",
    desc: "Leads the laboratory research program with a focus on enzymatic hydrolysis and bio-based extraction process development.",
  },
  {
    initials: "SM",
    gradient: "linear-gradient(135deg, #1E3F6E 0%, #2D6B35 100%)",
    name: "Team Member",
    role: "Process & Scale-Up Engineer",
    desc: "Designs scalable bio-based conversion processes and bridges lab-scale R&D with pilot implementation.",
  },
  {
    initials: "AM",
    gradient: "linear-gradient(135deg, #1A9BA0 0%, #1E3F6E 100%)",
    name: "Team Member",
    role: "Agricultural Partnerships",
    desc: "Builds sourcing networks with farmer producer organisations across corn-growing regions of Karnataka and Maharashtra.",
  },
  {
    initials: "PM",
    gradient: "linear-gradient(135deg, #2C2C2C 0%, #1E3F6E 100%)",
    name: "Team Member",
    role: "Science & Regulatory Affairs",
    desc: "Oversees scientific documentation, regulatory pathways, and quality standards for bio-based ingredient development.",
  },
];

const advisors = [
  {
    initials: "PA",
    gradient: "linear-gradient(135deg, #1E3F6E 0%, #1A9BA0 100%)",
    name: "Advisor Name",
    affiliation: "Indian Institute of Science, Bangalore",
    domain: "Biochemical Engineering & Enzyme Technology",
  },
  {
    initials: "SA",
    gradient: "linear-gradient(135deg, #2D6B35 0%, #5BAC2E 100%)",
    name: "Advisor Name",
    affiliation: "GKVK — University of Agricultural Sciences",
    domain: "Agricultural Sciences & Biomass Utilization",
  },
  {
    initials: "IA",
    gradient: "linear-gradient(135deg, #1E3F6E 0%, #2D6B35 100%)",
    name: "Advisor Name",
    affiliation: "Industry Expert",
    domain: "Bio-Based Ingredient Commercialisation",
  },
];

/* ─── Sub-components ──────────────────────────────────────────── */

function Avatar({
  initials,
  gradient,
  size = 80,
  fontSize = 28,
}: {
  initials: string;
  gradient: string;
  size?: number;
  fontSize?: number;
}) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: gradient,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize,
        fontFamily: "var(--font-display)",
        color: "rgba(255,255,255,0.9)",
        flexShrink: 0,
        letterSpacing: "0.04em",
      }}
    >
      {initials}
    </div>
  );
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

/* ─── Page ────────────────────────────────────────────────────── */

const personSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "jobTitle": "Founder & CEO",
    "worksFor": { "@type": "Organization", "name": "XiliHerb" },
    "knowsAbout": ["Biotechnology", "Sustainable innovation", "Agricultural systems", "Bio-based ingredient platforms"],
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "jobTitle": "Scientific Advisor — Biochemical Engineering & Enzyme Technology",
    "affiliation": { "@type": "Organization", "name": "Indian Institute of Science", "url": "https://www.iisc.ac.in" },
    "worksFor": { "@type": "Organization", "name": "XiliHerb" },
    "knowsAbout": ["Biochemical engineering", "Enzyme technology", "Bioprocess design"],
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "jobTitle": "Scientific Advisor — Agricultural Sciences & Biomass Utilization",
    "affiliation": { "@type": "Organization", "name": "GKVK — University of Agricultural Sciences Bangalore", "url": "https://www.uasbangalore.edu.in" },
    "worksFor": { "@type": "Organization", "name": "XiliHerb" },
    "knowsAbout": ["Agricultural sciences", "Biomass utilisation", "Crop residue valorisation"],
  },
];

export default function Team() {
  return (
    <div>
      <JsonLd data={personSchema} />

      {/* ── HERO ── */}
      <section data-section="dark" className="relative overflow-hidden" style={{ background: "#1E3F6E" }}>
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: GRAIN }} />
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at 20% 60%, rgba(91,172,46,0.08) 0%, transparent 60%)" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-8 pt-28 pb-24">
          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* Left — copy */}
            <RevealSection delay={0}>
              <div>
                <p
                  className="text-[11px] uppercase tracking-[0.2em] font-medium mb-8"
                  style={{ color: "#5BAC2E" }}
                >
                  Our People
                </p>
                <h1
                  className="text-5xl md:text-[62px] font-semibold leading-[1.04] mb-8"
                  style={{ fontFamily: "var(--font-display)", color: "#F7F6F2" }}
                >
                  The Minds <span style={{ color: "#5BAC2E" }}>Behind XiliHerb</span>
                </h1>
                <p
                  className="text-[15px] leading-[1.8] max-w-xl"
                  style={{ color: "rgba(255,255,255,0.65)" }}
                >
                  A focused team of researchers, engineers, and domain experts united
                  by a shared commitment to advancing sustainable bio-based innovation —
                  supported by an experienced advisory network.
                </p>
              </div>
            </RevealSection>

            {/* Right — animated org structure */}
            <TeamBanner />

          </div>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(to right, transparent 5%, #5BAC2E 50%, transparent 95%)" }}
        />
      </section>

      {/* ── FOUNDER ── */}
      <section data-section="light" className="py-24" style={{ background: "#F7F6F2" }}>
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex items-center gap-4 mb-14">
            <span
              className="text-[11px] uppercase tracking-[0.16em] font-medium"
              style={{ color: "#5BAC2E" }}
            >
              01
            </span>
            <div className="h-px flex-1" style={{ background: "#E0E0DA", maxWidth: 40 }} />
            <span
              className="text-[11px] uppercase tracking-[0.16em] font-medium"
              style={{ color: "#2C2C2C" }}
            >
              Founder
            </span>
          </div>

          <RevealSection delay={100}>
            <div
              className="grid lg:grid-cols-[1fr,1.6fr] gap-0 overflow-hidden"
              style={{ border: "1px solid #E0E0DA", borderRadius: "4px" }}
            >
              {/* Photo area */}
              <div
                className="relative flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, #1E3F6E 0%, #1A9BA0 100%)",
                  minHeight: "380px",
                  padding: "48px",
                }}
              >
                <div
                  style={{
                    width: 120,
                    height: 120,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.12)",
                    border: "1px solid rgba(255,255,255,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 40,
                    fontFamily: "var(--font-display)",
                    color: "rgba(255,255,255,0.9)",
                    letterSpacing: "0.04em",
                  }}
                >
                  {founder.initials}
                </div>
                <div
                  className="absolute bottom-6 left-6 right-6"
                  style={{
                    borderTop: "1px solid rgba(255,255,255,0.2)",
                    paddingTop: "16px",
                  }}
                >
                  <p className="text-[11px] uppercase tracking-[0.14em]" style={{ color: "rgba(255,255,255,0.45)" }}>
                    Photo coming soon
                  </p>
                </div>
              </div>

              {/* Text area */}
              <div className="p-10 lg:p-14 flex flex-col justify-center" style={{ background: "#F7F6F2" }}>
                <p
                  className="text-[11px] uppercase tracking-[0.16em] font-medium mb-3"
                  style={{ color: "#5BAC2E" }}
                >
                  {founder.role}
                </p>
                <h2
                  className="text-[32px] font-semibold mb-6 leading-snug"
                  style={{ color: "#1E3F6E", fontFamily: "var(--font-display)" }}
                >
                  {founder.name}
                </h2>
                <div
                  className="mb-8"
                  style={{ borderTop: "1px solid #E0E0DA", paddingTop: "24px" }}
                >
                  <p className="text-[15px] leading-[1.8]" style={{ color: "#6B6B6B" }}>
                    {founder.bio}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mb-8">
                  {founder.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] uppercase tracking-[0.1em] px-3 py-1"
                      style={{
                        border: "1px solid #E0E0DA",
                        borderRadius: "2px",
                        color: "#6B6B6B",
                        background: "#F7F6F2",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-[13px] font-medium transition-opacity hover:opacity-70"
                  style={{ color: "#1E3F6E" }}
                >
                  <LinkedInIcon />
                  Connect on LinkedIn
                </Link>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section data-section="light" className="py-24" style={{ background: "#F7F6F2" }}>
        <div className="max-w-6xl mx-auto px-8">

          {/* Section heading — large display */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-10">
              <span className="text-[11px] uppercase tracking-[0.16em] font-medium" style={{ color: "#5BAC2E" }}>02</span>
              <div className="h-px" style={{ background: "#E0E0DA", width: 40 }} />
              <span className="text-[11px] uppercase tracking-[0.16em] font-medium" style={{ color: "#2C2C2C" }}>Core Team</span>
            </div>
            <h2
              className="text-[52px] md:text-[72px] font-semibold leading-[1.02]"
              style={{ color: "#1E3F6E", fontFamily: "var(--font-display)" }}
            >
              Meet the<br />
              <span style={{ color: "#5BAC2E" }}>Team</span>
            </h2>
          </div>

          {/* Team grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: "#E0E0DA", border: "1px solid #E0E0DA", borderRadius: "4px", overflow: "hidden" }}>
            {team.map((member, i) => (
              <RevealSection key={member.role} delay={i * 80}>
                <div
                  className="flex flex-col h-full"
                  style={{ background: "#F7F6F2" }}
                >
                  {/* Photo placeholder */}
                  <div
                    className="flex items-center justify-center"
                    style={{
                      height: 200,
                      background: member.gradient,
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        width: 72,
                        height: 72,
                        borderRadius: "50%",
                        background: "rgba(255,255,255,0.12)",
                        border: "1px solid rgba(255,255,255,0.3)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 24,
                        fontFamily: "var(--font-display)",
                        color: "rgba(255,255,255,0.9)",
                      }}
                    >
                      {member.initials}
                    </div>
                    <span
                      className="absolute bottom-3 left-4 text-[10px] uppercase tracking-[0.12em]"
                      style={{ color: "rgba(255,255,255,0.4)" }}
                    >
                      Photo coming soon
                    </span>
                  </div>

                  {/* Info */}
                  <div className="p-6 flex flex-col flex-1">
                    <p
                      className="text-[10px] uppercase tracking-[0.14em] mb-2"
                      style={{ color: "#5BAC2E" }}
                    >
                      {member.role}
                    </p>
                    <h3
                      className="text-[18px] font-semibold mb-4 leading-snug"
                      style={{ color: "#1E3F6E", fontFamily: "var(--font-display)" }}
                    >
                      {member.name}
                    </h3>
                    <p
                      className="text-[13px] leading-[1.7] flex-1"
                      style={{ color: "#6B6B6B" }}
                    >
                      {member.desc}
                    </p>
                    <div className="mt-5 pt-4" style={{ borderTop: "1px solid #E0E0DA" }}>
                      <Link
                        href="#"
                        className="inline-flex items-center gap-1.5 text-[12px] transition-opacity hover:opacity-60"
                        style={{ color: "#2C2C2C" }}
                      >
                        <LinkedInIcon />
                        LinkedIn
                      </Link>
                    </div>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── ADVISORS ── */}
      <section data-section="dark" className="py-24" style={{ background: "#1E3F6E" }}>
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: GRAIN }} />
        <div className="max-w-6xl mx-auto px-8 relative">

          <div className="flex items-center gap-4 mb-6">
            <span className="text-[11px] uppercase tracking-[0.16em] font-medium" style={{ color: "rgba(91,172,46,0.5)" }}>03</span>
            <div className="h-px" style={{ background: "rgba(255,255,255,0.15)", width: 40 }} />
            <span className="text-[11px] uppercase tracking-[0.16em] font-medium" style={{ color: "#5BAC2E" }}>Advisors</span>
          </div>

          <div className="grid lg:grid-cols-[1fr,1.8fr] gap-16 mb-16">
            <h2
              className="text-[42px] md:text-[54px] font-semibold leading-[1.06]"
              style={{ color: "#F7F6F2", fontFamily: "var(--font-display)" }}
            >
              Scientific &<br />
              <span style={{ color: "#5BAC2E" }}>Strategic</span><br />
              Advisors
            </h2>
            <p
              className="text-[15px] leading-[1.8] self-end pb-2"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              XiliHerb benefits from the guidance of experienced researchers, academic
              experts, and industry professionals who bring domain depth across
              biochemistry, agricultural science, and sustainable innovation ecosystems.
            </p>
          </div>

          <div
            className="divide-y"
            style={{ borderTop: "1px solid rgba(255,255,255,0.12)", borderBottom: "1px solid rgba(255,255,255,0.12)" }}
          >
            {advisors.map((advisor, i) => (
              <RevealSection key={advisor.domain} delay={i * 100}>
                <div
                  className="grid md:grid-cols-[56px,1fr,1fr,auto] gap-6 items-center py-7"
                  style={{ borderColor: "rgba(255,255,255,0.12)" }}
                >
                  <Avatar
                    initials={advisor.initials}
                    gradient={advisor.gradient}
                    size={56}
                    fontSize={18}
                  />
                  <div>
                    <p
                      className="text-[17px] font-semibold leading-snug"
                      style={{ color: "#F7F6F2", fontFamily: "var(--font-display)" }}
                    >
                      {advisor.name}
                    </p>
                    <p className="text-[13px] mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>
                      {advisor.affiliation}
                    </p>
                  </div>
                  <p className="text-[13px] leading-[1.6]" style={{ color: "rgba(255,255,255,0.5)" }}>
                    {advisor.domain}
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-1.5 text-[12px] transition-opacity hover:opacity-60"
                    style={{ color: "rgba(255,255,255,0.55)" }}
                  >
                    <LinkedInIcon />
                    <span className="hidden md:inline">Profile</span>
                  </Link>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section data-section="light" className="py-20" style={{ background: "#F7F6F2" }}>
        <div className="max-w-6xl mx-auto px-8 text-center">
          <p
            className="text-[11px] uppercase tracking-[0.2em] font-medium mb-5"
            style={{ color: "#5BAC2E" }}
          >
            Join Us
          </p>
          <h2
            className="text-[36px] font-semibold mb-5 leading-snug"
            style={{ color: "#1E3F6E", fontFamily: "var(--font-display)" }}
          >
            Interested in working with XiliHerb?
          </h2>
          <p className="text-[15px] leading-[1.8] mb-10 max-w-lg mx-auto" style={{ color: "#6B6B6B" }}>
            We are always open to conversations with researchers, engineers, and
            domain experts who share our commitment to sustainable bio-based innovation.
          </p>
          <Link
            href="/contact"
            className="inline-block text-[13px] font-medium px-8 py-4 transition-opacity hover:opacity-80"
            style={{ background: "#1A9BA0", color: "#FFFFFF", borderRadius: "2px" }}
          >
            Get In Touch
          </Link>
        </div>
      </section>

    </div>
  );
}
