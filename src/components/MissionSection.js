import React from 'react';
import VisionSection from './VisionSection';
import '../App.css';

function MissionSection() {
  return (
    <section id="mission" className="section mission-section">
      <div className="mission-flex">
        <div className="mission-image">
          <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80" alt="Smart city infrastructure" />
        </div>
        <div className="mission-content">
          <h2><u>Our Mission</u></h2>
          <p>
            <b>AI HUB Consulting</b> delivers high-impact, cross-sector solutions that empower public agencies, private enterprises, and corporate institutions to operate smarter, safer, and more efficiently.
          </p>
          <p>
            We specialize in a full spectrum of services—from advanced AI, software, IT, and cloud systems to logistics, staffing, and construction —making us a trusted, WOSB-certified partner in the government, energy, oil & gas, technology, and commercial sectors.
          </p>
          <p>
            Our mission is to help modernize operations and build intelligent, future-ready infrastructure—starting in cities like Houston, Los Angeles, San Francisco, Miami, and New York, and expanding globally to Toronto, Vancouver, London, Rome, Zurich, Geneva, Paris, Florence, Dubai, and…
          </p>
        </div>
      </div>
    </section>
  );
}

export default MissionSection; 