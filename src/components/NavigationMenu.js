import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useTheme } from './ThemeContext';
import { motion } from 'framer-motion';

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
    <div className="sticky top-0 z-50 bg-white transition-colors duration-300 dark:bg-gray-900">
      <nav className={`flex items-center justify-between px-8 py-4`}>
        <div className="flex items-center">
          <div className="relative w-16 h-16 mr-8">
            <motion.img 
              src={currentLogo}
              alt="Logo"
              className="absolute top-0 left-0 h-16 w-auto transition-transform duration-300 hover:scale-110"
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
            className="flex gap-8"
            variants={containerVariants}
            initial="initial"
            animate="animate"
            key={location.pathname}
          >
            {[
              { to: '/', text: 'Home' },
              { to: '/about-me', text: 'About Me' },
              { to: '/portfolio', text: 'Portfolio' },
              { to: '/contact', text: 'Contact' }
            ].map((link) => (
              <motion.div key={link.to} variants={itemVariants}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) => `
                    relative text-lg transition-colors duration-300
                    ${isActive ? 'font-bold' : 'font-normal'}
                    ${isActive 
                      ? 'transition-colors duration-300' 
                      : 'dark:text-white text-gray-800'
                    }
                    hover:text-current
                    before:content-['']
                    before:absolute
                    before:bottom-0
                    before:left-0
                    before:w-full
                    before:h-0.5
                    before:transform
                    before:scale-x-0
                    before:origin-left
                    before:transition-transform
                    before:duration-300
                    hover:before:scale-x-100
                    ${isActive ? 'before:scale-x-100' : ''}
                  `}
                  style={({ isActive }) => 
                    isActive 
                      ? { 
                          color: accentColor,
                          '--before-bg-color': accentColor,
                        } 
                      : {
                          '--before-bg-color': 'currentColor'
                        }
                  }
                >
                  {link.text}
                </NavLink>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <motion.button 
          className={`
            px-4 py-2 text-base rounded
            border transition-all duration-300
            ${darkMode 
              ? 'border-white text-white hover:bg-white hover:text-gray-900' 
              : 'border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white'
            }
          `}
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
                  className="h-1 w-full opacity-80 transition-colors duration-300"
          style={{ backgroundColor: accentColor }}
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