import React from "react";
import Image from "next/image";
import MainButton from "./Button";

interface CardProps {
  image: string;
  title: string;
  description: string;
  buttonText: string;
}

const Card: React.FC<CardProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <div
      className="bg-[#112225] rounded-tl-[100px] rounded-br-[100px] w-[278px] h-[390px] flex flex-col items-center justify-between pt-32 pb-8 px-4 text-center relative
    transition-transform duration-500 ease-in-out
    hover:bg-[#1E2F33]
    hover:shadow-2xl
    hover:scale-[1.05]"
      style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
    >
      {/* Circular top image */}
      <div className="absolute -top-25 flex justify-center w-full">
        <Image
          src={image}
          alt={title}
          width={150}
          height={150}
          className="rounded-full w-[220px] h-[220px] object-cover"
        />
      </div>

      {/* Title & Description */}
      <div className="mt-[26px]">
        {" "}
        {/* 32px gap from image bottom */}
        <h3
          className="text-white text-[24px]  mb-2"
          style={{
            fontFamily: "Rasa",
          }}
        >
          {title}
        </h3>
        <p className="text-gray-300 text-[14px] leading-relaxed px-2">
          {description}
        </p>
      </div>

      {/* Button */}
      <div className="flex flex-col items-center">
        <MainButton text="VIEW MENU" ariaLabel="View Menu" />
      </div>
    </div>
  );
};

export default Card;
