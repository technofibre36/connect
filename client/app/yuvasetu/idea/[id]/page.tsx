"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import YuvasetuNavbar from "@/components/YuvasetuNavbar";
import YuvasetuFooter from "@/components/YuvasetuFooter";
import { mockIdeas } from "@/lib/mockData";
import Link from "next/link";

export default function IdeaDetailPage() {
  const params = useParams();
  const ideaId = params.id as string;
  const idea = mockIdeas.find((i) => i.id === ideaId);

  const [investmentAmount, setInvestmentAmount] = useState(500);
  const [showInvestModal, setShowInvestModal] = useState(false);

  if (!idea) {
    return (
      <>
        <YuvasetuNavbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4">😔</div>
            <h2 className="text-3xl font-bold text-gray-700 mb-4">
              Idea Not Found
            </h2>
            <Link
              href="/yuvasetu/browse"
              className="text-orange-600 hover:underline"
            >
              ← Back to Browse Ideas
            </Link>
          </div>
        </div>
        <YuvasetuFooter />
      </>
    );
  }

  const progressPercentage = (idea.raisedAmount / idea.targetAmount) * 100;

  const handleInvest = () => {
    alert(`Investment of ₹${investmentAmount} successful! (Demo)`);
    setShowInvestModal(false);
  };

  return (
    <>
      <YuvasetuNavbar />

      <div className="bg-gray-50 min-h-screen py-8">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Link
            href="/yuvasetu/browse"
            className="inline-block mb-6 text-orange-600 hover:underline font-semibold"
          >
            ← Back to Browse
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Image */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={idea.imageUrl}
                  alt={idea.title}
                  className="w-full h-96 object-cover"
                />
              </div>

              {/* Title & Basic Info */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-start justify-between mb-4">
                  <h1 className="text-4xl font-bold text-gray-800">
                    {idea.title}
                  </h1>
                  {idea.verified && (
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                      ✓ Verified
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap gap-4 text-gray-600 mb-6">
                  <span className="flex items-center gap-2">
                    👤 <strong>{idea.entrepreneur}</strong>
                  </span>
                  <span className="flex items-center gap-2">
                    📍 {idea.location}
                  </span>
                  <span className="flex items-center gap-2">
                    🏷️ {idea.category}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {idea.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="prose max-w-none">
                  <h2 className="text-2xl font-bold mb-4">About This Idea</h2>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {idea.description}
                  </p>
                </div>
              </div>

              {/* Additional Details (Mock) */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-4">The Problem</h2>
                <p className="text-gray-700 mb-6">
                  Many rural areas face frequent power outages, making it difficult for 
                  students and professionals to stay connected. Traditional power banks 
                  are expensive and need electricity to charge.
                </p>

                <h2 className="text-2xl font-bold mb-4">Our Solution</h2>
                <p className="text-gray-700 mb-6">
                  An affordable, solar-powered mobile charging solution that works 
                  anywhere under the sun. Compact, portable, and environmentally friendly. 
                  Perfect for rural areas and outdoor enthusiasts.
                </p>

                <h2 className="text-2xl font-bold mb-4">Impact</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Provides reliable charging in areas with power cuts</li>
                  <li>Reduces dependency on grid electricity</li>
                  <li>Eco-friendly and sustainable technology</li>
                  <li>Creates local employment in manufacturing and distribution</li>
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Investment Card */}
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-orange-600 mb-2">
                    ₹{idea.raisedAmount.toLocaleString('en-IN')}
                  </div>
                  <div className="text-gray-600">
                    raised of ₹{idea.targetAmount.toLocaleString('en-IN')} goal
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                    <div
                      className="bg-gradient-to-r from-orange-500 to-orange-600 h-3 rounded-full transition-all"
                      style={{ width: `${Math.min(progressPercentage, 100)}%` }}
                    ></div>
                  </div>
                  <div className="text-sm text-gray-600 text-center">
                    {progressPercentage.toFixed(1)}% funded
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-800">
                      {idea.investorsCount}
                    </div>
                    <div className="text-sm text-gray-600">Investors</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-800">
                      {idea.daysLeft}
                    </div>
                    <div className="text-sm text-gray-600">Days Left</div>
                  </div>
                </div>

                <button
                  onClick={() => setShowInvestModal(true)}
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 rounded-lg font-bold text-lg hover:from-orange-600 hover:to-orange-700 transition shadow-lg mb-4"
                >
                  💰 Invest Now
                </button>

                <div className="text-xs text-gray-500 text-center">
                  Minimum investment: ₹500 | Maximum: ₹50,000
                </div>
              </div>

              {/* Entrepreneur Info */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">About the Entrepreneur</h3>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-3xl">
                    👤
                  </div>
                  <div>
                    <div className="font-bold text-gray-800">{idea.entrepreneur}</div>
                    <div className="text-sm text-gray-600">{idea.location}</div>
                  </div>
                </div>
                <button className="w-full bg-gray-100 text-gray-700 py-2 rounded-lg font-semibold hover:bg-gray-200 transition">
                  💬 Contact Entrepreneur
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Investment Modal */}
      {showInvestModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Invest in This Idea</h2>
            <p className="text-gray-600 mb-6">
              Enter the amount you&apos;d like to invest in <strong>{idea.title}</strong>
            </p>

            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Investment Amount (₹)
              </label>
              <input
                type="number"
                value={investmentAmount}
                onChange={(e) => setInvestmentAmount(parseInt(e.target.value) || 500)}
                min="500"
                max="50000"
                step="100"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <div className="flex justify-between mt-2">
                <button
                  onClick={() => setInvestmentAmount(500)}
                  className="text-sm text-orange-600 hover:underline"
                >
                  ₹500
                </button>
                <button
                  onClick={() => setInvestmentAmount(1000)}
                  className="text-sm text-orange-600 hover:underline"
                >
                  ₹1,000
                </button>
                <button
                  onClick={() => setInvestmentAmount(5000)}
                  className="text-sm text-orange-600 hover:underline"
                >
                  ₹5,000
                </button>
                <button
                  onClick={() => setInvestmentAmount(10000)}
                  className="text-sm text-orange-600 hover:underline"
                >
                  ₹10,000
                </button>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={handleInvest}
                className="flex-1 bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition"
              >
                Confirm Investment
              </button>
              <button
                onClick={() => setShowInvestModal(false)}
                className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <YuvasetuFooter />
    </>
  );
}
