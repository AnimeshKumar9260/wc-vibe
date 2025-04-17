import React from "react";

const services = [
  {
    title: "Web Development",
    description: "Custom, scalable, and high-performance websites tailored to your business goals.",
    icon: (
      <svg className="w-10 h-10 text-sky-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 8h18" /></svg>
    ),
  },
  {
    title: "WordPress",
    description: "Professional WordPress development, customization, and maintenance for powerful content management.",
    icon: (
      <svg className="w-10 h-10 text-sky-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8.5 8h7l-3.5 8" /></svg>
    ),
  },
  {
    title: "Video Editing",
    description: "Engaging, professional video editing to boost your brand and tell your story effectively.",
    icon: (
      <svg className="w-10 h-10 text-sky-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="7" width="15" height="10" rx="2"/><polygon points="21 7 21 17 16 12 21 7" /></svg>
    ),
  },
  {
    title: "Motion Graphics",
    description: "Dynamic motion graphics to bring your ideas to life and captivate your audience.",
    icon: (
      <svg className="w-10 h-10 text-sky-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2" /></svg>
    ),
  },
  {
    title: "Graphics Design",
    description: "Creative and impactful graphic design solutions for branding, marketing, and more.",
    icon: (
      <svg className="w-10 h-10 text-sky-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M4 9h16" /></svg>
    ),
  },
];

const ServicesSection: React.FC = () => (
  <section className="py-16 px-4 bg-white">
    <div className="max-w-5xl mx-auto text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-sky-700 mb-4">Our Services</h2>
      <p className="text-lg text-sky-900">From web and WordPress development to video, motion graphics, and graphic design—our team covers all your digital needs.</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {services.map((service) => (
        <div key={service.title} className="flex flex-col items-center bg-sky-50 rounded-xl shadow-md p-8 hover:shadow-lg transition">
          <div className="mb-4">{service.icon}</div>
          <h3 className="text-xl font-semibold text-sky-700 mb-2">{service.title}</h3>
          <p className="text-base text-sky-900 text-center">{service.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default ServicesSection;
