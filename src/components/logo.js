import React from "react";
import { Figure } from "react-bootstrap";
import se_logo from "./se_logo.png";
import "./Logo.css"; // Import the CSS file

const Logo = () => {
  return (
    <div className="logo-gallery-container">
      <div className="company-name"> <h1>Singh Engineering Solutions Ltd </h1></div>
      <div className="logo-container">
        <Figure>
          <Figure.Image
            className="about-logo"
            alt="company Logo"
           src={se_logo}
          />
        </Figure>
      </div>

    </div>
  );
};

export default Logo;
