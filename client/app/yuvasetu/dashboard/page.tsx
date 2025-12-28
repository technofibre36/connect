"use client";

import { useState } from "react";
import YuvasetuNavbar from "@/components/YuvasetuNavbar";
import YuvasetuFooter from "@/components/YuvasetuFooter";
import { mockIdeas } from "@/lib/mockData";

export default function DashboardPage() {
  const [userType, setUserType] = useState<"investor" | "entrepreneur">("investor");

  // Mock user data
  const investorData = {
    name: "Amit Sharma",
    totalInvested: 25000,
    ideasSupported: 5,
    returns: 2500,
    investments: mockIdeas.slice(0, 3).map((idea) => ({
      ...idea,
      myInvestment: Math.floor(Math.random() * 5000) + 2000,
    })),
  };

  const entrepreneurData = {
    name: "Ravi Kumar",
    ideasSubmitted: 2,
    totalRaised: 32000,
    investors: 42,
    myIdeas: [mockIdeas[0]],
  };

  return (
    <>
      <YuvasetuNavbar />

      <div className="bg-gray-50 min-h-screen py-8">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h1 className="text-3xl font-bold mb-4">
              Welcome, {userType === "investor" ? investorData.name : entrepreneurData.name}!
            </h1>
            <div className="flex gap-4">
              <button
                onClick={() => setUserType("investor")}
                className={`px-6 py-2 rounded-full font-semibold transition ${
                  userType === "investor"
                    ? "bg-orange-600 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                Investor View
              </button>
              <button
                onClick={() => setUserType("entrepreneur")}
                className={`px-6 py-2 rounded-full font-semibold transition ${
                  userType === "entrepreneur"
                    ? "bg-orange-600 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                Entrepreneur View
              </button>
            </div>
          </div>

          {/* Investor Dashboard */}
          {userType === "investor" && (
            <>
              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="text-gray-600 mb-2">Total Invested</div>
                  <div className="text-3xl font-bold text-orange-600">
                    ₹{investorData.totalInvested.toLocaleString('en-IN')}
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="text-gray-600 mb-2">Ideas Supported</div>
                  <div className="text-3xl font-bold text-orange-600">
                    {investorData.ideasSupported}
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="text-gray-600 mb-2">Estimated Returns</div>
                  <div className="text-3xl font-bold text-green-600">
                    ₹{investorData.returns.toLocaleString('en-IN')}
                  </div>
                </div>
              </div>

              {/* My Investments */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-6">My Investments</h2>
                <div className="space-y-4">
                  {investorData.investments.map((investment) => (
                    <div
                      key={investment.id}
                      className="border border-gray-200 rounded-lg p-4 hover:border-orange-300 transition"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-bold text-lg">{investment.title}</h3>
                          <p className="text-sm text-gray-600">{investment.entrepreneur}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-gray-600">My Investment</div>
                          <div className="font-bold text-orange-600">
                            ₹{investment.myInvestment.toLocaleString('en-IN')}
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex-1">
                          <div className="text-sm text-gray-600 mb-1">
                            ₹{investment.raisedAmount.toLocaleString('en-IN')} / 
                            ₹{investment.targetAmount.toLocaleString('en-IN')}
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-orange-500 h-2 rounded-full"
                              style={{
                                width: `${(investment.raisedAmount / investment.targetAmount) * 100}%`,
                              }}
                            ></div>
                          </div>
                        </div>
                        <button className="ml-4 bg-orange-100 text-orange-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-orange-200 transition">
                          View Details
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Entrepreneur Dashboard */}
          {userType === "entrepreneur" && (
            <>
              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="text-gray-600 mb-2">Total Raised</div>
                  <div className="text-3xl font-bold text-orange-600">
                    ₹{entrepreneurData.totalRaised.toLocaleString('en-IN')}
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="text-gray-600 mb-2">Total Investors</div>
                  <div className="text-3xl font-bold text-orange-600">
                    {entrepreneurData.investors}
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="text-gray-600 mb-2">Ideas Submitted</div>
                  <div className="text-3xl font-bold text-orange-600">
                    {entrepreneurData.ideasSubmitted}
                  </div>
                </div>
              </div>

              {/* My Ideas */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">My Ideas</h2>
                  <button className="bg-orange-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-orange-700 transition">
                    + Submit New Idea
                  </button>
                </div>
                <div className="space-y-4">
                  {entrepreneurData.myIdeas.map((idea) => (
                    <div
                      key={idea.id}
                      className="border border-gray-200 rounded-lg p-6"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-bold text-xl mb-2">{idea.title}</h3>
                          <div className="flex gap-4 text-sm text-gray-600">
                            <span>👥 {idea.investorsCount} investors</span>
                            <span>⏱️ {idea.daysLeft} days left</span>
                          </div>
                        </div>
                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                          ✓ Active
                        </span>
                      </div>

                      <div className="mb-4">
                        <div className="flex justify-between text-sm mb-2">
                          <span className="font-semibold">
                            ₹{idea.raisedAmount.toLocaleString('en-IN')}
                          </span>
                          <span className="text-gray-600">
                            of ₹{idea.targetAmount.toLocaleString('en-IN')} goal
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <div
                            className="bg-gradient-to-r from-orange-500 to-orange-600 h-3 rounded-full"
                            style={{
                              width: `${(idea.raisedAmount / idea.targetAmount) * 100}%`,
                            }}
                          ></div>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <button className="flex-1 bg-orange-100 text-orange-600 py-2 rounded-lg font-semibold hover:bg-orange-200 transition">
                          View Analytics
                        </button>
                        <button className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg font-semibold hover:bg-gray-200 transition">
                          Message Investors
                        </button>
                        <button className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg font-semibold hover:bg-gray-200 transition">
                          Edit Idea
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      <YuvasetuFooter />
    </>
  );
}
