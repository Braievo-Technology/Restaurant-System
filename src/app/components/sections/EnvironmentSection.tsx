"use client";

import React from "react";
import { SectionTitle } from "../maincomponents/SectionTitle";

interface EnvironmentSectionProps {
  dataId?: string;
}

const EnvironmentSection: React.FC<EnvironmentSectionProps> = ({ dataId }) => {
  return (
    <section
      data-id={dataId}
      className="w-full min-h-screen bg-[#0B1517] text-white py-16 px-4 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <div className="mb-8">
          <SectionTitle title="Our Environment" />
        </div>

        {/* Description */}
        <p className="font-['Rasa'] text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        {/* Image */}
        <div className="flex justify-center">
          <img
            src="/images/Envirement.png"
            alt="Our Restaurant Environment"
            className="rounded-[40px] w-full max-w-6xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default EnvironmentSection;
