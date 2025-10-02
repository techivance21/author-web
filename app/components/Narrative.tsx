"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { BookOpen, Mic, Compass } from "lucide-react";

export default function Narrative() {
  const gold = "#C9A74C";

  return (
    <section className="relative w-full text-white">
      {/* Background + overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/bg3.png"
          alt="Lowcountry marshland background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center"
        >
          <h2 className="font-display leading-tight text-[clamp(1.6rem,3.6vw,2.5rem)] md:text-[clamp(2rem,3.4vw,2.75rem)]">
            The Gullah Geechee Trilogy is more than books it&apos;s a covenant of history, memory, and future.
          </h2>
          <p className="mt-4 font-sans text-white/85 text-[clamp(0.98rem,2.2vw,1.125rem)]">
            Three distinct entries one living story that braids archives, voices, and routes into a single lineage.
          </p>
        </motion.div>

        {/* Books */}
        <div className="mt-14 grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-3">
          <BookCard
            img="/book1.png"
            title="The Gullah Geechee Saga"
            subtitle="Through African Eyes"
            rating={5}
            gold={gold}
          />
          <BookCard
            img="/book2.png"
            title="Gambozo’s Storytelling"
            subtitle="A Saga Within the Saga"
            rating={5}
            gold={gold}
          />
          <BookCard
            img="/book3.png"
            title="Diaspora Scavenger"
            subtitle="Letters, Ledgers & Ghost Routes"
            rating={0}
            gold={gold}
          />
        </div>

        {/* Covenant */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="mt-20 md:mt-24"
        >
          <h3 className="text-center font-display leading-tight text-[clamp(1.5rem,3vw,2rem)] md:text-[clamp(1.75rem,2.8vw,2.25rem)]">
            The Covenant of Three — One Story, Three Doors
          </h3>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            <InfoBox
              icon={<BookOpen size={40} color={gold} />}
              title="The Gullah Geechee Saga"
              text="The flagship—memory carried through African eyes."
              gold={gold}
            />
            <InfoBox
              icon={<Mic size={40} color={gold} />}
              title="Gambozo’s Storytelling"
              text="The oral heartbeat—where ancestors speak by firelight."
              gold={gold}
            />
            <InfoBox
              icon={<Compass size={40} color={gold} />}
              title="Diaspora Scavenger"
              text="The forensic map—piecing ledgers into a living atlas."
              gold={gold}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ----------------- Subcomponents ----------------- */

function BookCard({
  img,
  title,
  subtitle,
  rating,
  gold,
}: {
  img: string;
  title: string;
  subtitle: string;
  rating: number;
  gold: string;
}) {
  const isComing = rating <= 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6 }}
      className="group relative flex flex-col items-center rounded-2xl border border-white/15 bg-white/5 backdrop-blur p-5 sm:p-6"
    >
      <div className="w-full max-w-xs">
        <div className="relative aspect-[2/3] overflow-hidden rounded-xl shadow-2xl ring-1 ring-white/10">
          <Image
            src={img}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 70vw, 320px"
            priority={false}
          />
          {isComing && (
            <div
              className="absolute left-0 top-4 rounded-r-md bg-white/15 px-3 py-1 text-xs font-sans tracking-wide"
              style={{ borderLeft: `3px solid ${gold}` }}
            >
              Coming Soon
            </div>
          )}
        </div>
      </div>

      <div className="mt-5 w-full text-center">
        <h3 className="font-display text-[clamp(1.1rem,2.6vw,1.5rem)] leading-tight">{title}</h3>
        <p className="mt-1 font-display italic text-white/85 text-sm sm:text-base">{subtitle}</p>

        {isComing ? (
          <p className="mt-3 font-sans text-sm italic text-white/70">Rating coming soon</p>
        ) : (
          <div className="mt-3 flex items-center justify-center gap-1 text-[1rem] leading-none">
            {Array.from({ length: rating }).map((_, i) => (
              <span key={i} aria-hidden="true">⭐</span>
            ))}
            <span className="sr-only">{rating} out of 5 stars</span>
          </div>
        )}

        {/* Plain buttons instead of links */}
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <PrimaryButton>{isComing ? "Pre-Order / Learn More" : "Buy Now"}</PrimaryButton>
          <PrimaryButton>Subscribe</PrimaryButton>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-0 ring-white/0 transition group-hover:ring-1 group-hover:ring-white/15" />
    </motion.article>
  );
}

function InfoBox({
  icon,
  title,
  text,
  gold,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  gold: string;
}) {
  return (
    <div
      className="rounded-2xl border bg-white/5 p-6 sm:p-7 text-center backdrop-blur transition hover:bg-white/[0.08] hover:-translate-y-[2px]"
      style={{ borderColor: gold }}
    >
      <div className="mb-3 flex justify-center">{icon}</div>
      <h4 className="font-display text-[clamp(1.05rem,2.2vw,1.25rem)]">{title}</h4>
      <p className="mt-2 font-sans text-white/85 text-[clamp(0.95rem,2vw,1.05rem)]">{text}</p>
    </div>
  );
}

/* ----------------- Shared CTA ----------------- */
function PrimaryButton({ children }: { children: React.ReactNode }) {
  return (
    <button
      type="button"
      className="inline-flex items-center justify-center rounded-xl bg-[#0A1A4F] px-5 py-2.5 text-sm md:text-base font-medium text-white shadow-[0_10px_28px_rgba(10,26,79,0.35)] ring-1 ring-white/10 transition hover:bg-[#0B205E] hover:shadow-[0_16px_38px_rgba(10,26,79,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
    >
      {children}
      <span className="ml-2 -mr-1 inline-block transition-transform group-hover:translate-x-0.5">→</span>
    </button>
  );
}
