"use client";

import { useEffect, useRef } from "react";

type Node = { x: number; y: number; vx: number; vy: number; r: number };

interface Props {
  fillParent?: boolean;
}

export default function MolecularGraph({ fillParent = false }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const isMobile = window.innerWidth < 768;
    const nodeCount = fillParent ? 38 : (isMobile ? 18 : 28);
    const H = fillParent
      ? (canvas.parentElement?.offsetHeight || window.innerHeight)
      : (isMobile ? 200 : 320);

    canvas.style.height = `${H}px`;
    let W = canvas.offsetWidth || 480;
    canvas.width = W;
    canvas.height = H;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rand = (min: number, max: number) => Math.random() * (max - min) + min;

    const nodes: Node[] = Array.from({ length: nodeCount }, () => ({
      x: rand(0, W),
      y: rand(0, H),
      vx: (Math.random() - 0.5) * 0.7,
      vy: (Math.random() - 0.5) * 0.7,
      r: rand(2, 3.5),
    }));

    let animId = 0;

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > W) { n.vx *= -1; n.x = Math.max(0, Math.min(W, n.x)); }
        if (n.y < 0 || n.y > H) { n.vy *= -1; n.y = Math.max(0, Math.min(H, n.y)); }
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(201,203,190,${(1 - dist / 110) * 0.25})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = n.r > 2.8 ? "rgba(201,203,190,0.7)" : "rgba(201,203,190,0.4)";
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      const newW = canvas.offsetWidth;
      if (newW > 0 && newW !== W) {
        W = newW;
        canvas.width = newW;
        for (const n of nodes) {
          if (n.x > W) n.x = Math.random() * W;
        }
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, [fillParent]);

  return (
    <div className={fillParent ? "absolute inset-0" : "relative w-full"}>
      {!fillParent && (
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at 60% 50%, rgba(201,203,190,0.06) 0%, transparent 65%)",
          }}
        />
      )}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        style={{ width: "100%", display: "block" }}
      />
    </div>
  );
}
