import React from "react";
import "./Footer.scss"; // Fichier de styles

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>👾 QuizMaster - Le quiz qui fait briller ton cerveau!</p>
        <div className="socials">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
            Facebook
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
            Twitter
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
            Instagram
          </a>
        </div>
        <p className="footer-note">
          &copy; {new Date().getFullYear()} QuizMaster. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
