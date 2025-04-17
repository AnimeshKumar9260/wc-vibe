import React from "react";

const services = [
  "Web Development",
  "Mobile App Development",
  "Video Editing",
  "WordPress Development",
];

const HeroSection: React.FC = () => {
  return (
    <section className="bg-sky-50 min-h-[60vh] flex items-center justify-center py-16 px-4 md:px-0">
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-10">
        {/* Textual Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-sky-700 mb-4">
            Empowering Your Digital Vision
          </h1>
          <p className="text-lg md:text-xl text-sky-900 mb-6">
            We deliver innovative IT solutions tailored to your
            business—specializing in web, mobile, video, and WordPress
            development.
          </p>
          <ul className="flex flex-wrap justify-center md:justify-start gap-3 mb-8">
            {services.map((service) => (
              <li
                key={service}
                className="bg-white border border-sky-200 text-sky-700 rounded-full px-4 py-2 text-sm font-medium shadow-sm hover:bg-sky-100 transition"
              >
                {service}
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="inline-block bg-sky-600 hover:bg-sky-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
          >
            Get a Free Consultation
          </a>
        </div>
        {/* Illustration/Visual */}
        <div className="flex-1 flex justify-center md:justify-end">
          {/* Placeholder SVG illustration, replace with your own if available */}
          <svg
            width="320"
            height="220"
            viewBox="0 0 320 220"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-64 h-44 md:w-80 md:h-56"
            aria-hidden="true"
          >
            <rect
              x="10"
              y="30"
              width="300"
              height="180"
              rx="20"
              fill="#C7DBFA"
            />
            <rect
              x="40"
              y="60"
              width="240"
              height="120"
              rx="12"
              fill="#E3EDFC"
            />
            <rect x="70" y="90" width="180" height="60" rx="8" fill="#7BAAF7" />
            <circle cx="160" cy="120" r="22" fill="#2563EB" opacity="0.6" />
          </svg>
        </div>
      </div>
    </section>
  );
};

import HowItWorks from "./HowItWorks";
import ServicesSection from "./ServicesSection";
import TestimonialSection from "./TestimonialSection";
import FeaturesSection from "./FeaturesSection";
import CTASection from "./CTASection";

const HomePageSections: React.FC = () => (
  <>
    <HeroSection />
    <HowItWorks />
    <ServicesSection />
    <TestimonialSection />
    <FeaturesSection />
    <CTASection />
  </>
);

export default HomePageSections;
