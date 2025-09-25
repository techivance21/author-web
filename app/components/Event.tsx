"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Event() {
  return (
    <section
      className="relative w-full py-20 px-6 bg-cover bg-center"
      style={{ backgroundImage: "url('/bg3.png')" }}
    >
      {/* subtle dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />

      <div className="relative z-10 max-w-6xl mx-auto space-y-20">
        {/* ====== Card 1 ====== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-10 items-center bg-white/10 backdrop-blur-md rounded-3xl p-6 shadow-xl"
        >
          <div className="relative w-full h-72 md:h-96 rounded-2xl overflow-hidden">
            <Image
              src="/event1.png"
              alt="Event 1"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>

          <div className="text-white">
            <h3 className="text-2xl md:text-4xl font-serif font-bold mb-4 text-[#f1e4d3]">
              Events &amp; Speaking
            </h3>
            <p className="text-base md:text-lg leading-relaxed text-gray-200">
              Amadu Massally is available for keynote talks, storytelling
              sessions, panel discussions, educator workshops, and cultural
              festivals both in-person and virtual. With deep roots in Sierra
              Leone and long-standing relationships across the Gullah Geechee
              corridor, he brings not only research but lived experience and
              ancestral memory to each engagement.
            </p>
          </div>
        </motion.div>

        {/* ====== Card 2 ====== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-10 items-center bg-white/10 backdrop-blur-md rounded-3xl p-6 shadow-xl md:flex-row-reverse"
        >
          <div className="relative w-full h-72 md:h-96 rounded-2xl overflow-hidden order-last md:order-first">
            <Image
              src="/event2.png"
              alt="Event 2"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>

          <div className="text-white">
            <h3 className="text-2xl md:text-4xl font-serif font-bold mb-4 text-[#f1e4d3]">
              Events &amp; Speaking
            </h3>
            <p className="text-base md:text-lg leading-relaxed text-gray-200">
              Amadu Massally is available for keynote talks, storytelling
              sessions, panel discussions, educator workshops, and cultural
              festivals both in-person and virtual. With deep roots in Sierra
              Leone and long-standing relationships across the Gullah Geechee
              corridor, he brings not only research but lived experience and
              ancestral memory to each engagement.
            </p>
          </div>
        </motion.div>

        {/* ====== Explore Button ====== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <button className="px-8 py-3 rounded-full bg-gradient-to-r from-[#d6d3c2] to-[#b6b4a5] text-gray-900 font-semibold tracking-wide shadow-lg transition duration-300 hover:scale-105 hover:shadow-2xl hover:from-[#e8e6d6] hover:to-[#c6c4b4]">
            Explore Services
          </button>
        </motion.div>
      </div>
    </section>
  );
}
