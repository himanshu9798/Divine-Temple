import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import { MdFacebook } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-section">
            <h3>🛕 Divine Temple</h3>
            <p>
              A sacred space for spiritual enlightenment and cultural devotion.
              Visit for peace, prayer, and connection.
            </p>
          </div>

          <div className="footer-section">
            <h4>Contact Person</h4>
            <p>
              <strong>Name:</strong> Himanshu Kumar Barnawal
            </p>
            <p>
              <strong>📍 Location:</strong>
              <a
                href="https://www.google.com/maps/place/Ahmedabad,+Gujarat,+India"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ahmedabad, Gujarat, India
              </a>
            </p>

            <p>
              <strong>📞 Phone:</strong> <a href="tel:9798106520">9798106520</a>
            </p>
            <p>
              <strong>✉️ Email:</strong>
              <a href="mailto:barnawalhimanshu0@gmail.com">
                barnawalhimanshu0@gmail.com
              </a>
            </p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>
                {" "}
                <Link to="/about"> About</Link>
              </li>
              <li>
                <Link to="/events"> Events</Link>
              </li>
              <li>
                <Link to="/donate">Donate</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <MdFacebook size={24} />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <IoLogoYoutube size={24} />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://github.com/himanshu9798"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <BsGithub size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; 2025 Divine Temple | Designed❤️ by Himanshu Kumar Barnawal
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
