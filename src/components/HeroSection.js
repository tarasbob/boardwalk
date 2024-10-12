import React from "react";
import ParticleBackground from "./ParticleBackground";
import "./HeroSection.css";

function HeroSection() {
  return (
    <section className="hero-section">
      <ParticleBackground />
      <div className="hero-content">
        <h1>Empowering Visionary Entrepreneurs</h1>
        <p>
          Expertly managing your accounting and financial needs with precision
          and reliability.
        </p>
        <button
          className="cta-button"
          onClick={() => console.log("Learn More clicked")}
        >
          Learn More About Us
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
