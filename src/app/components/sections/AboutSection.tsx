"use client";

import React from "react";
import { SectionTitle } from "../maincomponents/SectionTitle";

interface AboutSectionProps {
  dataId?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ dataId }) => {
  return (
    <section
      data-id={dataId}
      className="w-full min-h-screen text-white py-16 px-4 relative overflow-hidden"
    >
      {/* Bottom leaf decoration */}
      <img
        src="/images/double leaves.png"
        alt=""
        className="absolute bottom-0 left-0 w-40 h-auto transform rotate-180"
      />

      <div className="max-w-6xl mt-[64px] mx-auto">
        {/* Title section */}
        <div className="text-center mb-16">
          <SectionTitle title="Restar A Culinary Oasis For Those Who Seek The Extraordinary" />
        </div>

        {/* Main content section */}
        <div className="flex flex-col md:flex-row gap-0 mt-10">
          {/* Left column - Images */}
          <div className="relative w-full md:w-[45%] h-[500px] md:h-[600px] order-1 md:order-none">
            <img
              src="/images/aboutimage1.png"
              alt="Culinary dish"
              className="absolute top-0 left-[-25%] w-[60%] rounded-lg shadow-lg z-30"
            />
            <img
              src="/images/aboutimage2.png"
              alt="Food presentation"
              className="absolute top-[35%] left-[20%] w-[60%] rounded-lg shadow-md z-20"
            />
            <img
              src="/about/double_leaves.png"
              alt=""
              className="w-24 h-auto absolute bottom-[-20px] right-[-20px]"
            />
          </div>

          {/* Right column - Text */}
          <div className="w-full md:w-[55%] md:h-[600px] space-y-6 relative  left-[13%]">
            <div className="relative p-6 rounded-sm border-b-2 border-[#FFFFFF]/20">
              <img
                src="/about/single_leaves.png"
                alt=""
                className="absolute -left-12 top-0 w-10 h-auto"
              />
              <h3
                className="text-[40px] font-rasa mb-4"
                style={{
                  fontFamily: "Rasa",
                }}
              >
                About Our Story
              </h3>
              <p
                className="text-gray-300 text-[22px]"
                style={{
                  fontFamily: "Rasa",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div className="flex justify-between p-6 rounded-sm border-b-2 border-[#FFFFFF]/20">
              <div className="w-1/2 pr-4">
                <h4
                  className="text-[40px] font-rasa mb-2"
                  style={{
                    fontFamily: "Rasa",
                  }}
                >
                  1996
                </h4>
                <p
                  className="text-gray-300 text-[22px]"
                  style={{
                    fontFamily: "Rasa",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </p>
              </div>
              <div className="w-1/2 pl-4">
                <h4
                  className="text-[40px] font-rasa mb-2"
                  style={{
                    fontFamily: "Rasa",
                  }}
                >
                  2025
                </h4>
                <p
                  className="text-gray-300 text-[22px]"
                  style={{
                    fontFamily: "Rasa",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </p>
              </div>
            </div>

            <div className="relative">
              <h4
                className="text-[40px] font-rasa mb-4"
                style={{
                  fontFamily: "Rasa",
                }}
              >
                Josyphy
              </h4>
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
