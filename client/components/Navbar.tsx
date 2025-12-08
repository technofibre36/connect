"use client";

import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-blue-600 text-white">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          MyApp
        </Link>
        <div className="flex gap-6 items-center">
          <Link href="/" className="hover:text-blue-200">
            Home
          </Link>
          {user ? (
            <>
              <Link href="/dashboard" className="hover:text-blue-200">
                Dashboard
              </Link>
              <button
                onClick={logout}
                className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="hover:text-blue-200">
                Login
              </Link>
              <Link
                href="/register"
                className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
