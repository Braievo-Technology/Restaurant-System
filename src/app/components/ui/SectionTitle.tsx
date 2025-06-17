import React from 'react';

export const SectionTitle = ({ title }: { title: string }) => {
  return (
  
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 mb-16">
          <div className="h-px w-60 bg-[#CA9C5E]"></div>
          <h2 className="text-3xl md:text-4xl font-serif text-[#CA9C5E] text-center">
            {title}
          </h2>
          <div className="h-px w-60 bg-[#CA9C5E]"></div>
        </div>
      </div>

  );
};

export default SectionTitle;