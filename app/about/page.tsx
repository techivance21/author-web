"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Star, CheckCircle2 } from "lucide-react";

type TimelineEntry = {
  year: string;
  title: string;
  description: string;
};

type Book = {
  title: string;
  img: string;
  href: string;
  description: string;
  rating?: number;
  comingSoon?: boolean;
};

type FAQ = {
  q: string;
  a: string;
};

const focusAreas: string[] = [
  "Research-driven, community-centered storytelling",
  "Bridging Sierra Leone and the Gullah Geechee Corridor",
  "Centering lineage, language, and living culture",
  "Writing that heals, convenes, and connects",
];

const riverOfReturn: TimelineEntry[] = [
  {
    year: "2006",
    title: "The First Meeting at Hilton Head",
    description:
      "Met Gullah scholar Emory Campbell on Hilton Head Island, SC \u2014 sparked his lifelong mission to bridge the Gullah Geechee and Sierra Leone communities.",
  },
  {
    year: "2006",
    title: "The First Libation \u2014 Beaufort, SC",
    description:
      "Received the first formal libation awarded by the Gullah Geechee community; a new cultural covenant between the Lowcountry and Sierra Leone.",
  },
  {
    year: "2006",
    title: "The Hare\u2019s Legacy \u2014 Newport, RI",
    description:
      "Poured libation at Newport\u2019s historic wharf for a ten-year-old girl taken from Bunce Island to Charleston in 1756 \u2014 reconnecting descendants across the Atlantic.",
  },
  {
    year: "2008",
    title: "Penn Center & the Key to the City",
    description:
      "Sierra Leoneans joined Heritage Days; hosted a Trans-Atlantic Red Rice luncheon; received the Key to the City of Beaufort.",
  },
  {
    year: "2008",
    title: "Bunce Island Exhibit \u2014 Kennesaw State",
    description:
      "One of the first U.S. museum collaborations linking Sierra Leone to Gullah Geechee heritage through research and artifacts.",
  },
  {
    year: "2009",
    title: "The Return Home",
    description:
      "Returned to Sierra Leone after twenty-six years abroad; established Fambul Tik ('Family Tree') to advance the cultural connection.",
  },
  {
    year: "2011",
    title: "The Fulbright Covenant",
    description:
      "Through a Fulbright exchange, hosted American professors and teachers for a month-long study program in Sierra Leone.",
  },
  {
    year: "2015",
    title: "The Homecoming in Beaufort",
    description:
      "Reunited at Heritage Days; shared foods, music, and storytelling deepened the sense of family.",
  },
  {
    year: "2016",
    title: "Across the Caribbean \u2014 Maroon Reconnections",
    description:
      "Led reconnection journeys to Jamaica, Trinidad, and Grenada, uniting officials and Maroon descendants.",
  },
  {
    year: "2019",
    title: "Gullah Roots Documentary",
    description:
      "PBS/SCETV film captured the return to Sierra Leone; seen by more than 260 million viewers worldwide.",
  },
  {
    year: "2022",
    title: "Echoes from the Atlantic Graveyard",
    description:
      "Remembrance ceremonies and libations along the coast honored those who perished in the Middle Passage.",
  },
  {
    year: "2024",
    title: "The Libation Chest",
    description:
      "Honored as 'Repairer of the Breach' and received the first Libation Chest for uniting families of the diaspora.",
  },
  {
    year: "2025",
    title: "A Coven of Heirs",
    description:
      "Keynote in Beaufort, SC \u2014 uniting landowners, cultural stewards, and descendants to protect heritage for future generations.",
  },
];

const books: Book[] = [
  {
    title: "Gullah Geechee Saga",
    img: "/book1.png",
    href: "/books",
    comingSoon: true,
    description:
      "A sweeping chronicle tracing ancestral lines, sacred rituals, and unbroken love between Sierra Leone and the Sea Islands.",
  },
  {
    title: "Gambozo's Storytelling",
    img: "/book2.png",
    href: "https://www.amazon.com/Gambozos-Storytelling-Through-Diaspora-Scavengers/dp/B0FP357D39",
    rating: 5,
    description:
      "An intimate portrait of the griots, song keepers, and farmers who steward Gullah Geechee language across generations.",
  },
  {
    title: "Diaspora Scavenger",
    img: "/book3.png",
    href: "/books/diaspora-scavenger",
    comingSoon: true,
    description:
      "The forthcoming volume that binds return journeys, archival discoveries, and collective healing into a covenant of memory.",
  },
];

