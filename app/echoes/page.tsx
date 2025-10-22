"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { motion, type Variants } from "framer-motion";

/* ---------------------------------
   Theme helpers / bits
---------------------------------- */

const BLUE = "#0A2342";

function HeadingHover({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={`relative inline-block group ${className}`}>
      <span className="transition-all duration-300 group-hover:tracking-wide group-hover:drop-shadow-[0_0_8px_rgba(10,35,66,0.35)]">
        {children}
      </span>
      <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 -bottom-1 h-[2px] w-0 bg-[#0A2342] transition-all duration-300 group-hover:w-14" />
    </span>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium bg-white/50 backdrop-blur-[2px] border border-white/40 text-black">
      {children}
    </span>
  );
}

/* ---------------------------------
   Data
---------------------------------- */

type EchoCard = {
  img: string;
  title?: string;
  body?: string;
};

const ECHOES: Readonly<EchoCard[]> = [
  {
    img: "/echoes1.png",
    body:
      "All of these people you see were landing on African soil for the first time. It happened to be in Sierra Leone; a small country in West Africa with strong links to the Gullah Geechees. December 28th, 2019 about 50-odd African Americans visited.",
  },
  {
    img: "/echoes2.png",
    body:
      "They are descendants of Africans who were taken from West Africa and other parts for their rice-growing skills to work on plantations for the new colonists in the North American Colonies. Some of them were visiting Africa for the very first time.",
  },
  {
    img: "/echoes3.png",
    body:
      'On a trip that was based on slavery (or the slave trade), resistance (to the trade), and abolition (freedom from slavery), the first place we visited was Bunce Island. "A place where history sleeps" as some have cited.',
  },
  {
    img: "/echoes4.png",
    body:
      "A renowned Gullah Geechee Traveling Theater, led by Aunt Pearlie Sue, had an opportunity to visit Bunce Island, where some of their ancestors may have come from. The Director of the film Gullah Roots, Betsy Newman, is also seen in the photo.",
  },
  {
    img: "/echoes5.png",
    body:
      "We took our guests to a place called Old Yagala. A mesa where Africans protected themselves from human invaders. Who were also Africans!",
  },
  {
    img: "/echoes6.png",
    body:
      'Ron Daise was adopted as a citizen of Rogbonko Mathaka. This is the only place where the "shuku blay" or sweetgrass baskets are made. We brought with us a 7-generation sweetgrass basket maker from Mt. Pleasant, SC to this town. See their page.',
  },
  {
    img: "/echoes7.png",
    body:
      "Amadu Massally narrated what the trip entailed. A visit that illustrated Slavery, Resistance and Abolition. Plus some Gullah Geechee stops in the sweetgrass basket village and the village of the Mende song.",
  },
  {
    img: "/echoes8.png",
    body:
      "The Gullah Geechee visitors taught their culture to Sierra Leoneans in plays, stories and songs. It was a thing to see for their hosts.",
  },
  {
    img: "/echoes9.png",
    body:
      "In a luncheon prepared and hosted by the Mayor of Freetown, our visitors were able to try a variety of dishes; including rice ones in a rich cultural environment; with stories, performances and foodways.",
  },
  {
    img: "/echoes10.png",
    body:
      "Seems like the Mayor of Freetown and Gullah leader, Anita Singleton-Prather had a heart-to-heart talk? Priceless!",
  },
  {
    img: "/echoes11.png",
    body:
      "And then I hung out with a 'Gongoli' in Kenema. It is a Mende culture masquerade. Many of the folks on our tour had tested as Mendes via their DNA. So we visited Mende culture and tradition.",
  },
  {
    img: "/echoes12.png",
    body:
      "We visited Old Fourah Bay College. Founded in 1827, and with the first Principal being a Gullah Geechee from Charleston, SC, it was fitting to visit the first tertiary institution in sub-Saharan Africa.",
  },
  {
    img: "/echoes13.png",
    body:
      "The Rice Feast Festival on December 29 saw more than 20 varieties of how Sierra Leoneans prepare and consume rice.",
  },
];

/* ---------------------------------
   Motion Variants
---------------------------------- */

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.05 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 18, filter: "blur(2px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.45, ease: [0.22, 0.61, 0.36, 1] },
  },
  hover: { y: -4, transition: { duration: 0.2 } },
};

