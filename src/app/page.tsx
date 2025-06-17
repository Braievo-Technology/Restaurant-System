import Image from "next/image";
import HeroSection from "./components/hero/HeroSection";
import AboutSection from "./components/sections/AboutSection";

export default function Home() {
  return (
    <div className="h-screen w-full">
      <div>
        <HeroSection />
      </div>
      <div>
        <AboutSection />
      </div>
    </div>
  );
}
