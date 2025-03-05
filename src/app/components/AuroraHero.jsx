"use client";

import React, { useEffect, useState } from "react";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";

// const COLORS_TOP = ["#021C25", "#165A54", "#91DA73", "#69B347", "#23643D", "#022C22"]; other color scheme
// const COLORS_TOP = ["#01efac", "#01cbae", "#2082a6", "#524096", "#5f2a84"]; color scheme 2
const COLORS_TOP = ["#332449", "#8d4f9a", "#30658e", "#bf73d6", "#923979"];

export default function AuroraHero() {
  const color = useMotionValue(COLORS_TOP[0]);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const maxScroll = documentHeight - windowHeight;
      const progress = Math.min(scrollY / maxScroll, 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 30% 75%, transparent 57%, ${color} 75%, transparent 100%)`;

  return (
    <>
      {/* Main background */}
      <div className="fixed inset-0 -z-20 bg-[#020617]" />
      
      {/* Aurora animation */}
      <motion.div
        style={{
          backgroundImage,
          opacity: 1 - scrollProgress,
        }}
        className="fixed inset-0 -z-10"
      />
    </>
  );
}
