"use client";

import { motion } from "framer-motion";

const tags = [
  "Birthdays",
  "Weddings",
  "Baby Showers",
  "Corporate Events",
  "Holiday Parties",
  "Bridal Showers",
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Decorative Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <div className="relative w-80 h-80 sm:w-96 sm:h-96">
              {/* Decorative background circles */}
              <div className="absolute inset-0 rounded-full bg-blush/30" />
              <div className="absolute inset-4 rounded-full bg-blush/20" />
              <div className="absolute inset-8 rounded-full bg-white/60 flex items-center justify-center">
                {/* Cart illustration */}
                <svg
                  viewBox="0 0 120 120"
                  className="w-48 h-48 text-burgundy/60"
                  fill="currentColor"
                >
                  {/* Cart body */}
                  <rect x="20" y="35" width="60" height="40" rx="4" opacity="0.8" />
                  {/* Cart roof */}
                  <path d="M15 35 L50 10 L85 35 Z" opacity="0.6" />
                  {/* Wheels */}
                  <circle cx="32" cy="82" r="7" opacity="0.8" />
                  <circle cx="68" cy="82" r="7" opacity="0.8" />
                  {/* Handle */}
                  <rect x="78" y="48" width="25" height="3" rx="1.5" opacity="0.6" />
                  {/* Window */}
                  <rect x="30" y="42" width="40" height="18" rx="2" fill="#FFF8F3" opacity="0.5" />
                  {/* Decorative bunting */}
                  <path d="M20 35 L30 42 L40 35 L50 42 L60 35 L70 42 L80 35" fill="none" stroke="#D4A76A" strokeWidth="1.5" opacity="0.7" />
                </svg>
              </div>
              {/* Floating sparkle accents */}
              <div className="absolute top-4 right-8 text-gold animate-float" style={{ animationDelay: "0s" }}>✨</div>
              <div className="absolute bottom-12 left-4 text-gold animate-float" style={{ animationDelay: "1s" }}>✨</div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl sm:text-4xl font-[var(--font-heading)] text-charcoal mb-6 gold-underline">
              The Mel&apos;angé Experience
            </h2>
            <p className="text-charcoal/80 leading-relaxed mb-8 mt-12">
              At Mel&apos;angé by Melissa, we bring a touch of elegance and
              sweetness to your special moments. Our beautifully styled mobile
              food cart rolls into your events — from birthdays and baby showers
              to corporate functions and holiday parties — offering a curated
              selection of treats that delight both the eyes and the taste buds.
              Based in Montreal, we believe every event deserves a little extra
              magic. ✨
            </p>

            <p className="font-[var(--font-heading)] text-lg text-charcoal mb-4">
              Perfect for:
            </p>
            <div className="flex flex-wrap gap-3">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-white border border-blush px-4 py-2 rounded-full text-sm text-charcoal/80 hover:bg-blush hover:text-charcoal transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
