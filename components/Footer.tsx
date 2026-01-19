"use client";

import { Heart, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 py-12 border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <MapPin size={20} className="text-emerald-600" />
              About Hidden Trails
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Your ultimate guide to discovering the hidden gems of Rishikesh. We curate offbeat locations, 
              spiritual spots, and natural wonders to help you explore beyond the tourist trail.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-emerald-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-emerald-600 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 hover:text-emerald-600 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <Mail size={20} className="text-emerald-600" />
              Contact
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-2">
              Have questions or suggestions?
            </p>
            <a
              href="mailto:info@hiddentrails.com"
              className="text-emerald-600 hover:text-emerald-700 text-sm font-medium"
            >
              info@hiddentrails.com
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-gray-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <p className="text-gray-500 text-sm flex items-center justify-center gap-1">
              Made with <Heart size={14} className="text-red-500 fill-red-500" /> for Rishikesh
            </p>
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Hidden Trails. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
