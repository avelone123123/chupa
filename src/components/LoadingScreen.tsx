"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 300);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0A0A0A]"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-20 h-20 rounded-full border-4 border-transparent mb-8"
            style={{
              borderTopColor: "#FFD700",
              borderRightColor: "rgba(255,215,0,0.3)",
            }}
          />
          <motion.h1
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="font-display text-4xl md:text-6xl font-black gold-gradient mb-4"
          >
            CHUPA...
          </motion.h1>
          <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{
                background: "linear-gradient(90deg, #FFD700, #FFE55C)",
                width: `${Math.min(progress, 100)}%`,
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
