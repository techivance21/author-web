"use client";

import { motion } from "framer-motion";

export default function Subscribe() {
  return (
    <section className="relative h-[70vh] w-full flex items-center justify-center text-center overflow-hidden bg-gradient-to-b from-[#0a1a4f] to-[#ffffff]">
      {/* Animated star-like particles */}
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

        {/* Larger floating glows for depth */}
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
          className="text-3xl md:text-4xl font-serif font-bold text-white"
        >
          Keep the hush alive. Walk the rhythm forward.
        </motion.h2>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="w-72 px-4 py-3 rounded-full bg-white/20 text-white placeholder-white/70
                       border-2 border-[#0a1a4f] outline-none focus:ring-0"
          />
          <button
            type="submit"
            className="px-8 py-3 rounded-full bg-[#0a1a4f] text-white font-semibold
                       hover:bg-[#061033] transition-colors duration-300"
          >
            Subscribe
          </button>
        </motion.form>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}
