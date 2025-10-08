"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Amadu Massally" },
  { href: "/books", label: "Books" },
  { href: "/blogs", label: "Blogs" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Optional: a touch of elevation once user scrolls (still transparent)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45 }}
      className={`fixed top-0 left-0 w-full z-50 ${
        scrolled ? "backdrop-blur-md" : "backdrop-blur-sm"
      }`}
      aria-label="Primary"
    >
      {/* Desktop / Tablet */}
      <div className="hidden md:block">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className="
              flex items-center justify-center gap-6 lg:gap-10
              py-4 md:py-5 text-sm md:text-base font-medium
              uppercase tracking-wider text-white/90
            "
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="
                  relative transition-colors duration-200 hover:text-white
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 rounded
                  after:content-[''] after:absolute after:left-0 after:-bottom-1
                  after:h-[2px] after:w-0 after:bg-[#0A1A4F]
                  after:transition-all after:duration-300 hover:after:w-full
                "
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile top bar */}
      <div className="md:hidden px-4 sm:px-6 py-3 flex items-center justify-between">
        {/* Keep it minimal per your “just links” ask; no logo text to avoid redundancy with Hero */}
        <span className="sr-only">Navigation</span>
        <button
          onClick={() => setOpen(true)}
          className="ml-auto inline-flex items-center justify-center rounded-lg px-3 py-2 text-white/90 ring-1 ring-white/10 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          aria-label="Open menu"
          aria-controls="mobile-menu"
          aria-expanded={open}
        >
          {/* Hamburger */}
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            {/* Panel */}
            <motion.div
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              className="fixed inset-0 z-[60] flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
            >
              <div className="relative mx-4 w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-6 text-center shadow-xl">
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="absolute right-3 top-3 rounded-lg p-2 text-white/80 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </button>

                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="
                          relative inline-block px-2 py-1 text-base sm:text-lg font-medium 
                          uppercase tracking-wide text-white/95 transition-colors hover:text-white
                          focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 rounded
                          after:content-[''] after:absolute after:left-0 after:-bottom-1 
                          after:h-[2px] after:w-0 after:bg-[#0A1A4F] 
                          after:transition-all after:duration-300 hover:after:w-full
                        "
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
