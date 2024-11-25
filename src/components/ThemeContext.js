import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const ThemeContext = createContext();

const pageAccents = {
  '/': '#e63946',        // Home page accent
  '/about-me': '#FFD429', // About Me page accent
  '/portfolio': '#7757FF', // Portfolio page accent
  '/contact': '##FF3E0F'   // Contact page accent
};

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('darkMode');
    return savedTheme ? JSON.parse(savedTheme) : false;
  });
  
  const [currentPath, setCurrentPath] = useState('/');
  
  const getCurrentAccent = useCallback(() => {
    return pageAccents[currentPath] || pageAccents['/'];
  }, [currentPath]);

  const adjustColor = (color, amount) => {
    const clamp = (num) => Math.min(Math.max(num, 0), 255);
    
    color = color.replace('#', '');
    const num = parseInt(color, 16);
    let r = (num >> 16) + amount;
    let g = ((num >> 8) & 0x00FF) + amount;
    let b = (num & 0x0000FF) + amount;
    
    return `#${(
      0x1000000 +
      (clamp(r) << 16) +
      (clamp(g) << 8) +
      clamp(b)
    ).toString(16).slice(1)}`;
  };

  useEffect(() => {
    const root = document.documentElement;
    const accent = getCurrentAccent();

    if (darkMode) {
      root.style.setProperty('--background-color', '#121212');
      root.style.setProperty('--text-color', '#ffffff');
      root.style.setProperty('--text-secondary', '#e1e1e1');
      root.style.setProperty('--accent-color', accent);
      root.style.setProperty('--accent-hover', adjustColor(accent, 20));
      document.body.className = 'dark-mode';
    } else {
      root.style.setProperty('--background-color', '#f9f9f9');
      root.style.setProperty('--text-color', '#333333');
      root.style.setProperty('--text-secondary', '#666666');
      root.style.setProperty('--accent-color', accent);
      root.style.setProperty('--accent-hover', adjustColor(accent, -20));
      document.body.className = 'light-mode';
    }

    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode, getCurrentAccent]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const updateAccentForPath = (path) => {
    setCurrentPath(path);
  };

  return (
    <ThemeContext.Provider value={{ 
      darkMode, 
      toggleTheme,
      currentAccent: getCurrentAccent(),
      updateAccentForPath
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};