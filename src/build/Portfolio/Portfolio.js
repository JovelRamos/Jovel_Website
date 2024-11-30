import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Portfolio sections data
  const sections = [
    {
      title: "Web Development",
      description: "Full-stack web applications built with modern technologies",
      bgColor: "var(--accent-color)",
      projects: [
        { name: "Project 1", tech: "React • Node.js • MongoDB" },
        { name: "Project 2", tech: "Next.js • Firebase • Tailwind" }
      ]
    },
    {
      title: "Mobile Apps",
      description: "Cross-platform mobile applications",
      bgColor: "#7757FF",
      projects: [
        { name: "App 1", tech: "React Native • Firebase" },
        { name: "App 2", tech: "Flutter • GraphQL" }
      ]
    },
    {
      title: "UI/UX Design",
      description: "User interface and experience design projects",
      bgColor: "#FFD429",
      projects: [
        { name: "Design 1", tech: "Figma • Adobe XD" },
        { name: "Design 2", tech: "Sketch • Principle" }
      ]
    },
    {
      title: "Open Source",
      description: "Contributions to open source projects",
      bgColor: "#FF3E0F",
      projects: [
        { name: "Library 1", tech: "TypeScript • Jest" },
        { name: "Tool 2", tech: "Python • Docker" }
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
        My <span className="accent-text">Portfolio</span>
      </motion.h1>
      
      <div className="animated-line" />

      <div style={{
        display: 'flex',
        gap: '1rem',
        height: '70vh',
        margin: '2rem 0',
        position: 'relative'
      }}>
        {sections.map((section, index) => (
          <motion.div
            key={section.title}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            animate={{
              flex: hoveredIndex === index ? 3 : 1,
              backgroundColor: hoveredIndex === index 
                ? section.bgColor 
                : 'var(--background-secondary)'
            }}
            initial={{
              flex: 1,
              backgroundColor: 'var(--background-secondary)'
            }}
            transition={{
              flex: { duration: 0.3, ease: "easeOut" },
              backgroundColor: { duration: 0.3 }
            }}
            style={{
              borderRadius: '1rem',
              position: 'relative',
              overflow: 'hidden',
              cursor: 'pointer'
            }}
          >
            <motion.div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '2rem',
                background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)',
                color: 'white'
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: hoveredIndex === index ? 1 : 0.7,
                y: hoveredIndex === index ? 0 : 20
              }}
              transition={{ duration: 0.3 }}
            >
              <h2 style={{ 
                fontSize: hoveredIndex === index ? '2rem' : '1.5rem',
                marginBottom: '1rem',
                transition: 'font-size 0.3s ease'
              }}>
                {section.title}
              </h2>
              
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ 
                  opacity: hoveredIndex === index ? 1 : 0,
                  height: hoveredIndex === index ? 'auto' : 0
                }}
                transition={{ duration: 0.3 }}
              >
                <p style={{ marginBottom: '1rem' }}>{section.description}</p>
                {section.projects.map((project, idx) => (
                  <div key={idx} style={{ marginBottom: '0.5rem' }}>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>
                      {project.name}
                    </h3>
                    <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>
                      {project.tech}
                    </p>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;