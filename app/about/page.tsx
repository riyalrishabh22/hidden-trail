import Link from "next/link";
import { ArrowLeft, Mountain, MapPin, Heart, Compass } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Hidden Trails - Your guide to discovering the secret places of Rishikesh.",
};

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium mb-6"
        >
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </Link>

        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10">
          <div className="flex items-center gap-3 mb-6">
            <Mountain className="text-emerald-600" size={40} />
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              About Hidden Trails
            </h1>
          </div>

          <div className="prose prose-emerald max-w-none">
            <section className="mb-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Welcome to <span className="font-semibold text-emerald-600">Hidden Trails</span> — your gateway to discovering the lesser-known treasures of Rishikesh, the Yoga Capital of the World.
              </p>
              <p className="text-gray-700 leading-relaxed">
                While Rishikesh is famous for its iconic landmarks like Laxman Jhula and Ram Jhula, we believe the true magic lies in the hidden corners, secret waterfalls, peaceful ghats, and offbeat temples that most travelers never discover.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Compass className="text-emerald-600" size={28} />
                Our Mission
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Our mission is to help adventurous travelers and spiritual seekers explore Rishikesh beyond the crowded tourist spots. We curate authentic experiences that connect you with the natural beauty and spiritual essence of this sacred city.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <MapPin className="text-emerald-600" size={28} />
                What We Offer
              </h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span><strong>Hidden Locations:</strong> Discover secret waterfalls, serene temples, and peaceful spots away from the crowds.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span><strong>Detailed Information:</strong> Get comprehensive details about each location, including how to reach, best time to visit, and what to expect.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span><strong>Authentic Experiences:</strong> Find places that offer genuine spiritual and cultural experiences.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span><strong>Nature & Adventure:</strong> Explore natural trails, riverside spots, and scenic viewpoints perfect for nature lovers.</span>
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Heart className="text-emerald-600" size={28} />
                Why Hidden Trails?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We are passionate locals and travel enthusiasts who have spent years exploring every corner of Rishikesh. 
                Our team personally visits and verifies each location before adding it to our collection. This hands-on 
                approach ensures that every recommendation on our platform is accurate, up-to-date, and genuinely worth 
                your time.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Whether you are a first-time visitor planning your inaugural trip to the Yoga Capital, or a returning 
                traveler seeking new adventures, Hidden Trails helps you experience Rishikesh in a way that most people 
                never do — authentic, peaceful, and unforgettable. We understand that every traveler is unique, which is 
                why our diverse collection includes everything from challenging mountain treks to serene meditation spots, 
                from hidden cafes perfect for digital nomads to sacred temples steeped in ancient traditions.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our platform was born from a simple observation: despite being one of India's most visited spiritual 
                destinations, Rishikesh's most enchanting locations remain largely undiscovered by the majority of tourists. 
                We saw travelers spending their entire visit in the same crowded areas, missing out on the authentic 
                experiences that make this region truly special. Hidden Trails bridges this gap by connecting curious 
                explorers with the secret spots that locals have cherished for generations.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Story</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Hidden Trails began as a personal travel journal maintained by a group of adventure enthusiasts and 
                spiritual seekers who made Rishikesh their second home. Over the years, as we trekked to remote waterfalls, 
                meditated at sunrise viewpoints, and discovered peaceful corners along the Ganges, we realized that we had 
                accumulated a treasure trove of knowledge that could benefit fellow travelers.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                What started as sharing recommendations with friends and fellow hostel travelers gradually evolved into a 
                structured database of hidden locations. We began documenting not just the places themselves, but practical 
                details like how to reach them, the best times to visit, what to bring, and insider tips that can make the 
                difference between a mediocre experience and an extraordinary one.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Today, Hidden Trails serves thousands of travelers each month, helping them discover the Rishikesh that 
                exists beyond Instagram hotspots and overcrowded tourist circuits. Our community has grown to include 
                contributors from around the world who share our passion for authentic travel and sustainable tourism.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Values</h2>
              <div className="space-y-4">
                <div className="bg-gray-50 border-l-4 border-emerald-600 p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Authenticity</h3>
                  <p className="text-sm text-gray-700">
                    We only recommend places we have personally experienced. Every location in our database has been 
                    visited and verified by our team. No paid placements, no tourist traps—just genuine recommendations 
                    from people who truly know and love Rishikesh.
                  </p>
                </div>
                <div className="bg-gray-50 border-l-4 border-emerald-600 p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Sustainability</h3>
                  <p className="text-sm text-gray-700">
                    We believe in responsible tourism that preserves the natural beauty and cultural integrity of 
                    Rishikesh. Our recommendations emphasize respect for local communities, environmental conservation, 
                    and sustainable travel practices. We encourage visitors to leave no trace and contribute positively 
                    to the local economy.
                  </p>
                </div>
                <div className="bg-gray-50 border-l-4 border-emerald-600 p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Community</h3>
                  <p className="text-sm text-gray-700">
                    Hidden Trails is more than a website—it's a community of like-minded travelers who value meaningful 
                    experiences over Instagram photo ops. We foster connections between travelers and locals, encouraging 
                    cultural exchange and mutual respect.
                  </p>
                </div>
                <div className="bg-gray-50 border-l-4 border-emerald-600 p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Accuracy</h3>
                  <p className="text-sm text-gray-700">
                    Travel information changes constantly. We regularly update our location database to ensure accuracy. 
                    If you find outdated information or have updates to share, we welcome your input to keep our platform 
                    reliable and helpful.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What Makes Us Different</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Unlike generic travel websites that cover hundreds of destinations superficially, Hidden Trails focuses 
                exclusively on Rishikesh and its surrounding regions. This specialization allows us to maintain deep 
                knowledge of the area and provide insights that broader platforms simply cannot match.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                We go beyond basic directions and opening hours. Each location entry includes contextual information about 
                the history, cultural significance, seasonal variations, difficulty levels, and personal anecdotes from our 
                visits. We want you to understand not just where to go, but why these places matter and how to experience 
                them in the most meaningful way.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our search and filtering system is designed specifically for the way travelers actually plan their 
                Rishikesh adventures. Whether you're looking for spiritual experiences, nature escapes, adventure activities, 
                or peaceful cafes to work from, our intuitive interface helps you find exactly what you need.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Join Our Community</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We are constantly adding new locations and updating our guides. If you discovered a hidden gem in Rishikesh that we have not featured yet, we will love to hear from you!
              </p>
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6">
                <p className="text-gray-800 font-medium mb-2">Get in Touch</p>
                <p className="text-gray-700 text-sm mb-3">
                  Share your discoveries, ask questions, or just say hello.
                </p>
                <a
                  href="mailto:info@hiddentrails.com"
                  className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium"
                >
                  <span>info@hiddentrails.com</span>
                </a>
              </div>
            </section>

            <section>
              <p className="text-center text-gray-600 italic pt-6 border-t border-gray-200">
                The journey of a thousand miles begins with a single step <br />
                Let Hidden Trails be your guide to the road less traveled.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
