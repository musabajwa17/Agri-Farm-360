"use client";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext"; // use your context

export default function Header() {
  const { isDark, toggleTheme } = useTheme(); // use context instead of props

  const links = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    // { name: "Dashboard", href: "/dashboard"}
  ];

  return (
    <div
      className={`transition-colors duration-500 sticky top-0 z-50 ${
        isDark
          ? "bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950"
          : "bg-gradient-to-br from-gray-50 via-white to-gray-50"
      }`}
    >
      <header
        className={`sticky top-0 z-50 px-5 py-4 flex items-center justify-between backdrop-blur-md transition-colors duration-500 ${
          isDark
            ? "bg-gray-900/80 border-b border-emerald-500/20"
            : "bg-white/80 border-b border-emerald-500/20 shadow-sm"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center mx-8">
          <Link
            href="/"
            className="text-3xl font-black tracking-tight flex items-center space-x-1"
          >
            <span className="bg-gradient-to-r from-emerald-500 to-emerald-600 bg-clip-text text-transparent">
              Agri
            </span>
            <span
              className={`transition-colors duration-500 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Herd
            </span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className={`px-5 py-2.5 font-semibold rounded-lg transition-all duration-300 ${
                isDark
                  ? "text-gray-300 hover:bg-emerald-500/20 hover:text-emerald-400"
                  : "text-gray-600 hover:bg-emerald-50 hover:text-emerald-600"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme} // use global toggle
            className={`p-2.5 rounded-lg transition-all duration-300 ${
              isDark
                ? "text-gray-300 hover:text-emerald-400 hover:bg-emerald-500/10"
                : "text-gray-600 hover:text-emerald-600 hover:bg-emerald-50"
            }`}
          >
            {isDark ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            )}
          </button>

          <Link
            href="/login"
            className={`font-semibold px-5 py-2.5 rounded-lg transition-all duration-300 ${
              isDark
                ? "text-white hover:text-emerald-400"
                : "text-gray-900 hover:text-emerald-600"
            }`}
          >
            Sign In
          </Link>

          <Link
            href="/signup"
            className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-7 py-2.5 rounded-full font-bold hover:shadow-xl hover:shadow-emerald-500/40 transition-all duration-300 hover:scale-105"
          >
            Get Started Free
          </Link>
        </div>
      </header>
    </div>
  );
}
