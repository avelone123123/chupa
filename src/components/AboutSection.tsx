"use client";
import { motion } from "framer-motion";
import { CoinSvg, GlobeSvg, RocketSvg } from "@/components/svgs";
const cards = [
  {
    Svg: CoinSvg,
    title: "MEME",
    text: "Started as a meme.",
    delay: 0,
  },
  {
    Svg: GlobeSvg,
    title: "COMMUNITY",
    text: "Powered by people.",
    delay: 0.15,
  },
  {
    Svg: RocketSvg,
    title: "CHAOS",
    text: "Nobody knows what happens next.",
    delay: 0.3,
  },
];
export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 md:py-32 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <p className="text-white/40 text-lg md:text-xl leading-relaxed">
            No complicated promises.<br />
            No fake roadmap.<br />
            Just <span className="text-[var(--gold)] font-bold">CHUPA</span>.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: card.delay }}
              whileHover={{ y: -8 }}
              className="group glass rounded-2xl p-8 text-center relative overflow-hidden"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "radial-gradient(circle at center, rgba(255,215,0,0.04) 0%, transparent 70%)" }}
              />
              <div className="relative z-10">
                <div className="flex justify-center mb-5">
                  <card.Svg className="w-14 h-14 opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="font-display font-black text-2xl mb-3 gold-gradient">{card.title}</h3>
                <p className="text-white/40">{card.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
