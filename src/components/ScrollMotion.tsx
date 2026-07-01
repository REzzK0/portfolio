"use client";

import { useEffect } from "react";

export function ScrollMotion() {
  useEffect(() => {
    let frame = 0;

    const updateMotion = () => {
      frame = 0;

      const scrollY = window.scrollY;
      const root = document.documentElement;

      root.style.setProperty("--motion-slow", `${scrollY * -0.035}px`);
      root.style.setProperty("--motion-medium", `${scrollY * -0.065}px`);
      root.style.setProperty("--motion-fast", `${scrollY * -0.11}px`);
      root.style.setProperty("--motion-drift", `${scrollY * 0.05}px`);
      root.style.setProperty("--motion-rotate", `${scrollY * 0.012}deg`);
      root.style.setProperty("--motion-rotate-reverse", `${scrollY * -0.009}deg`);
    };

    const requestUpdate = () => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(updateMotion);
    };

    updateMotion();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }

      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  return (
    <div className="scroll-motion-layer" aria-hidden="true">
      <span className="scroll-motion-ring scroll-motion-ring-a" />
      <span className="scroll-motion-ring scroll-motion-ring-b" />
      <span className="scroll-motion-line scroll-motion-line-a" />
      <span className="scroll-motion-line scroll-motion-line-b" />
      <span className="scroll-motion-dot scroll-motion-dot-a" />
      <span className="scroll-motion-dot scroll-motion-dot-b" />
    </div>
  );
}
