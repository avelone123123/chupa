"use client";
import { useEffect, useRef } from "react";
export default function CursorEffect() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    if (isMobile) return;
    let mouseX = 0, mouseY = 0;
    let trailX = 0, trailY = 0;
    const handleMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${mouseX - 6}px, ${mouseY - 6}px)`;
      }
    };
    const animate = () => {
      trailX += (mouseX - trailX) * 0.15;
      trailY += (mouseY - trailY) * 0.15;
      if (trailRef.current) {
        trailRef.current.style.transform = `translate(${trailX - 20}px, ${trailY - 20}px)`;
      }
      requestAnimationFrame(animate);
    };
    const handleEnterInteractive = () => {
      if (cursorRef.current) cursorRef.current.style.transform += " scale(0.5)";
      if (trailRef.current) {
        trailRef.current.style.width = "60px";
        trailRef.current.style.height = "60px";
        trailRef.current.style.borderColor = "rgba(255,215,0,0.6)";
      }
    };
    const handleLeaveInteractive = () => {
      if (trailRef.current) {
        trailRef.current.style.width = "40px";
        trailRef.current.style.height = "40px";
        trailRef.current.style.borderColor = "rgba(255,215,0,0.3)";
      }
    };
    document.addEventListener("mousemove", handleMove);
    animate();
    const interactives = document.querySelectorAll("a, button, [role='button']");
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", handleEnterInteractive);
      el.addEventListener("mouseleave", handleLeaveInteractive);
    });
    return () => {
      document.removeEventListener("mousemove", handleMove);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", handleEnterInteractive);
        el.removeEventListener("mouseleave", handleLeaveInteractive);
      });
    };
  }, []);
  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-3 h-3 rounded-full pointer-events-none z-[9998] hidden md:block"
        style={{ background: "#FFD700", mixBlendMode: "difference" }}
      />
      <div
        ref={trailRef}
        className="fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none z-[9997] hidden md:block transition-all duration-300"
        style={{ border: "2px solid rgba(255,215,0,0.3)" }}
      />
    </>
  );
}
