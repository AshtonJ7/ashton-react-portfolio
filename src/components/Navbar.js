import React from 'react';
import '../styles/Navbar.css';


function Navbar() {
  return (
    <nav className="navbar">
      <a href="#home">Home</a>
      <a href="#projects">Portfolio</a>
      <a href="#contact">Contact</a>
    </nav>
  );
}

export default Navbar;
