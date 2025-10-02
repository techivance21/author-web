"use client";

import {
  Phone,
  Mail,
  MessageSquare,
  BookOpen,
  Compass,
  Users,
  Mic,
  Map,
  Youtube,
  Facebook,
  Home,
  Calendar,
  Info,
  Book,
  UserCircle,
  ChevronDown,
} from "lucide-react";

const navyBlue = "#0a1a4f";

export default function Footer() {
  const quickLinks = [
    { icon: <Home size={18} />, text: "Home" },
    { icon: <Book size={18} />, text: "Books" },
    { icon: <Calendar size={18} />, text: "Events" },
    { icon: <Info size={18} />, text: "About" },
    { icon: <UserCircle size={18} />, text: "Contact" },
  ];

  const contact = [
    { icon: <Phone size={18} />, text: "(469) 618-8840" },
    { icon: <MessageSquare size={18} />, text: "Send a Message" },
    { icon: <Mail size={18} />, text: "Connect via Email" },
    { icon: <Facebook size={18} />, text: "Catch us on Facebook" },
    { icon: <Youtube size={18} />, text: "Watch us on YouTube" },
  ];

  const discover = [
    { icon: <BookOpen size={18} />, text: "Cultural Education" },
    { icon: <Compass size={18} />, text: "Heritage Journeys" },
    { icon: <Mic size={18} />, text: "Speaking Engagements" },
    { icon: <Users size={18} />, text: "Diaspora Scavenger" },
  ];

  const explore = [
    { icon: <BookOpen size={18} />, text: "The Book" },
    { icon: <Map size={18} />, text: "Events & Bookings" },
    { icon: <Users size={18} />, text: "Get Involved" },
    { icon: <Mic size={18} />, text: "Echoes" },
  ];

  return (
    <footer className="bg-white w-full border-t border-gray-200 font-sans">
      {/* ===== Mobile: Accordion layout ===== */}
      <div className="md:hidden max-w-7xl mx-auto px-4 py-10 space-y-6">
        {/* Brand / intro (always visible) */}
        <div className="space-y-3 text-center">
          <h2 className="font-display text-2xl font-bold text-[#0a1a4f] leading-snug">
            Re-rooted. Remembered. Reassembled.
          </h2>
          <p className="text-black">
            A People Dispersed. A Culture Reassembled. A Story Returned in Three
            Volumes. Reach Us Directly.
          </p>
          <p className="text-black italic">
            Let this be the beginning of the conversation, not the end.
          </p>
        </div>

        <AccordionSection title="Quick Links">
          <ul className="mt-2 space-y-3">
            {quickLinks.map((l, i) => (
              <li key={i}>
                <FooterLink {...l} />
              </li>
            ))}
          </ul>
        </AccordionSection>

        <AccordionSection title="Contact">
          <ul className="mt-2 space-y-3">
            {contact.map((l, i) => (
              <li key={i}>
                <FooterLink {...l} />
              </li>
            ))}
          </ul>
        </AccordionSection>

        <AccordionSection title="Discover">
          <ul className="mt-2 space-y-3">
            {discover.map((l, i) => (
              <li key={i}>
                <FooterLink {...l} />
              </li>
            ))}
          </ul>
        </AccordionSection>

        <AccordionSection title="Explore">
          <ul className="mt-2 space-y-3">
            {explore.map((l, i) => (
              <li key={i}>
                <FooterLink {...l} />
              </li>
            ))}
          </ul>
        </AccordionSection>
      </div>

      {/* ===== Desktop / Tablet: Grid layout ===== */}
      <div className="hidden md:grid max-w-7xl mx-auto px-6 py-14 lg:py-16 grid-cols-12 gap-10">
        {/* Left brand spans more columns for balance */}
        <div className="col-span-12 lg:col-span-4 space-y-4">
          <h2 className="font-display text-2xl lg:text-3xl font-bold text-[#0a1a4f] leading-snug">
            Re-rooted. Remembered. Reassembled.
          </h2>
          <p className="text-black leading-relaxed">
            A People Dispersed. A Culture Reassembled. A Story Returned in Three
            Volumes. Reach Us Directly.
          </p>
          <p className="text-black italic">
            Let this be the beginning of the conversation, not the end.
          </p>
        </div>

        <div className="col-span-6 lg:col-span-2">
          <FooterHeading>Quick Links</FooterHeading>
          <ul className="mt-4 space-y-3">
            {quickLinks.map((l, i) => (
              <li key={i}>
                <FooterLink {...l} />
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-6 lg:col-span-2">
          <FooterHeading>Contact</FooterHeading>
          <ul className="mt-4 space-y-3">
            {contact.map((l, i) => (
              <li key={i}>
                <FooterLink {...l} />
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-6 lg:col-span-2">
          <FooterHeading>Discover</FooterHeading>
          <ul className="mt-4 space-y-3">
            {discover.map((l, i) => (
              <li key={i}>
                <FooterLink {...l} />
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-6 lg:col-span-2">
          <FooterHeading>Explore</FooterHeading>
          <ul className="mt-4 space-y-3">
            {explore.map((l, i) => (
              <li key={i}>
                <FooterLink {...l} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200 py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Amadu Massally. All rights reserved.
      </div>
    </footer>
  );
}

/* ================= Subcomponents ================= */

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-display text-xl font-semibold text-[#0a1a4f]">
      {children}
    </h3>
  );
}

function FooterLink({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <a
      href="#"
      className="flex items-center gap-2 text-black transition-colors duration-200 hover:text-[#0a1a4f]"
    >
      <span className="shrink-0">{icon}</span>
      <span className="truncate">{text}</span>
    </a>
  );
}

/* Mobile accordion section (no JS) */
function AccordionSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <details className="group rounded-lg border border-gray-200 bg-white">
      <summary className="flex w-full items-center justify-between cursor-pointer select-none list-none px-4 py-3">
        <span className="font-display text-lg text-[#0a1a4f]">{title}</span>
        <ChevronDown
          className="transition-transform duration-200 group-open:rotate-180"
          size={18}
          color={navyBlue}
        />
      </summary>
      <div className="px-4 pb-4">{children}</div>
    </details>
  );
}
