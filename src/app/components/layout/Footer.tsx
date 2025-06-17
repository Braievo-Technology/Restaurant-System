import React from 'react';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaTripadvisor } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer: React.FC = () => {
  return (
    // Main footer container with a dark teal background color as a fallback
    <footer className="relative bg-[#0d2e34] text-gray-300 font-sans pt-20">
      
      {/* Background Image and Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/footer-bg.jpg" // <-- REPLACE with your background image path
          alt="Interior of the Just Meal restaurant"
          layout="fill"
          objectFit="cover"
          className="opacity-10" // Low opacity to make it a subtle background texture
        />
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a2024] via-[#0a2024]/95 to-[#0a2024]/90"></div>
      </div>
      
      {/* Decorative Leaves Image (visible on large screens) */}
      <div className="hidden lg:block absolute top-0 right-0 -mt-12 z-10 pointer-events-none">
         <Image
            src="/images/footer-leaves.png" // <-- REPLACE with your decorative leaves image
            alt="Decorative leaves"
            width={300}
            height={300}
            className="opacity-80"
         />
      </div>

      {/* Main Content Container */}
      <div className="relative z-20 container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1: About & Socials */}
          <div className="flex flex-col">
            <div className="flex items-center mb-4">
              <Image 
                src="/assets/Meallogo.png" // <-- REPLACE with your logo image path
                alt="Just Meal Logo" 
                width={50} 
                height={50} 
              />
              {/* Note: The "Just Meal" text uses a custom script font in the image. 
                  You may need to import a font like 'Great Vibes' or similar for an exact match. */}
              <span className="text-white text-4xl font-serif ml-3" style={{ fontFamily: 'cursive' }}>Just Meal</span>
            </div>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Etiam Quis Felis Malesuada Felis Suscipit Posuere.
            </p>
          <div className="flex space-x-[-10px] -ml-3 justify-left`">
  <a
    href="#"
    aria-label="X page"
    className="w-12 h-auto flex items-center justify-center text-white hover:text-[#B08D57] transition-colors duration-300"
  >
    <FaXTwitter />
  </a>
  <a
    href="#"
    aria-label="Facebook page"
    className="w-12 h-auto flex items-center justify-center text-white hover:text-[#B08D57] transition-colors duration-300"
  >
    <FaFacebookF />
  </a>
  <a
    href="#"
    aria-label="Instagram page"
    className="w-12 h-auto flex items-center justify-center text-white hover:text-[#B08D57] transition-colors duration-300"
  >
    <FaInstagram />
  </a>
  <a
    href="#"
    aria-label="TripAdvisor page"
    className="w-12 h-auto flex items-center justify-center text-white hover:text-[#B08D57] transition-colors duration-300"
  >
    <FaTripadvisor />
  </a>
</div>

          </div>

          {/* Column 2: Contact Info */}
          <div>
            <h3 className="text-white text-2xl font-serif mb-6">Contact Info</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>HelloMeal Restaurant</li>
              <li>(123)-432-4564</li>
              <li>info@gmail.com</li>
              <li>23, 4th Street, Kaluthara, Srilanka</li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="text-white text-2xl font-serif mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Reservations</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Who Are We</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Meals</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ's</a></li>
            </ul>
          </div>

          {/* Column 4: Opening Hours */}
          <div className='lg:pl-8'>
            <h3 className="text-white text-2xl font-serif mb-6">Opening Hours</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>Monday - Friday : 8AM -10PM</li>
              <li>Saturday : 8AM - 4PM</li>
              <li>Sunday & Public Holidays : Closed</li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar: Copyright and Credits */}
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