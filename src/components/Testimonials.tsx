"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Melissa made our event absolutely magical! The mini pancake cart was a huge hit!",
    author: "Happy Client",
  },
  {
    quote:
      "The candy bar setup was stunning. Everyone was impressed!",
    author: "Event Planner",
  },
  {
    quote:
      "Professional, elegant, and delicious. Highly recommend for any event!",
    author: "Corporate Client",
  },
];

function Stars() {
  return (
    <div className="flex gap-1 mb-4 justify-center">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className="w-5 h-5 text-gold"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-[var(--font-heading)] text-charcoal gold-underline">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-white rounded-2xl p-8 text-center shadow-sm border border-blush/20 relative"
            >
              {/* Decorative quote mark */}
              <div className="absolute top-4 left-6 font-[var(--font-heading)] text-6xl text-blush/40 leading-none">
                &ldquo;
              </div>

              <Stars />
              <p className="text-charcoal/80 leading-relaxed mb-6 relative z-10 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <p className="text-deep-rose font-medium text-sm">
                — <em>{t.author}</em>
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
