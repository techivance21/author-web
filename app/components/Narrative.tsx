"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, Mic, Compass } from "lucide-react";

export default function Narrative() {
  const gold = "#C9A74C";

  return (
    <section className="relative w-full text-white">
      {/* Background image with dark overlay */}
      <div className="absolute inset-0">
        <Image
          src="/bg3.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" /> {/* black light shade */}
      </div>

      <div className="relative py-20 px-6 md:px-12">
        {/* Main narrative text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            From hush to rhythm, from silence to song…
          </h2>
          <p className="text-lg md:text-xl text-neutral-200 leading-relaxed">
            This is where the Gullah Geechee story is told as one unbroken arc.
            What began as whispers in the dark has become a chorus that spans
            centuries and continents. The Gullah Geechee Trilogy is more than
            three books it is a covenant of remembrance, return, and reassembly.
          </p>
        </motion.div>

        {/* Book covers with ratings */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Book 1 */}
          <BookCard
            img="/book1.png"
            title="The Gullah Geechee Saga"
            subtitle="Through African Eyes"
            buyHref="/books/the-gullah-geechee-saga"
            subscribeHref="/subscribe"
            rating={5}
            gold={gold}
          />

          {/* Book 2 */}
          <BookCard
            img="/book2.png"
            title="Gambozo’s Storytelling"
            subtitle="A Saga Within the Saga"
            buyHref="/books/gambozos-storytelling"
            subscribeHref="/subscribe"
            rating={5}
            gold={gold}
          />

          {/* Book 3 - no rating */}
          <BookCard
            img="/book3.png"
            title="Diaspora Scavenger"
            subtitle="Letters, Ledgers & Ghost Routes"
            buyHref="/books/diaspora-scavenger"
            subscribeHref="/subscribe"
            rating={0} // shows Coming Soon
            gold={gold}
          />
        </div>

        {/* Covenant Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-6xl mx-auto mt-24 text-center"
        >
          <h3 className="text-3xl md:text-4xl font-semibold mb-10">
            The Covenant of Three - One Story, Three Doors
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <InfoBox
              icon={<BookOpen size={40} color={gold} />}
              title="The Gullah Geechee Saga"
              text="The flagship, memory carried through African eyes."
              gold={gold}
            />
            <InfoBox
              icon={<Mic size={40} color={gold} />}
              title="Gambozo’s Storytelling"
              text="The oral heartbeat, where ancestors speak by firelight."
              gold={gold}
            />
            <InfoBox
              icon={<Compass size={40} color={gold} />}
              title="Diaspora Scavenger"
              text="The forensic map, piecing ledgers into a living atlas."
              gold={gold}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ----------- Subcomponents ----------- */

function BookCard({
  img,
  title,
  subtitle,
  buyHref,
  subscribeHref,
  rating,
  gold,
}: {
  img: string;
  title: string;
  subtitle: string;
  buyHref: string;
  subscribeHref: string;
  rating: number;
  gold: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center"
    >
      <Image
        src={img}
        alt={title}
        width={300}
        height={450}
        className="mx-auto rounded-lg shadow-lg"
      />
      <h3 className="mt-4 text-2xl font-bold">{title}</h3>
      <p className="text-sm text-neutral-300 mt-2">{subtitle}</p>

      {/* Star rating */}
      {rating > 0 ? (
        <div className="mt-3 flex justify-center gap-1 text-yellow-400">
          {Array.from({ length: rating }).map((_, i) => (
            <span key={i}>⭐</span>
          ))}
        </div>
      ) : (
        <p className="mt-3 text-sm italic text-neutral-300">Rating coming soon</p>
      )}

      <div className="mt-4 flex justify-center gap-3">
        <Link
          href={buyHref}
          className={`inline-block px-5 py-2 rounded-full bg-[${gold}] text-white font-medium hover:shadow-[0_0_20px_${gold}] transition`}
        >
          {rating > 0 ? "Buy Now" : "Pre-Subscribe"}
        </Link>
        {rating > 0 && (
          <Link
            href={subscribeHref}
            className={`inline-block px-5 py-2 rounded-full bg-[${gold}] text-white font-medium hover:shadow-[0_0_20px_${gold}] transition`}
          >
            Subscribe
          </Link>
        )}
      </div>
    </motion.div>
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
      className={`p-6 border rounded-xl bg-white/10 backdrop-blur-md text-white border-[${gold}]`}
    >
      <div className="mb-4 flex justify-center">{icon}</div>
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-neutral-200">{text}</p>
    </div>
  );
}
