"use client";

import { Mountain, Mail, Info } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const scrollToContact = () => {
    const footer = document.querySelector('footer');
    footer?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="py-6 md:py-8 px-4">
      {/* Navigation */}
      <nav className="max-w-7xl mx-auto flex items-center justify-between mb-6">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Mountain className="text-emerald-600" size={28} />
          <span className="text-xl md:text-2xl font-bold text-gray-900">Hidden Trails</span>
        </Link>
        
        <div className="flex items-center gap-4 md:gap-6">
          <Link
            href="/about"
            className="flex items-center gap-1.5 text-gray-700 hover:text-emerald-600 transition-colors text-sm md:text-base font-medium"
          >
            <Info size={18} />
            <span>About</span>
          </Link>
          <button
            onClick={scrollToContact}
            className="flex items-center gap-1.5 text-gray-700 hover:text-emerald-600 transition-colors text-sm md:text-base font-medium"
          >
            <Mail size={18} />
            <span>Contact</span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
          Discover Hidden Trails
        </h1>
        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
          Explore the hidden gems of <span className="text-emerald-600 font-semibold">Rishikesh</span> — 
          from secret waterfalls to peaceful temples, discover places beyond the ordinary.
        </p>
      </div>
    </header>
  );
}
