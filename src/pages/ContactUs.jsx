import React from 'react'
import { FaEnvelope, FaMapMarkerAlt, FaUserTie } from "react-icons/fa";

export const ContactUs = () => {
  return (
     <section className="contact-page">
      <h1 className="contact-title">Get In Touch</h1>
      <p className="contact-subtitle">
        Let’s connect! Feel free to reach out for internships, projects,
        or collaboration opportunities.
      </p>

      <div className="contact-container">

        {/* LEFT SIDE – INFO */}
        <div className="contact-info-box">
          <h2>Contact Information</h2>

          <p>
            <FaUserTie className="icon" />
            <span>Ramesh Bodke</span>
          </p>

          <p>
            <FaEnvelope className="icon" />
            <span>rameshbodke@email.com</span>
          </p>

          <p>
            <FaMapMarkerAlt className="icon" />
            <span>Nashik, Maharashtra, India</span>
          </p>

          <p className="contact-note">
            I’m currently open to internship and junior frontend
            developer opportunities.
          </p>
        </div>

        {/* RIGHT SIDE – FORM */}
        <div className="contact-form-box">
          <h2>Send a Message</h2>

          <form className="contact-form">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

      </div>
    </section>
  )
}

export default ContactUs


