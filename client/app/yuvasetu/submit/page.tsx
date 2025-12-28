"use client";

import { useState } from "react";
import YuvasetuNavbar from "@/components/YuvasetuNavbar";
import YuvasetuFooter from "@/components/YuvasetuFooter";
import { categories } from "@/lib/mockData";

export default function SubmitIdeaPage() {
  const [formData, setFormData] = useState({
    title: "",
    entrepreneur: "",
    email: "",
    phone: "",
    location: "",
    category: "",
    description: "",
    targetAmount: "",
    videoUrl: "",
    tags: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would send data to backend
    console.log("Submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        title: "",
        entrepreneur: "",
        email: "",
        phone: "",
        location: "",
        category: "",
        description: "",
        targetAmount: "",
        videoUrl: "",
        tags: "",
      });
    }, 3000);
  };

  return (
    <>
      <YuvasetuNavbar />

      {/* Header */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Submit Your Startup Idea
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Share your innovative idea with thousands of potential investors and mentors. 
            Let&apos;s turn your vision into reality!
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          {submitted ? (
            <div className="bg-green-50 border-2 border-green-500 rounded-lg p-12 text-center">
              <div className="text-6xl mb-4">✅</div>
              <h2 className="text-3xl font-bold text-green-700 mb-4">
                Idea Submitted Successfully!
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Our team will review your submission within 2-3 business days. 
                You&apos;ll receive an email notification once it&apos;s approved.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="bg-orange-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-700 transition"
              >
                Submit Another Idea
              </button>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Basic Info */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Basic Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Idea Title *
                      </label>
                      <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                        placeholder="e.g., Solar-Powered Mobile Charger"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="entrepreneur"
                        value={formData.entrepreneur}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your.email@example.com"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+91 XXXXXXXXXX"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Location (City, State) *
                      </label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        required
                        placeholder="e.g., Indore, Madhya Pradesh"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Category *
                      </label>
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      >
                        <option value="">Select a category</option>
                        {categories.map((cat) => (
                          <option key={cat.id} value={cat.id}>
                            {cat.icon} {cat.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Idea Details */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Idea Details
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Detailed Description *
                      </label>
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                        rows={6}
                        placeholder="Describe your startup idea, the problem it solves, and how it will make an impact..."
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      ></textarea>
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Funding Target (₹) *
                      </label>
                      <input
                        type="number"
                        name="targetAmount"
                        value={formData.targetAmount}
                        onChange={handleChange}
                        required
                        min="10000"
                        placeholder="e.g., 50000"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                      <p className="text-sm text-gray-500 mt-1">
                        Minimum ₹10,000 | Typical range: ₹50,000 - ₹2,00,000
                      </p>
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Pitch Video URL (YouTube/Vimeo)
                      </label>
                      <input
                        type="url"
                        name="videoUrl"
                        value={formData.videoUrl}
                        onChange={handleChange}
                        placeholder="https://youtube.com/watch?v=..."
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                      <p className="text-sm text-gray-500 mt-1">
                        Optional but recommended - a 2-3 minute video pitch increases funding success by 70%
                      </p>
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Tags (comma-separated)
                      </label>
                      <input
                        type="text"
                        name="tags"
                        value={formData.tags}
                        onChange={handleChange}
                        placeholder="e.g., Solar Energy, Rural Tech, Sustainable"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Guidelines */}
                <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded">
                  <h4 className="font-bold text-gray-800 mb-2">
                    📋 Submission Guidelines
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>✓ Ideas are reviewed within 2-3 business days</li>
                    <li>✓ Be clear, concise, and authentic in your description</li>
                    <li>✓ Include how your idea creates social or economic impact</li>
                    <li>✓ Upload supporting documents if available (optional)</li>
                    <li>✓ All information will be kept confidential during review</li>
                  </ul>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-12 py-4 rounded-full font-bold text-lg hover:from-orange-600 hover:to-orange-700 transition shadow-lg"
                  >
                    🚀 Submit My Idea
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </section>

      <YuvasetuFooter />
    </>
  );
}
