// c:/Users/AIO/Downloads/FrontEndProject-main/FrontEndProject-main/src/features/home/pages/HomePage.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { HeroSection, CTASection } from "@/features/home/components";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/register");
  };

  const handleBrowseCourts = () => {
    navigate("/courts");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <HeroSection onGetStarted={handleGetStarted} onBrowseCourts={handleBrowseCourts} />
      <CTASection />
    </div>
  );
};

export default Home;
