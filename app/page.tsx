import { Header, Footer, LocationGrid } from "@/components";
import AdSense from "@/components/AdSense";
import locationsData from "@/data/locations.json";

export default function Home() {
  // Structured data for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Hidden Trails Rishikesh',
    description: 'Discover the hidden gems of Rishikesh - from secret waterfalls to peaceful temples, explore places beyond the ordinary.',
    url: 'https://hiddentrails.netlify.app',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://hiddentrails.netlify.app/?search={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Header />
        
        {/* AdSense Ad - Hero Section */}
        <div className="max-w-4xl mx-auto mb-8">
          <AdSense adSlot="4590652479" />
        </div>
        
        <main className="pb-8">
          <LocationGrid
            locations={locationsData.locations}
            categories={locationsData.categories}
          />
        </main>

        <Footer />
      </div>
    </div>
  );
}
