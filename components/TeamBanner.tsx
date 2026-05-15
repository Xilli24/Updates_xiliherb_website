"use client"

import { useRef } from "react"
import { motion, useInView, type Transition } from "framer-motion"

const founder = {
  initials: "MK",
  gradient: "linear-gradient(135deg, #1E3F6E 0%, #1A9BA0 100%)",
  name: "Mallikarjuna G.",
  role: "Founder & CEO",
}

const team = [
  { initials: "SP", gradient: "linear-gradient(135deg, #1E3F6E 0%, #2D6B35 100%)", name: "Sourabh Prabha", role: "Senior Research Associate" },
  { initials: "AA", gradient: "linear-gradient(135deg, #2D6B35 0%, #5BAC2E 100%)", name: "Ananya A.B", role: "Research Associate" },
]

const advisors = [
  { initials: "SS", gradient: "linear-gradient(135deg, #2D6B35 0%, #5BAC2E 100%)", name: "Dr. Savita S. Manganavar", role: "Academic Advisor", affiliation: "UAS, Bangalore — Dept. of Food Science & Nutrition" },
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
    transition: { duration: 0.45, delay, ease: "easeOut" } as Transition,
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
            <div>
              <p style={{ color: "#F7F6F2", fontSize: "11px", fontWeight: 600, lineHeight: "1.35" }}>
                {member.name}
              </p>
              <p style={{ color: "rgba(255,255,255,0.42)", fontSize: "10px", marginTop: "2px" }}>
                {member.role}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── Tier 3: Advisors ── */}
      <Divider label="Academic Advisors" />
      <div className="flex flex-col gap-2.5">
        {advisors.map((advisor, i) => (
          <motion.div
            key={advisor.initials}
            className="flex items-center gap-3"
            {...fadeUp(0.55 + i * 0.09)}
          >
            <AvatarCircle initials={advisor.initials} gradient={advisor.gradient} size={34} />
            <div>
              <p style={{ color: "#F7F6F2", fontSize: "11px", fontWeight: 600, lineHeight: "1.35" }}>
                {advisor.name}
              </p>
              <p style={{ color: "rgba(91,172,46,0.75)", fontSize: "10px", marginTop: "2px" }}>
                {advisor.role}
              </p>
              <p style={{ color: "rgba(255,255,255,0.32)", fontSize: "10px", marginTop: "1px" }}>
                {advisor.affiliation}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  )
}
