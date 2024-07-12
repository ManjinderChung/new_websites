import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.js";
import Projects from "./pages/Projects.js";
import About from "./pages/About.js";
import Contact from "./pages/ContactUs.js"
import NavBar from "./components/NavBar";
import Footer from "./components/Footer.js";
import Logo from "./components/logo"
import Services from "./pages/Services.js"
import "bootstrap/dist/css/bootstrap.min.css";
import './components/Footer.css';


function App() {
  return (
    <div>
      <NavBar />
      <Logo />

      {/* Define routes for the application */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
