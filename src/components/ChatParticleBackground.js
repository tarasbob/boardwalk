// src/components/ChatParticleBackground.js

import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function ChatParticleBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="chat-particles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: {
          color: { value: "#003f7f" }, // Lighter blue background
        },
        fpsLimit: 60,
        particles: {
          number: {
            value: 100, // Increased particle count
            density: { enable: true, area: 800 },
          },
          color: {
            value: ["#00aaff", "#00ddff", "#ffffff"], // Brighter shades
          },
          shape: { type: "circle" }, // Changed to circles for better visibility
          opacity: {
            value: 0.6, // Increased opacity
            random: false,
          },
          size: {
            value: 4, // Increased size
            random: true,
          },
          move: {
            enable: true,
            speed: 2,
            direction: "top",
            random: false,
            straight: false,
            outModes: { default: "out" },
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "bubble" },
            onClick: { enable: true, mode: "repulse" },
          },
          modes: {
            bubble: { distance: 200, size: 6, duration: 2, opacity: 0.8 },
            repulse: { distance: 200, duration: 0.4 },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default ChatParticleBackground;
