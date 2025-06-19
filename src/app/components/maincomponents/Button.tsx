import React from "react";

interface MainButtonProps {
  text?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  ariaLabel?: string;
}

const MainButton: React.FC<MainButtonProps> = ({
  text,
  onClick,
  ariaLabel,
}) => {
  return (
    <div className="inline-flex flex-col items-center group relative">
      {/* Top Divider Line */}
      <div className="w-30 sm:w-35 md:w-42 h-px bg-[#B08D57] mb-2 transform transition-all duration-300 group-hover:translate-y-1" />

      {/* Contact Link */}
      <a
        href="#"
        onClick={onClick}
        aria-label={ariaLabel}
        className="text-sm sm:text-base md:text-lg font-sans text-[#E0D6C8] tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] hover:text-white hover:opacity-90 transition-all duration-300 py-2"
      >
        {text}
      </a>

      {/* Bottom Divider Line */}
      <div className="w-30 sm:w-35 md:w-42 h-px bg-[#B08D57] mt-2 transform transition-all duration-300 group-hover:-translate-y-1" />
    </div>
  );
};

export default MainButton;
