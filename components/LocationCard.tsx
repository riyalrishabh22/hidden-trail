"use client";

import Image from "next/image";
import { Location } from "@/types";
import { MapPin, ExternalLink, ImageOff, Share2 } from "lucide-react";
import { useState } from "react";
import { generateSlug } from "@/lib/utils";

interface LocationCardProps {
  location: Location;
}

export default function LocationCard({ location }: LocationCardProps) {
  const mainImage = location.images?.[0];
  const [shareSuccess, setShareSuccess] = useState(false);
  const slug = generateSlug(location.name);

  const handleShare = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const url = `${window.location.origin}?location=${slug}`;

    try {
      if (navigator.share) {
        await navigator.share({
          title: `${location.name} - Hidden Trails Rishikesh`,
          text: location.description,
          url: url,
        });
      } else {
        await navigator.clipboard.writeText(url);
        setShareSuccess(true);
        setTimeout(() => setShareSuccess(false), 2000);
      }
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
        {/* Image Container */}
        <div className="relative h-56 overflow-hidden bg-gray-100">
          {mainImage ? (
            <Image
              src={mainImage}
              alt={location.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-emerald-100 to-emerald-200">
              <ImageOff className="text-emerald-400" size={48} />
            </div>
          )}
          {/* Category Badge */}
          <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-medium px-3 py-1 rounded-full">
            {location.category}
          </span>
          
          {/* Share Button */}
          <button
            onClick={handleShare}
            className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
            title="Share location"
          >
            {shareSuccess ? (
              <span className="text-emerald-600 text-xs font-medium px-1">✓</span>
            ) : (
              <Share2 size={16} className="text-gray-700" />
            )}
          </button>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {location.name}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
            {location.description}
          </p>

          {/* Maps Link */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              window.open(location.mapsLink, '_blank', 'noopener,noreferrer');
            }}
            className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium text-sm transition-colors"
          >
            <MapPin size={16} />
            <span>View on Google Maps</span>
            <ExternalLink size={14} />
          </button>
        </div>
      </div>
  );
}
