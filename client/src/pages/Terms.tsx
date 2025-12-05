import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsAndConditions() {
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage: "url('/images/Desktop%20-%2018%20(2).svg')",
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Header />

      <main className="pt-16">
        <div className="container mx-auto max-w-4xl px-6 py-12 text-gray-700 leading-relaxed bg-transparent">
          <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
            Terms and Conditions
          </h1>

          <p className="text-sm text-gray-500 mb-8 text-center">
            Last updated: December 04, 2025
          </p>

          <p className="mb-6">
            Please read these terms and conditions carefully before using Our Service.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
            Interpretation and Definitions
          </h2>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
            Interpretation
          </h3>
          <p className="mb-4">
            The words whose initial letters are capitalized have meanings defined
            under the following conditions. The following definitions shall have
            the same meaning regardless of whether they appear in singular or in
            plural.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
            Definitions
          </h3>
          <p className="mb-4">For the purposes of these Terms and Conditions:</p>

          <ul className="list-disc pl-6 space-y-3 mb-6">
            <li>
              <strong>Affiliate</strong> means an entity that controls, is controlled
              by, or is under common control with a party...
            </li>
            <li>
              <strong>Country</strong> refers to: New York, United States
            </li>
            <li>
              <strong>Company</strong> (referred to as either "the Company", "We",
              "Us" or "Our") refers to vnztech, 28 Park Row City, New York, United States.
            </li>
            <li>
              <strong>Device</strong> means any device that can access the Service such
              as a computer, a cell phone or a digital tablet.
            </li>
            <li>
              <strong>Service</strong> refers to the Website.
            </li>
            <li>
              <strong>Terms and Conditions</strong> (also referred as "Terms") mean
              these Terms and Conditions that form the entire agreement between You
              and the Company.
              {/* <a
                href="https://www.freeprivacypolicy.com/free-terms-and-conditions-generator/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Free Terms and Conditions Generator
              </a>. */}
            </li>
            <li>
              <strong>Third-party Social Media Service</strong> means any services or
              content provided by a third-party...
            </li>
            <li>
              <strong>Website</strong> refers to vnztech, accessible from{" "}
              <a
                href="https://vnztech.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                https://vnztech.com
              </a>
            </li>
            <li>
              <strong>You</strong> means the individual accessing or using the Service...
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">Acknowledgment</h2>
          <p className="mb-4">These are the Terms and Conditions governing the use of this Service...</p>
          <p className="mb-4">By accessing or using the Service You agree to be bound by these Terms...</p>
          <p className="mb-4">You represent that you are over the age of 18...</p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">Links to Other Websites</h2>
          <p className="mb-4">Our Service may contain links to third-party web sites or services...</p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">Termination</h2>
          <p className="mb-4">We may terminate or suspend Your access immediately...</p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">Limitation of Liability</h2>
          <p className="mb-4">Notwithstanding any damages that You might incur...</p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">"AS IS" and "AS AVAILABLE" Disclaimer</h2>
          <p className="mb-4">The Service is provided to You "AS IS" and "AS AVAILABLE"...</p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">Governing Law</h2>
          <p className="mb-4">The laws of the Country, excluding its conflicts of law rules, shall govern...</p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">Disputes Resolution</h2>
          <p className="mb-4">If You have any concern or dispute about the Service...</p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">Contact Us</h2>
          <p className="mb-2">If you have any questions:</p>
          <ul className="list-disc pl-6 space-y-3">
            <li>Email: help@vnztech.com</li>
            <li>
              Website:{" "}
              <a href="https://vnztech.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                https://vnztech.com
              </a>
            </li>
          </ul>
        </div>
      </main>

      <Footer />
    </div>
  );
}
