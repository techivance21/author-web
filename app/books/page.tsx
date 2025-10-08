"use client";

import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const BLUE = "#0A2342";
const AMAZON_URL =
  "https://www.amazon.com/Gambozos-Storytelling-Through-Diaspora-Scavengers/dp/B0FP357D39";

/* Sleek blue underline on hover */
function HeadingHover({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={`relative inline-block group ${className}`}>
      <span className="transition-all duration-300 group-hover:tracking-wide">
        {children}
      </span>
      <span className="pointer-events-none absolute left-0 -bottom-1 h-[2px] w-0 bg-[#0A2342] transition-all duration-300 group-hover:w-full" />
    </span>
  );
}

/* Button that can link */
function ThemeButton({
  href,
  children,
  className = "",
  external = false,
}: {
  href?: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}) {
  const base =
    `inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium
     bg-[${BLUE}] text-white border border-transparent
     hover:bg-white hover:text-[${BLUE}] hover:border-[${BLUE}]
     transition-colors`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${base} ${className}`}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={`${base} ${className}`}>
        {children}
      </Link>
    );
  }
  return <button className={`${base} ${className}`}>{children}</button>;
}

export default function BooksPage() {
  return (
    <main className="bg-white text-black font-sans">
      {/* ====================== HERO ====================== */}
      <section className="relative h-[58vh] md:h-[64vh] flex items-center text-center">
        <Image
          src="/author3.png"
          alt="Hero background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            <HeadingHover>Cultural Journeys Through Pages</HeadingHover>
          </h1>
          <p className="text-white/90 text-base md:text-lg leading-relaxed">
            Discover vibrant tales and heritage treasures that unify past and
            present, nurturing connections with the African Diaspora.
          </p>
        </div>
      </section>

      {/* ====================== FEATURED BOOKS ====================== */}
      <section className="max-w-6xl mx-auto py-16 md:py-20 px-6 space-y-16">
        {/* Book 1 — text LEFT, image RIGHT (smaller cover) */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              <HeadingHover>
                The Gullah Geechee Saga: Through African Eyes
              </HeadingHover>
            </h2>
            <p className="font-medium text-neutral-800 mb-2">
              A People Dispersed. A Culture Reassembled. A Story Returned.
            </p>
            <p className="text-neutral-700 leading-relaxed mb-5">
              More than a history—it’s a reawakening. Trace the journey from
              the rice fields of Sierra Leone to the praise houses of the Sea
              Islands: language braided, kin reassembled, and covenant
              remembered.
            </p>
            <ThemeButton href={AMAZON_URL} external>
              Learn More
            </ThemeButton>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
            className="flex justify-center"
          >
            <Image
              src="/book1.png"
              alt="The Gullah Geechee Saga: Through African Eyes"
              width={220}
              height={310}
              className="rounded-xl shadow-[0_12px_30px_rgba(0,0,0,0.15)] object-contain"
            />
          </motion.div>
        </div>

        {/* Book 2 — image LEFT, text RIGHT (smaller cover) */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
            className="flex justify-center"
          >
            <Image
              src="/book2.png"
              alt="Gambozo’s Storytelling"
              width={220}
              height={310}
              className="rounded-xl shadow-[0_12px_30px_rgba(0,0,0,0.15)] object-contain"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              <HeadingHover>Gambozo’s Storytelling</HeadingHover>
            </h2>
            <p className="font-medium text-neutral-800 mb-2">
              The hush became a rhythm; the rhythm became a guide.
            </p>
            <p className="text-neutral-700 leading-relaxed mb-5">
              Gather close to the griot fire. Through trickster wit, ring
              shouts, and coded spirituals, Gambozo carries memory across
              oceans—speaking in the voice of those who refused to be erased.
            </p>
            <ThemeButton href={AMAZON_URL} external>
              Learn More
            </ThemeButton>
          </motion.div>
        </div>

        {/* Book 3 — image RIGHT, text LEFT (smaller cover) */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
            className="order-2 md:order-1"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              <HeadingHover>Diaspora Scavenger</HeadingHover>
            </h2>
            <p className="font-medium text-neutral-800 mb-2">
              Letters, Ledgers &amp; Ghost Routes{" "}
              <span className="ml-2 rounded-full border border-[#0A2342] px-2 py-0.5 text-xs text-[#0A2342]">
                Coming Soon
              </span>
            </p>
            <p className="text-neutral-700 leading-relaxed mb-5">
              A field notebook for the scattered—tracing names lost to
              manifests and whispers. Follow paper trails, praise-house
              testimony, and remembered crossings to redraw the routes home.
            </p>
            <ThemeButton href="/contact">Notify Me</ThemeButton>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
            className="flex justify-center order-1 md:order-2"
          >
            <Image
              src="/book3.png"
              alt="Diaspora Scavenger — Coming Soon"
              width={220}
              height={310}
              className="rounded-xl shadow-[0_12px_30px_rgba(0,0,0,0.15)] object-contain"
            />
          </motion.div>
        </div>
      </section>

      {/* ====================== ABOUT + WHO IT'S FOR (bg3 + overlay) ====================== */}
      <section className="relative py-16 md:py-20">
        <Image
          src="/bg3.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative max-w-6xl mx-auto px-6 space-y-12">
          {/* About with AUTHOR IMAGE (author2.png), trimmed height, aligned with text */}
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div className="text-white space-y-3">
              <h2 className="text-2xl md:text-3xl font-bold">
                <HeadingHover>About the Author</HeadingHover>
              </h2>
              <h3 className="text-lg font-semibold">Amadu Massally</h3>
              <p className="text-white/90">
                Cultural bridge-builder and steward of return. Rooted in Sierra
                Leone with deep ties across the Gullah Geechee corridor, Amadu
                works to repair fractures and reconnect families, traditions,
                and memory across oceans.
              </p>
            </div>

            {/* Author Photo — smaller height to align with text block */}
            <div className="rounded-2xl p-3 bg-white/10 backdrop-blur-md border border-white/25 w-full max-w-sm mx-auto md:mx-0">
              <div className="relative w-full h-[320px] md:h-[360px] overflow-hidden rounded-xl">
                <Image
                  src="/author2.png"
                  alt="Amadu Massally"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Who is this book for? glass cards */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              <HeadingHover>Who Is This Book For?</HeadingHover>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
              {[
                "For the passionate teacher who widens the lens of history.",
                "For the student who senses the past is not a stranger.",
                "For the descendant tracing memory through blood, soil, and syllable.",
                "For the elder who knows stories live beyond pages.",
                "For the reader who understands this is not just history — it is return.",
              ].map((t, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl p-5 text-white/95 bg-white/10 backdrop-blur-md border border-white/25 hover:bg-white/14 transition"
                >
                  <p className="text-sm leading-relaxed">{t}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Callout copy */}
          <div className="text-center text-white max-w-3xl mx-auto">
            <h3 className="text-xl md:text-2xl font-semibold">
              <HeadingHover>
                This is not just a book. It is a return.
              </HeadingHover>
            </h3>
            <p className="mt-3 text-white/90">
              <span className="font-medium">
                The Gullah Geechee Saga: Through African Eyes
              </span>{" "}
              is available now in print and digital formats. More than a
              historical account, it is a bridge—reconnecting descendants,
              reshaping education, and restoring memory. Order your copy and
              trace the unbroken thread from the rice fields of Sierra Leone to
              the praise houses of the Sea Islands, and back again.
            </p>
          </div>

          {/* Three book cards UNDER the callout (glass, on same bg). Smaller covers, object-contain */}
          <div className="grid sm:grid-cols-3 gap-6 pt-2">
            {[
              { src: "/book1.png", line: "Saga: testimony braided with return." },
              { src: "/book2.png", line: "Gambozo: fables that carry maps." },
              { src: "/book3.png", line: "Scavenger: ledgers that point home." },
            ].map((b, i) => (
              <div
                key={i}
                className="rounded-2xl p-4 bg-white/10 backdrop-blur-md border border-white/25 text-white"
              >
                <div className="relative w-full aspect-[3/4] overflow-hidden rounded-lg bg-black/20">
                  <Image
                    src={b.src}
                    alt=""
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <p className="text-sm mt-3">{b.line}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== PRAISE (blue accents) ====================== */}
      <section className="bg-[#f4f4e7] py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12 inline-block">
            <HeadingHover>Praise for the Saga</HeadingHover>
          </h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {[
              {
                place: "Charleston, SC",
                review: "This book doesn’t just speak — it listens.",
              },
              {
                place: "St. Helena Island",
                review:
                  "As a Gullah descendant, I didn’t just read this book. I walked inside it.",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-md p-8 text-left hover:shadow-lg transition"
              >
                <h3 className="font-semibold text-lg text-black mb-2">
                  {t.place}
                </h3>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={18} fill={BLUE} color={BLUE} />
                  ))}
                </div>
                <p className="text-5xl leading-none mb-3 text-[#0A2342]">“</p>
                <p className="text-neutral-800 text-lg leading-relaxed">
                  {t.review}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
