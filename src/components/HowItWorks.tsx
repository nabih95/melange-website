"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "1",
    title: "Get in Touch",
    description: "Send us a message with your event details and date.",
  },
  {
    number: "2",
    title: "We Customize",
    description:
      "We'll work together to create the perfect setup for your event.",
  },
  {
    number: "3",
    title: "We Roll In ✨",
    description:
      "Our cart arrives beautifully set up, ready to wow your guests.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-[var(--font-heading)] text-charcoal gold-underline">
            How It Works
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4">
          {steps.map((step, i) => (
            <div key={step.number} className="flex flex-col md:flex-row items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="flex flex-col items-center text-center max-w-xs"
              >
                {/* Numbered circle */}
                <div className="w-20 h-20 rounded-full border-2 border-gold flex items-center justify-center mb-6 bg-cream">
                  <span className="font-[var(--font-heading)] text-2xl text-burgundy font-bold">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-[var(--font-heading)] text-xl text-charcoal mb-2">
                  {step.title}
                </h3>
                <p className="text-charcoal/70 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>

              {/* Connecting dotted line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block w-20 lg:w-32 border-t-2 border-dashed border-gold/40 mx-4 mt-[-40px]" />
              )}
              {i < steps.length - 1 && (
                <div className="md:hidden h-8 border-l-2 border-dashed border-gold/40" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
