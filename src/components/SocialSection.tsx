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
    bg: "rgba(0,242,234,0.06)",
    borderHover: "rgba(0,242,234,0.25)",
    desc: "Watch the chaos unfold",
  },
  {
    key: "telegram" as const,
    Icon: TelegramIcon,
    color: "#26A5E4",
    bg: "rgba(38,165,228,0.06)",
    borderHover: "rgba(38,165,228,0.25)",
    desc: "Join the CHUPA army",
  },
  {
    key: "twitter" as const,
    Icon: XIcon,
    color: "#ffffff",
    bg: "rgba(255,255,255,0.04)",
    borderHover: "rgba(255,255,255,0.2)",
    desc: "Stay in the loop",
  },
  {
    key: "instagram" as const,
    Icon: InstagramIcon,
    color: "#E4405F",
    bg: "rgba(228,64,95,0.06)",
    borderHover: "rgba(228,64,95,0.25)",
    desc: "Behind the memes",
  },
];
export default function SocialSection() {
  return (
    <section id="socials" className="relative py-24 md:py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,215,0,0.03) 0%, transparent 70%)" }}
        />
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
            FIND <span className="gold-gradient">CHUPA</span> EVERYWHERE
          </h2>
          <p className="text-white/30 text-lg">Follow the chaos across all platforms</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative glass rounded-2xl p-6 flex flex-col items-center text-center card-hover-glow"
                style={{ "--hover-border": social.borderHover } as React.CSSProperties}
              >
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ boxShadow: `0 0 40px ${social.color}15, inset 0 0 40px ${social.color}05` }}
                />
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: social.bg }}
                >
                  <social.Icon className="w-7 h-7" style={{ color: social.color }} />
                </div>
                <h3 className="font-display font-bold text-lg mb-0.5 text-white">{info.label}</h3>
                <p className="text-white/20 text-xs mb-1">{info.handle}</p>
                <p className="text-white/30 text-xs mb-4">{social.desc}</p>
                <span
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-300 group-hover:gap-2.5"
                  style={{ color: social.color, background: `${social.color}0A` }}
                >
                  FOLLOW
                  <ExternalLink className="w-3 h-3" />
                </span>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
