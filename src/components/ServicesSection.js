import React from 'react';
import '../App.css';
import thumbnailDesigner from '../assets/thumbnail_Designer.png';

function ServicesSection() {
  return (
    <section id="services" className="section services-section">
      <h2>Core Services & Industry Solutions</h2>
      <p>We operate through two synergistic divisions:</p>
      <p>
        <b>1) AI Product Development</b> — Creating intelligent AI agents and automation platforms across multiple industries, including Technology, Healthcare, Real state, Automative, Manufacturing, Oil and Gas, by providing different AI Agents for  sales enablement, marketing intelligence, social media aggregation, remote health monitoring, real estate tokenization, healthy food catering, smart construction management, accessibility solutions for healthcare and aging care.  Empowering organizations and individuals to work smarter and live better.
      </p>
      <p>
        <b>2) IT & AI Consulting Services</b> — Providing enterprise AI strategy, cloud modernization, and digital transformation services for cities, corporations, and public agencies.
        AI HUB is founded on ethical AI design, HIPAA-compliant architecture, and multilingual capabilities (English, Spanish, French, German, Arabic, Turkish, Farsi,...).
      </p>
      <div className="services-grid">
        {/* Technology */}
        <div className="service-card">
          <div className="service-icon">💻</div>
          <h3>AI & IT Consulting</h3>
          <ul>
          <li>Application & Software Development</li>
          <li>IT Project Management</li>
          <li>Portfolio Management</li>
          <li>Project Management Office Implementation, Governance, Center of Excellence</li>
          <li>Cybersecurity </li>
          <li>Data Management</li>
          <li>Business Intelligence</li>
          </ul>

          <a href="mailto:feria@aihubagents.com" className="btn btn-secondary">Contact Us</a>
        
        </div>
        <div className="service-card">
          <div className="service-icon">💻</div>
          <h3>ERP & Financial Systems</h3>
          <ul>
          <li>ERP System Consulting</li>
          <li>ERP Deployment & Implementation</li>
          <li>Financial System Management Software</li>
          <li>Financial Deployment & Implementation</li>
          </ul>

          <a href="mailto:feria@aihubagents.com" className="btn btn-secondary">Contact Us</a>
          
        </div>
        <div className="service-card">
          <div className="service-icon">💻</div>
          <h3>AI Solutions</h3>
          <ul>
          <li>AI Assistants & Companion</li>
          <li>AI Agent Services for Different Industries</li>
          <li>AI Consulting for Business Process</li>
          <li>AI Ethics, Compliance, Governance</li>
          <li>AI Solution for AI Modernization of Companies, Agencies, & Federal or Local Governments</li>
          <lI>AI Solution for Customer Service & Call Center</lI>
          <li>Multi-Agent Orchestration for Seamless Context Switching, Powered by Fine-Tuned LLMs & RAG (Retrieval-Augmented Generation)</li>
          
          </ul>
          <a href="#ai-agents" className="btn btn-secondary">Learn More</a>
        </div>

        {/* Construction & Engineering */}
        <div className="service-card">
          <div className="service-icon">🏗️</div>
          <h3>Smart City & Construction</h3>
          <ul>
            <li>IoT Integration for Building Management</li>
            <li>Smart Energy Management Systems</li>
            <li>Automated Construction Monitoring: Use Sensors, Drones, & AI to Track Construction Progress</li>
            <li>Building Information Modeling (BIM) with AI Enhancements</li>
            <li>Smart Construction Support: Predictive Maintenance, IoT Sensor Networks, Erosion Control, and Sustainable Design</li>
          </ul>
          
          <a href="mailto:feria@aihubagents.com" className="btn btn-secondary">Contact Us</a>

        </div>
        {/* Staffing & Recruitment */}
        <div className="service-card">
          <div className="service-icon">👥</div>
          <h3>Project Delivery & Staffing</h3>
          <ul>
            <li>AI Training</li>
            <li>IT Engineers, Application Developers, AI Data Scientist, Data Architecture, ML Engineering.</li>
            <li>Project & Program Management</li>
            <li>Administrative & Temp Placements</li>
          </ul>
          
          <a href="mailto:feria@aihubagents.com" className="btn btn-secondary">Contact Us</a>

        </div>

        <div className="service-card">
          <div className="service-icon"><img src={thumbnailDesigner} style={{width: '100px', height: '100px'}} alt="AI Hub Elder"/></div>
          <h3>Aging & Accessibility Products</h3>
          <ul>
            <li>Voice-first companions: meds, recovery routines, emotional wellbeing, entertainment</li>
            <li>Family dashboards: secure, HIPAA-aligned insights and alerts</li>
            <li>“Howdy” automated wellness check-ins with escalation</li>
            
        
          </ul>
          <a href="https://elderlycompanion.ai/" className="btn btn-secondary">Learn More</a>
        </div>
       
      </div>
    </section>
  );
}

export default ServicesSection; 