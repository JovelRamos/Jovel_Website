// Portfolio.js
import React from 'react';

const Portfolio = () => {
  return (
    <div className="portfolio-container" style={{ minHeight: '100vh', padding: '2rem' }}>
      <h1 className="main-heading">
        My <span className="accent-text">Portfolio</span>
      </h1>
      <div className="animated-line" />
      
      <div className="portfolio-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        marginTop: '2rem'
      }}>
        {/* Sample Project Cards */}
        <div className="project-card" style={{
          backgroundColor: 'var(--background-secondary)',
          borderRadius: '8px',
          padding: '1.5rem',
          transition: 'transform 0.3s ease',
          cursor: 'pointer'
        }}>
          <h3>Project 1</h3>
          <p className="project-description" style={{ color: 'var(--text-secondary)' }}>
            A brief description of your first project. Explain what you built and the technologies used.
          </p>
        </div>

        <div className="project-card" style={{
          backgroundColor: 'var(--background-secondary)',
          borderRadius: '8px',
          padding: '1.5rem',
          transition: 'transform 0.3s ease',
          cursor: 'pointer'
        }}>
          <h3>Project 2</h3>
          <p className="project-description" style={{ color: 'var(--text-secondary)' }}>
            A brief description of your second project. Explain what you built and the technologies used.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
