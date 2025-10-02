"use client";

import { motion } from "framer-motion";

export default function AuthorSection() {
  const stats = [
    { label: "Best Selling", value: 90 },
    { label: "Top Book Lists", value: 90 },
    { label: "Happy Viewers", value: 90 },
  ];

  return (
    <section
      className="relative w-full bg-cover bg-center font-sans"
      style={{ backgroundImage: "url('/author1.png')" }}
    >
      {/* Navy overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A2342]/80 via-[#0A2342]/65 to-[#0A2342]/65" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 lg:px-8 py-16 md:py-24 gap-12">
        {/* === LEFT: Progress Bars === */}
        <div className="md:w-1/2 w-full space-y-8 text-white">
          {stats.map((item, idx) => (
            <div key={idx} className="w-full">
              <div className="flex justify-between text-sm md:text-base font-medium mb-1">
                <span>{item.label}</span>
                <span>{item.value}%</span>
              </div>
              <div className="h-2 bg-white/15 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.value}%` }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="h-full bg-[#0A2342] shadow-[0_0_8px_#0A2342]/60"
                />
              </div>
            </div>
          ))}
        </div>

        {/* === RIGHT: Main Text === */}
        <div className="md:w-1/2 w-full text-white space-y-6">
          <h2 className="text-3xl md:text-4xl font-display font-bold leading-snug drop-shadow-md">
            We cannot understand the Gullah Geechee if we begin the story with
            chains.
          </h2>
          <p className="text-base md:text-lg leading-relaxed font-sans text-white/90">
            The truth is older and deeper. This Saga is not just a book. It is a
            summons. Read it as testimony, as inheritance, as covenant.
          </p>
        </div>
      </div>
    </section>
  );
}
