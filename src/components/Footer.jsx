import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-24 bg-gray-100 dark:bg-slate-900 text-gray-700 dark:text-gray-300">
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">

      
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-black dark:text-white tracking-wide">
            WearX
          </h2>
          <p className="text-sm leading-relaxed">
            Premium shirts and t-shirts crafted for comfort, confidence,
            and everyday style.
          </p>
        </div>


        <div>
          <h3 className="font-semibold mb-4 text-black dark:text-white">
     
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link
                to="/"
                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition transform hover:translate-x-1"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/collection"
                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition transform hover:translate-x-1"
              >
                Collection
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition transform hover:translate-x-1"
              >
                About
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4 text-black dark:text-white">
            Support
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-indigo-600 dark:hover:text-indigo-400 transition cursor-pointer">
              Shipping & Returns
            </li>
            <li className="hover:text-indigo-600 dark:hover:text-indigo-400 transition cursor-pointer">
              Size Guide
            </li>
            <li className="hover:text-indigo-600 dark:hover:text-indigo-400 transition cursor-pointer">
              FAQs
            </li>
            <li className="hover:text-indigo-600 dark:hover:text-indigo-400 transition cursor-pointer">
              Contact Us
            </li>
          </ul>
        </div>

    
        <div>
          <h3 className="font-semibold mb-4 text-black dark:text-white">
            Stay Updated
          </h3>
          <p className="text-sm mb-4">
            Get updates on new drops & offers.
          </p>
          <div className="flex rounded-lg overflow-hidden border border-gray-300 dark:border-gray-700 focus-within:ring-2 focus-within:ring-indigo-500 transition">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 outline-none text-black dark:text-white bg-white dark:bg-slate-800 placeholder-gray-400"
            />
            <button className="px-4 bg-indigo-600 text-white hover:bg-indigo-700 transition">
              →
            </button>
          </div>
        </div>

      </div>

      <div className="border-t border-gray-300 dark:border-gray-700 py-6 text-center text-sm">
        © {new Date().getFullYear()} WearX. All rights reserved.
      </div>
    </footer>
  );
}