"use client";

import { motion } from "framer-motion";
import Image from "next/image";

/* Data */
const upcomingEvents = [
  {
    id: 1,
    title: "Gullah Heritage Night",
    date: "Oct 12 2025",
    location: "location: Charleston, SC",
    description:
      "An evening of live drumming, traditional cuisine, and oral history celebrating the enduring Gullah culture.",
  },
  {
    id: 2,
    title: "Sea Island Storytelling",
    date: "Nov 2 2025",
    location: "location: Savannah, GA",
    description:
      "Local elders and artists share ancestral tales and music that shaped the Sea Islands’ legacy.",
  },
  {
    id: 3,
    title: "Roots & Rhythm Workshop",
    date: "Dec 15 2025",
    location: "location Hilton Head, SC",
    description:
      "Hands-on dance and percussion sessions exploring African rhythms behind Lowcountry traditions.",
  },
];

export default function Event() {
  return (
    <section className="relative min-h-screen w-full text-white overflow-hidden">
      {/* Background */}
      <Image
        src="/event1.png"
        alt="Hands pouring libation water into soil"
        fill
        priority
        className="object-cover object-center"
      />
      {/* Overlays for legibility */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 space-y-14 sm:space-y-16">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center font-display drop-shadow-sm leading-tight
                     text-[clamp(2rem,6vw,3.5rem)]"
        >
          Join the Movement
        </motion.h1>

        {/* Featured Event */}
        <motion.section
          initial={{ opacity: 0, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mx-auto max-w-4xl text-center rounded-2xl border border-white/15
                     bg-white/10 backdrop-blur p-6 sm:p-8 md:py-10 md:px-10 shadow-2xl"
        >
          <h2 className="font-display text-[clamp(1.5rem,3.2vw,2.25rem)] leading-tight mb-3">
            A Coven of Heirs
          </h2>

          <div className="font-sans text-white/90 text-[clamp(1rem,2.2vw,1.125rem)]">
            <p className="mb-1">
              <span className="text-white/75">Date:</span>{" "}
              <span className="font-semibold">October 18, 2025</span>
            </p>
            <p className="mb-5">
              <span className="text-white/75">Location:</span>{" "}
              <span className="font-semibold">Beaufort, SC</span>
            </p>
          </div>

          <p className="font-sans max-w-2xl mx-auto text-white/90 text-[clamp(0.98rem,2.1vw,1.05rem)] mb-6">
            A night of poetry, music, and ancestral tribute bringing together
            descendants and allies to honor shared histories.
          </p>

          {/* Featured button → changed label only */}
          <PrimaryButton as="a" href="/blogs">
            Read About the Movement
          </PrimaryButton>
        </motion.section>

        {/* Upcoming Events */}
        <motion.h3
          initial={{ opacity: 0, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center font-display text-[clamp(1.25rem,3vw,1.8rem)]"
        >
          Upcoming Events
        </motion.h3>

        {/* Added headline + subline (content only) */}
        <div className="text-center">
          <h4 className="font-display text-[clamp(1.1rem,2.4vw,1.4rem)]">
            Roots in Motion
          </h4>
          <p className="font-sans text-white/85 text-[clamp(0.95rem,2vw,1.05rem)]">
            Gatherings that carry the covenant from the page to the people.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {upcomingEvents.map((event, i) => (
            <motion.article
              key={event.id}
              initial={{ opacity: 0, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-white/15 bg-white/10 backdrop-blur
                         p-5 sm:p-6 shadow-xl hover:bg-white/[0.12] transition"
            >
              <h4 className="font-display text-[clamp(1.1rem,2.2vw,1.35rem)] leading-tight mb-2">
                {event.title}
              </h4>
              {/* Keeping original order (date line first, then location line) */}
              <p className="font-sans text-white/90">{event.date}</p>
              <p className="font-sans text-white/80 mb-3">{event.location}</p>
              <p className="font-sans text-sm text-white/75 mb-5">
                {event.description}
              </p>
              <PrimaryButton as="a" href="/events" size="sm">
                RSVP
              </PrimaryButton>
            </motion.article>
          ))}
        </div>

        {/* See All */}
        <div className="text-center">
          <PrimaryButton as="a" href="/events">
            See All Events
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}

/* === Themed Primary Button (matches your site’s CTAs) === */
function PrimaryButton({
  as = "a",
  href,
  size = "md",
  children,
}: {
  as?: "a" | "button";
  href?: string;
  size?: "sm" | "md";
  children: React.ReactNode;
}) {
  const classes =
    "inline-flex items-center justify-center rounded-xl bg-[#0A1A4F] text-white font-medium " +
    "shadow-[0_10px_28px_rgba(10,26,79,0.35)] ring-1 ring-white/10 transition " +
    "hover:bg-[#0B205E] hover:shadow-[0_16px_38px_rgba(10,26,79,0.45)] " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70";
  const pad = size === "sm" ? "px-5 py-2 text-sm" : "px-8 py-3 text-base";

  if (as === "button") {
    return (
      <button type="button" className={`${classes} ${pad}`}>
        {children}
        <span className="ml-2">→</span>
      </button>
    );
  }
  return (
    <motion.a whileHover={{ scale: 1.02 }} href={href} className={`${classes} ${pad}`}>
      {children}
      <span className="ml-2">→</span>
    </motion.a>
  );
}