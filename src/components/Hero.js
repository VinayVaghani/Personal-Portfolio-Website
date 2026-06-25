import React, { useState, useEffect } from "react";
import { FaArrowDown } from "react-icons/fa";

const titles = [
  "Full-Stack Developer",
  "DSA Enthusiast",
  "Competitive Programmer",
  "Computer Engineering Student"
];

function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleTyping = () => {
      const fullTitle = titles[titleIndex];
      if (!isDeleting) {
        // Add char
        setCurrentText(fullTitle.substring(0, currentText.length + 1));
        setTypingSpeed(100);

        if (currentText === fullTitle) {
          // Wait before deleting
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        // Remove char
        setCurrentText(fullTitle.substring(0, currentText.length - 1));
        setTypingSpeed(40);

        if (currentText === "") {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, titleIndex, typingSpeed]);

  return (
    <section
      id="hero"
      className="relative flex flex-col md:flex-row items-center justify-center min-h-[90vh] md:h-[92vh] py-20 md:py-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40 dark:from-[#0b1120] dark:via-[#0f1729] dark:to-[#131b2e] text-slate-900 dark:text-slate-100 px-6 transition-colors duration-300 overflow-hidden"
    >
      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 bg-blue-400/15 dark:bg-blue-500/8 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-indigo-400/15 dark:bg-violet-500/8 rounded-full blur-3xl" />

      {/* Main Container */}
      <div className="max-w-6xl w-full mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12 z-10">
        {/* Left Side Content */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <span className="text-blue-600 dark:text-blue-400 font-semibold text-lg tracking-wide uppercase">
            Welcome to my space
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-violet-400 bg-clip-text text-transparent">Vinay Vaghani</span>
          </h1>
          
          {/* Typing Text Subheading */}
          <div className="h-8 text-xl sm:text-2xl font-medium text-slate-600 dark:text-slate-300">
            <span>{currentText}</span>
            <span className="inline-block w-0.5 h-5 ml-1 bg-blue-600 dark:bg-blue-400 animate-pulse">|</span>
          </div>

          <p className="max-w-md text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed mx-auto md:mx-0">
            A computer engineering student passionate about designing full-stack applications, solving complex algorithms, and building interactive web experiences.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all duration-300 font-semibold text-center transform hover:-translate-y-0.5"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-transparent hover:bg-slate-100 dark:hover:bg-[#1a2332] text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-[#3d4f66] rounded-xl transition-all duration-300 font-semibold text-center transform hover:-translate-y-0.5"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Right Side Profile Image */}
        <div className="flex-1 flex justify-center relative">
          <div className="relative group animate-float">
            {/* Spinning Gradient Border Ring */}
            <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-violet-500 opacity-75 blur-md group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-spin-slow" />
            
            {/* Main Avatar */}
            <img
              src="photo.jpg"
              alt="Vinay Vaghani"
              className="relative w-60 h-60 sm:w-72 sm:h-72 object-cover rounded-full border-4 border-white dark:border-[#1a2332] shadow-2xl transition duration-500 group-hover:scale-[1.02]"
            />
          </div>
        </div>
      </div>

      {/* Bounce Down Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <a href="#about" className="text-slate-400 hover:text-blue-600 dark:text-slate-500 dark:hover:text-blue-400 transition">
          <FaArrowDown size={20} />
        </a>
      </div>
    </section>
  );
}

export default Hero;
