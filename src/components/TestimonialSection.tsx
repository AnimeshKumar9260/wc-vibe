import React from "react";

const testimonials = [
  {
    name: "Priya S.",
    company: "Startup Founder",
    quote:
      "The web development team delivered a stunning site that truly represents our brand. Communication was smooth and the project was completed ahead of schedule!",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "James L.",
    company: "Marketing Manager",
    quote:
      "Their video editing and motion graphics services elevated our campaigns. Creative, reliable, and always exceeding expectations!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Ayesha K.",
    company: "E-commerce Owner",
    quote:
      "Our WordPress site is now fast, secure, and easy to manage. The team’s support and expertise are top-notch.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];

const TestimonialSection: React.FC = () => (
  <section className="py-16 px-4 bg-sky-50">
    <div className="max-w-4xl mx-auto text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-sky-700 mb-4">What Our Clients Say</h2>
      <p className="text-lg text-sky-900">Real feedback from businesses who’ve trusted us for their digital solutions.</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {testimonials.map((t) => (
        <div key={t.name} className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center hover:shadow-lg transition">
          <img
            src={t.image}
            alt={t.name}
            className="w-20 h-20 rounded-full mb-4 object-cover border-4 border-sky-200"
            loading="lazy"
          />
          <blockquote className="italic text-sky-900 mb-4">“{t.quote}”</blockquote>
          <div className="font-semibold text-sky-700">{t.name}</div>
          <div className="text-sky-500 text-sm">{t.company}</div>
        </div>
      ))}
    </div>
  </section>
);

export default TestimonialSection;
