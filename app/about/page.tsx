"use client";

import Image from "next/image";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  useInView,
  useMotionValue,
  animate,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { BookOpen, Award, Smile, Star, CheckCircle2 } from "lucide-react";
import AuthorSection from "../components/AuthorSection"; // adjust path if needed

/* ============== helpers ============== */
function Stars({ value }: { value: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${value} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`h-4 w-4 text-[#0A2342] stroke-[#0A2342] ${i < value ? "fill-current" : "fill-transparent"}`} />
      ))}
    </div>
  );
}

/* Animated counter that starts when visible (fixed: no more “0+”) */
function CountUp({
  to,
  suffix = "+",
  duration = 1.6,
}: {
  to: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const mv = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const unsub = mv.on("change", (latest) => setDisplay(Math.floor(latest)));
    if (isInView) {
      const controls = animate(mv, to, { duration, ease: "easeOut" });
      return () => {
        controls.stop();
        unsub();
      };
    }
    return () => unsub();
  }, [isInView, mv, to, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
}

function Disclosure({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-[#F8FAFF]">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full text-left px-5 py-4 md:py-5 flex items-center justify-between gap-6"
        aria-expanded={open}
      >
        <span className="font-medium text-black">{question}</span>
        <motion.span animate={{ rotate: open ? 45 : 0 }} className="text-2xl leading-none text-black">
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
            className="px-5 pb-5 text-neutral-700"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ============== data ============== */
const books = [
  { title: "Gullah Geechee Saga", img: "/book1.png", rating: 5, href: "/books/gullah-geechee-saga" },
  { title: "Gambozo's Storytelling", img: "/book2.png", rating: 5, href: "/books/gambozos-storytelling" },
  { title: "Diaspora Scavenger", img: "/book3.png", rating: 0, href: "/books/diaspora-scavenger", comingSoon: true as const },
];

const faqs = [
  { q: "Who is Amadu Massally?", a: "A cultural bridge-builder, storyteller, and community leader connecting Africa and its diasporas—especially across the Gullah Geechee corridor." },
  { q: "What is the Gullah Geechee Trilogy?", a: "Three books. One covenant of memory. A literary journey through lineage, language, and living culture across continents." },
  { q: "Where can I find the books?", a: "Visit the book pages linked below each card for formats and availability. The third title is coming soon." },
  { q: "How can I get involved?", a: "Subscribe to Saga Speak, attend events, or reach out on the contact page to collaborate." },
];

/* ============== page ============== */
export default function AboutPage() {
  return (
    <main className="font-sans text-black">
      {/* ===== HERO with bg3.png + black overlay + live counters ===== */}
      <section className="relative w-full overflow-hidden">
        <div className="relative h-[68vh] md:h-[72vh]">
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
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="max-w-4xl px-6 text-center">
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-5xl font-bold text-white drop-shadow-md"
              >
                Amadu Massally
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="mt-3 text-lg md:text-xl text-white/90 italic"
              >
                “Repairer of the breach, connector of diasporas.”
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-5 text-base md:text-lg text-white/90 leading-relaxed"
              >
                Amadu Massally is a cultural bridge-builder, storyteller, and community leader whose
                work unites the African diaspora with authenticity and care. With roots in Sierra
                Leone and strong relationships across the Gullah Geechee corridor, he has dedicated
                his life to repairing cultural fractures and reconnecting families, traditions, and
                histories across continents.
              </motion.p>
            </div>
          </div>
        </div>

        {/* counters band (blue background, white text) */}
        <div className="bg-[#0A2342] text-white py-10 md:py-14">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center gap-2">
              <span className="p-3 rounded-full bg-white/10"><BookOpen className="h-7 w-7" /></span>
              <p className="text-4xl md:text-5xl font-bold">
                <CountUp to={76} />
              </p>
              <p className="text-white/85">Books Published</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="p-3 rounded-full bg-white/10"><Award className="h-7 w-7" /></span>
              <p className="text-4xl md:text-5xl font-bold">
                <CountUp to={47} />
              </p>
              <p className="text-white/85">Awards Recognitions</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="p-3 rounded-full bg-white/10"><Smile className="h-7 w-7" /></span>
              <p className="text-4xl md:text-5xl font-bold">
                <CountUp to={100} />
              </p>
              <p className="text-white/85">Happy Readers</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT THE AUTHOR (black/white text; blue only for accents) ===== */}
      <section className="relative bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black">Introduce</h2>
            <h3 className="mt-2 text-2xl md:text-3xl font-extrabold text-black">Amadu Massally</h3>
            <p className="mt-5 text-neutral-700 leading-relaxed">
              Amadu writes with a documentarian’s ear and a griot’s cadence—braiding memory,
              testimony, and meticulous research. His works in the <em>Gullah Geechee Trilogy</em>
              trace language, land, and lineage across the Atlantic, restoring names and narratives
              to families long separated by water and walls. Page by page, he builds a covenant of
              remembrance that invites readers to join the work of repair.
            </p>

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {[
                "Research-driven, community-centered storytelling",
                "Focus on lineage, language, and living culture",
                "Bridges Sierra Leone and the Gullah Geechee corridor",
                "Writing that heals, convenes, and connects",
              ].map((t) => (
                <div key={t} className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#0A2342]" />
                  <span className="text-neutral-700">{t}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h4 className="text-xl font-semibold text-black">Our Medals:</h4>
              <p className="mt-2 text-neutral-700">
                Recognition for narrative excellence, cultural stewardship, and community impact.
              </p>
              <div className="mt-5 grid grid-cols-3 gap-6 items-center">
                <div className="relative h-20">
                  <Image src="/medal1.png" alt="Medal 1" fill className="object-contain" />
                </div>
                <div className="relative h-20">
                  <Image src="/medal2.png" alt="Medal 2" fill className="object-contain" />
                </div>
                <div className="relative h-20">
                  <Image src="/medal3.png" alt="Medal 3" fill className="object-contain" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Premium author image with glow (accent uses blue softly) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] w-full max-w-[520px] mx-auto">
              <Image
                src="/author2.png"
                alt="Amadu Massally"
                fill
                priority
                className="object-cover rounded-2xl shadow-2xl"
              />
              <motion.div
                aria-hidden
                className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#0A2342]/20 to-transparent blur-2xl"
                animate={{ opacity: [0.35, 0.75, 0.35] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== BOOKS / TRILOGY ===== */}
      <section className="bg-[#F6F8FC] py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-black">Books Written to Perfection</h3>
            <p className="mt-3 text-neutral-700">
              <span className="font-semibold text-black">The Gullah Geechee Trilogy</span> — Three books. One covenant of memory.
            </p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {books.map((b) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl shadow-sm border border-black/[0.06] overflow-hidden flex flex-col"
              >
                <div className="relative w-full aspect-[4/5]">
                  <Image src={b.img} alt={b.title} fill className="object-cover" />
                </div>
                <div className="p-5 flex flex-col gap-3">
                  <h4 className="text-xl font-semibold text-black">{b.title}</h4>

                  {"comingSoon" in b && b.comingSoon ? (
                    <p className="text-sm text-neutral-600 italic">Rating coming soon</p>
                  ) : (
                    <div className="flex items-center gap-2 text-black">
                      <Stars value={b.rating} />
                      <span className="text-sm font-medium">5.0</span>
                    </div>
                  )}

                  <Link
                    href={b.href}
                    className={`mt-2 inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-medium
                    ${"comingSoon" in b && b.comingSoon
                        ? "bg-gray-200 text-gray-600 cursor-not-allowed"
                        : "bg-[#0A2342] text-white border-transparent hover:bg-white hover:text-[#0A2342] hover:border-[#0A2342] hover:outline-[#0A2342]"}
                    transition-colors`}
                    aria-disabled={"comingSoon" in b && b.comingSoon}
                    tabIndex={"comingSoon" in b && b.comingSoon ? -1 : 0}
                  >
                    {"comingSoon" in b && b.comingSoon ? "Coming Soon" : "Learn More"}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== your existing section & FAQ ===== */}
      <AuthorSection />

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-black">General Questions</h3>
          <div className="mt-10 divide-y divide-neutral-200 rounded-2xl border border-neutral-200 overflow-hidden">
            {faqs.map((f) => (
              <Disclosure key={f.q} question={f.q} answer={f.a} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
