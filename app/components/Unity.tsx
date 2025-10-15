"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type CTA = { label: string; href: string };
type TextSlide = {
  img: string;
  title: string;
  text: string[];
  ctas: CTA[];
};
type QuoteSlide = {
  img: string;
  title: string;
  quotes: string[];
  ctas: CTA[];
};

const slides: Array<TextSlide | QuoteSlide> = [
  {
    img: "/unity1.png",
    title: "Keep the Covenant Alive",
    text: [
      "These stories belong to all who remember that the ocean was never just a grave — it was also a road home.",
      "Join the movement of remembrance and reassembly.",
    ],
    ctas: [
      { label: "Subscribe to Saga Speak", href: "/contact" },
      { label: "Buy Now", href: "/books" },
      { label: "Invite Amadu to Speak", href: "/events" },
    ],
  },
  {
    img: "/unity2.png",
    title: "What Readers Are Saying",
    quotes: [
      "“A bridge across centuries told with grace and fire.”",
      "“This trilogy restores what the archives forgot.”",
      "“Every chapter feels like a homecoming.”",
    ],
    ctas: [
      { label: "Read More Reviews", href: "/events" },
      { label: "Share Your Reflection", href: "/contact" },
    ],
  },
];

export default function Unity() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const slide = slides[index];

  return (
    <section className="relative w-full h-[85vh] overflow-hidden font-sans">
      {/* Background Images with Fade Transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={slide.img}
            alt={slide.title}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-[#0a1a4f]/40 to-black/20" />
        </motion.div>
      </AnimatePresence>

      {/* Slide Content */}
      <div className="relative z-10 flex items-center h-full px-6 md:px-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl bg-black/25 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-lg"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-white leading-tight drop-shadow-md">
              {slide.title}
            </h2>

            {/* Slide Type Rendering */}
            {"text" in slide ? (
              <div className="text-white/90 mb-6 leading-relaxed text-base md:text-lg space-y-3">
                {slide.text.map((t, i) => (
                  <p key={i}>{t}</p>
                ))}
              </div>
            ) : (
              <ul className="text-white/90 mb-6 leading-relaxed text-base md:text-lg space-y-2 list-disc pl-5">
                {slide.quotes.map((q, i) => (
                  <li key={i} className="marker:text-white/70">
                    {q}
                  </li>
                ))}
              </ul>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3">
              {slide.ctas.map((cta) => (
                <motion.a
                  key={cta.label}
                  href={cta.href}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center justify-center rounded-full px-6 py-2.5 md:px-7 md:py-3 
                             bg-[#0a1a4f] hover:bg-[#061033] text-white font-medium text-sm md:text-base 
                             shadow-md hover:shadow-lg transition-colors duration-300 focus-visible:outline-none 
                             focus-visible:ring-2 focus-visible:ring-white/60"
                >
                  {cta.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
