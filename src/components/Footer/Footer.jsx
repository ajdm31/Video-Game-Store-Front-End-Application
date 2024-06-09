import React from 'react';
import './Footer.css';
import logo from "../../assets/chicks-logo-large.svg";
import StarIcon from "../../assets/star-icon.svg"

function Footer () {
  return (
    <footer className="footer">
      <div className="footer-columns">
        <div className="footer-column">
          <div className="footer-logo">
          <img src={logo} alt="chick gold logo" />
          <span>support@chicksgold.com</span>
          </div>
        </div>
        <div className="footer-column">
          <h4>Chicks Gold</h4>  
          
          <ul>
            <li><a href="#games">Games</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#sitemap">Sitemap</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Support</h4>
          <ul>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Legal</h4>
          <ul>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms of Service</a></li>
            <li><a href="#copyright">Copyright Policy</a></li>
          </ul>
        </div>
        <div className="footer-column star-icon">
            <div className="star-image">
                <img src={StarIcon} alt="Star Calification icon" />
            </div>
            <div className="star-image">
                <img src={StarIcon} alt="Star Calification icon" />
            </div>
            <div className="star-image">
                <img src={StarIcon} alt="Star Calification icon" />
            </div>
            <div className="star-image">
                <img src={StarIcon} alt="Star Calification icon" />
            </div>
            <div className="star-image">
                <img src={StarIcon} alt="Star Calification icon" />
            </div>        

          <h4 className="star-icon-title">Trustpilot Reviews</h4>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2017 - 2020 ChicksGold.com. All Rights Reserved</p>
      </div>
    </footer>
  )
};

export default Footer;
