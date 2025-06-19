
import HeroSection from "./components/hero/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import FoodCategory from "./components/sections/FoodCategories";
import ChefSection from "./components/sections/ChefSection";
import { StatsSection } from "./components/sections/StatsSection";
import EnvironmentSection from "./components/sections/EnvironmentSection";
import GallerySection from "./components/sections/GallerySection";

export default function Home() {
  return (
    <div className="h-screen w-full">
      <div>
        <HeroSection />
      </div>
      <div>
        <AboutSection />
      </div>
      <div>
        <FoodCategory />
      </div>
      <div>
        <ChefSection />
      </div>
      <div>
        <StatsSection />
      </div>
      <div>
        <EnvironmentSection />
      </div>
      <div>
        <GallerySection />
      </div>
    </div>
  );
}
