import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Github, Code2 } from "lucide-react";
import { Link } from "react-router-dom";

// Component for feature dots on the preview image
const FeatureDot = ({ feature, bgColor, hoveredFeature, setHoveredFeature }) => (
  <motion.div
    style={{
      position: "absolute",
      ...feature.position,
    }}
    onHoverStart={() => setHoveredFeature(feature)}
    onHoverEnd={() => setHoveredFeature(null)}
    whileHover={{ scale: 1.2 }}
  >
    <motion.span
      className="feature-dot"
      style={{
        display: "block",
        width: "1rem",
        height: "1rem",
        borderRadius: "50%",
        backgroundColor: bgColor,
        cursor: "pointer",
      }}
    />
    <motion.span
      className="feature-ring"
      style={{
        position: "absolute",
        top: "-4px",
        left: "-4px",
        width: "24px",
        height: "24px",
        borderRadius: "50%",
        border: `2px solid ${bgColor}`,
        opacity: 0.5,
      }}
      animate={{ scale: [1, 1.5, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
    
    <AnimatePresence>
      {hoveredFeature?.id === feature.id && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.9 }}
          transition={{ duration: 0.2 }}
          style={{
            position: "absolute",
            top: "100%",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "var(--background-secondary)",
            padding: "1rem",
            borderRadius: "0.5rem",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            width: "200px",
            zIndex: 10,
            pointerEvents: "none",
          }}
        >
          <h3 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: "0.5rem", color: bgColor }}>
            {feature.title}
          </h3>
          <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", margin: 0 }}>
            {feature.description}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

// Component for tech stack cards
const TechCard = ({ tech, bgColor }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="tech-card"
    style={{
      backgroundColor: "var(--background-secondary)",
      borderRadius: "1rem",
      padding: "1.5rem",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    }}
  >
    <div style={{
      display: "flex",
      alignItems: "center",
      gap: "1rem",
      marginBottom: "1rem",
    }}>
      <div style={{ color: bgColor }}>{tech.icon}</div>
      <h3 style={{
        fontSize: "1.25rem",
        fontWeight: 600,
        color: "var(--text-color)",
      }}>
        {tech.name}
      </h3>
    </div>
    <p style={{
      color: "var(--text-secondary)",
      fontSize: "0.875rem",
    }}>
      {tech.usage}
    </p>
  </motion.div>
);

// Component for feature cards
const FeatureCard = ({ detail, index, bgColor }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    style={{
      backgroundColor: "var(--background-third)",
      borderRadius: "0.5rem",
      padding: "1rem",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    }}
  >
    <h3 style={{
      fontSize: "1rem",
      fontWeight: 600,
      marginBottom: "0.5rem",
      color: "var(--text-color)",
    }}>
      Feature {index + 1}
    </h3>
    <p style={{
      fontSize: "0.875rem",
      color: "var(--text-secondary)",
    }}>
      {detail}
    </p>
  </motion.div>
);

const ProjectPageTemplate = ({
  title,
  description,
  tech,
  details,
  bgColor,
  githubLink,
  showPreview = true,
  imagePreview,
}) => {
  const [hoveredFeature, setHoveredFeature] = useState(null);

  // Feature positions for interactive preview
  const mockupFeatures = [
    {
      id: "feature1",
      title: "Feature 1",
      description: details[0],
      position: { top: "20%", left: "15%" },
    },
    {
      id: "feature2",
      title: "Feature 2",
      description: details[1],
      position: { top: "40%", left: "60%" },
    },
    {
      id: "feature3",
      title: "Feature 3",
      description: details[2],
      position: { top: "70%", left: "25%" },
    },
  ];

  // Process tech stack items
  const techStack = tech.split("•").map((techItem) => ({
    name: techItem.trim(),
    icon: <Code2 className="w-8 h-8" />,
    description: `Implementation using ${techItem.trim()}`,
    usage: `Key technology in the project's development`,
  }));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        minHeight: "100vh",
        padding: "2rem",
        backgroundColor: "var(--background-color)",
        color: "var(--text-color)",
        transition: "color 0.3s, background-color 0.3s",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Navigation */}
        <Link
          to="/portfolio"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            color: "var(--text-color)",
            textDecoration: "none",
            marginBottom: "2rem",
            transition: "color 0.3s",
          }}
        >
          <ArrowLeft size={24} />
          Back to Projects
        </Link>

        {/* Header */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          marginBottom: "3rem",
        }}>
          <h1 style={{
            fontSize: "3.5rem",
            margin: 0,
            color: bgColor,
            fontWeight: "bold",
          }}>
            {title}
          </h1>
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: bgColor,
                transition: "color 0.3s",
              }}
            >
              <Github size={35} />
            </a>
          )}
        </div>

        {/* Overview Section */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
          style={{
            backgroundColor: "var(--background-secondary)",
            borderRadius: "1rem",
            padding: "2rem",
            marginBottom: "3rem",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h2 style={{
            fontSize: "1.5rem",
            fontWeight: 600,
            marginBottom: "1rem",
            color: bgColor,
          }}>
            Overview
          </h2>
          <p style={{
            color: "var(--text-secondary)",
            lineHeight: 1.6,
          }}>
            {description}
          </p>
        </motion.div>

        {/* Interactive Preview Section */}
        {showPreview && imagePreview && (
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            style={{
              backgroundColor: "var(--background-secondary)",
              borderRadius: "1rem",
              overflow: "hidden",
              marginBottom: "3rem",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h2 style={{
              fontSize: "1.5rem",
              fontWeight: 600,
              margin: "2rem",
              color: bgColor,
            }}>
              Interactive Preview
            </h2>
            <div style={{
              position: "relative",
              width: "100%",
              height: "auto",
              backgroundColor: "var(--background-third)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
              <div style={{
                position: "relative",
                width: "100%",
                maxWidth: "1200px",
                margin: "0 auto",
              }}>
                <img
                  src={imagePreview}
                  alt="Project Preview"
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                    margin: "0 auto",
                  }}
                />
                {mockupFeatures.map((feature) => (
                  <FeatureDot
                    key={feature.id}
                    feature={feature}
                    bgColor={bgColor}
                    hoveredFeature={hoveredFeature}
                    setHoveredFeature={setHoveredFeature}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Tech Stack Section */}
        <div style={{ marginBottom: "3rem" }}>
          <h2 style={{
            fontSize: "1.5rem",
            fontWeight: 600,
            marginBottom: "1.5rem",
            color: bgColor,
          }}>
            Technology Stack
          </h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "1.5rem",
          }}>
            {techStack.map((tech) => (
              <TechCard key={tech.name} tech={tech} bgColor={bgColor} />
            ))}
          </div>
        </div>

        {/* Features Section */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
          style={{
            backgroundColor: "var(--background-secondary)",
            borderRadius: "1rem",
            padding: "2rem",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h2 style={{
            fontSize: "1.5rem",
            fontWeight: 600,
            marginBottom: "1.5rem",
            color: bgColor,
          }}>
            Key Features
          </h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "1.5rem",
          }}>
            {details.map((detail, index) => (
              <FeatureCard
                key={index}
                detail={detail}
                index={index}
                bgColor={bgColor}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectPageTemplate;