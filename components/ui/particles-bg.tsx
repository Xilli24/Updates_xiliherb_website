"use client";

import { useEffect, useCallback } from "react";

interface ParticlesProps {
  id?: string;
  className?: string;
}

export default function ParticlesComponent({ id = "particles-js", className = "" }: ParticlesProps) {
  const initParticles = useCallback(() => {
    const oldCanvas = document.querySelector(`#${id} canvas`);
    if (oldCanvas) oldCanvas.remove();

    // @ts-ignore
    if (window.pJSDom?.length > 0) {
      // @ts-ignore
      window.pJSDom.forEach((p: any) => p.pJS.fn.vendors.destroypJS());
      // @ts-ignore
      window.pJSDom = [];
    }

    // @ts-ignore
    window.particlesJS(id, {
      particles: {
        number: { value: 110, density: { enable: true, value_area: 800 } },
        color: { value: "#00e5ff" },
        shape: { type: "circle", stroke: { width: 0.5, color: "#0096c7" } },
        opacity: {
          value: 0.5,
          random: true,
          anim: { enable: true, speed: 0.8, opacity_min: 0.15 },
        },
        size: {
          value: 2.5,
          random: true,
          anim: { enable: true, speed: 1.5, size_min: 0.8 },
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#29b6f6",
          opacity: 0.28,
          width: 1,
        },
        move: { enable: true, speed: 1.4, random: true, out_mode: "bounce" },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "grab" },
          onclick: { enable: true, mode: "push" },
          resize: true,
        },
        modes: {
          grab: { distance: 200, line_linked: { opacity: 0.55 } },
          push: { particles_nb: 3 },
        },
      },
      retina_detect: true,
    });
  }, [id]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const existing = document.querySelector('script[src*="particles.min.js"]');
    if (existing) {
      // @ts-ignore
      if (window.particlesJS) {
        initParticles();
      } else {
        existing.addEventListener("load", initParticles);
      }
      return () => {
        existing.removeEventListener("load", initParticles);
        const c = document.querySelector(`#${id} canvas`);
        if (c) c.remove();
      };
    }

    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
    script.async = true;
    document.body.appendChild(script);
    script.onload = () => initParticles();

    return () => {
      const c = document.querySelector(`#${id} canvas`);
      if (c) c.remove();
      // @ts-ignore
      if (window.pJSDom?.length > 0) {
        // @ts-ignore
        window.pJSDom.forEach((p: any) => p.pJS.fn.vendors.destroypJS());
        // @ts-ignore
        window.pJSDom = [];
      }
    };
  }, [id, initParticles]);

  return (
    <div
      id={id}
      className={`absolute inset-0 ${className}`}
    />
  );
}
