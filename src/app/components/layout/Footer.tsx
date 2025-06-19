'use client';

import React from 'react';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaTripadvisor } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#0d2e34] text-gray-300 font-sans pt-50">
  {/* Background Image with Overlay */}
  <div className="hidden lg:block absolute left-0 bottom-0 z-10 pointer-events-none">
  <Image
    src="/Images/bgfooter.png" // Replace with your actual image path
    alt="Left decorative image"
    width={778}
    height={778}
    className="opacity-45"
  />
</div>

      {/* Decorative Leaves */}
      <div className="hidden lg:block absolute top-0 -right-0 -mt-0 z-10 pointer-events-none">
        <Image
          src="/Images/pngtree.png"
          alt="Decorative leaves"
          width={382}
          height={382}
          className="opacity-60"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-10 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Column 1: Logo & Socials */}
          <div className="flex flex-col -mt-10 ">
            <div className="flex items-center mb-2">
              <Image 
                src="/Images/logoIcon.png"
                alt="Just Meal Logo"
                width={120}
                height={120}
              />
              <span className="text-white text-4xl font-serif ml-3" style={{ fontFamily: 'cursive' }}>
                Just Meal
              </span>
            </div>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Etiam Quis Felis Malesuada Felis Suscipit Posuere.
            </p>
            <div className="flex gap-3">
              <a href="#" aria-label="Facebook" className="text-white hover:text-[#B08D57] transition-colors duration-300">
                <FaFacebookF size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="text-white hover:text-[#B08D57] transition-colors duration-300">
                <FaInstagram size={20} />
              </a>
              <a href="#" aria-label="X" className="text-white hover:text-[#B08D57] transition-colors duration-300">
                <FaXTwitter size={20} />
              </a>
              <a href="#" aria-label="Tripadvisor" className="text-white hover:text-[#B08D57] transition-colors duration-300">
                <FaTripadvisor size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Contact Info */}
          <div className="ml-20">
            <h3 className="text-white text-2xl font-serif mb-6">Contact Info</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>HelloMeal Restaurant</li>
              <li>(123)-432-4564</li>
              <li>info@gmail.com</li>
              <li>23, 4th Street, Kaluthara, Srilanka</li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="ml-20">
            <h3 className="text-white text-2xl font-serif mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-[#B08D57] transition-colors duration-300">Reservations</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#B08D57] transition-colors duration-300">Who Are We</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#B08D57] transition-colors duration-300">Meals</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#B08D57] transition-colors duration-300">FAQ's</a></li>
            </ul>
          </div>

          {/* Column 4: Opening Hours */}
          <div className="lg:pl-8">
            <h3 className="text-white text-2xl font-serif mb-6">Opening Hours</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>Monday - Friday : 8AM - 10PM</li>
              <li>Saturday : 8AM - 4PM</li>
              <li>Sunday & Public Holidays : Closed</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-20 mt-16 border-t border-white/10">
        <div className="container mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500">
          <p>Justhotels BraiEvo Themes © 2025. All Rights Reserved.</p>
          <p className="mt-4 sm:mt-0">
            Developed By <a href="#" className="hover:text-white transition-colors">barievo.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
