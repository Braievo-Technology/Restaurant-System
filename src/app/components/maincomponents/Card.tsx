import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const ChefCard = ({ name, imageUrl, socials }) => {
  return (
    <div
      className="relative w-64 h-96 sm:w-72 sm:h-[26rem] rounded-xl overflow-hidden shadow-2xl 
                 bg-cover bg-center group transform transition-all duration-300 hover:scale-105"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#CA9C5E]/80 via-[#CA9C5E]/40 to-transparent opacity-100 group-hover:from-black/90 group-hover:via-black/50 transition-opacity duration-300" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end items-center text-center p-6 text-white">
        <h3 className="text-2xl font-thin font-serif mb-3 drop-shadow-md">{name}</h3>

        <div className="flex justify-center space-x-4">
          {socials.facebook && (
            <a
              href={socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              <FaFacebook className="w-6 h-6" />
            </a>
          )}
          {socials.instagram && (
            <a
              href={socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              <FaInstagram className="w-6 h-6" />
            </a>
          )}
          {socials.linkedin && (
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
