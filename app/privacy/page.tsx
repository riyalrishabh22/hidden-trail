import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Hidden Trails Rishikesh - Learn how we handle your data and protect your privacy.",
};

export default function PrivacyPolicy() {
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
            Privacy Policy
          </h1>
          <p className="text-gray-500 text-sm mb-8">
            Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>

          <div className="prose prose-emerald max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">Introduction</h2>
              <p className="text-gray-700 leading-relaxed">
                Welcome to Hidden Trails. We are committed to protecting your privacy and ensuring you have a positive experience on our website. This policy outlines how we collect, use, and safeguard your information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">Information We Collect</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                We collect minimal information to provide you with the best experience:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Browser type and device information</li>
                <li>Pages you visit on our site</li>
                <li>Time and date of your visits</li>
                <li>IP address (anonymized)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">How We Use Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                We use the collected information to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Improve our website and user experience</li>
                <li>Analyze site usage and trends</li>
                <li>Provide relevant content and location information</li>
                <li>Ensure the security of our website</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">Cookies and Tracking</h2>
              <p className="text-gray-700 leading-relaxed">
                We use cookies and similar tracking technologies to enhance your browsing experience. These help us understand how you interact with our site and remember your preferences. You can control cookies through your browser settings.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">Third-Party Services</h2>
              <p className="text-gray-700 leading-relaxed">
                We use Google AdSense to display advertisements on our site. Google may use cookies to serve ads based on your prior visits to our website or other websites. You can opt out of personalized advertising by visiting Google Ads Settings.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">Data Security</h2>
              <p className="text-gray-700 leading-relaxed">
                We implement reasonable security measures to protect your information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">Your Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Access the information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt out of marketing communications</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">Changes to This Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the Last updated date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">Contact Us</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us through our website or email us at privacy@hiddentrails.com.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
