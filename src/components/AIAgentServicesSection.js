import React from 'react';
import '../App.css';

function AIAgentServicesSection() {
  return (
    <section id="ai-agents" className="section ai-agents-section">
      <div className="container">
        <h2>Custom AI Agents for Industry Transformation</h2>
        <p className="section-subtitle">
          <b>Your Challenge. Our Intelligence. Infinite Impact</b>
        </p>

        <p>At <b>AI HUB Consulting</b>, we don't just create AI agents. We craft intelligent, industry-specific solution that think, adapt, and thrive in your unique environment. From global enterprises to local care facilities, our AI agents are engineered to tackle your toughest challenges with precision and innovation.</p>
        
        <div className="ai-agents-grid">
          {/* AI Marketing Agents */}
          <div className="ai-agent-card">
            <div className="agent-icon">📈</div>
            <h3>AI Marketing Agents & Social Media Aggregation</h3>
            <p className="agent-description">
              Intelligent marketing automation that understands your brand voice and target audience
            </p>
            <ul className="agent-features">
              <li>Content creation and optimization</li>
              <li>Social media management and scheduling</li>
              <li>Email marketing automation</li>
              <li>Customer segmentation and targeting</li>
              <li>Campaign performance analysis</li>
              <li>SEO optimization and keyword research</li>
            </ul>
            <div className="agent-benefits">
              <strong>Benefits:</strong> 24/7 marketing presence, personalized content at scale, data-driven insights
            </div>
            <a href="#contact" className="btn btn-primary">Get Started</a>
          </div>

          {/* AI Real Estate Agents */}
          <div className="ai-agent-card">
            <div className="agent-icon">🏠</div>
            <h3>AI Real Estate Agents & Tokenization by Block Chain Innovation</h3>
            <p className="agent-description">
              Virtual real estate assistants that streamline property transactions and client interactions
            </p>
            <ul className="agent-features">
              <li>Property search and matching</li>
              <li>Virtual property tours and walkthroughs</li>
              <li>Market analysis and pricing recommendations</li>
              <li>Client communication and follow-up</li>
              <li>Document processing and contract assistance</li>
              <li>Lead qualification and nurturing</li>
            </ul>
            <div className="agent-benefits">
              <strong>Benefits:</strong> Faster deal closures, improved client satisfaction, reduced administrative overhead attracting investors from all around the globe
            </div>
            <a href="#contact" className="btn btn-primary">Get Started</a>
          </div>

          {/* AI Sales Agents */}
          <div className="ai-agent-card">
            <div className="agent-icon">💰</div>
            <h3>AI Sales Agents</h3>
            <p className="agent-description">
              Intelligent sales automation that qualifies leads and closes deals around the clock
            </p>
            <ul className="agent-features">
              <li>Lead qualification and scoring</li>
              <li>Sales call scheduling and follow-up</li>
              <li>Product recommendations and upselling</li>
              <li>Customer objection handling</li>
              <li>Sales pipeline management</li>
              <li>Performance analytics and reporting</li>
            </ul>
            <div className="agent-benefits">
              <strong>Benefits:</strong> Increased conversion rates, reduced sales cycle time, scalable sales operations
            </div>
            <a href="#contact" className="btn btn-primary">Get Started</a>
          </div>
        </div>

        <div className="ai-agents-cta">
          <h3>Ready to Transform Your Business with AI Agents?</h3>
          <p>
            Our AI agents are built with cutting-edge technology and designed to integrate seamlessly 
            with your existing workflows. Get started today and experience the future of business automation.
          </p>
          <div className="cta-buttons">
            <a href="#contact" className="btn btn-primary">Schedule Consultation</a>
            <a href="#services" className="btn btn-secondary">View All Services</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AIAgentServicesSection;
