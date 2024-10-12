import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">Boardwalk Insurance</div>
      <nav className="nav">
        <a href="#introduction">Introduction</a>
        <a href="#problem">Problem</a>
        <a href="#solution">Solution</a>
        <a href="#market">Market</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
