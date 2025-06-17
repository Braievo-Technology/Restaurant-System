'use client';

import React from 'react';
import Image from 'next/image'; // Make sure you're using Next.js. If not, replace with regular <img>
import SectionTitle from '../components/ui/SectionTitle';

const HeroSection: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center text-white px-4 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://plus.unsplash.com/premium_photo-1661432769134-758550b8fedb?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-80" />
        </div>

        {/* Content Layer */}
        <div className="relative z-10 text-center">
          <h1 className="text-[80px] font-regular drop-shadow-lg font-sans">
            About Us
          </h1>
        </div>

      </section>

    <section className="bg-[#0B1517] font-sans text-brand-light py-20 sm:py-28">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <SectionTitle title="A Taste Of Our Space" />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          {/* Text Column */}
          <div className="text-center lg:text-left">
            <p className="text-base md:text-lg leading-relaxed text-gray-300 mb-6">
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
              piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard
              McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, *consectetur*, and discovered the undoubtable source.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-gray-300">
              It has survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages.
            </p>
          </div>

          {/* Image Column */}
          <div className="flex justify-center lg:justify-end px-4 mt-8 lg:mt-0">
            <div className="relative w-full max-w-lg sm:max-w-xl">
              {/* Gold Border */}
              <div className="absolute top-6 -right-6 w-full h-full border-[4px] border-[#CA9C5E] rounded"></div>

              {/* Foreground Image */}
              <div className="relative z-10 p-2 bg-brand-blue rounded">
                <img
                  src="https://plus.unsplash.com/premium_photo-1661432769134-758550b8fedb?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D"
                  alt="Restaurant background"
                  className="w-full h-auto object-cover rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    </>
  );
};

export default HeroSection;
