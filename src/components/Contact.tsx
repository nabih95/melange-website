"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "@/context/LanguageContext";

export default function Contact() {
  const { t } = useTranslation();
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "958e8043-dcc1-4f66-9550-7f095cc53730");
    formData.append("subject", "New inquiry from Mel'angé website");
    formData.append("from_name", "Mel'angé Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

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
            {t.contact.heading}
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
            {status === "success" ? (
              <div className="flex items-center justify-center min-h-[300px]">
                <div className="text-center space-y-4">
                  <span className="text-5xl">✨</span>
                  <p className="text-lg text-charcoal font-medium">
                    {t.contact.successMessage}
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="text-deep-rose hover:text-burgundy underline transition-colors"
                  >
                    {t.contact.submitButton}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Honeypot for spam protection */}
                <input type="checkbox" name="botcheck" className="hidden" />

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-1.5">
                    {t.contact.nameLabel}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-blush/50 bg-cream/50 text-charcoal focus:outline-none focus:border-deep-rose focus:ring-1 focus:ring-deep-rose/30 transition-colors"
                    placeholder={t.contact.namePlaceholder}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-1.5">
                      {t.contact.emailLabel}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-blush/50 bg-cream/50 text-charcoal focus:outline-none focus:border-deep-rose focus:ring-1 focus:ring-deep-rose/30 transition-colors"
                      placeholder={t.contact.emailPlaceholder}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-1.5">
                      {t.contact.phoneLabel}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 rounded-xl border border-blush/50 bg-cream/50 text-charcoal focus:outline-none focus:border-deep-rose focus:ring-1 focus:ring-deep-rose/30 transition-colors"
                      placeholder={t.contact.phonePlaceholder}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="eventType" className="block text-sm font-medium text-charcoal mb-1.5">
                      {t.contact.eventTypeLabel}
                    </label>
                    <select
                      id="eventType"
                      name="eventType"
                      className="w-full px-4 py-3 rounded-xl border border-blush/50 bg-cream/50 text-charcoal focus:outline-none focus:border-deep-rose focus:ring-1 focus:ring-deep-rose/30 transition-colors"
                    >
                      <option value="">{t.contact.eventTypePlaceholder}</option>
                      {t.contact.eventTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="eventDate" className="block text-sm font-medium text-charcoal mb-1.5">
                      {t.contact.eventDateLabel}
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
                    {t.contact.messageLabel}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-blush/50 bg-cream/50 text-charcoal focus:outline-none focus:border-deep-rose focus:ring-1 focus:ring-deep-rose/30 transition-colors resize-none"
                    placeholder={t.contact.messagePlaceholder}
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-600 text-sm">{t.contact.errorMessage}</p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-blush text-charcoal px-8 py-3.5 rounded-full font-medium text-lg hover:bg-gold hover:text-white transition-all shadow-sm hover:shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? t.contact.sendingButton : t.contact.submitButton}
                </button>
              </form>
            )}
          </motion.div>

          {/* Right Side - Decorative */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="hidden lg:flex flex-col justify-center items-center"
          >
            <div className="relative w-64 h-64">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blush/30 to-gold/10" />
              <div className="absolute inset-4 rounded-full bg-[#D4899B] overflow-hidden flex items-center justify-center ring-4 ring-white shadow-xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logo.png"
                  alt="Mel'angé by Melissa"
                  className="w-full h-full object-cover scale-125"
                />
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
