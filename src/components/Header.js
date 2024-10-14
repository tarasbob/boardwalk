import React from "react";
import logo from "../components/default-dark.svg";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Company Logo" />
      </div>
      <nav className="nav">
        <a href="#problem">Problem</a>
        <a href="#solution">Solution</a>
        <a href="#market-opportunity">Opportunity</a>
        <a href="#product">Product</a>
        <a href="#team">Team</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
