import React, { useEffect, useRef } from 'react';
import portraitImage from '../../assets/portrait.png';
import AnimatedHeading from './AnimatedHeading';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="content-wrapper">
        <div className="text-section">
          <AnimatedHeading />
          
          <div className="animated-line" />
          
          <h2 className="sub-heading">
            Computer Engineer Student
            <br /> <span className="accent-text">
            @ San Jose State University</span>
          </h2>
        </div>
        
        <div className="portrait-section">
          <img 
            src={portraitImage} 
            alt="Jovel's Portrait" 
            className="portrait-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;