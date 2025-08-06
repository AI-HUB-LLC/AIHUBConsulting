import React from 'react';
import '../App.css';

function VisionSection() {
  return (
    <section id="vision" className="section vision-section">
      <div className="vision-flex">
        <div className="vision-image">
          <img src="https://images.pexels.com/photos/5716001/pexels-photo-5716001.jpeg" alt="Vision for smart, inclusive cities"/>
        </div>
        <div className="vision-content">
          <h2><u>Our Vision</u></h2>
          <p>
            To lead the transformation of cities, industries, and institutions into intelligent, inclusive, and resilient ecosystems—powered by automation, innovation, and purpose.
          </p>
          <p>
            We envision a future where public and private sector leaders—from municipalities and federal agencies to global oil & gas firms and high-growth tech companies—have access to the tools, talent, and technology they need to:
          </p>
          <ul className="vision-list">
            <b>
            <li>Stay competitive</li>
            <li>Operate efficiently and Faster</li>
            <li>Serve communities and stakeholders with excellence</li>
            </b>
          </ul>
          <p>
            Through our consulting engagements and social reinvestment model, <b>AI HUB Consulting</b> builds capacity today—and social equity for tomorrow.
          </p>
        </div>
      </div>
    </section>
  );
}

export default VisionSection; 