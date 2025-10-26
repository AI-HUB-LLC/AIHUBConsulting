import React from 'react';
import '../App.css';

function VisionSection() {
  return (
    <section id="vision" className="section vision-section">
      <div className="vision-flex">
        <div className="vision-image">
          <img src={require('../assets/image (1).jpg')}  alt="Vision for smart, inclusive cities"/>
        </div>
        <div className="vision-content">
          <h2>Our Vision</h2>
          <p>
          Our vision is to harness AI to help humans live better lives and enable industries to work smarter, deliver more, and operate with greater efficiency through human-in-the-loop AI systems.
          </p>
          <p>
          We empower public and private sector leaders with the platforms, expertise, and governance to:
          </p>
          <ul className="vision-list" text-color="#ffffff">
            <li><b>Stay competitive</b>, with responsible, practical AI innovation</li>
            <li><b>Operate efficiently</b>, with secure, scalable infrastructure</li>
            <li><b>Serve communities</b>, with dignity and excellence</li>
            
          </ul>
          <p>
            We reinvest in ethical AI research for aging and accessibility, ensuring progress benefits the most vulnerable first—<b>especially the elderly and people with disabilities,</b>
            where technology creates independence, safety, and dignity for those who need it most.
          </p>
        </div>
      </div>
    </section>
  );
}

export default VisionSection; 