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
      className="relative w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/author1.png')" }}
    >
      {/* Dark-blue overlay */}
      <div className="absolute inset-0 bg-[#0A2342]/60" />

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-20 gap-12">
        {/* === LEFT: Progress Bars === */}
        <div className="md:w-1/2 w-full space-y-8 text-white">
          {stats.map((item, idx) => (
            <div key={idx}>
              <div className="flex justify-between text-sm font-semibold mb-1">
                <span>{item.label}</span>
                <span>{item.value}%</span>
              </div>
              <div className="h-1.5 bg-white/20 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.value}%` }}
                  transition={{ duration: 1.2 }}
                  className="h-full bg-[#0A2342]"   // deep navy fill
                />
              </div>
            </div>
          ))}
        </div>

        {/* === RIGHT: Main Text === */}
        <div className="md:w-1/2 w-full text-white space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold leading-snug">
            We cannot understand the Gullah Geechee if we begin the story with chains.
          </h2>
          <p className="text-lg">
            The truth is older and deeper. This Saga is not just a book. It is a summons.
            Read it as testimony, as inheritance, as covenant.
          </p>
        </div>
      </div>
    </section>
  );
}
