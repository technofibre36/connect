import YuvasetuNavbar from "@/components/YuvasetuNavbar";
import YuvasetuFooter from "@/components/YuvasetuFooter";
import Link from "next/link";

export default function HowItWorksPage() {
  return (
    <>
      <YuvasetuNavbar />

      {/* Header */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            How YuvaSetu Works
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            A simple 4-step process to turn innovative ideas into successful businesses
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-shrink-0 bg-orange-100 w-32 h-32 rounded-full flex items-center justify-center text-5xl">
                📝
              </div>
              <div className="flex-1">
                <div className="text-orange-600 font-bold text-lg mb-2">STEP 1</div>
                <h2 className="text-3xl font-bold mb-4">Submit Your Idea</h2>
                <p className="text-gray-700 text-lg mb-4">
                  Young entrepreneurs (18-30 years) from Tier 2 & 3 cities register and upload 
                  their startup concept. Include a short video pitch (2-3 minutes) explaining 
                  your idea, the problem it solves, and its potential impact.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>✓ Free registration</li>
                  <li>✓ Easy submission process</li>
                  <li>✓ Video pitch recommended</li>
                  <li>✓ Support in regional languages</li>
                </ul>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="h-16 w-0.5 bg-gray-300"></div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
              <div className="flex-shrink-0 bg-orange-100 w-32 h-32 rounded-full flex items-center justify-center text-5xl">
                ✅
              </div>
              <div className="flex-1 md:text-right">
                <div className="text-orange-600 font-bold text-lg mb-2">STEP 2</div>
                <h2 className="text-3xl font-bold mb-4">Verification & Screening</h2>
                <p className="text-gray-700 text-lg mb-4">
                  Our expert team (along with AI-powered tools) reviews each submission 
                  for feasibility, innovation potential, and social impact. Ideas are 
                  verified within 2-3 business days.
                </p>
                <ul className="space-y-2 text-gray-600 md:text-right">
                  <li>✓ Rigorous quality checks</li>
                  <li>✓ AI-powered feasibility analysis</li>
                  <li>✓ Impact assessment</li>
                  <li>✓ Fast 48-72 hour review</li>
                </ul>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="h-16 w-0.5 bg-gray-300"></div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-shrink-0 bg-orange-100 w-32 h-32 rounded-full flex items-center justify-center text-5xl">
                💰
              </div>
              <div className="flex-1">
                <div className="text-orange-600 font-bold text-lg mb-2">STEP 3</div>
                <h2 className="text-3xl font-bold mb-4">Micro-Investment</h2>
                <p className="text-gray-700 text-lg mb-4">
                  Approved ideas are showcased on the platform. Citizens aged 25-50 can 
                  invest starting from just ₹500 to support projects they believe in. 
                  All transactions are secure and transparent.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>✓ Start from ₹500</li>
                  <li>✓ Secure payment gateway (UPI, Cards, Net Banking)</li>
                  <li>✓ Track your investments in real-time</li>
                  <li>✓ Tax benefits under applicable schemes</li>
                </ul>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="h-16 w-0.5 bg-gray-300"></div>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
              <div className="flex-shrink-0 bg-orange-100 w-32 h-32 rounded-full flex items-center justify-center text-5xl">
                🚀
              </div>
              <div className="flex-1 md:text-right">
                <div className="text-orange-600 font-bold text-lg mb-2">STEP 4</div>
                <h2 className="text-3xl font-bold mb-4">Mentorship & Growth</h2>
                <p className="text-gray-700 text-lg mb-4">
                  Successfully funded ideas receive mentorship from industry experts, 
                  access to digital tools, networking opportunities, and ongoing guidance 
                  to help turn concepts into thriving businesses.
                </p>
                <ul className="space-y-2 text-gray-600 md:text-right">
                  <li>✓ Expert mentors from IITs, IIMs, and industry</li>
                  <li>✓ Free business tools & resources</li>
                  <li>✓ Networking events & workshops</li>
                  <li>✓ Progress tracking & reporting</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Entrepreneurs */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">For Entrepreneurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-3">No Collateral Required</h3>
              <p className="text-gray-600">
                Unlike traditional loans, you don&apos;t need assets or guarantees to get funding.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold mb-3">Gain Visibility</h3>
              <p className="text-gray-600">
                Showcase your idea to thousands of potential investors and build your brand.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-3">Expert Guidance</h3>
              <p className="text-gray-600">
                Get mentored by successful entrepreneurs and industry leaders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* For Investors */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">For Investors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md border-2 border-orange-200">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-bold mb-3">Support Innovation</h3>
              <p className="text-gray-600">
                Be part of India&apos;s innovation journey by backing grassroots startups.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-2 border-orange-200">
              <div className="text-4xl mb-4">💵</div>
              <h3 className="text-xl font-bold mb-3">Micro-Investment</h3>
              <p className="text-gray-600">
                Start with as little as ₹500. Diversify across multiple ideas easily.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-2 border-orange-200">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-3">Track Progress</h3>
              <p className="text-gray-600">
                Monitor the growth of funded ideas through real-time updates and reports.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-2">
                Who can submit ideas on YuvaSetu?
              </h3>
              <p className="text-gray-600">
                Any youth aged 18-30 from Tier 2 or Tier 3 cities with an innovative 
                startup idea can register and submit their concept.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-2">
                What is the minimum investment amount?
              </h3>
              <p className="text-gray-600">
                You can start investing with as little as ₹500. The maximum per idea 
                is typically ₹50,000.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-2">
                How do I get returns on my investment?
              </h3>
              <p className="text-gray-600">
                Returns depend on the project model - it could be profit-sharing, 
                early product access, or token rewards. Each idea specifies its return model.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-2">
                Is my investment secure?
              </h3>
              <p className="text-gray-600">
                We use secure payment gateways and verify all ideas before listing. 
                However, startup investments carry inherent risks, so invest wisely.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of entrepreneurs and investors building India&apos;s innovation ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/yuvasetu/submit"
              className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-50 transition shadow-lg inline-block"
            >
              Submit Your Idea
            </Link>
            <Link
              href="/yuvasetu/browse"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-orange-600 transition inline-block"
            >
              Browse & Invest
            </Link>
          </div>
        </div>
      </section>

      <YuvasetuFooter />
    </>
  );
}
