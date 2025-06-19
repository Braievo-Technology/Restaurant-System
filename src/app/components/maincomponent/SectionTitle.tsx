// import React from 'react';

// export const SectionTitle = ({ title }: { title: string }) => {
//   return (
//     <div className="w-full flex justify-center px-4">
//       <div className="flex items-center justify-center gap-4 sm:gap-6 mb-16 w-full max-w-4xl">
//         <div className="h-px flex-grow bg-[#CA9C5E]"></div>
//         <h2 className="text-3xl md:text-4xl font-serif text-[#CA9C5E] text-center whitespace-nowrap">
//           {title}
//         </h2>
//         <div className="h-px flex-grow bg-[#CA9C5E]"></div>
//       </div>
//     </div>
//   );
// };

// export default SectionTitle;


"use client";
import React from "react";
interface SectionTitleProps {
  title: string;
  className?: string;
  "data-id"?: string;
}
export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  className = "",
  "data-id": dataId,
}) => {
  return (
    <div
    className={`flex items-center justify-center gap-6 px-4 w-full mb-25 ${className}`}
      data-id={dataId}
    >
      <div
        className="h-[1px] w-[171px] bg-[#68573A]"
        style={{
          minWidth: "50px",
          maxWidth: "171px",
        }}
      />
      <h2
        className="text-center text-[#CA9C5E] whitespace-nowrap "
        style={{
          fontFamily: "Adamina, serif",
          fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
        }}
      >
        {title}
      </h2>
      <div
        className="h-[1px] w-[171px] bg-[#68573A]"
        style={{
          minWidth: "50px",
          maxWidth: "171px",
        }}
      />
    </div>
  );
};