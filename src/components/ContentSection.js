import React from "react";
import { motion } from "framer-motion";
import "./ContentSection.css";

const ContentSection = ({ id, title, children }) => {
  return (
    <motion.section
      id={id}
      className="content-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="section-container">
        <h2 className="section-title">{title}</h2>
        <div className="section-content">{children}</div>
      </div>
    </motion.section>
  );
};

export default ContentSection;
