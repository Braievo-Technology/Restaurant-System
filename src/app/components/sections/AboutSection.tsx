"use client";

import React from "react";
import { SectionTitle } from "../ui/SectionTitle";

interface AboutSectionProps {
  dataId?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ dataId }) => {
  return (
    <section
      data-id={dataId}
      className="w-full min-h-screen bg-[#0F1416] text-white py-16 px-4 relative overflow-hidden"
    >
      {/* Bottom leaf decoration */}
      <img
        src="/images/double leaves.png"
        alt=""
        className="absolute bottom-0 left-0 w-40 h-auto transform rotate-180"
      />

      <div className="max-w-5xl mx-auto">
        {/* Title section */}
        <div className="text-center mb-16">
          <SectionTitle title="Restar A Culinary Oasis For Those Who Seek The Extraordinary" />
        </div>

        {/* Main content section */}
        <div className="flex flex-col md:flex-row gap-12 mt-16">
          {/* Left column - Images */}
          <div className="relative w-full h-[400px] order-1 md:order-none">
            <img
              src="/images/aboutimage1.png"
              alt="Culinary dish"
              className="absolute top-0 left-0 w-[60%] rounded-lg shadow-lg z-30"
            />

            <img
              src="/images/aboutimage2.png"
              alt="Food presentation"
              className="absolute top-[40%] left-[45%] w-[50%] rounded-lg shadow-md z-20"
            />

            <img
              src="/about/aboutimage2.png"
              alt="Appetizer presentation"
              className="absolute bottom-0 left-[10%] w-[40%] rounded-lg shadow-md z-10"
            />

            <img
              src="/about/double_leaves.png"
              alt=""
              className="w-24 h-auto absolute bottom-[-20px] right-[-20px]"
            />
          </div>

          {/* Right column - Text */}
          <div className="md:w-3/5 space-y-6 relative">
            <div className="relative bg-[#0A0D0E] p-6 rounded-sm border-b border-[#C4A052]/30">
              <img
                src="/about/single_leaves.png"
                alt=""
                className="absolute -left-12 top-0 w-10 h-auto"
              />
              <h3 className="text-3xl font-rasa mb-4">About Our Story</h3>
              <p className="text-gray-300 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div className="flex justify-between bg-[#0A0D0E] p-6 rounded-sm border-b border-[#C4A052]/30">
              <div className="w-1/2 pr-4">
                <h4 className="text-2xl font-rasa mb-2">1996</h4>
                <p className="text-gray-300 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </p>
              </div>
              <div className="w-1/2 pl-4">
                <h4 className="text-2xl font-rasa mb-2">2025</h4>
                <p className="text-gray-300 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </p>
              </div>
            </div>

            <div className="relative">
              <h4 className="text-2xl font-rasa mb-4">Josyphy</h4>
              <img
                src="/images/signature.png"
                alt="Signature"
                className="h-12 w-auto"
              />
              <img
                src="/images/single leaves.png"
                alt=""
                className="absolute bottom-0 right-0 w-16 h-auto transform rotate-45"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
