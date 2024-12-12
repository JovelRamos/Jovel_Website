import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useTheme } from './ThemeContext';
import { motion } from 'framer-motion';
import './NavigationMenu.css';

// Import all logo images
import logoHome from '../assets/logo_initials_home.png';
import logoAbout from '../assets/logo_initials_about.png';
import logoPortfolio from '../assets/logo_initials_portfolio.png';
import logoContact from '../assets/logo_initials_contact.png';

const NavigationMenu = () => {
  const { darkMode, toggleTheme, updateAccentForPath, accentColor } = useTheme();
  const location = useLocation();
  const [currentLogo, setCurrentLogo] = useState(logoHome);

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

  useEffect(() => {
    updateAccentForPath(location.pathname);
    setCurrentLogo(getLogo(location.pathname));
  }, [location.pathname, updateAccentForPath]);

  const containerVariants = {
    initial: { opacity: 1 },
    animate: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="nav-wrapper">
      <nav className={`nav-menu ${darkMode ? 'dark' : 'light'}`}>
        <div className="nav-left">
          <div className="logo-wrapper">
            <motion.img 
              src={currentLogo}
              alt="Logo"
              className="nav-logo"
              animate={{
                opacity: [0, 1],
                y: [20, 0],
                scale: [0.8, 1]
              }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                times: [0, 1],
                delay: 0.35
              }}
              key={location.pathname}
            />
          </div>
          <motion.div 
            className="menu-items"
            variants={containerVariants}
            initial="initial"
            animate="animate"
            key={location.pathname}
          >
            <motion.div variants={itemVariants}>
              <NavLink
                to="/"
                className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
              >
                Home
              </NavLink>
            </motion.div>
            <motion.div variants={itemVariants}>
              <NavLink
                to="/about-me"
                className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
              >
                About Me
              </NavLink>
            </motion.div>
            <motion.div variants={itemVariants}>
              <NavLink
                to="/portfolio"
                className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
              >
                Portfolio
              </NavLink>
            </motion.div>
            <motion.div variants={itemVariants}>
              <NavLink
                to="/contact"
                className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
              >
                Contact
              </NavLink>
            </motion.div>
          </motion.div>
        </div>
        <motion.button 
          className="theme-toggle" 
          onClick={toggleTheme}
          variants={itemVariants}
          initial="initial"
          animate="animate"
          key={location.pathname}
        >
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </motion.button>
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