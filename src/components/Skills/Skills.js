import React, { useState } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Skills.css';

const skillCategories = [
  { id: 'frontend', label: 'Frontend', icon: '🎨' },
  { id: 'language', label: 'Languages', icon: '💻' },
  { id: 'tools', label: 'Tools & Others', icon: '🛠️' },
];

const skills = {
  frontend: [
    { name: 'React.js', level: 95, color: '#61DAFB' },
    { name: 'Angular 14+', level: 90, color: '#DD0031' },
    { name: 'Next.js', level: 80, color: '#ffffff' },
    { name: 'Redux', level: 88, color: '#764ABC' },
    { name: 'NgRx', level: 85, color: '#BA2BD2' },
    { name: 'HTML5', level: 95, color: '#E34F26' },
    { name: 'CSS3 / SCSS', level: 92, color: '#1572B6' },
    { name: 'Tailwind CSS', level: 85, color: '#06B6D4' },
    { name: 'Bootstrap', level: 90, color: '#7952B3' },
  ],
  language: [
    { name: 'JavaScript (ES6+)', level: 95, color: '#F7DF1E' },
    { name: 'TypeScript', level: 92, color: '#3178C6' },
  ],
  tools: [
    { name: 'Git & GitHub', level: 90, color: '#F05032' },
    { name: 'REST API Integration', level: 92, color: '#00D4FF' },
    { name: 'ChatGPT / AI Tools', level: 88, color: '#10A37F' },
    { name: 'GitHub Copilot', level: 85, color: '#6c63ff' },
    { name: 'Webpack / Vite', level: 78, color: '#FFC107' },
    { name: 'Jest / Testing', level: 75, color: '#C21325' },
  ],
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [headerRef, headerVisible] = useScrollReveal();
  const [gridRef, gridVisible] = useScrollReveal(0.05);

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div ref={headerRef} className={`section-header reveal ${headerVisible ? 'visible' : ''}`}>
          <span className="section-label">Skills</span>
          <h2 className="section-title">My Technical Arsenal</h2>
          <p className="section-subtitle">
            Technologies and tools I use to bring ideas to life
          </p>
          <div className="gradient-divider" />
        </div>

        <div className="skills__tabs">
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              className={`skills__tab ${activeCategory === cat.id ? 'skills__tab--active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              <span className="skills__tab-icon">{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>

        <div ref={gridRef} className={`skills__grid reveal ${gridVisible ? 'visible' : ''}`}>
          {skills[activeCategory].map((skill, i) => (
            <div key={skill.name} className="skills__card" style={{ animationDelay: `${i * 0.05}s` }}>
              <div className="skills__card-header">
                <span className="skills__card-name">{skill.name}</span>
                <span className="skills__card-percent">{skill.level}%</span>
              </div>
              <div className="skills__bar-track">
                <div
                  className={`skills__bar-fill ${gridVisible ? 'skills__bar-fill--animate' : ''}`}
                  style={{
                    '--skill-level': `${skill.level}%`,
                    '--skill-color': skill.color,
                    animationDelay: `${i * 0.08 + 0.3}s`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
