import React from "react";
import "./Contact.css";

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="contact-form">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button>Submit</button>
      </div>
    </div>
  );
};

export default ContactPage;
