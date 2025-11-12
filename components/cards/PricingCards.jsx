"use client";
import React, { useState, useEffect } from "react";
import { Zap, Crown, Sparkles, Check, ArrowRight, Star, Shield, Rocket } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export default function PricingCards() {
  const {isDark} = useTheme();
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isAnnual, setIsAnnual] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const plans = [
    {
      name: "Starter",
      icon: Zap,
      description: "Perfect for individuals and small projects",
      monthlyPrice: "29",
      annualPrice: "290",
      features: [
        "Access to core features",
        "Email support included",
        "Up to 5 team members",
        "10GB storage"
      ],
      gradient: "from-emerald-400 via-teal-400 to-cyan-500",
      iconColor: "text-emerald-400",
      highlight: false,
      badge: "Great Start"
    },
    {
      name: "Professional",
      icon: Crown,
      description: "Most popular for growing teams",
      monthlyPrice: "79",
      annualPrice: "790",
      features: [
        "Everything in Starter",
        "Priority support 24/7",
        "Unlimited team members",
        "100GB storage"
      ],
      gradient: "from-violet-400 via-purple-400 to-fuchsia-500",
      iconColor: "text-violet-400",
      highlight: true,
      badge: "Most Popular"
    },
    {
      name: "Enterprise",
      icon: Sparkles,
      description: "Ultimate power for large organizations",
      monthlyPrice: "149",
      annualPrice: "1490",
      features: [
        "Everything in Professional",
        "Dedicated account manager",
        "Custom integrations & API",
        "Unlimited storage"
      ],
      gradient: "from-amber-400 via-orange-400 to-red-500",
      iconColor: "text-amber-400",
      highlight: false,
      badge: "Maximum Power"
    },
  ];

  const benefits = [
    { icon: Shield, text: "30-day money-back guarantee" },
    { icon: Star, text: "No credit card required" },
    { icon: Rocket, text: "Setup in under 5 minutes" }
  ];

  return (
    <div className={`min-h-screen relative overflow-hidden transition-all duration-700 ${
      isDark ? "bg-gray-950" : "bg-white"
    }`}>
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute inset-0 ${isDark ? "opacity-30" : "opacity-40"}`}>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
        </div>
        
        {/* Grid Pattern */}
        <div className={`absolute inset-0 ${isDark ? "opacity-5" : "opacity-10"}`}
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, ${isDark ? "rgb(255 255 255)" : "rgb(0 0 0)"} 1px, transparent 0)`,
            backgroundSize: "50px 50px"
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto py-20 px-4">
        {/* Theme Toggle */}
        <div className="absolute top-8 right-8">
          <button
            onClick={() => setIsDark(!isDark)}
            className={`p-4 rounded-2xl transition-all duration-300 shadow-lg ${
              isDark 
                ? "bg-gray-800 hover:bg-gray-700 text-yellow-400" 
                : "bg-white hover:bg-gray-50 text-amber-500 border-2 border-emerald-200"
            }`}
          >
            {isDark ? "☀️" : "🌙"}
          </button>
        </div>

        {/* Header */}
        <div className="text-center mb-16 space-y-8">
          <div className="inline-block animate-fade-in">
            <div className="relative">
              <div className={`absolute inset-0 blur-xl opacity-60 ${
                isDark ? "bg-gradient-to-r from-emerald-500 to-teal-500" : "bg-gradient-to-r from-emerald-400 to-teal-400"
              }`}></div>
              <span className={`relative inline-block text-sm font-bold tracking-widest uppercase px-6 py-3 rounded-full ${
                isDark
                  ? "bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-300 border-2 border-emerald-500/30"
                  : "bg-gradient-to-r from-emerald-500/10 to-teal-500/10 text-emerald-700 border-2 border-emerald-500/20"
              }`}>
                ✨ Transparent Pricing
              </span>
            </div>
          </div>
          
          <h1 className={`text-7xl md:text-8xl font-black tracking-tight leading-none ${
            isDark ? "text-white" : "text-gray-900"
          }`}>
            Choose Your
            <br />
            <span className="relative inline-block mt-2">
              <span className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 blur-2xl opacity-50"></span>
              <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500">
                Power Level
              </span>
            </span>
          </h1>
          
          <p className={`text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}>
            Start with a 30-day free trial. Scale as you grow. Cancel anytime, no questions asked.
          </p>

          {/* Billing Toggle */}
          <div className={`inline-flex items-center gap-4 p-2 rounded-2xl shadow-lg ${
            isDark ? "bg-gray-800/50 border border-gray-700" : "bg-white/80 backdrop-blur-sm border-2 border-emerald-100"
          }`}>
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                !isAnnual
                  ? isDark
                    ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg"
                    : "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg"
                  : isDark
                    ? "text-gray-400 hover:text-gray-200"
                    : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 relative ${
                isAnnual
                  ? isDark
                    ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg"
                    : "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg"
                  : isDark
                    ? "text-gray-400 hover:text-gray-200"
                    : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Annual
              <span className="ml-2 text-xs px-2 py-1 rounded-full bg-emerald-500 text-white font-bold">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 my-25 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
            const isHovered = hoveredCard === index;
            
            return (
              <div
                key={plan.name}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`relative ${plan.highlight ? "md:-mt-8" : ""}`}
                style={{
                  transform: plan.highlight ? "scale(1.05)" : "scale(1)",
                  transition: "transform 0.3s ease"
                }}
              >
                {/* Popular Badge */}
                {plan.highlight && (
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 blur-xl opacity-70 animate-pulse"></div>
                      <div className="relative px-6 py-2 rounded-full text-sm font-bold bg-gradient-to-r from-emerald-500 to-teal-500 text-white flex items-center gap-2 shadow-2xl">
                        <Crown className="w-4 h-4" />
                        {plan.badge}
                      </div>
                    </div>
                  </div>
                )}

                {/* Card */}
                <div className={`relative h-full rounded-3xl overflow-hidden transition-all duration-500 ${
                  isDark
                    ? "bg-gray-900/50 border-2 border-gray-800"
                    : "bg-white/90 backdrop-blur-md border-2 border-emerald-100 shadow-xl"
                } ${
                  plan.highlight
                    ? isDark ? "shadow-2xl shadow-emerald-500/30" : "shadow-2xl shadow-emerald-500/20 border-emerald-200"
                    : isDark ? "shadow-xl hover:shadow-2xl" : "shadow-lg hover:shadow-xl"
                } backdrop-blur-xl ${isHovered ? "scale-105" : "scale-100"}`}>
                  
                  {/* Animated Gradient Border */}
                  <div className={`absolute inset-0 opacity-0 transition-opacity duration-500 ${
                    isHovered ? "opacity-100" : ""
                  }`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} ${
                      plan.highlight 
                        ? isDark ? "opacity-30" : "opacity-10" 
                        : isDark ? "opacity-20" : "opacity-8"
                    }`}></div>
                  </div>

                  {/* Spotlight Effect */}
                  {isHovered && (
                    <div
                      className="absolute inset-0 opacity-30 pointer-events-none"
                      style={{
                        background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.1), transparent 40%)`
                      }}
                    ></div>
                  )}

                  <div className="relative z-10 p-10">
                    {/* Icon with Floating Animation */}
                    <div className={`relative mb-8 inline-block ${isHovered ? "animate-bounce" : ""}`}>
                      <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} blur-xl opacity-60`}></div>
                      <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${plan.gradient} p-1 shadow-2xl transform transition-transform duration-500 ${
                        isHovered ? "rotate-12 scale-110" : ""
                      }`}>
                        <div className={`w-full h-full rounded-2xl flex items-center justify-center ${
                          isDark ? "bg-gray-900" : "bg-white shadow-inner"
                        }`}>
                          <Icon className={`w-10 h-10 ${plan.iconColor}`} strokeWidth={2.5} />
                        </div>
                      </div>
                    </div>

                    {/* Plan Name */}
                    <h3 className={`text-4xl font-black mb-3 tracking-tight ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}>
                      {plan.name}
                    </h3>

                    {/* Description */}
                    <p className={`text-base mb-8 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                      {plan.description}
                    </p>

                    {/* Price */}
                    <div className="mb-10">
                      <div className="flex items-baseline gap-1 mb-2">
                        <span className={`text-6xl font-black tracking-tighter ${plan.iconColor}`}>
                          ${price}
                        </span>
                        <span className={`text-xl font-semibold ${isDark ? "text-gray-500" : "text-gray-400"}`}>
                          /{isAnnual ? "year" : "mo"}
                        </span>
                      </div>
                      {isAnnual && (
                        <p className="text-sm font-medium text-emerald-500">
                          Save ${(plan.monthlyPrice * 12 - plan.annualPrice).toFixed(0)}/year
                        </p>
                      )}
                    </div>

                    {/* Features */}
                    <div className="space-y-4 mb-8">
                      {plan.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 group/feature"
                          style={{
                            animation: isHovered ? `slideIn 0.3s ease forwards ${idx * 0.05}s` : "none"
                          }}
                        >
                          <div className={`mt-0.5 w-6 h-6 rounded-lg bg-gradient-to-br ${plan.gradient} flex-shrink-0 flex items-center justify-center shadow-lg transform transition-transform duration-200 group-hover/feature:scale-110`}>
                            <Check className="w-4 h-4 text-white" strokeWidth={3} />
                          </div>
                          <span className={`text-base leading-snug ${
                            isDark ? "text-gray-300" : "text-gray-800"
                          }`}>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <button className={`relative w-full py-5 rounded-2xl font-bold text-lg text-white transition-all duration-300 transform hover:translate-y-[-4px] active:translate-y-0 shadow-xl hover:shadow-2xl overflow-hidden group/btn ${
                      plan.highlight
                        ? "bg-gradient-to-r from-violet-500 to-fuchsia-500"
                        : `bg-gradient-to-r ${plan.gradient}`
                    }`}>
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        Get Started
                        <ArrowRight className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform" />
                      </span>
                      <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </button>
                  </div>

                  {/* Decorative Elements */}
                  <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${plan.gradient} opacity-10 blur-3xl rounded-full`}></div>
                  <div className={`absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tl ${plan.gradient} opacity-10 blur-3xl rounded-full`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Benefits Bar */}
        <div className={`rounded-3xl p-8 shadow-lg ${
          isDark 
            ? "bg-gradient-to-r from-gray-900/80 via-gray-800/80 to-gray-900/80 border border-gray-700" 
            : "bg-white/90 backdrop-blur-md border-2 border-emerald-100"
        } backdrop-blur-xl`}>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
            {benefits.map((benefit, idx) => {
              const BenefitIcon = benefit.icon;
              return (
                <div key={idx} className="flex items-center gap-3 group/benefit">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-lg transform transition-transform duration-300 group-hover/benefit:scale-110 group-hover/benefit:rotate-12`}>
                    <BenefitIcon className="w-6 h-6 text-white" strokeWidth={2.5} />
                  </div>
                  <span className={`text-base font-semibold ${
                    isDark ? "text-gray-300" : "text-gray-800"
                  }`}>
                    {benefit.text}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* FAQ Teaser */}
        <div className="text-center mt-16">
          <p className={`text-lg mb-4 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
            Have questions? We've got answers.
          </p>
          <button className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-md ${
            isDark
              ? "bg-gray-800 hover:bg-gray-700 text-white border border-gray-700"
              : "bg-white hover:bg-emerald-50 text-emerald-700 border-2 border-emerald-200 hover:border-emerald-300"
          }`}>
            View FAQ
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease forwards;
        }
      `}</style>
    </div>
  );
}