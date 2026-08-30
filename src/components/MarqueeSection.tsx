"use client";
import { CoinSvg, StarSvg, FireSvg } from "@/components/svgs";
export default function MarqueeSection() {
  const textItems = ["$CHUPA", "ЧУПААА", "TO THE MOON", "CHUPA ARMY", "КОГДА ЧУПА?", "JUST CHUPA", "100X", "NO TEAM", "JUST VIBES"];
  const row = [...textItems, ...textItems];
  return (
    <div className="py-4 overflow-hidden border-y border-white/[0.03] relative">
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg-dark)] via-transparent to-[var(--bg-dark)] z-10 pointer-events-none" />
      <div className="flex animate-marquee whitespace-nowrap items-center" style={{ width: "max-content" }}>
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-4 mx-5">
            <span className="font-display font-black text-lg md:text-xl select-none text-white/[0.06] hover:text-white/[0.12] transition-colors">
              {item}
            </span>
            {i % 3 === 0 ? (
              <CoinSvg className="w-4 h-4 opacity-10" />
            ) : i % 3 === 1 ? (
              <StarSvg className="w-4 h-4 opacity-10" />
            ) : (
              <FireSvg className="w-4 h-4 opacity-10" />
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
