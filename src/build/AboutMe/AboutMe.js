import React, { useState } from 'react';
import { motion } from 'framer-motion';
import portraitImage from '../../assets/aboutme_portrait.png';
import { useTheme } from '../../components/ThemeContext';

const AboutMe = () => {
  const { accentColor } = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  
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

  // Title animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const letterVariants = {
    hidden: {
      y: -50,
      opacity: 0,
      scale: 0.5
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200
      }
    }
  };

  // Gradient style for the "ME" text
  const gradientStyle = {
    background: 'linear-gradient(-45deg, #FFD700 0%, #FDB813 50%, #F7DF1E 100%)',
    backgroundSize: '200% 200%',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    animation: 'warmGradient 3s ease infinite'
  };

  // Shadow effects based on hover state
  const shadowStyle = {
    filter: 'drop-shadow(0px 0px 3px rgba(255,255,255,0.3))',
    textShadow: isHovered 
      ? `
        2px 2px 1px rgba(255,255,255,0.15),
        4px 4px 2px rgba(255,235,150,0.15),
        6px 6px 3px rgba(255,215,100,0.15),
        8px 8px 4px rgba(255,195,50,0.15),
        10px 10px 5px rgba(255,175,0,0.15),
        12px 12px 25px rgba(255,215,0,0.25)
      `
      : `
        1px 1px 1px rgba(255,255,255,0.15),
        2px 2px 2px rgba(255,235,150,0.15),
        3px 3px 3px rgba(255,215,100,0.15),
        4px 4px 4px rgba(255,195,50,0.15),
        6px 6px 15px rgba(255,175,0,0.2)
      `
  };

  // Content section animation variants
  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.6 }
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

  const combinedItemCardVariants = {
    initial: { 
      opacity: 0, 
      y: 20, 
      scale: 1 
    },
    animate: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.6, 
        staggerChildren: 0.6
      }
    },
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
      <div 
        className="absolute inset-0 bg-gray-100 dark:bg-gray-800 rounded-xl border-2"
        style={{ borderColor: skill.color }}
      />
      
      <motion.div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100"
        style={{
          boxShadow: `0 0 20px ${skill.color}`,
          transition: 'all 0.3s ease'
        }}
      />
      
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
      initial="initial"
      animate="animate"
    >
      <div className="max-w-7xl mx-auto">
        {/* Animated Title */}
        <motion.h1
          className="text-7xl lg:text-8xl xl:text-8xl text-center mb-12 pt-14 font-verdana font-bold dark:text-white"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {"ABOUT".split('').map((char, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
          <motion.span
            variants={letterVariants}
            className="inline-block"
          >
            <motion.span
              className="inline-block"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              animate={{
                scale: isHovered ? 1.05 : 1,
                y: isHovered ? -5 : 0,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 25
              }}
              style={{ ...gradientStyle, ...shadowStyle }}
            >
              ME
            </motion.span>
          </motion.span>
          {".md".split('').map((char, index) => (
            <motion.span
              key={`ext-${index}`}
              variants={letterVariants}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>
        
        {/* Content Section */}
        <div className="flex flex-col md:flex-row gap-16 p-8 max-w-[1400px] mx-auto">
          {/* Left Column - Portrait and Skills */}
          <div className="flex flex-col gap-16 w-full md:w-auto">
            {/* Portrait Image */}
            <motion.div 
              variants={combinedItemCardVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              className="max-w-md mx-auto md:max-w-none relative"
            >
              <motion.div
                className="absolute inset-0 rounded-lg"
                initial={{ 
                  boxShadow: `0 0 0px 0px ${accentColor}`,
                  opacity: 0
                }}
                animate={{ 
                  boxShadow: `0 0 40px 10px ${accentColor}`,
                  opacity: 0.8
                }}
                transition={{ 
                  delay: 0.8,
                  duration: 1.5, 
                  ease: [0.4, 0, 0.2, 1]
                }}
              />
              
              <motion.img
                src={portraitImage} 
                alt="Jovel's Portrait" 
                className="rounded-lg shadow-lg w-full h-auto relative z-10"
                initial={{ opacity: 0.8 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1.5 }}
              />
            </motion.div>
            
            {/* Skills Section */}
            <motion.div 
              className="bg-gray-50 dark:bg-[#2e2e2e] p-8 rounded-2xl"
              style={{
                border: `1px solid ${accentColor}`,
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              }}
              variants={combinedItemCardVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
            >
              <h2 className="text-3xl mb-4 font-verdana font-bold" style={{ color: accentColor }}>Skills</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-auto-fit-60 gap-4 mt-4">
                {skills.map((skill) => (
                  <SkillIcon key={skill.name} skill={skill} />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Content Cards */}
          <motion.div className="flex-1 flex flex-col gap-16" variants={itemVariants}>
            {['Who I Am', 'My Journey'].map((title) => (
              <motion.div 
                key={title}
                className="bg-gray-50 dark:bg-[#2e2e2e] p-8 rounded-2xl"
                style={{
                  border: `1px solid ${accentColor}`,
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                }}
                variants={combinedItemCardVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
              >
                <h2 className="text-3xl mb-4 font-verdana font-bold" style={{ color: accentColor }}>{title}</h2>
                <p className="text-gray-800 dark:text-gray-200 font-verdana">{content[title]}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <style>
        {`
          @keyframes warmGradient {
            0% {
              background-position: 0% 50%;
            }
            25% {
              background-position: 100% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            75% {
              background-position: 0% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
        `}
      </style>
    </motion.div>
  );
};

export default AboutMe;