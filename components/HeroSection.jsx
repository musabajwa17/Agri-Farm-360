// "use client";
// import { useTheme } from "@/context/ThemeContext"; // import your ThemeContext

// export default function HeroSection() {
//   const { isDark } = useTheme(); // get theme globally

//   return (
//     <div
//       className={`min-h-screen transition-colors duration-500 ${
//         isDark
//           ? "bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950"
//           : "bg-gradient-to-br from-gray-50 via-white to-gray-50"
//       }`}
//     >
//       {/* Hero Section */}
//       <div className="container mx-auto px-6 py-8 flex flex-col items-center text-center">

//         {/* Main Heading */}
//         <h1
//           className={`text-2xl md:text-6xl font-extrabold mb-8 max-w-5xl leading-tight transition-colors duration-500 ${
//             isDark ? "text-white" : "text-gray-900"
//           }`}
//         >
//           Transform Your Farm with{" "}
//           <span className="bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-600 bg-clip-text text-transparent">
//             Smart Management
//           </span>
//         </h1>

//         {/* Subheading */}
//         <p
//           className={`text-xl mb-6 max-w-2xl leading-relaxed transition-colors duration-500 ${
//             isDark ? "text-gray-300" : "text-gray-600"
//           }`}
//         >
//           Monitor livestock health, track inventory, manage finances, and
//           boost productivity with our all-in-one farm management solution.
//         </p>

//         {/* CTA Buttons */}
//         <div className="flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-8 mb-12">
//           <button className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-10 py-3 rounded-full text-lg font-bold hover:shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-110 flex items-center space-x-3">
//             <span>Start Free 30-Day Trial</span>
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M13 7l5 5m0 0l-5 5m5-5H6"
//               />
//             </svg>
//           </button>

//           <button
//             className={`px-10 py-3 rounded-full text-lg font-bold transition-all duration-300 hover:scale-105 flex items-center space-x-3 ${
//               isDark
//                 ? "border-2 border-emerald-500/50 text-white hover:bg-emerald-500/20 hover:border-emerald-400"
//                 : "border-2 border-emerald-400 text-emerald-700 hover:bg-emerald-50"
//             }`}
//           >
//             <svg
//               className="w-6 h-6"
//               fill="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path d="M8 5v14l11-7z" />
//             </svg>
//             <span>Watch Demo</span>
//           </button>
//         </div>

//         {/* Trust Indicators */}
//         <p
//           className={`text-sm mb-10 flex items-center space-x-3 transition-colors duration-500 ${
//             isDark ? "text-gray-400" : "text-gray-600"
//           }`}
//         >
//           <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
//           <span>No credit card required</span>
//           <span className="text-emerald-500">•</span>
//           <span>Cancel anytime</span>
//           <span className="text-emerald-500">•</span>
//           <span>24/7 support</span>
//         </p>

//         {/* Stats */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-20 max-w-6xl w-full">
//           {[
//             { value: "2,500+", label: "Active Farmers", iconPath: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
//             { value: "15M+", label: "Animals Tracked", iconPath: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" },
//             { value: "99.9%", label: "Uptime", iconPath: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
//             { value: "4.9/5", label: "User Rating", iconPath: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" },
//           ].map((stat) => (
//             <div
//               key={stat.label}
//               className={`flex flex-col items-center p-8 rounded-3xl transition-all duration-500 hover:scale-110 ${
//                 isDark
//                   ? "bg-emerald-500/5 border border-emerald-500/20 hover:bg-emerald-500/10 hover:border-emerald-500/40 shadow-lg shadow-emerald-500/5"
//                   : "bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 hover:border-emerald-300 shadow-lg shadow-emerald-200/50"
//               }`}
//             >
//               <div className="flex items-center space-x-3 mb-3">
//                 <svg
//                   className="w-8 h-8 text-emerald-500"
//                   fill={stat.label === "Active Farmers" || stat.label === "Animals Tracked" ? "none" : "currentColor"}
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.iconPath} />
//                 </svg>
//                 <p className={`text-5xl font-black transition-colors duration-500 ${
//                   isDark ? "text-white" : "text-gray-900"
//                 }`}>
//                   {stat.value}
//                 </p>
//               </div>
//               <p className={`text-sm font-bold transition-colors duration-500 ${
//                 isDark ? "text-emerald-400" : "text-emerald-700"
//               }`}>
//                 {stat.label}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }



