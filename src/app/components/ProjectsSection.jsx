"use client";
import Link from "next/link";
import Image from "next/image";
import tt1 from "../../../public/projectscreenshots/tt1.png";
import tt2 from "../../../public/projectscreenshots/tt2.png";
import steady1 from "../../../public/projectscreenshots/steady1.jpg";
import steady2 from "../../../public/projectscreenshots/steady2.jpg";
import steady3 from "../../../public/projectscreenshots/steady3.jpg";
import ucgc1 from "../../../public/projectscreenshots/ucgc1.png";
import ucgc2 from "../../../public/projectscreenshots/ucgc2.png";
import ucgc3 from "../../../public/projectscreenshots/ucgc3.png";
import ucgc4 from "../../../public/projectscreenshots/ucgc4.png";
import peng from "../../../public/projectscreenshots/peng.png";
import React, { useState } from "react";

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      name: "Technical Task 1",
      description:
        "A technical task that was given to me during my internship at BLINC Technologies Corporation.",
      techStack: ["bootstrap", "html", "scss", "css", "js"],
      images: [tt1],
      link: "https://jllloydd.github.io/BLIP-Activities/",
      github: "https://github.com/jllloydd/BLIP-Activities",
    },
    {
      id: 2,
      name: "Technical Task 2",
      description:
        "Another technical task that was given to me during my internship at BLINC Technologies Corporation.",
      techStack: ["bootstrap", "html", "scss", "css", "js"],
      images: [tt2],
      link: "https://jllloydd.github.io/task2/",
      github: "https://github.com/jllloydd/task2",
    },
    {
      id: 3,
      name: "STEADY",
      description:
        "An android application featuring map navigation, news integration, and statistics for landslides and earthquakes around Baguio City.",
      techStack: ["xml", "kotlin", "java"],
      images: [steady1, steady2, steady3],
      github: "https://github.com/jllloydd/STEADY",
    },
    {
      id: 3,
      name: "UCGC",
      description:
        "A web application geared towards communication between University of the Cordilleras' students and guidance counselors. It features chat, booking,, real-time email notification, and authentication systems, aiming to digitize the counseling process.",
      techStack: ["laravel", "tailwindcss", "js", "php", "mysql"],
      images: [ucgc1, ucgc2, ucgc3, ucgc4],
      github: "https://github.com/jllloydd/UCGC-Laravel-10",
    },
    {
      id: 4,
      name: "Penguin Animation",
      description:
        "A simple animation of a penguin using HTML, CSS, and JavaScript, made as an activity for my Web Development class.",
      techStack: ["html", "css", "js"],
      images: [peng],
      link: "https://jllloydd.github.io/penguin/",
      github: "https://github.com/jllloydd/penguin",
    },
  ];

  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState("");

  const handleNextProject = () => {
    setAnimationClass("slide-out-left");
    setTimeout(() => {
      setActiveProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
      setAnimationClass("slide-in-right");
    }, 300);
  };

  const handlePreviousProject = () => {
    setAnimationClass("slide-out-right");
    setTimeout(() => {
      setActiveProjectIndex((prevIndex) =>
        prevIndex === 0 ? projects.length - 1 : prevIndex - 1
      );
      setAnimationClass("slide-in-left");
    }, 300);
  };

  const activeProject = projects[activeProjectIndex];

  return (
    <section className="space-y-14 scroll-mt-[4rem]" id="projects">
      <div className="flex justify-center items-center space-x-4">
        <button onClick={handlePreviousProject}>&lt;</button>
        <div
          className={`flex flex-col items-center space-y-4 ${animationClass}`}
          id="projectDisplay"
        >
          <h3 className="text-2xl font-bold">{activeProject.name}</h3>
          <p className="text-lg text-justify">{activeProject.description}</p>
          <Image
            src={activeProject.images[0]} // Main image
            width={activeProject.name === "STEADY" ? 200 : 600}
            height={activeProject.name === "STEADY" ? 400 : 400}
            alt={activeProject.name}
            className="rounded-lg"
          />
          <ul className="flex items-center flex-wrap gap-3 mt-4">
            {activeProject.techStack.map((tech, index) => (
              <li
                key={index}
                className="px-3 py-1.5 rounded-md border border-[#012496]"
              >
                {tech}
              </li>
            ))}
          </ul>
          <div className="flex gap-2 mt-4">
            {activeProject.link && (
              <Link
                href={activeProject.link}
                target="_blank"
                className="text-blue-500"
              >
                Live Demo
              </Link>
            )}
            {activeProject.github && (
              <Link
                href={activeProject.github}
                target="_blank"
                className="text-blue-500"
              >
                GitHub
              </Link>
            )}
            {activeProject.figma && (
              <Link
                href={activeProject.figma}
                target="_blank"
                className="text-blue-500"
              >
                Figma
              </Link>
            )}
          </div>
        </div>
        <button onClick={handleNextProject}>&gt;</button>
      </div>
    </section>
  );
}
