import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './About.css';

const highlights = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
    ),
    title: 'Clean Code',
    desc: 'Writing maintainable, scalable code following best practices and design patterns.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
    ),
    title: 'Enterprise Apps',
    desc: 'Building large-scale enterprise applications with complex business logic.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
    ),
    title: 'Performance',
    desc: 'Optimizing applications for speed, accessibility, and seamless user experience.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
    ),
    title: 'Component Architecture',
    desc: 'Creating reusable, modular component libraries that scale across projects.',
  },
];

export default function About() {
  const [headerRef, headerVisible] = useScrollReveal();
  const [contentRef, contentVisible] = useScrollReveal(0.1);

  return (
    <section id="about" className="section about">
      <div className="container">
        <div ref={headerRef} className={`section-header reveal ${headerVisible ? 'visible' : ''}`}>
          <span className="section-label">About Me</span>
          <h2 className="section-title">Passionate About Crafting Digital Experiences</h2>
          <div className="gradient-divider" />
        </div>

        <div ref={contentRef} className={`about__content reveal ${contentVisible ? 'visible' : ''}`}>
          <div className="about__text">
            <p className="about__bio">
              I'm a <strong>Senior Frontend Developer</strong> with over <strong>5 years of experience</strong> specializing 
              in <strong>React.js</strong> and <strong>Angular 14+</strong>. I have a deep understanding of 
              <strong> TypeScript</strong>, <strong>JavaScript ES6+</strong>, and modern frontend ecosystems.
            </p>
            <p className="about__bio">
              Throughout my career, I've been involved in building enterprise-level applications, 
              focusing on performance optimization, clean architecture, and creating reusable component 
              libraries. I'm passionate about delivering pixel-perfect UIs and seamless user experiences 
              that drive business value.
            </p>
            <p className="about__bio">
              I thrive in agile environments and love collaborating with cross-functional teams to 
              bring innovative ideas to life. My toolkit includes modern frameworks, state management 
              solutions like <strong>Redux</strong> and <strong>NgRx</strong>, and a strong foundation in 
              <strong> REST API integration</strong>.
            </p>
            <div className="about__tags">
              {['React.js', 'Angular 14+', 'TypeScript', 'JavaScript ES6+', 'REST APIs', 'Redux', 'NgRx'].map((tag) => (
                <span key={tag} className="about__tag">{tag}</span>
              ))}
            </div>
          </div>

          <div className="about__highlights">
            {highlights.map((item, i) => (
              <div key={i} className="about__highlight-card" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="about__highlight-icon">{item.icon}</div>
                <div>
                  <h4 className="about__highlight-title">{item.title}</h4>
                  <p className="about__highlight-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
