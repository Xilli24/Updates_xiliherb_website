"use client";

const NUM_PATHS = 7;

const paths = Array.from({ length: NUM_PATHS }, (_, i) => {
  const freq = 0.008 + i * 0.003;
  const amplitude = 18 + i * 8;
  const yBase = 30 + (i / (NUM_PATHS - 1)) * 140;

  let d = `M -300 ${yBase.toFixed(1)}`;
  for (let x = -300; x <= 1740; x += 8) {
    const y = yBase + amplitude * Math.sin(freq * x);
    d += ` L ${x} ${y.toFixed(1)}`;
  }

  return { d, opacity: 0.06 + i * 0.025, delay: i * 1.8 };
});

export default function TopoLines() {
  return (
    <>
      <style>{`
        @keyframes topo-slide {
          from { transform: translateX(0px); }
          to   { transform: translateX(-60px); }
        }
      `}</style>
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
          overflow: "visible",
        }}
      >
        {paths.map(({ d, opacity, delay }, i) => (
          <path
            key={i}
            d={d}
            stroke="#C9CBBE"
            strokeWidth="0.6"
            fill="none"
            opacity={opacity}
            style={{
              animation: "topo-slide 12s linear infinite",
              animationDelay: `${delay}s`,
            }}
          />
        ))}
      </svg>
    </>
  );
}
