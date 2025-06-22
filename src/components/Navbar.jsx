import React, { useState } from "react";
import zetaspoticonImg from "../assets/ZetaSpot Icon.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
     <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
           <div className="flex shrink-0 items-center">
              <img className="h-8 w-auto" src={zetaspoticonImg} alt="Zeta Smart School" />
            </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-blue-600">Home</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">About</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Contact</a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-blue-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <a href="#" className="block text-gray-600 hover:text-blue-600">Home</a>
          <a href="#" className="block text-gray-600 hover:text-blue-600">About</a>
          <a href="#" className="block text-gray-600 hover:text-blue-600">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
