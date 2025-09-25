"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useMemo } from "react";

const sections = [
  {
    img: "/description1.png",
    text: `The phrase <span class="text-[#b76e79] font-semibold">“The hush did not break. It became a rhythm”</span> might seem mysterious at first. 
But it holds a profound truth about the <span class="text-[#d9b99b] font-semibold">Gullah Geechee</span> people.

It’s not about silence simply remaining unbroken
It’s about how the forced quiet of slavery, meant to erase African identity, was transformed into something powerful:

<span class="text-[#b76e79] font-semibold">Culture</span>. 
<span class="text-[#d9b99b] font-semibold">Resistance</span>. 
<span class="text-[#b76e79] font-semibold">Memory</span>.`,
  },
  {
    img: "/description2.png",
    // ⬇️ removed extra blank lines for a tighter paragraph flow
    text: `<span class="text-[#d9b99b] font-semibold">What Was the Hush?</span>  
The hush was not merely the absence of sound.
It was the deep, painful stillness imposed by slavery the system that tried to strip away language, names, traditions, and even humanity.
But the hush wasn’t empty.
As Gambozo, our griot-elder, explains:
<span class="text-[#b76e79] italic">“De hush… ain’t just quiet. Nah. It’s where we buried what dey couldn’t kill. It’s where songs hide ‘til it safe to sing again. Where names curl up ‘til it time to rise. Where courage sits cross-legged and waits.”</span>
This was not passive silence. It was <span class="text-[#d9b99b] font-semibold">strategic</span>. Active. Sacred. A place where identity and resistance were nurtured in secret.`,
  },
  {
    img: "/description3.png",
    // ⬇️ compact version
    text: `<span class="text-[#d9b99b] font-semibold">And Then Came the Rhythm</span>  
That hush didn’t disappear. It moved. It morphed into language, song, ritual, and resilient culture.
<span class="text-[#b76e79] font-semibold">Gullah Language:</span> A creole born from English braided with African tongues like Mende, Vai, and Kpelle. “Our language ain’t broken… It’s braided. Africa still breathin’ through dey tongues.”
<span class="text-[#b76e79] font-semibold">Spirituals and Music:</span> More than songs they were lifelines. Even when drums were banned, the rhythm lived on in claps and stomps.
<span class="text-[#b76e79] font-semibold">The Ring Shout:</span> West African spiritual movement transformed. Rhythmic, sacred, defiant.
<span class="text-[#b76e79] font-semibold">Oral Tradition:</span> Trickster tales like Br’er Rabbit carried survival strategies.
<span class="text-[#b76e79] font-semibold">Praise Houses:</span> Hidden arbors where the hush and thunder coexisted.`,
  },
  {
    img: "/description4.png",
    text: `<span class="text-[#d9b99b] font-semibold">A People Who Transformed Silence Into Power</span>  
The Gullah Geechee people were never passive victims.
They were active agents, reassembling what had been torn apart.
They turned forced silence into cultural survival and then into beauty.

“They took language - we made a new tongue.
They scattered tribes - we built new kin.
They burned the map - we drew our own routes back home.”`,
  },
  {
    img: "/description5.png",
    text: `<span class="text-[#d9b99b] font-semibold">The Trilogy Was Born From This Truth</span>  
This is why The Gullah Geechee Saga, Gambozo’s Storytelling, and Diaspora Scavenger must be told together.

Because the hush didn’t break.

It became <span class="text-[#b76e79] font-semibold">rhythm</span>.  
It became <span class="text-[#b76e79] font-semibold">memory</span>.  
It became <span class="text-[#b76e79] font-semibold">us</span>.`,
  },
];

export default function Details() {
  const dots = useMemo(
    () =>
      Array.from({ length: 40 }, () => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
      })),
    []
  );

  const IMAGE_RIGHT = [1, 3];

  return (
    <section className="relative bg-[#f5f1e8] py-20 px-6 md:px-12 font-inter">
      {/* floating background dots */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {dots.map((dot, i) => (
          <motion.span
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white/40"
            style={dot}
            animate={{ opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 4, repeat: Infinity, delay: i * 0.1 }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto space-y-32">
        {sections.map((section, idx) => {
          const flip = IMAGE_RIGHT.includes(idx);
          return (
            <motion.div
              key={idx}
              className="grid md:grid-cols-2 gap-0 items-center relative"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <motion.div
                className={`${flip ? "md:order-2" : ""} relative`}
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <Image
                  src={section.img}
                  alt={`detail-${idx + 1}`}
                  width={700}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </motion.div>

              <motion.div
                className={`
                  relative z-10 bg-white text-gray-900
                  backdrop-blur-md p-8 md:p-12
                  md:-ml-16 md:-mr-16
                  ${flip ? "md:order-1 md:-mr-16" : "md:-ml-16"}
                  hover:shadow-[0_0_35px_rgba(0,0,0,0.25)]
                  transition-all duration-500
                  prose max-w-none
                `}
                whileHover={{ scale: 1.02 }}
              >
                <p
                  className="text-lg md:text-xl leading-relaxed whitespace-pre-line"
                  dangerouslySetInnerHTML={{ __html: section.text }}
                />
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
