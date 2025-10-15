"use client";

import { useEffect, useRef, useState, type ComponentType } from "react";
import { animate, useInView, useMotionValue } from "framer-motion";
import { BookOpen, Award, Smile } from "lucide-react";

type Metric = {
  value: number;
  label: string;
  suffix?: string;
  icon: ComponentType<{ className?: string }>;
};

const metrics: Metric[] = [
  {
    value: 76,
    label: "Stories Documented",
    icon: BookOpen,
  },
  {
    value: 47,
    label: "Diaspora Collaborations",
    icon: Award,
  },
  {
    value: 100,
    suffix: "+",
    label: "Communities Engaged",
    icon: Smile,
  },
];

function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const motionValue = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const unsub = motionValue.on("change", (latest) => setDisplay(Math.floor(latest)));

    if (isInView) {
      const controls = animate(motionValue, to, { duration: 1.6, ease: "easeOut" });
      return () => {
        controls.stop();
        unsub();
      };
    }

    return () => unsub();
  }, [isInView, motionValue, to]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
}

export default function MetricsSection() {
  return (
    <section className="bg-[#0A2342] py-10 text-white md:py-14">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 text-center sm:grid-cols-3">
        {metrics.map(({ value, suffix, label, icon: Icon }) => (
          <div key={label} className="flex flex-col items-center gap-3">
            <span className="rounded-full bg-white/10 p-3">
              <Icon className="h-7 w-7" />
            </span>
            <p className="text-4xl font-bold md:text-5xl">
              <CountUp to={value} suffix={suffix} />
            </p>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/80">
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
