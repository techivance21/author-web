"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/books", label: "Books" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/80 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand */}
        <Link
          href="/"
          className="text-2xl font-serif tracking-wide text-gray-900 hover:text-[#b08968] transition-colors"
        >
          Amadu Massally
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative group text-gray-800 font-medium transition-colors hover:text-[#b08968]"
            >
              {link.label}
              {/* Sleek underline effect */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#b08968] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white/95 backdrop-blur-md shadow-md"
        >
          <div className="flex flex-col space-y-4 py-6 px-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative group text-gray-800 font-medium transition hover:text-[#b08968]"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
                {/* underline on mobile too */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#b08968] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
