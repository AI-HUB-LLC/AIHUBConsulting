import React from 'react';
import '../App.css';

function AboutSection() {
  return (
    <section id="about" className="section">
      <h2>About Us</h2>
      <div className="about-flex">
        <div className="about-photo">
          <img src={require('../assets/Feria.png')} alt="Founder" className="founder-photo" />
          <div className="founder-caption">Founder & CEO</div>
        </div>
       
        <div className="about-main">
        <h1>Our Team</h1>
          <p>
          AI HUB brings together a multidisciplinary team of MBAs, software engineers, data scientists, cybersecurity experts, IT compliance leaders, lawyers, medical doctors, therapists, technology leaders, and industry-leading AI/ML engineers—either as core team members or as active advisors. This diverse expertise ensures our solutions are technically robust, secure, legally compliant, ethically sound, and deeply aligned with real-world needs across healthcare, business, government, and accessibility.
          </p>
          <p>
            Led by <b>Feria Ghanbari</b>, a technology leader with 15+ years of public/private experience, AI HUB is built on ethical AI design, HIPAA-compliant systems, and multilingual service capabilities (English, Farsi, Arabic, Turkish, Spanish).
          </p>
          <ul className="about-list">
            <li><strong>WBEA Certified</strong></li>
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