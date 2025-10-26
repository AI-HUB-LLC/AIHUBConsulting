import React from 'react';
import '../App.css';
import logo from '../assets/AI HUB Logo Completed.png';

const WHY_CARDS = [
  {
    icon: '👩‍💼',
    title: 'WBEA-Certified WOSB',
    text: 'Woman-owned, Houston-based, with 15+ years across public and private sectors.'
  },
  {
    icon: '🔐',
    title: 'Ethical, Privacy-First, HIPAA-Aligned',
    text: 'No-surveillance policy; data belongs to you; built for compliance and trust.'
  },
  {
    icon: '🗣️',
    title: 'Multilingual & Culturally Aware',
    text: 'English, Farsi, Arabic, Turkish, Spanish; designed for accessibility and inclusion.'
  },
  {
    icon: '🤝',
    title: 'Dual-Focus Model',
    text: 'AI products for aging and accessibility + enterprise-grade consulting services.'
  },
  {
    icon: '📈',
    title: 'Proven Results',
    text: 'Smart city projects, AI deployments, and IT transformations delivered with impact.'
  }
];

function WhyAihubSection() {
  return (
    <section id="why-aihub" className="section">
      <h2>Why AI HUB?</h2>
      <div className="why-cards-grid">
        {WHY_CARDS.map((card, index) => (
          <React.Fragment key={card.title}>
            <div className="why-card">
              <div className="why-card-icon">{card.icon}</div>
              <h3 className="why-card-title">{card.title}</h3>
              <p className="why-card-text">{card.text}</p>
            </div>
            {index === 2 && (
              <div className="why-logo-container">
                <img src={logo} alt="AI Hub Logo" className="why-logo" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="about-highlights">
        <ul>
          <li><strong>Dual divisions:</strong> AI products + AI/IT consulting</li>
          <li><strong>Compliance-first:</strong> HIPAA, GDPR, and industry standards</li>
          <li><strong>Human-centered:</strong> Designed for dignity, accessibility, inclusion</li>
          <li><strong>Certified:</strong> WBEA, WOSB, SAM.gov, SBA, Hire Houston First</li>
          <li><strong>Outcomes-led:</strong> Measurable, secure, mission-ready results</li>
        </ul>
      </div>
    </section>
  );
}

export default WhyAihubSection; 