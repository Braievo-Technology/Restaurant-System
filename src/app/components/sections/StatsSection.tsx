"use client";
import React from "react";

export const StatsSection = () => {
  return (
    <section className="w-full h-[362px] bg-[#0B1517] border-[15px] border-[#68573A] flex items-center justify-center">
      <div className="flex flex-col md:flex-row items-center justify-center gap-[128px]">
        {/* Stat Block */}
        <div className="text-center">
          <h3 className="text-[#CA9C5E] font-['Adamina'] text-6xl md:text-7xl">
            2k
          </h3>
          <p className="text-white font-['Poppins'] text-sm mt-2">
            Our Daily Order
          </p>
        </div>

        <div className="text-center">
          <h3 className="text-[#CA9C5E] font-['Adamina'] text-6xl md:text-7xl">
            7
          </h3>
          <p className="text-white font-['Poppins'] text-sm mt-2">
            Specialist Chef
          </p>
        </div>

        <div className="text-center">
          <h3 className="text-[#CA9C5E] font-['Adamina'] text-6xl md:text-7xl">
            80
          </h3>
          <p className="text-white font-['Poppins'] text-sm mt-2">
            Our Menu & Dish
          </p>
        </div>

        <div className="text-center">
          <h3 className="text-[#CA9C5E] font-['Adamina'] text-6xl md:text-7xl">
            20
          </h3>
          <p className="text-white font-['Poppins'] text-sm mt-2">
            Our Members
          </p>
        </div>
      </div>
    </section>
  );
};
