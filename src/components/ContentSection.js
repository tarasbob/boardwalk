import React from "react";
import { motion } from "framer-motion";
import "./ContentSection.css";

function ContentSection({ id, title, children }) {
  return (
    <section id={id} className="content-section">
      <motion.div
        className="section-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">{title}</h2>
        <div className="section-content">{children}</div>
      </motion.div>
    </section>
  );
}

export default ContentSection;
