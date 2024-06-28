import React from "react";
import { Figure } from "react-bootstrap";
import se_logo from "./se_logo.png";
import "./Logo.css"; // Import the CSS file

const Logo = () => {
  return (
    <div className="logo-gallery-container">
      <div className="company-name">Singh Engineering Solutions Ltd</div>
      <div className="logo-container">
        <Figure>
          <Figure.Image
            className="about-logo"
            alt="company Logo"
            src={se_logo}
          />
        </Figure>
      </div>
      <div className="image-gallery">
        <img src="https://via.placeholder.com/100" alt="Placeholder 1" />
        <img src="https://via.placeholder.com/100" alt="Placeholder 2" />
        <img src="https://via.placeholder.com/100" alt="Placeholder 3" />
      </div>
    </div>
  );
};

export default Logo;
