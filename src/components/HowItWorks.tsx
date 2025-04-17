import React from "react";

const steps = [
  {
    title: "Browse Services",
    description:
      "Explore our diverse range of IT solutions including web, mobile, video, and WordPress development. Find the perfect service tailored to your business needs.",
  },
  {
    title: "Provide Input",
    description:
      "Share your requirements and goals with us. Our simple intake process ensures we understand your vision and project details clearly.",
  },
  {
    title: "We Will Take It From Here",
    description:
      "Sit back and relax while our expert team brings your ideas to life. We handle everything from start to finish, keeping you updated every step of the way.",
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-sky-700 mb-4">How It Works</h2>
        <p className="text-lg text-sky-900">
          Getting started with our IT services is simple and seamless. Here’s how the process works:
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 justify-center items-stretch">
        {steps.map((step, idx) => (
          <div
            key={step.title}
            className="flex-1 bg-sky-50 rounded-xl shadow-md p-8 flex flex-col items-center hover:shadow-lg transition"
          >
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-sky-200 text-sky-700 font-bold text-2xl mb-4">
              {idx + 1}
            </div>
            <h3 className="text-xl font-semibold text-sky-700 mb-2">{step.title}</h3>
            <p className="text-base text-sky-900">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
