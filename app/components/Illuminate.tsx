"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

export default function Illuminate() {
  // ✅ Generate stars once (SSR-safe)
  const stars = useMemo(
    () =>
      [...Array(40)].map(() => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        dx: Math.random() * 40 - 20,
        dy: Math.random() * 40 - 20,
        delay: Math.random() * 3,
        duration: 4 + Math.random() * 6,
      })),
    []
  );

  const glows = useMemo(
    () =>
      [...Array(3)].map(() => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: 80 + Math.random() * 50,
        dx: Math.random() * 60 - 30,
        dy: Math.random() * 60 - 30,
        delay: Math.random() * 5,
        duration: 10 + Math.random() * 8,
      })),
    []
  );

  return (
    <section className="relative min-h-[70vh] w-full flex items-center justify-center text-center overflow-hidden bg-gradient-to-b from-[#b89a65] to-white">
      {/* Overlay gradient for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

      {/* Star field */}
      <div className="absolute inset-0">
        {stars.map((s, i) => (
          <motion.span
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white"
            style={{ top: s.top, left: s.left }}
            animate={{ opacity: [0, 1, 0], x: [0, s.dx], y: [0, s.dy] }}
            transition={{
              duration: s.duration,
              repeat: Infinity,
              repeatType: "mirror",
              delay: s.delay,
            }}
          />
        ))}

        {glows.map((g, i) => (
          <motion.span
            key={`g-${i}`}
            className="absolute rounded-full bg-white/30 blur-2xl"
            style={{
              width: g.size,
              height: g.size,
              top: g.top,
              left: g.left,
            }}
            animate={{ opacity: [0.2, 0.6, 0.2], x: [0, g.dx], y: [0, g.dy] }}
            transition={{
              duration: g.duration,
              repeat: Infinity,
              repeatType: "mirror",
              delay: g.delay,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-serif font-bold text-white drop-shadow-lg"
        >
          Reader Invitation
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-6 text-lg md:text-xl text-white/90 leading-relaxed drop-shadow-md"
        >
          “This Saga is not just a book. It is a summons. Read it as testimony,
          as inheritance, as covenant.”
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-10 space-y-6"
        >
          {/* First row */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <CTAButton text="Subscribe for Bonus Features" />
            <CTAButton text="Download Sample Chapter" />
          </div>

          {/* Second row */}
          <div>
            <CTAButton text="Buy Now" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CTAButton({ text }: { text: string }) {
  return (
    <button
      className="px-6 py-3 border-2 rounded-full font-medium text-white border-[#C9A74C] transition relative overflow-hidden group"
    >
      <span className="relative z-10">{text}</span>
      <span className="absolute inset-0 bg-[#C9A74C]/20 opacity-0 group-hover:opacity-100 transition-opacity" />
      <span className="absolute inset-0 rounded-full shadow-[0_0_20px_#C9A74C] opacity-0 group-hover:opacity-60 transition-opacity" />
    </button>
  );
}
