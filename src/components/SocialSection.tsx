"use client";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { XIcon, TelegramIcon, TikTokIcon, InstagramIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";
const socials = [
  {
    key: "tiktok" as const,
    Icon: TikTokIcon,
    color: "#00f2ea",
    gradient: "from-[#00f2ea] to-[#ff0050]",
  },
  {
    key: "telegram" as const,
    Icon: TelegramIcon,
    color: "#26A5E4",
    gradient: "from-[#26A5E4] to-[#0088cc]",
  },
  {
    key: "twitter" as const,
    Icon: XIcon,
    color: "#ffffff",
    gradient: "from-[#333333] to-[#1a1a1a]",
  },
  {
    key: "instagram" as const,
    Icon: InstagramIcon,
    color: "#E4405F",
    gradient: "from-[#f09433] via-[#e6683c] to-[#bc1888]",
  },
];
export default function SocialSection() {
  return (
    <section id="socials" className="relative py-24 md:py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,215,0,0.04) 0%, transparent 70%)" }}
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
            FIND <span className="gold-gradient">CHUPA</span> EVERYWHERE
          </h2>
          <p className="text-white/40 text-lg">Follow the chaos across all platforms</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {socials.map((social, i) => {
            const info = siteConfig.socials[social.key];
            const link = siteConfig.links[social.key];
            return (
              <motion.a
                key={social.key}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative glass rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-500 hover:border-white/10"
              >
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ boxShadow: `0 0 40px ${social.color}20, inset 0 0 40px ${social.color}08` }}
                />
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${social.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <social.Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display font-bold text-lg mb-1 text-white">{info.label}</h3>
                <p className="text-white/30 text-sm mb-4">{info.handle}</p>
                <span
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 group-hover:gap-2.5"
                  style={{ color: social.color, background: `${social.color}10` }}
                >
                  FOLLOW
                  <ExternalLink className="w-3.5 h-3.5" />
                </span>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
