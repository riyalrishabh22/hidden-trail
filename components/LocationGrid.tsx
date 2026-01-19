"use client";

import { useState, useMemo, useEffect, useRef, useCallback } from "react";
import { Location } from "@/types";
import LocationCard from "./LocationCard";
import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";
import { generateSlug } from "@/lib/utils";

interface LocationGridProps {
  locations: Location[];
  categories: string[];
  highlightedSlug?: string;
}

// Fuzzy search function to handle typos and partial matches
function fuzzySearch(text: string, searchTerm: string): boolean {
  const cleanText = text.toLowerCase().replace(/[^a-z0-9\s]/g, "");
  const cleanSearch = searchTerm.toLowerCase().replace(/[^a-z0-9\s]/g, "");
  
  // Direct includes match
  if (cleanText.includes(cleanSearch)) return true;
  
  // Split search into words for partial matching
  const searchWords = cleanSearch.split(/\s+/).filter(w => w.length > 0);
  
  // Check if all search words are found
  const allWordsMatch = searchWords.every(word => cleanText.includes(word));
  if (allWordsMatch) return true;
  
  // Fuzzy matching for typos (allow 1-2 character differences)
  if (cleanSearch.length >= 4) {
    const words = cleanText.split(/\s+/);
    for (const word of words) {
      if (word.length >= 4 && levenshteinDistance(word, cleanSearch) <= 2) {
        return true;
      }
    }
  }
  
  return false;
}

// Calculate Levenshtein distance (edit distance) for fuzzy matching
function levenshteinDistance(str1: string, str2: string): number {
  const len1 = str1.length;
  const len2 = str2.length;
  const matrix: number[][] = [];

  for (let i = 0; i <= len1; i++) {
    matrix[i] = [i];
  }
  for (let j = 0; j <= len2; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      const cost = str1[i - 1] === str2[j - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,
        matrix[i][j - 1] + 1,
        matrix[i - 1][j - 1] + cost
      );
    }
  }

  return matrix[len1][len2];
}

export default function LocationGrid({ locations, categories, highlightedSlug }: LocationGridProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const locationRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const setLocationRef = useCallback((slug: string, element: HTMLDivElement | null) => {
    locationRefs.current[slug] = element;
  }, []);

  // Auto-search for highlighted location
  useEffect(() => {
    if (highlightedSlug) {
      const location = locations.find(
        (loc) => generateSlug(loc.name) === highlightedSlug
      );
      if (location) {
        setSearchTerm(location.name);
        setSelectedCategory("All");
      }
    }
  }, [highlightedSlug, locations]);

  // Scroll to highlighted location
  useEffect(() => {
    if (highlightedSlug && locationRefs.current[highlightedSlug]) {
      setTimeout(() => {
        locationRefs.current[highlightedSlug]?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 100);
    }
  }, [highlightedSlug]);

  const filteredLocations = useMemo(() => {
    return locations.filter((location) => {
      // Category filter
      const matchesCategory =
        selectedCategory === "All" || location.category === selectedCategory;

      // If no search term, just filter by category
      if (!searchTerm.trim()) return matchesCategory;

      // Fuzzy search in name, category, and description
      const matchesSearch =
        fuzzySearch(location.name, searchTerm) ||
        fuzzySearch(location.category, searchTerm) ||
        fuzzySearch(location.description, searchTerm);

      return matchesSearch && matchesCategory;
    });
  }, [locations, searchTerm, selectedCategory]);

  return (
    <div className="w-full">
      {/* Search and Filter Section */}
      <div className="flex flex-col gap-6 mb-10 items-center">
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
      </div>

      {/* Results Count */}
      <p className="text-gray-500 text-sm mb-6 text-center">
        Showing {filteredLocations.length} of {locations.length} places
      </p>

      {/* Location Cards Grid */}
      {filteredLocations.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLocations.map((location) => {
            const slug = generateSlug(location.name);
            return (
              <LocationCard
                key={location.id}
                location={location}
                ref={(el) => setLocationRef(slug, el)}
                isHighlighted={highlightedSlug === slug}
              />
            );
          })}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-gray-500 text-lg">No places found matching your search.</p>
          <button
            onClick={() => {
              setSearchTerm("");
              setSelectedCategory("All");
            }}
            className="mt-4 text-emerald-600 hover:text-emerald-700 font-medium"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
