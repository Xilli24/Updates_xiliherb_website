"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const founder = {
  initials: "XH",
  gradient: "linear-gradient(135deg, #1E3F6E 0%, #1A9BA0 100%)",
  name: "Founder Name",
  role: "Founder & CEO",
}

const team = [
  { initials: "TM", gradient: "linear-gradient(135deg, #2D6B35 0%, #5BAC2E 100%)", role: "Head of Research & Development" },
  { initials: "SM", gradient: "linear-gradient(135deg, #1E3F6E 0%, #2D6B35 100%)", role: "Process & Scale-Up Engineer" },
  { initials: "AM", gradient: "linear-gradient(135deg, #1A9BA0 0%, #1E3F6E 100%)", role: "Agricultural Partnerships" },
  { initials: "PM", gradient: "linear-gradient(135deg, #2C2C2C 0%, #1E3F6E 100%)", role: "Science & Regulatory Affairs" },
]

const advisors = [
  { initials: "PA", gradient: "linear-gradient(135deg, #1E3F6E 0%, #1A9BA0 100%)", domain: "Biochemical Engineering & Enzyme Technology", affiliation: "IISc, Bangalore" },
  { initials: "SA", gradient: "linear-gradient(135deg, #2D6B35 0%, #5BAC2E 100%)", domain: "Agricultural Sciences & Biomass Utilization", affiliation: "GKVK — UAS, Bangalore" },
  { initials: "IA", gradient: "linear-gradient(135deg, #1E3F6E 0%, #2D6B35 100%)", domain: "Bio-Based Ingredient Commercialisation", affiliation: "Industry Expert" },
]

function AvatarCircle({
  initials,
  gradient,
  size,
}: {
  initials: string
  gradient: string
  size: number
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
        fontSize: size * 0.3,
        fontFamily: "var(--font-display)",
        color: "rgba(255,255,255,0.92)",
        flexShrink: 0,
        letterSpacing: "0.04em",
        border: "1.5px solid rgba(255,255,255,0.18)",
      }}
    >
      {initials}
    </div>
  )
}

function Divider({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3">
      <div style={{ height: "1px", width: "16px", background: "rgba(91,172,46,0.4)" }} />
      <p
        style={{
          color: "rgba(91,172,46,0.65)",
          fontSize: "10px",
          textTransform: "uppercase",
          letterSpacing: "0.16em",
          whiteSpace: "nowrap",
        }}
      >
        {label}
      </p>
      <div style={{ height: "1px", flex: 1, background: "rgba(255,255,255,0.08)" }} />
    </div>
  )
}

export default function TeamBanner() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 10 },
    animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 },
    transition: { duration: 0.45, delay, ease: "easeOut" as const },
  })

  return (
    <div ref={ref} className="hidden lg:flex flex-col gap-5">

      {/* ── Tier 1: Founder ── */}
      <Divider label="Leadership" />
      <motion.div className="flex items-center gap-4" {...fadeUp(0.1)}>
        <AvatarCircle initials={founder.initials} gradient={founder.gradient} size={54} />
        <div>
          <p
            style={{
              color: "#F7F6F2",
              fontSize: "14px",
              fontWeight: 600,
              fontFamily: "var(--font-display)",
              marginBottom: "3px",
            }}
          >
            {founder.role}
          </p>
          <p style={{ color: "rgba(255,255,255,0.38)", fontSize: "11px" }}>{founder.name}</p>
        </div>
      </motion.div>

      {/* ── Tier 2: Core Team ── */}
      <Divider label="Core Team" />
      <div className="grid grid-cols-2 gap-2.5">
        {team.map((member, i) => (
          <motion.div
            key={member.initials}
            className="flex items-center gap-3"
            style={{
              background: "rgba(255,255,255,0.055)",
              border: "1px solid rgba(255,255,255,0.10)",
              borderRadius: "10px",
              padding: "10px 14px",
            }}
            {...fadeUp(0.2 + i * 0.08)}
          >
            <AvatarCircle initials={member.initials} gradient={member.gradient} size={34} />
            <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "11px", lineHeight: "1.45" }}>
              {member.role}
            </p>
          </motion.div>
        ))}
      </div>

      {/* ── Tier 3: Advisors ── */}
      <Divider label="Scientific & Strategic Advisors" />
      <div className="flex flex-col gap-2.5">
        {advisors.map((advisor, i) => (
          <motion.div
            key={advisor.initials}
            className="flex items-center gap-3"
            {...fadeUp(0.55 + i * 0.09)}
          >
            <AvatarCircle initials={advisor.initials} gradient={advisor.gradient} size={30} />
            <div>
              <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "11px", lineHeight: "1.4" }}>
                {advisor.domain}
              </p>
              <p style={{ color: "rgba(255,255,255,0.32)", fontSize: "10px", marginTop: "2px" }}>
                {advisor.affiliation}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  )
}
