"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Pre() {
  return (
    <section
      className="relative w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/bg2.png')" }}
    >
      {/* Dark-blue overlay with lighter transparency */}
      <div className="absolute inset-0 bg-[#0a1a4f]/40" />

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6 py-20">
        {/* ==== LEFT : Book Cover with 15% OFF badge ==== */}
        <div className="relative w-full md:w-1/2 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <Image
              src="/book3.png"
              alt="Diaspora Scavenger book cover"
              width={350}
              height={500}
              className="rounded-lg shadow-xl transition-transform duration-500 group-hover:scale-105 group-hover:shadow-[0_15px_40px_rgba(0,0,0,0.4)]"
            />

            {/* === Custom 15% OFF Circle Badge === */}
            <div
              className="absolute -top-6 -right-6 flex items-center justify-center
                         w-20 h-20 rounded-full bg-gradient-to-br from-[#0a1a4f] to-[#061033]
                         text-white font-bold text-lg shadow-[0_8px_20px_rgba(0,0,0,0.3)]
                         border-4 border-white/20 group-hover:shadow-[0_12px_35px_rgba(0,0,0,0.45)]
                         transition-shadow duration-300"
            >
              15% OFF
            </div>
          </motion.div>
        </div>

        {/* ==== RIGHT : Text & Button ==== */}
        <div className="w-full md:w-1/2 text-white space-y-6">
          <motion.h2
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold leading-snug"
          >
            Experience the Journey  
            <br /> Pre-subscribe Your Copy Today!
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg leading-relaxed"
          >
            Letters, ledgers, and the ghost routes of the slave trade…
            the forensic map, piecing ledgers into a living atlas.
          </motion.p>

          <motion.a
            href="#subscribe"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="inline-block px-6 py-3 rounded-full bg-[#0a1a4f] text-white font-semibold
                       hover:bg-[#061033] hover:shadow-[0_12px_30px_rgba(0,0,0,0.4)]
                       transition-all duration-300"
          >
            Pre-Subscribe
          </motion.a>
        </div>
      </div>
    </section>
  );
}
