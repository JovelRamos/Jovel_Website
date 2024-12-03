import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

const Portfolio = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

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
      title: "iOS\nDEV",
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
      title: "WEB\nDEV",
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
        gap: '1rem',
        height: '40vh',
        margin: '2rem 0',
        position: 'relative'
      }}>
        {sections.map((section, index) => (
          <motion.div
            key={section.title}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
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
                  transition={{ duration: 0.3 }}
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
                    fontSize: '20vh',
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
        ))}
      </div>
    </div>
  );
};

export default Portfolio;