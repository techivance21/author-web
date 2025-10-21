"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Folder } from "lucide-react";
import Link from "next/link";

/* -------------------------
   Theme helpers / bits
------------------------- */

const BLUE = "#0A2342";

// Simple heading span (no underline effect)
function HeadingPlain({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <span className={`inline-block ${className}`}>{children}</span>;
}

function Pill({ children }: { children: React.ReactNode }) {
  // glassy chip
  return (
    <span
      className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium
                     bg-white/50 backdrop-blur-[2px] border border-white/40 text-black"
    >
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
   Blog data (ONLY these 3)
------------------------- */

type Post = {
  slug: string; // prepared for dynamic routing next
  title: string;
  subtitle?: string;
  category: string;
  image?: string; // optional; fallback gradient if missing
  excerpt: string; // short preview for the card
};

const POSTS: Post[] = [
  {
    slug: "the-land-remembers",
    title: "The Land Remembers",
    subtitle: "Land is not just dirt — it is archive.",
    category: "Land & Memory",
    image: "/blog-land.jpg", // replace or keep; fallback handled below
    excerpt:
      "From the rice fields of the Lowcountry to the red earth of Sierra Leone, the land holds the memory of those who labored, prayed, and dreamed upon it. This is not metaphor — it is evidence.",
  },
  {
    slug: "echoes-from-the-atlantic-graveyard",
    title: "Echoes from the Atlantic Graveyard",
    subtitle: "The ocean is a graveyard, but also a mirror.",
    category: "Ocean & Memory",
    image: "/blog-ocean.jpg",
    excerpt:
      "Beneath the Atlantic’s blue silence lies a cemetery without borders. When descendants pour libation and call the names, that water becomes memory — and the ancestors rise as witnesses.",
  },
  {
    slug: "before-the-crossing-the-gullah-genesis",
    title: "Before the Crossing: The Gullah Genesis",
    subtitle: "We were not born enslaved — we were born brilliant.",
    category: "Origins",
    image: "/blog-genesis.jpg",
    excerpt:
      "Long before the slave ships, there were kingdoms, languages, and technologies that shaped the world. Gullah Geechee culture did not begin in bondage — it began in brilliance.",
  },
];

/* -------------------------
   Page
------------------------- */

export default function BlogPage() {
  const categories = Array.from(new Set(POSTS.map((p) => p.category)));
  const latest = POSTS.slice(0, 3);

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
                <HeadingPlain>Blog & Articles</HeadingPlain>
              </h1>
              <p className="mt-4 text-white/90 max-w-2xl">
                Essays, field-notes, and reflections on language, memory, ritual, and
                return — written in a voice that moves from hush to rhythm.
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
              <HeadingPlain>Categories</HeadingPlain>
            </h2>
            <ul className="mt-5 space-y-4 text-sm md:text-base">
              {categories.map((c) => (
                <li key={c} className="flex items-center gap-3 group text-white">
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ background: BLUE }}
                  />
                  <span className="underline-offset-4">{c}</span>
                </li>
              ))}
            </ul>

            <hr className="mt-8 border-t border-white/20" />

            {/* Latest (no dates) */}
            <h3 className="mt-8 text-2xl font-semibold text-white">
              <HeadingPlain>Latest Blog</HeadingPlain>
            </h3>
            <div className="mt-5 space-y-5">
              {latest.map((p) => (
                <div key={p.slug} className="grid grid-cols-[80px_1fr] gap-4">
                  <div className="relative h-20 w-20 rounded-md overflow-hidden">
                    {p.image ? (
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div
                        className="h-full w-full"
                        style={{
                          background: `linear-gradient(135deg, ${BLUE} 0%, #6aa3d6 100%)`,
                        }}
                      />
                    )}
                  </div>
                  <div className="flex flex-col">
                    <Link
                      href={`/blogs/${p.slug}`}
                      className="text-sm font-medium text-white"
                    >
                      {p.title}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Intro copy */}
          <div className="md:col-span-2">
            <div className="rounded-2xl border border-white/20 bg-white/90 backdrop-blur p-5 md:p-7">
              <p className="text-neutral-800">
                Our editorial notebook travels the corridor between Sierra Leone and the
                Gullah Geechee coast—listening for the old names, tracing living tongues,
                recording rites and routes of return. Blue is an accent, not a flood; the
                work remains black on white, clear as covenant.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- MAIN GRID (GLASSMORPHIC CARDS) ---------- */}
      <section className="relative py-16 md:py-20">
        {/* bg1.png with subtle overlay for readability */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/bg1.png"
            alt="Blog grid background"
            fill
            className="object-cover object-center"
          />
        </div>

        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {POSTS.map((post) => {
              return (
                <motion.article
                  key={post.slug}
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
                  {/* subtle highlight edge */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/30 to-transparent" />

                  {/* Image */}
                  <div className="relative w-full aspect-[16/10]">
                    {post.image ? (
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div
                        className="h-full w-full"
                        style={{
                          background: `linear-gradient(135deg, ${BLUE} 0%, #6aa3d6 100%)`,
                        }}
                      />
                    )}
                    {/* (Date badge removed) */}
                  </div>

                  {/* Meta + Content */}
                  <div className="relative px-6 pt-8 pb-6 flex flex-col gap-3">
                    <div className="flex items-center gap-3 text-xs">
                      <Pill>
                        <Folder size={14} color={BLUE} />
                        <span>{post.category}</span>
                      </Pill>
                      {/* (Date pill removed) */}
                    </div>

                    <h4 className="text-xl font-semibold text-black">
                      <HeadingPlain>{post.title}</HeadingPlain>
                    </h4>

                    {post.subtitle ? (
                      <p className="text-sm text-black/70">{post.subtitle}</p>
                    ) : null}

                    {/* short preview */}
                    <ClampText text={post.excerpt} lines={2} />

                    <div className="mt-3">
                      <Link
                        href={`/blogs/${post.slug}`}
                        className="inline-flex items-center gap-1 rounded-full px-5 py-2 text-sm font-medium
                                   transition-colors border border-transparent
                                   bg-[#0A2342] text-white hover:bg-white hover:text-[#0A2342] hover:border-[#0A2342]"
                        aria-label={`Read more: ${post.title}`}
                      >
                        Read more
                      </Link>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

