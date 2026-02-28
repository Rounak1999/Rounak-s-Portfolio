import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Projects.css';

const projects = [
  {
    title: 'Truleague',
    subtitle: 'Sports Platform',
    description:
      'A comprehensive sports platform built for real-time league management, team tracking, and live score updates. Developed with a focus on performance, scalability, and a seamless user experience.',
    role: 'Senior Frontend Developer',
    tech: ['React.js', 'TypeScript', 'Redux', 'REST APIs', 'SCSS'],
    features: [
      'Real-time live score updates',
      'Team & league management dashboard',
      'Responsive mobile-first design',
      'Complex state management with Redux',
    ],
    github: '#',
    live: '#',
    color: '#6c63ff',
  },
  {
    title: 'Enterprise Dashboard',
    subtitle: 'Admin Panel',
    description:
      'A feature-rich enterprise admin dashboard with advanced data visualization, role-based access control, and real-time analytics built using Angular.',
    role: 'Senior Frontend Developer',
    tech: ['Angular 14+', 'TypeScript', 'NgRx', 'Bootstrap', 'REST APIs'],
    features: [
      'Role-based access control',
      'Real-time analytics & charts',
      'Complex form handling',
      'Modular lazy-loaded architecture',
    ],
    github: '#',
    live: '#',
    color: '#00d4ff',
  },
  {
    title: 'E-Commerce Platform',
    subtitle: 'Online Store',
    description:
      'A modern e-commerce application with product catalog, shopping cart, payment gateway integration, and order management system.',
    role: 'Frontend Lead',
    tech: ['React.js', 'Next.js', 'Tailwind CSS', 'Redux', 'Stripe API'],
    features: [
      'Server-side rendering with Next.js',
      'Stripe payment integration',
      'Dynamic product filtering',
      'Optimized performance (95+ Lighthouse)',
    ],
    github: '#',
    live: '#',
    color: '#a855f7',
  },
];

export default function Projects() {
  const [headerRef, headerVisible] = useScrollReveal();

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div ref={headerRef} className={`section-header reveal ${headerVisible ? 'visible' : ''}`}>
          <span className="section-label">Projects</span>
          <h2 className="section-title">Featured Work</h2>
          <p className="section-subtitle">
            A selection of projects that showcase my skills and experience
          </p>
          <div className="gradient-divider" />
        </div>

        <div className="projects__grid">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const [ref, isVisible] = useScrollReveal(0.1);

  return (
    <div
      ref={ref}
      className={`projects__card reveal ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 0.15}s` }}
    >
      <div className="projects__card-glow" style={{ '--card-color': project.color }} />
      <div className="projects__card-content">
        <div className="projects__card-header">
          <div>
            <span className="projects__card-subtitle">{project.subtitle}</span>
            <h3 className="projects__card-title">{project.title}</h3>
          </div>
          <div className="projects__card-links">
            <a href={project.github} className="projects__card-link" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a href={project.live} className="projects__card-link" aria-label="Live Demo" target="_blank" rel="noopener noreferrer">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
          </div>
        </div>

        <span className="projects__card-role">{project.role}</span>
        <p className="projects__card-desc">{project.description}</p>

        <ul className="projects__card-features">
          {project.features.map((f, i) => (
            <li key={i} className="projects__card-feature">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent-secondary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              {f}
            </li>
          ))}
        </ul>

        <div className="projects__card-tech">
          {project.tech.map((t) => (
            <span key={t} className="projects__card-tech-tag">{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
