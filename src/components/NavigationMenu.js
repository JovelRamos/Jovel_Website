import React, { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useTheme } from './ThemeContext';
import { motion } from 'framer-motion';
import './NavigationMenu.css';

import logoHome from '../assets/logo_initials_home.png';
import logoAbout from '../assets/logo_initials_about.png';
import logoPortfolio from '../assets/logo_initials_portfolio.png';
import logoContact from '../assets/logo_initials_contact.png';

const NavigationMenu = () => {
  const { darkMode, toggleTheme, updateAccentForPath, accentColor } = useTheme();
  const location = useLocation();

  useEffect(() => {
    updateAccentForPath(location.pathname);
  }, [location.pathname, updateAccentForPath]);

  const getLogo = (path) => {
    switch (path) {
      case '/':
        return logoHome;
      case '/about-me':
        return logoAbout;
      case '/portfolio':
        return logoPortfolio;
      case '/contact':
        return logoContact;
      default:
        return logoHome;
    }
  };

  return (
    <div className="nav-wrapper">
      <nav className={`nav-menu ${darkMode ? 'dark' : 'light'}`}>
        <div className="nav-left">
          <img 
            src={getLogo(location.pathname)}
            alt="Logo"
            className="nav-logo"
          />
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