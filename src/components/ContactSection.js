import React from 'react';
import '../App.css';

function ContactSection() {
  return (
    <section id="contact" className="section contact-section">
      <h2 className="contact-title">Contact Us</h2>
      <div className="contact-row">
        <div className="contact-info">
          <h3 className="contact-subtitle">Get in Touch</h3>
          <p className="contact-text">
            Have questions about our services or want to learn more about how we can help your organization? We'd love to hear from you.
          </p>
          <p className="contact-text">
            <strong>Address:</strong><br />
            AI HUB LLC<br />
            1200 Post Oak Boulevard<br />
            Houston, Texas 77056
          </p>
          <p className="contact-text">
            <strong>Email:</strong><br />
            feria@aihubagents.com
          </p>

          <p className="contact-text">
            <strong>Capability Statement:</strong><br />
            <a href="/CapabilityStatement.pdf" target="_blank" rel="noopener noreferrer">Open Document</a>
          </p>
        </div>
        <form className="contact-form" onSubmit={e => e.preventDefault()}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required />
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default ContactSection; 