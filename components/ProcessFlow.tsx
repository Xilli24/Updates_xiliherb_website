type ProcessStep = { num: string; title: string; desc: string };

export default function ProcessFlow({ steps }: { steps: ProcessStep[] }) {
  return (
    <div className="flex flex-col md:flex-row mt-5" style={{ border: "1px solid #E0E0DA", borderRadius: "4px", overflow: "hidden" }}>
      {steps.map((step, i) => (
        <div
          key={i}
          className="flex-1 p-4 border-b last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"
          style={{ background: "#F7F6F2", borderColor: "#E0E0DA" }}
        >
          <p
            className="font-mono text-[10px] mb-2"
            style={{ color: "#5BAC2E" }}
          >
            {step.num}
          </p>
          <p
            className="text-[12px] font-medium mb-1"
            style={{ color: "#1E3F6E" }}
          >
            {step.title}
          </p>
          <p
            className="text-[11px] leading-[1.5]"
            style={{ color: "#6B6B6B" }}
          >
            {step.desc}
          </p>
        </div>
      ))}
    </div>
  );
}
