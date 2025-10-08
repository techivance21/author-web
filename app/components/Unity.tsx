"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    img: "/unity1.png",
    title: "Join the Covenant",
    text: "Step into a living covenant of remembrance, return, and reassembly. Be part of the journey that connects generations and diasporas.",
    button: "Subscribe to Saga Speak",
  },
  {
    img: "/unity2.png",
    title: "Cultural Stories Historical Healing",
    text: "Step into the cultural tapestry woven by our griot voices. Heal, learn, and honor unseen histories. Join the journey.",
    button: "Get in Touch",
  },
];

export default function Unity() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((prev) => (prev + 1) % slides.length),
      5000 // faster cycle
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative w-full h-[85vh] overflow-hidden font-sans">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={slides[index].img}
            alt={slides[index].title}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-[#0a1a4f]/40 to-black/20" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 flex items-center h-full px-6 md:px-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[index].title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl bg-black/25 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-lg"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-white leading-tight drop-shadow-md">
              {slides[index].title}
            </h2>
            <p className="text-white/90 mb-6 leading-relaxed text-base md:text-lg font-sans">
              {slides[index].text}
            </p>

            {/* Linked to /contact for both slides */}
            <Link href="/contact" legacyBehavior>
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center rounded-full px-6 py-2.5 md:px-7 md:py-3 
                           bg-[#0a1a4f] hover:bg-[#061033] text-white font-sans font-medium text-sm md:text-base 
                           shadow-md hover:shadow-lg transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              >
                {slides[index].button}
              </motion.a>
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
