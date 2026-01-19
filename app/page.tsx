"use client";

import { useSearchParams } from "next/navigation";
import { Header, Footer, LocationGrid } from "@/components";
import locationsData from "@/data/locations.json";

export default function Home() {
  const searchParams = useSearchParams();
  const locationSlug = searchParams.get("location");

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Header />
        
        <main className="pb-8">
          <LocationGrid
            locations={locationsData.locations}
            categories={locationsData.categories}
            highlightedSlug={locationSlug || undefined}
          />
        </main>

        <Footer />
      </div>
    </div>
  );
}
