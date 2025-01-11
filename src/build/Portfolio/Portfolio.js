import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Portfolio = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isTitleHovered, setIsTitleHovered] = useState(false);
  const navigate = useNavigate();

  const sections = [
    {
      title: "WEB EXT",
      shortTitle: "Browser Extension",
      description: "Chrome Extensions & Web Tools",
      bgColor: "#e63946",
      github: "https://github.com/JovelRamos/RateMySJSU",
      path: "/portfolio/web-ext",
      projects: [
        { 
          name: "RateMySJSU",
          description: "A Google Chrome extension that seamlessly integrates RateMyProfessors data into SJSU class schedules, helping students make informed course selections.",
          tech: "HTML • CSS • JavaScript • GraphQL",
          details: [
            "Integrates with SJSU class schedules",
            "Uses Chrome Storage & Runtime APIs",
            "Built with jQuery DataTables"
          ]
        }
      ]
    },
    {
      title: "iOS DEV",
      shortTitle: "iOS Development",
      description: "Native Apple Applications",
      bgColor: "#FFD429",
      github: "https://github.com/athehmd/Reflect",
      path: "/portfolio/ios-dev",
      projects: [
        { 
          name: "Reflect",
          description: "AI-powered conversation assistant for Apple devices with real-time transcription and smart summarization capabilities.",
          tech: "SwiftUI • UIKit • CloudKit • Core ML",
          details: [
            "Real-time speech recognition",
            "iCloud synchronization",
            "Advanced privacy features",
            "Deep Apple ecosystem integration"
          ]
        }
      ]
    },
    {
      title: "WEB DEV",
      shortTitle: "Web Development",
      description: "Full-Stack Web Applications",
      bgColor: "#7757FF",
      github: "https://github.com/JovelRamos/Jovel_Website",
      path: "/portfolio/web-dev",
      projects: [
        { 
          name: "Personal Website",
          description: "A modern, responsive portfolio website built with React and featuring dynamic themes and animations.",
          tech: "React • Framer Motion • CSS",
          details: [
            "Dynamic theme switching",
            "Responsive design",
            "Custom animations",
            "Modern UI/UX"
          ]
        }
      ]
    },
    {
      title: "SOON",
      shortTitle: "Upcoming Projects",
      description: "Future developments and experiments",
      bgColor: "#FF3E0F",
      path: "/portfolio/upcoming",
      projects: [
        { 
          name: "In Development",
          description: "New and exciting projects coming soon. Stay tuned for updates!",
          tech: "Next.js • TypeScript • More to come",
          details: [
            "Exploring new technologies",
            "Focusing on innovation",
            "Coming soon"
          ]
        }
      ]
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

  // Gradient and shadow styles for title
  const gradientStyle = {
    background: 'linear-gradient(-45deg, #007CF0 0%, #00DFD8 50%, #7DE7EB 100%)',
    backgroundSize: '200% 200%',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    animation: 'blueGradient 3s ease infinite'
  };

  const shadowStyle = {
    filter: 'drop-shadow(0px 0px 3px rgba(255,255,255,0.3))',
    textShadow: isTitleHovered 
      ? `
        2px 2px 1px rgba(255,255,255,0.15),
        4px 4px 2px rgba(200,235,255,0.15),
        6px 6px 3px rgba(150,215,255,0.15),
        8px 8px 4px rgba(100,195,255,0.15),
        10px 10px 5px rgba(50,175,255,0.15),
        12px 12px 25px rgba(0,155,255,0.25)
      `
      : `
        1px 1px 1px rgba(255,255,255,0.15),
        2px 2px 2px rgba(200,235,255,0.15),
        3px 3px 3px rgba(150,215,255,0.15),
        4px 4px 4px rgba(100,195,255,0.15),
        6px 6px 15px rgba(50,175,255,0.2)
      `
  };

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      padding: '2rem',
      backgroundColor: 'var(--background-color)'
    }}>
      {/* Animated Title */}
      <motion.h1
        className="text-7xl lg:text-8xl xl:text-8xl text-center mb-12 pt-14 font-verdana font-bold dark:text-white"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {"My ".split('').map((char, index) => (
          <motion.span
            key={index}
            variants={letterVariants}
            className="inline-block"
          >
            {char}
          </motion.span>
        ))}
        {/* Animated "Projects" text */}
        {"Projects".split('').map((char, index) => (
          <motion.span
            key={`projects-${index}`}
            variants={letterVariants}
            className="inline-block"
            onMouseEnter={() => setIsTitleHovered(true)}
            onMouseLeave={() => setIsTitleHovered(false)}
            style={{ 
              ...gradientStyle, 
              ...shadowStyle,
              display: 'inline-block'
            }}
            whileHover={{
              scale: 1.05,
              y: -5,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 25
              }
            }}
          >
            {char}
          </motion.span>
        ))}
      </motion.h1>

      <div className="animated-line" />

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        height: '60vh',
        margin: '2rem 10rem',
      }}>
        {[0, 1].map(row => (
          <div 
            key={row}
            style={{
              display: 'flex',
              gap: '1rem',
              flex: hoveredIndex !== null && Math.floor(hoveredIndex / 2) === row ? 2 : 1,
              transition: 'flex 0.3s ease-out'
            }}
          >
            {[0, 1].map(col => {
              const index = row * 2 + col;
              const section = sections[index];
              return (
                <motion.div
                  key={section.title}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  onClick={() => handleClick(section.path)}
                  animate={{
                    flex: hoveredIndex === index ? 4 : 1,
                    backgroundColor: hoveredIndex === index 
                      ? section.bgColor 
                      : 'var(--background-secondary)',
                  }}
                  initial={{
                    flex: 1,
                    backgroundColor: 'var(--background-secondary)',
                  }}
                  transition={{
                    flex: { duration: 0.3, ease: "easeOut" },
                    backgroundColor: { duration: 0.3 }
                  }}
                  style={{
                    borderRadius: '1rem',
                    position: 'relative',
                    overflow: 'hidden',
                    padding: 0,
                    cursor: 'pointer'
                  }}
                >
                  <motion.div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: hoveredIndex === index ? '2rem' : 0,
                      background: 'linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.7), transparent)',
                      color: 'white',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: hoveredIndex === index ? 'flex-end' : 'center'
                    }}
                  >
                    {hoveredIndex === index ? (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <h2 style={{ 
                          fontSize: '3.5rem',
                          marginBottom: '1rem'
                        }}>
                          {section.shortTitle}
                        </h2>
                        
                        {section.projects.map((project, idx) => (
                          <div key={idx} style={{ marginBottom: '1rem' }}>
                            <div style={{ 
                              display: 'flex', 
                              alignItems: 'center', 
                              gap: '1rem',
                              marginBottom: '0.5rem'
                            }}>
                              <h3 style={{ 
                                fontSize: '1.8rem',
                                color: '#ffffff',
                                margin: 0
                              }}>
                                {project.name}
                              </h3>
                              {section.github && (
                                <a 
                                  href={section.github}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  style={{
                                    color: 'white',
                                    opacity: 0.8,
                                    transition: 'opacity 0.2s ease'
                                  }}
                                  onMouseEnter={e => e.currentTarget.style.opacity = 1}
                                  onMouseLeave={e => e.currentTarget.style.opacity = 0.8}
                                >
                                  <Github size={28} />  
                                </a>
                              )}
                            </div>
                            <p style={{ 
                              fontSize: '1.4rem',
                              marginBottom: '0.5rem',
                              color: 'rgba(255, 255, 255, 0.9)'
                            }}>
                              {project.description}
                            </p>
                            <p style={{ 
                              fontSize: '1.2rem',
                              marginBottom: '0.8rem',
                              color: 'rgba(255, 255, 255, 0.7)'
                            }}>
                              {project.tech}
                            </p>
                            <ul style={{ 
                              listStyle: 'none', 
                              padding: 0,
                              margin: 0 
                            }}>
                              {project.details.map((detail, detailIdx) => (
                                <li 
                                  key={detailIdx}
                                  style={{ 
                                    fontSize: '1.1rem',
                                    marginBottom: '0.3rem',
                                    color: 'rgba(255, 255, 255, 0.8)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                  }}
                                >
                                  <span style={{ color: section.bgColor }}>•</span>
                                  {detail}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </motion.div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ 
                          opacity: hoveredIndex === null ? 1 : 0
                        }}
                        transition={{ 
                          duration: 0.3,
                          delay: hoveredIndex === null ? 0.35 : 0
                        }}
                        style={{ 
                          width: '100%',
                          height: '100%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          padding: 0,
                          margin: 0
                        }}
                      >
                        <h2 style={{ 
                          fontSize: '15vh',
                          fontWeight: '800',
                          fontFamily: "'Arial Narrow', Arial, sans-serif",
                          letterSpacing: '-0.05em',
                          textAlign: 'center',
                          width: '100%',
                          margin: 0,
                          padding: 0,
                          lineHeight: '0.9',
                          whiteSpace: 'pre-wrap',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          textTransform: 'uppercase'
                        }}>
                          {section.title}
                        </h2>
                      </motion.div>
                    )}
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        ))}
      </div>

      <style>
        {`
          @keyframes blueGradient {
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
    </div>
  );
};

export default Portfolio;