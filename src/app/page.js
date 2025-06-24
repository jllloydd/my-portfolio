import Image from "next/image";
import "./globals.css";
import Greeting from "./components/Greeting.jsx";
import AboutSection from "./components/AboutSection.jsx";
import ExperienceSection from "./components/ExperienceSection.jsx";
import ProjectsSection from "./components/ProjectsSection.jsx";
import AuroraHero from "./components/AuroraHero.jsx";
import StarField from "./components/StarField.jsx";
import MobileSocials from "./components/MobileSocials.jsx";

export default function Home() {
  return (
    <main className="xl:p-24 lg:p-20 md:p-16 sm:p-12 p-8 overflow-y-hidden relative">
      <Greeting />
      <div className="space-y-32 xl:w-[calc(100vw-700px)] relative z-20 lg:w-[calc(100vw-600px)] md:w-[calc(100vw-500px)] ml-auto">
        <StarField />
        <ExperienceSection />
        <ProjectsSection />
      </div>
      <AuroraHero />
      <MobileSocials />
    </main>
  );
}
