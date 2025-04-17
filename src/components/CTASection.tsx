"use client";

import React, { useState } from "react";

const CTASection: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Import Firestore utility
  // (import at top): import { addEnquiry } from "../lib/firestore";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const { addEnquiry } = await import("../lib/firestore");
      await addEnquiry(form);
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setError("Could not send enquiry. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-sky-600 to-sky-400 flex items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center md:items-stretch gap-12">
        {/* Left: CTA & Trust */}
        <div className="flex-1 flex flex-col justify-center text-white md:pr-8 mb-10 md:mb-0">
          <div className="mb-6 flex items-center gap-3">
            <svg className="w-10 h-10 text-white/80" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 19V5M5 12h14" /></svg>
            <h2 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg">Let’s Build Something Amazing</h2>
          </div>
          <p className="text-lg md:text-xl text-white/90 mb-6 max-w-md">
            Partner with our expert team for web, mobile, video, and design solutions that elevate your business. Fast, friendly, and always reliable.
          </p>
          <div className="flex items-center gap-4 mb-2">
            <svg className="w-6 h-6 text-sky-200" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M8 12h8" /></svg>
            <span className="font-medium text-white/80">Response within 1 business day</span>
          </div>
          <div className="flex items-center gap-4">
            <svg className="w-6 h-6 text-sky-200" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7" /><path d="M21 15l-5-5L5 21" /></svg>
            <span className="font-medium text-white/80">contact@yourcompany.com</span>
          </div>
        </div>
        {/* Right: Form Card */}
        <div className="flex-1 flex justify-center">
          <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 md:p-10 flex flex-col items-center border-4 border-sky-100/60">
            <h3 className="text-2xl font-bold text-sky-700 mb-2 text-center">Enquire Now</h3>
            <p className="text-sky-500 mb-6 text-center text-base">Fill in your details and we’ll get back to you promptly.</p>
            {submitted ? (
              <div className="text-green-600 text-lg font-semibold text-center py-10">
                Thank you for your enquiry! We’ll be in touch soon.
              </div>
            ) : (
              <form
                className="w-full flex flex-col gap-5"
                onSubmit={handleSubmit}
                autoComplete="off"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="px-5 py-3 rounded-lg border border-sky-200 focus:border-sky-400 focus:ring-2 focus:ring-sky-100 outline-none text-sky-900 bg-sky-50 placeholder-sky-400 transition"
                  disabled={loading}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="px-5 py-3 rounded-lg border border-sky-200 focus:border-sky-400 focus:ring-2 focus:ring-sky-100 outline-none text-sky-900 bg-sky-50 placeholder-sky-400 transition"
                  disabled={loading}
                />
                <textarea
                  name="message"
                  placeholder="Tell us about your project or enquiry..."
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="px-5 py-3 rounded-lg border border-sky-200 focus:border-sky-400 focus:ring-2 focus:ring-sky-100 outline-none text-sky-900 bg-sky-50 placeholder-sky-400 transition"
                  disabled={loading}
                />
                {error && <div className="text-red-600 text-sm mb-2">{error}</div>}
                <button
                  type="submit"
                  className="mt-2 w-full bg-sky-600 hover:bg-sky-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 disabled:opacity-60"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Enquiry"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
