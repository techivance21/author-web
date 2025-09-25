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
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative w-full h-[80vh] overflow-hidden">
      {/* Background cross-fade */}
      <AnimatePresence>
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <Image
            src={slides[index].img}
            alt="Unity Background"
            fill
            priority
            className="object-cover"
          />
          {/* dark overlay for readability */}
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 flex items-center h-full px-6 md:px-16">
        <motion.div
          key={slides[index].title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 1 }}
          className="max-w-xl text-left"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-beige mb-4 tracking-wide drop-shadow-lg">
            {slides[index].title}
          </h2>
          <p className="text-white/90 mb-8 leading-relaxed text-lg">
            {slides[index].text}
          </p>
          <button
            className="rounded-full px-8 py-3 text-white backdrop-blur-md bg-white/10 border border-white/30 hover:bg-white/20 transition-all duration-300"
          >
            {slides[index].button}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
