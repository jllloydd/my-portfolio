"use client";
import Link from "next/link";
import Image from "next/image";
import tt1 from "../../../public/projectscreenshots/tt1.PNG";
import tt2 from "../../../public/projectscreenshots/tt2.PNG";
import steady1 from "../../../public/projectscreenshots/steady1.jpg";
import steady2 from "../../../public/projectscreenshots/steady2.jpg";
import steady3 from "../../../public/projectscreenshots/steady3.jpg";
import ucgc1 from "../../../public/projectscreenshots/ucgc1.PNG";
import ucgc2 from "../../../public/projectscreenshots/ucgc2.PNG";
import ucgc3 from "../../../public/projectscreenshots/ucgc3.PNG";
import ucgc4 from "../../../public/projectscreenshots/ucgc4.PNG";
import peng from "../../../public/projectscreenshots/peng.PNG";
import React, { useState, useEffect } from "react";
import github from "../../../public/icons/github.svg";
import projectlink from "../../../public/icons/projectlink.svg";

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      name: "Technical Task 1",
      description:
        "A technical task that was given to me during my internship at BLINC Technologies Corporation.",
      techStack: ["bootstrap", "html", "css", "js"],
      images: [tt1],
      link: "https://jllloydd.github.io/BLIP-Activities/",
      github: "https://github.com/jllloydd/BLIP-Activities",
    },
    {
      id: 2,
      name: "Technical Task 2",
      description:
        "Another technical task that was given to me during my internship at BLINC Technologies Corporation.",
      techStack: ["bootstrap", "html", "css", "js"],
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
      id: 4,
      name: "UCGC",
      description:
        "A web application geared towards communication between University of the Cordilleras' students and guidance counselors. It features chat, booking, real-time email notification, and authentication systems, aiming to digitize the counseling process.",
      techStack: ["laravel", "tailwindcss", "js", "php", "mysql", "html"],
      images: [ucgc1, ucgc2, ucgc3, ucgc4],
      github: "https://github.com/jllloydd/UCGC-Laravel-10",
    },
    {
      id: 5,
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
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState("");
  const [imageAnimationClass, setImageAnimationClass] = useState("");

  useEffect(() => {
    const imageCount = projects[activeProjectIndex].images.length;
    if (imageCount > 1) {
      const interval = setInterval(() => {
        setImageAnimationClass("image-slide-out-left");
        setTimeout(() => {
          setActiveImageIndex((prevIndex) => (prevIndex + 1) % imageCount);
          setImageAnimationClass("image-slide-in-right");
        }, 700);
      }, 4000);
      return () => clearInterval(interval);
    } else {
      // Reset animation class and image index if there's only one image
      setImageAnimationClass("");
      setActiveImageIndex(0);
    }
  }, [activeProjectIndex, activeImageIndex]);

  const handleNextProject = () => {
    setAnimationClass("slide-out-left");
    setTimeout(() => {
      setActiveProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
      setActiveImageIndex(0); // Reset image index for new project
      setAnimationClass("slide-in-right");
    }, 300);
  };

  const handlePreviousProject = () => {
    setAnimationClass("slide-out-right");
    setTimeout(() => {
      setActiveProjectIndex((prevIndex) =>
        prevIndex === 0 ? projects.length - 1 : prevIndex - 1
      );
      setActiveImageIndex(0); // Reset image index for new project
      setAnimationClass("slide-in-left");
    }, 300);
  };

  const activeProject = projects[activeProjectIndex];

  return (
    <section className="space-y-14 scroll-mt-[4rem]" id="projects">
      <div className="hidden show-on-small items-center gap-2">
        <h1 className="font-bold text-2xl space-x-2">
          <span className="inline-block">Projects</span>
        </h1>
      </div>
      <div className="flex justify-center items-center space-x-4">
        <button
          onClick={handlePreviousProject}
          type="button"
          className="text-greenthingy focus:outline-none font-medium rounded-md text-sm p-2.5 text-center inline-flex items-center me-2 transform transition-transform duration-300 hover:scale-110"
        >
          <svg
            className="w-4 h-4 transform rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
          <span className="sr-only">Icon description</span>
        </button>
        <div
          className={`flex flex-col items-center space-y-4 ${animationClass}`}
          id="projectDisplay"
        >
          <h3 className="text-2xl font-bold">{activeProject.name}</h3>
          <p className="text-lg text-justify">{activeProject.description}</p>
          <div className="rounded-lg">
            <Image
              src={activeProject.images[activeImageIndex]}
              width={activeProject.name === "STEADY" ? 200 : 600}
              height={activeProject.name === "STEADY" ? 400 : 400}
              alt={activeProject.name}
              className={imageAnimationClass}
            />
          </div>
          <ul className="flex items-center flex-wrap gap-3 mt-4">
            {activeProject.techStack.map((tech, index) => (
              <li
                key={index}
                className="px-3 py-1.5 rounded-md border border-[#01efac]"
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
                className="transform transition-transform duration-300 hover:scale-110"
              >
                <Image
                  src={projectlink}
                  width={32}
                  height={32}
                  alt="live demo link"
                />
              </Link>
            )}
            {activeProject.github && (
              <Link
                href={activeProject.github}
                target="_blank"
                className="transform transition-transform duration-300 hover:scale-110"
              >
                <Image src={github} width={32} height={32} alt="github icon" />
              </Link>
            )}
            {activeProject.figma && (
              <Link href={activeProject.figma} target="_blank">
                Figma
              </Link>
            )}
          </div>
        </div>
        <button
          onClick={handleNextProject}
          type="button"
          className="text-greenthingy focus:outline-none font-medium rounded-md text-sm p-2.5 text-center inline-flex items-center me-2 transform transition-transform duration-300 hover:scale-110"
        >
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
          <span className="sr-only">Icon description</span>
        </button>
      </div>
    </section>
  );
}
