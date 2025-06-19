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
