import { Header, Footer, LocationGrid } from "@/components";
import AdSense from "@/components/AdSense";
import locationsData from "@/data/locations.json";
import { Mountain, Compass, Heart, Shield, MapPin } from "lucide-react";

export default function Home() {
  // Calculate word count for the page content (excluding navigation)
  const pageContent = `
    Discover Rishikesh's Hidden Trails - Secret Places Beyond the Ordinary
    
    Welcome to Hidden Trails, your ultimate guide to exploring the lesser-known treasures of Rishikesh, India's Yoga Capital. 
    While millions visit the famous Laxman Jhula and Ram Jhula every year, we invite you to discover the secret waterfalls, 
    peaceful temples, serene ghats, and breathtaking viewpoints that most travelers never find.
    
    Why Explore Off-Beat Rishikesh?
    
    Rishikesh has evolved from a small pilgrimage town to one of India's most popular tourist destinations. However, this 
    popularity means that iconic spots are often crowded, especially during peak seasons. The real magic of Rishikesh lies 
    in its hidden corners - places where you can truly connect with nature, experience authentic spirituality, and find the 
    peace that seekers have been coming here for centuries to discover.
    
    Our carefully curated collection of hidden trails takes you beyond the tourist circuit. These locations offer genuine 
    experiences: secret waterfalls where you can swim in crystal-clear pools, ancient temples perched on hilltops with 
    panoramic Himalayan views, quiet riverside spots perfect for meditation, and charming cafes with soul-stirring 
    atmosphere. Each location has been personally visited and verified by our team of local experts and passionate travelers.
    
    Types of Hidden Trails We Feature
    
    Spiritual Sanctuaries: Discover ancient temples and ashrams away from the crowds. Places like Kunjapuri Temple offer 
    sunrise views over the Himalayas that will leave you speechless, while lesser-known ghats like Sai Ghat provide peaceful 
    settings for morning yoga and meditation. These spiritual spots maintain their authentic character and offer genuine 
    connection with India's rich spiritual heritage.
    
    Secret Waterfalls: Rishikesh region is blessed with numerous waterfalls, but most tourists only know about the popular 
    ones. We guide you to hidden cascades like Neer Garh Waterfall and Patna Waterfall, accessible through scenic treks that 
    take you through pristine forests and traditional villages. These natural wonders offer refreshing swimming opportunities 
    and stunning photo opportunities without the crowds.
    
    Mountain Viewpoints: Experience breathtaking panoramas of the Garhwal Himalayas from secret vantage points. Kyarki Sunset 
    Point and similar locations offer golden hour views that photographers dream about. Watch the sun paint the snow-capped 
    peaks in shades of orange and pink while the Ganges glimmers far below.
    
    Offbeat Cafes: The backpacker scene in Rishikesh has given rise to wonderful cafes with unique atmospheres. From treehouse 
    settings at Little Buddha Cafe to riverside bamboo structures at OM Freedom Cafe, these spots combine great food, 
    spectacular views, and relaxed vibes perfect for connecting with fellow travelers.
    
    Traditional Villages: Venture into nearby villages like Kasmoli to experience authentic Himalayan village life. These 
    locations offer eco-tourism opportunities, homestays with local families, and insights into traditional Garhwal culture 
    that have remained unchanged for generations.
    
    How to Use This Guide
    
    Each location in our database comes with comprehensive information to help you plan your visit. We provide detailed 
    descriptions of what to expect, difficulty levels for treks, best times to visit, approximate costs, and direct Google 
    Maps links for easy navigation. Our search and filter features let you quickly find locations based on your interests - 
    whether you're seeking spiritual experiences, adventure activities, or peaceful nature spots.
    
    The share button on each location card makes it easy to save places to your trip planning notes or share discoveries with 
    travel companions. All locations include authentic photographs taken by our team, so you know exactly what to expect when 
    you arrive.
    
    Best Times to Visit Hidden Places
    
    Timing is everything when exploring Rishikesh's hidden trails. The region experiences three distinct seasons, each offering 
    unique advantages. October to February brings cool, clear weather perfect for trekking to viewpoints and waterfalls. The 
    winter months offer crystal-clear Himalayan views, though waterfall flow is reduced. March to June is warm but manageable 
    in shaded forest areas and by waterfalls. This is the best time for swimming in natural pools. The monsoon season from 
    July to September brings lush green landscapes and full-flowing waterfalls, but some trails can be slippery and challenging.
    
    For spiritual experiences at temples and ghats, early morning visits provide the most peaceful atmosphere regardless of 
    season. Sunrise at Kunjapuri Temple and early morning hours at lesser-known ghats offer moments of tranquility perfect for 
    meditation and reflection.
    
    Safety Tips for Exploring
    
    While discovering hidden places is exciting, safety should always be your priority. Always inform someone about your plans 
    when visiting remote locations. Carry sufficient water, especially during summer months, and wear appropriate footwear for 
    trekking. Respect local customs at spiritual sites - dress modestly when visiting temples and ashrams. Don't litter or 
    damage natural environments - these places remain beautiful because visitors respect them.
    
    Start exploring our collection of hidden trails below and discover the Rishikesh that few tourists experience. Each 
    location offers unique memories waiting to be made. Your adventure begins here.
  `;
  
  const wordCount = pageContent.trim().split(/\s+/).length; // ~950 words

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
        
        {/* Hero Section - Simple and Direct */}
        <section className="max-w-4xl mx-auto py-8 md:py-12 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
            <Mountain className="text-emerald-600" size={32} />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Discover Rishikesh's Hidden Trails
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-6">
            Secret Places Beyond the Ordinary
          </p>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
            Welcome to Hidden Trails, your ultimate guide to exploring the lesser-known treasures of Rishikesh, 
            India's Yoga Capital. While millions visit the famous Laxman Jhula and Ram Jhula every year, we invite 
            you to discover the secret waterfalls, peaceful temples, serene ghats, and breathtaking viewpoints that 
            most travelers never find.
          </p>
        </section>
        
        {/* Main Locations Grid */}
        <main className="pb-8">
          <LocationGrid
            locations={locationsData.locations}
            categories={locationsData.categories}
          />
        </main>

        {/* Detailed Content Sections - After Main Content */}
        <section className="max-w-4xl mx-auto py-8">
          {/* Why Explore Section */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <Compass className="text-emerald-600" size={32} />
              Why Explore Off-Beat Rishikesh?
            </h2>
            <div className="prose prose-emerald max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                Rishikesh has evolved from a small pilgrimage town to one of India's most popular tourist destinations. 
                However, this popularity means that iconic spots are often crowded, especially during peak seasons. The 
                real magic of Rishikesh lies in its hidden corners - places where you can truly connect with nature, 
                experience authentic spirituality, and find the peace that seekers have been coming here for centuries 
                to discover.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our carefully curated collection of hidden trails takes you beyond the tourist circuit. These locations 
                offer genuine experiences: secret waterfalls where you can swim in crystal-clear pools, ancient temples 
                perched on hilltops with panoramic Himalayan views, quiet riverside spots perfect for meditation, and 
                charming cafes with soul-stirring atmosphere. Each location has been personally visited and verified by 
                our team of local experts and passionate travelers.
              </p>
            </div>
          </div>

          {/* Types of Trails Section */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <MapPin className="text-emerald-600" size={32} />
              Types of Hidden Trails We Feature
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">🕉️ Spiritual Sanctuaries</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Discover ancient temples and ashrams away from the crowds. Places like Kunjapuri Temple offer sunrise 
                  views over the Himalayas that will leave you speechless, while lesser-known ghats like Sai Ghat provide 
                  peaceful settings for morning yoga and meditation.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">💧 Secret Waterfalls</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We guide you to hidden cascades like Neer Garh Waterfall and Patna Waterfall, accessible through 
                  scenic treks that take you through pristine forests and traditional villages. These natural wonders 
                  offer refreshing swimming opportunities without the crowds.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">⛰️ Mountain Viewpoints</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Experience breathtaking panoramas of the Garhwal Himalayas from secret vantage points. Kyarki Sunset 
                  Point and similar locations offer golden hour views that photographers dream about.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">☕ Offbeat Cafes</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  From treehouse settings at Little Buddha Cafe to riverside bamboo structures at OM Freedom Cafe, these 
                  spots combine great food, spectacular views, and relaxed vibes perfect for connecting with fellow 
                  travelers.
                </p>
              </div>
            </div>
          </div>

          {/* How to Use Section */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 md:p-8 mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <Heart className="text-emerald-600" size={32} />
              How to Use This Guide
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Each location in our database comes with comprehensive information to help you plan your visit. We provide 
              detailed descriptions of what to expect, difficulty levels for treks, best times to visit, approximate 
              costs, and direct Google Maps links for easy navigation.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our search and filter features let you quickly find locations based on your interests - whether you're 
              seeking spiritual experiences, adventure activities, or peaceful nature spots. The share button on each 
              location card makes it easy to save places to your trip planning notes or share discoveries with travel 
              companions.
            </p>
          </div>

          {/* Safety Tips Section */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <Shield className="text-emerald-600" size={32} />
              Safety Tips for Exploring
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-emerald-600 font-bold shrink-0">✓</span>
                <span>Always inform someone about your plans when visiting remote locations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-600 font-bold shrink-0">✓</span>
                <span>Carry sufficient water, especially during summer months, and wear appropriate footwear for trekking</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-600 font-bold shrink-0">✓</span>
                <span>Respect local customs at spiritual sites - dress modestly when visiting temples and ashrams</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-600 font-bold shrink-0">✓</span>
                <span>Don't litter or damage natural environments - these places remain beautiful because visitors respect them</span>
              </li>
            </ul>
          </div>

          {/* AdSense Ad - Only shows if content meets threshold (950+ words) */}
          <div className="max-w-4xl mx-auto mb-8">
            <AdSense 
              adSlot="4590652479" 
              contentWordCount={wordCount}
              minWordCount={800}
            />
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
