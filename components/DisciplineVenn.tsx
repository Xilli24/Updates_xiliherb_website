"use client";

const CIRC = +(2 * Math.PI * 108).toFixed(1); // stroke circumference ≈ 678.6

export default function DisciplineVenn() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <style>{`
        /* ── Entry ── */
        @keyframes vScaleIn {
          from { opacity: 0; transform: scale(0.86); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes vFadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes vFadeSlideUp {
          from { opacity: 0; transform: translateY(7px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── Stroke draw-in ── */
        @keyframes vDraw {
          from { stroke-dashoffset: ${CIRC}; }
          to   { stroke-dashoffset: 0; }
        }

        /* ── Fill opacity pulse ── */
        @keyframes vPulseA { 0%,100%{opacity:0.72;} 50%{opacity:1;} }
        @keyframes vPulseB { 0%,100%{opacity:0.60;} 50%{opacity:0.92;} }

        /* ── Per-circle slow drift ── */
        @keyframes vDrift1 { 0%,100%{transform:translate(0,0);}  50%{transform:translate(-4px,-5px);} }
        @keyframes vDrift2 { 0%,100%{transform:translate(0,0);}  50%{transform:translate( 5px,-4px);} }
        @keyframes vDrift3 { 0%,100%{transform:translate(0,0);}  50%{transform:translate(-5px, 5px);} }
        @keyframes vDrift4 { 0%,100%{transform:translate(0,0);}  50%{transform:translate( 4px, 5px);} }

        /* ── Orbital ring rotation ── */
        @keyframes vCW  { from{transform:rotate(0deg);}   to{transform:rotate(360deg);}  }
        @keyframes vCCW { from{transform:rotate(0deg);}   to{transform:rotate(-360deg);} }

        /* ── Sonar ripple ── */
        @keyframes vRipple {
          0%   { transform: scale(1);   opacity: 0.75; }
          100% { transform: scale(5.5); opacity: 0;    }
        }

        /* ── Center ambient glow ── */
        @keyframes vGlow { 0%,100%{opacity:0.35;} 50%{opacity:0.90;} }

        /* ── XiliHerb text shimmer ── */
        @keyframes vShimmer {
          0%,100% { fill: rgba(26,230,242,0.92); }
          50%     { fill: rgba(200,255,255,1); }
        }

        /* ── Applied classes ── */
        .vc1 { animation: vPulseA 6s    ease-in-out infinite 0s; }
        .vc2 { animation: vPulseB 6.5s  ease-in-out infinite 0.9s; }
        .vc3 { animation: vPulseB 5.8s  ease-in-out infinite 1.7s; }
        .vc4 { animation: vPulseA 6.3s  ease-in-out infinite 2.5s; }

        .vd1 { animation: vDrift1  9s   ease-in-out infinite 0s; }
        .vd2 { animation: vDrift2  10s  ease-in-out infinite 1s; }
        .vd3 { animation: vDrift3  11s  ease-in-out infinite 0.5s; }
        .vd4 { animation: vDrift4  9.5s ease-in-out infinite 2s; }

        .vs1 { stroke-dasharray:${CIRC}; stroke-dashoffset:${CIRC}; animation: vDraw 2s ease-out forwards 0.2s; }
        .vs2 { stroke-dasharray:${CIRC}; stroke-dashoffset:${CIRC}; animation: vDraw 2s ease-out forwards 0.55s; }
        .vs3 { stroke-dasharray:${CIRC}; stroke-dashoffset:${CIRC}; animation: vDraw 2s ease-out forwards 0.9s; }
        .vs4 { stroke-dasharray:${CIRC}; stroke-dashoffset:${CIRC}; animation: vDraw 2s ease-out forwards 1.25s; }

        .vo1 { transform-origin:200px 195px; animation: vCW  30s linear infinite; }
        .vo2 { transform-origin:200px 195px; animation: vCCW 20s linear infinite; }

        .vr1 { transform-box:fill-box; transform-origin:center; animation: vRipple 3.6s ease-out infinite 0s; }
        .vr2 { transform-box:fill-box; transform-origin:center; animation: vRipple 3.6s ease-out infinite 1.2s; }
        .vr3 { transform-box:fill-box; transform-origin:center; animation: vRipple 3.6s ease-out infinite 2.4s; }

        .vglow { animation: vGlow 3.5s ease-in-out infinite; }

        .vl1 { animation: vFadeSlideUp 0.65s ease-out forwards 1.6s;  opacity:0; }
        .vl2 { animation: vFadeSlideUp 0.65s ease-out forwards 1.9s;  opacity:0; }
        .vl3 { animation: vFadeSlideUp 0.65s ease-out forwards 2.2s;  opacity:0; }
        .vl4 { animation: vFadeSlideUp 0.65s ease-out forwards 2.5s;  opacity:0; }
        .vcl { animation: vShimmer 3.5s ease-in-out infinite, vFadeIn 0.65s ease-out forwards 2.7s; opacity:0; }

        .vwrap { animation: vScaleIn 1s ease-out forwards; }
      `}</style>

      <svg className="vwrap" viewBox="0 0 400 390" style={{ width: "100%", maxWidth: "420px" }}>
        <defs>
          <radialGradient id="cgGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#1AD2DC" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#1AD2DC" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* ── Dual counter-rotating orbital rings ── */}
        <circle className="vo1" cx="200" cy="195" r="168"
          fill="none" stroke="rgba(26,215,225,0.13)" strokeWidth="1"
          strokeDasharray="5 16" />
        <circle className="vo2" cx="200" cy="195" r="150"
          fill="none" stroke="rgba(91,172,46,0.11)" strokeWidth="1"
          strokeDasharray="2 22" />

        {/* ── Sonar ripples expanding from centre ── */}
        <circle className="vr1" cx="200" cy="195" r="18"
          fill="none" stroke="rgba(26,215,225,0.65)" strokeWidth="1.5" />
        <circle className="vr2" cx="200" cy="195" r="18"
          fill="none" stroke="rgba(26,215,225,0.65)" strokeWidth="1.5" />
        <circle className="vr3" cx="200" cy="195" r="18"
          fill="none" stroke="rgba(26,215,225,0.65)" strokeWidth="1.5" />

        {/* ── Circle fills — drift independently ── */}
        <g className="vd1"><circle className="vc1" cx="142" cy="137" r="108" fill="rgba(26,155,160,0.13)" /></g>
        <g className="vd2"><circle className="vc2" cx="258" cy="137" r="108" fill="rgba(91,172,46,0.11)"  /></g>
        <g className="vd3"><circle className="vc3" cx="142" cy="253" r="108" fill="rgba(46,185,105,0.10)" /></g>
        <g className="vd4"><circle className="vc4" cx="258" cy="253" r="108" fill="rgba(30,100,185,0.13)" /></g>

        {/* ── Circle strokes — draw-in on load, fixed position ── */}
        <circle className="vs1" cx="142" cy="137" r="108" fill="none" stroke="rgba(26,215,225,0.52)" strokeWidth="1.5" />
        <circle className="vs2" cx="258" cy="137" r="108" fill="none" stroke="rgba(120,215,70,0.44)"  strokeWidth="1.5" />
        <circle className="vs3" cx="142" cy="253" r="108" fill="none" stroke="rgba(60,215,135,0.42)"  strokeWidth="1.5" />
        <circle className="vs4" cx="258" cy="253" r="108" fill="none" stroke="rgba(50,155,245,0.42)"  strokeWidth="1.5" />

        {/* ── Centre ambient glow + accent dots ── */}
        <circle className="vglow" cx="200" cy="195" r="78" fill="url(#cgGrad)" />
        <circle cx="200" cy="195" r="22" fill="rgba(26,215,225,0.18)" />
        <circle cx="200" cy="195" r="13" fill="rgba(26,225,235,0.32)" />

        {/* ── Corner labels (slide up on entry) ── */}
        <text className="vl1" textAnchor="middle" fontSize="11.5" fontWeight="600"
          fill="rgba(247,246,242,0.88)" fontFamily="system-ui,sans-serif">
          <tspan x="66" y="52">Agricultural</tspan><tspan x="66" dy="15">Science</tspan>
        </text>
        <text className="vl2" textAnchor="middle" fontSize="11.5" fontWeight="600"
          fill="rgba(247,246,242,0.88)" fontFamily="system-ui,sans-serif">
          <tspan x="334" y="52">Biochemical</tspan><tspan x="334" dy="15">Engineering</tspan>
        </text>
        <text className="vl3" textAnchor="middle" fontSize="11.5" fontWeight="600"
          fill="rgba(247,246,242,0.88)" fontFamily="system-ui,sans-serif">
          <tspan x="66" y="318">Sustainable</tspan><tspan x="66" dy="15">Process Design</tspan>
        </text>
        <text className="vl4" textAnchor="middle" fontSize="11.5" fontWeight="600"
          fill="rgba(247,246,242,0.88)" fontFamily="system-ui,sans-serif">
          <tspan x="334" y="318">Industrial</tspan><tspan x="334" dy="15">Biotechnology</tspan>
        </text>

        {/* ── Centre XiliHerb label — shimmer loop ── */}
        <text className="vcl" x="200" y="200" textAnchor="middle"
          fontSize="12.5" fontWeight="700"
          fontFamily="system-ui,sans-serif"
          letterSpacing="0.09em">
          XiliHerb
        </text>
      </svg>
    </div>
  );
}
