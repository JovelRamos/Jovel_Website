import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2
      }
    }
  };

  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200
      }
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
        duration: 0.5
      }
    }
  };

  // Gradient text style
  const gradientTextStyle = {
    display: 'inline-block',
    background: 'linear-gradient(-45deg, #8B0000 0%, #A40000 50%, #B22222 100%)',
    backgroundSize: '200% 200%',
    animation: 'gradientMove 3s ease infinite',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    filter: 'drop-shadow(0px 0px 2px rgba(255,255,255,0.3))',
    textShadow: isHovered 
      ? `
        2px 2px 1px rgba(255,255,255,0.15),
        4px 4px 2px rgba(255,200,200,0.15),
        6px 6px 3px rgba(255,150,150,0.15),
        8px 8px 4px rgba(255,100,100,0.15),
        10px 10px 5px rgba(255,50,50,0.15),
        12px 12px 25px rgba(139,0,0,0.25)
      `
      : `
        1px 1px 1px rgba(255,255,255,0.15),
        2px 2px 2px rgba(255,200,200,0.15),
        3px 3px 3px rgba(255,150,150,0.15),
        4px 4px 4px rgba(255,100,100,0.15),
        6px 6px 15px rgba(139,0,0,0.2)
      `
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const inputStyles = {
    width: '100%',
    padding: '0.75rem',
    borderRadius: '4px',
    border: '1px solid var(--border-color, #ddd)',
    backgroundColor: 'var(--input-background, white)',
    color: '#000',
    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
    outline: 'none'
  };

  return (
    <div className="contact-container" style={{ 
      minHeight: '100vh', 
      padding: '2rem',
      backgroundColor: 'var(--background-color, white)'
    }}>
      {/* Animated Title */}
      <motion.div
        className="text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className="text-7xl lg:text-8xl xl:text-9xl font-bold mb-8 whitespace-nowrap leading-none dark:text-white">
          {"Get in ".split('').map((char, index) => (
            <motion.span
              key={`getin-${index}`}
              variants={letterVariants}
              className="inline-block mx-1"
            >
              {char}
            </motion.span>
          ))}
          <motion.span
            variants={letterVariants}
            className="inline-block"
            style={gradientTextStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{
              scale: 1.05,
              y: -5,
              transition: { type: "spring", stiffness: 400, damping: 25 }
            }}
          >
            Touch
          </motion.span>
        </motion.h1>
      </motion.div>

      <div className="animated-line" style={{
        width: '60px',
        height: '4px',
        backgroundColor: 'var(--accent-color, #3498db)',
        margin: '0 auto 2rem',
        borderRadius: '2px'
      }} />
      
      {submitStatus === 'success' && (
        <div style={{
          maxWidth: '600px',
          margin: '0 auto 1rem',
          padding: '1rem',
          backgroundColor: '#e8f5e9',
          borderRadius: '4px',
          color: '#2e7d32',
          textAlign: 'center'
        }}>
          Message sent successfully!
        </div>
      )}

      <form onSubmit={handleSubmit} style={{
        maxWidth: '600px',
        margin: '2rem auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem'
      }}>
        <div className="form-group">
          <label htmlFor="name" style={{ 
            display: 'block', 
            marginBottom: '0.5rem',
            color: 'var(--text-color, #333)'
          }}>Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={inputStyles}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email" style={{ 
            display: 'block', 
            marginBottom: '0.5rem',
            color: 'var(--text-color, #333)'
          }}>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={inputStyles}
          />
        </div>

        <div className="form-group">
          <label htmlFor="message" style={{ 
            display: 'block', 
            marginBottom: '0.5rem',
            color: 'var(--text-color, #333)'
          }}>Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            style={{
              ...inputStyles,
              resize: 'vertical'
            }}
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: 'var(--accent-color, #3498db)',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: isSubmitting ? 'not-allowed' : 'pointer',
            transition: 'background-color 0.3s ease, transform 0.1s ease',
            opacity: isSubmitting ? 0.7 : 1,
            transform: 'scale(1)',
            ':active': {
              transform: 'scale(0.98)'
            }
          }}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      <style>
        {`
          @keyframes gradientMove {
            0% { background-position: 0% 50% }
            50% { background-position: 100% 50% }
            100% { background-position: 0% 50% }
          }
        `}
      </style>
    </div>
  );
};

export default Contact;