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
} from "lucide-react";

const navyBlue = "#0a1a4f";

export default function Footer() {
  return (
    <footer className="bg-white w-full border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-5 gap-10 text-center md:text-left">
        {/* Left Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-[#0a1a4f] relative inline-block group">
            Re-rooted. Remembered. Reassembled.
            <span className="block h-0.5 bg-[#0a1a4f] max-w-0 group-hover:max-w-full transition-all duration-300 mt-1"></span>
          </h2>
          <p className="text-black leading-relaxed group hover:underline hover:decoration-[#0a1a4f] hover:underline-offset-4">
            A People Dispersed. A Culture Reassembled. A Story Returned in Three
            Volumes. Reach Us Directly.
          </p>
          <p className="text-black italic group hover:underline hover:decoration-[#0a1a4f] hover:underline-offset-4">
            Let this be the beginning of the conversation, not the end.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-[#0a1a4f] relative group inline-block">
            Quick Links
            <span className="block h-0.5 bg-[#0a1a4f] max-w-0 group-hover:max-w-full transition-all duration-300 mt-1"></span>
          </h3>
          <FooterLink icon={<Home size={18} />} text="Home" />
          <FooterLink icon={<Book size={18} />} text="Books" />
          <FooterLink icon={<Calendar size={18} />} text="Events" />
          <FooterLink icon={<Info size={18} />} text="About" />
          <FooterLink icon={<UserCircle size={18} />} text="Contact" />
        </div>

        {/* Contact */}
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-[#0a1a4f] relative group inline-block">
            Contact
            <span className="block h-0.5 bg-[#0a1a4f] max-w-0 group-hover:max-w-full transition-all duration-300 mt-1"></span>
          </h3>
          <FooterLink icon={<Phone size={18} />} text="(469) 618-8840" />
          <FooterLink icon={<MessageSquare size={18} />} text="Send a Message" />
          <FooterLink icon={<Mail size={18} />} text="Connect via Email" />
          <FooterLink icon={<Facebook size={18} />} text="Catch us on Facebook" />
          <FooterLink icon={<Youtube size={18} />} text="Watch us on YouTube" />
        </div>

        {/* Discover */}
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-[#0a1a4f] relative group inline-block">
            Discover
            <span className="block h-0.5 bg-[#0a1a4f] max-w-0 group-hover:max-w-full transition-all duration-300 mt-1"></span>
          </h3>
          <FooterLink icon={<BookOpen size={18} />} text="Cultural Education" />
          <FooterLink icon={<Compass size={18} />} text="Heritage Journeys" />
          <FooterLink icon={<Mic size={18} />} text="Speaking Engagements" />
          <FooterLink icon={<Users size={18} />} text="Diaspora Scavenger" />
        </div>

        {/* Explore */}
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-[#0a1a4f] relative group inline-block">
            Explore
            <span className="block h-0.5 bg-[#0a1a4f] max-w-0 group-hover:max-w-full transition-all duration-300 mt-1"></span>
          </h3>
          <FooterLink icon={<BookOpen size={18} />} text="The Book" />
          <FooterLink icon={<Map size={18} />} text="Events & Bookings" />
          <FooterLink icon={<Users size={18} />} text="Get Involved" />
          <FooterLink icon={<Mic size={18} />} text="Echoes" />
        </div>
      </div>

      <div className="border-t border-gray-200 py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Amadu Massally. All rights reserved.
      </div>
    </footer>
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
      className="flex items-center justify-center md:justify-start gap-2 text-black transition-all duration-300 group hover:text-[#0a1a4f] hover:underline hover:decoration-[#0a1a4f] hover:underline-offset-4"
    >
      <span className="transition-transform duration-300 group-hover:scale-110">
        {icon}
      </span>
      <span>{text}</span>
    </a>
  );
}
