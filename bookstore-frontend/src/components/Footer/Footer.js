import React from 'react';
import './Footer.css';
import { FaHome, FaBook, FaShoppingCart, FaUserAlt, FaSignInAlt, FaSignOutAlt, FaEnvelope, FaPhoneAlt, FaQuestionCircle } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* About Us Section */}
        <div className="footer-section about-section">
          <h4>About Us</h4>
          <p>
            We are passionate about bringing you the best books from various genres. Explore, read, and discover your next favorite book with us!
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/"><FaHome /> Home</a></li>
            <li><a href="/categories"><FaBook /> Categories</a></li>
            <li><a href="/bestsellers"><FaBook /> Bestsellers</a></li>
            <li><a href="/wishlist"><FaBook /> BookShelf</a></li>
            <li><a href="/cart"><FaShoppingCart /> Cart</a></li>
            <li><a href="/profile"><FaUserAlt /> Profile</a></li>
          </ul>
        </div>

        {/* Customer Support Section */}
        <div className="footer-section">
          <h4>Customer Support</h4>
          <ul>
            <li><a href="/contactus"><FaEnvelope /> Contact Us</a></li>
            {/* <li><a href="/faq"><FaQuestionCircle /> FAQ</a></li> */}
            <li><a href="/login"><FaSignInAlt /> Login</a></li>
            <li><a href="/signup"><FaUserAlt /> Signup</a></li>
            <li><a href="/logout"><FaSignOutAlt /> Logout</a></li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p><FaEnvelope /> Email: support@bookstore.com</p>
          <p><FaPhoneAlt /> Phone: (123) 456-7890</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Bookstore. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
