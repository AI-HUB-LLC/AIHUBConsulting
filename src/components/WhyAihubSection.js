import React from 'react';
import '../App.css';

const WHY_CARDS = [
  {
    icon: '🧩',
    title: 'Integrated Services from AI to Logistics',
    text: 'One-stop solution for all your business needs, from cutting-edge AI technology to essential logistics services.'
  },
  {
    icon: '👩‍💼',
    title: 'Woman-Owned + 15 Years of Experience',
    text: 'Combining diverse perspectives with extensive industry experience to deliver innovative solutions.'
  },
  {
    icon: '💡',
    title: 'Innovation-Driven, Socially Reinvested',
    text: 'Committed to innovation while making a positive social impact through our reinvestment initiatives.'
  },
  {
    icon: '📜',
    title: 'Certified & Compliant',
    text: 'WOSB, SAM, and WBENC certified, ensuring the highest standards of quality and compliance.'
  },
  {
    icon: '🏙️',
    title: 'Mission-Aligned with Smarter Cities',
    text: 'Dedicated to building intelligent, sustainable, and inclusive urban environments.'
  }
];

function WhyAihubSection() {
  return (
    <section id="why-aihub" className="section">
      <h2><u>Why AIHUB?</u></h2>
      <div className="about-highlights">
        <ul>
          <li><strong>Full-suite consulting</strong> across tech + infrastructure</li>
          <li><strong>Women-led</strong> with 15+ years' cross-sector experience</li>
          <li><strong>Socially reinvested:</strong> R&D for AI with impact</li>
          <li><strong>Registered</strong> with SAM.gov, WBENC, SBA, City of Houston</li>
          <li><strong>Proven agile delivery</strong> for both public and private sectors</li>
        </ul>
      </div>
      <div className="why-cards-grid">
        {WHY_CARDS.map(card => (
          <div className="why-card" key={card.title}>
            <div className="why-card-icon">{card.icon}</div>
            <h3 className="why-card-title">{card.title}</h3>
            <p className="why-card-text">{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyAihubSection; 