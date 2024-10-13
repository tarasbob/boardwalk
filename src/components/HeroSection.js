import React from "react";
import ParticleBackground from "./ParticleBackground";
import "./HeroSection.css";

function HeroSection() {
  return (
    <section className="hero-section">
      <ParticleBackground />
      <div className="hero-content">
        <h1>Revolutionizing Insurance with Proprietary AI Technology</h1>
        <div className="hero-metrics">
          <div className="metric">
            <div className="metric-value">354%</div>
            <div className="metric-label">GWP Growth in 2 Years</div>
          </div>
          <div className="metric">
            <div className="metric-value">$4M</div>
            <div className="metric-label">GWP in 2023</div>
          </div>
          <div className="metric">
            <div className="metric-value">2</div>
            <div className="metric-label">Major Industry Awards</div>
          </div>
        </div>
        <p>
          Boardwalk Insurance: Where cutting-edge technology meets insurance
          expertise
        </p>
      </div>
    </section>
  );
}

export default HeroSection;
