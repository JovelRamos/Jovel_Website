import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../components/ThemeContext';

const AnimatedHeading = () => {
  const { accentColor } = useTheme();

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
      className="text-[6rem] font-bold mb-8 whitespace-nowrap leading-none dark:text-white"
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
          className="inline-block"
          style={{ color: accentColor }}
          animate={{
            textShadow: [
              "none",
              `0 0 40px ${accentColor}80`
            ],
            transition: {
              delay: 1.5 + (index * 0.1),
              duration: 0.3
            }
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default AnimatedHeading;