import React from 'react';
import '../App.css';
import thumbnailDesigner from '../assets/thumbnail_Designer.png';

function ServicesSection() {
  return (
    <section id="services" className="section services-section">
      <h2><u>Our Core Services</u></h2>
      <div className="services-grid">
        {/* Technology */}
        <div className="service-card">
          <div className="service-icon">💻</div>
          <h3>Technology</h3>
          <ul>
          <li>Application & Software Development</li>
          <li>IT project management</li>
          <li>Portfolio Management</li>
          <li>Project Management Office Implementation, Governance, Center of Excellence</li>
          <li>Cybersecurity </li>
          <li>Data Management</li>
          <li>Business Intelligence</li>
          </ul>
          <a href="#tech-ai" className="btn btn-secondary">Learn More</a>
        </div>
        <div className="service-card">
          <div className="service-icon">💻</div>
          <h3>AI Solutions</h3>
          <ul>
          <li>AI assistants, Automation tools</li>
          <li>AI Consulting for Business Process</li>
          <li>AI Ethics, Compliance, Governance</li>
          <li>AI Consulting for AI Modernization of Companies, Agencies, and Federal or Local Governments</li>
          </ul>
          <a href="#tech-ai" className="btn btn-secondary">Learn More</a>
        </div>
        {/* Construction & Engineering */}
        <div className="service-card">
          <div className="service-icon">🏗️</div>
          <h3>AI Construction</h3>
          <ul>
            <li>IoT Integration for Building Management</li>
            <li>Smart Energy Management Systems</li>
            <li>Automated Construction Monitoring: Use sensors, drones, and AI to track construction progress</li>
            <li>Building Information Modeling (BIM) with AI Enhancements</li>
            <li>Smart construction support: predictive maintenance, IoT sensor networks, erosion control, and sustainable design</li>
          </ul>
          <a href="#construction" className="btn btn-secondary">Request Quote</a>
        </div>
        {/* Staffing & Recruitment */}
        <div className="service-card">
          <div className="service-icon">👥</div>
          <h3>Staffing & Recruitment</h3>
          <ul>
            <li>IT engineers, Application developers, AI data scientist, Data architecture, ML engineering.</li>
            <li>Project and Program Management</li>
            <li>Administrative & Temp Placements</li>
          </ul>
          <a href="#staffing" className="btn btn-secondary">Request Quote</a>
        </div>

        <div className="service-card">
          <div className="service-icon"><img src={thumbnailDesigner} style={{width: '100px', height: '100px'}} alt="AI Hub Elder"/></div>
          <h3>Elderly Care - Products for Aging and Acessability</h3>
          <ul>
            <li>Voice-first AI companions featuring modular agents for reminders, emotional support, wellness check-ins, entertainment, and cognitive stimulation</li>
            <li>AI-powered “Howdy” check-in calls with proactive mental health interventions, distress detection, and escalation to caregivers or emergency services</li>
            <li>Multi-agent orchestration for seamless context switching, powered by fine-tuned LLMs and RAG (Retrieval-Augmented Generation)</li>
        
          </ul>
          <a href="#supply" className="btn btn-secondary">Request Quote</a>
        </div>
       
      </div>
    </section>
  );
}

export default ServicesSection; 