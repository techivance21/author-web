"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section
      className="relative py-20 px-6 md:px-12 bg-cover bg-center"
      style={{ backgroundImage: "url('/bg2.png')" }}
    >
      {/* Lighter overlay */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-[1px]" />

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Heading with animated pencil underline */}
          <div className="mb-12 inline-block relative">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-serif font-bold text-[#b08968] relative z-10"
            >
              Hello, I’m Amadu.
            </motion.h2>

            {/* Pencil-style gradient underline */}
            <motion.svg
              className="absolute left-0 -bottom-2 w-full h-3"
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <defs>
                <linearGradient
                  id="dustyRoseGray"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#d8a7a7" /> {/* Dusty Rose */}
                  <stop offset="100%" stopColor="#6b6054" /> {/* Warm Gray */}
                </linearGradient>
              </defs>
              <motion.path
                d="M0 5 C 20 0, 80 10, 100 5"
                stroke="url(#dustyRoseGray)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          </div>

          <p className="text-lg md:text-xl text-black/80 mb-4 font-sans leading-relaxed">
            I write stories that challenge perspectives and invite readers to
            imagine a world shaped by dialogue, reflection, and change. My work
            seeks to bridge cultures, spark conversations, and explore ideas
            that reach beyond borders.
          </p>

          <p className="text-lg md:text-xl text-black/80 mb-4 font-sans leading-relaxed">
            When I’m not writing, I enjoy reading, traveling, and engaging in
            projects that connect people across communities. Over the years,
            I’ve published five books that reflect my journey as a storyteller
            and thinker.
          </p>

          <p className="text-lg md:text-xl text-black/80 mb-6 font-sans leading-relaxed">
            Here on my website, you can discover my books, read updates, and
            connect with me directly.
          </p>

          {/* Signature */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl text-[#b08968] font-[cursive] italic mb-2"
          >
            Amadu Massally
          </motion.p>

          <p className="text-sm text-black/70 font-sans">
            All author photography by Sharron Gibson.
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Image
            src="/about1.png"
            alt="Amadu Massally portrait"
            width={500}
            height={600}
            className="rounded-none shadow-xl object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
