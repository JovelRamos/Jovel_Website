import React from 'react';
import ProjectPageTemplate from './ProjectPageTemplate';

const UpcomingPage = () => {
  const projectData = {
    title: "Coming Soon",
    description: "New and exciting projects coming soon. Stay tuned for updates!",
    tech: "Next.js • TypeScript • More to come",
    details: [
      "Exploring new technologies",
      "Focusing on innovation",
      "Coming soon"
    ],
    bgColor: "#FF3E0F",
    githubLink: null
  };

  return <ProjectPageTemplate {...projectData} />;
};

export default UpcomingPage;