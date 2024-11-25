import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="content-wrapper">
        <div className="text-section">
          <h1 className="main-heading">
            I am <span className="accent-text">Jovel</span>.
          </h1>
          
          <div className="animated-line" />
          
          <h2 className="sub-heading">
            Computer Engineer Student
            <br />
            @ San Jose State University
          </h2>
        </div>
        
        <div className="portrait-section">
          <div className="portrait-placeholder">
            Portrait Image
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;