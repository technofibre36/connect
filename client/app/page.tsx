import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Welcome to MyApp
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Your simple Node.js authentication system with MongoDB and Next.js
          </p>
          <Link
            href="/register"
            className="inline-block bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold"
          >
            Get Started
          </Link>
        </div>
      </div>
    </>
  );
}

