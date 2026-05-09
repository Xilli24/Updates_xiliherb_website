export default function Cards({
  items,
  compact = false,
}: {
  items: string[];
  compact?: boolean;
}) {
  return (
    <div className={compact ? "grid gap-2 mt-4" : "grid sm:grid-cols-2 gap-3 mt-5"}>
      {items.map((item) => (
        <div
          key={item}
          className={`text-[13px] leading-relaxed ${compact ? "p-3" : "p-4"}`}
          style={{
            background: "#E8E6DE",
            borderLeft: "2px solid #C9CBBE",
            borderRadius: "2px",
            color: "#6B6A62",
          }}
        >
          {item}
        </div>
      ))}
    </div>
  );
}
