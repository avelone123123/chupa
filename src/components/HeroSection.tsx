"use client";
import { useEffect, useRef } from "react";
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
  const gradientRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      if (gradientRef.current) {
        gradientRef.current.style.background = `radial-gradient(circle at ${50 + x * 10}% ${50 + y * 10}%, rgba(255,215,0,0.1) 0%, transparent 50%)`;
      }
      if (imageRef.current) {
        imageRef.current.style.transform = `translate3d(${x * -8}px, ${y * -8}px, 0)`;
      }
    };
    window.addEventListener("mousemove", handleMouse, { passive: true });
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
        <div ref={gradientRef} className="absolute inset-0 opacity-40" />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] rounded-full opacity-[0.03]"
          style={{ background: "radial-gradient(circle, #FFD700 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-full h-[1px]"
          style={{ background: "linear-gradient(90deg, transparent, rgba(255,215,0,0.15), transparent)" }}
        />
        {floatingItems.map((item, i) => (
          <motion.div
            key={i}
            className="particle opacity-15"
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
                color: "rgba(255,215,0,0.04)",
              }}
              animate={{ opacity: [0.02, 0.06, 0.02] }}
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
            className="text-lg md:text-xl text-white/40 max-w-lg mx-auto lg:mx-0 mb-10"
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
              className="group relative btn-gold px-7 py-3.5 rounded-xl"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Flame className="w-5 h-5" />
                JOIN THE CULT
              </span>
            </a>
            <a
              href={siteConfig.links.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold glass text-white hover:border-[var(--gold)] transition-all duration-300 hover:scale-105 card-hover-glow"
            >
              <TelegramIcon className="w-5 h-5 text-[var(--gold)]" />
              TELEGRAM
            </a>
            <a
              href={siteConfig.links.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold glass text-white hover:border-[var(--gold)] transition-all duration-300 hover:scale-105 card-hover-glow"
            >
              <TikTokIcon className="w-5 h-5 text-[var(--gold)]" />
              TIKTOK
            </a>
            <a
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold glass text-white hover:border-[var(--gold)] transition-all duration-300 hover:scale-105 card-hover-glow"
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
            <motion.div
              className="absolute -inset-16 rounded-full"
              animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              style={{ background: "radial-gradient(circle, rgba(255,215,0,0.1) 0%, transparent 70%)" }}
            />
            <div ref={imageRef} style={{ willChange: "transform" }}>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                <div
                  className="relative rounded-2xl overflow-hidden"
                  style={{ boxShadow: "0 0 80px rgba(255,215,0,0.15), 0 25px 50px rgba(0,0,0,0.5)" }}
                >
                  <Image
                    src="/chupa-hero.jpg"
                    alt="CHUPA"
                    width={520}
                    height={520}
                    priority
                    className="w-[280px] sm:w-[380px] lg:w-[480px] h-auto"
                  />
                  <div className="absolute inset-0 rounded-2xl" style={{ boxShadow: "inset 0 0 60px rgba(0,0,0,0.3)" }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </motion.div>
            </div>
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
              <StarSvg className="w-8 h-8 drop-shadow-lg opacity-50" />
            </motion.div>
          </div>
        </motion.div>
      </div>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/15 flex justify-center pt-2">
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
