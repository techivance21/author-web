"use client";

import Link from "next/link";
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
  Newspaper,
} from "lucide-react";

const navyBlue = "#0a1a4f";

export default function Footer() {
  /* ---------------- Quick Links with routes (includes Blogs) ---------------- */
  const quickLinks = [
    { icon: <Home size={18} aria-hidden />, text: "Home", href: "/" },
    { icon: <Book size={18} aria-hidden />, text: "Books", href: "/books" },
    { icon: <Calendar size={18} aria-hidden />, text: "Events", href: "/events" },
    { icon: <Info size={18} aria-hidden />, text: "About", href: "/about" },
    { icon: <UserCircle size={18} aria-hidden />, text: "Contact", href: "/contact" },
    { icon: <Newspaper size={18} aria-hidden />, text: "Blogs", href: "/blogs" }, // new
  ];

  /* ---------------- Contact: line-by-line with correct links ---------------- */
  const contact = [
    { icon: <Phone size={18} aria-hidden />, text: "(469) 618-8840", href: "tel:+14696188840" },
    { icon: <MessageSquare size={18} aria-hidden />, text: "Send a Message", href: "/contact" },
    {
      icon: <Mail size={18} aria-hidden />,
      text: "Connect via Email",
      href: "mailto:amadu.massally@gmail.com",
    },
    {
      icon: <Facebook size={18} aria-hidden />,
      text: "Catch us on Facebook",
      href: "https://www.facebook.com/amadu.massally",
      external: true,
    },
    {
      icon: <Youtube size={18} aria-hidden />,
      text: "Watch us on YouTube",
      href: "https://www.youtube.com/@fambultik-leadingafricanhe6341",
      external: true,
    },
  ];

  const discover = [
    { icon: <BookOpen size={18} aria-hidden />, text: "Cultural Education", href: "#" },
    { icon: <Compass size={18} aria-hidden />, text: "Heritage Journeys", href: "#" },
    { icon: <Mic size={18} aria-hidden />, text: "Speaking Engagements", href: "#" },
    { icon: <Users size={18} aria-hidden />, text: "Diaspora Scavenger", href: "#" },
  ];

  const explore = [
    { icon: <BookOpen size={18} aria-hidden />, text: "The Book", href: "#" },
    { icon: <Map size={18} aria-hidden />, text: "Events & Bookings", href: "#" },
    { icon: <Users size={18} aria-hidden />, text: "Get Involved", href: "#" },
    { icon: <Mic size={18} aria-hidden />, text: "Echoes", href: "#" },
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
            {quickLinks.map((l) => (
              <li key={l.text}>
                <FooterLink {...l} />
              </li>
            ))}
          </ul>
        </AccordionSection>

        <AccordionSection title="Contact">
          <ul className="mt-2 space-y-3">
            {contact.map((l) => (
              <li key={l.text}>
                <FooterLink {...l} />
              </li>
            ))}
          </ul>
        </AccordionSection>

        <AccordionSection title="Discover">
          <ul className="mt-2 space-y-3">
            {discover.map((l) => (
              <li key={l.text}>
                <FooterLink {...l} />
              </li>
            ))}
          </ul>
        </AccordionSection>

        <AccordionSection title="Explore">
          <ul className="mt-2 space-y-3">
            {explore.map((l) => (
              <li key={l.text}>
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
            {quickLinks.map((l) => (
              <li key={l.text}>
                <FooterLink {...l} />
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-6 lg:col-span-2">
          <FooterHeading>Contact</FooterHeading>
          <ul className="mt-4 space-y-3">
            {contact.map((l) => (
              <li key={l.text}>
                <FooterLink {...l} />
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-6 lg:col-span-2">
          <FooterHeading>Discover</FooterHeading>
          <ul className="mt-4 space-y-3">
            {discover.map((l) => (
              <li key={l.text}>
                <FooterLink {...l} />
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-6 lg:col-span-2">
          <FooterHeading>Explore</FooterHeading>
          <ul className="mt-4 space-y-3">
            {explore.map((l) => (
              <li key={l.text}>
                <FooterLink {...l} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm">
          <div className="order-2 md:order-1 mt-2 md:mt-0 text-center md:text-left">
            © 2025 Fambul Tik | Return Table Press
          </div>
          <div className="order-1 md:order-2 text-center md:text-right">
            Design and Development by{" "}
            <span className="text-[#0a1a4f] font-medium">Techivance</span>
          </div>
        </div>
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
  href = "#",
  external = false,
}: {
  icon: React.ReactNode;
  text: string;
  href?: string;
  external?: boolean;
}) {
  const base =
    "flex items-center gap-2 text-black transition-colors duration-200 hover:text-[#0a1a4f] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0a1a4f]/30 rounded";
  const content = (
    <>
      <span className="shrink-0">{icon}</span>
      <span className="truncate">{text}</span>
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={base}
        aria-label={text}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={base} aria-label={text}>
      {content}
    </Link>
  );
}

/* Mobile accordion section (no JS) */
function AccordionSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <details className="group rounded-lg border border-gray-200 bg-white">
      <summary className="flex w-full items-center justify-between cursor-pointer select-none list-none px-4 py-3">
        <span className="font-display text-lg text-[#0a1a4f]">{title}</span>
        <ChevronDown
          className="transition-transform duration-200 group-open:rotate-180"
          size={18}
          color={navyBlue}
          aria-hidden
        />
      </summary>
      <div className="px-4 pb-4">{children}</div>
    </details>
  );
}
