"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  ArrowRight,
  Droplet,
  Sun,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import { useTheme } from "@/context/ThemeContext"; // import your ThemeContext

const Login = () => {
  const { isDark } = useTheme(); // get theme globally
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const features = [
    { icon: TrendingUp, text: "Analytics Management" },
    { icon: Droplet, text: "Smart Inventory Management" },
    { icon: Sun, text: "Weather Forecasting" },
    { icon: Sparkles, text: "Animal Health Management" },
  ];

  return (
    <div
      className={`m-5 flex items-center justify-center p-2 transition-colors duration-500 ${
        isDark
          ? "bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950"
          : "bg-gradient-to-br from-gray-50 via-white to-gray-50"
      }`}
    >
      <div
        className={`w-full max-w-6xl grid lg:grid-cols-2 gap-0 transition-all duration-300 ${
          isDark ? "bg-gray-900/50" : "bg-white"
        } backdrop-blur-xl rounded-3xl shadow-2xl border ${
          isDark ? "border-gray-800" : "border-gray-200"
        } overflow-hidden`}
      >
        {/* Left Side - Hero Section */}
        <div
          className={`relative p-8 lg:p-10 flex flex-col justify-center min-h-[500px] transition-colors duration-500 ${
            isDark
              ? "bg-gray-900/80"
              : "bg-gradient-to-br from-emerald-50 to-green-50"
          }`}
        >
          {/* Decorative Elements */}
          <div
            className={`absolute top-10 right-10 w-40 h-40 rounded-full blur-3xl ${
              isDark ? "bg-emerald-500/5" : "bg-emerald-500/20"
            }`}
          />
          <div
            className={`absolute bottom-10 left-10 w-32 h-32 rounded-full blur-3xl ${
              isDark ? "bg-green-500/5" : "bg-green-500/20"
            }`}
          />

          <div className="relative z-10">
            {/* Heading */}
            <h1
              className={`text-3xl lg:text-4xl font-bold mb-3 leading-tight transition-colors duration-500 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Modern Farming,
              <span
                className={`block transition-colors duration-500 ${
                  isDark ? "text-emerald-400" : "text-emerald-600"
                }`}
              >
                Reliable Results
              </span>
            </h1>

            <p
              className={`text-base lg:text-lg mb-8 leading-relaxed transition-colors duration-500 ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Transform farming with cutting-edge technology and sustainable
              management
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-start gap-2 p-4 rounded-xl transition-all duration-300 ${
                    isDark
                      ? "bg-gray-800/40 hover:bg-gray-800/60 border border-gray-700/50"
                      : "bg-white/80 hover:bg-white border border-emerald-100"
                  } backdrop-blur-sm group cursor-pointer`}
                >
                  <div
                    className={`p-2 rounded-lg transition-all duration-300 ${
                      isDark
                        ? "bg-emerald-500/10 group-hover:bg-emerald-500/20"
                        : "bg-emerald-500/10 group-hover:bg-emerald-500/20"
                    }`}
                  >
                    <feature.icon
                      className={`w-5 h-5 ${
                        isDark ? "text-emerald-400" : "text-emerald-600"
                      }`}
                    />
                  </div>
                  <span
                    className={`text-sm font-medium transition-colors duration-500 ${
                      isDark ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: "500+", label: "Farmers" },
                { value: "98%", label: "Success" },
                { value: "24/7", label: "Support" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className={`text-center p-3 rounded-xl backdrop-blur-sm transition-colors duration-500 ${
                    isDark
                      ? "bg-gray-800/40 border border-gray-700/50"
                      : "bg-white/80 border border-emerald-100"
                  }`}
                >
                  <div
                    className={`text-xl lg:text-2xl font-bold transition-colors duration-500 ${
                      isDark ? "text-emerald-400" : "text-emerald-600"
                    }`}
                  >
                    {stat.value}
                  </div>
                  <div
                    className={`text-xs transition-colors duration-500 ${
                      isDark ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="p-8 lg:p-10 flex flex-col justify-center">
          {/* Header */}
          <div className="mb-8">
            <h2
              className={`text-3xl font-bold mb-2 transition-colors duration-500 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Welcome Back
            </h2>
            <p
              className={`transition-colors duration-500 ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Enter your credentials to continue
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label
                className={`block text-sm font-medium mb-2 transition-colors duration-500 ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Email Address
              </label>
              <div className="relative">
                <Mail
                  className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors duration-500 ${
                    isDark ? "text-gray-500" : "text-gray-400"
                  }`}
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className={`w-full pl-11 pr-4 py-3 rounded-lg border transition-all outline-none duration-500 ${
                    isDark
                      ? "bg-gray-800/50 border-gray-700 text-white placeholder-gray-500 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                      : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                  }`}
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label
                className={`block text-sm font-medium mb-2 transition-colors duration-500 ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Password
              </label>
              <div className="relative">
                <Lock
                  className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors duration-500 ${
                    isDark ? "text-gray-500" : "text-gray-400"
                  }`}
                />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="••••••••"
                  className={`w-full pl-11 pr-12 py-3 rounded-lg border transition-all outline-none duration-500 ${
                    isDark
                      ? "bg-gray-800/50 border-gray-700 text-white placeholder-gray-500 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                      : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className={`absolute right-3 top-1/2 -translate-y-1/2 transition-colors duration-500 ${
                    isDark
                      ? "text-gray-500 hover:text-gray-300"
                      : "text-gray-400 hover:text-gray-600"
                  }`}
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Forgot Password */}
            <div className="flex justify-end">
              <button
                type="button"
                className={`text-sm font-medium transition-colors duration-500 ${
                  isDark
                    ? "text-emerald-400 hover:text-emerald-300"
                    : "text-emerald-600 hover:text-emerald-700"
                }`}
              >
                Forgot Password?
              </button>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-semibold py-3 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-[1.02]"
            >
              Sign In
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div
                className={`w-full border-t transition-colors duration-500 ${
                  isDark ? "border-gray-800" : "border-gray-300"
                }`}
              />
            </div>
            <div className="relative flex justify-center text-sm">
              <span
                className={`px-4 transition-colors duration-500 ${
                  isDark
                    ? "bg-gray-900/50 text-gray-400"
                    : "bg-white text-gray-500"
                }`}
              >
                or
              </span>
            </div>
          </div>

          {/* Signup Redirect */}
          <div className="text-center">
            <p
              className={`text-sm transition-colors duration-500 ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Don’t have an account?{" "}
              <Link
                href="/signup"
                className={`font-semibold transition-colors duration-500 ${
                  isDark
                    ? "text-emerald-400 hover:text-emerald-300"
                    : "text-emerald-600 hover:text-emerald-700"
                }`}
              >
                Sign Up for Free
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
