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
        <div
          className="absolute top-0 left-0 w-full h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(255,215,0,0.2), transparent)" }}
        />
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-black text-4xl md:text-6xl lg:text-7xl mb-4">
            THE <span className="gold-gradient gold-text-glow">CHUPA</span> PLAN
          </h2>
          <p className="text-white/30 text-lg">(if you can call it a plan)</p>
        </motion.div>
        <div className="hidden md:block relative mb-8">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/5 -translate-y-1/2" />
          <motion.div
            className="absolute top-1/2 left-0 h-0.5 -translate-y-1/2"
            style={{
              width: lineWidth,
              background: "linear-gradient(90deg, var(--gold), var(--gold-light))",
              boxShadow: "0 0 20px rgba(255,215,0,0.4)",
            }}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {phases.map((phase, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="hidden md:flex justify-center mb-6">
                <div
                  className={`w-5 h-5 rounded-full border-2 transition-all duration-300 ${
                    phase.status === "complete"
                      ? "bg-[var(--gold)] border-[var(--gold)]"
                      : phase.status === "active"
                      ? "bg-[var(--gold)]/50 border-[var(--gold)] animate-pulse-gold"
                      : "bg-transparent border-white/20"
                  }`}
                />
              </div>
              <div className="glass rounded-2xl p-6 text-center relative overflow-hidden h-full">
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "radial-gradient(circle at center, rgba(255,215,0,0.04) 0%, transparent 70%)" }}
                />
                <div className="relative z-10">
                  <div className="flex justify-center mb-3">
                    <phase.Svg className="w-10 h-10 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <span className="text-[var(--gold)] text-xs font-bold tracking-widest uppercase">{phase.phase}</span>
                  <h3 className="font-display font-black text-xl mt-2 mb-3 text-white">{phase.title}</h3>
                  <p className="text-white/35 text-sm">{phase.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
