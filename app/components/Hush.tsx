"use client";

import { motion } from "framer-motion";

export default function Hush() {
  return (
    <section className="relative h-[70vh] w-full flex items-center justify-center text-center overflow-hidden bg-gradient-to-b from-[#d8a7a7] to-[#f5f5f5]">
      {/* Star field (small twinkling + drifting) */}
      <div className="absolute inset-0">
        {[...Array(40)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              x: [0, Math.random() * 40 - 20],
              y: [0, Math.random() * 40 - 20],
            }}
            transition={{
              duration: 4 + Math.random() * 6,
              repeat: Infinity,
              repeatType: "mirror",
              delay: Math.random() * 3,
            }}
          />
        ))}

        {/* Larger, slower stars for parallax depth */}
        {[...Array(3)].map((_, i) => (
          <motion.span
            key={`big-${i}`}
            className="absolute rounded-full bg-white/30 blur-2xl"
            style={{
              width: `${80 + Math.random() * 50}px`,
              height: `${80 + Math.random() * 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.6, 0.2],
              x: [0, Math.random() * 60 - 30],
              y: [0, Math.random() * 60 - 30],
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

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-serif font-bold text-white"
        >
          From Hush to Rhythm: The Soul of the Trilogy
        </motion.h2>
      </div>

      {/* Bottom gradient overlay for smooth transition */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#f5f5f5] via-[#eae0dc] to-transparent pointer-events-none" />
    </section>
  );
}
