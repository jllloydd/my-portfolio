"use client";
import React, { useEffect, useRef } from "react";

export default function StarField() {
  const canvasRef = useRef(null);

  //Starfield initialization
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const stars = 200;
    const starColor = "#ffffff";

    // Canvas sizing
    const canvasWidth = window.innerWidth * 1.0;
    const canvasHeight = 500;
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    // Function to draw stars
    function drawStars() {
      for (let i = 0; i < stars; i++) {
        const x = Math.random() * canvasWidth;
        const y = Math.random() * canvasHeight;
        const radius = Math.random() * 2.5;
        context.beginPath();
        context.arc(x, y, radius, 0, Math.PI * 2);
        context.fillStyle = starColor;
        context.fill();
      }
    }

    drawStars();
  }, []);

  return (
    <section
      id="starfield"
      style={{
        position: "relative",
        top: 0,
        right: 0,
        height: "500px",
        zIndex: -5,
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position:'relative',
          display: "block",
          width: "100%",
          height: "100%",
        }}
      />
    </section>
  );
}
