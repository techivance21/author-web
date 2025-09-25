"use client";

import { motion } from "framer-motion";

export default function Cultural() {
  return (
    <section className="relative h-[70vh] w-full flex items-center justify-center text-center overflow-hidden bg-gradient-to-b from-[#d6d3c2] to-[#e8e8e8]">
      {/* Animated stars (subtle for a premium look) */}
      <div className="absolute inset-0">
        {[...Array(40)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white/70"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              x: [0, Math.random() * 30 - 15],
              y: [0, Math.random() * 30 - 15],
            }}
            transition={{
              duration: 4 + Math.random() * 6,
              repeat: Infinity,
              repeatType: "mirror",
              delay: Math.random() * 3,
            }}
          />
        ))}

        {/* Larger blurred lights for depth */}
        {[...Array(3)].map((_, i) => (
          <motion.span
            key={`big-${i}`}
            className="absolute rounded-full bg-white/20 blur-2xl"
            style={{
              width: `${80 + Math.random() * 50}px`,
              height: `${80 + Math.random() * 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.5, 0.2],
              x: [0, Math.random() * 50 - 25],
              y: [0, Math.random() * 50 - 25],
            }}
            transition={{
              duration: 10 + Math.random() * 8,
              repeat: Infinity,
              repeatType: "mirror",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-4xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-serif font-bold text-[#3a3a3a]"
        >
          Cultural Offerings Unveiled
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-6 text-lg md:text-xl text-[#4a4a4a] leading-relaxed"
        >
          Discover a rich tapestry of services designed to empower through
          cultural education, fostering deeper understanding, and reinforcing
          community ties. Explore offerings that bridge past, present, and
          future with authenticity.
        </motion.p>
      </div>

      {/* Subtle bottom gradient for smooth section transition */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#e8e8e8] via-[#f2f2f2] to-transparent pointer-events-none" />
    </section>
  );
}
