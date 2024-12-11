import React from "react";
import { SectionHeader } from "./SectionHeader";

export default function ExperienceSection() {
  const experience = {
    id: 1,
    title: "Internship | June 2024 - August 2024",
    sub_title: "Web Developer Intern",
    text: [
      "Assisted in the front – end development of their website KOLAB Space, creating responsive and pleasing designs using HTML, CSS and Bootstrap.",
      "Developed the back – end of the admin and user sides of KOLAB Space using PHP, JavaScript, jQuery, and Node.js, handling functions such as user authentication, appointment booking, user management, activity logging, and payment processing.",
    ],
    skills: ["php", "html", "css", "js", "mysql", "jquery", "bootstrap"],
  };

  return (
    <section className="scroll-mt-[4rem] space-y-14" id="experience">
      <SectionHeader title="Experience" />
      <div className="space-y-12">
        <div className="space-y-4">
          <h3>
            {/* Split the title at the '|' */}
            {experience.title.split("|").map((part, partIndex) =>
              partIndex === 0 ? (
                <span key={partIndex}>{`${part} | `}</span>
              ) : (
                <span key={partIndex} style={{ fontStyle: "italic" }}>
                  {part}
                </span>
              )
            )}
          </h3>
          <span className="block opacity-50 !mt-2">{experience.sub_title}</span>
          <ul className="list-disc pl-5">
            {experience.text.map((detail, detailIndex) => (
              <li key={detailIndex}>{detail}</li>
            ))}
          </ul>
          <ul className="flex items-center flex-wrap gap-3">
            {experience.skills.map((skill, skillIndex) => (
              <li
                key={skillIndex}
                className="px-3 py-1.5 rounded-md border border-[#78EF9A]"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
