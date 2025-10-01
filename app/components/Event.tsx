"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const upcomingEvents = [
  {
    id: 1,
    title: "Gullah Heritage Night",
    date: "October 12, 2025",
    location: "Charleston, SC",
    description:
      "An evening of live drumming, traditional cuisine, and oral history celebrating the enduring Gullah culture.",
  },
  {
    id: 2,
    title: "Sea Island Storytelling",
    date: "November 2, 2025",
    location: "Savannah, GA",
    description:
      "Local elders and artists share ancestral tales and music that shaped the Sea Islands’ legacy.",
  },
  {
    id: 3,
    title: "Roots & Rhythm Workshop",
    date: "December 15, 2025",
    location: "Hilton Head, SC",
    description:
      "Hands-on dance and percussion sessions exploring the African rhythms behind Lowcountry traditions.",
  },
];

export default function Event() {
  return (
    <section className="relative min-h-screen w-full text-white overflow-hidden">
      {/* Background image */}
      <Image
        src="/event1.png"
        alt="Hands pouring libation water into soil"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 space-y-16">
        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center text-4xl md:text-6xl font-extrabold drop-shadow-2xl"
        >
          Join the Movement
        </motion.h1>

        {/* Featured Event */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-10 shadow-2xl text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            A Coven of Heirs
          </h2>
          <p className="text-lg mb-6">
            Date: <span className="font-semibold">September 30, 2025</span>
            <br />
            Location: <span className="font-semibold">Atlanta, GA</span>
          </p>
          <p className="mb-6 max-w-2xl mx-auto text-white/90">
            A night of poetry, music, and ancestral tribute bringing together
            descendants and allies to honor shared histories.
          </p>
          <BlueButton text="RSVP" href="#rsvp" />
        </motion.div>

        {/* Upcoming Events */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center text-2xl md:text-3xl font-bold"
        >
          Upcoming Events
        </motion.h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingEvents.map((event, i) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <h4 className="text-xl font-semibold mb-2">{event.title}</h4>
              <p className="mb-1 text-white/90">{event.date}</p>
              <p className="mb-4 text-white/80">{event.location}</p>
              <p className="mb-6 text-sm text-white/70">{event.description}</p>
              <BlueButton text="RSVP" href="#rsvp" small />
            </motion.div>
          ))}
        </div>

        {/* See All Events */}
        <div className="text-center">
          <BlueButton text="See All Events" href="#all-events" />
        </div>
      </div>
    </section>
  );
}

/* === Reusable Blue Button Component === */
function BlueButton({
  text,
  href,
  small = false,
}: {
  text: string;
  href: string;
  small?: boolean;
}) {
  return (
    <motion.a
      whileHover={{ scale: 1.05 }}
      href={href}
      aria-label={text}
      className={`inline-block text-center font-semibold text-white 
        bg-[#0a1a4f] rounded-full transition-all duration-300
        hover:bg-[#092040] shadow-md hover:shadow-lg
        ${small ? "px-5 py-2 text-sm" : "px-8 py-3 text-base"}`}
    >
      {text}
    </motion.a>
  );
}
