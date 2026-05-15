import { Wheat, FlaskConical, CloudSun, MapPin, Atom, Recycle, Globe, ArrowLeftRight } from "lucide-react"
import type { ReactNode } from "react"

type TableRow = { factor: string; conventional: string; ours: string }

interface ComparisonTableProps {
  rows: TableRow[]
  convSubtitle?: string
  xiliSubtitle?: string
}

const factorIconMap: Record<string, ReactNode> = {
  "raw material":    <Wheat size={13} />,
  "chemistry":       <FlaskConical size={13} />,
  "carbon footprint":<CloudSun size={13} />,
  "traceability":    <MapPin size={13} />,
  "end product":     <Atom size={13} />,
  "feedstock":       <Wheat size={13} />,
  "process":         <FlaskConical size={13} />,
  "by-product output": <Recycle size={13} />,
  "supply chain":    <Globe size={13} />,
}

function getIcon(factor: string): ReactNode {
  return factorIconMap[factor.toLowerCase()] ?? <ArrowLeftRight size={13} />
}

export default function ComparisonTable({
  rows,
  convSubtitle,
  xiliSubtitle,
}: ComparisonTableProps) {
  return (
    <div
      style={{
        background: "#0D1B2E",
        borderRadius: 12,
        overflow: "hidden",
        padding: "20px",
        marginTop: 20,
        border: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      {/* ── Column headers ── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 88px 1fr",
          gap: 12,
          marginBottom: 20,
        }}
      >
        {/* Conventional header */}
        <div
          style={{
            background: "#1C0E11",
            borderRadius: 8,
            padding: "13px 16px",
            border: "1px solid rgba(200,124,124,0.2)",
          }}
        >
          <p
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#F0EBE8",
              margin: 0,
            }}
          >
            Conventional
          </p>
          {convSubtitle && (
            <p style={{ fontSize: 11, color: "rgba(255,255,255,0.32)", margin: "4px 0 0" }}>
              {convSubtitle}
            </p>
          )}
        </div>

        {/* Centre gap */}
        <div />

        {/* XiliHerb header */}
        <div
          style={{
            background: "#0A1E12",
            borderRadius: 8,
            padding: "13px 16px",
            border: "1px solid rgba(91,172,46,0.25)",
          }}
        >
          <p
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#5BAC2E",
              margin: 0,
            }}
          >
            XiliHerb
          </p>
          {xiliSubtitle && (
            <p style={{ fontSize: 11, color: "rgba(255,255,255,0.32)", margin: "4px 0 0" }}>
              {xiliSubtitle}
            </p>
          )}
        </div>
      </div>

      {/* ── Data rows ── */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        {rows.map((row, i) => (
          <div
            key={i}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 88px 1fr",
              gap: 12,
              alignItems: "center",
              paddingTop: i === 0 ? 0 : 16,
              paddingBottom: i === rows.length - 1 ? 0 : 16,
              borderBottom:
                i === rows.length - 1 ? "none" : "1px solid rgba(255,255,255,0.05)",
            }}
          >
            {/* Conventional value — right-aligned */}
            <p
              style={{
                fontSize: 13,
                color: "#C97878",
                lineHeight: 1.6,
                margin: 0,
                textAlign: "right",
              }}
            >
              {row.conventional}
            </p>

            {/* Centre — label above, icon circle below */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
              <p
                style={{
                  fontSize: 8,
                  textTransform: "uppercase",
                  letterSpacing: "0.13em",
                  color: "rgba(255,255,255,0.3)",
                  margin: 0,
                  textAlign: "center",
                  lineHeight: 1.3,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  maxWidth: 80,
                }}
              >
                {row.factor}
              </p>
              <div
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: "50%",
                  background: "radial-gradient(circle at 40% 40%, #1E3F6E, #0D1B2E)",
                  border: "1px solid rgba(255,255,255,0.14)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "rgba(255,255,255,0.55)",
                  flexShrink: 0,
                }}
              >
                {getIcon(row.factor)}
              </div>
            </div>

            {/* XiliHerb value — left-aligned */}
            <p
              style={{
                fontSize: 13,
                color: "#E4EBF2",
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              {row.ours}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
