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

const serviceIcons = [PancakeIcon, CandyIcon, CharcuterieIcon];

export default function Services() {
  const { t } = useTranslation();

  return (
    <section id="services" className="py-24 bg-blush/20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-[var(--font-heading)] text-charcoal gold-underline">
            {t.services.heading}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {t.services.items.map((service, i) => {
            const IconComponent = serviceIcons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-blush/30"
              >
                <div className="flex justify-center mb-4">
                  <IconComponent className="w-16 h-16" />
                </div>
                <h3 className="font-[var(--font-heading)] text-xl text-charcoal mb-3">
                  {service.title}
                </h3>
                <p className="text-charcoal/70 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
