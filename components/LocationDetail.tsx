"use client";

import Image from "next/image";
import Link from "next/link";
import { Location } from "@/types";
import { MapPin, ExternalLink, Share2, ArrowLeft, ImageOff, Calendar, Info, AlertCircle } from "lucide-react";
import { useState } from "react";
import AdSense from "./AdSense";

interface LocationDetailProps {
  location: Location;
}

export default function LocationDetail({ location }: LocationDetailProps) {
  const [shareSuccess, setShareSuccess] = useState(false);

  const handleShare = async () => {
    // Guard against non-browser environments
    if (typeof window === 'undefined' || typeof navigator === 'undefined') {
      return;
    }

    const url = `${window.location.origin}/location/${location.id}`;

    try {
      if (navigator.share) {
        await navigator.share({
          title: `${location.name} - Hidden Trails Rishikesh`,
          text: location.description,
          url: url,
        });
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(url);
        setShareSuccess(true);
        setTimeout(() => setShareSuccess(false), 2000);
      }
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  const mainImage = location.images?.[0];
  
  // Calculate word count from location description
  // Note: This is the SHORT description - need to expand to 1200+ words
  const contentWordCount = location.description.trim().split(/\s+/).length;

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-8">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium mb-4 md:mb-6 text-sm md:text-base"
        >
          <ArrowLeft size={18} />
          <span>Back to all locations</span>
        </Link>

        {/* Main Content */}
        <div className="bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-xl">
          {/* Hero Image */}
          <div className="relative h-64 md:h-96 bg-gray-100">
            {mainImage ? (
              <Image
                src={mainImage}
                alt={location.name}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 896px) 100vw, 896px"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-emerald-100 to-emerald-200">
                <ImageOff className="text-emerald-400" size={64} />
              </div>
            )}
            {/* Category Badge */}
            <span className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm text-gray-800 text-sm font-medium px-4 py-2 rounded-full">
              {location.category}
            </span>
          </div>

          {/* Content */}
          <div className="p-5 md:p-8">
            <div className="flex items-start justify-between gap-3 md:gap-4 mb-4 md:mb-6">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                {location.name}
              </h1>
              
              {/* Share Button */}
              <button
                onClick={handleShare}
                className="flex items-center gap-2 px-3 md:px-4 py-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors flex-shrink-0"
              >
                <Share2 size={16} className="md:hidden" />
                <Share2 size={18} className="hidden md:block" />
                <span className="hidden sm:inline text-sm md:text-base">
                  {shareSuccess ? "Copied!" : "Share"}
                </span>
              </button>
            </div>

            {/* Content Quality Notice */}
            {contentWordCount < 1200 && (
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6 flex items-start gap-3">
                <AlertCircle className="text-amber-600 flex-shrink-0" size={20} />
                <div className="text-sm text-amber-800">
                  <strong>Content Expansion in Progress:</strong> We're currently adding detailed travel guides, 
                  tips, and comprehensive information to all location pages to better serve you.
                </div>
              </div>
            )}

            <p className="text-gray-700 text-sm md:text-lg leading-relaxed mb-6 md:mb-8">
              {location.description}
            </p>

            {/* AdSense Ad - Only show if content meets threshold (after first major content block) */}
            <div className="mb-6 md:mb-8">
              <AdSense 
                adSlot="4590652479" 
                contentWordCount={contentWordCount}
                minWordCount={1200}
              />
            </div>

            {/* Additional Images */}
            {location.images && location.images.length > 1 && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 mb-6 md:mb-8">
                {location.images.slice(1).map((img, idx) => (
                  <div key={idx} className="relative h-32 md:h-48 rounded-lg md:rounded-xl overflow-hidden">
                    <Image
                      src={img}
                      alt={`${location.name} - Image ${idx + 2}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Google Maps Link */}
            <a
              href={location.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2.5 md:py-3 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 rounded-full font-medium transition-colors text-sm md:text-base"
            >
              <MapPin size={18} />
              <span>View on Google Maps</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
