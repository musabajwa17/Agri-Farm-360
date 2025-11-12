// "use client";
// import React from "react";
// import { Users, TrendingUp, Shield, Headphones } from "lucide-react";
// import { useTheme } from "../context/ThemeContext";

// export default function TrustBuilding() {
//   const { isDark } = useTheme();

//   const trustCards = [
//     {
//       icon: Users,
//       title: "Active Farmers",
//       stat: "50,000+",
//       description:
//         "Farmers actively using our platform to transform their agricultural practices",
//       color: "from-blue-500 to-blue-600",
//     },
//     {
//       icon: TrendingUp,
//       title: "Productivity Increase",
//       stat: "45%",
//       description:
//         "Average productivity boost reported by farmers using our solutions",
//       color: "from-green-500 to-green-600",
//     },
//     {
//       icon: Shield,
//       title: "Data Secure",
//       stat: "100%",
//       description:
//         "Bank-level encryption protecting your farm data and sensitive information",
//       color: "from-purple-500 to-purple-600",
//     },
//     {
//       icon: Headphones,
//       title: "Customer Support",
//       stat: "24/7",
//       description: "Round-the-clock assistance in your language whenever you need help",
//       color: "from-orange-500 to-orange-600",
//     },
//   ];

//   const trustIndicators = [
//     { stat: "150+", label: "Countries" },
//     { stat: "99.9%", label: "Uptime" },
//     { stat: "4.9/5", label: "User Rating" },
//     { stat: "5M+", label: "Hectares Managed" },
//   ];

//   return (
//     <div
//       className={`min-h-screen transition-colors duration-500 ${
//         isDark
//           ? "bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950"
//           : "bg-gradient-to-br from-gray-50 via-white to-gray-50"
//       } py-20 px-4`}
//     >
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <div className="inline-block mb-4">
//             <span
//               className={`px-6 py-2 rounded-full text-sm font-semibold ${
//                 isDark ? "bg-emerald-900/30 text-emerald-400" : "bg-green-100 text-green-800"
//               }`}
//             >
//               Trusted Worldwide
//             </span>
//           </div>
//           <h2
//             className={`text-5xl font-bold mb-6 ${isDark ? "text-white" : "text-slate-900"}`}
//           >
//             Empowering Agriculture
//             <span className={`${isDark ? "text-emerald-400" : "text-green-600"} block mt-2`}>
//               Across the Globe
//             </span>
//           </h2>
//           <p
//             className={`text-xl max-w-3xl mx-auto leading-relaxed ${
//               isDark ? "text-gray-300" : "text-slate-600"
//             }`}
//           >
//             Join thousands of farmers experiencing the next level of agricultural transformation.
//             Our platform combines cutting-edge technology with unwavering support to help you
//             grow smarter, safer, and more profitably.
//           </p>
//         </div>

//         {/* Stats Cards */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
//           {trustCards.map((card, idx) => {
//             const Icon = card.icon;
//             return (
//               <div
//                 key={idx}
//                 className={`group rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border ${
//                   isDark ? "bg-gray-900 border-gray-700" : "bg-white border-slate-100"
//                 }`}
//               >
//                 <div
//                   className={`w-16 h-16 bg-gradient-to-br ${card.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
//                 >
//                   <Icon className="w-8 h-8 text-white" />
//                 </div>
//                 <div className={`text-4xl font-bold mb-2 ${isDark ? "text-white" : "text-slate-900"}`}>
//                   {card.stat}
//                 </div>
//                 <h3 className={`text-lg font-semibold mb-3 ${isDark ? "text-gray-300" : "text-slate-800"}`}>
//                   {card.title}
//                 </h3>
//                 <p className={`${isDark ? "text-gray-400" : "text-slate-600"} leading-relaxed`}>
//                   {card.description}
//                 </p>
//               </div>
//             );
//           })}
//         </div>

//         {/* Transformation Banner */}
//         <div
//           className={`relative overflow-hidden rounded-3xl p-12 shadow-2xl ${
//             isDark
//               ? "bg-gradient-to-r from-gray-800 via-gray-900 to-gray-950"
//               : "bg-gradient-to-r from-green-600 via-emerald-600 to-green-700"
//           }`}
//         >
//           <div className="absolute inset-0 bg-black opacity-5"></div>
//           <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32"></div>
//           <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full -ml-24 -mb-24"></div>

//           <div className="relative z-10 text-center">
//             <h3 className="text-4xl font-bold mb-4 text-white">
//               Ready for Next Level Transformation?
//             </h3>
//             <p className={`text-xl mb-8 max-w-2xl mx-auto ${isDark ? "text-gray-300" : "text-green-50"}`}>
//               Experience the future of farming with technology that understands your needs
//               and grows with your ambitions
//             </p>
//             <button
//               className={`px-10 py-4 rounded-full font-bold text-lg shadow-lg transition-all duration-300 transform hover:scale-105 ${
//                 isDark ? "bg-gray-900 text-emerald-400 hover:bg-gray-800" : "bg-white text-green-600 hover:bg-green-50"
//               }`}
//             >
//               Get Started Today
//             </button>
//           </div>
//         </div>

