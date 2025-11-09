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


"use client";
import React from "react";
import { Package, TrendingUp, Heart, BarChart3, Bell, Users, Check } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

export default function FeatureCards() {
  const { isDark } = useTheme();

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

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        isDark
          ? "bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950"
          : "bg-gradient-to-br from-gray-50 via-white to-gray-50"
      }`}
    >
      <div className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 backdrop-blur-sm">
            <span className={`text-sm font-medium ${isDark ? "text-emerald-400" : "text-emerald-600"}`}>
              🌾 Comprehensive Farm Management
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-emerald-400 via-green-500 to-teal-500 bg-clip-text text-transparent leading-tight">
            Powerful Features for
            <br />
            Modern Farm Operations
          </h1>

          <p className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}>
            Transform your farm management with our comprehensive suite of tools designed to streamline operations, boost productivity, and maximize profitability
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-3xl transition-all duration-700 hover:scale-[1.02] hover:-translate-y-2 ${
                  isDark
                    ? "bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl border border-gray-700/50 shadow-2xl"
                    : "bg-white shadow-xl hover:shadow-2xl border border-gray-200"
                }`}
              >
                {/* Background Effects */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-700`} />
                <div className={`absolute -inset-[1px] bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-700`} />

                <div className="relative p-8">
                  {/* Icon */}
                  <div className={`mb-6 inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} shadow-2xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-700`}>
                    <Icon className="w-10 h-10 text-white" strokeWidth={2} />
                  </div>

                  {/* Title */}
                  <h3 className={`text-2xl font-bold mb-3 ${isDark ? "text-white" : "text-gray-900"}`}>{feature.title}</h3>

                  {/* Description */}
                  <p className={`text-sm mb-6 leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}>{feature.description}</p>

                  {/* Benefits */}
                  <ul className="space-y-3">
                    {feature.benefits.map((benefit, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 group/item"
                        style={{
                          animation: `fadeInUp 0.5s ease-out ${idx * 0.1}s both`,
                        }}
                      >
                        <div
                          className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br ${feature.gradient} flex items-center justify-center transform group-hover/item:scale-110 transition-transform duration-300`}
                        >
                          <Check className="w-3 h-3 text-white" strokeWidth={3} />
                        </div>
                        <span className={`text-sm ${isDark ? "text-gray-300" : "text-gray-700"}`}>{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Decorative Line */}
                  <div className={`mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r ${feature.gradient} rounded-full transition-all duration-700`} />
                </div>

                {/* Corner Decorations */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.gradient} opacity-5 rounded-bl-full transform group-hover:scale-150 transition-transform duration-700`} />
                <div className={`absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr ${feature.gradient} opacity-5 rounded-tr-full transform group-hover:scale-150 transition-transform duration-700`} />
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}