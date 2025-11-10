// "use client";
// import { ContainerScroll } from "./ui/ContainerScroll";
// import { useTheme } from "@/context/ThemeContext"; // import your context

// export default function HeroScroll() {
//   const { isDark } = useTheme(); // get global theme

//   return (
//     <div
//       className={`flex flex-col overflow-hidden ${
//         isDark
//           ? "bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950"
//           : "bg-gradient-to-br from-gray-50 via-white to-gray-50"
//       }`}
//     >
//       <ContainerScroll
//         titleComponent={
//           <>
//             <h1
//               className={`text-4xl font-semibold ${
//                 isDark ? "text-white" : "text-gray-900"
//               }`}
//             >
//               Unleash the power of <br />
//               <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-600 bg-clip-text text-transparent">
//                 Farm Management
//               </span>
//             </h1>
//           </>
//         }
//       >
//         <img
//           src={`/overview.png`}
//           alt="FarmDigits Dashboard Overview"
//           height={720}
//           width={1400}
//           className="mx-auto rounded-2xl object-cover h-full object-left-top shadow-2xl border border-white/20"
//           draggable={false}
//         />
//       </ContainerScroll>
//     </div>
//   );
// }


"use client";
import { ContainerScroll } from "./ui/ContainerScroll";
import { useTheme } from "@/context/ThemeContext";

export default function HeroScroll() {
  const { isDark } = useTheme();

  return (
    <div
      className={`flex flex-col overflow-hidden relative ${
        isDark
          ? "bg-gradient-to-br from-gray-950 via-gray-900 to-emerald-950/20"
          : "bg-gradient-to-br from-emerald-50/30 via-white to-gray-50"
      }`}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 ${
            isDark ? "bg-emerald-500" : "bg-emerald-300"
          }`}
          style={{
            animation: "float 20s ease-in-out infinite",
          }}
        />
        <div
          className={`absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 ${
            isDark ? "bg-emerald-600" : "bg-emerald-400"
          }`}
          style={{
            animation: "float 25s ease-in-out infinite reverse",
          }}
        />
      </div>

      <ContainerScroll
        titleComponent={
          <div className="space-y-6">
            <div className="inline-block">
              <span
                className={`inline-block px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm ${
                  isDark
                    ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                    : "bg-emerald-500/10 text-emerald-700 border border-emerald-500/20"
                }`}
              >
                📊 All-in-One Farm Management
              </span>
            </div>

            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Your Complete
              <br />
              <span className="relative inline-block mt-2">
                <span className="text-5xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-500 bg-clip-text text-transparent animate-gradient">
                  Farm Dashboard
                </span>
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-500 rounded-full opacity-50 blur-sm" />
              </span>
            </h1>

            <p
              className={`text-lg md:text-xl max-w-2xl mx-auto ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Monitor your entire farm operation from one powerful dashboard.
              Track crops, livestock, equipment, and financials in real-time.
            </p>

            <div className="flex flex-wrap gap-4 justify-center items-center pt-4">
              <button
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                  isDark
                    ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:shadow-lg hover:shadow-emerald-500/50"
                    : "bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:shadow-lg hover:shadow-emerald-500/50"
                }`}
              >
                Explore Dashboard
              </button>
              <button
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm ${
                  isDark
                    ? "bg-white/10 text-white border border-white/20 hover:bg-white/20"
                    : "bg-gray-900/5 text-gray-900 border border-gray-900/10 hover:bg-gray-900/10"
                }`}
              >
                View Features →
              </button>
            </div>
          </div>
        }
      >
        <div className="relative w-full h-full group">
          <img
            src="/overview.png"
            alt="FarmDigits Dashboard Overview"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top shadow-2xl"
            draggable={false}
          />
          {/* Overlay gradient for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl pointer-events-none" />
          
          {/* Floating feature badges */}
          <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className={`px-3 py-2 rounded-lg text-xs font-medium backdrop-blur-md ${
              isDark ? "bg-emerald-500/20 text-emerald-300" : "bg-white/90 text-emerald-700"
            }`}>
              📈 Live Metrics
            </div>
            <div className={`px-3 py-2 rounded-lg text-xs font-medium backdrop-blur-md ${
              isDark ? "bg-emerald-500/20 text-emerald-300" : "bg-white/90 text-emerald-700"
            }`}>
              🌡️ Weather Sync
            </div>
            <div className={`px-3 py-2 rounded-lg text-xs font-medium backdrop-blur-md ${
              isDark ? "bg-emerald-500/20 text-emerald-300" : "bg-white/90 text-emerald-700"
            }`}>
              📊 Custom Reports
            </div>
          </div>
        </div>
      </ContainerScroll>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(20px);
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
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}