"use client";
import { useTheme } from "@/context/ThemeContext";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const {isDark} = useTheme();
  // const [isDark, setIsDark] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className={`min-h-screen relative overflow-hidden transition-colors duration-700 ${
        isDark ? "bg-gray-950" : "bg-white"
      }`}
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className={`absolute inset-0 ${
            isDark
              ? "bg-[linear-gradient(rgba(16,185,129,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.1)_1px,transparent_1px)]"
              : "bg-[linear-gradient(rgba(16,185,129,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.05)_1px,transparent_1px)]"
          } bg-[size:50px_50px]`}
        ></div>
      </div>

      {/* Spotlight Effect Following Mouse */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full pointer-events-none transition-opacity duration-300"
        style={{
          background: isDark
            ? "radial-gradient(circle, rgba(16,185,129,0.15) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(16,185,129,0.1) 0%, transparent 70%)",
          left: mousePosition.x - 300,
          top: mousePosition.y - 300,
        }}
      ></div>

      {/* Animated Shine Beams */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute top-0 -left-1/4 w-1/2 h-full ${
            isDark ? "bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent" : "bg-gradient-to-r from-transparent via-emerald-400/10 to-transparent"
          } blur-3xl animate-[shine_8s_ease-in-out_infinite]`}
          style={{
            transform: "rotate(-15deg)",
          }}
        ></div>
        <div
          className={`absolute top-0 -right-1/4 w-1/2 h-full ${
            isDark ? "bg-gradient-to-l from-transparent via-emerald-500/10 to-transparent" : "bg-gradient-to-l from-transparent via-emerald-400/10 to-transparent"
          } blur-3xl animate-[shine_10s_ease-in-out_infinite_2s]`}
          style={{
            transform: "rotate(15deg)",
          }}
        ></div>
      </div>

      {/* Floating Orbs with Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute top-20 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-30 animate-[float_20s_ease-in-out_infinite] ${
            isDark ? "bg-emerald-500" : "bg-emerald-300"
          }`}
        ></div>
        <div
          className={`absolute bottom-20 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-30 animate-[float_25s_ease-in-out_infinite_5s] ${
            isDark ? "bg-teal-600" : "bg-teal-400"
          }`}
        ></div>
        <div
          className={`absolute top-1/2 left-1/2 w-64 h-64 rounded-full blur-3xl opacity-20 animate-[float_15s_ease-in-out_infinite_3s] ${
            isDark ? "bg-green-500" : "bg-green-300"
          }`}
        ></div>
      </div>

      {/* Particle Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 rounded-full ${
              isDark ? "bg-emerald-400" : "bg-emerald-500"
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `twinkle ${3 + Math.random() * 4}s ease-in-out infinite ${Math.random() * 5}s`,
              opacity: 0,
            }}
          ></div>
        ))}
      </div>

      {/* Theme Toggle with Glow */}
      {/* <div className="absolute top-6 right-6 z-50">
        <button
          onClick={() => setIsDark(!isDark)}
          className={`relative p-4 rounded-2xl transition-all duration-300 group ${
            isDark
              ? "bg-gray-900 hover:bg-gray-800 shadow-lg shadow-emerald-500/20"
              : "bg-white hover:bg-gray-50 shadow-lg shadow-emerald-500/10"
          }`}
        >
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-600 opacity-0 group-hover:opacity-20 transition-opacity blur"></div>
          {isDark ? (
            <svg className="w-6 h-6 text-yellow-400 relative z-10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-gray-700 relative z-10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
            </svg>
          )}
        </button>
      </div> */}

      {/* Hero Content */}
      <div className="container mx-auto px-6 py-5 relative z-10">
        
        {/* Badge with Shimmer */}
        <div className="flex justify-center mb-8 animate-[slideDown_0.8s_ease-out]">
          <div className={`relative inline-flex items-center space-x-2 px-6 py-3 rounded-full border backdrop-blur-xl overflow-hidden ${
            isDark
              ? "bg-emerald-950/30 border-emerald-500/30 text-emerald-400 shadow-lg shadow-emerald-500/20"
              : "bg-white/80 border-emerald-200 text-emerald-700 shadow-lg shadow-emerald-500/10"
          }`}>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent animate-[shimmer_3s_ease-in-out_infinite]"></div>
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-lg shadow-emerald-500/50"></span>
            <span className="text-sm font-bold relative z-10">Trusted by 2,500+ Farmers Worldwide</span>
          </div>
        </div>

        {/* Main Heading with Glow */}
        <div className="max-w-5xl mx-auto text-center mb-8 animate-[fadeIn_1s_ease-out_0.2s_both]">
          <h1
            className={`text-5xl md:text-6xl font-black mb-6 leading-tight transition-colors duration-500 ${
              isDark ? "text-white drop-shadow-2xl" : "text-gray-900"
            }`}
          >
            Transform Your Farm with{" "}
            <span className="relative inline-block group">
              <span className="bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 bg-clip-text text-transparent animate-[gradient_3s_ease-in-out_infinite] bg-[length:200%_auto]">
                Smart Management
              </span>
              <div className="absolute -inset-2 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-lg blur-2xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <div className="absolute -bottom-3 left-0 right-0 h-2 bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 rounded-full animate-[pulse_2s_ease-in-out_infinite]"></div>
            </span>
          </h1>

          {/* Subheading */}
          <p
            className={`text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed transition-colors duration-500 ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Monitor livestock health, track inventory, manage finances, and
            boost productivity with our all-in-one farm management solution.
          </p>
        </div>

        {/* CTA Buttons with Enhanced Effects */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-8 animate-[fadeIn_1s_ease-out_0.4s_both]">
          <button className="group relative bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-500 bg-[length:200%_auto] text-white px-10 py-5 rounded-2xl text-lg font-bold transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-emerald-500/50 overflow-hidden animate-[gradient_3s_ease-in-out_infinite]">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            <span className="relative z-10 flex items-center space-x-3">
              <span>Start Free 30-Day Trial</span>
              <svg
                className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
          </button>

          <button
            className={`group relative px-10 py-5 rounded-2xl text-lg font-bold transition-all duration-300 hover:scale-105 flex items-center space-x-3 overflow-hidden ${
              isDark
                ? "bg-gray-900/50 text-emerald-400 border-2 border-emerald-500/30 hover:border-emerald-400 backdrop-blur-xl shadow-lg shadow-emerald-500/10"
                : "bg-white/80 text-emerald-600 border-2 border-emerald-300 hover:border-emerald-400 backdrop-blur-xl shadow-lg"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/10 to-emerald-500/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            <div className={`relative w-12 h-12 rounded-full flex items-center justify-center ${
              isDark ? "bg-emerald-500/20" : "bg-emerald-100"
            }`}>
              <svg
                className="w-6 h-6 text-emerald-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <span className="relative">Watch Demo</span>
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="flex justify-center mb-20 animate-[fadeIn_1s_ease-out_0.6s_both]">
          <div
            className={`flex flex-wrap justify-center items-center gap-8 text-sm transition-colors duration-500 ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            <div className="flex items-center space-x-2 group">
              <div className="relative">
                <svg className="w-5 h-5 text-emerald-500 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="absolute inset-0 bg-emerald-500 blur-md opacity-0 group-hover:opacity-50 transition-opacity"></div>
              </div>
              <span className="font-medium">No credit card required</span>
            </div>
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
            <div className="flex items-center space-x-2 group">
              <div className="relative">
                <svg className="w-5 h-5 text-emerald-500 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="absolute inset-0 bg-emerald-500 blur-md opacity-0 group-hover:opacity-50 transition-opacity"></div>
              </div>
              <span className="font-medium">Cancel anytime</span>
            </div>
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
            <div className="flex items-center space-x-2 group">
              <div className="relative">
                <svg className="w-5 h-5 text-emerald-500 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="absolute inset-0 bg-emerald-500 blur-md opacity-0 group-hover:opacity-50 transition-opacity"></div>
              </div>
              <span className="font-medium">24/7 support</span>
            </div>
          </div>
        </div>

        {/* Stats Grid - Extraordinary Design */}
        <div className="max-w-7xl mx-auto animate-[fadeIn_1s_ease-out_0.8s_both]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                value: "2,500+", 
                label: "Active Farmers", 
                iconPath: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
              },
              { 
                value: "15M+", 
                label: "Animals Tracked", 
                iconPath: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
              },
              { 
                value: "99.9%", 
                label: "Uptime", 
                iconPath: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
              },
              { 
                value: "4.9/5", 
                label: "User Rating", 
                iconPath: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
              },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className={`group relative p-10 rounded-3xl transition-all duration-500 hover:-translate-y-3 hover:scale-105 overflow-hidden backdrop-blur-xl ${
                  isDark
                    ? "bg-gradient-to-br from-gray-900/80 via-gray-800/50 to-gray-900/80 border border-emerald-500/20 hover:border-emerald-400/50 shadow-2xl hover:shadow-emerald-500/20"
                    : "bg-gradient-to-br from-white/90 via-gray-50/50 to-white/90 border border-gray-200 hover:border-emerald-300 shadow-xl hover:shadow-2xl hover:shadow-emerald-500/10"
                }`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {/* Shine Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                
                {/* Glow Background */}
                <div className={`absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl ${
                  isDark ? "bg-gradient-to-br from-emerald-500/20 to-teal-500/20" : "bg-gradient-to-br from-emerald-400/30 to-teal-400/30"
                }`}></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon with Rotating Border */}
                  <div className="relative w-20 h-20 mb-6 mx-auto">
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-600 opacity-20 group-hover:opacity-40 transition-opacity animate-[spin_3s_linear_infinite]`}></div>
                    <div className={`absolute inset-1 rounded-2xl flex items-center justify-center ${
                      isDark ? "bg-gray-900" : "bg-white"
                    }`}>
                      <svg
                        className="w-10 h-10 text-emerald-500 group-hover:scale-110 transition-transform duration-300"
                        fill={stat.label === "Uptime" || stat.label === "User Rating" ? "currentColor" : "none"}
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.iconPath} />
                      </svg>
                    </div>
                  </div>

                  {/* Value with Glow */}
                  <p className={`text-5xl font-black mb-3 text-center transition-all duration-500 group-hover:scale-110 ${
                    isDark ? "text-white drop-shadow-[0_0_15px_rgba(16,185,129,0.5)]" : "text-gray-900"
                  }`}>
                    {stat.value}
                  </p>

                  {/* Label */}
                  <p className={`text-base font-bold text-center transition-colors duration-500 ${
                    isDark ? "text-emerald-400" : "text-emerald-600"
                  }`}>
                    {stat.label}
                  </p>
                </div>

                {/* Bottom Gradient Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-3xl"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shine {
          0%, 100% { transform: translateX(-100%) rotate(-15deg); }
          50% { transform: translateX(100%) rotate(-15deg); }
        }
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0; transform: scale(0); }
          50% { opacity: 1; transform: scale(1); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}