import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.js";
import Projects from "./pages/Projects.js";
import About from "./pages/About.js";
import Contact from "./pages/ContactUs.js";
import Services from "./pages/Services.js";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Title from "./components/Title.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"; // Add custom styles here

function App() {
  return (
    <div>
      <NavBar />
      <main
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          padding: "60px 20px",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          margin: "80px auto",
          width: "90%",
          maxWidth: "1200px",
          borderRadius: "10px",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
          color: "white", // Add this line to change text color to white
        }}
      >
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
