"use client";
import { useState } from "react";

export default function DualActionButton() {
  const [hoveringRight, setHoveringRight] = useState(false);

  return (
    <div className="inline-flex border border-[#68573A] rounded-full overflow-hidden">
      <button
        onMouseEnter={() => setHoveringRight(false)}
        className={`px-6 py-2 text-sm tracking-widest transition-all duration-300 
          ${
            hoveringRight
              ? "bg-[#0B1517] text-white border-r border-[#68573A]"
              : "bg-[#68573A] text-white"
          }`}
      >
        Reserve A Table
      </button>

      <button
        onMouseEnter={() => setHoveringRight(true)}
        onMouseLeave={() => setHoveringRight(false)}
        className={`px-6 py-2 text-sm tracking-widest transition-all duration-300
          ${
            hoveringRight
              ? "bg-[#68573A] text-white"
              : "bg-[#0B1517] text-white"
          }`}
      >
        Order Online
      </button>
    </div>
  );
}
