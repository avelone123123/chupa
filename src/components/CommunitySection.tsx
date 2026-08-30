"use client";
import { motion } from "framer-motion";
import { XIcon, TelegramIcon, TikTokIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";
export default function CommunitySection() {
  return (
    <section id="community" className="relative py-24 md:py-40 px-4 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="section-divider absolute top-0" />
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at center, rgba(255,215,0,0.06) 0%, transparent 50%)" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full"
          style={{ border: "1px solid rgba(255,215,0,0.03)" }}
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full"
          style={{ border: "1px solid rgba(255,215,0,0.02)" }}
          animate={{ scale: [1.1, 1, 1.1], rotate: [360, 180, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </div>
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display font-black text-4xl md:text-6xl lg:text-8xl mb-4">
            ARE YOU{" "}
            <span className="gold-gradient gold-text-glow">CHUPAKOY</span>?
          </h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white/40 text-xl md:text-2xl mb-12"
        >
          JOIN THE CHAOS
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a
            href={siteConfig.links.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-lg glass card-hover-glow transition-all duration-300"
          >
            <TelegramIcon className="w-6 h-6 text-[#26A5E4]" />
            <span className="text-white group-hover:text-[#26A5E4] transition-colors">TELEGRAM</span>
          </a>
          <a
            href={siteConfig.links.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-lg glass card-hover-glow transition-all duration-300"
          >
            <TikTokIcon className="w-6 h-6 text-[#00f2ea]" />
            <span className="text-white group-hover:text-[#00f2ea] transition-colors">TIKTOK</span>
          </a>
          <a
            href={siteConfig.links.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-lg glass card-hover-glow transition-all duration-300"
          >
            <XIcon className="w-6 h-6 text-white" />
            <span className="text-white group-hover:text-white/60 transition-colors">X / TWITTER</span>
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 overflow-hidden relative"
        >
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[var(--bg-dark)] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[var(--bg-dark)] to-transparent z-10 pointer-events-none" />
          <div className="flex animate-marquee whitespace-nowrap">
            {Array.from({ length: 20 }).map((_, i) => (
              <span
                key={i}
                className="font-display font-black text-6xl md:text-8xl mx-4 select-none"
                style={{ color: "rgba(255,215,0,0.03)" }}
              >
                CHUPA
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
