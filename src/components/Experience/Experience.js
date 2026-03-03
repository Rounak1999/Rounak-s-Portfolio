import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Experience.css';

const experiences = [
  {
    period: 'July 2021 — Present',
    title: 'Senior Frontend Developer',
    company: 'RiverHouse Technologies / Truleague',
    location: 'Chhattisgarh, India',
    description:
      'Delivering enterprise-grade web and mobile applications using React.js, Angular, and React Native with full-stack exposure via Node.js and Firebase. Leading process improvements and ensuring WCAG 2.1/2.2 accessibility compliance.',
    achievements: [
      'Delivered projects to multiple enterprise clients, achieving 100% client satisfaction; led process improvements reducing codebase size by 25% and improving performance by 30%',
      'Built responsive, WCAG 2.1/2.2-compliant Angular and React.js applications; proposed enhancements that extended project scope and increased client revenue',
      'Collaborated with cross-functional Agile teams (backend, QA, design), ensuring seamless REST API integration, accessibility compliance, and on-time delivery',
      'Wrote unit tests using Jest, achieving high code coverage; participated in sprint planning, code reviews, and technical documentation',
    ],
    tech: ['React.js', 'Angular', 'TypeScript', 'Redux', 'Material UI', 'REST APIs'],
    type: 'react',
  },
  {
    period: 'March 2021 — July 2021',
    title: 'React.js & React Native Developer — Intern',
    company: 'P-Coder Technologies',
    location: 'Chhattisgarh, India',
    description:
      'Built web and mobile applications using React.js and React Native, collaborating with UI/UX and backend teams for end-to-end delivery.',
    achievements: [
      'Built Advertisement Booking web application using React.js and Material UI',
      'Developed a Car Booking Android app using React Native',
      'Collaborated with UI/UX and backend teams for seamless end-to-end delivery',
      'Gained hands-on experience with component-driven architecture and REST API integration',
    ],
    tech: ['React.js', 'React Native', 'Material UI', 'REST APIs'],
    type: 'react',
  },
  {
    period: 'January 2020 — January 2021',
    title: 'React Native Developer — Intern',
    company: 'Pylons Technologies',
    location: 'Chhattisgarh, India',
    description:
      'Developed mobile applications using React Native with REST API integration, working in an Agile environment.',
    achievements: [
      'Developed Guruvaani — an Android coaching application using React Native + REST APIs',
      'Enabled students to access study materials through a user-friendly mobile interface',
      'Tested across multiple devices ensuring cross-device compatibility',
      'Worked in an Agile environment with sprint-based deliveries',
    ],
    tech: ['React Native', 'JavaScript', 'REST APIs', 'Android'],
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
