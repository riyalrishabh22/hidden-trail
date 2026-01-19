"use client";

import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-16 py-8 border-t border-gray-200">
      <div className="text-center text-gray-500 text-sm">
        <p className="flex items-center justify-center gap-1">
          Made with <Heart size={14} className="text-red-500 fill-red-500" /> for Rishikesh
        </p>
        <p className="mt-2">© {new Date().getFullYear()} Hidden Trails</p>
      </div>
    </footer>
  );
}
