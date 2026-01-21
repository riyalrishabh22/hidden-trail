import Link from "next/link";
import { ArrowLeft, FileText, AlertTriangle } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DMCA Policy",
  description: "Digital Millennium Copyright Act (DMCA) copyright infringement policy and complaint procedure for Hidden Trails Rishikesh.",
};

export default function DMCA() {
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
            <FileText className="text-emerald-600" size={40} />
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              DMCA Copyright Policy
            </h1>
          </div>

          <div className="prose prose-emerald max-w-none">
            <section className="mb-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Hidden Trails respects the intellectual property rights of others and expects our users to do the same. 
                This page outlines our policy regarding copyright infringement in accordance with the Digital Millennium 
                Copyright Act (DMCA).
              </p>
              <p className="text-gray-700 leading-relaxed">
                It is our policy to respond to clear notices of alleged copyright infringement that comply with the DMCA. 
                If you believe that your copyrighted work has been copied in a way that constitutes copyright infringement 
                and is accessible on this site, please notify our copyright agent as specified below.
              </p>
            </section>

            {/* Notice Requirements */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Filing a DMCA Notice</h2>
              <p className="text-gray-700 mb-4">
                If you believe that content on Hidden Trails infringes your copyright, please provide our designated 
                copyright agent with a written notice containing the following information:
              </p>
              
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">1. Identification of Copyrighted Work</h3>
                  <p className="text-sm text-gray-600">
                    A physical or electronic signature of the person authorized to act on behalf of the owner of the 
                    copyright interest. Identify the copyrighted work claimed to have been infringed. If multiple works 
                    are covered by a single notification, provide a representative list.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">2. Identification of Infringing Material</h3>
                  <p className="text-sm text-gray-600">
                    Identification of the material that is claimed to be infringing or to be the subject of infringing 
                    activity, with information reasonably sufficient to permit us to locate the material on our website 
                    (URL, page name, specific location description).
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">3. Contact Information</h3>
                  <p className="text-sm text-gray-600">
                    Your contact information, including name, address, telephone number, and email address.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">4. Good Faith Statement</h3>
                  <p className="text-sm text-gray-600">
                    A statement that you have a good faith belief that use of the material in the manner complained of 
                    is not authorized by the copyright owner, its agent, or the law.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">5. Accuracy Statement</h3>
                  <p className="text-sm text-gray-600">
                    A statement that the information in the notification is accurate, and under penalty of perjury, 
                    that you are authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.
                  </p>
                </div>
              </div>
            </section>

            {/* Where to Send Notice */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Copyright Agent Contact</h2>
              <p className="text-gray-700 mb-4">
                All DMCA notices should be sent to our designated copyright agent:
              </p>
              
              <div className="bg-emerald-50 border-2 border-emerald-300 rounded-xl p-6">
                <p className="font-semibold text-gray-800 mb-3">DMCA Agent - Hidden Trails</p>
                <p className="text-sm text-gray-700 mb-2">
                  <strong>Email:</strong> dmca@hiddentrails.com
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  <strong>Subject Line:</strong> DMCA Takedown Request - [Your Name/Company]
                </p>
                <p className="text-sm text-gray-700 mb-4">
                  <strong>Postal Address:</strong><br />
                  Hidden Trails - Copyright Agent<br />
                  Laxman Jhula Road<br />
                  Rishikesh, Uttarakhand 249302<br />
                  India
                </p>
                <div className="bg-white border border-emerald-200 rounded-lg p-4 mt-4">
                  <p className="text-xs text-gray-600 italic">
                    Note: Please ensure your notice includes all required information listed above. Incomplete notices 
                    may not be processed.
                  </p>
                </div>
              </div>
            </section>

            {/* Counter-Notice */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Filing a Counter-Notice</h2>
              <p className="text-gray-700 mb-4">
                If you believe that material you posted was removed or access to it was disabled by mistake or 
                misidentification, you may file a counter-notice with our copyright agent containing:
              </p>
              
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-4">
                <li>Your physical or electronic signature</li>
                <li>Identification of the material that has been removed or disabled and its location before removal</li>
                <li>A statement under penalty of perjury that you have a good faith belief the material was removed or 
                disabled as a result of mistake or misidentification</li>
                <li>Your name, address, telephone number, and email address</li>
                <li>A statement that you consent to the jurisdiction of the Federal District Court for the judicial 
                district in which your address is located, and that you will accept service of process from the person 
                who filed the original DMCA notice</li>
              </ul>

              <p className="text-sm text-gray-600 italic">
                Upon receipt of a valid counter-notice, we will forward it to the party who submitted the original 
                DMCA notice. The original complainant will then have 10 business days to notify us that they have 
                filed a court action to restrain the allegedly infringing activity. If we do not receive such 
                notification, we may restore the removed material.
              </p>
            </section>

            {/* Repeat Infringer Policy */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Repeat Infringer Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                In accordance with the DMCA and other applicable laws, Hidden Trails has adopted a policy of terminating, 
                in appropriate circumstances and at our sole discretion, users or account holders who are deemed to be 
                repeat infringers. We may also, at our sole discretion, limit access to our website and/or terminate the 
                accounts of any users who infringe any intellectual property rights of others, whether or not there is 
                any repeat infringement.
              </p>
            </section>

            {/* Our Content Policy */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Approach to Copyright</h2>
              <p className="text-gray-700 mb-4">
                Hidden Trails takes copyright seriously. We strive to:
              </p>
              
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold flex-shrink-0">✓</span>
                  <span>Create original content and descriptions for all locations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold flex-shrink-0">✓</span>
                  <span>Use only photographs that we have taken ourselves or have proper permission to use</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold flex-shrink-0">✓</span>
                  <span>Give proper attribution when using information from other sources</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold flex-shrink-0">✓</span>
                  <span>Respond promptly to legitimate copyright concerns</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold flex-shrink-0">✓</span>
                  <span>Review and verify user-submitted content before publication</span>
                </li>
              </ul>
            </section>

            {/* False Claims Warning */}
            <section className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
              <div className="flex items-start gap-3">
                <AlertTriangle className="text-amber-600 flex-shrink-0" size={24} />
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">Warning About False Claims</h2>
                  <p className="text-sm text-gray-700 mb-3">
                    Please be aware that under Section 512(f) of the DMCA, any person who knowingly materially 
                    misrepresents that material or activity is infringing may be subject to liability for damages. 
                  </p>
                  <p className="text-sm text-gray-700">
                    Do not make false claims. If you are unsure whether material infringes your copyright, you should 
                    first contact a lawyer. Filing a false DMCA notice can have serious legal consequences.
                  </p>
                </div>
              </div>
            </section>

            {/* Additional Information */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Additional Resources</h2>
              <p className="text-gray-700 mb-4">
                For more information about the DMCA and copyright law, please visit:
              </p>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-2 ml-4">
                <li>
                  <a 
                    href="https://www.copyright.gov/legislation/dmca.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-emerald-600 hover:text-emerald-700 font-medium"
                  >
                    U.S. Copyright Office - DMCA Text
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.copyright.gov/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-emerald-600 hover:text-emerald-700 font-medium"
                  >
                    U.S. Copyright Office Official Website
                  </a>
                </li>
              </ul>
            </section>

            {/* Last Updated */}
            <section className="border-t border-gray-200 pt-6">
              <p className="text-sm text-gray-600">
                <strong>Last Updated:</strong> {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
              </p>
              <p className="text-sm text-gray-600 mt-2">
                This DMCA policy may be updated from time to time. Please check this page periodically for changes.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
