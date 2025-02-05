"use client";
import React, { useEffect, useRef, useState } from "react";

const useThemeDetector = () => {
  // Helper function to check if the user's system prefers dark mode
  const getCurrentTheme = (): boolean =>
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(getCurrentTheme());

  // Initialize the state with the current theme preference (dark or light)
  const mqListener = (e: MediaQueryListEvent) => {
    setIsDarkTheme(e.matches);
  };

  useEffect(() => {
    // Create a MediaQueryList object for detecting theme changes
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    // Attach the event listener for theme changes
    darkThemeMq.addEventListener("change", mqListener);
    // Cleanup function to remove the event listener when the component unmounts
    return () => darkThemeMq.removeEventListener("change", mqListener);
  }, []);

  // Return the current theme state (true for dark mode, false for light mode)
  return isDarkTheme;
};

const MatrixRaining = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const isDark = useThemeDetector();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return; // Safety check
    const ctx = canvas.getContext("2d");
    if (!ctx) return; // Safety check

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let columns = Math.floor(width / 1);
    const characters =
      "きゅだえるとやういおぷあすどふぐはじけるずくしぶべんむ四五六七八九零あっとしゃぷどるぱーせんとあんど";
    const charArray = characters.split("");
    let drops: number[] = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    const frameRate = 30;
    let lastFrameTime = Date.now();

    // Function to draw the matrix rain effect
    const draw = () => {
      ctx.fillStyle = "rgba(10, 10, 10, 0.04)";
      ctx.fillRect(0, 0, width, height);

      if (isDark) {
        ctx.fillStyle = "#525252";
      } else {
        ctx.fillStyle = "#0f0";
      }


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

    // Animation loop using requestAnimationFrame
    const animate = () => {
      const currentTime = Date.now();
      const ellapsedTime = currentTime - lastFrameTime;

      if (ellapsedTime > 1000 / frameRate) {
        draw();
        lastFrameTime = currentTime;
      }

      requestAnimationFrame(animate);
    };

    animate();

    // Function to handle window resizing
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      columns = Math.floor(width / 20);
      drops = [];
      for (let i = 0; i < columns; i++) {
        drops[i] = 1;
      }
    };

    // Window Resizing to prevent issue's on mobile
    const isMobileDevice = /Mobi/i.test(window.navigator.userAgent);
    if (!isMobileDevice) {
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (!isMobileDevice) {
        window.removeEventListener("resize", handleResize);
      }
    };
  });

  return (
    <canvas className='fixed matrix-canvas -z-10' ref={canvasRef}></canvas>
  );
};

export default MatrixRaining;
