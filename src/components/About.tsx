"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/context/LanguageContext";

export default function About() {
  const { t } = useTranslation();

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
              <div className="absolute inset-8 rounded-full bg-white/60 flex items-center justify-center overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logo.png"
                  alt="Mel'angé by Melissa"
                  className="w-full h-full object-cover scale-125"
                />
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
              {t.about.heading}
            </h2>
            <p className="text-charcoal/80 leading-relaxed mb-8 mt-12">
              {t.about.paragraph}
            </p>

            <p className="font-[var(--font-heading)] text-lg text-charcoal mb-4">
              {t.about.perfectFor}
            </p>
            <div className="flex flex-wrap gap-3">
              {t.about.tags.map((tag) => (
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
