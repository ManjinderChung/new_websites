import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home.js";
import Projects from "./components/Projects.js";
import About from "./components/About.js";
import Contact from "./components/ContactUs.js"
import NavBar from "./components/NavBar";
import Logo from "./components/logo"
import Services from "./components/Services.js"
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    // Wrap the entire app with the TotalPriceProvider
    
      <div>
        <NavBar />
        <Logo />  
        {/* Define routes for the application */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact us" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </div>
  )
}

export default App;
