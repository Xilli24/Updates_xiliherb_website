type TableRow = { factor: string; conventional: string; ours: string };

export default function ComparisonTable({ rows }: { rows: TableRow[] }) {
  return (
    <div
      className="mt-5"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        borderRadius: 4,
        overflow: "hidden",
        border: "1px solid #16325A",
      }}
    >

      {/* ── Conventional column ── */}
      <div style={{ background: "#1A2F52", padding: "28px 26px" }}>
        <p
          style={{
            fontSize: 10,
            textTransform: "uppercase",
            letterSpacing: "0.18em",
            fontWeight: 600,
            color: "rgba(255,255,255,0.45)",
            marginBottom: 20,
            paddingBottom: 14,
            borderBottom: "1px solid rgba(255,255,255,0.12)",
          }}
        >
          Conventional
        </p>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {rows.map((row, i) => (
            <div
              key={i}
              style={{
                paddingTop: i === 0 ? 0 : 16,
                paddingBottom: i === rows.length - 1 ? 0 : 16,
                borderBottom: i === rows.length - 1 ? "none" : "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <p
                style={{
                  fontSize: 9,
                  textTransform: "uppercase",
                  letterSpacing: "0.14em",
                  color: "rgba(255,255,255,0.35)",
                  marginBottom: 5,
                  fontWeight: 500,
                }}
              >
                {row.factor}
              </p>
              <p style={{ fontSize: 13, color: "#B8827C", lineHeight: 1.6, margin: 0 }}>
                {row.conventional}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── XiliHerb column ── */}
      <div
        style={{
          background: "#1E3F6E",
          padding: "28px 26px",
          borderLeft: "1px solid #16325A",
        }}
      >
        <p
          style={{
            fontSize: 10,
            textTransform: "uppercase",
            letterSpacing: "0.18em",
            fontWeight: 600,
            color: "#5BAC2E",
            marginBottom: 20,
            paddingBottom: 14,
            borderBottom: "1px solid rgba(91,172,46,0.25)",
          }}
        >
          XiliHerb
        </p>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {rows.map((row, i) => (
            <div
              key={i}
              style={{
                paddingTop: i === 0 ? 0 : 16,
                paddingBottom: i === rows.length - 1 ? 0 : 16,
                borderBottom: i === rows.length - 1 ? "none" : "1px solid rgba(91,172,46,0.12)",
              }}
            >
              <p
                style={{
                  fontSize: 9,
                  textTransform: "uppercase",
                  letterSpacing: "0.14em",
                  color: "rgba(91,172,46,0.6)",
                  marginBottom: 5,
                  fontWeight: 500,
                }}
              >
                {row.factor}
              </p>
              <p style={{ fontSize: 13, color: "#7EC4A0", lineHeight: 1.6, margin: 0 }}>
                {row.ours}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
