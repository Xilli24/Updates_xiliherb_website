type TableRow = { factor: string; conventional: string; ours: string };

export default function ComparisonTable({ rows }: { rows: TableRow[] }) {
  return (
    <div className="mt-5 overflow-x-auto">
      <table
        className="w-full"
        style={{ border: "0.5px solid #E8E6DE", borderCollapse: "collapse" }}
      >
        <thead>
          <tr style={{ background: "#1A1A18" }}>
            <th
              className="text-left p-3 text-[11px] uppercase tracking-[0.06em]"
              style={{ color: "#C9CBBE", borderRight: "0.5px solid #44433E" }}
            >
              Factor
            </th>
            <th
              className="text-left p-3 text-[11px] uppercase tracking-[0.06em]"
              style={{ color: "#C9CBBE", borderRight: "0.5px solid #44433E" }}
            >
              Conventional
            </th>
            <th
              className="text-left p-3 text-[11px] uppercase tracking-[0.06em]"
              style={{ color: "#C9CBBE" }}
            >
              Ours
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} style={{ background: i % 2 === 0 ? "#F9F8F4" : "white" }}>
              <td
                className="p-3 text-[12px] font-medium"
                style={{ color: "#1A1A18", border: "0.5px solid #E8E6DE" }}
              >
                {row.factor}
              </td>
              <td
                className="p-3 text-[12px]"
                style={{ color: "#791f1f", border: "0.5px solid #E8E6DE" }}
              >
                <span style={{ marginRight: "6px" }}>●</span>
                {row.conventional}
              </td>
              <td
                className="p-3 text-[12px]"
                style={{ color: "#27500a", border: "0.5px solid #E8E6DE" }}
              >
                <span style={{ marginRight: "6px" }}>●</span>
                {row.ours}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
