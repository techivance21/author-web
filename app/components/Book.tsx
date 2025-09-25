"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useMemo } from "react";

export default function Book() {
  // floating dots (only created once on client)
  const dots = useMemo(
    () =>
      Array.from({ length: 40 }, () => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
      })),
    []
  );

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#e6dfd6] via-[#f7f4f0] to-[#e0d6d1]">
      {/* ✦ animated background dots */}
      <div className="absolute inset-0 pointer-events-none">
        {dots.map((dot, i) => (
          <motion.span
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white/50"
            style={dot}
            animate={{
              opacity: [0.2, 0.7, 0.2],
              x: [0, Math.random() * 40 - 20],
              y: [0, Math.random() * 40 - 20],
            }}
            transition={{
              duration: 6 + Math.random() * 6,
              repeat: Infinity,
              repeatType: "mirror",
              delay: Math.random() * 4,
            }}
          />
        ))}

        {/* soft blurred orbs for extra depth */}
        {[...Array(3)].map((_, i) => (
          <motion.span
            key={`orb-${i}`}
            className="absolute rounded-full bg-[#d9b99b]/30 blur-3xl"
            style={{
              width: `${90 + Math.random() * 60}px`,
              height: `${90 + Math.random() * 60}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.5, 0.2],
              x: [0, Math.random() * 50 - 25],
              y: [0, Math.random() * 50 - 25],
            }}
            transition={{
              duration: 12 + Math.random() * 6,
              repeat: Infinity,
              repeatType: "mirror",
              delay: Math.random() * 6,
            }}
          />
        ))}
      </div>

      {/* ✦ content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-24 grid md:grid-cols-2 gap-12 items-center">
        {/* left image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full h-full"
        >
          <Image
            src="/book-image.png" // replace with your actual image path
            alt="Gullah Geechee Saga Book"
            width={600}
            height={800}
            className="w-full h-auto object-cover shadow-xl" // sharp corners
            priority
          />
        </motion.div>

        {/* right text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-gray-900 space-y-6"
        >
          {/* ✦ heading in beige */}
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#d9b99b]">
            More Than a Book. This Is a Return
          </h2>

          <p className="text-lg md:text-xl leading-relaxed text-gray-800">
            The Gullah Geechee Saga is not just a reading experience — it is a
            cultural reckoning, a call to remembrance, and a journey of
            reconnection. Across the Atlantic and back again, we are reuniting
            broken lineages, reclaiming sacred names, and restoring ancestral
            ties.
          </p>

          <p className="text-lg md:text-xl leading-relaxed text-gray-800">
            If this story moved you, let it also move through you. There are
            many ways to get involved. Begin where your spirit leads.
          </p>

          {/* ✦ Transparent beige bordered button */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block mt-4 rounded-full border-2 border-[#d9b99b] text-[#d9b99b] px-8 py-3 font-semibold shadow-md
                       transition-colors duration-300 hover:bg-[#d9b99b] hover:text-white"
          >
            Get Involved
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
