"use client";

import { FormEvent, useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, User, Type, AtSign, MessageSquare } from "lucide-react";

/* ===== Theme ===== */
const BLUE = "#0A2342";

/** Full-width sleek underline on hover */
function HeadingUnderlineFull({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={`relative inline-block group ${className}`}>
      <span className="transition-all duration-300 group-hover:tracking-wide">
        {children}
      </span>
      <span className="pointer-events-none absolute left-0 -bottom-1 h-[2px] w-0 bg-[#0A2342] transition-all duration-300 group-hover:w-full" />
    </span>
  );
}

/* Input with left icon + blue focus (white bg always) */
function Field({
  type = "text",
  name,
  placeholder,
  icon: Icon,
}: {
  type?: string;
  name: string;
  placeholder: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}) {
  return (
    <div
      className="group relative rounded-xl border border-black/10 bg-white/60 backdrop-blur-md
                 hover:border-[#0A2342]/40 transition-all"
    >
      <Icon className="absolute left-3 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-[#0A2342] opacity-80 pointer-events-none" />
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full rounded-xl bg-transparent pl-10 pr-3 py-3 text-black placeholder:text-neutral-500
                   focus:outline-none focus:ring-2 focus:ring-[#0A2342] focus:ring-offset-0"
      />
    </div>
  );
}

function FieldArea({
  name,
  placeholder,
}: {
  name: string;
  placeholder: string;
}) {
  return (
    <div
      className="group relative rounded-xl border border-black/10 bg-white/60 backdrop-blur-md
                 hover:border-[#0A2342]/40 transition-all"
    >
      <MessageSquare className="absolute left-3 top-3 h-4.5 w-4.5 text-[#0A2342] opacity-80 pointer-events-none" />
      <textarea
        name={name}
        placeholder={placeholder}
        className="w-full min-h-[140px] rounded-xl bg-transparent pl-10 pr-3 py-3 text-black placeholder:text-neutral-500
                   focus:outline-none focus:ring-2 focus:ring-[#0A2342] focus:ring-offset-0"
      />
    </div>
  );
}

export default function ContactPage() {
  const [sending, setSending] = useState(false);
  const [feedback, setFeedback] = useState<
    { type: "success" | "error"; message: string } | null
  >(null);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSending(true);
    setFeedback(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      firstName: formData.get("firstName")?.toString().trim() ?? "",
      lastName: formData.get("lastName")?.toString().trim() ?? "",
      email: formData.get("email")?.toString().trim() ?? "",
      phone: formData.get("phone")?.toString().trim() ?? "",
      subject: formData.get("subject")?.toString().trim() ?? "",
      message: formData.get("message")?.toString().trim() ?? "",
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as {
        success?: boolean;
        error?: string;
      };

      if (!response.ok || !result.success) {
        const errorMessage =
          result?.error ?? "We could not send your message just now.";
        throw new Error(errorMessage);
      }

      form.reset();
      setFeedback({
        type: "success",
        message: "Thank you! Your message is on its way.",
      });
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.";
      setFeedback({ type: "error", message });
    } finally {
      setSending(false);
    }
  };

  /* ---- animated stars/glows for the Share Your Voice section ---- */
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
    <main className="font-sans text-black">
      {/* ---------- HERO ---------- */}
      <section className="relative w-full overflow-hidden">
        <div className="relative h-[52vh] md:h-[60vh]">
          <Image
            src="/bg1.png"
            alt="Contact background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 z-10 flex items-center">
          <div className="max-w-6xl mx-auto px-6">
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl font-bold text-white"
            >
              <HeadingUnderlineFull>Connect Across Continents</HeadingUnderlineFull>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-white/90 max-w-3xl"
            >
              Reach a crossroads of heritage, where dialogues begin, stories unfold, and unity
              paves the way to shared understanding. Write in your voice—we’ll meet you in kind.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ---------- SHARE YOUR VOICE + FORM (animated gradient background) ---------- */}
      <section className="relative overflow-hidden py-16 md:py-24">
        {/* gradient + subtle top overlay */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0a1a4f] to-white" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

        {/* stars */}
        <div className="absolute inset-0 -z-10">
          {stars.map((s, i) => (
            <motion.span
              key={i}
              className="absolute w-1 h-1 rounded-full bg-white/90"
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
              animate={{ opacity: [0.2, 0.55, 0.2], x: [0, g.dx], y: [0, g.dy] }}
              transition={{
                duration: g.duration,
                repeat: Infinity,
                repeatType: "mirror",
                delay: g.delay,
              }}
            />
          ))}
        </div>

        <div className="relative max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10">
          {/* Left copy */}
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 text-white"
          >
            <h2 className="text-2xl md:text-3xl font-bold">
              <HeadingUnderlineFull>Share Your Voice</HeadingUnderlineFull>
            </h2>
            <p className="text-white/90">
              Join our expedition through time—bridging cultures and restoring connections.
              Your insights and questions enrich the journey. Reach out and become part of
              this vibrant dialogue today.
            </p>

            {/* Stacked contact details */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-white/15 grid place-items-center">
                  <Mail size={18} color="#FFFFFF" />
                </div>
                <div className="text-sm">
                  <p className="font-medium text-white">Email</p>
                  <p className="text-white/85">amadu.massally@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-white/15 grid place-items-center">
                  <Phone size={18} color="#FFFFFF" />
                </div>
                <div className="text-sm">
                  <p className="font-medium text-white">Phone</p>
                  <p className="text-white/85">(469) 618-8840</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-white/15 grid place-items-center">
                  <MapPin size={18} color="#FFFFFF" />
                </div>
                <div className="text-sm">
                  <p className="font-medium text-white">Corridor</p>
                  <p className="text-white/85">Sierra Leone ↔ Sea Islands</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right form on lightly framed panel */}
          <motion.div
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* light navy outline frame */}
            <div className="rounded-3xl border border-white/30 bg-white/5 p-2">
              <div className="rounded-[22px] bg-white/75 backdrop-blur-md border border-black/10 shadow-[0_12px_40px_rgba(0,0,0,0.10)] p-6 md:p-8">
                <h3 className="text-xl font-semibold mb-5 text-black">
                  <HeadingUnderlineFull>Get in touch</HeadingUnderlineFull>
                </h3>

                <form onSubmit={onSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field name="firstName" placeholder="First name" icon={User} />
                    <Field name="lastName" placeholder="Last name" icon={Type} />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field type="email" name="email" placeholder="Email" icon={AtSign} />
                    <Field type="tel" name="phone" placeholder="Number" icon={Phone} />
                  </div>

                  <Field name="subject" placeholder="Subject" icon={Type} />
                  <FieldArea name="message" placeholder="Message / Question / Inquiry" />

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={sending}
                      className={`inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium
                                  bg-[${BLUE}] text-white border border-transparent
                                  hover:bg-white hover:text-[${BLUE}] hover:border-[${BLUE}]
                                  transition-colors disabled:opacity-60`}
                    >
                      {sending ? "Sending…" : "Submit"}
                      <Send size={16} />
                    </button>
                    {feedback && (
                      <p
                        role="status"
                        className={`mt-3 text-sm ${
                          feedback.type === "success"
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {feedback.message}
                      </p>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </div>

        {/* soft fade to white bottom edge */}
        <div className="pointer-events-none absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent" />
      </section>
    </main>
  );
}

