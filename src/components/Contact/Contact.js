import React, { useState } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Contact.css';

const socialLinks = [
  {
    name: 'Email',
    href: 'mailto:rounakgour110@gmail.com',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
    ),
    label: 'rounakgour110@gmail.com',
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/rounak-gour',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
    ),
    label: 'linkedin.com/in/rounak-gour',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/Rounak1999',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
    ),
    label: 'github.com/Rounak1999',
  },
];

export default function Contact() {
  const [headerRef, headerVisible] = useScrollReveal();
  const [formRef, formVisible] = useScrollReveal(0.1);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    else if (formData.message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div ref={headerRef} className={`section-header reveal ${headerVisible ? 'visible' : ''}`}>
          <span className="section-label">Contact</span>
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-subtitle">
            Have a project in mind? Let's discuss how I can help bring your ideas to life.
          </p>
          <div className="gradient-divider" />
        </div>

        <div ref={formRef} className={`contact__content reveal ${formVisible ? 'visible' : ''}`}>
          <div className="contact__info">
            <h3 className="contact__info-title">Get in Touch</h3>
            <p className="contact__info-text">
              I'm always open to discussing new projects, creative ideas, or opportunities to be
              part of your vision. Feel free to reach out!
            </p>

            <div className="contact__social-links">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="contact__social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="contact__social-icon">{link.icon}</span>
                  <div>
                    <span className="contact__social-name">{link.name}</span>
                    <span className="contact__social-label">{link.label}</span>
                  </div>
                </a>
              ))}
            </div>

            <div className="contact__availability">
              <span className="contact__status-dot" />
              <span>Currently available for freelance work</span>
            </div>
          </div>

          <form className="contact__form" onSubmit={handleSubmit} noValidate>
            {submitted && (
              <div className="contact__success">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                Message sent successfully! I'll get back to you soon.
              </div>
            )}

            <div className="contact__form-row">
              <div className="contact__form-group">
                <label htmlFor="name" className="contact__label">Your Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className={`contact__input ${errors.name ? 'contact__input--error' : ''}`}
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <span className="contact__error">{errors.name}</span>}
              </div>
              <div className="contact__form-group">
                <label htmlFor="email" className="contact__label">Your Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className={`contact__input ${errors.email ? 'contact__input--error' : ''}`}
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <span className="contact__error">{errors.email}</span>}
              </div>
            </div>

            <div className="contact__form-group">
              <label htmlFor="subject" className="contact__label">Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                className={`contact__input ${errors.subject ? 'contact__input--error' : ''}`}
                placeholder="Project Discussion"
                value={formData.subject}
                onChange={handleChange}
              />
              {errors.subject && <span className="contact__error">{errors.subject}</span>}
            </div>

            <div className="contact__form-group">
              <label htmlFor="message" className="contact__label">Message</label>
              <textarea
                id="message"
                name="message"
                className={`contact__input contact__textarea ${errors.message ? 'contact__input--error' : ''}`}
                placeholder="Tell me about your project..."
                rows={5}
                value={formData.message}
                onChange={handleChange}
              />
              {errors.message && <span className="contact__error">{errors.message}</span>}
            </div>

            <button type="submit" className="btn-primary contact__submit">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
