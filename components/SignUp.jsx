import React, { useState } from 'react';
import { Leaf, TrendingUp, Users, Shield, CheckCircle, Eye, EyeOff, Sparkles, ArrowRight } from 'lucide-react';

export default function SignUp({ isDark = false }) {
  const [formData, setFormData] = useState({
    fullName: '',
    farmName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Smart Analytics',
      description: 'Get real-time insights and boost your farm productivity by up to 40%'
    },
    {
      icon: Users,
      title: 'Farmer Community',
      description: 'Connect with expert farmers and share valuable farming experiences'
    },
    {
      icon: Shield,
      title: 'Data Protection',
      description: 'Enterprise-grade security keeps your farm data safe and private'
    }
  ];

  return (
    <div className={`m-5 flex items-center justify-center p-2 ${
      isDark
        ? 'bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950'
        : 'bg-gradient-to-br from-gray-50 via-white to-gray-50'
    }`}>
      <div className={`w-full max-w-6xl grid lg:grid-cols-2 gap-0 transition-all duration-300 ${
        isDark ? 'bg-gray-900/50' : 'bg-white'
      } backdrop-blur-xl rounded-3xl shadow-2xl border ${
        isDark ? 'border-gray-800' : 'border-gray-200'
      } overflow-hidden`}>
        
        {/* Left Side - Benefits Content */}
        <div className={`relative p-8 lg:p-10 flex flex-col justify-center min-h-[500px] ${
          isDark 
            ? 'bg-gray-900/80' 
            : 'bg-gradient-to-br from-emerald-50 to-green-50'
        }`}>
          {/* Decorative Elements */}
          <div className={`absolute top-10 right-10 w-40 h-40 rounded-full blur-3xl ${
            isDark ? 'bg-emerald-500/5' : 'bg-emerald-500/20'
          }`}></div>
          <div className={`absolute bottom-10 left-10 w-32 h-32 rounded-full blur-3xl ${
            isDark ? 'bg-green-500/5' : 'bg-green-500/20'
          }`}></div>

          <div className="relative z-10">
            {/* Logo/Brand */}
            <div className="flex items-center gap-3 mb-6">
              <div className={`p-3 rounded-2xl backdrop-blur-sm ${
                isDark ? 'bg-emerald-500/10 border border-emerald-500/20' : 'bg-emerald-500/20 border border-emerald-500/30'
              }`}>
                <Leaf className={`w-8 h-8 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
              </div>
              <div>
                <h1 className={`font-bold text-2xl ${isDark ? 'text-white' : 'text-gray-900'}`}>Agri Farm</h1>
                <div className={`flex items-center gap-1 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  <Sparkles className="w-3 h-3" />
                  <span>Growing Together</span>
                </div>
              </div>
            </div>

            {/* Main Heading */}
            <div className="mb-8">
              <h2 className={`text-3xl lg:text-4xl font-bold mb-3 leading-tight ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Transform Your
                <span className={`block ${
                  isDark ? 'text-emerald-400' : 'text-emerald-600'
                }`}>
                  Farming Journey
                </span>
              </h2>
              <p className={`text-base lg:text-lg leading-relaxed ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Join thousands of progressive farmers who are revolutionizing agriculture with smart technology
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className={`flex gap-4 items-start p-4 rounded-xl transition-all duration-300 ${
                    isDark
                      ? 'bg-gray-800/40 hover:bg-gray-800/60 border border-gray-700/50'
                      : 'bg-white/80 hover:bg-white border border-emerald-100'
                  } backdrop-blur-sm group cursor-pointer`}>
                    <div className={`p-2 rounded-lg flex-shrink-0 transition-all duration-300 ${
                      isDark
                        ? 'bg-emerald-500/10 group-hover:bg-emerald-500/20'
                        : 'bg-emerald-500/10 group-hover:bg-emerald-500/20'
                    }`}>
                      <Icon className={`w-5 h-5 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
                    </div>
                    <div>
                      <h3 className={`font-bold text-base mb-1 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        {benefit.title}
                      </h3>
                      <p className={`text-sm leading-relaxed ${
                        isDark ? 'text-gray-400' : 'text-gray-700'
                      }`}>
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Badge */}
            <div className={`pt-6 border-t ${
              isDark ? 'border-gray-800' : 'border-gray-300'
            }`}>
              <div className={`flex items-center gap-2 ${
                isDark ? 'text-gray-400' : 'text-gray-700'
              }`}>
                <CheckCircle className={`w-5 h-5 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
                <span className="text-sm font-medium">Free 30-day trial • No credit card required</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Sign Up Form */}
        <div className="p-8 lg:p-10 flex flex-col justify-center">
          {/* Header */}
          <div className="mb-8">
            <h2 className={`text-3xl font-bold mb-2 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Create your account
            </h2>
            <p className={`text-base ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Sign up to get started with <span className={`font-semibold ${
                isDark ? 'text-emerald-400' : 'text-emerald-600'
              }`}>Agri Farm</span>
            </p>
          </div>

          {/* Form */}
          <div className="space-y-5">
            {/* Full Name */}
            <div>
              <label className={`block text-sm font-medium mb-2 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="John Smith"
                className={`w-full px-4 py-3 rounded-lg border transition-all outline-none ${
                  isDark
                    ? 'bg-gray-800/50 border-gray-700 text-white placeholder-gray-500 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20'
                    : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20'
                }`}
                required
              />
            </div>

            {/* Farm Name */}
            <div>
              <label className={`block text-sm font-medium mb-2 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Farm Name
              </label>
              <input
                type="text"
                name="farmName"
                value={formData.farmName}
                onChange={handleChange}
                placeholder="Green Valley Farm"
                className={`w-full px-4 py-3 rounded-lg border transition-all outline-none ${
                  isDark
                    ? 'bg-gray-800/50 border-gray-700 text-white placeholder-gray-500 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20'
                    : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20'
                }`}
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className={`block text-sm font-medium mb-2 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className={`w-full px-4 py-3 rounded-lg border transition-all outline-none ${
                  isDark
                    ? 'bg-gray-800/50 border-gray-700 text-white placeholder-gray-500 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20'
                    : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20'
                }`}
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className={`block text-sm font-medium mb-2 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className={`w-full px-4 py-3 pr-12 rounded-lg border transition-all outline-none ${
                    isDark
                      ? 'bg-gray-800/50 border-gray-700 text-white placeholder-gray-500 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20'
                      : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20'
                  }`}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className={`absolute right-3 top-1/2 -translate-y-1/2 ${
                    isDark ? 'text-gray-500 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600'
                  } transition-colors`}
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className={`block text-sm font-medium mb-2 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className={`w-full px-4 py-3 pr-12 rounded-lg border transition-all outline-none ${
                    isDark
                      ? 'bg-gray-800/50 border-gray-700 text-white placeholder-gray-500 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20'
                      : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20'
                  }`}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className={`absolute right-3 top-1/2 -translate-y-1/2 ${
                    isDark ? 'text-gray-500 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600'
                  } transition-colors`}
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-semibold py-3 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-[1.02] mt-6"
            >
              Create Account
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className={`w-full border-t ${
                isDark ? 'border-gray-800' : 'border-gray-300'
              }`}></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className={`px-4 ${
                isDark ? 'bg-gray-900/50 text-gray-400' : 'bg-white text-gray-500'
              }`}>
                or
              </span>
            </div>
          </div>

          {/* Sign In Link */}
          <div className="text-center">
            <p className={`text-sm ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Already have an account?{' '}
              <a href="#" className={`font-semibold ${
                isDark
                  ? 'text-emerald-400 hover:text-emerald-300'
                  : 'text-emerald-600 hover:text-emerald-700'
              } transition-colors`}>
                Sign In
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}