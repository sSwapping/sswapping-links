"use client";
import React, { useEffect, useRef } from "react";

const MatrixRaining = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return; // Safety check
    const ctx = canvas.getContext("2d");
    if (!ctx) return; // Safety check

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let columns = Math.floor(width / 20); // Adjusted for spacing between columns
    const characters = "qwertyuiopasdfghjklzxcvbnm1234567890@#$%&";
    const charArray = characters.split("");
    let drops: number[] = Array(columns).fill(0);

    // let frameRate = 30;
    // let lastFrameTime = Date.now();

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = "#0F0";
      ctx.font = "20px monospace";

      for (let i = 0; i < drops.length; i++) {
        const text = charArray[Math.floor(Math.random() * charArray.length)];
        ctx.fillText(text, i * 20, drops[i] * 20);

        if (drops[i] * 20 > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };
  });
};

export default MatrixRaining;
