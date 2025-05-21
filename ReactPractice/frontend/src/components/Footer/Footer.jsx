import React from "react";
import {Link} from "react-router-dom";
import "./Footer.css"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
         <div className="footer-column">
            <h3 className="footer-heading">About Us</h3>
            <p className="footer-text">
                This is just for  practicing the react project to learn react,  html, css and javascript.

            </p>
         </div>

         <div className="footer-column">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
                <li><Link to="/" className="footer-link">Home</Link> </li>
                <li><Link to="/about" className="footer-link">About</Link> </li>
                <li><Link to="/service" className="footer-link">Services</Link> </li>
                <li><Link to="/contact" className="footer-link">Contact</Link> </li>
            </ul>
         </div>

         <div className="footer-column">
            <h3 className="footer-heading">Contact Info</h3>
            <ul className="footer-contact">
                <li>Email: info@practicebrand.com</li>
                <li>Phone:+9164654664</li>
                <li>Address: 123 main St, City</li>

            </ul>
         </div>


        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} PracticeBrand. All right reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
