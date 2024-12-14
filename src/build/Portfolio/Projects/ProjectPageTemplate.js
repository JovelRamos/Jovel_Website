import React from 'react';
import { motion } from 'framer-motion';
import { Github, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../../components/ThemeContext';

const ProjectPageTemplate = ({ 
  title, 
  description, 
  tech, 
  details, 
  bgColor, 
  githubLink 
}) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ 
        minHeight: '100vh', 
        padding: '2rem',
        backgroundColor: 'var(--background-color)',
        color: 'var(--text-color)',
        transition: 'color 0.3s, background-color 0.3s'
      }}
    >
      <Link
        to="/portfolio"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          color: 'var(--text-color)',
          textDecoration: 'none',
          fontSize: '1.1rem',
          marginBottom: '2rem',
          transition: 'opacity 0.3s ease'
        }}
        onMouseEnter={e => e.currentTarget.style.opacity = 0.8}
        onMouseLeave={e => e.currentTarget.style.opacity = 1}
      >
        <ArrowLeft size={24} />
        Back to Projects
      </Link>

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
            margin: 0,
            textShadow: 'var(--text-shadow-bold)',
            color: bgColor  // Using section's bgColor
          }}>
            {title}
          </h1>
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'var(--text-color)',
                opacity: 0.8,
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = 1}
              onMouseLeave={e => e.currentTarget.style.opacity = 0.8}
            >
              <Github size={28} />
            </a>
          )}
        </div>

        <div style={{
          backgroundColor: 'var(--background-secondary)',
          backdropFilter: 'blur(10px)',
          borderRadius: '1rem',
          padding: '2rem',
          marginTop: '2rem',
          border: `2px solid ${bgColor}`,  // Using section's bgColor
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          transition: 'border-color 0.3s'
        }}>
          <p style={{ 
            fontSize: '1.5rem',
            marginBottom: '2rem',
            lineHeight: 1.6,
            color: 'var(--text-secondary)'
          }}>
            {description}
          </p>

          <div style={{ marginBottom: '2rem' }}>
            <h2 style={{
              fontSize: '1.8rem',
              marginBottom: '1rem',
              color: bgColor  // Using section's bgColor
            }}>
              Technologies
            </h2>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem'
            }}>
              {tech.split('•').map((item, index) => (
                <span
                  key={index}
                  style={{
                    padding: '0.5rem 1rem',
                    borderRadius: '2rem',
                    backgroundColor: 'var(--background-third)',
                    fontSize: '0.9rem',
                    color: 'var(--text-color)',
                    border: `1px solid ${bgColor}`,  // Using section's bgColor
                    transition: 'border-color 0.3s'
                  }}
                >
                  {item.trim()}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 style={{
              fontSize: '1.8rem',
              marginBottom: '1rem',
              color: bgColor  // Using section's bgColor
            }}>
              Key Features
            </h2>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              {details.map((detail, index) => (
                <li
                  key={index}
                  style={{ 
                    fontSize: '1.1rem',
                    marginBottom: '0.8rem',
                    color: 'var(--text-secondary)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <span style={{ 
                    color: bgColor  // Using section's bgColor
                  }}>•</span>
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

export default ProjectPageTemplate;