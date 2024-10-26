import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar({ isAuthenticated, setIsAuthenticated }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    navigate("/"); // Redirect to homepage
  };

  return (
    <nav className="font-cormorant-unicase font-bold backdrop-blur-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Toggle Menu for Mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-black-800 hover:text-pink-600 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen ? "true" : "false"}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Navigation Links for Larger Screens */}
          <div className="hidden md:flex flex-grow justify-evenly items-center space-x-4">
            <Link to="/" className="text-black-800 hover:text-pink-600 text-lg">
              Home
            </Link>
            <Link
              to="/about"
              className="text-black-800 hover:text-pink-600 text-lg"
            >
              About
            </Link>
            <Link
              to="/portfolio"
              className="text-black-800 hover:text-pink-600 text-lg"
            >
              Portfolio
            </Link>
            <Link
              to="/posts"
              className="text-black-800 hover:text-pink-600 text-lg"
            >
              Blog
            </Link>

            {/* Show "Create Post" and "Logout" if authenticated */}
            {isAuthenticated && (
              <>
                <Link
                  to="/create-post"
                  className="text-black-800 hover:text-pink-600 text-lg"
                >
                  Create Post
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-black-800 hover:text-pink-600 text-lg"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block text-black-800 hover:text-pink-600 text-lg"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block text-black-800 hover:text-pink-600 text-lg"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/portfolio"
              className="block text-black-800 hover:text-pink-600 text-lg"
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              to="/posts"
              className="block text-black-800 hover:text-pink-600 text-lg"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>

            {/* Show "Create Post" and "Logout" if authenticated */}
            {isAuthenticated && (
              <>
                <Link
                  to="/create-post"
                  className="block text-black-800 hover:text-pink-600 text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Create Post
                </Link>
                <button
                  onClick={handleLogout}
                  className="block text-black-800 hover:text-pink-600 text-lg"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
