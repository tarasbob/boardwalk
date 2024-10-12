import React from "react";
import InteractiveNetwork from "./InteractiveNetwork";
import "./HeroSection.css";

function HeroSection() {
  return (
    <section className="hero-section">
      <InteractiveNetwork />
      <div className="hero-content">
        <h1>Welcome to Boardwalk Insurance</h1>
        <p>"Redefining Commercial Insurance with Innovation and Technology."</p>
      </div>
    </section>
  );
}

export default HeroSection;
