"use client";
import { useState } from 'react';

export default function HeroSection({isDark}) {
  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      isDark 
        ? 'bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950' 
        : 'bg-gradient-to-br from-gray-50 via-white to-gray-50'
    }`}>
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-8 flex flex-col items-center text-center">
        {/* Badge */}
        {/* <div className={`inline-flex items-center space-x-3 rounded-full px-5 py-2  mb-5 transition-all duration-500 ${
          isDark 
            ? 'bg-emerald-500/10 border border-emerald-500/30 shadow-lg shadow-emerald-500/10' 
            : 'bg-emerald-50 border border-emerald-200 shadow-lg shadow-emerald-200/50'
        }`}>
          <span className="text-xl">🌾</span>
          <span className={`text-sm font-bold transition-colors duration-500 ${
            isDark ? 'text-emerald-400' : 'text-emerald-700'
          }`}>
            #1 Farm Management Platform - Trusted by 2,500+ Farmers
          </span>
        </div> */}

        {/* Main Heading */}
        <h1 className={`text-2xl md:text-6xl font-extrabold mb-8 max-w-5xl leading-tight transition-colors duration-500 ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>
          Transform Your Farm with{' '}
          <span className="bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-600 bg-clip-text text-transparent">
            Smart Management
          </span>
        </h1>

        {/* Subheading */}
        <p className={`text-xl mb-6 max-w-2xl leading-relaxed transition-colors duration-500 ${
          isDark ? 'text-gray-300' : 'text-gray-600'
        }`}>
          Monitor livestock health, track inventory, manage finances, and
          boost productivity with our all-in-one farm management solution.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-8 mb-12">
          <button className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-10 py-3 rounded-full text-lg font-bold hover:shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-110 flex items-center space-x-3">
            <span>Start Free 30-Day Trial</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
          <button className={`px-10 py-3 rounded-full text-lg font-bold transition-all duration-300 hover:scale-105 flex items-center space-x-3 ${
            isDark 
              ? 'border-2 border-emerald-500/50 text-white hover:bg-emerald-500/20 hover:border-emerald-400' 
              : 'border-2 border-emerald-400 text-emerald-700 hover:bg-emerald-50'
          }`}>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            <span>Watch Demo</span>
          </button>
        </div>

        {/* Trust Indicators */}
        <p className={`text-sm mb-10 flex items-center space-x-3 transition-colors duration-500 ${
          isDark ? 'text-gray-400' : 'text-gray-600'
        }`}>
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
          <span>No credit card required</span>
          <span className="text-emerald-500">•</span>
          <span>Cancel anytime</span>
          <span className="text-emerald-500">•</span>
          <span>24/7 support</span>
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-20 max-w-6xl w-full">
          <div className={`flex flex-col items-center p-8 rounded-3xl transition-all duration-500 hover:scale-110 ${
            isDark 
              ? 'bg-emerald-500/5 border border-emerald-500/20 hover:bg-emerald-500/10 hover:border-emerald-500/40 shadow-lg shadow-emerald-500/5' 
              : 'bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 hover:border-emerald-300 shadow-lg shadow-emerald-200/50'
          }`}>
            <div className="flex items-center space-x-3 mb-3">
              <svg className="w-8 h-8 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <p className={`text-5xl font-black transition-colors duration-500 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>2,500+</p>
            </div>
            <p className={`text-sm font-bold transition-colors duration-500 ${
              isDark ? 'text-emerald-400' : 'text-emerald-700'
            }`}>Active Farmers</p>
          </div>

          <div className={`flex flex-col items-center p-8 rounded-3xl transition-all duration-500 hover:scale-110 ${
            isDark 
              ? 'bg-emerald-500/5 border border-emerald-500/20 hover:bg-emerald-500/10 hover:border-emerald-500/40 shadow-lg shadow-emerald-500/5' 
              : 'bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 hover:border-emerald-300 shadow-lg shadow-emerald-200/50'
          }`}>
            <div className="flex items-center space-x-3 mb-3">
              <svg className="w-8 h-8 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <p className={`text-5xl font-black transition-colors duration-500 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>15M+</p>
            </div>
            <p className={`text-sm font-bold transition-colors duration-500 ${
              isDark ? 'text-emerald-400' : 'text-emerald-700'
            }`}>Animals Tracked</p>
          </div>

          <div className={`flex flex-col items-center p-8 rounded-3xl transition-all duration-500 hover:scale-110 ${
            isDark 
              ? 'bg-emerald-500/5 border border-emerald-500/20 hover:bg-emerald-500/10 hover:border-emerald-500/40 shadow-lg shadow-emerald-500/5' 
              : 'bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 hover:border-emerald-300 shadow-lg shadow-emerald-200/50'
          }`}>
            <div className="flex items-center space-x-3 mb-3">
              <svg className="w-8 h-8 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <p className={`text-5xl font-black transition-colors duration-500 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>99.9%</p>
            </div>
            <p className={`text-sm font-bold transition-colors duration-500 ${
              isDark ? 'text-emerald-400' : 'text-emerald-700'
            }`}>Uptime</p>
          </div>

          <div className={`flex flex-col items-center p-8 rounded-3xl transition-all duration-500 hover:scale-110 ${
            isDark 
              ? 'bg-emerald-500/5 border border-emerald-500/20 hover:bg-emerald-500/10 hover:border-emerald-500/40 shadow-lg shadow-emerald-500/5' 
              : 'bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 hover:border-emerald-300 shadow-lg shadow-emerald-200/50'
          }`}>
            <div className="flex items-center space-x-3 mb-3">
              <svg className="w-8 h-8 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
              <p className={`text-5xl font-black transition-colors duration-500 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>4.9/5</p>
            </div>
            <p className={`text-sm font-bold transition-colors duration-500 ${
              isDark ? 'text-emerald-400' : 'text-emerald-700'
            }`}>User Rating</p>
          </div>
        </div>
      </div>
    </div>
  );
}