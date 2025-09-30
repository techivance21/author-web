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
        <div className="absolute inset-0 bg-black/50" />
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

        {/* First hero image + glass text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center group"
        >
          <div className="overflow-hidden rounded-2xl w-full max-w-4xl">
            <Image
              src="/social1.png"
              alt="Angel Oak"
              width={900}
              height={600}
              className="rounded-t-2xl transition-transform duration-500 ease-out group-hover:scale-105"
            />
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-b-2xl p-6 text-center">
              <p className="text-lg md:text-xl leading-relaxed">
                The Angel Oak has stood for centuries, a witness tree older than
                the auction block. Here, under its branches, I stand as
                descendant and storyteller rooted, unbroken.
              </p>
            </div>
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

        {/* Two side-by-side joined cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {[2, 3].map((num) => (
            <div key={num} className="group">
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src={`/social${num}.png`}
                  alt={`Events and Speaking ${num}`}
                  width={600}
                  height={400}
                  className="rounded-t-2xl transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-b-2xl p-6 text-center">
                  <h3 className="text-2xl font-semibold mb-4">
                    Events & Speaking
                  </h3>
                  <p className="text-base md:text-lg leading-relaxed">
                    Amadu Massally is available for keynote talks, storytelling
                    sessions, panel discussions, educator workshops, and
                    cultural festivals—both in-person and virtual. With deep
                    roots in Sierra Leone and long-standing relationships across
                    the Gullah Geechee corridor, he brings not only research but
                    lived experience and ancestral memory to each engagement.
                  </p>
                </div>
              </div>
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
          <button className="px-6 py-3 rounded-full bg-[#C9A74C] text-white font-medium transition-colors hover:bg-[#a48639]">
            Explore Offerings
          </button>
        </motion.div>
      </div>
    </section>
  );
}
