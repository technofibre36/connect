import YuvasetuNavbar from "@/components/YuvasetuNavbar";
import YuvasetuFooter from "@/components/YuvasetuFooter";
import Link from "next/link";
import IdeaCard from "@/components/IdeaCard";
import { mockIdeas, stats, categories } from "@/lib/mockData";

export default function YuvasetuHome() {
  const featuredIdeas = mockIdeas.slice(0, 3);

  return (
    <>
      <YuvasetuNavbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-500 via-orange-600 to-red-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Invest in India&apos;s Dreams
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Connect small-town innovators with citizens, investors, and mentors. 
            Turn ambitious ideas into sustainable businesses with micro-investments starting from ₹500.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/yuvasetu/browse"
              className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-50 transition shadow-lg"
            >
              Browse Ideas
            </Link>
            <Link
              href="/yuvasetu/submit"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-orange-600 transition"
            >
              Submit Your Idea
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">
                {stats.totalIdeasFunded}+
              </div>
              <div className="text-gray-600">Ideas Funded</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">
                {stats.totalInvestorsActive.toLocaleString()}+
              </div>
              <div className="text-gray-600">Active Investors</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">
                ₹{(stats.totalAmountRaised / 100000).toFixed(1)}L+
              </div>
              <div className="text-gray-600">Raised</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">
                {stats.successfulStartups}+
              </div>
              <div className="text-gray-600">Successful Startups</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">
                {stats.citiesCovered}+
              </div>
              <div className="text-gray-600">Cities Covered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">
                {stats.mentorsActive}+
              </div>
              <div className="text-gray-600">Active Mentors</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Explore Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/yuvasetu/browse?category=${category.id}`}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition text-center group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <div className="text-sm font-semibold text-gray-700">
                  {category.name}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Ideas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800">
              Featured Ideas
            </h2>
            <Link
              href="/yuvasetu/browse"
              className="text-orange-600 font-semibold hover:underline"
            >
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredIdeas.map((idea) => (
              <IdeaCard key={idea.id} idea={idea} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-orange-600">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">Submit Idea</h3>
              <p className="text-gray-600">
                Young entrepreneurs upload their startup concept with a video pitch
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-orange-600">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">Verification</h3>
              <p className="text-gray-600">
                Our team reviews ideas for feasibility and impact
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-orange-600">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">Micro-Investment</h3>
              <p className="text-gray-600">
                Citizens invest from ₹500 to support chosen projects
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-orange-600">
                4
              </div>
              <h3 className="text-xl font-bold mb-2">Mentorship & Growth</h3>
              <p className="text-gray-600">
                Ideas receive mentorship, tools, and guidance to succeed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Story */}
      <section className="py-16 bg-gradient-to-r from-orange-50 to-orange-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Success Story: Ravi&apos;s Journey
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-lg text-gray-700 mb-4">
                &quot;Ravi, a 22-year-old from Assam, had an idea for a solar-powered mobile charger. 
                He uploaded his idea on YuvaSetu, received ₹15,000 from 30 micro-investors, 
                and mentorship from an IIT Guwahati alumnus.&quot;
              </p>
              <p className="text-lg text-gray-700 font-semibold">
                Six months later, his prototype got featured in a local tech expo — 
                proving that even small investments can create big change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether you&apos;re an entrepreneur with a vision or an investor looking to support innovation, 
            join the YuvaSetu community today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/yuvasetu/submit"
              className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-50 transition shadow-lg"
            >
              I Have an Idea
            </Link>
            <Link
              href="/yuvasetu/browse"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-orange-600 transition"
            >
              I Want to Invest
            </Link>
          </div>
        </div>
      </section>

      <YuvasetuFooter />
    </>
  );
}
