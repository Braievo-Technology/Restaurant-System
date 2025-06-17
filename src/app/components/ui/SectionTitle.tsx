import React from 'react';

export const SectionTitle = ({ title }: { title: string }) => {
  return (
    <div className="w-full flex justify-center px-4">
      <div className="flex items-center justify-center gap-4 sm:gap-6 mb-16 w-full max-w-4xl">
        <div className="h-px flex-grow bg-[#CA9C5E]"></div>
        <h2 className="text-3xl md:text-4xl font-serif text-[#CA9C5E] text-center whitespace-nowrap">
          {title}
        </h2>
        <div className="h-px flex-grow bg-[#CA9C5E]"></div>
      </div>
    </div>
  );
};

export default SectionTitle;
