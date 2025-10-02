"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/**
 * Theme tokens
 */
const NAVY = "#0A1A4F";
const NAVY_HOVER = "#0B205E";

export default function Social() {
  return (
    <section className="relative w-full py-20 text-white overflow-hidden">
      {/* Background + overlay */}
      <div className="absolute inset-0">
        <Image
          src="/bg1.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 space-y-16 md:space-y-20">
        {/* Section intro */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-display leading-tight text-[clamp(1.9rem,4.6vw,3rem)] mb-3">
            Cultural Offerings Unveiled
          </h2>
          <p className="font-sans text-[clamp(1rem,2.4vw,1.2rem)] text-white/90 leading-relaxed">
            Discover a rich tapestry of services designed to empower through
            cultural education, fostering deeper understanding, and reinforcing
            community ties. Explore offerings that bridge past, present, and
            future with authenticity.
          </p>
        </motion.div>

        {/* Featured card */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="w-full flex justify-center"
        >
          <div className="w-full max-w-[720px]">
            <HoverCard>
              <div className="relative aspect-[4/3]">
                <Image
                  src="/socials.jpg"
                  alt="Angel Oak"
                  fill
                  quality={90}
                  priority
                  sizes="(min-width: 1280px) 720px, (min-width: 768px) 560px, 100vw"
                  className="object-cover select-none"
                />
              </div>
              <div className="backdrop-blur-md bg-white/10 border-t border-white/20 p-6 md:p-8 text-center">
                <p className="font-sans text-[clamp(1rem,2.4vw,1.2rem)] leading-relaxed text-white/95">
                  The Angel Oak has stood for centuries, a witness tree older than
                  the auction block. Here, under its branches, I stand as
                  descendant and storyteller — rooted, unbroken.
                </p>
              </div>
            </HoverCard>
          </div>
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="max-w-4xl mx-auto text-center space-y-6"
        >
          <h3 className="font-display text-[clamp(1.6rem,3.8vw,2.25rem)] font-bold">
            Amadu Massally
          </h3>
          <p className="font-display text-[clamp(1.05rem,2.6vw,1.35rem)] italic text-white">
            “Repairer of the breach, connector of diasporas.”
          </p>
          <p className="font-sans text-[clamp(0.98rem,2.2vw,1.125rem)] leading-relaxed text-white/90">
            Amadu Massally is a cultural bridge-builder, storyteller, and
            community leader whose work unites the African diaspora with
            authenticity and care. With roots in Sierra Leone and strong
            relationships across the Gullah Geechee corridor, he has dedicated
            his life to repairing cultural fractures and reconnecting families,
            traditions, and histories across continents.
          </p>
          <PrimaryButton as="button">
            Book Amadu Massally for a Keynote or Workshop
          </PrimaryButton>
        </motion.div>

        {/* Two cards row */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {[2, 3].map((num) => (
            <HoverCard key={num}>
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
                <h3 className="font-display text-[clamp(1.25rem,2.6vw,1.6rem)] font-semibold mb-3">
                  Events & Speaking
                </h3>
                <p className="font-sans text-[clamp(0.98rem,2.1vw,1.1rem)] leading-relaxed text-white/90">
                  Amadu Massally is available for keynote talks, storytelling
                  sessions, panel discussions, educator workshops, and cultural
                  festivals—both in-person and virtual. With deep roots in Sierra
                  Leone and long-standing relationships across the Gullah Geechee
                  corridor, he brings not only research but lived experience and
                  ancestral memory to each engagement.
                </p>
              </div>
            </HoverCard>
          ))}
        </motion.div>

        {/* Bottom CTA (same navy as all buttons) */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-center"
        >
          <PrimaryButton as="button">Explore Offerings</PrimaryButton>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- Shared UI ---------------- */

function HoverCard({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      whileHover={{ scale: 1.015 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className="group rounded-2xl overflow-hidden shadow-xl ring-1 ring-white/10 transform-gpu will-change-transform bg-white/5"
    >
      {children}
    </motion.div>
  );
}

function PrimaryButton({
  as = "button",
  href,
  children,
}: {
  as?: "button" | "a";
  href?: string;
  children: React.ReactNode;
}) {
  const base =
    "inline-flex items-center justify-center rounded-full font-medium " +
    "shadow-[0_10px_28px_rgba(10,26,79,0.35)] ring-1 ring-white/10 " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 " +
    "transition";
  const size = "px-7 md:px-8 py-3 text-[clamp(0.95rem,2vw,1rem)]";
  const color = `bg-[${NAVY}] hover:bg-[${NAVY_HOVER}] text-white`;

  // Because Tailwind can’t read dynamic color strings in className reliably,
  // we apply stable classes and add exact brand colors via inline style:
  const classes = `${base} ${size} bg-[${NAVY}] hover:bg-[${NAVY_HOVER}] text-white`;

  const style = {
    backgroundColor: NAVY,
  } as React.CSSProperties;

  const hoverStyle = {
    // handled via class hover:bg-... fallback + style on mouse events if needed
  };

  if (as === "a") {
    return (
      <motion.a
        whileHover={{ scale: 1.02 }}
        href={href}
        className={`${base} ${size} text-white`}
        style={style}
      >
        {children}
        <span className="ml-2">→</span>
      </motion.a>
    );
  }

  return (
    <button type="button" className={`${base} ${size} text-white`} style={style}>
      {children}
      <span className="ml-2">→</span>
    </button>
  );
}
