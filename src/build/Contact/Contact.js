import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contact-container" style={{ minHeight: '100vh', padding: '2rem' }}>
      <h1 className="main-heading">
        Get in <span className="accent-text">Touch</span>
      </h1>
      <div className="animated-line" />
      
      <form onSubmit={handleSubmit} style={{
        maxWidth: '600px',
        margin: '2rem auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem'
      }}>
        <div className="form-group">
          <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem' }}>Name</label>
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
              border: '1px solid var(--text-secondary)',
              backgroundColor: 'var(--background-secondary)',
              color: 'var(--text-color)'
            }}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem' }}>Email</label>
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
              border: '1px solid var(--text-secondary)',
              backgroundColor: 'var(--background-secondary)',
              color: 'var(--text-color)'
            }}
          />
        </div>

        <div className="form-group">
          <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem' }}>Message</label>
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
              border: '1px solid var(--text-secondary)',
              backgroundColor: 'var(--background-secondary)',
              color: 'var(--text-color)',
              resize: 'vertical'
            }}
          />
        </div>

        <button
          type="submit"
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: 'var(--accent-color)',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease'
          }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;