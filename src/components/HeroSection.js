import React from 'react';
import '../App.css';

function HeroSection() {
  return (
    <header className="hero-section">
      <div className="hero-bg" />

      <div className="hero-content">
        <h1><u>Empowering Smarter Cities, Stronger Enterprises, and a Better Tomorrow</u></h1>
        <p><b>AI HUB Consulting</b> delivers integrated, cross-sector solutions across technology, infrastructure, staffing, and logistics—built for both innovation and impact.</p>
        <div className="hero-buttons">
          <a href="#contact" className="btn btn-primary">Contact Us <span style={{fontSize: '1.1em', marginLeft: '0.3em'}}>&rarr;</span></a>
          <a href="/CapabilityStatement.pdf" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">View Capabilities Statement <span style={{fontSize: '1.1em', marginLeft: '0.3em'}}>&rarr;</span></a>
        </div>
      </div>
    </header>
  );
}

export default HeroSection; 