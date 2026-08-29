"use client";
import { motion } from "framer-motion";
import { CoinSvg, StarSvg } from "@/components/svgs";
export default function MarqueeSection() {
  const textItems = ["$CHUPA", "ЧУПААА", "TO THE MOON", "CHUPA ARMY", "КОГДА ЧУПА?", "JUST CHUPA"];
  return (
    <div className="py-5 overflow-hidden border-y border-white/5">
      <div className="flex animate-marquee whitespace-nowrap items-center">
        {[...textItems, ...textItems, ...textItems, ...textItems].map((item, i) => (
          <span key={i} className="flex items-center gap-4 mx-6">
            <span className="font-display font-black text-xl md:text-2xl select-none text-white/8">
              {item}
            </span>
            {i % 2 === 0 ? (
              <CoinSvg className="w-5 h-5 opacity-15" />
            ) : (
              <StarSvg className="w-5 h-5 opacity-15" />
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
