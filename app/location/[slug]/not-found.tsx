import Link from "next/link";
import { ArrowLeft, MapPin } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white flex items-center justify-center px-4 py-8">
      <div className="text-center max-w-md">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-20 md:w-24 h-20 md:h-24 rounded-full bg-emerald-100 mb-4 md:mb-6">
          <MapPin size={40} className="text-emerald-600 md:w-12 md:h-12" />
        </div>

        {/* Title */}
        <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-3 md:mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-3 md:mb-4">
          Location Not Found
        </h2>
        
        {/* Description */}
        <p className="text-gray-600 text-base md:text-lg mb-6 md:mb-8 leading-relaxed px-2">
          Oops! The hidden trail you're looking for doesn't exist or has been moved. 
          Let's get you back to exploring Rishikesh.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium shadow-md hover:shadow-lg"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>
          
          <Link
            href="/#search"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-emerald-600 border-2 border-emerald-600 rounded-lg hover:bg-emerald-50 transition-colors font-medium"
          >
            <MapPin size={20} />
            <span>Search Locations</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
