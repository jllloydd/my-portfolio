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
import portfolio from "../../../public/projectscreenshots/portfolio.PNG";
import peng from "../../../public/projectscreenshots/peng.PNG";
import blog0 from "../../../public/projectscreenshots/blog1.PNG";
import blog1 from "../../../public/projectscreenshots/blog1.PNG";
import blog2 from "../../../public/projectscreenshots/blog2.PNG";
import blog3 from "../../../public/projectscreenshots/blog3.PNG";
import React, { useState, useEffect } from "react";
import github from "../../../public/icons/github.svg";
import projectlink from "../../../public/icons/projectlink.svg";

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      name: "Portfolio",
      description:
        "My personal portfolio website, created using Next.js, Tailwind CSS, and React.js.",
      techStack: ["react.js", "html", "tailwindcss", "next.js"],
      images: [portfolio],
      link: "https://jlloydgdg.vercel.app/",
      github: "https://github.com/jllloydd/my-portfolio",
    },
    {
      id: 2,
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
        "A web application geared towards communication between University of the Cordilleras' students and guidance counselors. It features chat, booking, real-time email notification, and authentication systems, aiming to digitize the counseling process.",
      techStack: ["laravel", "tailwindcss", "js", "php", "mysql", "html"],
      images: [ucgc1, ucgc2, ucgc3, ucgc4],
      github: "https://github.com/jllloydd/UCGC-Laravel-10",
    },
    {
      id: 4,
      name: "Forum",
      description:
        "A simple forum website, made as a study on Svelte and Supabase backend integration.",
      techStack: ["html", "css", "js", "svelte", "supabase"],
      images: [blog0, blog1, blog2, blog3],
      link: "https://jllloydd.github.io/svelte-blog/",
      github: "https://github.com/jllloydd/svelte-blog",
    },
    {
      id: 5,
      name: "Technical Task 1",
      description:
        "A technical task that was given to me during my internship at BLINC Technologies Corporation.",
      techStack: ["bootstrap", "html", "css", "js"],
      images: [tt1],
      link: "https://jllloydd.github.io/BLIP-Activities/",
      github: "https://github.com/jllloydd/BLIP-Activities",
    },
    {
      id: 6,
      name: "Technical Task 2",
      description:
        "Another technical task that was given to me during my internship at BLINC Technologies Corporation.",
      techStack: ["bootstrap", "html", "css", "js"],
      images: [tt2],
      link: "https://jllloydd.github.io/task2/",
      github: "https://github.com/jllloydd/task2",
    },
    {
      id: 7,
      name: "Penguin Animation",
      description:
        "A simple animation of a penguin using HTML, CSS, and JavaScript, made as an activity for my Web Development class.",
      techStack: ["html", "css", "js"],
      images: [peng],
      link: "https://jllloydd.github.io/penguin/",
      github: "https://github.com/jllloydd/penguin",
    },
  ];

  return (
    <section className="space-y-14 scroll-mt-[4rem]" id="projects">
      <div className="hidden show-on-small items-center gap-2">
        <h1 className="font-bold text-2xl space-x-2">
          <span className="inline-block">Projects</span>
        </h1>
      </div>
      <div className="flex flex-col space-y-20">
        {projects.map((project) => (
          <div key={project.id} className="flex flex-col items-center space-y-4">
            <h3 className="text-2xl font-bold">{project.name}</h3>
            <p className="text-lg text-justify">{project.description}</p>
            <div className={`grid gap-4 ${
              project.images.length === 1 ? 'w-full' : 
              project.images.length === 2 || project.images.length === 4 ? 'grid-cols-1 md:grid-cols-2' : 
              'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
            }`}>
              {project.images.map((image, index) => (
                <div key={index} className={`rounded-lg ${
                  project.images.length === 1 ? 'w-full' : ''
                }`}>
                  <Image
                    src={image}
                    width={project.name === "STEADY" ? 200 : 
                          (project.id === 5 ? 600 : 
                          (project.images.length === 1 ? 1200 : 600))}
                    height={project.name === "STEADY" ? 400 : 400}
                    alt={`${project.name} screenshot ${index + 1}`}
                    className={`rounded-lg ${project.images.length === 1 ? 'w-full' : ''}`}
                  />
                </div>
              ))}
            </div>
            <ul className="flex items-center flex-wrap gap-3 mt-4">
              {project.techStack.map((tech, index) => (
                <li
                  key={index}
                  className="px-3 py-1.5 rounded-md border border-[#01efac]"
                >
                  {tech}
                </li>
              ))}
            </ul>
            <div className="flex gap-2 mt-4">
              {project.link && (
                <Link
                  href={project.link}
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
              {project.github && (
                <Link
                  href={project.github}
                  target="_blank"
                  className="transform transition-transform duration-300 hover:scale-110"
                >
                  <Image src={github} width={32} height={32} alt="github icon" />
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
