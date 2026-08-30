"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { StarSvg, FireSvg, RocketSvg, LightningSvg } from "@/components/svgs";
const phases = [
  {
    phase: "PHASE 1",
    title: "CHUPA APPEARS",
    description: "Internet starts asking: who is Chupa?",
    Svg: StarSvg,
    status: "complete" as const,
  },
  {
    phase: "PHASE 2",
    title: "CHUPA SPREADS",
    description: "Videos. Memes. Chaos.",
    Svg: FireSvg,
    status: "active" as const,
  },
  {
    phase: "PHASE 3",
    title: "CHUPA GOES ONLINE",
    description: "Community takes over.",
    Svg: RocketSvg,
    status: "upcoming" as const,
  },
  {
    phase: "PHASE 4",
    title: "???",
    description: "ЧУПАААААА",
    Svg: LightningSvg,
    status: "upcoming" as const,
  },
];
const statusColors = {
  complete: { dot: "bg-[var(--gold)] shadow-[0_0_12px_rgba(255,215,0,0.5)]", border: "border-[var(--gold)]" },
  active: { dot: "bg-[var(--gold)]/60 animate-pulse-gold", border: "border-[var(--gold)]" },
  upcoming: { dot: "bg-transparent", border: "border-white/15" },
};
export default function RoadmapSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const lineWidth = useTransform(scrollYProgress, [0.1, 0.8], ["0%", "100%"]);
  return (
    <section id="roadmap" ref={containerRef} className="relative py-24 md:py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="section-divider absolute top-0" />
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-black text-4xl md:text-6xl lg:text-7xl mb-4">
            THE <span className="gold-gradient gold-text-glow">CHUPA</span> PLAN
          </h2>
          <p className="text-white/25 text-lg">(if you can call it a plan)</p>
        </motion.div>
        <div className="hidden md:block relative mb-8">
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white/[0.04] -translate-y-1/2 rounded-full" />
          <motion.div
            className="absolute top-1/2 left-0 h-[2px] -translate-y-1/2 rounded-full"
            style={{
              width: lineWidth,
              background: "linear-gradient(90deg, var(--gold), var(--gold-light))",
              boxShadow: "0 0 20px rgba(255,215,0,0.3), 0 0 60px rgba(255,215,0,0.1)",
            }}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {phases.map((phase, i) => {
            const colors = statusColors[phase.status];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div className="hidden md:flex justify-center mb-6">
                  <div className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${colors.dot} ${colors.border}`} />
                </div>
                <div className="glass rounded-2xl p-6 text-center relative overflow-hidden h-full card-hover-glow gradient-border">
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: "radial-gradient(circle at center, rgba(255,215,0,0.04) 0%, transparent 70%)" }}
                  />
                  <div className="relative z-10">
                    <div className="flex justify-center mb-3">
                      <motion.div
                        whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <phase.Svg className="w-10 h-10 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                      </motion.div>
                    </div>
                    <span className="text-[var(--gold)] text-[10px] font-bold tracking-[0.2em] uppercase">{phase.phase}</span>
                    <h3 className="font-display font-black text-lg mt-2 mb-3 text-white">{phase.title}</h3>
                    <p className="text-white/30 text-sm leading-relaxed">{phase.description}</p>
                    {phase.status === "active" && (
                      <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase text-[var(--gold)] bg-[var(--gold)]/[0.08]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)] animate-pulse" />
                        ACTIVE
                      </div>
                    )}
                    {phase.status === "complete" && (
                      <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase text-green-400 bg-green-400/[0.08]">
                        <svg viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3"><path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" /></svg>
                        DONE
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
