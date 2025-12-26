"use client";

import Link from "next/link";
import { useState } from "react";

export default function YuvasetuNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/yuvasetu" className="flex items-center gap-2">
            <div>
              <h1 className="text-2xl font-bold">YuvaSetu</h1>
              <p className="text-xs text-orange-100">Turning Ambitions into Achievements</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/yuvasetu" className="hover:text-orange-100 transition">
              Home
            </Link>
            <Link href="/yuvasetu/browse" className="hover:text-orange-100 transition">
              Browse Ideas
            </Link>
            <Link href="/yuvasetu/submit" className="hover:text-orange-100 transition">
              Submit Idea
            </Link>
            <Link href="/yuvasetu/how-it-works" className="hover:text-orange-100 transition">
              How It Works
            </Link>
            <Link href="/yuvasetu/mentors" className="hover:text-orange-100 transition">
              Mentors
            </Link>
            <Link
              href="/yuvasetu/dashboard"
              className="bg-white text-orange-600 px-4 py-2 rounded-full font-semibold hover:bg-orange-50 transition"
            >
              Dashboard
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? "X" : "Menu"}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <Link
              href="/yuvasetu"
              className="block py-2 hover:bg-orange-600 px-2 rounded"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/yuvasetu/browse"
              className="block py-2 hover:bg-orange-600 px-2 rounded"
              onClick={() => setMobileMenuOpen(false)}
            >
              Browse Ideas
            </Link>
            <Link
              href="/yuvasetu/submit"
              className="block py-2 hover:bg-orange-600 px-2 rounded"
              onClick={() => setMobileMenuOpen(false)}
            >
              Submit Idea
            </Link>
            <Link
              href="/yuvasetu/how-it-works"
              className="block py-2 hover:bg-orange-600 px-2 rounded"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="/yuvasetu/mentors"
              className="block py-2 hover:bg-orange-600 px-2 rounded"
              onClick={() => setMobileMenuOpen(false)}
            >
              Mentors
            </Link>
            <Link
              href="/yuvasetu/dashboard"
              className="block bg-white text-orange-600 px-4 py-2 rounded-full font-semibold text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Dashboard
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
