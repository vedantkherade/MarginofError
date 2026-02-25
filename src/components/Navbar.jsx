import { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { darkMode, toggleTheme } = useTheme();

  const linkClasses =
    "text-gray-700 dark:text-white text-base font-medium hover:text-teal-600 dark:hover:text-teal-400 transition transform hover:scale-105";

  return (
    <header
      className="
        sticky top-0 z-50 mx-4
        rounded-3xl
        bg-white/80 dark:bg-gray-900/80
        backdrop-blur-lg
        shadow-xl
        border border-gray-200 dark:border-gray-700
        transition-all duration-300 hover:shadow-2xl
      "
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="flex h-20 items-center justify-between">
          
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-teal-600 dark:text-teal-400 tracking-wide hover:scale-105 transition-transform"
          >
            WearX
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            <Link to="/" className={linkClasses}>
              Home
            </Link>
            <Link to="/collection" className={linkClasses}>
              Collection
            </Link>
            <Link to="/about" className={linkClasses}>
              About
            </Link>

            {/* Dark Mode Toggle */}
            <label className="relative inline-flex items-center cursor-pointer scale-110">
              <input
                type="checkbox"
                checked={darkMode}
                onChange={toggleTheme}
                className="sr-only peer"
              />
              <div className="w-12 h-6 bg-gray-300 dark:bg-gray-700 rounded-full peer-checked:bg-teal-600 transition"></div>
              <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition peer-checked:translate-x-6"></span>
            </label>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden rounded-lg bg-gray-100 dark:bg-gray-800 p-3 hover:scale-105 transition"
          >
            <svg
              className="size-6 text-gray-700 dark:text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg rounded-b-3xl animate-fade-in">
          <div className="flex flex-col gap-5 px-6 py-6">
            <Link onClick={() => setOpen(false)} to="/" className={linkClasses}>
              Home
            </Link>
            <Link
              onClick={() => setOpen(false)}
              to="/collection"
              className={linkClasses}
            >
              Collection
            </Link>
            <Link
              onClick={() => setOpen(false)}
              to="/about"
              className={linkClasses}
            >
              About
            </Link>

            {/* Dark Toggle */}
            <div className="flex items-center gap-3 pt-2">
              <span className="text-sm text-gray-700 dark:text-gray-300">
                Dark Mode
              </span>
              <label className="relative inline-flex items-center cursor-pointer scale-110">
                <input
                  type="checkbox"
                  checked={darkMode}
                  onChange={toggleTheme}
                  className="sr-only peer"
                />
                <div className="w-12 h-6 bg-gray-300 dark:bg-gray-700 rounded-full peer-checked:bg-teal-600 transition"></div>
                <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition peer-checked:translate-x-6"></span>
              </label>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}