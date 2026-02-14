"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/context/LanguageContext";

function SparkleIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg
      className={className}
      style={style}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="currentColor"
    >
      <path d="M8 0L9.5 5.5L16 8L9.5 10.5L8 16L6.5 10.5L0 8L6.5 5.5Z" />
    </svg>
  );
}

const sparkles = [
  { top: "10%", left: "15%", delay: 0, size: 12 },
  { top: "20%", right: "20%", delay: 1.5, size: 8 },
  { top: "60%", left: "10%", delay: 0.8, size: 10 },
  { top: "70%", right: "15%", delay: 2, size: 14 },
  { top: "40%", right: "8%", delay: 0.5, size: 6 },
  { top: "85%", left: "25%", delay: 1.2, size: 8 },
  { top: "30%", left: "5%", delay: 2.5, size: 10 },
  { top: "50%", right: "25%", delay: 1.8, size: 12 },
];

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blush/30 via-cream to-white" />

      {/* Sparkles */}
      {sparkles.map((s, i) => (
        <div
          key={i}
          className="absolute text-gold animate-sparkle"
          style={{
            top: s.top,
            left: s.left,
            right: s.right,
            animationDelay: `${s.delay}s`,
          }}
        >
          <SparkleIcon style={{ width: s.size, height: s.size }} />
        </div>
      ))}

      {/* Decorative cart silhouette */}
      <div className="absolute bottom-10 right-10 opacity-5">
        <svg width="200" height="200" viewBox="0 0 100 100" fill="#3D2B2B">
          <rect x="15" y="30" width="50" height="35" rx="3" />
          <rect x="20" y="20" width="40" height="12" rx="2" />
          <circle cx="25" cy="72" r="6" />
          <circle cx="55" cy="72" r="6" />
          <rect x="60" y="40" width="20" height="3" rx="1" />
        </svg>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <div className="relative mb-8">
            <div className="absolute inset-[-20px] rounded-full bg-white/40 blur-3xl" />
            <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden ring-4 ring-white shadow-2xl bg-[#D4899B]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo.png"
                alt="Mel'angé by Melissa logo"
                className="w-full h-full object-cover scale-125"
              />
            </div>
          </div>
          <h1 className="font-[var(--font-script)] text-5xl sm:text-7xl md:text-8xl text-burgundy mb-4">
            Mel&apos;angé Mtl
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-[var(--font-heading)] text-lg sm:text-xl md:text-2xl text-charcoal/80 mb-3 max-w-2xl mx-auto"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-deep-rose font-medium text-base sm:text-lg mb-10"
        >
          {t.hero.servingArea}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#services"
            className="bg-white text-charcoal border-2 border-blush px-8 py-3.5 rounded-full font-medium hover:bg-blush hover:border-blush transition-all"
          >
            {t.hero.exploreServices}
          </a>
          <a
            href="#contact"
            className="bg-blush text-charcoal px-8 py-3.5 rounded-full font-medium hover:bg-deep-rose hover:text-white transition-all"
          >
            {t.hero.bookNow}
          </a>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cream to-transparent" />
    </section>
  );
}
