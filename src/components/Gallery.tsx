"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/context/LanguageContext";

function PancakeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none">
      <ellipse cx="40" cy="58" rx="26" ry="6" fill="#D4A76A" opacity="0.3" />
      <ellipse cx="40" cy="52" rx="22" ry="5" fill="#F4C6D0" />
      <ellipse cx="40" cy="46" rx="22" ry="5" fill="#E8B0BA" />
      <ellipse cx="40" cy="40" rx="22" ry="5" fill="#F4C6D0" />
      <ellipse cx="40" cy="34" rx="22" ry="5" fill="#E8B0BA" />
      <path d="M32 30C34 22 46 22 48 30" stroke="#D4A76A" strokeWidth="2" strokeLinecap="round" fill="none" />
      <circle cx="36" cy="26" r="2" fill="#C4707A" />
      <circle cx="44" cy="24" r="1.5" fill="#C4707A" />
      <circle cx="40" cy="28" r="1.5" fill="#722F37" />
    </svg>
  );
}

function CandyIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none">
      <ellipse cx="40" cy="60" rx="20" ry="4" fill="#D4A76A" opacity="0.2" />
      <rect x="38" y="38" width="4" height="22" rx="2" fill="#D4A76A" />
      <circle cx="40" cy="30" r="14" fill="#F4C6D0" />
      <path d="M30 24C34 18 46 18 50 24" stroke="#C4707A" strokeWidth="2" fill="none" />
      <path d="M28 30C28 30 32 34 40 34C48 34 52 30 52 30" stroke="#C4707A" strokeWidth="1.5" fill="none" />
      <circle cx="35" cy="28" r="2" fill="white" opacity="0.5" />
    </svg>
  );
}

function CharcuterieIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none">
      <ellipse cx="40" cy="48" rx="28" ry="12" fill="#F4C6D0" opacity="0.5" />
      <ellipse cx="40" cy="46" rx="28" ry="12" fill="#FFF8F3" stroke="#D4A76A" strokeWidth="1.5" />
      <circle cx="30" cy="42" r="5" fill="#C4707A" opacity="0.7" />
      <circle cx="42" cy="40" r="4" fill="#D4A76A" opacity="0.6" />
      <circle cx="52" cy="44" r="4.5" fill="#722F37" opacity="0.5" />
      <ellipse cx="36" cy="48" rx="3" ry="2" fill="#D4A76A" opacity="0.4" />
      <circle cx="48" cy="48" r="2.5" fill="#C4707A" opacity="0.4" />
      <path d="M20 36L22 32" stroke="#D4A76A" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M24 34L22 32L24 30" stroke="#D4A76A" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    </svg>
  );
}

function SetupIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none">
      <path d="M16 56L40 20L64 56" stroke="#D4A76A" strokeWidth="1.5" fill="#FFF8F3" opacity="0.5" />
      <path d="M16 56L40 20L64 56" stroke="#D4A76A" strokeWidth="1.5" fill="none" />
      <line x1="40" y1="20" x2="40" y2="14" stroke="#D4A76A" strokeWidth="1.5" />
      <path d="M37 14L40 10L43 14" stroke="#C4707A" strokeWidth="1.5" fill="#F4C6D0" />
      <line x1="16" y1="56" x2="64" y2="56" stroke="#D4A76A" strokeWidth="1.5" />
      <path d="M24 56V62" stroke="#D4A76A" strokeWidth="1.5" />
      <path d="M56 56V62" stroke="#D4A76A" strokeWidth="1.5" />
      <circle cx="34" cy="44" r="3" fill="#F4C6D0" />
      <circle cx="46" cy="44" r="3" fill="#F4C6D0" />
      <circle cx="40" cy="38" r="2.5" fill="#C4707A" opacity="0.5" />
    </svg>
  );
}

function CupcakeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none">
      <ellipse cx="40" cy="62" rx="14" ry="3" fill="#D4A76A" opacity="0.2" />
      <path d="M28 46L26 60C26 62 54 62 54 60L52 46" fill="#F4C6D0" stroke="#E8B0BA" strokeWidth="1" />
      <path d="M26 46C26 46 28 36 40 36C52 36 54 46 54 46" fill="#FFF8F3" stroke="#D4A76A" strokeWidth="1.5" />
      <path d="M28 44C32 40 36 44 40 40C44 44 48 40 52 44" stroke="#C4707A" strokeWidth="1.5" fill="none" />
      <circle cx="40" cy="32" r="4" fill="#C4707A" opacity="0.7" />
      <line x1="40" y1="28" x2="40" y2="22" stroke="#D4A76A" strokeWidth="1.5" />
      <circle cx="40" cy="20" r="2" fill="#D4A76A" />
    </svg>
  );
}

function CelebrationIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none">
      <path d="M30 60L38 24" stroke="#D4A76A" strokeWidth="2" strokeLinecap="round" />
      <path d="M38 24C38 24 56 30 52 48C48 56 36 58 30 60" fill="#F4C6D0" stroke="#C4707A" strokeWidth="1.5" />
      <circle cx="44" cy="36" r="2" fill="#D4A76A" />
      <circle cx="48" cy="44" r="1.5" fill="#722F37" opacity="0.5" />
      <circle cx="42" cy="48" r="2" fill="#D4A76A" opacity="0.6" />
      <path d="M20 18L22 24L26 20" stroke="#C4707A" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M56 14L54 20L58 18" stroke="#D4A76A" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <circle cx="24" cy="14" r="1.5" fill="#F4C6D0" />
      <circle cx="60" cy="22" r="1.5" fill="#F4C6D0" />
      <circle cx="50" cy="12" r="1" fill="#C4707A" />
    </svg>
  );
}

const galleryItems = [
  { icon: PancakeIcon, bg: "from-blush/40 to-cream" },
  { icon: CandyIcon, bg: "from-gold/20 to-cream" },
  { icon: CharcuterieIcon, bg: "from-deep-rose/20 to-cream" },
  { icon: SetupIcon, bg: "from-blush/30 to-gold/10" },
  { icon: CupcakeIcon, bg: "from-gold/30 to-blush/20" },
  { icon: CelebrationIcon, bg: "from-burgundy/10 to-blush/30" },
];

function SparkleIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="12"
      height="12"
      viewBox="0 0 16 16"
      fill="currentColor"
    >
      <path d="M8 0L9.5 5.5L16 8L9.5 10.5L8 16L6.5 10.5L0 8L6.5 5.5Z" />
    </svg>
  );
}

export default function Gallery() {
  const { t } = useTranslation();

  return (
    <section id="gallery" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-[var(--font-heading)] text-charcoal gold-underline">
            {t.gallery.heading}
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryItems.map((item, i) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br ${item.bg} border border-blush/30 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center gap-3 group cursor-pointer`}
              >
                <SparkleIcon className="absolute top-3 right-4 text-gold opacity-30 group-hover:opacity-70 transition-opacity" />
                <SparkleIcon className="absolute bottom-4 left-3 text-gold opacity-20 group-hover:opacity-60 transition-opacity" />

                <IconComponent className="w-20 h-20 sm:w-24 sm:h-24 group-hover:scale-110 transition-transform duration-300" />

                <span className="font-[var(--font-heading)] text-sm sm:text-base text-charcoal/80 text-center px-2">
                  {t.gallery.labels[i]}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Instagram link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="https://www.instagram.com/melangebymelissa/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-deep-rose hover:text-burgundy font-medium transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            {t.gallery.followInstagram}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
