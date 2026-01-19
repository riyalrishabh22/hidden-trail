"use client";

import Image from "next/image";
import Link from "next/link";
import { Location } from "@/types";
import { MapPin, ExternalLink, Share2, ArrowLeft, ImageOff } from "lucide-react";
import { useState } from "react";
import { generateSlug } from "@/lib/utils";

interface LocationDetailProps {
  location: Location;
}

export default function LocationDetail({ location }: LocationDetailProps) {
  const [shareSuccess, setShareSuccess] = useState(false);
  const slug = generateSlug(location.name);

  const handleShare = async () => {
    const url = `${window.location.origin}/location/${slug}`;

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

  const mainImage = location.images?.[0];

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium mb-6"
        >
          <ArrowLeft size={20} />
          <span>Back to all locations</span>
        </Link>

        {/* Main Content */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
          {/* Hero Image */}
          <div className="relative h-96 bg-gray-100">
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
          <div className="p-8">
            <div className="flex items-start justify-between gap-4 mb-6">
              <h1 className="text-4xl font-bold text-gray-900">
                {location.name}
              </h1>
              
              {/* Share Button */}
              <button
                onClick={handleShare}
                className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors"
              >
                <Share2 size={18} />
                <span className="hidden sm:inline">
                  {shareSuccess ? "Copied!" : "Share"}
                </span>
              </button>
            </div>

            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              {location.description}
            </p>

            {/* Additional Images */}
            {location.images && location.images.length > 1 && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                {location.images.slice(1).map((img, idx) => (
                  <div key={idx} className="relative h-48 rounded-xl overflow-hidden">
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
              className="inline-flex items-center gap-3 px-6 py-3 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 rounded-full font-medium transition-colors"
            >
              <MapPin size={20} />
              <span>View on Google Maps</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
