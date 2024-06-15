import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home.js";
import Projects from "./components/Projects.js";
import About from "./components/About.js";
import Contact from "./components/ContactUs.js"
import NavBar from "./components/NavBar";

function App() {
  return (
    // Wrap the entire app with the TotalPriceProvider
    
      <div>
        <NavBar />
        {/* Define routes for the application */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact us" element ={<Contact />} />
        </Routes>
      </div>
  )
}

export default App;
