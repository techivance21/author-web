"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, BookOpen, Users, GraduationCap, Sparkles, Star } from "lucide-react";

/* ===== Theme helpers ===== */
const BLUE = "#0A2342";

function HeadingHover({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`relative inline-block group ${className}`}>
      <span className="transition-all duration-300 group-hover:tracking-wide">
        {children}
      </span>
      <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 -bottom-1 h-[2px] w-0 bg-[#0A2342] transition-all duration-300 group-hover:w-16" />
    </span>
  );
}

function CtaButton({
  href = "/contact",
  children = "Contact Us",
}: {
  href?: string;
  children?: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium
                 bg-[#0A2342] text-white border border-transparent
                 hover:bg-white hover:text-[#0A2342] hover:border-[#0A2342]
                 transition-colors"
    >
      {children}
      <ArrowRight size={16} />
    </Link>
  );
}

/* ===== Page ===== */
export default function EventsPage() {
  return (
    <main className="font-sans text-black">
      {/* ---------- HERO ---------- */}
      <section className="relative w-full overflow-hidden">
        <div className="relative h-[56vh] md:h-[64vh]">
          <Image
            src="/bg1.png"
            alt="Events background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/45" />
          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-6xl mx-auto px-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-5xl font-bold text-white"
              >
                <HeadingHover>Events &amp; Speaking</HeadingHover>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mt-4 text-white/90 max-w-3xl"
              >
                Bring the <span className="font-semibold">Gullah Geechee Saga</span> to your classroom,
                stage, or community gathering. Storytelling sessions, keynotes, and interactive
                workshops that move from hush to rhythm—connecting Sierra Leone to the Sea Islands.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-6"
              >
                <CtaButton>Request a Date</CtaButton>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

     {/* ---------- Alternating story rows (pure white bg) ---------- */}
<section className="bg-white py-16 md:py-24">
  <div className="max-w-6xl mx-auto px-6 space-y-16 md:space-y-24">
    {/* Row 1 */}
    <div className="grid md:grid-cols-2 gap-10 items-center">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
      >
        <Image src="/author2.png" alt="Speaking" fill className="object-cover" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <h2 className="text-2xl md:text-3xl font-bold">
          <HeadingHover>Invite the Author — Share the Story</HeadingHover>
        </h2>
        <p className="text-neutral-700">
          Keynotes, storytelling, panels, and educator workshops—both in-person and virtual.
          With lived experience across Sierra Leone and deep ties to the Gullah Geechee corridor,
          Amadu brings testimony, research, and ancestral memory to each engagement.
          This is not a lecture. It is a return.
        </p>
        <CtaButton>Connect with Contact</CtaButton>
      </motion.div>
    </div>

    {/* Row 2 - flipped */}
    <div className="grid md:grid-cols-2 gap-10 items-center">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="order-2 md:order-1 space-y-4"
      >
        <h2 className="text-2xl md:text-3xl font-bold">
          <HeadingHover>Heritage Journeys</HeadingHover>
        </h2>
        <p className="text-neutral-700">
          These are not tours. They are returns. From Sierra Leone to the Sea Islands, journey
          to sacred sites where memory was planted and culture refused to die. Walk praise-house
          paths, hear ring-shout history, and meet living tradition bearers along the corridor.
        </p>
        <CtaButton>Plan a Journey</CtaButton>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="order-1 md:order-2 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
      >
        <Image src="/event1.png" alt="Heritage Journeys" fill className="object-cover" />
      </motion.div>
    </div>

    {/* Row 3 */}
    <div className="grid md:grid-cols-2 gap-10 items-center">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
      >
        <Image src="/blog3.png" alt="Community Sessions" fill className="object-cover" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <h2 className="text-2xl md:text-3xl font-bold">
          <HeadingHover>Community Sessions &amp; Story Circles</HeadingHover>
        </h2>
        <p className="text-neutral-700">
          Guided conversations that braid testimony, language, and song. Perfect for libraries,
          museums, festivals, and faith spaces seeking participatory learning grounded in care.
        </p>
        <CtaButton>Start a Conversation</CtaButton>
      </motion.div>
    </div>
  </div>
</section>

      {/* ---------- Cultural Education & Consulting Services ---------- */}
      <section className="relative py-16 md:py-24">
        <Image src="/bg1.png" alt="" fill className="object-cover object-center -z-10" />
        <div className="absolute inset-0 bg-black/40 -z-10" />
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              <HeadingHover>Cultural Education &amp; Consulting</HeadingHover>
            </h3>
            <p className="mt-3 text-white/90">
              For schools, arts organizations, and civic partners—custom programs rooted in ethical
              research, community partnership, and practical outcomes.
            </p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <GraduationCap size={20} color={BLUE} />,
                title: "Curriculum Design",
                desc: "Syllabus & modules on Gullah Geechee history, language, and arts.",
              },
              {
                icon: <Users size={20} color={BLUE} />,
                title: "Workshops & PD",
                desc: "Educator training, facilitation, and community engagement labs.",
              },
              {
                icon: <BookOpen size={20} color={BLUE} />,
                title: "Archive & Oral History",
                desc: "Ethical collection, naming projects, and story-gathering.",
              },
              {
                icon: <MapPin size={20} color={BLUE} />,
                title: "Journey Planning",
                desc: "Site research and partnerships along the corridor & in Sierra Leone.",
              },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/25 p-5 text-white hover:bg-white/15 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="h-9 w-9 rounded-full bg-white text-[#0A2342] grid place-items-center">
                    {s.icon}
                  </div>
                  <Sparkles size={18} className="text-white/70" />
                </div>
                <h4 className="mt-4 text-lg font-semibold">
                  <HeadingHover>{s.title}</HeadingHover>
                </h4>
                <p className="mt-2 text-white/85 text-sm">{s.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <CtaButton>Design a Program</CtaButton>
          </div>
        </div>
      </section>

      {/* ---------- Praise for the Saga (5 reviews) ---------- */}
      <section className="relative py-16 md:py-24">
        <Image src="/author3.png" alt="" fill className="object-cover object-center -z-10" />
        <div className="absolute inset-0 bg-black/35 -z-10" />

        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              <HeadingHover>Praise for the Saga</HeadingHover>
            </h3>
          </div>

          {/* 2 x 2 grid + centered last */}
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {REVIEWS.slice(0, 4).map((r, idx) => (
              <ReviewCard key={idx} {...r} />
            ))}
          </div>

          <div className="mt-6 flex justify-center">
            <div className="w-full md:w-1/2">
              <ReviewCard {...REVIEWS[4]} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ===== Reviews ===== */
type Review = { location: string; quote: string; stars?: number };

const REVIEWS: Review[] = [
  {
    location: "Charleston, SC",
    quote:
      "Powerful, generous, and grounded. Our students left with language for what their ancestors survived—and created.",
    stars: 5,
  },
  {
    location: "St. Helena Island",
    quote:
      "This wasn’t a talk. It was a homecoming. The ring shout history segment moved the whole room.",
    stars: 5,
  },
  {
    location: "Savannah, GA",
    quote:
      "Rigorous and tender. The research is meticulous and the storytelling carries it straight to the heart.",
    stars: 5,
  },
  {
    location: "Beaufort, SC",
    quote:
      "Amadu connects Sierra Leone to the Lowcountry with care. It felt like doors opening both ways.",
    stars: 5,
  },
  {
    location: "Georgetown, SC",
    quote:
      "We felt seen. The workshop balanced truth-telling with joy and gave us tools to keep going.",
    stars: 5,
  },
];

function ReviewCard({ location, quote, stars = 5 }: Review) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="rounded-3xl bg-white/90 backdrop-blur border border-black/10 p-6 shadow-sm"
    >
      <div className="flex items-center justify-between">
        <h4 className="text-lg font-semibold text-black">
          <HeadingHover>{location}</HeadingHover>
        </h4>
        <div className="flex gap-1 text-[#0A2342]">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={16} className={i < stars ? "fill-current" : "fill-transparent"} />
          ))}
        </div>
      </div>
      <p className="mt-3 text-neutral-800">{quote}</p>
    </motion.div>
  );
}
