"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "@/context/LanguageContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t, language, setLanguage } = useTranslation();

  const navLinks = [
    { name: t.nav.home, href: "#home" },
    { name: t.nav.services, href: "#services" },
    { name: t.nav.about, href: "#about" },
    { name: t.nav.gallery, href: "#gallery" },
    { name: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileOpen]);

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "fr" : "en");
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center">
          <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-white shadow-md bg-[#D4899B]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/melange-website/logo.png"
              alt="Mel'angé by Melissa"
              className="w-full h-full object-cover scale-125"
            />
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-charcoal hover:text-deep-rose transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={toggleLanguage}
            className="bg-cream text-charcoal border border-blush px-3 py-1 rounded-full text-sm font-medium cursor-pointer hover:bg-blush transition-colors"
          >
            {language === "en" ? "FR" : "EN"}
          </button>
          <a
            href="#contact"
            className="bg-blush text-charcoal px-5 py-2.5 rounded-full text-sm font-medium hover:bg-deep-rose hover:text-white transition-all"
          >
            {t.nav.bookEvent}
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-charcoal transition-all ${
              mobileOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-charcoal transition-all ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-charcoal transition-all ${
              mobileOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 top-0 bg-white z-40 flex flex-col items-center justify-center gap-8 md:hidden"
          >
            <button
              className="absolute top-6 right-6 p-2"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3D2B2B" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-xl font-[var(--font-heading)] text-charcoal hover:text-deep-rose transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => {
                toggleLanguage();
                setMobileOpen(false);
              }}
              className="bg-cream text-charcoal border border-blush px-5 py-2 rounded-full text-lg font-medium cursor-pointer hover:bg-blush transition-colors"
            >
              {language === "en" ? "FR" : "EN"}
            </button>
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="bg-blush text-charcoal px-8 py-3 rounded-full text-lg font-medium hover:bg-deep-rose hover:text-white transition-all"
            >
              {t.nav.bookEvent}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