//         {/* Trust Indicators */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
//           {trustIndicators.map((item, idx) => (
//             <div key={idx} className="text-center">
//               <div className={`text-3xl font-bold ${isDark ? "text-white" : "text-slate-900"}`}>
//                 {item.stat}
//               </div>
//               <div className={`text-sm mt-1 ${isDark ? "text-gray-400" : "text-slate-600"}`}>
//                 {item.label}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";
import React, { useState, useEffect } from "react";
import { Users, TrendingUp, Shield, Headphones, Sparkles, Award, Globe, CheckCircle } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export default function TrustBuilding() {
  const {isDark} = useTheme();
  const [hoveredCard, setHoveredCard] = useState(null);
  const [animatedStats, setAnimatedStats] = useState({});

  useEffect(() => {
    // Animate numbers on mount
    const stats = [50000, 45, 100, 24];
    stats.forEach((target, idx) => {
      let current = 0;
      const increment = target / 50;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setAnimatedStats(prev => ({ ...prev, [idx]: Math.floor(current) }));
      }, 30);
    });
  }, []);

  const trustCards = [
    {
      icon: Users,
      title: "Active Farmers",
      stat: "50,000+",
      animatedStat: animatedStats[0] || 0,
      suffix: "+",
      description: "Farmers actively using our platform to transform their agricultural practices",
      color: "from-blue-500 via-blue-600 to-indigo-600",
      glowColor: "group-hover:shadow-blue-500/50",
    },
    {
      icon: TrendingUp,
      title: "Productivity Increase",
      stat: "45%",
      animatedStat: animatedStats[1] || 0,
      suffix: "%",
      description: "Average productivity boost reported by farmers using our solutions",
      color: "from-green-500 via-emerald-600 to-teal-600",
      glowColor: "group-hover:shadow-emerald-500/50",
    },
    {
      icon: Shield,
      title: "Data Secure",
      stat: "100%",
      animatedStat: animatedStats[2] || 0,
      suffix: "%",
      description: "Bank-level encryption protecting your farm data and sensitive information",
      color: "from-purple-500 via-purple-600 to-pink-600",
      glowColor: "group-hover:shadow-purple-500/50",
    },
    {
      icon: Headphones,
      title: "Customer Support",
      stat: "24/7",
      animatedStat: "24/7",
      suffix: "",
      description: "Round-the-clock assistance in your language whenever you need help",
      color: "from-orange-500 via-orange-600 to-red-600",
      glowColor: "group-hover:shadow-orange-500/50",
    },
  ];

  const trustIndicators = [
    { stat: "150+", label: "Countries", icon: Globe },
    { stat: "99.9%", label: "Uptime", icon: CheckCircle },
    { stat: "4.9/5", label: "User Rating", icon: Award },
    { stat: "5M+", label: "Hectares Managed", icon: Sparkles },
  ];

  return (
    <div
      className={`min-h-screen relative overflow-hidden transition-all duration-700 ${
        isDark
          ? "bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950"
          : "bg-gradient-to-br from-blue-50 via-green-50 to-emerald-50"
      } py-24 px-4`}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-20 left-10 w-72 h-72 ${isDark ? 'bg-emerald-500/10' : 'bg-green-400/20'} rounded-full blur-3xl animate-pulse`}></div>
        <div className={`absolute bottom-20 right-10 w-96 h-96 ${isDark ? 'bg-blue-500/10' : 'bg-blue-400/20'} rounded-full blur-3xl animate-pulse delay-1000`}></div>
        <div className={`absolute top-1/2 left-1/2 w-64 h-64 ${isDark ? 'bg-purple-500/10' : 'bg-purple-400/20'} rounded-full blur-3xl animate-pulse delay-500`}></div>
      </div>

      {/* Theme Toggle */}
      {/* <button
        onClick={() => setIsDark(!isDark)}
        className={`fixed top-6 right-6 z-50 p-4 rounded-full backdrop-blur-xl border transition-all duration-300 hover:scale-110 ${
          isDark 
            ? 'bg-slate-900/80 border-slate-700 text-yellow-400' 
            : 'bg-white/80 border-slate-200 text-slate-800'
        }`}
      >
        {isDark ? '☀️' : '🌙'}
      </button> */}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 rounded-full backdrop-blur-xl border transition-all duration-300 hover:scale-105 shadow-lg">
            <Sparkles className={`w-5 h-5 ${isDark ? 'text-emerald-400' : 'text-green-600'} animate-pulse`} />
            <span
              className={`text-sm font-bold tracking-wide ${
                isDark ? "text-emerald-400" : "text-green-700"
              }`}
            >
              TRUSTED WORLDWIDE
            </span>
            <Sparkles className={`w-5 h-5 ${isDark ? 'text-emerald-400' : 'text-green-600'} animate-pulse`} />
          </div>
          
          <h2
            className={`text-6xl md:text-7xl font-black mb-8 leading-tight ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            Empowering Agriculture
            <span className="block mt-3 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 bg-clip-text text-transparent animate-gradient">
              Across the Globe
            </span>
          </h2>
          
          <p
            className={`text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed ${
              isDark ? "text-slate-300" : "text-slate-600"
            }`}
          >
            Join thousands of farmers experiencing the{" "}
            <span className={`font-bold ${isDark ? 'text-emerald-400' : 'text-green-600'}`}>
              next level
            </span>{" "}
            of agricultural transformation. Our platform combines cutting-edge technology with 
            unwavering support.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {trustCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`group relative rounded-3xl p-8 backdrop-blur-xl border transition-all duration-500 transform hover:-translate-y-3 cursor-pointer ${
                  isDark 
                    ? "bg-slate-900/50 border-slate-700/50" 
                    : "bg-white/80 border-slate-200/50"
                } shadow-xl ${card.glowColor} hover:shadow-2xl`}
                style={{
                  animationDelay: `${idx * 100}ms`,
                  animation: 'slideUp 0.6s ease-out forwards'
                }}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Icon */}
                <div className="relative mb-6">
                  <div
                    className={`w-20 h-20 bg-gradient-to-br ${card.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                  >
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  {hoveredCard === idx && (
                    <div className={`absolute -inset-2 bg-gradient-to-br ${card.color} rounded-2xl blur-xl opacity-50 -z-10`}></div>
                  )}
                </div>
                
                {/* Stat */}
                <div className={`text-5xl font-black mb-3 bg-gradient-to-br ${card.color} bg-clip-text text-transparent`}>
                  {typeof card.animatedStat === 'number' 
                    ? card.animatedStat.toLocaleString() + card.suffix 
                    : card.animatedStat}
                </div>
                
                {/* Title */}
                <h3 className={`text-xl font-bold mb-4 ${isDark ? "text-slate-200" : "text-slate-800"}`}>
                  {card.title}
                </h3>
                
                {/* Description */}
                <p className={`leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Transformation Banner */}
        <div
          className={`relative overflow-hidden rounded-[2.5rem] p-12 md:p-16 shadow-2xl backdrop-blur-xl border mb-16 ${
            isDark
              ? "bg-gradient-to-r from-slate-900/90 via-emerald-900/50 to-slate-900/90 border-slate-700/50"
              : "bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 border-green-400/30"
          }`}
        >
          {/* Animated orbs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          {/* Floating particles */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-white/30 rounded-full animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${3 + Math.random() * 4}s`
                }}
              ></div>
            ))}
          </div>

          <div className="relative z-10 text-center">
            <div className="inline-flex items-center gap-3 mb-6">
              <Sparkles className="w-8 h-8 text-white animate-spin-slow" />
              <h3 className="text-5xl md:text-6xl font-black text-white">
                Ready for Transformation?
              </h3>
              <Sparkles className="w-8 h-8 text-white animate-spin-slow" />
            </div>
            
            <p className={`text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed ${
              isDark ? "text-slate-200" : "text-green-50"
            }`}>
              Experience the future of farming with technology that understands your needs
              and grows with your ambitions ✨
            </p>
            
            <button
              className={`group relative px-12 py-5 rounded-full font-bold text-lg shadow-2xl transition-all duration-500 transform hover:scale-110 overflow-hidden ${
                isDark 
                  ? "bg-white text-emerald-600" 
                  : "bg-white text-green-600"
              }`}
            >
              <span className="relative z-10 flex items-center gap-3">
                Get Started Today
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
            </button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {trustIndicators.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className={`text-center p-6 rounded-2xl backdrop-blur-xl border transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                  isDark 
                    ? "bg-slate-900/30 border-slate-700/50" 
                    : "bg-white/60 border-slate-200/50"
                }`}
              >
                <Icon className={`w-8 h-8 mx-auto mb-3 ${isDark ? 'text-emerald-400' : 'text-green-600'}`} />
                <div className={`text-4xl font-black mb-2 ${
                  isDark ? "text-white" : "text-slate-900"
                }`}>
                  {item.stat}
                </div>
                <div className={`text-sm font-semibold tracking-wide ${
                  isDark ? "text-slate-400" : "text-slate-600"
                }`}>
                  {item.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          50% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(-100px) translateX(20px);
            opacity: 0;
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .delay-500 {
          animation-delay: 500ms;
        }

        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </div>
  );
}