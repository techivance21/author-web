"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

const items = [
  {
    title: "Healing Through Cultural Stories",
    text: `"The Gullah Geechee Saga" weaves narratives that mend fractured connections, offering healing through ancestral truths. Its pages are a balm for diaspora souls seeking belonging.`,
  },
  {
    title: "Cross-Cultural Bridges",
    text: `"Diaspora Scavenger" builds bridges between continents, unveiling shared histories through meticulously researched tales. A compass for cultural explorers.`,
  },
  {
    title: "Tales of Ancestral Connection",
    text: `Hear the whispers of generations in "The Gullah Geechee Saga." Its lyrical prose binds past to present, transforming memory into legacy.`,
  },
  {
    title: "Journey of Togetherness",
    text: `Both books ignite collective awakening—"Diaspora Scavenger" as your guide, "The Gullah Geechee Saga" as your torch. Walk this path with ancestors at your side.`,
  },
];

export default function Box() {
  // Create star positions only once on client to avoid hydration mismatch
  const stars = useMemo(
    () =>
      Array.from({ length: 40 }, () => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
      })),
    []
  );

  return (
    <section
      className="
        relative w-full overflow-hidden
        bg-gradient-to-b from-[#d8a7a7] via-[#f5f5f5] to-[#f5f5f5]
        py-24 px-6 md:px-12
      "
    >
      {/* ✦ Sparkling star field */}
      <div className="absolute inset-0 pointer-events-none">
        {stars.map((star, i) => (
          <motion.span
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white"
            style={star}
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

        {/* Soft, slow orbs for depth */}
        {[...Array(3)].map((_, i) => (
          <motion.span
            key={`orb-${i}`}
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

      {/* ✦ Content grid */}
      <div className="relative z-10 max-w-7xl mx-auto grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.2, ease: "easeOut" }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
              borderColor: "#b76e79", // deeper pink glow on hover
            }}
            className="
              relative rounded-2xl p-8
              bg-white
              border border-[#d8a7a7]
              shadow-md
              transition-transform duration-500 ease-out
              hover:cursor-pointer
            "
          >
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
              {item.title}
            </h3>
            <p className="text-gray-800 leading-relaxed">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
