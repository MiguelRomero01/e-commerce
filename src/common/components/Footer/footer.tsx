import React from 'react';
import './footer.css';
import { Facebook, Favorite, Instagram, X, YouTube } from '@mui/icons-material';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="company-info">
            <h3>FASHION</h3>
            <p>Creating amazing digital experiences with passion and innovation.</p>
            <div className="social-links">
              <a href="#"><Facebook sx={{ fontSize: 20 }} /></a>
              <a href="#"><X sx={{ fontSize: 20 }} /></a>
              <a href="#"><Instagram sx={{ fontSize: 20 }} /></a>
              <a href="#"><YouTube sx={{ fontSize: 22 }} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Projects</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h3>Services</h3>
            <ul>
              <li><a href="#">Buy Products</a></li>
              <li><a href="#">Consulting</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3>Contact Us</h3>
            <ul>
              <li>123 Business Street</li>
              <li>New York, NY 10001</li>
              <li>Phone: (555) 123-4567</li>
              <li>Email: info@company.com</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>&copy; 2025 FASHION. All rights reserved.</p>
          <div className="made-with">
            <span>Made with</span>
            <Favorite sx={{ color: 'red' }} />
            <span>by Our Team</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;