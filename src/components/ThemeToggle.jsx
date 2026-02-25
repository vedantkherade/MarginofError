import React from "react";
import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle({ className = "" }) {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <label className={`relative inline-flex items-center cursor-pointer ${className}`}>
      <input
        type="checkbox"
        checked={darkMode}
        onChange={toggleTheme}
        className="sr-only peer"
        aria-label="Toggle dark mode"
      />
      <div className="w-12 h-6 bg-gray-300 dark:bg-gray-700 rounded-full peer-checked:bg-teal-600 transition" />
      <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition peer-checked:translate-x-6" />
    </label>
  );
}
