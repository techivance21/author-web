"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative h-[90vh] w-full flex items-center justify-center text-center bg-cover bg-center"
      style={{ backgroundImage: "url('/bg1.png')" }}
    >
      {/* Lighter overlay for softer feel */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-serif font-bold text-[#b08968] mb-6"
        >
          Amadu Massally
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="text-lg md:text-xl text-black/90 mb-4 font-sans"
        >
          Welcome to the official website of{" "}
          <span className="font-semibold text-black">Amadu Massally</span>, a
          writer whose words inspire reflection, dialogue, and change.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
          className="text-md md:text-lg text-black/80 font-sans mb-8"
        >
          Explore his five published works, download free PDFs, and discover the
          ideas that have shaped his journey as a modern author and thinker.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          {/* Send us a message (solid → glass on hover) */}
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-3 rounded-2xl bg-[#d8a7a7] text-white font-medium shadow-md transition-all duration-300 hover:bg-white/30 hover:backdrop-blur-md hover:border hover:border-white/50 hover:text-[#6b6054]"
            >
              Send us a message
            </motion.button>
          </Link>

          {/* Call us (glass → solid on hover) */}
          <a href="tel:+1234567890">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-3 rounded-2xl backdrop-blur-md bg-white/30 border border-white/50 text-[#6b6054] font-medium shadow-md transition-all duration-300 hover:bg-[#6b6054] hover:text-white hover:border-transparent"
            >
              Call us
            </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
