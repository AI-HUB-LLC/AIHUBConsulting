import React from 'react';
import '../App.css';

function MissionSection() {
  return (
    <section id="mission" className="section section-bg mission-section">
      <div className="mission-flex">
        <div className="mission-image">
          <img src={require('../assets/image.jpg')} alt="mission" />
        </div>
        <div className="mission-content">
          <h2>Our Mission</h2>
          <p>AI HUB LLC advances ethical, human-centered AI that enhances independence, safety, and dignity—while helping organizations modernize with confidence.
          We deliver solutions from aging and accessibility products to enterprise AI agents across sales, marketing, construction, real estate, and healthcare—bridging innovation and execution to create measurable impact</p>
        </div>
      </div>
    </section>
  );
}

export default MissionSection; 