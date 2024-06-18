import React from "react";
import { Figure } from "react-bootstrap";
import se_logo from "./se_logo.png";

const Logo = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "10vh", // Ensure the logo is centered vertically on the page
      }}
    >
      <Figure>
        <Figure.Image
          className="about-logo"
          width={300}
          height={300}
          alt="company Logo"
          src={se_logo}
        />
      </Figure>
    </div>
  );
};

export default Logo;