const faqs: FAQ[] = [
  {
    q: "Who is Amadu Massally?",
    a: "Amadu Massally is a cultural bridge-builder, storyteller, and community leader whose work unites the African diaspora with authenticity and care. Rooted in Sierra Leone and bonded to the Gullah Geechee Corridor, his mission is to repair cultural fractures and reconnect families, traditions, and histories across continents.",
  },
  {
    q: "What is the Gullah Geechee Trilogy?",
    a: "Three books. One covenant of memory. A literary journey through lineage, language, and living culture across continents.",
  },
  {
    q: "Where can I read the books?",
    a: "Visit the book pages for available formats. Diaspora Scavenger launches soon.",
  },
  {
    q: "How can I collaborate with Amadu?",
    a: "Subscribe to Saga Speak, attend events, or reach out for collaboration.",
  },
];

function Stars({ value }: { value: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${value} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 text-[#0A2342] stroke-[#0A2342] ${
            i < value ? "fill-current" : "fill-transparent"
          }`}
        />
      ))}
    </div>
  );
}

function Disclosure({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition hover:border-[#0A2342]/40 hover:shadow-md">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-lg font-semibold leading-tight text-black">{question}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          className="text-2xl leading-none text-[#0A2342]"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="px-6 pb-6 text-neutral-600 leading-relaxed"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function AboutPage() {
  return (
    <main className="font-sans text-black">
      <section className="relative w-full overflow-hidden">
        <div className="relative min-h-[85svh] md:min-h-[90svh] lg:min-h-[100svh]">
          <Image
            src="/bg3.png"
            alt="Background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* soft black overlay for readability */}
          <div className="absolute inset-0 bg-black/45" />
          <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 pb-16 pt-[calc(var(--header-h,4rem)+1rem)] text-center text-white">
            <div className="max-w-4xl">
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-[clamp(1.9rem,6vw,3.75rem)] font-bold leading-tight drop-shadow-md"
              >
                Repairer of the Breach, Connector of Diasporas.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="mt-5 text-[clamp(1rem,2.8vw,1.125rem)] leading-relaxed text-white/90"
              >
                Amadu Massally is a cultural bridge-builder, storyteller, and community leader whose
                work unites the African diaspora with authenticity and care. Rooted in Sierra Leone
                and bonded to the Gullah Geechee Corridor, his mission is to repair cultural
                fractures and reconnect families, traditions, and histories across continents.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-6 text-[clamp(1.05rem,2.6vw,1.35rem)] font-medium text-white/90"
              >
                Author of the Gullah Geechee Trilogy — Three books. One covenant of memory.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              className="relative h-64 w-64 overflow-hidden rounded-3xl shadow-2xl ring-4 ring-[#0A2342]/10"
            >
              <Image
                src="/home-image.jpg"
                alt="Portrait of Amadu Massally"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-10 text-3xl font-bold text-black md:text-4xl"
            >
              Meet Amadu Massally
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-4 max-w-3xl text-neutral-700 md:text-lg"
            >
              {"Amadu writes with a documentarian's ear and a griot's cadence\u2014braiding memory, testimony, and meticulous research. His works in The Gullah Geechee Trilogy trace language, land, and lineage across the Atlantic, restoring names and narratives to families long separated by water and walls."}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-3 max-w-3xl text-neutral-700 md:text-lg"
            >
              He builds a covenant of remembrance that invites readers to join in the work of repair.
            </motion.p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {focusAreas.map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45 }}
                className="flex items-start gap-3 rounded-2xl bg-[#F6F8FC] p-5 text-left shadow-sm"
              >
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-[#0A2342]" />
                <p className="text-neutral-700 leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-10 text-center text-sm font-semibold uppercase tracking-[0.3em] text-[#0A2342]/80"
          >
            Recognized for narrative excellence, cultural stewardship, and community impact.
          </motion.p>
        </div>
      </section>

      <section className="bg-[#F6F8FC] py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="md:flex md:items-start md:justify-between md:gap-12">
            <div className="max-w-xl">
              <h3 className="text-3xl font-bold text-black md:text-4xl">The River of Return</h3>
              <p className="mt-4 text-neutral-700 md:text-lg">
                Each chapter of the river holds a crossing, a welcome, and a promise. Follow the
                milestones that shaped Amadu&rsquo;s covenantal storytelling.
              </p>
            </div>
            <div className="mt-10 w-full md:mt-0 md:max-w-2xl">
              <div className="relative pl-10 md:pl-14">
                <span
                  aria-hidden
                  className="absolute left-4 top-1 bottom-1 w-px bg-[#0A2342]/20 md:left-6"
                />
                {riverOfReturn.map((entry, index) => (
                  <motion.div
                    key={`${entry.year}-${entry.title}`}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="relative pb-10 last:pb-0"
                  >
                    <span
                      aria-hidden
                      className="absolute left-[-0.7rem] top-1.5 h-3 w-3 rounded-full border-2 border-white bg-[#0A2342] shadow-md md:left-[-0.55rem]"
                    />
                    <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:gap-4">
                      <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0A2342]/80">
                        {entry.year}
                      </span>
                      <h4 className="text-xl font-semibold text-black md:text-2xl">
                        {entry.title}
                      </h4>
                    </div>
                    <p className="mt-3 max-w-2xl text-neutral-700 leading-relaxed">
                      {entry.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-10 max-w-3xl text-center text-neutral-700 md:mx-auto md:text-lg"
          >
            {"Every step in this river of return reminds us that reconnection is not an ending\u2014it\u2019s an ongoing covenant between land, language, and lineage."}
          </motion.p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="text-3xl font-bold text-black md:text-4xl">The Gullah Geechee Trilogy</h3>
            <p className="mt-4 text-neutral-700 md:text-lg">
              {"Stories braided with scholarship and song\u2014moving readers from archival silence to a covenant of living memory."}
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {books.map((book) => (
              <motion.div
                key={book.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex h-full flex-col overflow-hidden rounded-3xl border border-black/[0.05] bg-white shadow-sm"
              >
                <div className="relative aspect-[4/5] w-full">
                  <Image src={book.img} alt={book.title} fill />
                </div>
                <div className="flex flex-col gap-3 p-6">
                  <h4 className="text-xl font-semibold text-black">{book.title}</h4>
                  <p className="text-sm text-neutral-600 leading-relaxed">{book.description}</p>
                  {book.comingSoon ? (
                    <>
                      <p className="text-sm font-medium italic text-neutral-500">
                        Forthcoming release &mdash; join the list for launch news.
                      </p>
                      <span className="mt-2 inline-flex items-center justify-center rounded-full bg-neutral-200 px-5 py-2 text-sm font-semibold text-neutral-500">
                        Coming Soon
                      </span>
                    </>
                  ) : (
                    <>
                      <div className="flex items-center gap-2 text-black">
                        <Stars value={book.rating ?? 0} />
                        <span className="text-sm font-medium">{(book.rating ?? 0).toFixed(1)}</span>
                      </div>
                      <Link
                        href={book.href}
                        className="mt-2 inline-flex items-center justify-center rounded-full bg-[#0A2342] px-5 py-2 text-sm font-semibold text-white transition hover:bg-white hover:text-[#0A2342] hover:outline hover:outline-2 hover:outline-[#0A2342]"
                      >
                        Explore the book
                      </Link>
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F6F8FC] py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <h3 className="text-center text-3xl font-bold text-black md:text-4xl">
            Frequently Asked Questions
          </h3>
          <p className="mt-4 text-center text-neutral-600 md:text-lg">
            Thoughtfully curated responses to the questions most often asked by readers, organizers,
            and cultural partners.
          </p>
          <div className="mt-12 space-y-4">
            {faqs.map((item) => (
              <Disclosure key={item.q} question={item.q} answer={item.a} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0A2342] py-12">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-center text-base font-semibold text-white md:text-lg">
            Re-rooted. Remembered. Reassembled.
          </p>
          <p className="mt-2 text-center text-sm text-white/80 md:text-base">
            Let this be the beginning of the conversation, not the end.
          </p>
        </div>
      </section>
    </main>
  );
}
