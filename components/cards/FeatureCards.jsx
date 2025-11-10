// import { Package, TrendingUp, Heart, BarChart3, Bell, Users, Check } from 'lucide-react';

// export default function FeatureCards({isDark}) {
//   const features = [
//     {
//       icon: Package,
//       title: "Inventory Control",
//       description: "Complete inventory management solution for your farm operations",
//       gradient: "from-blue-500 to-cyan-500",
//       benefits: [
//         "Real-time stock tracking",
//         "Automated reorder alerts",
//         "Barcode scanning support",
//         "Multi-location inventory"
//       ]
//     },
//     {
//       icon: TrendingUp,
//       title: "Financial Analysis",
//       description: "Powerful insights to maximize your farm's profitability",
//       gradient: "from-emerald-500 to-teal-500",
//       benefits: [
//         "Profit & loss tracking",
//         "Expense categorization",
//         "Revenue forecasting",
//         "Financial reports"
//       ]
//     },
//     {
//       icon: Heart,
//       title: "Animal Health Management",
//       description: "Keep your livestock healthy with comprehensive health tracking",
//       gradient: "from-pink-500 to-rose-500",
//       benefits: [
//         "Health record management",
//         "Vaccination schedules",
//         "Veterinary appointments",
//         "Disease tracking"
//       ]
//     },
//     {
//       icon: BarChart3,
//       title: "Production Analysis",
//       description: "Data-driven insights to optimize farm productivity",
//       gradient: "from-purple-500 to-indigo-500",
//       benefits: [
//         "Yield tracking",
//         "Performance metrics",
//         "Production forecasting",
//         "Efficiency analysis"
//       ]
//     },
//     {
//       icon: Bell,
//       title: "Smart Alerts & Reminders",
//       description: "Never miss important tasks with intelligent notifications",
//       gradient: "from-amber-500 to-orange-500",
//       benefits: [
//         "Custom alert rules",
//         "Task reminders",
//         "Critical notifications",
//         "Calendar integration"
//       ]
//     },
//     {
//       icon: Users,
//       title: "Worker Management",
//       description: "Streamline workforce operations and boost productivity",
//       gradient: "from-violet-500 to-purple-500",
//       benefits: [
//         "Attendance tracking",
//         "Task assignment",
//         "Performance monitoring",
//         "Payroll integration"
//       ]
//     }
//   ];

//   return (
//     <div className={`min-h-screen transition-colors duration-500 ${
//       isDark 
//         ? "bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950"
//         : "bg-gradient-to-br from-gray-50 via-white to-gray-50"
//     }`}>
//       <div className="container mx-auto px-4 py-16">
//         {/* Theme Toggle Button */}
//         <div className="flex justify-end mb-8">
//           {/* <button
//             onClick={() => setIsDark(!isDark)}
//             className={`p-3 rounded-full transition-all duration-300 ${
//               isDark 
//                 ? "bg-gray-800 hover:bg-gray-700 text-yellow-400" 
//                 : "bg-white hover:bg-gray-100 text-gray-900 shadow-lg"
//             }`}
//           >
//             {isDark ? (
//               <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
//                 <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
//               </svg>
//             ) : (
//               <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
//                 <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
//               </svg>
//             )}
//           </button> */}
//         </div>

//         {/* Header Section */}
//         <div className="text-center mb-16 space-y-6">
//           {/* Badge */}
//           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 backdrop-blur-sm">
//             <span className={`text-sm font-medium ${
//               isDark ? "text-emerald-400" : "text-emerald-600"
//             }`}>
//               🌾 Comprehensive Farm Management
//             </span>
//           </div>

//           {/* Main Heading */}
//           <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-emerald-400 via-green-500 to-teal-500 bg-clip-text text-transparent leading-tight">
//             Powerful Features for
//             <br />
//             Modern Farm Operations
//           </h1>

//           {/* Description */}
//           <p className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed ${
//             isDark ? "text-gray-400" : "text-gray-600"
//           }`}>
//             Transform your farm management with our comprehensive suite of tools designed to streamline operations, boost productivity, and maximize profitability
//           </p>
//         </div>

