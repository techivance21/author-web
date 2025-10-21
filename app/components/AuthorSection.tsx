"use client";

export default function AuthorSection() {
  return (
    <section
      className="relative w-full bg-cover bg-center font-sans py-16 md:py-24"
      style={{ backgroundImage: "url('/author1.png')" }}
    >
      {/* Navy overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A2342]/80 via-[#0A2342]/65 to-[#0A2342]/65" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center text-white flex flex-col items-center justify-center gap-6 md:gap-8 min-h-[45vh]">
        <span className="inline-block h-1.5 w-16 rounded-full bg-white/70" />
        <h2 className="text-3xl md:text-4xl font-display font-bold leading-snug drop-shadow-md">
          We cannot understand the Gullah Geechee if we begin the story with
          chains.
        </h2>
        <p className="text-base md:text-lg leading-relaxed font-sans text-white/90 max-w-3xl">
          The truth is older and deeper. This Saga is not just a book. It is a
          summons. Read it as testimony, as inheritance, as covenant.
        </p>
      </div>
    </section>
  );
}
