"use client";
import { ContainerScroll } from "./ui/ContainerScroll";
import { useTheme } from "@/context/ThemeContext"; // import your context

export default function HeroScroll() {
  const { isDark } = useTheme(); // get global theme

  return (
    <div
      className={`flex flex-col overflow-hidden ${
        isDark
          ? "bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950"
          : "bg-gradient-to-br from-gray-50 via-white to-gray-50"
      }`}
    >
      <ContainerScroll
        titleComponent={
          <>
            <h1
              className={`text-4xl font-semibold ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Unleash the power of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-600 bg-clip-text text-transparent">
                Farm Management
              </span>
            </h1>
          </>
        }
      >
        <img
          src={`/overview.png`}
          alt="FarmDigits Dashboard Overview"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top shadow-2xl border border-white/20"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
