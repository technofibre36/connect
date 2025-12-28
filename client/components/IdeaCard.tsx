import Link from "next/link";
import { Idea } from "@/lib/mockData";

interface IdeaCardProps {
  idea: Idea;
}

export default function IdeaCard({ idea }: IdeaCardProps) {
  const progressPercentage = (idea.raisedAmount / idea.targetAmount) * 100;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Image */}
      <div className="relative h-48 bg-gray-200">
        <img
          src={idea.imageUrl}
          alt={idea.title}
          className="w-full h-full object-cover"
        />
        {idea.verified && (
          <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
            ✓ Verified
          </div>
        )}
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-2 py-1 rounded-full text-xs font-semibold text-gray-700">
          {idea.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
          {idea.title}
        </h3>

        <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
          <span>By {idea.entrepreneur}</span>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
          <span>{idea.location}</span>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {idea.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {idea.tags.slice(0, 2).map((tag, index) => (
            <span
              key={index}
              className="bg-orange-50 text-orange-600 px-2 py-1 rounded-full text-xs"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="mb-3">
          <div className="flex justify-between text-sm mb-1">
            <span className="font-semibold text-gray-700">
              ₹{idea.raisedAmount.toLocaleString('en-IN')}
            </span>
            <span className="text-gray-500">
              of ₹{idea.targetAmount.toLocaleString('en-IN')}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-orange-500 to-orange-600 h-2 rounded-full transition-all"
              style={{ width: `${Math.min(progressPercentage, 100)}%` }}
            ></div>
          </div>
        </div>

        {/* Stats */}
        <div className="flex justify-between text-sm text-gray-600 mb-4">
          <span>{idea.investorsCount} investors</span>
          <span>{idea.daysLeft} days left</span>
        </div>

        {/* Action Button */}
        <Link
          href={`/yuvasetu/idea/${idea.id}`}
          className="block w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white text-center py-2 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition"
        >
          View & Invest
        </Link>
      </div>
    </div>
  );
}
