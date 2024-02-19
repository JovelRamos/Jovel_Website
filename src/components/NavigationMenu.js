import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationMenu.css'; // Your CSS for the menu

function NavigationMenu() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about-me">About Me</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default NavigationMenu;
