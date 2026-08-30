"use client";
import { motion } from "framer-motion";
import { CoinSvg, GlobeSvg, RocketSvg } from "@/components/svgs";
const cards = [
  {
    Svg: CoinSvg,
    title: "MEME",
    text: "Started as a meme. Became a movement.",
    accent: "rgba(255,215,0,0.08)",
    delay: 0,
  },
  {
    Svg: GlobeSvg,
    title: "COMMUNITY",
    text: "Powered by the people. Owned by nobody.",
    accent: "rgba(255,215,0,0.06)",
    delay: 0.12,
  },
  {
    Svg: RocketSvg,
    title: "CHAOS",
    text: "Nobody knows what happens next. That's the point.",
    accent: "rgba(255,215,0,0.04)",
    delay: 0.24,
  },
];
export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 md:py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="section-divider absolute top-0" />
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6"
        >
          <h2 className="font-display font-black text-4xl md:text-6xl lg:text-7xl">
            WHAT THE <span className="gold-gradient gold-text-glow">CHUPA</span> IS THIS?
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <p className="text-white/35 text-lg md:text-xl leading-relaxed">
            No complicated promises.<br />
            No fake roadmap.<br />
            Just <span className="text-[var(--gold)] font-bold">CHUPA</span>.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: card.delay }}
              whileHover={{ y: -8 }}
              className="group glass rounded-2xl p-8 text-center relative overflow-hidden card-hover-glow gradient-border"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle at center, ${card.accent} 0%, transparent 70%)` }}
              />
              <div className="relative z-10">
                <div className="flex justify-center mb-5">
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    <card.Svg className="w-14 h-14 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                </div>
                <h3 className="font-display font-black text-2xl mb-3 gold-gradient">{card.title}</h3>
                <p className="text-white/35 leading-relaxed">{card.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
