"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Event() {
  return (
    <section className="relative w-full min-h-[85svh] sm:min-h-[100svh] text-white overflow-hidden">
      {/* Background image */}
      <Image
        src="/event1.png"
        alt="Hands pouring libation water into soil"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Vignettes / overlays */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-18 md:py-24 space-y-10 sm:space-y-12">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center font-display drop-shadow-sm leading-tight text-[clamp(1.9rem,6vw,3.6rem)]"
        >
          Join the Movement
        </motion.h1>

        {/* Eyebrow / kicker */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto flex flex-col items-center gap-2 text-center text-white/70"
        >
          <span className="text-[0.72rem] uppercase tracking-[0.55em] text-white/65 sm:text-xs">
            Collective Return
          </span>
          <span className="text-sm tracking-[0.3em] text-white/55 sm:text-base">
            Living Covenant
          </span>
        </motion.div>

        {/* Glass block */}
        <motion.section
          initial={{ opacity: 0, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, delay: 0.1 }}
          className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-[1.75rem] sm:rounded-[2.25rem] lg:rounded-[2.75rem] border border-white/12 bg-white/[0.06] shadow-[0_40px_90px_-45px_rgba(10,26,79,0.85)] backdrop-blur-md"
        >
          {/* soft sheens */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-white/[0.04]" />
          <div className="pointer-events-none absolute -top-24 right-[-10%] h-60 w-60 rounded-full bg-[#0A1A4F]/45 blur-[110px]" />
          <div className="pointer-events-none absolute -bottom-24 left-[-12%] h-64 w-64 rounded-full bg-white/14 blur-[95px]" />

          {/* Grid: stacks on mobile, two columns on lg */}
          <div className="relative grid gap-8 sm:gap-10 px-6 py-8 sm:px-10 sm:py-12 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)]">
            {/* Left: Text */}
            <div className="space-y-5 sm:space-y-6 text-left font-sans text-white/90 text-[clamp(1rem,2.1vw,1.2rem)] leading-relaxed">
              <h2 className="font-display text-[clamp(1.6rem,3.8vw,2.5rem)] leading-tight text-white">
                The river of return keeps flowing.
              </h2>
              <p>
                From the rice fields of the Lowcountry to the riverbanks of Sierra Leone, hands reach across water and
                time.
              </p>
              <p>
                This movement is more than remembrance it is rebuilding. A covenant of descendants, scholars,
                and allies restoring what was scattered: land, language, and lineage.
              </p>
            </div>

            {/* Right: Card */}
            <div className="flex flex-col justify-between gap-6 sm:gap-8 rounded-2xl sm:rounded-[2rem] border border-white/12 bg-black/35 p-5 sm:p-8">
              <div className="space-y-4 sm:space-y-5 text-white/90 text-[clamp(0.98rem,1.9vw,1.18rem)] leading-relaxed">
                <p className="font-display text-[clamp(1.2rem,3vw,1.9rem)] text-white">
                  How do you become part of the reassembly?
                </p>
                <p>By listening. By learning. By lending your hands and heart.</p>
                <p>
                  Each person who remembers, teaches, or helps another return becomes a thread&nbsp;in&nbsp;the&nbsp;weave.
                </p>
              </div>

              {/* CTA row */}
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <PrimaryButton as="link" href="/blogs" size="sm">
                  Read About the Movement
                </PrimaryButton>

                <p className="text-sm text-white/65 sm:max-w-[16rem]">
                  Gatherings, resources, and shared study to support every return.
                </p>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </section>
  );
}

function PrimaryButton({
  as = "button",
  href,
  size = "md",
  children,
}: {
  as?: "button" | "link";
  href?: string;
  size?: "sm" | "md";
  children: React.ReactNode;
}) {
  const base =
    "inline-flex items-center justify-center rounded-lg font-medium select-none " +
    "bg-[#0A1A4F] hover:bg-[#0B205E] text-white " +
    "shadow-[0_6px_18px_rgba(10,26,79,0.30)] ring-1 ring-white/10 " +
    "transition-colors duration-150 whitespace-nowrap w-fit"; // one line, no full width

  const pad = size === "sm" ? "px-4 py-2 text-sm" : "px-5 py-2.5 text-[0.95rem]"; // normal compact padding

  if (as === "link" && href) {
    return (
      <motion.div className="w-fit">
        <Link href={href} className={`${base} ${pad}`}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <button type="button" className={`${base} ${pad}`}>
      {children}
    </button>
  );
}
