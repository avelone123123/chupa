"use client";
import { motion } from "framer-motion";
import { CoinSvg, RocketSvg, FireSvg, StarSvg, DiamondSvg, CrownSvg } from "@/components/svgs";
import { siteConfig } from "@/config/site";
const memeIcons = [CoinSvg, RocketSvg, FireSvg, StarSvg, DiamondSvg, CrownSvg];
export default function MemeWallSection() {
  return (
    <section id="memes" className="relative py-24 md:py-32 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-black text-4xl md:text-6xl lg:text-7xl mb-4">
            THE <span className="gold-gradient gold-text-glow">CHUPA</span> ARCHIVES
          </h2>
          <p className="text-white/30 text-lg">The sacred collection of CHUPA memes</p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-12">
          {siteConfig.memes.map((meme, i) => {
            const SvgIcon = memeIcons[i % memeIcons.length];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                className="group glass rounded-2xl overflow-hidden relative aspect-square cursor-pointer"
              >
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <div className="text-center">
                    <motion.div
                      className="flex justify-center mb-3"
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 5, repeat: Infinity, delay: i * 0.3 }}
                    >
                      <SvgIcon className="w-16 h-16 md:w-20 md:h-20 opacity-40 group-hover:opacity-70 transition-opacity duration-500" />
                    </motion.div>
                    <span className="font-display font-black text-sm md:text-base text-white/40 group-hover:text-[var(--gold)] transition-colors duration-300">
                      {meme.caption}
                    </span>
                  </div>
                </div>
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "radial-gradient(circle at center, rgba(255,215,0,0.06) 0%, transparent 70%)" }}
                />
              </motion.div>
            );
          })}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <a
            href={siteConfig.submitMemeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-black text-lg hover:scale-105 active:scale-95 transition-transform duration-300"
            style={{ background: "linear-gradient(135deg, #FFE55C, #FFD700, #B8960F)" }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" /></svg>
            SUBMIT YOUR CHUPA
          </a>
        </motion.div>
      </div>
    </section>
  );
}
