import React from "react";
import { Figure } from "react-bootstrap";
import se_logo from "./se_logo.png";
import "./Logo.css"; // Import the CSS file

const Logo = () => {
  return (
    <div className="logo-container">
      <Figure>
        <Figure.Image
          className="about-logo"
          width={300}
          height={300}
          alt="company Logo"
          src={se_logo}
        />
      </Figure>
      <div className="company-name">Singh Engineering Solutions Ltd</div>
    </div>
  );
};

export default Logo;
