"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Social() {
  return (
    <section className="relative w-full py-20 text-white overflow-hidden">
      {/* Background + black overlay */}
      <div className="absolute inset-0">
        <Image
          src="/bg1.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 space-y-20">
        {/* Intro Heading + Subtext */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Cultural Offerings Unveiled
          </h2>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed">
            Discover a rich tapestry of services designed to empower through
            cultural education, fostering deeper understanding, and reinforcing
            community ties. Explore offerings that bridge past, present, and
            future with authenticity.
          </p>
        </motion.div>

        {/* ONE CARD: image + text (no internal jump on hover) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full flex justify-center"
        >
          {/* Outer holder reserves layout; inner scales on hover */}
          <div className="w-full max-w-[700px]">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
              className="group rounded-2xl overflow-hidden shadow-xl ring-1 ring-white/10 transform-gpu will-change-transform"
            >
              {/* Image — no individual hover scale to avoid shift */}
              <div className="relative aspect-[4/3]">
                <Image
                  src="/socials.jpg"
                  alt="Angel Oak"
                  fill
                  quality={90}
                  priority
                  sizes="(min-width: 1280px) 700px, (min-width: 768px) 560px, 100vw"
                  className="object-cover select-none"
                />
              </div>

              {/* Text (same box) */}
              <div className="backdrop-blur-md bg-white/10 border-t border-white/20 p-6 md:p-8 text-center">
                <p className="text-lg md:text-xl leading-relaxed">
                  The Angel Oak has stood for centuries, a witness tree older than
                  the auction block. Here, under its branches, I stand as
                  descendant and storyteller — rooted, unbroken.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Amadu Massally Bio */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="max-w-4xl mx-auto text-center space-y-6"
        >
          <h3 className="text-3xl font-bold">Amadu Massally</h3>
          <p className="text-lg md:text-xl italic text-white">
            “Repairer of the breach, connector of diasporas.”
          </p>
          <p className="text-base md:text-lg leading-relaxed text-white">
            Amadu Massally is a cultural bridge-builder, storyteller, and
            community leader whose work unites the African diaspora with
            authenticity and care. With roots in Sierra Leone and strong
            relationships across the Gullah Geechee corridor, he has dedicated
            his life to repairing cultural fractures and reconnecting families,
            traditions, and histories across continents.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#book-amadu"
            className="inline-block px-8 py-3 rounded-full bg-[#C9A74C] text-white font-semibold transition-colors hover:bg-[#a48639]"
          >
            Book Amadu Massally for a Keynote or Workshop
          </motion.a>
        </motion.div>

        {/* Two side-by-side joined cards (same no-jump hover pattern) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {[2, 3].map((num) => (
            <div key={num} className="w-full">
              <motion.div
                whileHover={{ scale: 1.015 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                className="group rounded-2xl overflow-hidden shadow-xl ring-1 ring-white/10 transform-gpu will-change-transform"
              >
                <div className="relative aspect-[3/2]">
                  <Image
                    src={`/social${num}.png`}
                    alt={`Events and Speaking ${num}`}
                    fill
                    sizes="(min-width: 1280px) 560px, (min-width: 768px) 520px, 100vw"
                    className="object-cover select-none"
                    quality={90}
                  />
                </div>
                <div className="backdrop-blur-md bg-white/10 border-t border-white/20 p-6 text-center">
                  <h3 className="text-2xl font-semibold mb-4">Events & Speaking</h3>
                  <p className="text-base md:text-lg leading-relaxed">
                    Amadu Massally is available for keynote talks, storytelling
                    sessions, panel discussions, educator workshops, and cultural
                    festivals—both in-person and virtual. With deep roots in Sierra
                    Leone and long-standing relationships across the Gullah Geechee
                    corridor, he brings not only research but lived experience and
                    ancestral memory to each engagement.
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </motion.div>

        {/* Golden button at the very bottom */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <button className="px-6 py-3 rounded-full bg-[#0a1a4f] text-white font-medium transition-colors hover:bg-[#a48639]">
            Explore Offerings
          </button>
        </motion.div>
      </div>
    </section>
  );
}
