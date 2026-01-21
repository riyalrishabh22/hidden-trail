import Link from "next/link";
import { ArrowLeft, TrendingUp, Users, Target, BarChart3, Mail } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Advertise With Us",
  description: "Reach travel enthusiasts and adventure seekers exploring Rishikesh. Partner with Hidden Trails for targeted advertising opportunities.",
};

export default function Advertise() {
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
            <TrendingUp className="text-emerald-600" size={40} />
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              Advertise With Us
            </h1>
          </div>

          <div className="prose prose-emerald max-w-none">
            <section className="mb-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Partner with Hidden Trails to connect with an engaged audience of adventure travelers, spiritual seekers, 
                and tourists planning their Rishikesh experience. Our platform attracts visitors actively seeking unique 
                locations, travel services, and authentic experiences in the Yoga Capital of India.
              </p>
            </section>

            {/* Audience Overview */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
                <Users className="text-emerald-600" size={28} />
                Our Audience
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">15K+</div>
                  <p className="text-sm font-semibold text-gray-800 mb-1">Monthly Visitors</p>
                  <p className="text-xs text-gray-600">Growing travel community actively planning Rishikesh trips</p>
                </div>

                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">3.5min</div>
                  <p className="text-sm font-semibold text-gray-800 mb-1">Avg. Session Duration</p>
                  <p className="text-xs text-gray-600">Highly engaged users exploring multiple locations</p>
                </div>

                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">65%</div>
                  <p className="text-sm font-semibold text-gray-800 mb-1">International Visitors</p>
                  <p className="text-xs text-gray-600">Global audience from US, Europe, Australia, and Asia</p>
                </div>
              </div>

              <div className="mt-6 bg-gray-50 border border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Visitor Demographics</h3>
                <ul className="grid md:grid-cols-2 gap-3 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span><strong>Age Range:</strong> 25-45 years (primary), 18-60+ (overall)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span><strong>Interests:</strong> Adventure travel, spirituality, yoga, nature, photography</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span><strong>Travel Style:</strong> Budget to mid-range travelers, backpackers, digital nomads</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span><strong>Planning Phase:</strong> 70% in active trip planning (within 3 months)</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Advertising Opportunities */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
                <Target className="text-emerald-600" size={28} />
                Advertising Opportunities
              </h2>
              
              <div className="space-y-6">
                {/* Display Advertising */}
                <div className="border border-gray-200 rounded-xl p-6 hover:border-emerald-300 transition-colors">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Display Advertising</h3>
                  <p className="text-gray-700 mb-4">
                    Premium ad placements across our website using Google AdSense platform. Reach travelers as they explore 
                    locations and plan their itineraries.
                  </p>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-gray-700">
                    <strong>Ideal for:</strong> Hotels, tour operators, adventure companies, cafes, restaurants, yoga centers, 
                    travel gear, and local businesses in Rishikesh
                  </div>
                </div>

                {/* Sponsored Listings */}
                <div className="border border-gray-200 rounded-xl p-6 hover:border-emerald-300 transition-colors">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Sponsored Location Listings</h3>
                  <p className="text-gray-700 mb-4">
                    Feature your hotel, cafe, tour service, or attraction as a highlighted location with enhanced visibility, 
                    detailed description, multiple images, and special offers section.
                  </p>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-gray-700">
                    <strong>Includes:</strong> Priority placement in search results, featured badge, extended content, 
                    booking links, special promotions, and dedicated page
                  </div>
                </div>

                {/* Content Partnership */}
                <div className="border border-gray-200 rounded-xl p-6 hover:border-emerald-300 transition-colors">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Content Partnerships</h3>
                  <p className="text-gray-700 mb-4">
                    Collaborate with our editorial team to create authentic, valuable content that showcases your service or 
                    location while providing genuine value to travelers.
                  </p>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-gray-700">
                    <strong>Examples:</strong> Sponsored travel guides, experience stories, destination features, seasonal 
                    recommendations, activity spotlights
                  </div>
                </div>

                {/* Newsletter Sponsorship */}
                <div className="border border-gray-200 rounded-xl p-6 hover:border-emerald-300 transition-colors">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Newsletter Sponsorship</h3>
                  <p className="text-gray-700 mb-4">
                    Reach our engaged subscriber base directly with featured placements in our email newsletters highlighting 
                    new locations, seasonal guides, and travel tips.
                  </p>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-gray-700">
                    <strong>Reach:</strong> Growing subscriber list of 5,000+ engaged travelers and Rishikesh enthusiasts
                  </div>
                </div>
              </div>
            </section>

            {/* Why Partner With Us */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
                <BarChart3 className="text-emerald-600" size={28} />
                Why Partner With Hidden Trails?
              </h2>
              
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold text-xl flex-shrink-0">✓</span>
                  <div>
                    <strong className="text-gray-800">Highly Targeted Audience:</strong> Reach travelers actively searching 
                    for Rishikesh experiences, not passive browsers
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold text-xl flex-shrink-0">✓</span>
                  <div>
                    <strong className="text-gray-800">Quality Over Quantity:</strong> Our focused niche attracts engaged 
                    visitors in the planning and booking phase
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold text-xl flex-shrink-0">✓</span>
                  <div>
                    <strong className="text-gray-800">Authentic Brand Alignment:</strong> Partner with a trusted resource 
                    known for authentic, quality recommendations
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold text-xl flex-shrink-0">✓</span>
                  <div>
                    <strong className="text-gray-800">Growing Platform:</strong> Join a rapidly expanding community as more 
                    travelers discover off-beat Rishikesh
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold text-xl flex-shrink-0">✓</span>
                  <div>
                    <strong className="text-gray-800">Flexible Options:</strong> From display ads to content partnerships, 
                    we offer solutions for various budgets and goals
                  </div>
                </div>
              </div>
            </section>

            {/* Pricing Information */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Pricing & Packages</h2>
              <p className="text-gray-700 mb-6">
                We offer flexible advertising packages tailored to your budget and marketing objectives. Pricing varies 
                based on ad format, placement, duration, and exclusivity.
              </p>
              
              <div className="bg-emerald-50 border-2 border-emerald-300 rounded-xl p-6 text-center">
                <p className="text-gray-800 font-semibold mb-4">
                  Interested in advertising opportunities? Let's discuss how we can help you reach your target audience.
                </p>
                <a
                  href="mailto:business@hiddentrails.com?subject=Advertising Inquiry"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors font-medium"
                >
                  <Mail size={20} />
                  <span>Request Media Kit & Pricing</span>
                </a>
              </div>
            </section>

            {/* Contact Information */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get Started</h2>
              <p className="text-gray-700 mb-6">
                Ready to connect with travelers exploring Rishikesh? Our partnerships team will work with you to create 
                a customized advertising solution that meets your business goals.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-800 mb-2">Partnership Inquiries</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    For advertising packages, sponsored content, and long-term partnerships
                  </p>
                  <a href="mailto:business@hiddentrails.com" className="text-emerald-600 hover:text-emerald-700 font-medium text-sm">
                    business@hiddentrails.com
                  </a>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-800 mb-2">Media Kit</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Request our detailed media kit with audience insights, ad specs, and pricing
                  </p>
                  <a href="mailto:business@hiddentrails.com?subject=Media Kit Request" className="text-emerald-600 hover:text-emerald-700 font-medium text-sm">
                    Request Media Kit
                  </a>
                </div>
              </div>
            </section>

            {/* Guidelines */}
            <section className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Advertising Guidelines</h2>
              <p className="text-sm text-gray-700 mb-3">
                To maintain the quality and authenticity our audience trusts, we reserve the right to approve all 
                advertising content. We do not accept advertisements for:
              </p>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 ml-4">
                <li>Products or services that violate our community values</li>
                <li>Misleading or deceptive offers</li>
                <li>Content that contradicts responsible travel principles</li>
                <li>Services or businesses with poor ethical standards</li>
                <li>Anything prohibited by Google AdSense policies</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
