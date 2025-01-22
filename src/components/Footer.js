import React from "react";

const Footer = () => (
  <footer
    style={{
      backgroundColor: "rgba(245, 180, 119, 0.9)",
      color: "black",
      textAlign: "center",
      padding: "0.5rem 0",
      width: "100%",
      position: "fixed",
      bottom: "0",
      left: "0",
    }}
  >
    <p
      style={{
        margin: "0",
        fontSize: "clamp(0.8rem, 1.5vw, 1rem)", // Responsive font size
        lineHeight: "1.5",
      }}
    >
      &copy; 2024 Singh Engineering Solutions Ltd. All rights reserved.
    </p>
  </footer>
);

export default Footer;
