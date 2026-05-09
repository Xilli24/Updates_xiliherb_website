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
        border: "1px solid #2A2820",
      }}
    >

      {/* ── Conventional column ── */}
      <div style={{ background: "#1E1C18", padding: "28px 26px" }}>
        <p
          style={{
            fontSize: 10,
            textTransform: "uppercase",
            letterSpacing: "0.18em",
            fontWeight: 600,
            color: "#6B6A62",
            marginBottom: 20,
            paddingBottom: 14,
            borderBottom: "1px solid rgba(107,106,98,0.18)",
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
                borderBottom: i === rows.length - 1 ? "none" : "1px solid rgba(107,106,98,0.12)",
              }}
            >
              <p
                style={{
                  fontSize: 9,
                  textTransform: "uppercase",
                  letterSpacing: "0.14em",
                  color: "#44433E",
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
          background: "#0D2418",
          padding: "28px 26px",
          borderLeft: "1px solid #1A3020",
        }}
      >
        <p
          style={{
            fontSize: 10,
            textTransform: "uppercase",
            letterSpacing: "0.18em",
            fontWeight: 600,
            color: "#4A8060",
            marginBottom: 20,
            paddingBottom: 14,
            borderBottom: "1px solid rgba(74,128,96,0.2)",
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
                borderBottom: i === rows.length - 1 ? "none" : "1px solid rgba(74,128,96,0.12)",
              }}
            >
              <p
                style={{
                  fontSize: 9,
                  textTransform: "uppercase",
                  letterSpacing: "0.14em",
                  color: "#2A5038",
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
