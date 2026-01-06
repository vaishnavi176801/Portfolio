import emailjs from "@emailjs/browser";
import { Instagram, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import "../index.css";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);


  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  const form = e.target;

  try {
    // Only send message to YOU
    await emailjs.sendForm(
      "service_ol226ol",
      "template_ijfdgda", // my template that sends to your email
      form,
      "PamrmSpV-hras1f43"
    );

    alert("Message sent successfully!");
    form.reset();
  } catch (error) {
    console.error("EmailJS error:", error);
    alert(`Oops! Something went wrong. ${error.text || error.message}`);
  } finally {
    setIsSubmitting(false);
  }
};



  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">
          Get In <span className="highlight">Touch</span>
        </h2>

        <p className="section-subtitle">
          Have a project in mind or want to collaborate? Feel free to reach out.
        </p>

        <div className="contact-grid">
          {/* Contact Info */}
          <div className="contact-info">
            <h3>Contact Information</h3>
            <div className="info-item">
              <div className="icon-circle"><Mail className="icon" /></div>
              <div>
                <h4>Email</h4>
                <a href="mailto:vaish.navi12376@gmail.com">vaish.navi12376@gmail.com</a>
              </div>
            </div>

            <div className="info-item">
              <div className="icon-circle"><Phone className="icon" /></div>
              <div>
                <h4>Phone</h4>
                <a href="tel:+19024416428">9024416428</a>
              </div>
            </div>

            <div className="info-item">
              <div className="icon-circle"><MapPin className="icon" /></div>
              <div>
                <h4>Location</h4>
                <p>Halifax, NS, Canada</p>
              </div>
            </div>

            <div className="social-links">
              <h4>Connect With Me</h4>
              <div className="social-icons">
                <a href="https://www.linkedin.com/in/vaishnavi-bharti/" target="_blank" rel="noopener noreferrer"><Linkedin /></a>
                <a href="https://www.instagram.com/v_aish243/" target="_blank" rel="noopener noreferrer"><Instagram /></a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-container">
            <h3>Send a Message</h3>
            <form onSubmit={handleSubmit} className="contact-form">
              <div>
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" name="name" required placeholder="Vaishnavi Bharti..." />
              </div>

              <div>
                <label htmlFor="email">Your Email</label>
                <input type="email" id="email" name="email" required placeholder="Email" />
              </div>

              <div>
                <label htmlFor="message">Your Message</label>
                <textarea id="message" name="message" required placeholder="Hello, I'd like to talk about..." rows={5}></textarea>
              </div>

              <button type="submit" disabled={isSubmitting} className="submit-btn">
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
