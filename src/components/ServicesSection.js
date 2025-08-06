import React from 'react';
import '../App.css';

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
          <h3>AI Enabled Construction & Smart City Solutions</h3>
          <ul>
            <li>Concrete, drywall, painting</li>
            <li>Site prep, grading, code compliance</li>
            <li>Public infrastructure & commercial builds</li>
            <li>Smart Building Construction</li>
            <li>IoT Integration for Building Management</li>
            <li>Smart Energy Management Systems</li>
            <li>Automated Construction Monitoring: Use sensors, drones, and AI to track construction progress</li>
            <li>Building Information Modeling (BIM) with AI Enhancements</li>
            <li>Smart Safety and Security Systems</li>
          </ul>
          <a href="#construction" className="btn btn-secondary">Request Quote</a>
        </div>
        {/* Staffing & Recruitment */}
        <div className="service-card">
          <div className="service-icon">👥</div>
          <h3>Staffing & Recruitment</h3>
          <ul>
            <li>IT engineers, developers</li>
            <li>Healthcare & lab staff</li>
            <li>Administrative & temp placements</li>
          </ul>
          <a href="#staffing" className="btn btn-secondary">Request Quote</a>
        </div>
        {/* Supply & Distribution */}
        <div className="service-card">
          <div className="service-icon">🏢</div>
          <h3>Supply & Distribution</h3>
          <ul>
            <li>Construction materials</li>
            <li>Plastics & IT equipment</li>
            <li>Municipal and commercial procurement</li>
          </ul>
          <a href="#supply" className="btn btn-secondary">Request Quote</a>
        </div>
       
      </div>
    </section>
  );
}

export default ServicesSection; 