import { GRAIN } from "@/lib/constants";

export default function Callout({ text }: { text: string }) {
  return (
    <div
      className="my-8 p-8 relative overflow-hidden"
      style={{ background: "#1E3F6E", borderRadius: "2px" }}
    >
      <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: GRAIN }} />
      <p
        className="relative z-10 text-[17px] leading-[1.75] font-medium"
        style={{ color: "#F7F6F2", fontFamily: "var(--font-display)" }}
      >
        {text}
      </p>
    </div>
  );
}
