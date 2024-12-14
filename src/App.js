import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import NavigationMenu from './components/NavigationMenu';
import Home from './build/Home/Home';
import AboutMe from './build/AboutMe/AboutMe';
import Portfolio from './build/Portfolio/Portfolio';
import Contact from './build/Contact/Contact';
import PageTransition from './components/PageTransition';
import { ThemeProvider } from './components/ThemeContext';

// Import new project pages
import WebExtPage from './build/Portfolio/Projects/WebExtPage';
import IosDevelopmentPage from './build/Portfolio/Projects/IosDevelopmentPage';
import WebDevelopmentPage from './build/Portfolio/Projects/WebDevelopmentPage';
import UpcomingPage from './build/Portfolio/Projects/UpcomingPage';

// Create a wrapper component to handle AnimatePresence
const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route 
          path="/" 
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          } 
        />
        <Route 
          path="/about-me" 
          element={
            <PageTransition>
              <AboutMe />
            </PageTransition>
          } 
        />
        <Route 
          path="/portfolio" 
          element={
            <PageTransition>
              <Portfolio />
            </PageTransition>
          } 
        />
        <Route 
          path="/contact" 
          element={
            <PageTransition>
              <Contact />
            </PageTransition>
          } 
        />
        {/* New project routes */}
        <Route 
          path="/portfolio/web-ext" 
          element={
            <PageTransition>
              <WebExtPage />
            </PageTransition>
          } 
        />
        <Route 
          path="/portfolio/ios-dev" 
          element={
            <PageTransition>
              <IosDevelopmentPage />
            </PageTransition>
          } 
        />
        <Route 
          path="/portfolio/web-dev" 
          element={
            <PageTransition>
              <WebDevelopmentPage />
            </PageTransition>
          } 
        />
        <Route 
          path="/portfolio/upcoming" 
          element={
            <PageTransition>
              <UpcomingPage />
            </PageTransition>
          } 
        />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        <NavigationMenu />
        <AnimatedRoutes />
      </Router>
    </ThemeProvider>
  );
}

export default App;