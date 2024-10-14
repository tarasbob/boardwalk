import React from "react";
import ParticleBackground from "./ParticleBackground";
import "./HeroSection.css";
import TypeAnimationComponent from "./TypeAnimation";

function HeroSection() {
  return (
    <section className="hero-section">
      <ParticleBackground />
      <div className="hero-content">
        <h1 id="ssforum" class="type2">
          <span className="banner-title-primary"><TypeAnimationComponent /></span>
        <br/>
          Insurance Distribution with Technology
        </h1>
        <div className="hero-metrics">
          <div className="metric">
            <div className="metric-value">354%</div>
            <div className="metric-label">GWP Growth in 2 Years</div>
          </div>
          <div className="metric">
            <div className="metric-value">$5M</div>
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
