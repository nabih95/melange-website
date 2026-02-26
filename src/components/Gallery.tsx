"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/context/LanguageContext";

const galleryItems = [
  { emoji: "🥞", bg: "from-blush/50 to-cream", accent: "text-deep-rose" },
  { emoji: "🍬", bg: "from-gold/30 to-cream", accent: "text-gold" },
  { emoji: "🧀", bg: "from-deep-rose/30 to-cream", accent: "text-burgundy" },
  { emoji: "🎪", bg: "from-blush/40 to-gold/20", accent: "text-deep-rose" },
  { emoji: "🍩", bg: "from-gold/40 to-blush/30", accent: "text-gold" },
  { emoji: "🎉", bg: "from-burgundy/20 to-blush/40", accent: "text-burgundy" },
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
          {galleryItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br ${item.bg} border border-blush/30 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center gap-3 group cursor-pointer`}
            >
              {/* Decorative sparkles */}
              <SparkleIcon
                className={`absolute top-3 right-4 ${item.accent} opacity-40 group-hover:opacity-80 transition-opacity`}
              />
              <SparkleIcon
                className={`absolute bottom-4 left-3 ${item.accent} opacity-30 group-hover:opacity-70 transition-opacity`}
              />

              {/* Main emoji */}
              <span className="text-5xl sm:text-6xl group-hover:scale-110 transition-transform duration-300">
                {item.emoji}
              </span>

              {/* Label */}
              <span className="font-[var(--font-heading)] text-sm sm:text-base text-charcoal/80 text-center px-2">
                {t.gallery.labels[i]}
              </span>
            </motion.div>
          ))}
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
