"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Folder, ChevronDown } from "lucide-react";
import Link from "next/link";

/* -------------------------
   Theme helpers / bits
------------------------- */

const BLUE = "#0A2342";

function HeadingHover({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  // sleek blue underline + subtle glow + letter-spacing on hover
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
  // glassy chip
  return (
    <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium
                     bg-white/50 backdrop-blur-[2px] border border-white/40 text-black">
      {children}
    </span>
  );
}

/* 2–4 line clamped paragraph (no Tailwind plugin required) */
function ClampText({ text, lines }: { text: string; lines: 2 | 4 }) {
  return (
    <p
      className="text-neutral-800"
      style={{
        display: "-webkit-box",
        WebkitLineClamp: lines,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
      }}
    >
      {text}
    </p>
  );
}

/* -------------------------
   Blog data
------------------------- */

type Post = {
  id: number;
  title: string;
  date: string; // "May 19, 2023"
  category: string;
  image: string;
  snippet2: string; // 2-line version
  snippet4: string; // 4-line version
};

const POSTS: Post[] = [
  {
    id: 1,
    title: "From Hush to Rhythm",
    date: "May 19, 2023",
    category: "Culture & Memory",
    image: "/blog1.png",
    snippet2:
      "The hush wasn’t emptiness—it was a shelter. What they meant as silence became a living rhythm.",
    snippet4:
      "The hush wasn’t emptiness—it was a shelter. What they meant as silence became a living rhythm that guarded names, songs, and courage until it was safe to rise again.",
  },
  {
    id: 2,
    title: "Language Isn’t Broken—It’s Braided",
    date: "Jun 27, 2023",
    category: "Language & Music",
    image: "/blog2.png",
    snippet2:
      "Gullah is a braid: English twined with Mende, Vai, and Kpelle. It’s a memory map, not a mistake.",
    snippet4:
      "Gullah is a braid: English twined with Mende, Vai, and Kpelle. A memory map, not a mistake—our tongue carries routes home when the old maps were burned.",
  },
  {
    id: 3,
    title: "A Song Carries Farther Than a Scream",
    date: "Jul 12, 2023",
    category: "Language & Music",
    image: "/blog3.png",
    snippet2:
      "When drums were banned, the body kept time. Spirituals moved messages farther than a shout.",
    snippet4:
      "When drums were banned, the body kept time. Spirituals moved messages farther than a shout—claps, stomps, and call-and-response stitching hope into the night.",
  },
  {
    id: 4,
    title: "Ring Shout: Rhythm, Prayer, Defiance",
    date: "Aug 04, 2023",
    category: "Ritual & Faith",
    image: "/blog4.png",
    snippet2:
      "Feet shuffle, voices rise—the floor becomes a drum. The ring shout turns grief into motion.",
    snippet4:
      "Feet shuffle, voices rise—the floor becomes a drum. The ring shout turns grief into motion and prayer into defiance, circling what was taken back into the center.",
  },
  {
    id: 5,
    title: "Praise Houses: Where Hush and Thunder Meet",
    date: "Sep 10, 2023",
    category: "Ritual & Faith",
    image: "/blog5.png",
    snippet2:
      "Small rooms, big covenant. Praise houses sheltered plans, mourning, worship—and return.",
    snippet4:
      "Small rooms, big covenant. Praise houses sheltered plans, mourning, worship—and return. Hidden arbors where the hush held the thunder until the hour arrived.",
  },
  {
    id: 6,
    title: "Trickster Lessons, Survival Codes",
    date: "Oct 03, 2023",
    category: "Oral Tradition",
    image: "/blog6.png",
    snippet2:
      "Br’er Rabbit wasn’t just mischief. He was a syllabus—strategy disguised as story.",
    snippet4:
      "Br’er Rabbit wasn’t just mischief. He was a syllabus—strategy disguised as story. Folktales taught escape routes, leverage, timing, and how to live to fight tomorrow.",
  },
  {
    id: 7,
    title: "Reassembling Kin Across the Water",
    date: "Nov 20, 2023",
    category: "Diaspora & Return",
    image: "/blog7.png",
    snippet2:
      "They scattered tribes; we built new kin. Diaspora work stitches families across seas.",
    snippet4:
      "They scattered tribes; we built new kin. Diaspora work stitches families across seas, naming lines lost to ledgers and setting tables where cousins finally meet.",
  },
  {
    id: 8,
    title: "Drawing New Routes Back Home",
    date: "Dec 18, 2023",
    category: "Resistance & Survival",
    image: "/blog8.png",
    snippet2:
      "When the map was burned, memory redrew it. Stories became wayfinding tools.",
    snippet4:
      "When the map was burned, memory redrew it. Stories became wayfinding tools, turning testimonies into coordinates and songs into a compass that still points home.",
  },
  {
    id: 9,
    title: "Why the Trilogy Must Be Together",
    date: "Jan 07, 2024",
    category: "Culture & Memory",
    image: "/blog9.png",
    snippet2:
      "Gullah Geechee Saga, Gambozo’s Storytelling, Diaspora Scavenger—one covenant.",
    snippet4:
      "Gullah Geechee Saga, Gambozo’s Storytelling, Diaspora Scavenger—one covenant. The hush became rhythm; the rhythm became memory; together, they become us.",
  },
];

/* -------------------------
   Page
------------------------- */

export default function BlogPage() {
  const [visible, setVisible] = useState(6);
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const latest = useMemo(() => POSTS.slice(0, 3), []);
  const categories = useMemo(() => Array.from(new Set(POSTS.map((p) => p.category))), []);

  return (
    <main className="font-sans text-black">
     {/* ---------- HERO (Blog & Articles) with bg3.png ---------- */}
<section className="relative w-full overflow-hidden">
  <div className="relative h-[42vh] md:h-[48vh]">
    <Image
      src="/bg3.png"
      alt="Header background"
      fill
      priority
      sizes="100vw"
      className="object-cover object-center"
    />
    <div className="absolute inset-0 bg-black/45" />

    <div className="relative z-10 h-full flex items-center">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-3xl md:text-5xl font-bold text-white">
          <HeadingHover>Blog & Articles</HeadingHover>
        </h1>
        <p className="mt-4 text-white/90 max-w-2xl">
          Essays, field-notes, and reflections on language, memory, ritual, and return —
          written in a voice that moves from hush to rhythm.
        </p>
      </div>
    </div>
  </div>
</section>

     {/* ---------- CATEGORIES + LATEST LIST (author3.png background) ---------- */}
<section className="relative py-12 md:py-16">
  <div className="absolute inset-0 -z-10">
    <Image src="/author3.png" alt="" fill className="object-cover object-center" />
    <div className="absolute inset-0 bg-black/45" />
  </div>

  <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
    {/* Categories */}
    <div>
      <h2 className="text-2xl font-semibold text-white">
        <HeadingHover>Categories</HeadingHover>
      </h2>
      <ul className="mt-5 space-y-4 text-sm md:text-base">
        {categories.map((c) => (
          <li key={c} className="flex items-center gap-3 group text-white">
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: BLUE }} />
            <span className="group-hover:underline underline-offset-4">{c}</span>
          </li>
        ))}
      </ul>

      <hr className="mt-8 border-t border-white/20" />

      {/* Latest */}
      <h3 className="mt-8 text-2xl font-semibold text-white">
        <HeadingHover>Latest Blog</HeadingHover>
      </h3>
      <div className="mt-5 space-y-5">
        {latest.map((p) => (
          <div key={p.id} className="grid grid-cols-[80px_1fr] gap-4">
            <div className="relative h-20 w-20 rounded-md overflow-hidden">
              <Image src={p.image} alt={p.title} fill className="object-cover" />
            </div>
            <div className="flex flex-col">
              <Link href="#" className="text-sm font-medium text-white hover:underline underline-offset-4">
                {p.title}
              </Link>
              <span className="text-xs text-white/80">{p.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Intro copy */}
    <div className="md:col-span-2">
      <div className="rounded-2xl border border-white/20 bg-white/90 backdrop-blur p-5 md:p-7">
        <p className="text-neutral-800">
          Our editorial notebook travels the corridor between Sierra Leone and the Gullah
          Geechee coast—listening for the old names, tracing living tongues, recording rites
          and routes of return. Blue is an accent, not a flood; the work remains black on
          white, clear as covenant.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* ---------- MAIN GRID (GLASSMORPHIC CARDS) ---------- */}
      <section className="relative py-16 md:py-20">
        {/* bg1.png with subtle overlay for readability */}
        <div className="absolute inset-0 -z-10">
          <Image src="/bg1.png" alt="Blog grid background" fill className="object-cover object-center" />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {POSTS.slice(0, visible).map((post) => {
              const isOpen = expandedId === post.id;
              return (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -3 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  // GLASS styles here:
                  className="relative rounded-3xl overflow-hidden flex flex-col
                             border border-white/40 bg-white/40 backdrop-blur-md
                             shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
                >
                  {/* subtile highlight edge */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/30 to-transparent" />

                  {/* Image */}
                  <div className="relative w-full aspect-[16/10]">
                    <Image src={post.image} alt={post.title} fill className="object-cover" />
                    {/* Date badge */}
                    <div className="absolute right-4 -bottom-5 z-10">
                      <div
                        className="flex flex-col items-center justify-center rounded-full h-14 w-14 text-white text-xs font-semibold shadow-md"
                        style={{ background: BLUE }}
                      >
                        <span>{new Date(post.date).getDate()}</span>
                        <span className="text-[10px] opacity-90">
                          {new Date(post.date).toLocaleString("en-US", { month: "short" }).toUpperCase()}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Meta + Content */}
                  <div className="relative px-6 pt-8 pb-6 flex flex-col gap-3">
                    <div className="flex items-center gap-3 text-xs">
                      <Pill>
                        <Folder size={14} color={BLUE} />
                        <span>{post.category}</span>
                      </Pill>
                      <Pill>
                        <CalendarDays size={14} color={BLUE} />
                        <span>{post.date}</span>
                      </Pill>
                    </div>

                    <h4 className="text-xl font-semibold text-black">
                      <HeadingHover>{post.title}</HeadingHover>
                    </h4>

                    {/* 2-line default, 4-line on expand */}
                    <ClampText text={isOpen ? post.snippet4 : post.snippet2} lines={isOpen ? 4 : 2} />

                    <div className="mt-2">
                      <button
                        onClick={() => setExpandedId(isOpen ? null : post.id)}
                        className="inline-flex items-center gap-1 rounded-full px-5 py-2 text-sm font-medium
                                   transition-colors border border-transparent
                                   bg-[#0A2342] text-white hover:bg-white hover:text-[#0A2342] hover:border-[#0A2342]"
                      >
                        Read more
                        <ChevronDown
                          size={16}
                          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>

          {/* Load more */}
          {visible < POSTS.length && (
            <div className="mt-10 flex justify-center">
              <button
                onClick={() => setVisible(POSTS.length)}
                className="rounded-full px-6 py-2.5 text-sm font-medium bg-[#0A2342] text-white border border-transparent
                           hover:bg-white hover:text-[#0A2342] hover:border-[#0A2342] transition-colors"
              >
                Load more
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
