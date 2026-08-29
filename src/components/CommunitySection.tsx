"use client";
import { motion } from "framer-motion";
import { XIcon, TelegramIcon, TikTokIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";
export default function CommunitySection() {
  return (
    <section id="community" className="relative py-24 md:py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-0 w-full h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(255,215,0,0.3), transparent)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at center, rgba(255,215,0,0.08) 0%, transparent 60%)",
          }}
        />
      </div>
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
          className="text-white/50 text-xl md:text-2xl mb-12"
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
            className="group flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-lg glass hover:scale-105 active:scale-95 transition-all duration-300"
            style={{ borderColor: "rgba(38,165,228,0.3)" }}
          >
            <TelegramIcon className="w-6 h-6 text-[#26A5E4]" />
            <span className="text-white group-hover:text-[#26A5E4] transition-colors">TELEGRAM</span>
          </a>
          <a
            href={siteConfig.links.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-lg glass hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <TikTokIcon className="w-6 h-6 text-[#00f2ea]" />
            <span className="text-white group-hover:text-[#00f2ea] transition-colors">TIKTOK</span>
          </a>
          <a
            href={siteConfig.links.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-lg glass hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <XIcon className="w-6 h-6 text-white" />
            <span className="text-white group-hover:text-gray-300 transition-colors">X / TWITTER</span>
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 overflow-hidden"
        >
          <div className="flex animate-marquee whitespace-nowrap">
            {Array.from({ length: 20 }).map((_, i) => (
              <span
                key={i}
                className="font-display font-black text-6xl md:text-8xl mx-4 select-none"
                style={{ color: "rgba(255,215,0,0.04)" }}
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
