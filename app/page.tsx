"use client";
import { useState } from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import HeroScroll from "../components/HeroScroll";
import FeatureCards from "../components/cards/FeatureCards";
import TrustBuilding from "../components/TrustBuilding";
import Testimonials from "../components/Testimonials";
import PricingCards from "../components/cards/PricingCards";
import Footer from "../components/Footer";
export default function HomePage() {
  const [isDark, setIsDark] = useState(true);
  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        isDark
          ? "bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950"
          : "bg-gradient-to-br from-gray-50 via-white to-gray-50"
      }`}
    >
      {/* Pass isDark and setIsDark to both */}
      <Header isDark={isDark} setIsDark={setIsDark} />
      <HeroSection isDark={isDark} />
      <HeroScroll isDark={isDark} />
      <FeatureCards isDark={isDark} />
      <TrustBuilding isDark={isDark}/>
      <Testimonials isDark={isDark}/>
      <PricingCards isDark={isDark} />
      <Footer isDark={isDark} />
    </div>
  );
}