//         {/* Cards Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
//           {features.map((feature, index) => {
//             const Icon = feature.icon;
//             return (
//               <div
//                 key={index}
//                 className={`group relative overflow-hidden rounded-3xl transition-all duration-700 hover:scale-[1.02] hover:-translate-y-2 ${
//                   isDark
//                     ? "bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl border border-gray-700/50 shadow-2xl"
//                     : "bg-white shadow-xl hover:shadow-2xl border border-gray-200"
//                 }`}
//               >
//                 {/* Animated gradient background */}
//                 <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-700`} />
                
//                 {/* Glow effect */}
//                 <div className={`absolute -inset-[1px] bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-700`} />
                
//                 {/* Content */}
//                 <div className="relative p-8">
//                   {/* Icon with enhanced gradient */}
//                   <div className={`mb-6 inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} shadow-2xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-700`}>
//                     <Icon className="w-10 h-10 text-white" strokeWidth={2} />
//                   </div>

//                   {/* Title */}
//                   <h3 className={`text-2xl font-bold mb-3 ${
//                     isDark ? "text-white" : "text-gray-900"
//                   }`}>
//                     {feature.title}
//                   </h3>

//                   {/* Description */}
//                   <p className={`text-sm mb-6 leading-relaxed ${
//                     isDark ? "text-gray-400" : "text-gray-600"
//                   }`}>
//                     {feature.description}
//                   </p>

//                   {/* Benefits List */}
//                   <ul className="space-y-3">
//                     {feature.benefits.map((benefit, idx) => (
//                       <li 
//                         key={idx}
//                         className="flex items-start gap-3 group/item"
//                         style={{
//                           animation: `fadeInUp 0.5s ease-out ${idx * 0.1}s both`
//                         }}
//                       >
//                         <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br ${feature.gradient} flex items-center justify-center transform group-hover/item:scale-110 transition-transform duration-300`}>
//                           <Check className="w-3 h-3 text-white" strokeWidth={3} />
//                         </div>
//                         <span className={`text-sm ${
//                           isDark ? "text-gray-300" : "text-gray-700"
//                         }`}>
//                           {benefit}
//                         </span>
//                       </li>
//                     ))}
//                   </ul>

//                   {/* Decorative gradient line */}
//                   <div className={`mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r ${feature.gradient} rounded-full transition-all duration-700`} />
//                 </div>

//                 {/* Corner decoration */}
//                 <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.gradient} opacity-5 rounded-bl-full transform group-hover:scale-150 transition-transform duration-700`} />
                
