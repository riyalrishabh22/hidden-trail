"use client";

import { Mountain } from "lucide-react";

export default function Header() {
  return (
    <header className="text-center py-8 md:py-12 px-4">
      <div className="flex items-center justify-center gap-2 md:gap-3 mb-3 md:mb-4">
        <Mountain className="text-emerald-600" size={32} />
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
          Hidden Trails
        </h1>
      </div>
      <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
        Discover the hidden gems of <span className="text-emerald-600 font-semibold">Rishikesh</span> — 
        from secret waterfalls to peaceful temples, explore places beyond the ordinary.
      </p>
    </header>
  );
}
