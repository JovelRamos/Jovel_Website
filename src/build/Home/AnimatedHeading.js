import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../components/ThemeContext';

const AnimatedHeading = () => {
  const { accentColor } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const letterVariants = {
    hidden: {
      y: 50,
      opacity: 0,
      scale: 0.5
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200
      }
    }
  };

  // Base gradient style that will be applied to all letters
  const gradientStyle = {
    background: 'linear-gradient(-45deg, #ff0000 0%, #ff6b00 50%, #ffa200 100%)',
    backgroundSize: '200% 200%',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    animation: 'warmGradient 3s ease infinite'
  };

  // Shadow effects based on hover state
  const shadowStyle = {
    filter: 'drop-shadow(0px 0px 3px rgba(255,255,255,0.3))',
    textShadow: isHovered 
      ? `
        2px 2px 1px rgba(255,255,255,0.15),
        4px 4px 2px rgba(255,200,150,0.15),
        6px 6px 3px rgba(255,150,100,0.15),
        8px 8px 4px rgba(255,100,50,0.15),
        10px 10px 5px rgba(255,50,0,0.15),
        12px 12px 25px rgba(255,0,0,0.25)
      `
      : `
        1px 1px 1px rgba(255,255,255,0.15),
        2px 2px 2px rgba(255,200,150,0.15),
        3px 3px 3px rgba(255,150,100,0.15),
        4px 4px 4px rgba(255,100,50,0.15),
        6px 6px 15px rgba(255,50,0,0.2)
      `
  };

  const text = "Hi I'm ";
  const name = "Jovel";

  return (
    <>
      <motion.h1
        className="text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 whitespace-nowrap leading-none dark:text-white"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {text.split('').map((char, index) => (
          <motion.span
            key={index}
            variants={letterVariants}
            className="inline-block"
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
        <motion.span
          className="inline-block"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          animate={{
            scale: isHovered ? 1.05 : 1,
            y: isHovered ? -5 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 25
          }}
        >
          {name.split('').map((char, index) => (
            <motion.span
              key={`name-${index}`}
              variants={letterVariants}
              className="inline-block"
              style={{ ...gradientStyle, ...shadowStyle }}
            >
              {char}
            </motion.span>
          ))}
        </motion.span>
      </motion.h1>
      <style>
        {`
          @keyframes warmGradient {
            0% {
              background-position: 0% 50%;
            }
            25% {
              background-position: 100% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            75% {
              background-position: 0% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
        `}
      </style>
    </>
  );
};

export default AnimatedHeading;