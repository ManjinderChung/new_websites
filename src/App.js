import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.js";
import Projects from "./pages/Projects.js";
import About from "./pages/About.js";
import Contact from "./pages/ContactUs.js"
import NavBar from "./components/NavBar";
import Logo from "./components/logo"
import Services from "./pages/Services.js"
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
