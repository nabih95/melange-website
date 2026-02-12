"use client";

import { motion } from "framer-motion";
import Image from "next/image";

/* Replace these Unsplash stock photos with actual event photos */
const photos = [
  {
    src: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&h=600&fit=crop",
    alt: "Mini pancakes with toppings",
    label: "Mini Pancakes",
  },
  {
    src: "https://images.unsplash.com/photo-1499195333224-3ce974eecb47?w=600&h=600&fit=crop",
    alt: "Colorful candy display",
    label: "Candy Bar",
  },
  {
    src: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=600&h=600&fit=crop",
    alt: "Charcuterie board with meats and cheeses",
    label: "Charcuterie",
  },
  {
    src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&h=600&fit=crop",
    alt: "Elegant party celebration setup",
    label: "Event Setup",
  },
  {
    src: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&h=600&fit=crop",
    alt: "Assorted sweet treats and donuts",
    label: "Sweet Treats",
  },
  {
    src: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&h=600&fit=crop",
    alt: "Beautifully decorated event table",
    label: "Celebrations",
  },
];

export default function Gallery() {
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
            Sweet Moments
          </h2>
        </motion.div>

        {/* Replace stock photos with actual event photos */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-lg transition-shadow"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Hover overlay with label */}
              <div className="absolute inset-0 bg-burgundy/0 group-hover:bg-burgundy/40 transition-colors duration-300 flex items-end justify-center">
                <span className="text-white font-medium text-sm pb-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  {item.label}
                </span>
              </div>
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
            Follow us on Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
}
