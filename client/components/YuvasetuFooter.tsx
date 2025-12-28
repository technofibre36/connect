import Link from "next/link";

export default function YuvasetuFooter() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">
              YuvaSetu
            </h3>
            <p className="text-sm">
              Democratizing startup funding and mentorship across India. Empowering youth from Tier 2 & 3 cities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/yuvasetu/browse" className="hover:text-orange-400 transition">
                  Browse Ideas
                </Link>
              </li>
              <li>
                <Link href="/yuvasetu/submit" className="hover:text-orange-400 transition">
                  Submit Your Idea
                </Link>
              </li>
              <li>
                <Link href="/yuvasetu/mentors" className="hover:text-orange-400 transition">
                  Become a Mentor
                </Link>
              </li>
              <li>
                <Link href="/yuvasetu/how-it-works" className="hover:text-orange-400 transition">
                  How It Works
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-orange-400 transition">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect With Us</h4>
            <div className="flex gap-4 text-sm">
              <a href="#" className="hover:text-orange-400 transition">Facebook</a>
              <a href="#" className="hover:text-orange-400 transition">Twitter</a>
              <a href="#" className="hover:text-orange-400 transition">Instagram</a>
              <a href="#" className="hover:text-orange-400 transition">LinkedIn</a>
            </div>
            <p className="text-sm mt-4">
              Email: support@yuvasetu.in<br />
              Phone: 1800-123-4567
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
          <p>&copy; 2025 YuvaSetu. All rights reserved. Made for Young India.</p>
        </div>
      </div>
    </footer>
  );
}
