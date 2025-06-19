import React from "react";
import MainButton from "../maincomponents/Button";

const ChefSection = ({ "data-id": dataId }: { "data-id"?: string }) => {
  return (
    <section
      data-id={dataId}
      className="w-full min-h-screen bg-[#0B1517] text-white py-16 px-4 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12">
        {/* Text Content */}
        <div className="w-full flex flex-col items-center text-center space-y-6">
          {/* Subheading */}
          <p className="text-sm uppercase tracking-[0.25em] text-white font-light">
            Delight in every bite
          </p>

          {/* Main Heading */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-['Poppins'] leading-tight">
            Our Chef <br /> Recommend
          </h2>

          {/* Paragraph */}
          <p className="text-lg md:text-xl font-['Rasa'] max-w-md text-white leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {/* Button with Gold Lines */}
          <div className="space-y-2 pt-4">
            <MainButton text="VIEW MENU" ariaLabel="View Menu" />
          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative">
          <img
            src="https://uploadthingy.s3.us-west-1.amazonaws.com/vV5rjpPv7dcYcp2CYUqU6v/chefsectionimage.png"
            alt="Chef's recommended dish with tropical leaves decoration"
            className="w-full h-auto rounded-lg transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default ChefSection;
