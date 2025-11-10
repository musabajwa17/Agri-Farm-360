// "use client";
// import React, { useRef, useState, useEffect } from "react";
// import { useScroll, useTransform, motion } from "framer-motion";
// import { useTheme } from "@/context/ThemeContext";

// export const ContainerScroll = ({ titleComponent, children }) => {
//   const { isDark } = useTheme();
//   const containerRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//   });

//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const checkMobile = () => setIsMobile(window.innerWidth <= 768);
//     checkMobile();
//     window.addEventListener("resize", checkMobile);
//     return () => window.removeEventListener("resize", checkMobile);
//   }, []);

//   const scaleDimensions = isMobile ? [0.7, 0.9] : [1.05, 1];
//   const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
//   const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions);
//   const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

//   return (
//     <div
//       className="h-[60rem] md:h-[80rem] flex items-center justify-center relative p-4 md:p-8"
//       ref={containerRef}
//     >
//       <div
//         className="py-20 md:py-40 w-full relative"
//         style={{ perspective: "1000px" }}
//       >
//         <Header translate={translate} titleComponent={titleComponent} />
//         <Card rotate={rotate} translate={translate} scale={scale} isDark={isDark}>
//           {children}
//         </Card>
//       </div>
//     </div>
//   );
// };

// export const Header = ({ translate, titleComponent }) => {
//   return (
//     <motion.div
//       style={{ translateY: translate }}
//       className="max-w-6xl mx-auto text-center mb-12 md:mb-20"
//     >
//       {titleComponent}
//     </motion.div>
//   );
// };

// export const Card = ({ rotate, scale, children, isDark }) => {
//   return (
//     <motion.div
//       style={{
//         rotateX: rotate,
//         scale,
//       }}
//       className="max-w-6xl mx-auto h-[30rem] md:h-[45rem] w-full relative"
//     >
//       {/* Glow effect behind card */}
//       <div
//         className={`absolute inset-0 rounded-[30px] blur-3xl opacity-30 ${
//           isDark ? "bg-emerald-500/30" : "bg-emerald-400/30"
//         }`}
//         style={{ transform: "translateZ(-100px)" }}
//       />

//       {/* Main card */}
//       <div
//         className={`relative h-full w-full border-4 p-3 md:p-6 rounded-[30px] transition-all duration-500 ${
//           isDark
//             ? "border-emerald-500/20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 shadow-2xl shadow-emerald-500/10"
//             : "border-emerald-500/30 bg-gradient-to-br from-gray-100 via-white to-gray-100 shadow-2xl shadow-emerald-500/20"
//         }`}
//         style={{
//           boxShadow: isDark
//             ? "0 0 80px rgba(16, 185, 129, 0.15), 0 20px 60px rgba(0, 0, 0, 0.5)"
//             : "0 0 80px rgba(16, 185, 129, 0.2), 0 20px 60px rgba(0, 0, 0, 0.1)",
//         }}
//       >
//         {/* Inner glow */}
//         <div
//           className={`absolute inset-0 rounded-[26px] ${
//             isDark
//               ? "bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent"
//               : "bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent"
//           }`}
//         />

//         {/* Screen notch (optional - MacBook style) */}
//         <div
//           className={`absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 rounded-b-2xl z-10 ${
//             isDark ? "bg-gray-900" : "bg-gray-200"
//           }`}
//         />

//         {/* Content container */}
//         <div
//           className={`relative h-full w-full overflow-hidden rounded-2xl md:rounded-[20px] ${
//             isDark ? "bg-gray-950" : "bg-white"
//           }`}
//         >
//           {/* Subtle inner border */}
//           <div
//             className={`absolute inset-0 rounded-2xl md:rounded-[20px] pointer-events-none ${
//               isDark ? "border border-emerald-500/10" : "border border-emerald-500/20"
//             }`}
//           />
          
//           {children}
//         </div>

//         {/* Corner accents */}
//         <div
//           className={`absolute top-2 left-2 w-8 h-8 border-l-2 border-t-2 rounded-tl-xl ${
//             isDark ? "border-emerald-500/30" : "border-emerald-500/40"
//           }`}
//         />
//         <div
//           className={`absolute top-2 right-2 w-8 h-8 border-r-2 border-t-2 rounded-tr-xl ${
//             isDark ? "border-emerald-500/30" : "border-emerald-500/40"
//           }`}
//         />
//         <div
//           className={`absolute bottom-2 left-2 w-8 h-8 border-l-2 border-b-2 rounded-bl-xl ${
//             isDark ? "border-emerald-500/30" : "border-emerald-500/40"
//           }`}
//         />
//         <div
//           className={`absolute bottom-2 right-2 w-8 h-8 border-r-2 border-b-2 rounded-br-xl ${
//             isDark ? "border-emerald-500/30" : "border-emerald-500/40"
//           }`}
//         />
//       </div>
//     </motion.div>
//   );
// };

