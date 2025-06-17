'use client';

import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import ChefCard from '../components/ui/ChefCard';
import ContactButton from '../components/ui/Button';

interface Step {
  title: string;
  description: string;
  icon?: React.ReactNode; // Optional if you want to add icons later
}

const stepsData: Step[] = [
  {
    title: 'Prepare',
    description: 'Professionals with diverse culinary experience.',
    // icon: <YourIconComponent />, // Add icons if needed
  },
  {
    title: 'Packing',
    description: 'Carefully packaging products to keep them fresh and contents safe.',
  },
  {
    title: 'Deliver',
    description: 'Timely delivery to ensure food arrives fresh directly to customers.',
  },
];

interface StepItemDisplayProps {
  step: Step;
}

const StepItemDisplay: React.FC<StepItemDisplayProps> = ({ step }) => (
  <div className="flex flex-col items-center text-center w-full md:w-auto max-w-xs md:max-w-none px-2 py-6 md:py-0">
    <div className="w-32 h-32 md:w-36 lg:w-40 md:h-36 lg:h-40 rounded-full border-[5px] border-[#CA9C5E] bg-slate-800 flex items-center justify-center mb-6 p-3 shadow-lg">
      <div className="w-16 h-16 md:w-20 md:h-20 text-teal-300">{step.icon}</div>
    </div>
    <h3 className="text-2xl md:text-3xl font-serif text-gray-100 mb-3">{step.title}</h3>
    <p className="text-sm md:text-base text-gray-400 leading-relaxed">{step.description}</p>
  </div>
);

const DashedLineConnector: React.FC = () => (
  <div className="hidden md:flex items-center justify-center flex-shrink-0 mx-4 lg:mx-6 xl:mx-8 w-16 lg:w-20 xl:w-24">
    <div className="w-[300px] border-t-4 border-dashed border-gray-600 opacity-70 -mt-30" />
  </div>
);

const ProcessSteps: React.FC = () => (
  <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl mx-auto">
    {stepsData.map((step, index) => (
      <React.Fragment key={step.title}>
        <StepItemDisplay step={step} />
        {index < stepsData.length - 1 && <DashedLineConnector />}
      </React.Fragment>
    ))}
  </div>
);

const HeroSection: React.FC = () => {
  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // You can add your contact logic here, e.g., open modal or navigate
    alert('Contact button clicked!');
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center text-white px-4 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://plus.unsplash.com/premium_photo-1661432769134-758550b8fedb?fm=jpg&q=60&w=3000"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-80" />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-[80px] font-regular drop-shadow-lg font-sans">About Us</h1>
        </div>
      </section>

      {/* About Section Left Image */}
      <section className="bg-[#0B1517] font-sans text-brand-light py-20 sm:py-28">
        <div className="container mx-auto px-4">
          <SectionTitle title="A Taste Of Our Space" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <p className="text-base md:text-lg leading-relaxed text-gray-300 mb-6">
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
                piece of classical Latin literature from 45 BC. Contrary to popular belief, Lorem Ipsum
                is not simply random text. It has roots in a piece of classical Latin literature from
                45 BC. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
                in a piece of classical Latin literature from 45 BC.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-gray-300">
                It has survived not only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end px-4 mt-8 lg:mt-0">
              <div className="relative w-full max-w-lg sm:max-w-xl">
                <div className="absolute top-6 -right-6 w-full h-full border-[4px] border-[#CA9C5E] rounded"></div>
                <div className="relative z-10 p-2 bg-brand-blue rounded">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1661432769134-758550b8fedb?fm=jpg&q=60&w=3000"
                    alt="Restaurant background"
                    className="w-full h-auto object-cover rounded"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section Right Image */}
      <section className="bg-[#0B1517] font-sans text-brand-light py-20 sm:py-28">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
            <div className="flex justify-center lg:justify-start px-4 mt-8 lg:mt-0">
              <div className="relative w-full max-w-lg sm:max-w-xl">
                <div className="relative z-10 p-2 bg-brand-blue rounded">
                  <img
                    src="https://cdn3d.iconscout.com/3d/premium/thumb/meal-3d-icon-download-in-png-blend-fbx-gltf-file-formats--delicious-logo-fast-food-junk-pizza-slice-pack-drink-icons-6169043.png"
                    alt="3D Meal Icon"
                    className="w-full h-auto object-cover rounded"
                  />
                </div>
              </div>
            </div>
            <div className="text-center lg:text-right">
              <p className="text-base md:text-lg leading-relaxed text-gray-300 mb-6">
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
                piece of classical Latin literature from 45 BC. Contrary to popular belief, Lorem Ipsum
                is not simply random text. It has roots in a piece of classical Latin literature from
                45 BC.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-gray-300">
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Steps */}
      <section className="bg-[#0B1517] py-20 sm:py-28">
        <div className="container mx-auto px-4">
          <SectionTitle title="Our Process" />
          <div className="flex justify-center mt-10">
            <ProcessSteps />
          </div>
        </div>
      </section>

      {/* Chef Card Section */}
      <section className="bg-[#0B1517] font-sans text-brand-light py-20 sm:py-28">
        <div className="container mx-auto px-4">
          <SectionTitle title="Meet Our Chef" />
          <div className="flex flex-wrap justify-center gap-8 mt-10">
            <ChefCard
              name="Chef Suranga"
              imageUrl="https://snibbs.co/cdn/shop/articles/Pros_and_Cons_of_Being_a_Chef.jpg?v=1688650492"
              socials={{
                facebook: 'https://facebook.com/chef-alex',
                instagram: 'https://instagram.com/chef-alex',
                linkedin: 'https://linkedin.com/in/chef-alex',
              }}
            />
            <ChefCard
              name="Chef Namal"
              imageUrl="https://snibbs.co/cdn/shop/articles/Pros_and_Cons_of_Being_a_Chef.jpg?v=1688650492"
              socials={{
                facebook: 'https://facebook.com/chef-alex',
                instagram: 'https://instagram.com/chef-alex',
                linkedin: 'https://linkedin.com/in/chef-alex',
              }}
            />
            <ChefCard
              name="Chef Kaveeja"
              imageUrl="https://snibbs.co/cdn/shop/articles/Pros_and_Cons_of_Being_a_Chef.jpg?v=1688650492"
              socials={{
                facebook: 'https://facebook.com/chef-alex',
                instagram: 'https://instagram.com/chef-alex',
                linkedin: 'https://linkedin.com/in/chef-alex',
              }}
            />
            <ChefCard
              name="Chef Anura"
              imageUrl="https://snibbs.co/cdn/shop/articles/Pros_and_Cons_of_Being_a_Chef.jpg?v=1688650492"
              socials={{
                facebook: 'https://facebook.com/chef-alex',
                instagram: 'https://instagram.com/chef-alex',
                linkedin: 'https://linkedin.com/in/chef-alex',
              }}
            />
          </div>
        </div>
      </section>

      {/* Contact Call to Action */}
      <section className="bg-[#0B1517] py-20 sm:py-28">
        <div className="bg-[#0B1517] border-[4px] sm:border-[8px] md:border-[10px] border-[#B08D57] p-10 sm:p-16 md:p-20 lg:p-24 w-[75vw]  text-center shadow-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-[#E0D6C8] mb-2 sm:mb-3 md:mb-4 leading-snug sm:leading-normal">
            Let's Make Your Next Dining Experience Unforgettable
          </h2>
          <ContactButton onClick={handleContactClick} text="CONTACT US" ariaLabel="Contact Us" />
        </div>
      </section>
    </>
  );
};

export default HeroSection;
