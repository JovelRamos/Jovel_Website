import React from 'react';
import { motion } from 'framer-motion';
import portraitImage from '../../assets/portrait.png';
import AnimatedHeading from './AnimatedHeading';
import './Home.css';

const Home = () => {
  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: { type: "spring", stiffness: 300 }
    }
  };

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
        
        <motion.div 
          className="portrait-section"
          whileHover="hover"
          variants={imageVariants}
        >
          <img
            src={portraitImage}
            alt="Jovel's Portrait"
            className="portrait-image"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;