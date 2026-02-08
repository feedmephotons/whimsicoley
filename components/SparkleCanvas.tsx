"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  opacitySpeed: number;
  color: string;
}

export default function SparkleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const colors = [
      "rgba(201, 169, 78, 1)",    // Antique gold
      "rgba(212, 182, 106, 1)",   // Light gold
      "rgba(255, 255, 255, 1)",   // White
      "rgba(245, 236, 215, 1)",   // Cream
    ];

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.offsetWidth;
        canvas.height = parent.offsetHeight;
      }
    };

    const createParticle = (): Particle => {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.15,
        speedY: (Math.random() - 0.5) * 0.15,
        opacity: Math.random() * 0.6,
        opacitySpeed: (Math.random() * 0.008) + 0.002,
        color: colors[Math.floor(Math.random() * colors.length)],
      };
    };

    const initParticles = () => {
      const particleCount = Math.floor((canvas.width * canvas.height) / 25000);
      particlesRef.current = Array.from({ length: Math.min(particleCount, 40) }, createParticle);
    };

    const drawStar = (x: number, y: number, size: number, opacity: number, color: string) => {
      ctx.save();
      ctx.globalAlpha = opacity;
      ctx.fillStyle = color;
      ctx.beginPath();

      // Draw a simple circle dot for gentle starfield
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fill();

      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle) => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Update opacity (twinkling)
        particle.opacity += particle.opacitySpeed;
        if (particle.opacity >= 0.7 || particle.opacity <= 0) {
          particle.opacitySpeed *= -1;
        }

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw
        drawStar(particle.x, particle.y, particle.size, particle.opacity, particle.color);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    initParticles();
    animate();

    window.addEventListener("resize", () => {
      resizeCanvas();
      initParticles();
    });

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
      style={{ opacity: 0.8 }}
    />
  );
}
