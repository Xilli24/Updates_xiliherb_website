export default function Divider() {
  return (
    <div className="relative w-full" style={{ height: "64px" }}>

      {/* Left fade rule */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "2rem",
          right: "calc(50% + 44px)",
          height: "1px",
          background: "linear-gradient(to right, transparent, rgba(201,203,190,0.45))",
        }}
      />

      {/* Right fade rule */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "calc(50% + 44px)",
          right: "2rem",
          height: "1px",
          background: "linear-gradient(to left, transparent, rgba(201,203,190,0.45))",
        }}
      />

      {/* Botanical centre mark */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <svg
          width="88"
          height="64"
          viewBox="0 0 88 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Central stem */}
          <line x1="44" y1="8" x2="44" y2="56" stroke="#C9CBBE" strokeWidth="0.8" opacity="0.6" />

          {/* Upper left leaf */}
          <path
            d="M 44,18 C 39,10 25,11 29,18 C 31,22 41,20 44,19"
            stroke="#C9CBBE"
            strokeWidth="0.9"
            opacity="0.72"
          />

          {/* Upper right leaf */}
          <path
            d="M 44,18 C 49,10 63,11 59,18 C 57,22 47,20 44,19"
            stroke="#C9CBBE"
            strokeWidth="0.9"
            opacity="0.72"
          />

          {/* Lower left leaf */}
          <path
            d="M 44,32 C 36,24 20,26 25,33 C 27,37 41,35 44,33"
            stroke="#C9CBBE"
            strokeWidth="0.9"
            opacity="0.5"
          />

          {/* Lower right leaf */}
          <path
            d="M 44,32 C 52,24 68,26 63,33 C 61,37 47,35 44,33"
            stroke="#C9CBBE"
            strokeWidth="0.9"
            opacity="0.5"
          />

          {/* Stem tip roots */}
          <line x1="44" y1="51" x2="40" y2="56" stroke="#C9CBBE" strokeWidth="0.8" opacity="0.28" />
          <line x1="44" y1="51" x2="48" y2="56" stroke="#C9CBBE" strokeWidth="0.8" opacity="0.28" />
        </svg>
      </div>

    </div>
  );
}
