import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Hidden Trails Rishikesh - Guidelines for using our website.",
};

export default function TermsOfService() {
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
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Terms of Service
          </h1>
          <p className="text-gray-500 text-sm mb-8">
            Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>

          <div className="prose prose-emerald max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">Agreement to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                By accessing and using Hidden Trails, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">Use of Service</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Hidden Trails provides information about locations and places to visit in Rishikesh. You agree to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Use the website for lawful purposes only</li>
                <li>Not attempt to harm or disrupt the website</li>
                <li>Respect intellectual property rights</li>
                <li>Not use automated systems to access the site without permission</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">Content and Information</h2>
              <p className="text-gray-700 leading-relaxed">
                We strive to provide accurate and up-to-date information about locations in Rishikesh. However, we do not guarantee the accuracy, completeness, or reliability of any content. Always verify important information before making travel decisions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">Intellectual Property</h2>
              <p className="text-gray-700 leading-relaxed">
                All content on Hidden Trails, including text, images, logos, and design, is owned by us or our licensors. You may not copy, reproduce, or distribute our content without permission.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">External Links</h2>
              <p className="text-gray-700 leading-relaxed">
                Our website may contain links to third-party websites (such as Google Maps). We are not responsible for the content or privacy practices of these external sites.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">Disclaimer of Warranties</h2>
              <p className="text-gray-700 leading-relaxed">
                Hidden Trails is provided "as is" without warranties of any kind. We do not guarantee that the website will be uninterrupted, secure, or error-free.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed">
                We shall not be liable for any damages arising from your use of the website, including but not limited to direct, indirect, incidental, or consequential damages.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">Travel Safety</h2>
              <p className="text-gray-700 leading-relaxed">
                When visiting locations featured on our site, you are responsible for your own safety. Please follow local guidelines, respect nature, and take appropriate precautions during your travels.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">Advertising</h2>
              <p className="text-gray-700 leading-relaxed">
                We display advertisements through Google AdSense. We are not responsible for the content of these advertisements or the products/services advertised.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">Changes to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to modify these Terms of Service at any time. Continued use of the website after changes constitutes acceptance of the modified terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">Contact Information</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have questions about these Terms of Service, please contact us at support@hiddentrails.com.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