//                 {/* Bottom decoration */}
//                 <div className={`absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr ${feature.gradient} opacity-5 rounded-tr-full transform group-hover:scale-150 transition-transform duration-700`} />
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(10px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//       `}</style>
//     </div>
//   );
// }


// "use client";
// import { Package, TrendingUp, Heart, BarChart3, Bell, Users, Check } from "lucide-react";
// import { useTheme } from "../../context/ThemeContext";

// export default function FeatureCards() {
//   const { isDark } = useTheme();

//   const features = [
//     {
//       icon: Package,
//       title: "Inventory Control",
//       description: "Complete inventory management solution for your farm operations",
//       gradient: "from-blue-500 to-cyan-500",
//       benefits: [
//         "Real-time stock tracking",
//         "Automated reorder alerts",
//         "Barcode scanning support",
//         "Multi-location inventory",
//       ],
//     },
//     {
//       icon: TrendingUp,
//       title: "Financial Analysis",
//       description: "Powerful insights to maximize your farm's profitability",
//       gradient: "from-emerald-500 to-teal-500",
//       benefits: ["Profit & loss tracking", "Expense categorization", "Revenue forecasting", "Financial reports"],
//     },
//     {
//       icon: Heart,
//       title: "Animal Health Management",
//       description: "Keep your livestock healthy with comprehensive health tracking",
//       gradient: "from-pink-500 to-rose-500",
//       benefits: ["Health record management", "Vaccination schedules", "Veterinary appointments", "Disease tracking"],
//     },
//     {
//       icon: BarChart3,
//       title: "Production Analysis",
//       description: "Data-driven insights to optimize farm productivity",
//       gradient: "from-purple-500 to-indigo-500",
//       benefits: ["Yield tracking", "Performance metrics", "Production forecasting", "Efficiency analysis"],
//     },
//     {
//       icon: Bell,
//       title: "Smart Alerts & Reminders",
//       description: "Never miss important tasks with intelligent notifications",
//       gradient: "from-amber-500 to-orange-500",
//       benefits: ["Custom alert rules", "Task reminders", "Critical notifications", "Calendar integration"],
//     },
//     {
//       icon: Users,
//       title: "Worker Management",
//       description: "Streamline workforce operations and boost productivity",
//       gradient: "from-violet-500 to-purple-500",
//       benefits: ["Attendance tracking", "Task assignment", "Performance monitoring", "Payroll integration"],
//     },
//   ];

//   return (
//     <div
//       className={`min-h-screen transition-colors duration-500 ${
//         isDark
//           ? "bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950"
//           : "bg-gradient-to-br from-gray-50 via-white to-gray-50"
//       }`}
//     >
//       <div className="container mx-auto px-4 py-16">
//         {/* Header Section */}
//         <div className="text-center mb-16 space-y-6">
//           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 backdrop-blur-sm">
//             <span className={`text-sm font-medium ${isDark ? "text-emerald-400" : "text-emerald-600"}`}>
//               🌾 Comprehensive Farm Management
//             </span>
//           </div>

//           <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-emerald-400 via-green-500 to-teal-500 bg-clip-text text-transparent leading-tight">
//             Powerful Features for
//             <br />
//             Modern Farm Operations
//           </h1>

//           <p className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}>
//             Transform your farm management with our comprehensive suite of tools designed to streamline operations, boost productivity, and maximize profitability
//           </p>
//         </div>

//         {/* Feature Cards Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
//           {features.map((feature, index) => {
//             const Icon = feature.icon;
//             return (
//               <div
//                 key={index}
//                 className={`group relative overflow-hidden rounded-3xl transition-all duration-700 hover:scale-[1.02] hover:-translate-y-2 ${
//                   isDark
//                     ? "bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl border border-gray-700/50 shadow-2xl"
//                     : "bg-white shadow-xl hover:shadow-2xl border border-gray-200"
//                 }`}
//               >
//                 {/* Background Effects */}
//                 <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-700`} />
//                 <div className={`absolute -inset-[1px] bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-700`} />

//                 <div className="relative p-8">
//                   {/* Icon */}
//                   <div className={`mb-6 inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} shadow-2xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-700`}>
//                     <Icon className="w-10 h-10 text-white" strokeWidth={2} />
//                   </div>

//                   {/* Title */}
//                   <h3 className={`text-2xl font-bold mb-3 ${isDark ? "text-white" : "text-gray-900"}`}>{feature.title}</h3>

//                   {/* Description */}
//                   <p className={`text-sm mb-6 leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}>{feature.description}</p>

//                   {/* Benefits */}
//                   <ul className="space-y-3">
//                     {feature.benefits.map((benefit, idx) => (
//                       <li
//                         key={idx}
//                         className="flex items-start gap-3 group/item"
//                         style={{
//                           animation: `fadeInUp 0.5s ease-out ${idx * 0.1}s both`,
//                         }}
//                       >
//                         <div
//                           className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br ${feature.gradient} flex items-center justify-center transform group-hover/item:scale-110 transition-transform duration-300`}
//                         >
//                           <Check className="w-3 h-3 text-white" strokeWidth={3} />
//                         </div>
//                         <span className={`text-sm ${isDark ? "text-gray-300" : "text-gray-700"}`}>{benefit}</span>
//                       </li>
//                     ))}
//                   </ul>

//                   {/* Decorative Line */}
//                   <div className={`mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r ${feature.gradient} rounded-full transition-all duration-700`} />
//                 </div>

//                 {/* Corner Decorations */}
//                 <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.gradient} opacity-5 rounded-bl-full transform group-hover:scale-150 transition-transform duration-700`} />
//                 <div className={`absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr ${feature.gradient} opacity-5 rounded-tr-full transform group-hover:scale-150 transition-transform duration-700`} />
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(10px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//       `}</style>
//     </div>
//   );
// }



"use client";
import { Package, TrendingUp, Heart, BarChart3, Bell, Users, Check, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { useState, useEffect } from "react";

export default function FeatureCards() {
  const { isDark } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const features = [
    {
      icon: Package,
      title: "Inventory Control",
      description: "Complete inventory management solution for your farm operations",
      gradient: "from-blue-500 to-cyan-500",
      benefits: [
        "Real-time stock tracking",
        "Automated reorder alerts",
        "Barcode scanning support",
        "Multi-location inventory",
      ],
    },
    {
      icon: TrendingUp,
      title: "Financial Analysis",
      description: "Powerful insights to maximize your farm's profitability",
      gradient: "from-emerald-500 to-teal-500",
      benefits: ["Profit & loss tracking", "Expense categorization", "Revenue forecasting", "Financial reports"],
    },
    {
      icon: Heart,
      title: "Animal Health Management",
      description: "Keep your livestock healthy with comprehensive health tracking",
      gradient: "from-pink-500 to-rose-500",
      benefits: ["Health record management", "Vaccination schedules", "Veterinary appointments", "Disease tracking"],
    },
    {
      icon: BarChart3,
      title: "Production Analysis",
      description: "Data-driven insights to optimize farm productivity",
      gradient: "from-purple-500 to-indigo-500",
      benefits: ["Yield tracking", "Performance metrics", "Production forecasting", "Efficiency analysis"],
    },
    {
      icon: Bell,
      title: "Smart Alerts & Reminders",
      description: "Never miss important tasks with intelligent notifications",
      gradient: "from-amber-500 to-orange-500",
      benefits: ["Custom alert rules", "Task reminders", "Critical notifications", "Calendar integration"],
    },
    {
      icon: Users,
      title: "Worker Management",
      description: "Streamline workforce operations and boost productivity",
      gradient: "from-violet-500 to-purple-500",
      benefits: ["Attendance tracking", "Task assignment", "Performance monitoring", "Payroll integration"],
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, features.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + features.length) % features.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % features.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const getCardPosition = (index) => {
    const diff = (index - currentIndex + features.length) % features.length;
    if (diff === 0) return "center";
    if (diff === 1 || diff === -(features.length - 1)) return "right";
    if (diff === features.length - 1 || diff === -1) return "left";
    return "hidden";
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-500 overflow-hidden relative ${
        isDark
          ? "bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950"
          : "bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50"
      }`}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-20 left-20 w-96 h-96 rounded-full blur-3xl opacity-20 ${isDark ? "bg-emerald-500" : "bg-emerald-400"}`} style={{ animation: "float 20s ease-in-out infinite" }} />
        <div className={`absolute bottom-20 right-20 w-96 h-96 rounded-full blur-3xl opacity-20 ${isDark ? "bg-blue-500" : "bg-blue-400"}`} style={{ animation: "float 25s ease-in-out infinite reverse" }} />
        <div className={`absolute top-1/2 left-1/2 w-96 h-96 rounded-full blur-3xl opacity-10 ${isDark ? "bg-purple-500" : "bg-purple-400"}`} style={{ animation: "float 30s ease-in-out infinite" }} />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20 space-y-8">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-cyan-500/20 border border-emerald-400/40 backdrop-blur-xl shadow-2xl">
            <Sparkles className={`w-5 h-5 ${isDark ? "text-emerald-400" : "text-emerald-600"}`} />
            <span className={`text-sm font-bold tracking-wide ${isDark ? "text-emerald-400" : "text-emerald-600"}`}>
              COMPREHENSIVE FARM MANAGEMENT
            </span>
            <Sparkles className={`w-5 h-5 ${isDark ? "text-emerald-400" : "text-emerald-600"}`} />
          </div>

          <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 bg-clip-text text-transparent leading-tight tracking-tight">
            Powerful Features
          </h1>
          
          <p className={`text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-medium ${isDark ? "text-gray-300" : "text-gray-700"}`}>
            Transform your farm with cutting-edge technology
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="relative h-[550px] flex items-center justify-center">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const position = getCardPosition(index);
              
              return (
                <div
                  key={index}
                  className={`absolute transition-all duration-700 ease-out ${
                    position === "center"
                      ? "z-30 scale-100 opacity-100 translate-x-0"
                      : position === "right"
                      ? "z-20 scale-90 opacity-60 translate-x-[400px] blur-sm"
                      : position === "left"
                      ? "z-20 scale-90 opacity-60 -translate-x-[400px] blur-sm"
                      : "z-0 scale-75 opacity-0"
                  }`}
                  style={{ width: "500px" }}
                >
                  <div
                    className={`group relative overflow-hidden rounded-3xl transition-all duration-700 ${
                      isDark
                        ? "bg-gradient-to-br from-gray-800/95 via-gray-900/95 to-black/95 backdrop-blur-2xl border border-gray-700/50"
                        : "bg-white/95 backdrop-blur-2xl border border-gray-200"
                    } shadow-2xl ${position === "center" ? "shadow-emerald-500/20" : ""}`}
                  >
                    {/* Animated Gradient Border */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 ${position === "center" ? "group-hover:opacity-10" : ""} transition-opacity duration-700 rounded-3xl`} />
                    
                    {/* Glowing Edge Effect */}
                    {position === "center" && (
                      <div className={`absolute -inset-[2px] bg-gradient-to-br ${feature.gradient} opacity-30 blur-xl rounded-3xl`} />
                    )}

                    <div className="relative p-10 space-y-8">
                      {/* Icon with Floating Animation */}
                      <div className="flex justify-center">
                        <div 
                          className={`relative inline-flex p-6 rounded-2xl bg-gradient-to-br ${feature.gradient} shadow-2xl`}
                          style={{ animation: position === "center" ? "float 3s ease-in-out infinite" : "none" }}
                        >
                          <Icon className="w-16 h-16 text-white" strokeWidth={2} />
                          {position === "center" && (
                            <>
                              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl blur-xl opacity-60 animate-pulse`} />
                              <div className={`absolute -inset-2 bg-gradient-to-br ${feature.gradient} rounded-2xl blur-2xl opacity-30`} />
                            </>
                          )}
                        </div>
                      </div>

                      {/* Title */}
                      <div className="text-center space-y-3">
                        <h3 className={`text-3xl font-black ${isDark ? "text-white" : "text-gray-900"}`}>
                          {feature.title}
                        </h3>
                        <p className={`text-base leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                          {feature.description}
                        </p>
                      </div>

                      {/* Benefits Grid */}
                      <div className="grid grid-cols-2 gap-3">
                        {feature.benefits.map((benefit, idx) => (
                          <div
                            key={idx}
                            className={`flex items-center gap-2 p-3 rounded-xl transition-all duration-300 ${
                              isDark 
                                ? "bg-gray-800/60 hover:bg-gray-700/60" 
                                : "bg-gray-50 hover:bg-gray-100"
                            } border ${isDark ? "border-gray-700/50" : "border-gray-200"}`}
                          >
                            <div className={`flex-shrink-0 w-6 h-6 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg`}>
                              <Check className="w-3 h-3 text-white" strokeWidth={3} />
                            </div>
                            <span className={`text-xs font-semibold ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Bottom Accent Line */}
                      <div className={`h-1 w-full bg-gradient-to-r ${feature.gradient} rounded-full opacity-70`} />
                    </div>

                    {/* Corner Decorations */}
                    <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${feature.gradient} opacity-10 rounded-full blur-3xl`} />
                    <div className={`absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-tr ${feature.gradient} opacity-10 rounded-full blur-3xl`} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-40 p-5 rounded-full transition-all duration-300 ${
              isDark
                ? "bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-gray-700"
                : "bg-gradient-to-br from-white to-gray-50 hover:from-gray-50 hover:to-gray-100 border border-gray-300"
            } shadow-2xl hover:scale-110 hover:shadow-emerald-500/20`}
          >
            <ChevronLeft className={`w-7 h-7 ${isDark ? "text-white" : "text-gray-900"}`} strokeWidth={3} />
          </button>

          <button
            onClick={goToNext}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-40 p-5 rounded-full transition-all duration-300 ${
              isDark
                ? "bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-gray-700"
                : "bg-gradient-to-br from-white to-gray-50 hover:from-gray-50 hover:to-gray-100 border border-gray-300"
            } shadow-2xl hover:scale-110 hover:shadow-emerald-500/20`}
          >
            <ChevronRight className={`w-7 h-7 ${isDark ? "text-white" : "text-gray-900"}`} strokeWidth={3} />
          </button>

          {/* Elegant Dot Indicators */}
          <div className="flex justify-center gap-3 mt-16">
            {features.map((feature, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                  setTimeout(() => setIsAutoPlaying(true), 8000);
                }}
                className={`group relative transition-all duration-500 ${
                  currentIndex === index ? "w-16" : "w-3"
                } h-3 rounded-full`}
              >
                <div className={`absolute inset-0 rounded-full transition-all duration-500 ${
                  currentIndex === index
                    ? `bg-gradient-to-r ${feature.gradient} shadow-lg`
                    : isDark 
                      ? "bg-gray-700 group-hover:bg-gray-600" 
                      : "bg-gray-300 group-hover:bg-gray-400"
                }`} />
                {currentIndex === index && (
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${feature.gradient} blur-md opacity-60`} />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
      `}</style>
    </div>
  );
}