import React from 'react';
import portraitImage from '../../assets/aboutme_portrait.png';
import './AboutMe.css';

const AboutMe = () => {
  const skills = [
    {
      name: 'Python',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
      color: '#3776AB',
      size: '60px'
    },
    {
      name: 'JavaScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg',
      color: '#F7DF1E',
      size: '50px'
    },
    {
      name: 'HTML5',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain.svg',
      color: '#E34F26',
      size: '50px'
    },
    {
      name: 'CSS',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain.svg',
      color: '#264DE4',
      size: '50px'
    },
    {
      name: 'React',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
      color: '#61DAFB',
      size: '50px'
    }
  ];

  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-title">
          About <span className="accent-text">Me</span>
        </h1>
        
        <div className="profile-section">
          <div className="profile-image-container">
            <div className="profile-image-placeholder">
                <img 
                src={portraitImage} 
                alt="Jovel's Portrait" 
                className="portrait-image"
              />
            </div>
          </div>
          
          <div className="profile-details">
            <h2 className="section-title">Who I Am</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            
            <h2 className="section-title">My Journey</h2>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
              in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            
            <div className="skills-section">
            <div className="animated-line" />
              <h2 className="section-title">Skills</h2>
              <div className="skills-grid">
                {skills.map((skill) => (
                  <div 
                    key={skill.name}
                    className="skill-item"
                    style={{ '--skill-color': skill.color }}
                    title={skill.name}
                  >
                    <div className="skill-background"></div>
                    <img 
                      src={skill.icon} 
                      alt={skill.name}
                      className="skill-icon"
                      style={{ width: skill.size, height: skill.size }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
