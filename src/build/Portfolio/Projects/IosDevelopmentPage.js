import React from 'react';
import ProjectPageTemplate from './ProjectPageTemplate';

const IosDevelopmentPage = () => {
  const projectData = {
    title: "Reflect",
    description: "AI-powered conversation assistant for Apple devices with real-time transcription and smart summarization capabilities.",
    tech: "SwiftUI • UIKit • CloudKit • Core ML",
    details: [
      "Real-time speech recognition",
      "iCloud synchronization",
      "Advanced privacy features",
      "Deep Apple ecosystem integration"
    ],
    bgColor: "#FFD429",
    githubLink: "https://github.com/athehmd/Reflect",
  };

  return <ProjectPageTemplate {...projectData} />;
};

export default IosDevelopmentPage;