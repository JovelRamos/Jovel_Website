import React from 'react';
import ProjectPageTemplate from './ProjectPageTemplate';
import imagePreview from '../../../assets/rmsjsu_demo1.png';  // Add this import

const WebExtPage = () => {
  const projectData = {
    title: "RateMySJSU",
    description: "A Google Chrome extension that seamlessly integrates RateMyProfessors data into SJSU class schedules, helping students make informed course selections.",
    tech: "HTML • CSS • JavaScript • GraphQL",
    details: [
      "Integrates with SJSU class schedules",
      "Uses Chrome Storage & Runtime APIs",
      "Built with jQuery DataTables"
    ],
    bgColor: "#e63946",
    githubLink: "https://github.com/JovelRamos/RateMySJSU",
    imagePreview: imagePreview  
  };

  return <ProjectPageTemplate {...projectData} />;
};

export default WebExtPage;