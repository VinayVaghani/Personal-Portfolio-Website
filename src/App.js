import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Education from "./components/Education";
import CodingProfiles from "./components/CodingProfiles";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen text-gray-900">
      <Navbar />
      <Hero />
      <Education /> 
      <Projects />
      <CodingProfiles />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;


