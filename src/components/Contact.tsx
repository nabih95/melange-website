"use client";

import { motion } from "framer-motion";

const eventTypes = [
  "Birthday",
  "Wedding",
  "Baby Shower",
  "Corporate",
  "Holiday Party",
  "Bridal Shower",
  "Other",
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-[var(--font-heading)] text-charcoal gold-underline">
            Let&apos;s Make Your Event Special
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <form
              action="mailto:melangebymelissa@gmail.com"
              method="POST"
              encType="text/plain"
              className="space-y-5"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-1.5">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-blush/50 bg-cream/50 text-charcoal focus:outline-none focus:border-deep-rose focus:ring-1 focus:ring-deep-rose/30 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-blush/50 bg-cream/50 text-charcoal focus:outline-none focus:border-deep-rose focus:ring-1 focus:ring-deep-rose/30 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-1.5">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 rounded-xl border border-blush/50 bg-cream/50 text-charcoal focus:outline-none focus:border-deep-rose focus:ring-1 focus:ring-deep-rose/30 transition-colors"
                    placeholder="(514) 555-0000"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="eventType" className="block text-sm font-medium text-charcoal mb-1.5">
                    Event Type
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    className="w-full px-4 py-3 rounded-xl border border-blush/50 bg-cream/50 text-charcoal focus:outline-none focus:border-deep-rose focus:ring-1 focus:ring-deep-rose/30 transition-colors"
                  >
                    <option value="">Select event type</option>
                    {eventTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="eventDate" className="block text-sm font-medium text-charcoal mb-1.5">
                    Event Date
                  </label>
                  <input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    className="w-full px-4 py-3 rounded-xl border border-blush/50 bg-cream/50 text-charcoal focus:outline-none focus:border-deep-rose focus:ring-1 focus:ring-deep-rose/30 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-blush/50 bg-cream/50 text-charcoal focus:outline-none focus:border-deep-rose focus:ring-1 focus:ring-deep-rose/30 transition-colors resize-none"
                  placeholder="Tell us about your event..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blush text-charcoal px-8 py-3.5 rounded-full font-medium text-lg hover:bg-gold hover:text-white transition-all shadow-sm hover:shadow-md"
              >
                Send Inquiry ✨
              </button>
            </form>
          </motion.div>

          {/* Right Side Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-center items-center lg:items-start gap-8"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📍</span>
                <span className="text-lg text-charcoal">Montreal &amp; area</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">📩</span>
                <span className="text-lg text-charcoal">Message us to book</span>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/melangebymelissa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-deep-rose hover:text-burgundy transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                  <span className="text-lg font-medium">@melangebymelissa</span>
                </a>
              </div>
            </div>

            {/* Decorative sparkle graphic */}
            <div className="relative w-56 h-56 mt-4 hidden lg:block">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blush/30 to-gold/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  viewBox="0 0 100 100"
                  className="w-32 h-32 text-burgundy/40"
                  fill="currentColor"
                >
                  <rect x="15" y="35" width="50" height="35" rx="3" />
                  <path d="M10 35 L40 12 L70 35 Z" opacity="0.7" />
                  <circle cx="25" cy="77" r="6" />
                  <circle cx="55" cy="77" r="6" />
                  <rect x="63" y="48" width="22" height="3" rx="1.5" />
                </svg>
              </div>
              <div className="absolute top-2 right-4 text-gold animate-sparkle">✨</div>
              <div className="absolute bottom-8 left-2 text-gold animate-sparkle" style={{ animationDelay: "1.5s" }}>✨</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
