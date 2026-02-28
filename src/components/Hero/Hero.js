import React, { useState, useEffect } from 'react';
import './Hero.css';

const titles = [
  'Senior Frontend Developer',
  'React.js Specialist',
  'Angular Expert',
  'UI/UX Enthusiast',
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    let timeout;

    if (!isDeleting && charIndex < currentTitle.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentTitle.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 80);
    } else if (!isDeleting && charIndex === currentTitle.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentTitle.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 40);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, titleIndex]);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <div className="hero__bg">
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__orb hero__orb--3" />
        <div className="hero__grid" />
      </div>

      <div className="hero__content container">
        <div className="hero__text">
          <p className="hero__greeting animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <span className="hero__wave">👋</span> Hello, I'm
          </p>
          <h1 className="hero__name animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Rounak <span className="hero__name-accent">Gour</span>
          </h1>
          <div className="hero__title-wrapper animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <span className="hero__title-static">I'm a </span>
            <span className="hero__title-typed">{displayText}</span>
            <span className="hero__cursor">|</span>
          </div>
          <p className="hero__tagline animate-fade-in" style={{ animationDelay: '0.8s' }}>
            Building Scalable, High-Performance Web Applications
          </p>
          <div className="hero__stats animate-fade-in" style={{ animationDelay: '1s' }}>
            <div className="hero__stat">
              <span className="hero__stat-number">5+</span>
              <span className="hero__stat-label">Years Experience</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-number">30+</span>
              <span className="hero__stat-label">Projects Delivered</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-number">15+</span>
              <span className="hero__stat-label">Happy Clients</span>
            </div>
          </div>
          <div className="hero__actions animate-fade-in" style={{ animationDelay: '1.2s' }}>
            <button className="btn-primary" onClick={() => handleScroll('projects')}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              View Projects
            </button>
            <button className="btn-outline" onClick={() => handleScroll('contact')}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              Contact Me
            </button>
          </div>
        </div>

        <div className="hero__visual animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="hero__code-window">
            <div className="hero__code-header">
              <span className="hero__code-dot hero__code-dot--red" />
              <span className="hero__code-dot hero__code-dot--yellow" />
              <span className="hero__code-dot hero__code-dot--green" />
              <span className="hero__code-filename">developer.tsx</span>
            </div>
            <div className="hero__code-body">
              <pre><code>{`const developer = {
  name: "Rounak Gour",
  role: "Senior Frontend Dev",
  experience: "5+ years",
  skills: [
    "React.js", "Angular 14+",
    "TypeScript", "Next.js"
  ],
  passion: "Building amazing UIs",
  available: true
};`}</code></pre>
            </div>
          </div>
        </div>
      </div>

      <div className="hero__scroll-indicator animate-fade-in" style={{ animationDelay: '1.5s' }}>
        <button onClick={() => handleScroll('about')} className="hero__scroll-btn" aria-label="Scroll down">
          <span className="hero__scroll-text">Scroll Down</span>
          <span className="hero__scroll-arrow">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 13l5 5 5-5M7 6l5 5 5-5"/></svg>
          </span>
        </button>
      </div>
    </section>
  );
}
