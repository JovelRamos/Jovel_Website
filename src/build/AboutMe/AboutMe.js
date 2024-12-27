import React from 'react';
import { motion } from 'framer-motion';
import portraitImage from '../../assets/aboutme_portrait.png';
import { useTheme } from '../../components/ThemeContext';

const AboutMe = () => {
  const { accentColor } = useTheme();
  
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

  const titleVariants = {
    initial: { y: -250 },
    animate: { 
      y: 0,
      transition: {
        type: "spring",
        damping: 10,
        mass: 0.75,
        stiffness: 100,
      }
    }
  };

  const skillIconVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: { 
      scale: 1.2,
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10
      }
    }
  };

  const cardVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const content = {
    'Who I Am': `I'm a Computer Engineering student at San Jose State University with a passion for creating technology that enhances accessibility and quality of life. My approach to engineering is shaped by my belief that technology should serve as a bridge, making complex tasks simpler and information more accessible to everyone. As a first-generation college graduate and immigrant, I bring a unique perspective to problem-solving and user experience design.`,
    
    'My Journey': `My romance with technology began unexpectedly – with an iPhone, fart apps, and an eight-year-old's curiosity about what makes applications tick. But it was in high school where this curiosity transformed into passion. Creating a slot machine game using block coding became my first real programming project. What captivated me wasn't just the code – it was watching my classmates engage with something I had built, seeing how technology could create experiences and connections. This led me to pursue Computer Engineering at SJSU, where I've focused on developing tools that make a meaningful impact. My latest project, Reflect, exemplifies this mission – an AI-powered transcription service that provides real-time key terms and smart summaries, making lectures and meetings more accessible and digestible.`
  };

  const SkillIcon = ({ skill }) => (
    <motion.div 
      variants={skillIconVariants}
      initial="initial"
      whileHover="hover"
      className="relative flex items-center justify-center w-20 h-20 cursor-pointer group"
      title={skill.name}
    >
      {/* Base background - always visible */}
      <div 
        className="absolute inset-0 bg-gray-100 dark:bg-gray-800 rounded-xl border-2"
        style={{ borderColor: skill.color }}
      />
      
      {/* Glow effect - appears on hover */}
      <motion.div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100"
        style={{
          boxShadow: `0 0 20px ${skill.color}`,
          transition: 'all 0.3s ease'
        }}
      />
      
      {/* Icon - always visible and transforms with container */}
      <img 
        src={skill.icon} 
        alt={skill.name}
        className="relative z-10 w-auto h-auto"
        style={{ width: skill.size, height: skill.size }}
      />
    </motion.div>
  );

  return (
    <motion.div 
      className="px-8 min-h-[calc(100vh-200px)] bg-white dark:bg-[#121212] transition-colors duration-300"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          className="text-6xl text-center mb-0 text-gray-800 dark:text-white font-verdana font-bold"
          variants={titleVariants}
          initial="initial"
          animate="animate"
        >
          ABOUT<span style={{ color: accentColor }}>ME</span>.md
        </motion.h1>
        
        <div className="flex flex-col md:flex-row gap-16 p-8 max-w-[1400px] mx-auto">
          <div className="flex flex-col gap-16 w-full md:w-auto">
            <motion.div 
              variants={itemVariants}
              whileHover="hover"
              variants={cardVariants}
              className="max-w-md mx-auto md:max-w-none"
            >
              <img 
                src={portraitImage} 
                alt="Jovel's Portrait" 
                className="rounded-lg shadow-lg w-full h-auto"
                style={{
                  boxShadow: `0 4px 40px 5px ${accentColor}`
                }}
              />
            </motion.div>
            
            <motion.div 
              className="bg-gray-50 dark:bg-[#2e2e2e] p-8 rounded-2xl"
              style={{
                border: `1px solid ${accentColor}`,
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              }}
              variants={itemVariants}
              whileHover="hover"
              variants={cardVariants}
            >
              <h2 className="text-3xl mb-4 font-verdana font-bold" style={{ color: accentColor }}>Skills</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-auto-fit-60 gap-4 mt-4">
                {skills.map((skill) => (
                  <SkillIcon key={skill.name} skill={skill} />
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div className="flex-1 flex flex-col gap-16" variants={itemVariants}>
            {['Who I Am', 'My Journey'].map((title) => (
              <motion.div 
                key={title}
                className="bg-gray-50 dark:bg-[#2e2e2e] p-8 rounded-2xl"
                style={{
                  border: `1px solid ${accentColor}`,
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                }}
                variants={itemVariants}
                whileHover="hover"
                variants={cardVariants}
              >
                <h2 className="text-3xl mb-4 font-verdana font-bold" style={{ color: accentColor }}>{title}</h2>
                <p className="text-gray-800 dark:text-gray-200 font-verdana">{content[title]}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutMe;