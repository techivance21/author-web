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
    <section className="relative min-h-screen w-full text-white">
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
        {/* Page Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-4xl md:text-6xl font-extrabold drop-shadow-lg"
        >
          Join the Movement
        </motion.h1>

        {/* Featured Event */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-10 shadow-2xl text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">A Coven of Heirs</h2>
          <p className="text-lg mb-6">
            Date: <span className="font-semibold">September 30, 2025</span>
            <br />
            Location: <span className="font-semibold">Atlanta, GA</span>
          </p>
          <p className="mb-6 max-w-2xl mx-auto">
            A night of poetry, music, and ancestral tribute bringing together
            descendants and allies to honor shared histories.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#rsvp"
            className="inline-block bg-[#C9A74C] text-white px-6 py-3 rounded-full font-semibold transition-colors duration-300 hover:bg-[#a7853c]"
          >
            RSVP
          </motion.a>
        </motion.div>

        {/* Upcoming Events */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
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
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <h4 className="text-xl font-semibold mb-2">{event.title}</h4>
              <p className="mb-1">{event.date}</p>
              <p className="mb-4">{event.location}</p>
              <p className="mb-4 text-sm text-white/80">{event.description}</p>
              <a
                href="#rsvp"
                className="inline-block bg-[#C9A74C] text-white px-5 py-2 rounded-full font-medium transition-colors duration-300 hover:bg-[#a7853c]"
              >
                RSVP
              </a>
            </motion.div>
          ))}
        </div>

        {/* See All Events Button */}
        <div className="text-center">
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#all-events"
            className="inline-block bg-[#C9A74C] text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300 hover:bg-[#a7853c]"
          >
            See All Events
          </motion.a>
        </div>
      </div>
    </section>
  );
}
