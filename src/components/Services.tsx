"use client";

import { motion } from "framer-motion";

const services = [
  {
    icon: "🥞",
    title: "Mini Pancake Cart",
    description:
      "Freshly made mini pancakes with a variety of delicious toppings — a crowd favorite at any event!",
  },
  {
    icon: "🍬",
    title: "Candy & Sweets Bar",
    description:
      "A beautifully styled candy bar display with an assortment of treats to satisfy every sweet tooth.",
  },
  {
    icon: "🧀",
    title: "Charcuterie",
    description:
      "Elegant charcuterie boards and displays featuring premium meats, cheeses, fruits, and accompaniments.",
  },
  {
    icon: "🏢",
    title: "Corporate Events",
    description:
      "Elevate your corporate gatherings with our customizable food cart experience tailored to your brand.",
  },
];

export default function Services() {
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
            Our Services
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-blush/30"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="font-[var(--font-heading)] text-xl text-charcoal mb-3">
                {service.title}
              </h3>
              <p className="text-charcoal/70 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
