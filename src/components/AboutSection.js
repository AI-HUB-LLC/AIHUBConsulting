import React from 'react';
import '../App.css';

function AboutSection() {
  return (
    <section id="about" className="section">
      <h2><u>About Us</u></h2>
      <div className="about-flex">
        <div className="about-photo">
          <img src={require('../assets/Feria.png')} alt="Founder" className="founder-photo" />
          <div className="founder-caption">Founder & CEO</div>
        </div>
        <div className="about-main">
          <p>
            <b>AI HUB Consulting</b> is a <b>WOSB-certified</b> consulting firm based in Houston, Texas, with over 15 years of leadership in AI, IT, engineering, and City, County, and federal contracts.
          </p>
          <ul className="about-list">
            <li><strong>WBENC Certified</strong></li>
            <li><strong>SAM.gov Active</strong> (CAGE: 0QQE0 / UEI: DJDSW3BFJAS5)</li>
            <li><strong>WOSB Certified</strong></li>
            <li><strong>Hire Houston First Certified</strong></li>
            <li><strong>SBA Registered</strong></li>
            <li><strong>Founded:</strong> August 29, 2024</li>
          </ul>
        </div>
      </div>
  
    </section>
  );
}

export default AboutSection; 