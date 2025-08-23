import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Education from "./components/Education";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen text-gray-900">
      <Navbar />
      <Hero />
      <About />
      <Education /> 
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;


