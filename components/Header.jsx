"use client";
import { useState } from 'react';

export default function Header({ isDark, setIsDark }) {
  return (
    <div
      className={`transition-colors duration-500 sticky top-0 z-50 ${
        isDark
          ? 'bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950'
          : 'bg-gradient-to-br from-gray-50 via-white to-gray-50'
      }`}
    >
      {/* Header */}
      <header
        className={`sticky top-0 z-50 px-5 py-4 flex items-center justify-between backdrop-blur-md transition-colors duration-500 ${
          isDark
            ? 'bg-gray-900/80 border-b border-emerald-500/20'
            : 'bg-white/80 border-b border-emerald-500/20 shadow-sm'
        }`}
      >
        <div className="flex items-center mx-8">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="text-3xl font-black tracking-tight">
              <span className="bg-gradient-to-r from-emerald-500 to-emerald-600 bg-clip-text text-transparent">
                AgriFarm
              </span>
              <span
                className={`transition-colors duration-500 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}
              >
                {' '}
                360°
              </span>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {['Home', 'Features', 'Pricing', 'About', 'Contact'].map((item, index) => (
            <a
              key={index}
              href="#"
              className={`px-5 py-2.5 font-semibold rounded-lg transition-all duration-300 ${
                isDark
                  ? 'text-gray-300 hover:bg-emerald-500/20 hover:text-emerald-400'
                  : 'text-gray-600 hover:bg-emerald-50 hover:text-emerald-600'
              }`}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setIsDark(!isDark)}
            className={`p-2.5 rounded-lg transition-all duration-300 ${
              isDark
                ? 'text-gray-300 hover:text-emerald-400 hover:bg-emerald-500/10'
                : 'text-gray-600 hover:text-emerald-600 hover:bg-emerald-50'
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

          <button
            className={`font-semibold px-5 py-2.5 rounded-lg transition-all duration-300 ${
              isDark
                ? 'text-white hover:text-emerald-400'
                : 'text-gray-900 hover:text-emerald-600'
            }`}
          >
            Sign In
          </button>

          <button className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-7 py-2.5 rounded-full font-bold hover:shadow-xl hover:shadow-emerald-500/40 transition-all duration-300 hover:scale-105">
            Get Started Free
          </button>
        </div>
      </header>
    </div>
  );
}
