import React from 'react';
import '../App.css';

function HeroSection() {
  return (
    <header className="hero-section">
      <div className="hero-bg" />

      <div className="hero-content">
        <h1>AI HUB LLC — WBENC-Certified WOSB</h1>
        <h1><u>AI Products, Agents & Consulting for Government, Industry & Startups</u></h1>
        <p>AI HUB delivers intelligent automation, data-driven insights, and responsible AI innovation to municipalities, federal and state agencies, corporations, and startups ready to modernize their operations.
        We build specialized AI agents for sales, marketing, construction, real estate, healthcare, remote health monitoring, and more. <b>Our flagship product is an AI assistant designed for elderly adults and people with disabilities</b> —empowering independence, safety, and quality of life through voice-first, accessible technology. </p>
        <p><b>Houston based  AI company with 15+ years in AI/IT project and product management and leadership.</b> We build HIPAA-compliant, privacy-first, multilingual systems (English, Spanish, French, German, Arabic, Turkish, Farsi...) that are secure, ethical, and human-centered—bridging technology with purpose and impact.</p>
        <p>We build mission-ready AI agents, secure data platforms, and cloud-native infrastructure for cities, enterprises, and public agencies—grounded in HIPAA-aligned privacy, accessibility, and measurable outcomes.</p>
        <div className="hero-buttons">
          <a href="#contact" className="btn btn-primary">Contact Us <span style={{fontSize: '1.1em', marginLeft: '0.3em'}}>&rarr;</span></a>
          <a href="AI HUB LLC capability statement Sep 2025.pdf" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">View Capabilities Statement <span style={{fontSize: '1.1em', marginLeft: '0.3em'}}>&rarr;</span></a>
        </div>
      </div>
    </header>
  );
}

export default HeroSection; 