// Footer.jsx
import React from "react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="copyright-text">
          All rights Reserved. Copyright ©{currentYear} <strong>Vix Commerce</strong>
        </p>
      </div>
    </footer>
  );
};

export default Footer;