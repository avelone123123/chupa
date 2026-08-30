"use client";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { XIcon, TelegramIcon, TikTokIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";
const footerLinks = [
  { label: "Telegram", href: siteConfig.links.telegram, Icon: TelegramIcon },
  { label: "TikTok", href: siteConfig.links.tiktok, Icon: TikTokIcon },
  { label: "X", href: siteConfig.links.twitter, Icon: XIcon },
  { label: "Contact", href: siteConfig.links.telegram, Icon: Mail },
];
export default function Footer() {
  return (
    <footer className="relative py-16 px-4">
      <div className="section-divider mb-16" />
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="font-display font-black text-3xl gold-gradient mb-2">{siteConfig.ticker}</h3>
            <p className="text-white/30 text-sm">Just a meme. Just a community. Just Chupa.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl glass flex items-center justify-center text-white/30 hover:text-[var(--gold)] card-hover-glow transition-all duration-300 hover:scale-110"
              >
                <link.Icon className="w-4 h-4" />
              </a>
            ))}
          </motion.div>
        </div>
        <div className="border-t border-white/[0.04] pt-8">
          <p className="text-white/15 text-xs text-center max-w-2xl mx-auto leading-relaxed">
            This website is for entertainment and community purposes. Nothing here is financial advice.
            Cryptocurrency involves significant risk. Do your own research before making any investment decisions.
            {siteConfig.ticker} is a meme token with no intrinsic value or expectation of financial return.
          </p>
        </div>
        <div className="mt-6 text-center">
          <p className="text-white/[0.08] text-xs">© 2025 {siteConfig.projectName}. All memes reserved.</p>
        </div>
      </div>
    </footer>
  );
}
