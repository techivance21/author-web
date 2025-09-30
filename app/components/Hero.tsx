"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image */}
      <Image
        src="/hero.png"
        alt="Hero background"
        fill
        priority
        className="object-cover"
      />

      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* === Top Center Brand + Divider === */}
      <div className="absolute top-6 w-full flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white text-2xl md:text-3xl font-bold tracking-wide"
        >
          Amadu Massally
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-2 h-px w-40 bg-white/80 origin-center"
        />
      </div>

      {/* === Centered Hero Text + Buttons === */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-white text-3xl md:text-5xl font-semibold leading-tight"
        >
          From Hush to Rhythm
          <br />
          <span className="font-light">The Gullah Geechee Trilogy</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-4 text-white/90 text-lg md:text-xl"
        >
          Three books. One covenant of memory
        </motion.p>

        {/* --- CTA Buttons --- */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="mt-8 flex flex-wrap gap-4"
        >
          <button className="px-6 py-3 rounded-md bg-[#0a1a4f] text-white font-medium hover:bg-[#092040] transition-colors">
            Explore the Trilogy
          </button>
          <button className="px-6 py-3 rounded-md bg-[#0a1a4f] text-white font-medium hover:bg-[#092040] transition-colors">
            Buy Now
          </button>
          <button className="px-6 py-3 rounded-md bg-[#0a1a4f] text-white font-medium hover:bg-[#092040] transition-colors">
            Subscribe
          </button>
        </motion.div>
      </div>
    </section>
  );
}
