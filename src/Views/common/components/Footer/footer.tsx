import React from "react";
import "./footer.css";
import { Facebook, Favorite, Instagram, X, YouTube } from "@mui/icons-material";

const SOCIAL_LINKS = [
  { icon: Facebook, url: "", size: 20 },
  { icon: X, url: "", size: 20 },
  { icon: Instagram, url: "", size: 20 },
  { icon: YouTube, url: "", size: 22 },
];

const QUICK_LINKS = [
  { text: "About Us", url: "" },
  { text: "Services", url: "" },
  { text: "Projects", url: "" },
  { text: "Contact", url: "" },
];

const SERVICES_LINKS = [
  { text: "Buy Products", url: "" },
  { text: "Consulting", url: "" },
];

const CONTACT_INFO = [
  "123 Business Street",
  "New York, NY 10001",
  "Phone: (555) 123-4567",
  "Email: info@company.com",
];

const Footer = () => {
  const renderSocialLinks = () => (
    <div className="social-links">
      {SOCIAL_LINKS.map(({ icon: Icon, url, size }) => (
        <a key={url} href={url}>
          <Icon sx={{ fontSize: size }} />
        </a>
      ))}
    </div>
  );

  const renderLinks = (links: typeof QUICK_LINKS) => (
    <ul>
      {links.map(({ text, url }) => (
        <li key={text}>
          <a href={url}>{text}</a>
        </li>
      ))}
    </ul>
  );

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="company-info">
            <h3>FASHION</h3>
            <p>
              Creating amazing digital experiences with passion and innovation.
            </p>
            {renderSocialLinks()}
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3>Quick Links</h3>
            {renderLinks(QUICK_LINKS)}
          </div>

          {/* Services */}
          <div className="footer-section">
            <h3>Services</h3>
            {renderLinks(SERVICES_LINKS)}
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3>Contact Us</h3>
            <ul>
              {CONTACT_INFO.map((info) => (
                <li key={info}>{info}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>&copy; 2025 FASHION. All rights reserved.</p>
          <div className="made-with">
            <span>Made with</span>
            <Favorite sx={{ color: "red" }} />
            <span>by Our Team</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