/* ---------------------------------
   Page
---------------------------------- */

export default function EchoesPage() {
  const [showAll, setShowAll] = useState<boolean>(false);
  const items = useMemo(() => (showAll ? ECHOES : ECHOES.slice(0, 2)), [showAll]);

  return (
    <main className="font-sans text-black" id="top">
      {/* ---------- HERO + INTRO + NOTES (bg3.png single background) ---------- */}
      <section className="relative w-full overflow-hidden">
        <div className="relative h-auto min-h-[90vh] flex flex-col justify-center">
          <Image
            src="/bg3.png"
            alt="Echoes hero background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/50" />

          <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
            {/* Heading + tagline */}
            <h1 className="text-3xl md:text-5xl font-bold text-white">
              <HeadingHover>Echoes From The Atlantic Graveyard</HeadingHover>
            </h1>
            <p className="mt-4 text-white/90 max-w-3xl">
              Journey through timeless tales connecting continents, celebrating resilience,
              and honoring the rich legacy of the Diaspora.
            </p>

            {/* Glassmorphic intro boxes */}
            <div className="mt-12 grid md:grid-cols-3 gap-10">
              <div className="md:col-span-2">
                <div className="rounded-2xl border border-white/20 bg-white/90 backdrop-blur p-5 md:p-7">
                  <p className="text-neutral-800">
                    Echoes gathers scenes, faces, and field-notes from journeys between Sierra Leone
                    and the Gullah Geechee corridor—moments of arrival, remembrance, and return.
                    Every card is a small archive: an image, a line, a pulse of memory.
                  </p>
                </div>
              </div>
           </div>
          </div>
        </div>
      </section>

      {/* ---------- CARD GRID ---------- */}
      <section className="relative py-16 md:py-20">
        <div className="absolute inset-0 -z-10">
          <Image src="/bg3.png" alt="" fill className="object-cover object-center" />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {items.map((card, idx) => {
              const isLast = showAll && idx === ECHOES.length - 1;
              const centerLast = isLast ? "lg:col-start-2" : "";

              return (
                <motion.article
                  key={card.img}
                  variants={cardVariants}
                  whileHover="hover"
                  className={`relative ${centerLast} rounded-3xl overflow-hidden flex flex-col border border-white/40 bg-white/35 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.12)]`}
                >
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/35 to-transparent" />

                  <div className="relative w-full aspect-[16/10]">
                    <Image src={card.img} alt="Echo card" fill className="object-cover" />
                    <div
                      className="absolute right-4 top-4 h-2.5 w-2.5 rounded-full shadow"
                      style={{ background: BLUE }}
                    />
                  </div>

                  {(card.title || card.body) && (
                    <div className="relative px-6 py-5 space-y-2">
                      {card.title ? (
                        <h4 className="text-lg font-semibold text-black">
                          <HeadingHover>{card.title}</HeadingHover>
                        </h4>
                      ) : null}
                      {card.body ? (
                        <p className="text-sm text-neutral-800 leading-relaxed">{card.body}</p>
                      ) : null}
                    </div>
                  )}
                </motion.article>
              );
            })}
          </motion.div>

          {/* Read more button */}
          <div className="mt-10 flex justify-center">
            {!showAll ? (
              <button
                onClick={() => setShowAll(true)}
                className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium transition-colors border border-transparent bg-[#0A2342] text-white hover:bg-white hover:text-[#0A2342] hover:border-[#0A2342]"
              >
                Read more
              </button>
            ) : (
              <Link
                href="#top"
                onClick={(e) => {
                  e.preventDefault();
                  setShowAll(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium transition-colors border border-transparent bg-[#0A2342] text-white hover:bg-white hover:text-[#0A2342] hover:border-[#0A2342]"
              >
                Show less
              </Link>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