"use client";
import React, { useRef, useState, useEffect } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

export const ContainerScroll = ({ titleComponent, children }) => {
  const { isDark } = useTheme();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const scaleDimensions = isMobile ? [0.7, 0.9] : [1.1, 1];
  const rotate = useTransform(scrollYProgress, [0, 1], [35, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions);
  const translateY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0.6, 1]);

  return (
    <div
      className="h-[70rem] md:h-[90rem] flex items-center justify-center relative overflow-hidden"
      ref={containerRef}
    >
      {/* Radial gradient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className={`absolute inset-0 ${
            isDark
              ? "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/20 via-gray-900 to-gray-950"
              : "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-100/40 via-gray-50 to-white"
          }`}
        />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div
          className={`absolute inset-0 ${
            isDark ? "opacity-20" : "opacity-10"
          }`}
          style={{
            backgroundImage: `linear-gradient(${
              isDark ? "rgba(16, 185, 129, 0.1)" : "rgba(16, 185, 129, 0.15)"
            } 1px, transparent 1px), linear-gradient(90deg, ${
              isDark ? "rgba(16, 185, 129, 0.1)" : "rgba(16, 185, 129, 0.15)"
            } 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div
        className="py-32 md:py-48 w-full relative z-10"
        style={{ 
          perspective: "2000px",
          perspectiveOrigin: "50% 50%"
        }}
      >
        <Header translate={translateY} titleComponent={titleComponent} />
        <Card 
          rotate={rotate} 
          scale={scale} 
          opacity={opacity}
          isDark={isDark}
        >
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({ translate, titleComponent }) => {
  return (
    <motion.div
      style={{ translateY: translate }}
      className="max-w-6xl mx-auto text-center mb-16 md:mb-24 px-4"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({ rotate, scale, opacity, children, isDark }) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        opacity,
      }}
      className="max-w-7xl mx-auto px-4 md:px-8"
    >
      {/* Outer container with 3D layers */}
      <div className="relative" style={{ transformStyle: "preserve-3d" }}>
        
        {/* Background layers for depth */}
        <motion.div
          className={`absolute inset-0 rounded-3xl blur-xl ${
            isDark ? "bg-emerald-500/20" : "bg-emerald-500/30"
          }`}
          style={{ transform: "translateZ(-80px)" }}
        />
        <motion.div
          className={`absolute inset-0 rounded-3xl blur-2xl ${
            isDark ? "bg-cyan-500/15" : "bg-cyan-500/25"
          }`}
          style={{ transform: "translateZ(-120px)" }}
        />
        <motion.div
          className={`absolute inset-0 rounded-3xl blur-3xl ${
            isDark ? "bg-purple-500/10" : "bg-purple-500/20"
          }`}
          style={{ transform: "translateZ(-160px)" }}
        />

        {/* Main display frame */}
        <div
          className={`relative rounded-3xl p-3 md:p-4 transition-all duration-500 ${
            isDark
              ? "bg-gradient-to-br from-gray-800 via-gray-900 to-black shadow-2xl"
              : "bg-gradient-to-br from-gray-200 via-gray-100 to-white shadow-2xl"
          }`}
          style={{
            boxShadow: isDark
              ? "0 50px 100px -20px rgba(0, 0, 0, 0.8), 0 30px 60px -30px rgba(16, 185, 129, 0.4)"
              : "0 50px 100px -20px rgba(0, 0, 0, 0.3), 0 30px 60px -30px rgba(16, 185, 129, 0.5)",
          }}
        >
          {/* Screen bezel with realistic reflections */}
          <div className="relative">
            {/* Top bar - like a browser or app header */}
            <div
              className={`h-8 md:h-10 rounded-t-2xl flex items-center px-4 border-b ${
                isDark
                  ? "bg-gray-800/80 border-gray-700/50"
                  : "bg-gray-100/80 border-gray-300/50"
              }`}
            >
              <div className="flex gap-2">
                <div className={`w-3 h-3 rounded-full ${isDark ? "bg-red-500/80" : "bg-red-400"}`} />
                <div className={`w-3 h-3 rounded-full ${isDark ? "bg-yellow-500/80" : "bg-yellow-400"}`} />
                <div className={`w-3 h-3 rounded-full ${isDark ? "bg-green-500/80" : "bg-green-400"}`} />
              </div>
              
              {/* Center title bar */}
              <div className={`flex-1 flex justify-center`}>
                <div
                  className={`px-8 py-1 rounded-lg text-xs font-medium ${
                    isDark
                      ? "bg-gray-900/50 text-gray-400"
                      : "bg-white/50 text-gray-600"
                  }`}
                >
                  Live Preview
                </div>
              </div>
            </div>

            {/* Main screen content */}
            <div
              className={`relative rounded-b-2xl overflow-hidden ${
                isDark ? "bg-gray-950" : "bg-white"
              }`}
              style={{
                height: "28rem",
                boxShadow: isDark
                  ? "inset 0 1px 0 rgba(255, 255, 255, 0.05)"
                  : "inset 0 1px 0 rgba(255, 255, 255, 0.8)",
              }}
            >
              {/* Subtle screen reflection effect */}
              <div
                className="absolute inset-0 pointer-events-none z-10"
                style={{
                  background: isDark
                    ? "linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, transparent 30%, transparent 70%, rgba(255, 255, 255, 0.02) 100%)"
                    : "linear-gradient(135deg, rgba(255, 255, 255, 0.6) 0%, transparent 30%, transparent 70%, rgba(255, 255, 255, 0.4) 100%)",
                }}
              />

              {/* Animated glow on edges */}
              <motion.div
                animate={{
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className={`absolute inset-0 pointer-events-none ${
                  isDark
                    ? "bg-gradient-to-r from-emerald-500/10 via-transparent to-cyan-500/10"
                    : "bg-gradient-to-r from-emerald-500/20 via-transparent to-cyan-500/20"
                }`}
              />

              {/* Content wrapper */}
              <div className="relative h-full w-full overflow-auto">
                {children}
              </div>
            </div>
          </div>

          {/* Glowing edges */}
          <div
            className={`absolute -inset-[1px] rounded-3xl pointer-events-none ${
              isDark
                ? "bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-purple-500/20"
                : "bg-gradient-to-r from-emerald-500/30 via-cyan-500/30 to-purple-500/30"
            }`}
            style={{
              opacity: 0.5,
              filter: "blur(2px)",
            }}
          />
        </div>

        {/* Stand/Base */}
        <div className="flex flex-col items-center mt-4">
          <div
            className={`w-32 h-20 ${
              isDark
                ? "bg-gradient-to-b from-gray-800 to-gray-900"
                : "bg-gradient-to-b from-gray-300 to-gray-400"
            }`}
            style={{
              clipPath: "polygon(30% 0%, 70% 0%, 100% 100%, 0% 100%)",
              boxShadow: isDark
                ? "0 10px 30px rgba(0, 0, 0, 0.5)"
                : "0 10px 30px rgba(0, 0, 0, 0.2)",
            }}
          />
          <div
            className={`w-48 h-3 rounded-full mt-1 ${
              isDark
                ? "bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800"
                : "bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300"
            }`}
            style={{
              boxShadow: isDark
                ? "0 5px 20px rgba(0, 0, 0, 0.6)"
                : "0 5px 20px rgba(0, 0, 0, 0.3)",
            }}
          />
        </div>

        {/* Floating UI elements */}
        <motion.div
          animate={{
            y: [0, -10, 0],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`absolute -right-8 top-1/4 w-16 h-16 rounded-2xl ${
            isDark
              ? "bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30"
              : "bg-gradient-to-br from-emerald-500/30 to-cyan-500/30 border border-emerald-500/40"
          }`}
          style={{
            backdropFilter: "blur(10px)",
            boxShadow: isDark
              ? "0 8px 32px rgba(16, 185, 129, 0.2)"
              : "0 8px 32px rgba(16, 185, 129, 0.3)",
          }}
        />

        <motion.div
          animate={{
            y: [0, 10, 0],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className={`absolute -left-8 bottom-1/4 w-20 h-20 rounded-2xl ${
            isDark
              ? "bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30"
              : "bg-gradient-to-br from-purple-500/30 to-pink-500/30 border border-purple-500/40"
          }`}
          style={{
            backdropFilter: "blur(10px)",
            boxShadow: isDark
              ? "0 8px 32px rgba(168, 85, 247, 0.2)"
              : "0 8px 32px rgba(168, 85, 247, 0.3)",
          }}
        />
      </div>
    </motion.div>
  );
};