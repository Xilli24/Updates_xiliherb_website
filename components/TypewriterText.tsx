"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  text: string;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function TypewriterText({ text, delay = 0, className, style }: Props) {
  const [displayed, setDisplayed] = useState("");
  const [cursorPhase, setCursorPhase] = useState<"hidden" | "typing" | "blinking" | "done">("hidden");
  const frameRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    let index = 0;
    let blinkCount = 0;

    const start = setTimeout(() => {
      setCursorPhase("typing");

      const type = () => {
        index++;
        setDisplayed(text.slice(0, index));

        if (index < text.length) {
          frameRef.current = setTimeout(type, 65);
        } else {
          setCursorPhase("blinking");

          // 3 blink cycles at 500ms each = 1500ms, then fade out
          const blinkInterval = setInterval(() => {
            blinkCount++;
            if (blinkCount >= 6) {
              clearInterval(blinkInterval);
              setCursorPhase("done");
            }
          }, 500);
        }
      };

      frameRef.current = setTimeout(type, 65);
    }, delay);

    return () => {
      clearTimeout(start);
      if (frameRef.current) clearTimeout(frameRef.current);
    };
  }, [text, delay]);

  return (
    <span className={className} style={style}>
      <style>{`
        @keyframes tw-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
      {displayed}
      {cursorPhase !== "hidden" && cursorPhase !== "done" && (
        <span
          aria-hidden="true"
          style={{
            display: "inline-block",
            width: 2,
            height: "0.8em",
            background: "#C9CBBE",
            marginLeft: 3,
            verticalAlign: "middle",
            animation: cursorPhase === "blinking" ? "tw-blink 0.5s step-start 6" : "none",
            opacity: cursorPhase === "typing" ? 1 : undefined,
          }}
        />
      )}
      {cursorPhase === "done" && (
        <span
          aria-hidden="true"
          style={{
            display: "inline-block",
            width: 2,
            height: "0.8em",
            background: "#C9CBBE",
            marginLeft: 3,
            verticalAlign: "middle",
            opacity: 0,
            transition: "opacity 0.4s ease",
          }}
        />
      )}
    </span>
  );
}
