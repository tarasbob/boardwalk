import React from "react";
import "./ContentSection.css";

const ContentSection = ({ id, title, children }) => {
  return (
    <section id={id} className="content-section">
      <div className="section-container">
        <h2 className="section-title">{title}</h2>
        <div className="section-content">{children}</div>
      </div>
    </section>
  );
};

export default ContentSection;
