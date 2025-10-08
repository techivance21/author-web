"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";
import Link from "next/link";

export default function Illuminate() {
  // stars and glows
  const stars = useMemo(
    () =>
      [...Array(40)].map(() => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        dx: Math.random() * 40 - 20,
        dy: Math.random() * 40 - 20,
        delay: Math.random() * 3,
        duration: 4 + Math.random() * 6,
      })),
    []
  );

  const glows = useMemo(
    () =>
      [...Array(3)].map(() => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: 80 + Math.random() * 50,
        dx: Math.random() * 60 - 30,
        dy: Math.random() * 60 - 30,
        delay: Math.random() * 5,
        duration: 10 + Math.random() * 8,
      })),
    []
  );

  return (
    <section className="relative min-h-[70vh] w-full flex items-center justify-center text-center overflow-hidden bg-gradient-to-b from-[#0a1a4f] to-white font-sans">
      <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

      {/* stars */}
      <div className="absolute inset-0">
        {stars.map((s, i) => (
          <motion.span
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white"
            style={{ top: s.top, left: s.left }}
            animate={{ opacity: [0, 1, 0], x: [0, s.dx], y: [0, s.dy] }}
            transition={{
              duration: s.duration,
              repeat: Infinity,
              repeatType: "mirror",
              delay: s.delay,
            }}
          />
        ))}
        {glows.map((g, i) => (
          <motion.span
            key={`g-${i}`}
            className="absolute rounded-full bg-white/20 blur-2xl"
            style={{ width: g.size, height: g.size, top: g.top, left: g.left }}
            animate={{ opacity: [0.2, 0.6, 0.2], x: [0, g.dx], y: [0, g.dy] }}
            transition={{
              duration: g.duration,
              repeat: Infinity,
              repeatType: "mirror",
              delay: g.delay,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-4xl px-6 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-display font-bold text-white drop-shadow-md leading-tight"
        >
          Reader Invitation
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-6 text-lg md:text-xl text-white/90 leading-relaxed font-sans"
        >
          “This Saga is not just a book. It is a summons. Read it as testimony,
          as inheritance, as covenant.”
        </motion.p>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-10 text-2xl md:text-3xl font-display font-semibold text-white"
        >
          Keep the hush alive. Walk the rhythm forward.
        </motion.h3>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
          onSubmit={(e) => e.preventDefault()}
          className="mt-6 flex flex-col md:flex-row items-center justify-center gap-3"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="w-72 px-4 py-2.5 rounded-full bg-white/20 text-white placeholder-white/70
                       border border-[#0a1a4f] outline-none focus:border-[#061033] focus:bg-white/30 transition-all duration-300 text-sm md:text-base font-sans"
          />
          <ThemeButton text="Subscribe" small />
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-10 space-y-4"
        >
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            {/* Subscribe for Bonus Features → /contact */}
            <ThemeButton text="Subscribe for Bonus Features" href="/contact" />
            {/* Renamed + linked to /blogs */}
            <ThemeButton text="Explore Articles & Blogs" href="/blogs" />
          </div>
          <div>
            {/* Buy Now → /books */}
            <ThemeButton text="Buy Now" href="/books" />
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}

function ThemeButton({
  text,
  small = false,
  href,
}: {
  text: string;
  small?: boolean;
  href?: string;
}) {
  const classes = `relative inline-flex items-center justify-center 
                 ${small ? "px-5 py-2 text-sm" : "px-6 py-2.5 text-sm md:text-base"} 
                 rounded-full font-medium text-white font-sans
                 bg-[#0a1a4f] border border-[#0a1a4f]
                 transition-all duration-300 group 
                 hover:bg-[#061033] hover:border-[#061033]
                 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {text}
      </Link>
    );
  }

  return <button className={classes}>{text}</button>;
}
