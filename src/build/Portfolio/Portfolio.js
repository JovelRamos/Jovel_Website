import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ArrowLeft } from 'lucide-react';

const ProjectPage = ({ project, section, onBack }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ 
        minHeight: '100vh', 
        padding: '2rem',
        backgroundColor: 'var(--background-color)' // Changed to use theme background
      }}
    >
      <button
        onClick={onBack}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          color: 'var(--text-color)', // Changed to use theme text color
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          fontSize: '1.1rem',
          marginBottom: '2rem'
        }}
      >
        <ArrowLeft size={24} />
        Back to Projects
      </button>
      
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '2rem'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          marginBottom: '2rem'
        }}>
          <h1 style={{ 
            fontSize: '3.5rem',
            color: section.bgColor, // Changed to use section color
            margin: 0
          }}>
            {project.name}
          </h1>
          {section.github && (
            <a
              href={section.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: section.bgColor, // Changed to use section color
                opacity: 0.8,
                transition: 'opacity 0.2s ease'
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = 1}
              onMouseLeave={e => e.currentTarget.style.opacity = 0.8}
            >
              <Github size={35} />
            </a>
          )}
        </div>

        <div style={{
          backgroundColor: section.bgColor, // Using section color for panel
          borderRadius: '1rem',
          padding: '2rem',
          color: 'white'
        }}>
          <p style={{ 
            fontSize: '1.5rem',
            marginBottom: '2rem',
            lineHeight: 1.6
          }}>
            {project.description}
          </p>
          
          <div style={{ marginBottom: '2rem' }}>
            <h2 style={{
              fontSize: '1.8rem',
              marginBottom: '1rem'
            }}>
              Technologies
            </h2>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem'
            }}>
              {project.tech.split('•').map((tech, index) => (
                <span
                  key={index}
                  style={{
                    padding: '0.5rem 1rem',
                    borderRadius: '2rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    fontSize: '0.9rem'
                  }}
                >
                  {tech.trim()}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 style={{
              fontSize: '1.8rem',
              marginBottom: '1rem'
            }}>
              Key Features
            </h2>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '0.8rem'
            }}>
              {project.details.map((detail, index) => (
                <li
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '1.1rem'
                  }}
                >
                  <span style={{ color: 'white' }}>•</span>
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const sections = [
    {
      title: "WEB EXT",
      shortTitle: "Browser Extension",
      description: "Chrome Extensions & Web Tools",
      bgColor: "#e63946",
      github: "https://github.com/JovelRamos/RateMySJSU",
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

  if (selectedProject) {
    return (
      <ProjectPage
        project={selectedProject.project}
        section={selectedProject.section}
        onBack={() => setSelectedProject(null)}
      />
    );
  }

  return (
    <div style={{ 
      minHeight: '100vh', 
      padding: '2rem',
      backgroundColor: 'var(--background-color)'
    }}>
      <motion.h1 
        className="main-heading"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My <span className="accent-text">Projects</span>
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
                  onClick={() => setSelectedProject({
                    project: section.projects[0],
                    section: section
                  })}
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
                    cursor: 'pointer',
                    padding: 0
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
                          fontSize: '3rem',
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
                                fontSize: '1.3rem',
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
                                  <Github size={20} />
                                </a>
                              )}
                            </div>
                            <p style={{ 
                              fontSize: '1rem', 
                              marginBottom: '0.5rem',
                              color: 'rgba(255, 255, 255, 0.9)'
                            }}>
                              {project.description}
                            </p>
                            <p style={{ 
                              fontSize: '0.9rem', 
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
                                    fontSize: '0.9rem',
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
    </div>
  );
};

export default Portfolio;