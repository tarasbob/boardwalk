import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBrain,
  faUsers,
  faGlobe,
  faBullhorn,
} from "@fortawesome/free-solid-svg-icons";

const iconMap = {
  brain: faBrain,
  users: faUsers,
  globe: faGlobe,
  bullhorn: faBullhorn,
};

const FundUseCard = ({ title, description, icon }) => {
  return (
    <div
      className="fund-use-card blur-bg"
      style={{
        margin: "10px",
        padding: "20px",
        borderRadius: "10px",
        textAlign: "center",
        flex: "1 1 200px",
        maxWidth: "250px",
      }}
    >
      <FontAwesomeIcon
        icon={iconMap[icon] || faBrain}
        size="3x"
        style={{ color: "#FFF", marginBottom: "15px" }}
      />
      <h3 style={{ color: "#FFF", marginBottom: "10px" }}>{title}</h3>
      <p style={{ color: "#FFF", fontSize: "0.9em" }}>{description}</p>
    </div>
  );
};

export default FundUseCard;
