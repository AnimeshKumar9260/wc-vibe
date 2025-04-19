"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useAuth } from "./AuthContext";
import { signOut } from "firebase/auth";
import auth from "../lib/auth";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, loading } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await signOut(auth);
    setMenuOpen(false);
    router.push("/");
  };

  return (
    <header className="w-full bg-white shadow-md">
      <nav
        className="container mx-auto flex items-center justify-between px-4 py-4"
        aria-label="Main navigation"
      >
        <Link href="/" className="text-2xl font-bold text-blue-600">
          WC
        </Link>
        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 items-center">
          {/* Auth Buttons */}
          {loading ? null : user ? (
            <>
              <Link
                href="/requests"
                className="ml-4 px-4 py-2 bg-green-600 text-white font-semibold rounded hover:bg-green-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500"
              >
                Requests
              </Link>
              <button
                onClick={handleLogout}
                className="ml-2 px-4 py-2 bg-gray-200 text-gray-800 font-semibold rounded hover:bg-gray-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              href="/admin-login"
              className="ml-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              Login
            </Link>
          )}
        </div>
        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center p-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          aria-label="Toggle navigation menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg
            className="h-6 w-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md border-t">
          <div className="flex flex-col px-4 pb-4 space-y-2">
            {/* Auth Buttons */}
            {loading ? null : user ? (
              <>
                <Link
                  href="/requests"
                  className="mt-2 px-4 py-2 bg-green-600 text-white font-semibold rounded hover:bg-green-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 text-center"
                  onClick={() => setMenuOpen(false)}
                >
                  Requests
                </Link>
                <button
                  onClick={handleLogout}
                  className="mt-2 px-4 py-2 bg-gray-200 text-gray-800 font-semibold rounded hover:bg-gray-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 text-center"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                href="/admin-login"
                className="mt-2 px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 text-center"
                onClick={() => setMenuOpen(false)}
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
