import React, { useState } from 'react';
import '../App.css';


function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  // Update form fields
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      // 👇 This is the fetch call you asked about
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus(`❌ ${data.error}`);
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("❌ Failed to connect to server.");
    }
  };

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
            <a href="/AI HUB LLC capability statement Sep 2025.pdf" target="_blank" rel="noopener noreferrer">Open Document</a>
          </p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
          {status && (
            <p 
              className="status-message" 
              data-status={status.includes("✅") ? "success" : status.includes("❌") ? "error" : "sending"}
            >
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default ContactSection; 