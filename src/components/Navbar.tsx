"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/site";
const navItems = [
  { label: "About", href: "#about" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Memes", href: "#memes" },
  { label: "Community", href: "#community" },
];
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div className={`max-w-6xl mx-auto px-4 ${scrolled ? "glass rounded-2xl mx-4 px-6 py-2" : ""}`}>
          <div className="flex items-center justify-between">
            <a href="#hero" className="font-display font-black text-xl gold-gradient">
              {siteConfig.ticker}
            </a>
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-white/50 hover:text-[var(--gold)] transition-colors duration-300 text-sm font-semibold uppercase tracking-wide"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={siteConfig.links.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg font-bold text-black text-sm"
                style={{ background: "linear-gradient(135deg, #FFE55C, #FFD700)" }}
              >
                JOIN
              </a>
            </div>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden flex flex-col gap-1.5 p-2"
            >
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-[var(--gold)] block"
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-6 h-0.5 bg-[var(--gold)] block"
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-[var(--gold)] block"
              />
            </button>
          </div>
        </div>
      </motion.nav>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#0A0A0A]/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navItems.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setMobileOpen(false)}
                className="font-display font-black text-3xl text-white hover:text-[var(--gold)] transition-colors"
              >
                {item.label}
              </motion.a>
            ))}
            <motion.a
              href={siteConfig.links.telegram}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="px-8 py-3 rounded-xl font-bold text-black text-lg mt-4"
              style={{ background: "linear-gradient(135deg, #FFE55C, #FFD700)" }}
            >
              JOIN THE CULT
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
