import React, { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useTheme } from './ThemeContext';
import './NavigationMenu.css';

const NavigationMenu = () => {
  const { darkMode, toggleTheme, updateAccentForPath } = useTheme();
  const location = useLocation();

  useEffect(() => {
    updateAccentForPath(location.pathname);
  }, [location.pathname, updateAccentForPath]);

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
      <button className="theme-toggle" onClick={toggleTheme}>
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>
    </nav>
  );
};

export default NavigationMenu;