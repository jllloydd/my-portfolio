"use client";

import React, { useEffect } from "react";
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

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 30% 75%, #020617 57%, ${color} 75%, transparent 100%)`;

  return (
    <motion.div
      style={{
        backgroundImage,
      }}
      className="fixed inset-0 -z-10"
    />
  );
}
