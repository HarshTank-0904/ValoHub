import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "../index.css";
import { ChevronDown, ChevronUp } from "lucide-react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[--rd] text-white p-4 shadow-md top-0 left-0 w-full z-50 sticky no-underline">
      <div className="max-w-7xl mx-auto flex justify-between items-center no-underline">
        {/* Left Side - Brand Name */}
        <Link
          to="/"
          className="text-2xl font-bold valo-font text-[--blk] hover:text-gray-300 transition no-underline"
        >
          ValoHub
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {/* Dropdown for Pages */}
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="px-4 py-2 bg-[--blk] hover:bg-opacity-80 rounded-md transition flex items-center gap-2"
            >
              Pages{" "}
              {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>

            {isOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-[--blk] text-white shadow-lg rounded-md no-underline">
                <Link
                  to="/agents"
                  className="block px-4 py-2 hover:bg-gray-700 text-white transition no-underline"
                  onClick={() => setIsOpen(false)}
                >
                  Agents
                </Link>

                <Link
                  to="/maps"
                  className="block px-4 py-2 hover:bg-gray-700 text-white transition no-underline"
                  onClick={() => setIsOpen(false)}
                >
                  Maps
                </Link>

                <Link
                  to="/gamemodes"
                  className="block px-4 py-2 hover:bg-gray-700 text-white transition no-underline"
                  onClick={() => setIsOpen(false)}
                >
                  Game Modes
                </Link>

                <Link
                  to="/weapons"
                  className="block px-4 py-2 hover:bg-gray-700 text-white transition no-underline"
                  onClick={() => setIsOpen(false)}
                >
                  Weapons
                </Link>
              </div>
            )}
          </div>

          {/* Navigation Buttons */}
          <Link
            to="/"
            className="px-4 py-2 bg-[--blk] text-white hover:bg-opacity-50 rounded-md transition no-underline"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="px-4 py-2 bg-[--blk] text-white hover:bg-opacity-50 rounded-md transition no-underline"
          >
            About Me
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-[--blk] text-white rounded-md shadow-md p-4">
          <Link
            to="/"
            className="block px-4 py-2 hover:bg-gray-700 transition"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block px-4 py-2 hover:bg-gray-700 transition"
            onClick={() => setIsOpen(false)}
          >
            About Me
          </Link>
          <Link
            to="/agents"
            className="block px-4 py-2 hover:bg-gray-700 transition"
            onClick={() => setIsOpen(false)}
          >
            Agents
          </Link>
          <Link
            to="/maps"
            className="block px-4 py-2 hover:bg-gray-700 transition"
            onClick={() => setIsOpen(false)}
          >
            Maps
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Header;
