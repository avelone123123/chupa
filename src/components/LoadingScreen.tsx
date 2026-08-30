"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CoinSvg } from "@/components/svgs";
export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += Math.random() * 12 + 4;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setTimeout(() => setLoading(false), 400);
      }
      setProgress(current);
    }, 80);
    return () => clearInterval(interval);
  }, []);
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ background: "radial-gradient(ellipse at center, #0C0C0C 0%, #050505 100%)" }}
        >
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: 300 + i * 100,
                  height: 300 + i * 100,
                  left: "50%",
                  top: "50%",
                  x: "-50%",
                  y: "-50%",
                  border: "1px solid rgba(255,215,0,0.04)",
                }}
                animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.1, 0.3] }}
                transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.5, ease: "easeInOut" }}
              />
            ))}
          </div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="relative mb-8"
          >
            <CoinSvg className="w-20 h-20 drop-shadow-[0_0_30px_rgba(255,215,0,0.4)]" />
          </motion.div>
          <motion.h1
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="font-display text-4xl md:text-6xl font-black gold-gradient mb-6"
          >
            CHUPA
          </motion.h1>
          <div className="w-52 h-[3px] bg-white/5 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{
                background: "linear-gradient(90deg, var(--gold-dark), var(--gold), var(--gold-light))",
                width: `${Math.min(progress, 100)}%`,
              }}
              transition={{ duration: 0.1 }}
            />
          </div>
          <motion.p
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            className="text-white/20 text-xs mt-4 font-medium tracking-[0.3em] uppercase"
          >
            loading the chaos
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
