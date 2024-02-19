import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationMenu from './components/NavigationMenu';
import Home from './build/Home/Home';
import AboutMe from './build/AboutMe/AboutMe';
import Portfolio from './build/Portfolio/Portfolio';
import Contact from './build/Contact/Contact';

function App() {
  return (
    <Router>
        <NavigationMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </Router>
  );
}

export default App;
