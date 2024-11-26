import React from 'react';
import { motion } from 'framer-motion';

const AnimatedHeading = () => {
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

  const text = "Hi I'm ";
  const name = "Jovel";

  return (
    <motion.h1 
      className="main-heading"
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
      {name.split('').map((char, index) => (
        <motion.span
          key={`name-${index}`}
          variants={letterVariants}
          className="inline-block accent-text"
        >
          {char}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default AnimatedHeading;