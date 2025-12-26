import YuvasetuNavbar from "@/components/YuvasetuNavbar";
import YuvasetuFooter from "@/components/YuvasetuFooter";
import { mockMentors } from "@/lib/mockData";

export default function MentorsPage() {
  return (
    <>
      <YuvasetuNavbar />

      {/* Header */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Meet Our Mentors
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Experienced professionals dedicated to guiding young entrepreneurs towards success
          </p>
        </div>
      </section>

      {/* Mentors Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockMentors.map((mentor) => (
              <div
                key={mentor.id}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition"
              >
                <div className="text-center mb-4">
                  <img
                    src={mentor.imageUrl}
                    alt={mentor.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-2xl font-bold text-gray-800 mb-1">
                    {mentor.name}
                  </h3>
                  <p className="text-gray-600">{mentor.location}</p>
                </div>

                <div className="mb-4">
                  <div className="text-sm text-gray-600 mb-2">Expertise:</div>
                  <div className="flex flex-wrap gap-2">
                    {mentor.expertise.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-semibold"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-sm text-gray-600 mb-4">{mentor.experience}</p>

                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-600">
                    👥 {mentor.menteeCount} mentees
                  </span>
                  <span className="text-sm font-semibold text-green-600">
                    ✓ Available
                  </span>
                </div>

                <button className="w-full bg-orange-600 text-white py-2 rounded-lg font-semibold hover:bg-orange-700 transition">
                  Request Mentorship
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Mentor CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Become a Mentor</h2>
            <p className="text-gray-700 mb-6 text-lg">
              Share your expertise and help shape the future of young entrepreneurs. 
              Join our mentor network and make a lasting impact.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div>
                <div className="text-4xl mb-2">🎓</div>
                <div className="font-semibold">Share Knowledge</div>
              </div>
              <div>
                <div className="text-4xl mb-2">🤝</div>
                <div className="font-semibold">Build Network</div>
              </div>
              <div>
                <div className="text-4xl mb-2">🌟</div>
                <div className="font-semibold">Create Impact</div>
              </div>
            </div>
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-orange-600 hover:to-orange-700 transition shadow-lg">
              Apply to Be a Mentor
            </button>
          </div>
        </div>
      </section>

      <YuvasetuFooter />
    </>
  );
}
