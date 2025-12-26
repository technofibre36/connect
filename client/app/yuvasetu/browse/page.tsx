"use client";

import { useState } from "react";
import YuvasetuNavbar from "@/components/YuvasetuNavbar";
import YuvasetuFooter from "@/components/YuvasetuFooter";
import IdeaCard from "@/components/IdeaCard";
import { mockIdeas, categories } from "@/lib/mockData";

export default function BrowseIdeasPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("popular");

  const filteredIdeas = mockIdeas.filter((idea) => {
    const matchesCategory = selectedCategory === "all" || idea.category === selectedCategory;
    const matchesSearch =
      idea.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      idea.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      idea.entrepreneur.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedIdeas = [...filteredIdeas].sort((a, b) => {
    if (sortBy === "popular") return b.investorsCount - a.investorsCount;
    if (sortBy === "recent") return b.daysLeft - a.daysLeft;
    if (sortBy === "funded") return b.raisedAmount - a.raisedAmount;
    return 0;
  });

  return (
    <>
      <YuvasetuNavbar />

      {/* Header */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Browse Innovative Ideas
          </h1>
          <p className="text-xl">
            Discover and invest in groundbreaking startup ideas from young entrepreneurs across India
          </p>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="bg-white border-b py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Search */}
            <div className="flex-1 w-full">
              <input
                type="text"
                placeholder="🔍 Search ideas, entrepreneurs, locations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Sort */}
            <div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="popular">Most Popular</option>
                <option value="recent">Recently Added</option>
                <option value="funded">Highest Funded</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="bg-gray-50 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                selectedCategory === "all"
                  ? "bg-orange-600 text-white"
                  : "bg-white text-gray-700 hover:bg-orange-100"
              }`}
            >
              All Ideas
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-semibold transition ${
                  selectedCategory === category.id
                    ? "bg-orange-600 text-white"
                    : "bg-white text-gray-700 hover:bg-orange-100"
                }`}
              >
                {category.icon} {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Ideas Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              {sortedIdeas.length} Ideas Found
            </h2>
          </div>

          {sortedIdeas.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-700 mb-2">
                No ideas found
              </h3>
              <p className="text-gray-600">
                Try adjusting your filters or search query
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedIdeas.map((idea) => (
                <IdeaCard key={idea.id} idea={idea} />
              ))}
            </div>
          )}
        </div>
      </section>

      <YuvasetuFooter />
    </>
  );
}
