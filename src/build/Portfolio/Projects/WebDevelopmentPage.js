import React from 'react';
import ProjectPageTemplate from './ProjectPageTemplate';

const WebDevelopmentPage = () => {
  const projectData = {
    title: "Personal Website",
    description: "A modern, responsive portfolio website built with React and featuring dynamic themes and animations.",
    tech: "React • Framer Motion • CSS",
    details: [
      "Dynamic theme switching",
      "Responsive design",
      "Custom animations",
      "Modern UI/UX"
    ],
    bgColor: "#7757FF",
    githubLink: "https://github.com/JovelRamos/Jovel_Website",
    showPreview: false

  };

  return <ProjectPageTemplate {...projectData} />;
};

export default WebDevelopmentPage;  