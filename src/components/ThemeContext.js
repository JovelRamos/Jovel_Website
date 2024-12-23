import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const ThemeContext = createContext();

// Define accent colors for each route
const pageAccents = {
    '/': '#e63946',        // Home page accent
    '/about-me': '#FFD429', // About Me page accent
    '/portfolio': '#7757FF', // Portfolio page accent
    '/contact': '#FF3E0F'   // Contact page accent
};

export const ThemeProvider = ({ children }) => {
  // Initialize darkMode from localStorage or system preference
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    // Check system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  
  const [accentColor, setAccentColor] = useState(pageAccents['/']);

  // Update accent color based on path
  const updateAccentForPath = useCallback((path) => {
    const newAccent = pageAccents[path] || pageAccents['/'];
    setAccentColor(newAccent);
    
    // Update CSS custom property for accent color
    document.documentElement.style.setProperty('--accent-color', newAccent);
  }, []);

  // Effect to handle theme changes
  useEffect(() => {
    const root = document.documentElement;
    
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Effect to handle system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e) => {
      if (!localStorage.getItem('theme')) {
        setDarkMode(e.matches);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
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