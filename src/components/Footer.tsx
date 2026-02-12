export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream/90 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-11 h-11 rounded-full overflow-hidden ring-2 ring-white/30 shadow-md bg-[#D4899B]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/logo.png`}
                  alt="Mel'angé by Melissa"
                  className="w-full h-full object-cover scale-125"
                />
              </div>
              <div>
                <span className="font-[var(--font-script)] text-3xl text-blush">
                  Mel&apos;angé
                </span>
                <span className="font-[var(--font-heading)] text-sm text-cream/70 ml-2">
                  by Melissa
                </span>
              </div>
            </div>
            <p className="mt-3 text-cream/60 text-sm leading-relaxed">
              Premium mobile food cart service for your events in Montreal.
              Making every event a little sweeter. ✨
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-[var(--font-heading)] text-lg text-blush mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["Services", "About", "Gallery", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-cream/60 hover:text-blush transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-[var(--font-heading)] text-lg text-blush mb-4">
              Follow Us
            </h4>
            <a
              href="https://www.instagram.com/melangebymelissa/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-cream/60 hover:text-blush transition-colors text-sm"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              @melangebymelissa
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 pt-8 border-t border-cream/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-cream/40 text-xs">
              &copy; 2025 Mel&apos;angé by Melissa. All rights reserved.
            </p>
            {/* Small gold decorative line */}
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
          </div>
        </div>
      </div>
    </footer>
  );
}
