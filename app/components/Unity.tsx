"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    img: "/unity1.png",
    title: "Echoes of Ancestral Connections",
    text: "Rediscover your roots through the Amadu Massally. Explore stories, embrace history, and reconnect with ancestral truth.",
    button: "Explore Further",
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
      6000
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative w-full h-[85vh] overflow-hidden">
      {/* Background cross-fade */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={slides[index].img}
            alt="Unity Background"
            fill
            priority
            className="object-cover scale-105 transition-transform duration-[6000ms] ease-out"
          />
          {/* soft gradient overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-[#0a1a4f]/50 to-black/30" />
        </motion.div>
      </AnimatePresence>

      {/* Floating text & CTA */}
      <div className="relative z-10 flex items-center h-full px-6 md:px-20">
        <motion.div
          key={slides[index].title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-wide mb-5 text-white">
            {slides[index].title}
          </h2>
          <p className="text-white/90 mb-8 leading-relaxed text-lg md:text-xl">
            {slides[index].text}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-full px-8 py-3 font-semibold bg-[#C9A74C] text-white transition-colors duration-300 hover:bg-[#b8933f]"
          >
            {slides[index].button}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
