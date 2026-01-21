"use client";

import Image from "next/image";
import Link from "next/link";
import { Location } from "@/types";
import { MapPin, ExternalLink, ImageOff, Share2 } from "lucide-react";
import { useState, forwardRef } from "react";

interface LocationCardProps {
  location: Location;
  isHighlighted?: boolean;
}

const LocationCard = forwardRef<HTMLDivElement, LocationCardProps>(
  ({ location, isHighlighted = false }, ref) => {
    const mainImage = location.images?.[0];
    const [shareSuccess, setShareSuccess] = useState(false);

    const handleShare = async (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();

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

    return (
      <Link href={`/location/${location.id}`}>
        <div
          ref={ref}
          className={`group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border cursor-pointer ${
            isHighlighted
              ? "border-emerald-500 ring-4 ring-emerald-200"
              : "border-gray-100"
          }`}
        >
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
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
            {location.description}
          </p>
        </div>
      </div>
      </Link>
    );
  }
);

LocationCard.displayName = "LocationCard";

export default LocationCard;
