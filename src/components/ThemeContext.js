import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const ThemeContext = createContext();

const pageAccents = {
    '/': '#e63946',        // Home page accent
    '/about-me': '#FFD429', // About Me page accent
    '/portfolio': '#7757FF', // Portfolio page accent
    '/contact': '#FF3E0F'   // Contact page accent
};

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('darkMode');
    return savedTheme ? JSON.parse(savedTheme) : false;
  });
  
  const [accentColor, setAccentColor] = useState(pageAccents['/']);

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

  // Update accent color based on path
  const updateAccentForPath = useCallback((path) => {
    const newAccent = pageAccents[path] || pageAccents['/'];
    setAccentColor(newAccent);
  }, []);

  // Update CSS variables whenever theme or accent changes
  useEffect(() => {
    const root = document.documentElement;
    
    // Set theme colors
    if (darkMode) {
      root.style.setProperty('--background-color', '#121212');
      root.style.setProperty('--text-color', '#ffffff');
      root.style.setProperty('--text-secondary', '#e1e1e1');
      document.body.className = 'dark-mode';
    } else {
      root.style.setProperty('--background-color', '#f9f9f9');
      root.style.setProperty('--text-color', '#333333');
      root.style.setProperty('--text-secondary', '#666666');
      document.body.className = 'light-mode';
    }

    // Set accent colors
    root.style.setProperty('--accent-color', accentColor);
    root.style.setProperty('--accent-hover', adjustColor(accentColor, darkMode ? 20 : -20));
    
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode, accentColor]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeContext.Provider value={{
      darkMode,
      toggleTheme,
      accentColor,
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