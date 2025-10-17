"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Amadu Massally" },
  { href: "/books", label: "Books" },
  { href: "/blogs", label: "Blogs" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
  { href: "/echoes", label: "Echoes" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [elevated, setElevated] = useState(false);
  const btnRef = useRef<HTMLButtonElement | null>(null);

  // scroll shadow
  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ESC close
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        btnRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // prevent body scroll when open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      {/* Frosted glass background */}
      <div
        className={[
          "w-full backdrop-blur-md bg-white/60 dark:bg-neutral-900/60 transition-shadow",
          elevated ? "shadow-sm" : "shadow-none",
        ].join(" ")}
      >
        <nav
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
          aria-label="Main"
        >
          {/* Desktop Centered Nav */}
          <div className="hidden md:flex justify-center h-16 items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Mobile Navbar (Hamburger on Right) */}
          <div className="flex md:hidden h-16 items-center justify-between">
            {/* Placeholder for left side (if you want logo later) */}
            <div className="w-9" />
            <div />
            {/* Hamburger button on right */}
            <button
              ref={btnRef}
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200/70 dark:border-neutral-700/60 bg-white/60 dark:bg-neutral-900/60 backdrop-blur transition active:scale-95"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 text-neutral-900 dark:text-neutral-100"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden fixed inset-0 z-40 ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Overlay */}
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity ${
            open ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden="true"
        />

        {/* Drawer */}
        <div
          className={`absolute left-0 right-0 top-0 rounded-b-2xl bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl border-b border-neutral-200/70 dark:border-neutral-800/60 px-4 pb-4 pt-20 shadow-lg transition-transform duration-200 ease-out ${
            open ? "translate-y-0" : "-translate-y-full"
          }`}
          role="dialog"
          aria-modal="true"
        >
          {/* Close icon inside drawer (top-right) */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 h-9 w-9 flex items-center justify-center rounded-lg border border-neutral-200/70 dark:border-neutral-700/60 bg-white/70 dark:bg-neutral-800/70 backdrop-blur"
            aria-label="Close menu"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 text-neutral-900 dark:text-neutral-100"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Menu Links */}
          <ul className="space-y-2 mt-2">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 text-base font-medium text-neutral-800 hover:bg-neutral-100/70 dark:text-neutral-100 dark:hover:bg-neutral-800/60 transition"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
