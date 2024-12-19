import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulated API call
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

  return (
    <div className="contact-container" style={{ 
      minHeight: '100vh', 
      padding: '2rem',
      backgroundColor: 'var(--background-color, white)'
    }}>
      <h1 className="main-heading" style={{
        textAlign: 'center',
        marginBottom: '1rem'
      }}>
        Get in <span className="accent-text" style={{ color: 'var(--accent-color, #3498db)' }}>Touch</span>
      </h1>
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
            style={{
              width: '100%',
              padding: '0.75rem',
              borderRadius: '4px',
              border: '1px solid var(--border-color, #ddd)',
              backgroundColor: 'var(--input-background, white)',
              color: 'var(--text-color, #333)',
              transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
              outline: 'none'
            }}
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
            style={{
              width: '100%',
              padding: '0.75rem',
              borderRadius: '4px',
              border: '1px solid var(--border-color, #ddd)',
              backgroundColor: 'var(--input-background, white)',
              color: 'var(--text-color, #333)',
              transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
              outline: 'none'
            }}
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
              width: '100%',
              padding: '0.75rem',
              borderRadius: '4px',
              border: '1px solid var(--border-color, #ddd)',
              backgroundColor: 'var(--input-background, white)',
              color: 'var(--text-color, #333)',
              resize: 'vertical',
              transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
              outline: 'none'
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
    </div>
  );
};

export default Contact;