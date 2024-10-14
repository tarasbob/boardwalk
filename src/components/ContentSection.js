import React from "react";
import { motion } from "framer-motion";
import "./ContentSection.css";

const ContentSection = ({ id, title, children }) => {
  return (
    <motion.section
      id={id}
      className="content-section text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Content Container */}
      <div className="section-container blur-bg text-center margin-top-10px">
        <h2 className="section-title margin-bottom-10px">{title}</h2>
        <div className="section-content">{children}</div>
      </div>
    </motion.section>
  );
};

export default ContentSection;
