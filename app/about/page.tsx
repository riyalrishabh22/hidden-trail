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
                We are passionate locals and travel enthusiasts who have spent years exploring every corner of Rishikesh. Our team personally visits and verifies each location before adding it to our collection.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Whether you're a first-time visitor or a returning traveler, Hidden Trails helps you experience Rishikesh in a way that most people never do — authentic, peaceful, and unforgettable.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Join Our Community</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We're constantly adding new locations and updating our guides. If you've discovered a hidden gem in Rishikesh that we haven't featured yet, we'd love to hear from you!
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
                "The journey of a thousand miles begins with a single step." <br />
                Let Hidden Trails be your guide to the road less traveled.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
