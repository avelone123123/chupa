"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from "framer-motion";
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
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });
  const closeMobile = useCallback(() => setMobileOpen(false), []);
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = ""; };
    }
  }, [mobileOpen]);
  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "py-2" : "py-4"
        }`}
      >
        <div className={`max-w-6xl mx-auto transition-all duration-500 ${scrolled ? "glass-strong rounded-2xl mx-4 px-6 py-2.5" : "px-6"}`}>
          <div className="flex items-center justify-between">
            <a href="#hero" className="font-display font-black text-xl gold-gradient hover:opacity-80 transition-opacity">
              {siteConfig.ticker}
            </a>
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-white/40 hover:text-[var(--gold)] transition-colors duration-300 text-sm font-semibold uppercase tracking-wide px-4 py-2 rounded-lg hover:bg-white/[0.03]"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={siteConfig.links.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold px-5 py-2 rounded-xl text-sm ml-3"
              >
                JOIN
              </a>
            </div>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden flex flex-col gap-1.5 p-2 relative z-50"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-[var(--gold)] block origin-center"
                transition={{ duration: 0.3 }}
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                className="w-6 h-0.5 bg-[var(--gold)] block"
                transition={{ duration: 0.2 }}
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-[var(--gold)] block origin-center"
                transition={{ duration: 0.3 }}
              />
            </button>
          </div>
        </div>
      </motion.nav>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
            style={{ background: "radial-gradient(ellipse at top, rgba(255,215,0,0.03) 0%, rgba(5,5,5,0.98) 50%)" }}
          >
            <div className="flex flex-col items-center justify-center h-full gap-6">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  onClick={closeMobile}
                  className="font-display font-black text-3xl text-white/80 hover:text-[var(--gold)] transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                href={siteConfig.links.telegram}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.4 }}
                className="btn-gold px-8 py-3 rounded-xl text-lg mt-4"
              >
                JOIN THE CULT
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
