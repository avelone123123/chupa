"use client";
import { useEffect, useRef } from "react";
export default function CursorEffect() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches || "ontouchstart" in window;
    if (isMobile) return;
    let mouseX = -100, mouseY = -100;
    let trailX = -100, trailY = -100;
    let isHovering = false;
    const handleMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${mouseX - 5}px, ${mouseY - 5}px, 0)`;
      }
    };
    const animate = () => {
      trailX += (mouseX - trailX) * 0.12;
      trailY += (mouseY - trailY) * 0.12;
      if (trailRef.current) {
        const size = isHovering ? 56 : 40;
        const borderColor = isHovering ? "rgba(255,215,0,0.5)" : "rgba(255,215,0,0.2)";
        trailRef.current.style.transform = `translate3d(${trailX - size / 2}px, ${trailY - size / 2}px, 0)`;
        trailRef.current.style.width = `${size}px`;
        trailRef.current.style.height = `${size}px`;
        trailRef.current.style.borderColor = borderColor;
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    const onEnter = () => { isHovering = true; };
    const onLeave = () => { isHovering = false; };
    document.addEventListener("mousemove", handleMove, { passive: true });
    rafRef.current = requestAnimationFrame(animate);
    const interactives = document.querySelectorAll("a, button, [role='button'], input, select, textarea");
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });
    return () => {
      document.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(rafRef.current);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);
  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full pointer-events-none z-[9998] hidden md:block"
        style={{ background: "var(--gold)", mixBlendMode: "difference", willChange: "transform" }}
      />
      <div
        ref={trailRef}
        className="fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none z-[9997] hidden md:block"
        style={{ border: "1.5px solid rgba(255,215,0,0.2)", transition: "width 0.3s, height 0.3s, border-color 0.3s", willChange: "transform" }}
      />
    </>
  );
}
