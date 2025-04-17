import React from "react";

const features = [
  {
    title: "Full-Service Expertise",
    description:
      "From web and mobile development to video, motion graphics, and graphic design—our team covers all your digital needs in one place.",
    icon: (
      <svg className="w-9 h-9 text-sky-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 4v16M4 12h16" /></svg>
    ),
  },
  {
    title: "Tailored Solutions",
    description:
      "We listen to your goals and create custom solutions that fit your business, ensuring every project is unique and effective.",
    icon: (
      <svg className="w-9 h-9 text-sky-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M8 12h8" /></svg>
    ),
  },
  {
    title: "Creative Excellence",
    description:
      "Our designers and editors bring creativity and attention to detail to every project, making your brand stand out.",
    icon: (
      <svg className="w-9 h-9 text-sky-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polygon points="12,2 19,21 5,21" /></svg>
    ),
  },
  {
    title: "Reliable Support",
    description:
      "We pride ourselves on clear communication, timely delivery, and ongoing support—so you’re never left in the dark.",
    icon: (
      <svg className="w-9 h-9 text-sky-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 21h8" /></svg>
    ),
  },
];

const FeaturesSection: React.FC = () => (
  <section className="py-16 px-4 bg-white">
    <div className="max-w-4xl mx-auto text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-sky-700 mb-4">Why Choose Us?</h2>
      <p className="text-lg text-sky-900">Discover the highlights that set our IT services apart and make us the right partner for your business.</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {features.map((feature) => (
        <div key={feature.title} className="flex items-start bg-sky-50 rounded-xl shadow-md p-8 hover:shadow-lg transition">
          <div className="mr-6">{feature.icon}</div>
          <div>
            <h3 className="text-xl font-semibold text-sky-700 mb-1">{feature.title}</h3>
            <p className="text-base text-sky-900">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default FeaturesSection;
