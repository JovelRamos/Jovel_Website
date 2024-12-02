import React, { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useTheme } from './ThemeContext';
import { motion } from 'framer-motion';
import './NavigationMenu.css';

const NavigationMenu = () => {
  const { darkMode, toggleTheme, updateAccentForPath, accentColor } = useTheme();
  const location = useLocation();

  useEffect(() => {
    updateAccentForPath(location.pathname);
  }, [location.pathname, updateAccentForPath]);

  return (
    <div className="nav-wrapper">
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
        <button className="theme-toggle" onClick={toggleTheme}>
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </nav>
      <motion.div
        className="nav-accent-bar"
        animate={{
          backgroundColor: accentColor,
          transition: { duration: 0.3 }
        }}
        layoutId="nav-accent"
      />
    </div>
  );
};

export default NavigationMenu;