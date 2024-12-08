"use client";

import Link from "next/link";
import React, { useMemo, useState, useEffect } from "react";

export default function Greeting() {
  const navItems = useMemo(
    () => [
      { no: "01", id: "about", text: "About" },
      { no: "02", id: "experience", text: "Experience" },
      { no: "03", id: "projects", text: "Projects" },
    ],
    []
  );

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

  return (
    <aside className="md:fixed left-0 top-0 md:h-screen max-md:mb-20 z-30 md:flex items-center justify-center xl:pl-24 lg:pl-20 md:pl-16 pl-10 max-xl:w-96 max-md:w-full">
      <div className="space-y-12">
        <div className="space-y-4">
          {isProjectsSection ? (
            <>
              <h1 className="sm:text-5xl text-2xl font-bold">Projects</h1>{" "}
              <p className="text-sm sm:text-base sm:w-[384px]">
                {" "}
                Here are some of the projects I've made!{" "}
              </p>
            </>
          ) : (
            <>
              <span className="sm:space-y-5 space-y-3">Hello! My name is</span>
              <div className="sm:space-y-5 space-y-3">
                <h1 className="sm:text-5xl text-2xl font-bold">John Lloyd</h1>
                <h4 className="bg-[#012496] px-2 sm:py-1 py-0.5 inline-block text-[#ffffff] font-semibold uppercase text-sm">
                  Web Developer
                </h4>
                <p className="text-sm sm:text-base sm:w-[384px]">
                  I'm an aspiring web developer with a passion for creating
                  user-friendly and efficient web applications, born and raised
                  in the City of Baguio, Philippines.
                </p>
              </div>
            </>
          )}
          <ul
            className={`space-y-2 md:block ${
              isProjectsSection ? "flex justify-around" : "hidden"
            }`}
          >
            {navItems.map((item, index) => (
              <li
                key={index}
                className={`${
                  item.id === activeSection ? "text-[#012496] scale-110" : ""
                }`}
              >
                <Link
                  href={`#${item.id}`}
                  className={`flex items-center gap-3 text-[#012496] ${
                    item.id === activeSection ? "text-[#012496]" : ""
                  }`}
                >
                  <span>{item.no}</span>
                  <span
                    className={`inline-block h-0.5 w-12  ${
                      item.id === activeSection
                        ? "bg-[#012496]"
                        : "bg-[#012496]"
                    }`}
                  ></span>
                  <span>{item.text}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {!isProjectsSection && (
          <div className="space-y-7">
            <div className=" tracking-[0.2em]">jlloydgdg@gmail.com</div>
            <div>
              <Link
                href="resume/Resume(Gatudan).pdf"
                target="_blank"
                className="px-4 py-2 border-[#012496] border rounded-md md:inline-block hidden"
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
