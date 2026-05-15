"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"

function AnimatedStat({
  value,
  suffix,
  unit,
  desc,
  delay,
  triggered,
}: {
  value: number
  suffix: string
  unit: string
  desc: string
  delay: number
  triggered: boolean
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!triggered) return
    const timer = setTimeout(() => {
      const duration = 1800
      let startTime: number | null = null
      const animate = (ts: number) => {
        if (!startTime) startTime = ts
        const progress = Math.min((ts - startTime) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        setCount(Math.round(eased * value))
        if (progress < 1) requestAnimationFrame(animate)
      }
      requestAnimationFrame(animate)
    }, delay)
    return () => clearTimeout(timer)
  }, [triggered, value, delay])

  return (
    <div>
      <div className="flex items-baseline gap-0.5 mb-1.5">
        <span
          style={{
            color: "#5BAC2E",
            fontSize: "44px",
            fontWeight: 700,
            fontFamily: "var(--font-display)",
            lineHeight: 1,
          }}
        >
          {count}
        </span>
        <span
          style={{
            color: "#5BAC2E",
            fontSize: "24px",
            fontWeight: 700,
            fontFamily: "var(--font-display)",
            lineHeight: 1,
          }}
        >
          {suffix}
        </span>
      </div>
      <p
        style={{
          color: "rgba(255,255,255,0.45)",
          fontSize: "10px",
          textTransform: "uppercase",
          letterSpacing: "0.13em",
          marginBottom: "6px",
        }}
      >
        {unit}
      </p>
      <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "12px", lineHeight: "1.55" }}>
        {desc}
      </p>
    </div>
  )
}

export default function SustainabilityBanner() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <div ref={ref} className="hidden lg:block">

      {/* ── Key metrics ── */}
      <div className="grid grid-cols-3 gap-6">
        {[
          { value: 60,  suffix: "M",  unit: "tonnes / yr",  desc: "Corn cob agricultural residues generated in India annually",  delay: 0   },
          { value: 3,   suffix: "×",  unit: "less water",   desc: "Bio-based extraction vs conventional chemical processing",    delay: 250 },
          { value: 100, suffix: "%",  unit: "renewable",    desc: "All feedstocks sourced from post-harvest crop residues",      delay: 500 },
        ].map(({ value, suffix, unit, desc, delay }) => (
          <AnimatedStat
            key={unit}
            value={value}
            suffix={suffix}
            unit={unit}
            desc={desc}
            delay={delay}
            triggered={inView}
          />
        ))}
      </div>


    </div>
  )
}
