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
          <h3>Technology & IT Consulting</h3>
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
          <h3>ERP & Financial Management System</h3>
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
          <h3>Smart Construction with AI</h3>
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
          <h3>Staffing & Recruitment</h3>
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
          <h3>Elderly Care - Products for Aging and Acessability</h3>
          <ul>
            <li>Voice-first AI companions & personal assistants featuring modular agents for medication reminders, emotional support, wellness check-ins, entertainment, and cognitive stimulation</li>
            <li>Dashboard reports to connect elderly with caregivers and family members, giving immediate reports on loved ones.</li>
            <li>AI-powered “Howdy” check-in calls with proactive mental health interventions, distress detection, and escalation to caregivers or emergency services</li>
            
        
          </ul>
          <a href="https://elderlycompanion.ai/" className="btn btn-secondary">Learn More</a>
        </div>
       
      </div>
    </section>
  );
}

export default ServicesSection; 