"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden isolate">
      {/* Background */}
      <Image
        src="/author3.png"
        alt="Historic shoreline representing Gullah Geechee heritage"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />

      {/* Content container */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          {/* Brand */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-white/95 font-sans text-sm sm:text-base md:text-lg tracking-[0.2em] uppercase"
          >
            Amadu Massally
          </motion.h1>
          <div className="mt-2 h-[2px] w-24 sm:w-32 md:w-40 mx-auto bg-white/80 rounded-full" />

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs sm:text-sm text-white/90 backdrop-blur"
          >
            <span className="inline-block h-2 w-2 rounded-full bg-white/90" />
            A living archive of memory & rhythm
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 text-white font-display leading-tight text-[clamp(2rem,6vw,4rem)]"
          >
            From Hush to Rhythm
          </motion.h2>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-3 text-white/90 font-display italic text-[clamp(1rem,3vw,1.8rem)]"
          >
            The Gullah Geechee Trilogy
          </motion.p>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-5 text-white/90 text-[clamp(0.95rem,2.4vw,1.125rem)] font-sans"
          >
            Three books. One covenant of memory.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <PrimaryButton href="/blogs">Explore the Trilogy</PrimaryButton>
            <PrimaryButton href="/books">Buy Now</PrimaryButton>
            <PrimaryButton href="/contact">Subscribe</PrimaryButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function PrimaryButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center justify-center rounded-xl
                 bg-[#0A1A4F] px-6 py-3 text-sm md:text-base font-medium text-white
                 shadow-[0_10px_28px_rgba(10,26,79,0.35)] ring-1 ring-white/10 transition
                 hover:bg-[#0B205E] hover:shadow-[0_16px_38px_rgba(10,26,79,0.45)]
                 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
    >
      {children}
      <span
        className="ml-2 inline-block translate-x-0 transition-transform duration-200 group-hover:translate-x-0.5"
        aria-hidden="true"
      >
        →
      </span>
    </Link>
  );
}
