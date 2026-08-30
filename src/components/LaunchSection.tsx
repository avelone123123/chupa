"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CoinSvg, RocketSvg } from "@/components/svgs";
import { siteConfig } from "@/config/site";
function getTimeLeft(targetDate: string | null) {
  if (!targetDate) return null;
  const diff = new Date(targetDate).getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}
function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="glass rounded-2xl w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex items-center justify-center animate-pulse-gold gradient-border">
        <span className="font-display font-black text-3xl sm:text-4xl md:text-5xl gold-gradient">
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="text-white/25 text-xs sm:text-sm font-semibold mt-2 uppercase tracking-widest">
        {label}
      </span>
    </div>
  );
}
export default function LaunchSection() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(siteConfig.launchDate));
  useEffect(() => {
    if (!siteConfig.launchDate) return;
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(siteConfig.launchDate));
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <section id="launch" className="relative py-24 md:py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="section-divider absolute top-0" />
        <div className="section-divider absolute bottom-0" />
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at center, rgba(255,215,0,0.03) 0%, transparent 50%)" }}
        />
        <motion.div
          className="absolute top-16 left-[10%] opacity-8"
          animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          <CoinSvg className="w-16" />
        </motion.div>
        <motion.div
          className="absolute bottom-16 right-[10%] opacity-8"
          animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity, delay: 1 }}
        >
          <RocketSvg className="w-14" />
        </motion.div>
      </div>
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display font-black text-4xl md:text-6xl lg:text-7xl mb-12">
            WHEN <span className="gold-gradient gold-text-glow">CHUPA</span>?
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {timeLeft ? (
            <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-6 mb-12">
              <TimeUnit value={timeLeft.days} label="Days" />
              <span className="font-display font-black text-2xl md:text-4xl text-[var(--gold)] mt-[-24px]">:</span>
              <TimeUnit value={timeLeft.hours} label="Hours" />
              <span className="font-display font-black text-2xl md:text-4xl text-[var(--gold)] mt-[-24px]">:</span>
              <TimeUnit value={timeLeft.minutes} label="Minutes" />
              <span className="font-display font-black text-2xl md:text-4xl text-[var(--gold)] mt-[-24px]">:</span>
              <TimeUnit value={timeLeft.seconds} label="Seconds" />
            </div>
          ) : (
            <div className="mb-12">
              <motion.div
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="inline-block glass-strong rounded-3xl px-12 py-10 gradient-border"
              >
                <p className="font-display font-black text-xl md:text-3xl text-white/30 mb-2 tracking-wide">LAUNCH DATE</p>
                <p className="font-display font-black text-5xl md:text-7xl gold-gradient gold-text-glow">SOON™</p>
              </motion.div>
            </div>
          )}
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white/30 text-lg md:text-xl mb-8"
        >
          THE CHUPA COIN LAUNCH IS APPROACHING.
        </motion.p>
        <motion.a
          href={siteConfig.links.telegram}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="inline-flex items-center gap-2 btn-gold px-8 py-4 rounded-xl text-lg"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
          NOTIFY ME
        </motion.a>
      </div>
    </section>
  );
}
