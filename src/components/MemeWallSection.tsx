"use client";
import { motion } from "framer-motion";
import { CoinSvg, RocketSvg, FireSvg, StarSvg, DiamondSvg, CrownSvg } from "@/components/svgs";
import { siteConfig } from "@/config/site";
const memeIcons = [CoinSvg, RocketSvg, FireSvg, StarSvg, DiamondSvg, CrownSvg];
const bgPatterns = [
  "radial-gradient(circle at 30% 30%, rgba(255,215,0,0.04) 0%, transparent 50%)",
  "radial-gradient(circle at 70% 70%, rgba(255,215,0,0.03) 0%, transparent 50%)",
  "radial-gradient(circle at 50% 20%, rgba(255,215,0,0.04) 0%, transparent 50%)",
  "radial-gradient(circle at 20% 80%, rgba(255,215,0,0.03) 0%, transparent 50%)",
  "radial-gradient(circle at 80% 30%, rgba(255,215,0,0.04) 0%, transparent 50%)",
  "radial-gradient(circle at 40% 60%, rgba(255,215,0,0.03) 0%, transparent 50%)",
];
export default function MemeWallSection() {
  return (
    <section id="memes" className="relative py-24 md:py-32 px-4 overflow-hidden">
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
            THE <span className="gold-gradient gold-text-glow">CHUPA</span> ARCHIVES
          </h2>
          <p className="text-white/25 text-lg">The sacred collection of CHUPA memes</p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 mb-12">
          {siteConfig.memes.map((meme, i) => {
            const SvgIcon = memeIcons[i % memeIcons.length];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                whileHover={{ scale: 1.04, zIndex: 10 }}
                className="group glass rounded-2xl overflow-hidden relative aspect-square cursor-pointer card-hover-glow gradient-border"
              >
                <div className="absolute inset-0" style={{ background: bgPatterns[i % bgPatterns.length] }} />
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <div className="text-center">
                    <motion.div
                      className="flex justify-center mb-3"
                      animate={{ rotate: [0, 3, -3, 0] }}
                      transition={{ duration: 6, repeat: Infinity, delay: i * 0.3 }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 15 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <SvgIcon className="w-14 h-14 md:w-18 md:h-18 opacity-30 group-hover:opacity-60 transition-opacity duration-500" />
                      </motion.div>
                    </motion.div>
                    <span className="font-display font-black text-xs md:text-sm text-white/30 group-hover:text-[var(--gold)] transition-colors duration-300 tracking-wide">
                      {meme.caption}
                    </span>
                  </div>
                </div>
                <div className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
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
            className="inline-flex items-center gap-2 btn-gold px-8 py-4 rounded-xl text-lg"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" /></svg>
            SUBMIT YOUR CHUPA
          </a>
        </motion.div>
      </div>
    </section>
  );
}
