"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Flame } from "lucide-react";
import { XIcon, TelegramIcon, TikTokIcon } from "@/components/icons";
import { CoinSvg, RocketSvg, FireSvg, LightningSvg, StarSvg } from "@/components/svgs";
import { siteConfig } from "@/config/site";
import Image from "next/image";
const floatingItems = [
  { Svg: CoinSvg, size: "w-10", x: "8%", y: "18%", delay: 0 },
  { Svg: RocketSvg, size: "w-9", x: "88%", y: "12%", delay: 0.5 },
  { Svg: CoinSvg, size: "w-7", x: "78%", y: "68%", delay: 1 },
  { Svg: FireSvg, size: "w-8", x: "4%", y: "72%", delay: 1.5 },
  { Svg: CoinSvg, size: "w-12", x: "92%", y: "48%", delay: 0.3 },
  { Svg: RocketSvg, size: "w-7", x: "18%", y: "82%", delay: 0.8 },
  { Svg: StarSvg, size: "w-8", x: "62%", y: "8%", delay: 1.2 },
  { Svg: LightningSvg, size: "w-6", x: "42%", y: "78%", delay: 0.6 },
];
export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);
  return (
    <motion.section
      ref={containerRef}
      id="hero"
      style={{ y: heroY, opacity: heroOpacity }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4"
    >
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background: `radial-gradient(circle at ${50 + mousePos.x * 10}% ${50 + mousePos.y * 10}%, rgba(255,215,0,0.12) 0%, transparent 50%)`,
          }}
        />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] rounded-full opacity-[0.03]"
          style={{ background: "radial-gradient(circle, #FFD700 0%, transparent 70%)" }}
        />
        {floatingItems.map((item, i) => (
          <motion.div
            key={i}
            className="particle opacity-20"
            style={{ left: item.x, top: item.y }}
            animate={{
              y: [0, -25, 0, 25, 0],
              x: [0, 12, 0, -12, 0],
              rotate: [0, 8, 0, -8, 0],
            }}
            transition={{
              duration: 8 + i * 0.5,
              repeat: Infinity,
              delay: item.delay,
              ease: "easeInOut",
            }}
          >
            <item.Svg className={item.size} />
          </motion.div>
        ))}
        {["ЧУПААА", "CHUPA", "ЧУПААА", "CHUPA"].map((text, i) => {
          const positions = [
            { x: "12%", y: "32%", r: -15 },
            { x: "82%", y: "28%", r: 12 },
            { x: "72%", y: "72%", r: -8 },
            { x: "22%", y: "62%", r: 20 },
          ];
          return (
            <motion.span
              key={`t-${i}`}
              className="particle font-display font-black text-xl md:text-2xl select-none"
              style={{
                left: positions[i].x,
                top: positions[i].y,
                rotate: positions[i].r,
                color: "rgba(255,215,0,0.06)",
              }}
              animate={{ opacity: [0.03, 0.08, 0.03] }}
              transition={{ duration: 5, repeat: Infinity, delay: i * 0.4 }}
            >
              {text}
            </motion.span>
          );
        })}
      </div>
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-8 lg:gap-16 pt-20 lg:pt-0">
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 glass text-[var(--gold)]">
              <FireSvg className="w-4 h-4" />
              {siteConfig.ticker} IS HERE
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.9] mb-6"
          >
            <span className="gold-gradient gold-text-glow">CHUPA</span>
            <br />
            <span className="text-white">IS COMING.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-white/50 max-w-lg mx-auto lg:mx-0 mb-10"
          >
            {siteConfig.tagline}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-3 justify-center lg:justify-start"
          >
            <a
              href={siteConfig.links.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-7 py-3.5 rounded-xl font-bold text-black transition-all duration-300 hover:scale-105 active:scale-95"
              style={{ background: "linear-gradient(135deg, #FFE55C, #FFD700, #B8960F)" }}
            >
              <span className="flex items-center gap-2">
                <Flame className="w-5 h-5" />
                JOIN THE CULT
              </span>
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ boxShadow: "0 0 30px rgba(255,215,0,0.5)" }} />
            </a>
            <a
              href={siteConfig.links.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold glass text-white hover:border-[var(--gold)] transition-all duration-300 hover:scale-105"
            >
              <TelegramIcon className="w-5 h-5 text-[var(--gold)]" />
              TELEGRAM
            </a>
            <a
              href={siteConfig.links.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold glass text-white hover:border-[var(--gold)] transition-all duration-300 hover:scale-105"
            >
              <TikTokIcon className="w-5 h-5 text-[var(--gold)]" />
              TIKTOK
            </a>
            <a
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold glass text-white hover:border-[var(--gold)] transition-all duration-300 hover:scale-105"
            >
              <XIcon className="w-5 h-5 text-[var(--gold)]" />
              X / TWITTER
            </a>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex-1 flex justify-center relative"
        >
          <div className="relative">
            <div
              className="absolute -inset-8 rounded-3xl opacity-60"
              style={{
                background: "radial-gradient(circle, rgba(255,215,0,0.15) 0%, transparent 70%)",
              }}
            />
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
              style={{
                transform: `translate(${mousePos.x * -8}px, ${mousePos.y * -8}px)`,
              }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ boxShadow: "0 0 80px rgba(255,215,0,0.2), 0 25px 50px rgba(0,0,0,0.5)" }}>
                <Image
                  src="/chupa-hero.jpg"
                  alt="CHUPA"
                  width={520}
                  height={520}
                  priority
                  className="w-[300px] sm:w-[400px] lg:w-[520px] h-auto"
                />
                <div className="absolute inset-0 rounded-2xl" style={{ boxShadow: "inset 0 0 60px rgba(0,0,0,0.3)" }} />
              </div>
            </motion.div>
            <motion.div
              className="absolute -top-6 -right-6"
              animate={{ rotate: [0, 10, -10, 0], y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <RocketSvg className="w-12 h-12 drop-shadow-lg" />
            </motion.div>
            <motion.div
              className="absolute -bottom-4 -left-8"
              animate={{ rotate: [0, -5, 5, 0], y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
            >
              <CoinSvg className="w-14 h-14 drop-shadow-lg" />
            </motion.div>
            <motion.div
              className="absolute top-1/2 -right-10"
              animate={{ scale: [1, 1.2, 1], rotate: [0, 15, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            >
              <StarSvg className="w-8 h-8 drop-shadow-lg opacity-60" />
            </motion.div>
          </div>
        </motion.div>
      </div>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-[var(--gold)]"
          />
        </div>
      </motion.div>
    </motion.section>
  );
}
