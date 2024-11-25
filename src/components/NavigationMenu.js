import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from './ThemeContext';
import './NavigationMenu.css';

const NavigationMenu = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <nav className={`nav-menu ${darkMode ? 'dark' : 'light'}`}>
      <div className="menu-items">
        <NavLink
          to="/"
          className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
        >
          Home
        </NavLink>
        <NavLink
          to="/about-me"
          className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
        >
          About Me
        </NavLink>
        <NavLink
          to="/portfolio"
          className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
        >
          Portfolio
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
        >
          Contact
        </NavLink>
      </div>
      <button 
        className="theme-toggle" 
        onClick={toggleTheme}
        aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        {darkMode ? '☀️' : '🌙'}
      </button>
    </nav>
  );
};

export default NavigationMenu;