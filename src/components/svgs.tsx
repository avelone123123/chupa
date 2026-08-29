export function CoinSvg({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" fill="none" className={className}>
      <circle cx="40" cy="40" r="38" fill="url(#coinGrad)" stroke="#B8960F" strokeWidth="3" />
      <circle cx="40" cy="40" r="30" fill="none" stroke="#B8960F" strokeWidth="1.5" strokeDasharray="4 4" />
      <text x="40" y="35" textAnchor="middle" fill="#0A0A0A" fontWeight="900" fontSize="14" fontFamily="sans-serif">CHUPA</text>
      <text x="40" y="52" textAnchor="middle" fill="#0A0A0A" fontWeight="700" fontSize="10" fontFamily="sans-serif">COIN</text>
      <defs>
        <linearGradient id="coinGrad" x1="0" y1="0" x2="80" y2="80">
          <stop offset="0%" stopColor="#FFE55C" />
          <stop offset="50%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#B8960F" />
        </linearGradient>
      </defs>
    </svg>
  );
}
export function RocketSvg({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className}>
      <path d="M32 4C32 4 16 20 16 40c0 6 4 12 8 16h16c4-4 8-10 8-16C48 20 32 4 32 4z" fill="url(#rocketBody)" />
      <ellipse cx="32" cy="28" rx="6" ry="6" fill="#0A0A0A" />
      <ellipse cx="32" cy="28" rx="3.5" ry="3.5" fill="#FFD700" />
      <path d="M16 40c-6 2-10 8-10 8l10-2z" fill="#FFD700" />
      <path d="M48 40c6 2 10 8 10 8l-10-2z" fill="#FFD700" />
      <path d="M24 56c0 0 2 8 8 8s8-8 8-8" fill="url(#flameGrad)" />
      <defs>
        <linearGradient id="rocketBody" x1="32" y1="4" x2="32" y2="56">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#E0E0E0" />
        </linearGradient>
        <linearGradient id="flameGrad" x1="32" y1="56" x2="32" y2="64">
          <stop offset="0%" stopColor="#FF6B35" />
          <stop offset="50%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#FF4444" />
        </linearGradient>
      </defs>
    </svg>
  );
}
export function FireSvg({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <path d="M24 4c0 0-16 12-16 28 0 8 7.2 14 16 14s16-6 16-14C40 16 24 4 24 4z" fill="url(#fireOuter)" />
      <path d="M24 18c0 0-8 8-8 18 0 5 3.6 8 8 8s8-3 8-8C32 26 24 18 24 18z" fill="url(#fireInner)" />
      <defs>
        <linearGradient id="fireOuter" x1="24" y1="4" x2="24" y2="46">
          <stop offset="0%" stopColor="#FF6B35" />
          <stop offset="100%" stopColor="#FFD700" />
        </linearGradient>
        <linearGradient id="fireInner" x1="24" y1="18" x2="24" y2="44">
          <stop offset="0%" stopColor="#FFE55C" />
          <stop offset="100%" stopColor="#FFFFFF" />
        </linearGradient>
      </defs>
    </svg>
  );
}
export function LightningSvg({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 64" fill="none" className={className}>
      <path d="M24 0L0 36h16L8 64 40 24H22L24 0z" fill="url(#lightGrad)" />
      <defs>
        <linearGradient id="lightGrad" x1="20" y1="0" x2="20" y2="64">
          <stop offset="0%" stopColor="#FFE55C" />
          <stop offset="100%" stopColor="#FFD700" />
        </linearGradient>
      </defs>
    </svg>
  );
}
export function StarSvg({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <path d="M24 2l6.5 13.2L44 17.4l-9.8 9.5L36.3 41 24 34.6 11.7 41l2.1-14.1L4 17.4l13.5-2.2z" fill="url(#starGrad)" />
      <defs>
        <linearGradient id="starGrad" x1="24" y1="2" x2="24" y2="41">
          <stop offset="0%" stopColor="#FFE55C" />
          <stop offset="100%" stopColor="#FFD700" />
        </linearGradient>
      </defs>
    </svg>
  );
}
export function DiamondSvg({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <path d="M24 4L4 20l20 24 20-24z" fill="url(#diamGrad)" />
      <path d="M4 20h40L24 4z" fill="url(#diamTop)" opacity="0.6" />
      <path d="M14 20L24 4l10 16z" fill="url(#diamMid)" opacity="0.3" />
      <defs>
        <linearGradient id="diamGrad" x1="24" y1="4" x2="24" y2="44">
          <stop offset="0%" stopColor="#FFE55C" />
          <stop offset="100%" stopColor="#B8960F" />
        </linearGradient>
        <linearGradient id="diamTop" x1="24" y1="4" x2="24" y2="20">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#FFD700" />
        </linearGradient>
        <linearGradient id="diamMid" x1="24" y1="4" x2="24" y2="20">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
      </defs>
    </svg>
  );
}
export function ChartSvg({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 48" fill="none" className={className}>
      <path d="M4 44L16 32 28 36 40 16 56 8" stroke="url(#chartLine)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 44L16 32 28 36 40 16 56 8V48H4z" fill="url(#chartFill)" opacity="0.2" />
      <circle cx="56" cy="8" r="4" fill="#FFD700" />
      <defs>
        <linearGradient id="chartLine" x1="4" y1="44" x2="56" y2="8">
          <stop offset="0%" stopColor="#B8960F" />
          <stop offset="100%" stopColor="#FFE55C" />
        </linearGradient>
        <linearGradient id="chartFill" x1="30" y1="8" x2="30" y2="48">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
      </defs>
    </svg>
  );
}
export function GlobeSvg({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <circle cx="24" cy="24" r="20" stroke="#FFD700" strokeWidth="2" />
      <ellipse cx="24" cy="24" rx="10" ry="20" stroke="#FFD700" strokeWidth="1.5" />
      <line x1="4" y1="24" x2="44" y2="24" stroke="#FFD700" strokeWidth="1.5" />
      <line x1="8" y1="14" x2="40" y2="14" stroke="#FFD700" strokeWidth="1" opacity="0.5" />
      <line x1="8" y1="34" x2="40" y2="34" stroke="#FFD700" strokeWidth="1" opacity="0.5" />
    </svg>
  );
}
export function CrownSvg({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 48" fill="none" className={className}>
      <path d="M4 40L12 12 24 28 32 4 40 28 52 12 60 40z" fill="url(#crownGrad)" />
      <rect x="4" y="38" width="56" height="8" rx="2" fill="url(#crownBase)" />
      <circle cx="16" cy="42" r="2" fill="#0A0A0A" opacity="0.3" />
      <circle cx="32" cy="42" r="2" fill="#0A0A0A" opacity="0.3" />
      <circle cx="48" cy="42" r="2" fill="#0A0A0A" opacity="0.3" />
      <defs>
        <linearGradient id="crownGrad" x1="32" y1="4" x2="32" y2="40">
          <stop offset="0%" stopColor="#FFE55C" />
          <stop offset="100%" stopColor="#FFD700" />
        </linearGradient>
        <linearGradient id="crownBase" x1="4" y1="38" x2="60" y2="46">
          <stop offset="0%" stopColor="#B8960F" />
          <stop offset="100%" stopColor="#FFD700" />
        </linearGradient>
      </defs>
    </svg>
  );
}
