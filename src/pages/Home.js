import React from "react";
import "./Home.css"; // Import the custom CSS file
import HomeImages from "../components/homeImages";

const Home = () => {
  return (
    <div> 
    <HomeImages />
    <div className="home-container">
    <div className="mission-statement">
        <h2>Our Mission</h2>
        <p>
          At Singh Engineering Solutions Ltd, our mission is to deliver
          innovative and reliable engineering solutions for the offshore oil and
          gas industry. We are committed to excellence, safety, and
          sustainability in all our projects.
        </p>
      </div>
      <div className="company-explanation">
        <h2>What We Do</h2>
        <p>
          Singh Engineering Solutions Ltd specialises in providing comprehensive
          engineering services for offshore platforms, subsea systems, and
          marine structures. Our team of experienced engineers and technicians
          ensures the highest standards of quality and safety in every project
          we undertake.
        </p>
      </div>
     </div>
    </div>
  );
};


export default Home;
