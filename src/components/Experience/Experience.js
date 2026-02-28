import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Experience.css';

const experiences = [
  {
    period: '2022 — Present',
    title: 'Senior Frontend Developer',
    company: 'Enterprise Solutions Company',
    location: 'India',
    description:
      'Leading frontend development for enterprise-level applications, architecting scalable solutions, and mentoring junior developers.',
    achievements: [
      'Led development of a React.js-based sports platform (Truleague) serving 50K+ users',
      'Implemented complex state management using Redux with optimized selectors',
      'Improved application performance by 40% through code splitting and lazy loading',
      'Established component library used across 3+ projects',
    ],
    tech: ['React.js', 'TypeScript', 'Redux', 'REST APIs'],
    type: 'react',
  },
  {
    period: '2021 — 2022',
    title: 'Frontend Developer',
    company: 'Digital Agency',
    location: 'India',
    description:
      'Developed enterprise Angular applications with complex business workflows and real-time data handling.',
    achievements: [
      'Built Angular 14+ enterprise dashboard with role-based access control',
      'Integrated NgRx for complex state management across modules',
      'Developed reusable component library reducing dev time by 30%',
      'Implemented real-time data updates using WebSocket integration',
    ],
    tech: ['Angular 14+', 'TypeScript', 'NgRx', 'SCSS'],
    type: 'angular',
  },
  {
    period: '2020 — 2021',
    title: 'Frontend Developer',
    company: 'Tech Startup',
    location: 'India',
    description:
      'Full-stack frontend development with focus on responsive design and API integration.',
    achievements: [
      'Developed responsive web applications using React.js and Bootstrap',
      'Implemented RESTful API integration for dynamic content delivery',
      'Created pixel-perfect UIs from Figma designs with cross-browser support',
      'Participated in agile sprints and code review processes',
    ],
    tech: ['React.js', 'JavaScript ES6+', 'Bootstrap', 'REST APIs'],
    type: 'react',
  },
  {
    period: '2019 — 2020',
    title: 'Junior Frontend Developer',
    company: 'Software House',
    location: 'India',
    description:
      'Started professional career building web interfaces and learning modern frontend frameworks.',
    achievements: [
      'Built responsive landing pages and web applications',
      'Learned React.js and Angular fundamentals through production projects',
      'Contributed to 5+ client projects with on-time delivery',
      'Implemented HTML5, CSS3, and JavaScript solutions',
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript', 'React.js'],
    type: 'general',
  },
];

export default function Experience() {
  const [headerRef, headerVisible] = useScrollReveal();

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <div ref={headerRef} className={`section-header reveal ${headerVisible ? 'visible' : ''}`}>
          <span className="section-label">Experience</span>
          <h2 className="section-title">My Professional Journey</h2>
          <p className="section-subtitle">
            A timeline of my growth as a frontend developer
          </p>
          <div className="gradient-divider" />
        </div>

        <div className="experience__timeline">
          <div className="experience__timeline-line" />
          {experiences.map((exp, i) => (
            <ExperienceCard key={i} experience={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ experience, index }) {
  const [ref, isVisible] = useScrollReveal(0.1);
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`experience__item ${isLeft ? 'experience__item--left' : 'experience__item--right'} ${
        isVisible ? 'visible' : ''
      }`}
    >
      <div className="experience__dot">
        <span className={`experience__dot-inner experience__dot-inner--${experience.type}`} />
      </div>

      <div className="experience__card">
        <span className="experience__period">{experience.period}</span>
        <h3 className="experience__title">{experience.title}</h3>
        <span className="experience__company">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          {experience.company} • {experience.location}
        </span>
        <p className="experience__desc">{experience.description}</p>

        <ul className="experience__achievements">
          {experience.achievements.map((a, i) => (
            <li key={i} className="experience__achievement">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--accent-secondary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              {a}
            </li>
          ))}
        </ul>

        <div className="experience__tech">
          {experience.tech.map((t) => (
            <span key={t} className="experience__tech-tag">{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
