import React from 'react';
import { motion } from 'framer-motion';
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

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: 2, delayChildren: 0.2, staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.6}
    }
  };

  const SkillIcon = ({ skill }) => (
    <motion.div 
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      whileHover={{
        scale: 1.2,
        rotate: 5,
        transition: { type: "spring", stiffness: 300 }
      }}
      className="skill-item"
      style={{ '--skill-color': skill.color }}
      title={skill.name}
    >
      <div className="skill-background" />
      <img 
        src={skill.icon} 
        alt={skill.name}
        className="skill-icon"
        style={{ width: skill.size, height: skill.size }}
      />
    </motion.div>
  );

  const content = {
    'Who I Am': `I'm a Computer Engineering student at San Jose State University with a passion for creating technology that enhances accessibility and quality of life. My approach to engineering is shaped by my belief that technology should serve as a bridge, making complex tasks simpler and information more accessible to everyone. As a first-generation college graduate and immigrant, I bring a unique perspective to problem-solving and user experience design.`,
    
    'My Journey': `My romance with technology began unexpectedly – with an iPhone, fart apps, and an eight-year-old's curiosity about what makes applications tick. But it was in high school where this curiosity transformed into passion. Creating a slot machine game using block coding became my first real programming project. What captivated me wasn't just the code – it was watching my classmates engage with something I had built, seeing how technology could create experiences and connections. This led me to pursue Computer Engineering at SJSU, where I've focused on developing tools that make a meaningful impact. My latest project, Reflect, exemplifies this mission – an AI-powered transcription service that provides real-time key terms and smart summaries, making lectures and meetings more accessible and digestible.`
  };

  return (
    <motion.div 
      className="about-container"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <div className="about-content">
        <motion.h1 
          className="about-title"
          variants={itemVariants}
        >
          ABOUT<span className="accent-text">ME</span>.md
        </motion.h1>
        
        <div className="content-layout">
          <div className="left-section">
            <motion.div 
              className="portrait-section"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              <img 
                src={portraitImage} 
                alt="Jovel's Portrait" 
                className="portrait-image"
              />
            </motion.div>
            
            <motion.div 
              className="content-card"
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              <h2 className="section-title">Skills</h2>
              <div className="skills-grid">
                {skills.map((skill) => (
                  <SkillIcon key={skill.name} skill={skill} />
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div className="content-stack" variants={itemVariants}>
            {['Who I Am', 'My Journey'].map((title) => (
              <motion.div 
                key={title}
                className="content-card"
                variants={itemVariants}
                whileHover={{
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                <h2 className="section-title">{title}</h2>
                <p>{content[title]}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutMe;