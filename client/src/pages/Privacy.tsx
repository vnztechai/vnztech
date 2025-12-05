"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
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
          {/* Header */}
          <h1 className="text-4xl font-bold mb-4 text-center">Privacy Policy</h1>
          <p className="text-center mb-6 font-medium">Last updated: December 04, 2025</p>

          {/* Body Content */}
          <div className="space-y-6">
            <p>
              This Privacy Policy describes Our policies and procedures on the
              collection, use and disclosure of Your information when You use the
              Service and tells You about Your privacy rights and how the law
              protects You.
            </p>

            <p>
              We use Your Personal data to provide and improve the Service. By
              using the Service, You agree to the collection and use of
              information in accordance with this Privacy Policy.
              {/* <a
                href="https://www.freeprivacypolicy.com/free-privacy-policy-generator/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Free Privacy Policy Generator
              </a> */}
              
            </p>

            <h2 className="text-2xl font-semibold pt-4">Interpretation and Definitions</h2>

            <h3 className="text-xl font-semibold">Interpretation</h3>
            <p>
              The words whose initial letters are capitalized have meanings
              defined under the following conditions. The following definitions
              shall have the same meaning regardless of whether they appear in
              singular or in plural.
            </p>

            <h3 className="text-xl font-semibold">Definitions</h3>
            <p>For the purposes of this Privacy Policy:</p>

            <ul className="list-disc ml-7 space-y-2">
              <li>
                <strong>Account</strong> means a unique account created for You to
                access our Service or parts of our Service.
              </li>
              <li>
                <strong>Affiliate</strong> means an entity that controls, is
                controlled by, or is under common control with a party...
              </li>
              <li>
                <strong>Company</strong> refers to vnztech, 28 Park Row City, New
                York, United States.
              </li>
              <li>
                <strong>Cookies</strong> are small files placed on Your device...
              </li>
              <li>
                <strong>Country</strong> refers to: New York, United States
              </li>
              <li>
                <strong>Device</strong> means any device that can access the
                Service...
              </li>
              <li>
                <strong>Personal Data</strong> is any information related to an
                identifiable individual.
              </li>
              <li>
                <strong>Service</strong> refers to the Website.
              </li>
              <li>
                <strong>Service Provider</strong> means companies or individuals
                who process data on Our behalf...
              </li>
              <li>
                <strong>Usage Data</strong> refers to data collected
                automatically...
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
                <strong>You</strong> means the individual accessing the Service...
              </li>
            </ul>

            <h2 className="text-2xl font-semibold pt-4">Collecting and Using Your Personal Data</h2>

            <h3 className="text-xl font-semibold">Types of Data Collected</h3>

            <h4 className="text-lg font-semibold">Personal Data</h4>
            <p>
              While using Our Service, We may ask You to provide Us with certain
              personally identifiable information...
            </p>

            <ul className="list-disc ml-7 space-y-2">
              <li>Email address</li>
              <li>First name and last name</li>
              <li>Usage Data</li>
            </ul>

            <h4 className="text-lg font-semibold">Usage Data</h4>
            <p>Usage Data is collected automatically when using the Service...</p>

            <h4 className="text-lg font-semibold">Tracking Technologies and Cookies</h4>
            <p>We use Cookies and similar tracking technologies to track activity...</p>

            <ul className="list-disc ml-7 space-y-2">
              <li>
                <strong>Cookies / Browser Cookies:</strong> A cookie is a small
                file placed on Your Device...
              </li>
              <li>
                <strong>Web Beacons:</strong> Small electronic files used to
                count users...
              </li>
            </ul>

            <p>
              Cookies can be “Persistent” or “Session” cookies. Persistent remain
              offline while Session delete when closed...
            </p>

            <h2 className="text-2xl font-semibold pt-4">Contact Us</h2>
            <p>If you have questions about this Privacy Policy:</p>
            <ul className="list-disc ml-7">
              <li>By email: help@vnztech.com</li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
