"use client";
import React, { useEffect, useRef } from "react";

export default function StarField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const stars = 200; // Number of stars
    const starColor = "#ffffff"; // Color of the stars

    // Set canvas size
    const canvasWidth = window.innerWidth * 1.0; // 60% of the window width
    const canvasHeight = 500; // Adjust height as needed
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    // Function to draw stars
    function drawStars() {
      for (let i = 0; i < stars; i++) {
        const x = Math.random() * canvasWidth;
        const y = Math.random() * canvasHeight;
        const radius = Math.random() * 2.5; // Random radius for stars
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
        position: "relative", // Ensure the section is positioned correctly
        top: 0,
        right: 0,
        height: "500px", // Adjust height as needed
        zIndex: -5, // Ensure it is behind other elements
        overflow: "hidden", // Hide any overflow
        boxSizing: "border-box", // Include padding and border in the element's total width and height
      }}
    >
      <canvas 
        ref={canvasRef} 
        style={{
          display: "block", // Remove any default inline styling
          width: "100%", // Ensure the canvas takes full width of the section
          height: "100%", // Ensure the canvas takes full height of the section
        }}
      />
    </section>
    
  );
}