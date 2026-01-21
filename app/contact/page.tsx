import Link from "next/link";
import { ArrowLeft, Mail, MapPin, Phone, MessageSquare, Send } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Hidden Trails Rishikesh - Contact us for inquiries, suggestions, feedback, or to share hidden gems you've discovered.",
};

export default function Contact() {
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
            <MessageSquare className="text-emerald-600" size={40} />
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              Contact Us
            </h1>
          </div>

          <div className="prose prose-emerald max-w-none">
            <section className="mb-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We love hearing from travelers, adventure seekers, and everyone who shares our passion for discovering 
                Rishikesh's hidden treasures. Whether you have questions, suggestions, feedback, or have discovered a 
                hidden gem we haven't featured yet, we're here to listen.
              </p>
            </section>

            {/* Contact Methods */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Get In Touch</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Email Contact */}
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Mail className="text-emerald-600" size={24} />
                    <h3 className="text-lg font-semibold text-gray-800">Email Us</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    For general inquiries, partnership opportunities, or detailed questions about locations.
                  </p>
                  <a
                    href="mailto:info@hiddentrails.com"
                    className="text-emerald-600 hover:text-emerald-700 font-medium"
                  >
                    info@hiddentrails.com
                  </a>
                </div>

                {/* Feedback */}
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Send className="text-emerald-600" size={24} />
                    <h3 className="text-lg font-semibold text-gray-800">Share Your Experience</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Visited one of our featured locations? Share your photos, tips, and experiences with fellow travelers.
                  </p>
                  <a
                    href="mailto:feedback@hiddentrails.com"
                    className="text-emerald-600 hover:text-emerald-700 font-medium"
                  >
                    feedback@hiddentrails.com
                  </a>
                </div>

                {/* Report Issue */}
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <MapPin className="text-emerald-600" size={24} />
                    <h3 className="text-lg font-semibold text-gray-800">Submit a Hidden Gem</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Discovered a secret location in Rishikesh that deserves to be featured? Share it with our community!
                  </p>
                  <a
                    href="mailto:submit@hiddentrails.com"
                    className="text-emerald-600 hover:text-emerald-700 font-medium"
                  >
                    submit@hiddentrails.com
                  </a>
                </div>

                {/* Business */}
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Phone className="text-emerald-600" size={24} />
                    <h3 className="text-lg font-semibold text-gray-800">Business Inquiries</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Interested in advertising, partnerships, or collaboration opportunities with Hidden Trails?
                  </p>
                  <a
                    href="mailto:business@hiddentrails.com"
                    className="text-emerald-600 hover:text-emerald-700 font-medium"
                  >
                    business@hiddentrails.com
                  </a>
                </div>
              </div>
            </section>

            {/* What to Include Section */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">When Submitting a Hidden Gem</h2>
              <p className="text-gray-700 mb-4">
                To help us feature your discovery and create an accurate guide for other travelers, please include:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Location name and address (or GPS coordinates)</li>
                <li>Category (temple, waterfall, viewpoint, cafe, etc.)</li>
                <li>Detailed description (what makes it special, what visitors can expect)</li>
                <li>How to reach the location (transportation options, trekking required, etc.)</li>
                <li>Best time to visit (season, time of day)</li>
                <li>Any entry fees or special requirements</li>
                <li>Photos (if you have permission to share them)</li>
                <li>Your experience and tips for fellow travelers</li>
              </ul>
            </section>

            {/* Response Time */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Response Time</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We strive to respond to all inquiries within 48-72 hours during business days. For location submissions, 
                please allow up to 1-2 weeks as our team personally verifies each location before adding it to our guide.
              </p>
              <p className="text-gray-700 leading-relaxed">
                During peak travel seasons (October-November and March-April), response times may be slightly longer as 
                we're often out exploring new locations to add to our collection.
              </p>
            </section>

            {/* Office Location */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Base</h2>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <div className="flex items-start gap-3 mb-3">
                  <MapPin className="text-emerald-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <p className="font-semibold text-gray-800 mb-2">Hidden Trails Rishikesh</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Laxman Jhula Road<br />
                      Rishikesh, Uttarakhand 249302<br />
                      India
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4 italic">
                  * Please note: We operate primarily online. For in-person meetings, please email us in advance to schedule an appointment.
                </p>
              </div>
            </section>

            {/* Social Media (Placeholder) */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Follow Our Journey</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                While we focus on maintaining our website and exploring new locations, we occasionally share updates, 
                stunning photos, and travel tips. Connect with us to stay updated on new hidden gems as we discover them:
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:info@hiddentrails.com"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors text-sm font-medium"
                >
                  <Mail size={18} />
                  <span>Email Newsletter</span>
                </a>
              </div>
            </section>

            {/* Community Guidelines */}
            <section className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Community Guidelines</h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                When sharing information or photos with us, please ensure you have the right to share the content and 
                that it aligns with our values of responsible travel, environmental conservation, and respect for local 
                communities. We do not feature locations that are:
              </p>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 ml-4 mt-3">
                <li>On private property without owner permission</li>
                <li>Environmentally sensitive areas closed to tourists</li>
                <li>Culturally inappropriate or disrespectful to local customs</li>
                <li>Dangerous or requiring technical skills beyond average travelers</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
