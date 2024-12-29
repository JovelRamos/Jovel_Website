import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';
import portraitImage from '../../assets/portrait.png';
import AnimatedHeading from './AnimatedHeading';
import { useTheme } from '../../components/ThemeContext';

const Home = () => {
  const { accentColor } = useTheme();
  
  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: { type: "spring", stiffness: 300 }
    }
  };

  return (
    <div className="min-h-screen flex items-start justify-center pt-[15vh] dark:bg-[#121212]">
      <div className="w-full max-w-[1200px] flex items-center justify-center gap-24 px-8">
        <div className="max-w-[700px] flex-1 space-y-8">
          <AnimatedHeading />
          
          <motion.div 
            className="h-0.5 w-24"
            style={{ backgroundColor: accentColor }}
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
          
          <h2 className="text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Computer Engineer Student
            <br /> 
            <span style={{ color: accentColor }}>
              @ San Jose State University
            </span>
          </h2>
          
          <div className="flex gap-3">
            <a
              href="https://www.linkedin.com/in/jovel-ramos/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <Linkedin style={{ color: accentColor }} size={30} />
            </a>
            <a
              href="https://github.com/jovelramos"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <Github style={{ color: accentColor }} size={30} />
            </a>
          </div>
        </div>
        
        <motion.div 
          className="flex-none w-[500px] flex justify-center items-center relative"
          whileHover="hover"
          variants={imageVariants}
        >
          {/* Glow effect wrapper */}
          <motion.div
            className="absolute inset-0 rounded-lg"
            initial={{ 
              boxShadow: `0 0 0px 0px ${accentColor}`,
              opacity: 0
            }}
            animate={{ 
              boxShadow: `0 0 40px 10px ${accentColor}`,
              opacity: 0.8
            }}
            transition={{ 
              delay: 1.5, 
              duration: 1.5, 
              ease: [0.4, 0, 0.2, 1] // Custom easing for more dramatic effect
            }}
          />

          {/* Portrait image */}
          <motion.img
            src={portraitImage}
            alt="Jovel's Portrait"
            className="w-[500px] h-[500px] object-cover rounded-lg relative z-10"
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1.5 }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;