"use client";

import Link from "next/link";
import React, { useMemo, useState, useEffect } from "react";
import github from "../../../public/icons/github.svg";
import facebook from "../../../public/icons/facebook.svg";
import linkedin from "../../../public/icons/linkedin.svg";
import instagram from "../../../public/icons/instagram.svg";
import Image from "next/image";
export default function Greeting() {
  const navItems = useMemo(
    () => [
      { no: "01", id: "about", text: "About" },
      { no: "02", id: "experience", text: "Experience" },
      { no: "03", id: "projects", text: "Projects" },
    ],
    []
  );

  const socials = [
    {
      id: 1,
      icon: github,
      alt: "github icon",
      link: "https://github.com/jllloydd",
    },
    {
      id: 2,
      icon: facebook,
      alt: "facebook icon",
      link: "https://www.facebook.com/jlloydd",
    },
    {
      id: 3,
      icon: instagram,
      alt: "instagram icon",
      link: "https://www.instagram.com/janllong/",
    },
    {
      id: 4,
      icon: linkedin,
      alt: "linkedin icon",
      link: "https://www.linkedin.com/in/john-lloyd-de-guzman-312300306/",
    },
  ];

  const [activeSection, setActiveSection] = useState(null);
  const [isProjectsSection, setIsProjectsSection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      const projectsSection = document.getElementById("projects");

      // Determine if the Projects section is in view
      if (projectsSection) {
        const { top, bottom } = projectsSection.getBoundingClientRect();
        setIsProjectsSection(
          top <= viewportHeight / 2 && bottom >= viewportHeight / 2
        );
      }

      // Determine which section is currently active
      const sections = navItems
        .map((item) => {
          const sectionElement = document.getElementById(item.id);
          if (sectionElement) {
            const { top, height } = sectionElement.getBoundingClientRect();
            return {
              id: item.id,
              top,
              bottom: top + height,
            };
          }
          return null;
        })
        .filter((section) => section !== null);

      for (let i = sections.length - 1; i >= 0; i--) {
        const { top, bottom } = sections[i];
        if (top <= viewportHeight / 2 && bottom >= viewportHeight / 2) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navItems]);

  const handleNavItemClick = (id) => {
    const sectionElement = document.getElementById(id);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <aside className="md:fixed left-0 top-0 md:h-screen max-md:mb-20 z-30 md:flex items-center justify-center xl:pl-24 lg:pl-20 md:pl-16 pl-10 max-xl:w-96 max-md:w-full">
      <div className="space-y-12">
        <div className="space-y-4">
          <div
            className={`transition-all duration-1000 ease-in-out ${
              isProjectsSection
                ? "transform translate-y-0 opacity-100 space-y-4"
                : "transform -translate-y-full opacity-0"
            }`}
          >
            {isProjectsSection && (
              <>
                <h1 className="sm:text-5xl text-2xl font-bold">Projects</h1>
                <p className="text-sm sm:text-base sm:w-[384px]">
                  Here are some of the projects I've made!
                </p>
              </>
            )}
          </div>
          <div
            className={`transition-all duration-1000 ease-in-out ${
              !isProjectsSection
                ? "transform translate-y-0 opacity-100"
                : "transform translate-y-full opacity-0"
            }`}
          >
            {!isProjectsSection && (
              <>
                <span className="sm:space-y-5 space-y-3">
                  Hello! My name is
                </span>
                <div className="sm:space-y-5 space-y-3">
                  <h1 className="sm:text-5xl text-2xl font-bold">John Lloyd</h1>
                  <h4 className="bg-[#01efac] px-2 sm:py-1 py-0.5 inline-block text-[#000000] font-bold uppercase text-sm">
                    Web Developer
                  </h4>
                  <p className="text-sm sm:text-base sm:w-[384px]">
                    I'm an aspiring web developer with a passion for creating
                    user-friendly and efficient web applications, born and
                    raised in the City of Baguio, Philippines. Currently living in Marikina City.
                  </p>
                </div>
              </>
            )}
          </div>
          <ul
            className={`space-y-2 md:block ${
              isProjectsSection ? "flex justify-around" : "hidden"
            }`}
          >
            {navItems.map((item, index) => (
              <li
                key={index}
                className={`${
                  item.id === activeSection ? "text-[#01efac] scale-110" : ""
                }`}
              >
                <a
                  onClick={() => handleNavItemClick(item.id)}
                  className={`flex items-center gap-3 text-[#01efac] cursor-pointer ${
                    item.id === activeSection ? "text-[#01efac]" : ""
                  }`}
                >
                  <span>{item.no}</span>
                  <span
                    className={`inline-block h-0.5 w-12  ${
                      item.id === activeSection
                        ? "bg-[#01efac]"
                        : "bg-[#01efac]"
                    }`}
                  ></span>
                  <span>{item.text}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {!isProjectsSection && (
          <div className="space-y-2">
            <ul className="flex gap-2">
              {socials.map(
                (social) =>
                  social.id !== 5 && (
                    <li
                      key={social.id}
                      className="transform transition-transform duration-300 hover:scale-110"
                    >
                      <Link href={social.link} target="_blank">
                        <Image
                          src={social.icon}
                          width={32}
                          height={32}
                          alt={social.alt}
                        />
                      </Link>
                    </li>
                  )
              )}
            </ul>
            <div className="font-bold tracking-[0.1em]">
              jlloydgdg@gmail.com | +639946598770
            </div>
            <div>
              <Link
                href="resume/Resume (De Guzman).pdf"
                target="_blank"
                className="px-4 py-2 font-bold border-[#01efac] border rounded-md md:inline-block hidden hover:bg-[#01efac] hover:text-[#000000]"
              >
                View Resume
              </Link>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}
