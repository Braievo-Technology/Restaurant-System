"use client";
import React from "react";
import HeroButtons from "../hero/HeroButtons";

interface HeroProps {
  dataId?: string;
}

const HeroSection: React.FC<HeroProps> = ({ dataId }) => {
  return (
    <div
      data-id={dataId}
      className="relative w-full min-h-screen flex items-center justify-center border-[1px] border-[#68573A]"
      style={{
        backgroundImage: `url('/images/background image.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 text-center text-white px-4">
        <p className="text-lg font-inter mb-2">MORE FLAVOR FOR LESS</p>
        <h1 className="text-6xl md:text-7xl font-poppins mb-4">
          Taste The
          <br />
          Difference
        </h1>
        <p className="font-rasa text-lg md:text-xl max-w-2xl mx-auto mb-8">
          When the going gets tough, the tough get grilling. Bringing heat to
          your meat. No one can compete with our meat
        </p>
        <div className="relative inline-block group">
          <HeroButtons />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
