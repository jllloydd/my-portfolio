import React from "react";
import { SectionHeader } from "./SectionHeader";

export default function AboutSection() {
  return (
    <section id="about" className="space-y-14 scroll-mt[4rem]">
      <SectionHeader title="About Me" />
      <div className="space-y-6">
        <p>
          Growing up, my passion was always geared towards technology and art.
          I'd often spend my time drawing or fiddling around my father's old
          laptop and phone. As I grew older, I found myself pursuing a degree in
          Web Development, as both my passions and skills aligned with the
          field.
        </p>
        <p>
          Throughout college and my internship at BLINC Technologies
          Corporation, I was able to gain extensive experience in different
          languages and frameworks related to web development, such as HTML,
          CSS, JavaScript, React.js, Node.js, Next.js, Laravel, PHP, and MySQL.
          I also gained experience in creating android applications using
          Android Studio.
        </p>
        <p>
          In my spare time, I like to keep up with the latest technologies,
          frameworks, and trends in web development. My hobbies include playing
          videogames, watching horror movies, drawing, taking walks or hikes,
          listening to music and spending time with my loved ones.
        </p>
      </div>
    </section>
  );
}
