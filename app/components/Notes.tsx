"use client";

import { useState } from "react";

export default function Notes() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <section className="bg-[#bfbfbf] w-full flex justify-center py-24 px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold text-black mb-6">
          Notes from the Near Future
        </h2>

        {/* Sub text */}
        <p className="text-black font-['Inter'] mb-10 leading-relaxed text-lg">
          Sign up with your email address to receive my monthly newsletter
          packed with inspiration on the latest and greatest in speculative
          fiction.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            required
            className="w-full sm:w-[320px] px-6 py-4 border border-[#0a1a4f] 
                       text-black placeholder-gray-500 bg-white font-['Inter']
                       text-lg focus:outline-none focus:border-[#061033] rounded-md
                       transition-all duration-300"
          />
          <button
            type="submit"
            className="w-full sm:w-[180px] px-6 py-4 bg-[#0a1a4f] text-white
                       font-['Inter'] text-lg font-medium rounded-md
                       hover:bg-[#061033] transition-colors duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
