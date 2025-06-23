import React from "react";
import "./contact.css";

const Contact = () => {
  const mantras = [
    `ॐ भूर्भुवः स्वः | तत्सवितुर्वरेण्यं | भर्गो देवस्य धीमहि | धियो यो नः प्रचोदयात् ||`,
  ];

  return (
    <div className="contact-wrapper">
      {/* Moving Mantras - Background Elements */}
      <div className="moving-mantras">
        <span>ॐ नमः शिवाय</span>
        <span>ॐ नमः शिवाय</span>
        <span>ॐ नमः शिवाय</span>
        <span>ॐ नमः शिवाय</span>
        <span>ॐ नमः शिवाय</span>
        <span>ॐ नमः शिवाय</span>
        <span>ॐ नमः शिवाय</span>
        <span>ॐ नमः शिवाय</span>
        <span>ॐ नमः शिवाय</span>
        <span>ॐ नमः शिवाय</span>
        <span>ॐ नमः शिवाय</span>
        <span>ॐ नमः शिवाय</span>
        <span>ॐ नमः शिवाय</span>
        <span>ॐ नमः शिवाय</span>
        <span>ॐ नमः शिवाय</span>
        <span>ॐ नमः शिवाय</span>
        <span>ॐ नमः शिवाय</span>
        <span>ॐ नमः शिवाय</span>
        <span>ॐ नमः शिवाय</span>
        <span>ॐ नमः शिवाय</span>
        <span>ॐ नमः शिवाय</span>
        <span>ॐ नमः शिवाय</span>
        <span>ॐ नमः शिवाय</span>
        <span>ॐ नमः शिवाय</span>
      </div>

      {/* Main Content */}
      <div className="mantra mantra-top">{mantras[0]}</div>

      <div className="content-area">
        <div className="contact-container">
          <h2>🛕Contact Us</h2>
          <form>
            <label>
              Name:
              <input
                type="text"
                name="name"
                required
                placeholder="Enter your name"
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
              />
            </label>
            <label>
              Message:
              <textarea
                name="message"
                required
                placeholder="Write your message"
              />
            </label>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
