import React, { useState, useEffect } from "react";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";

const navItems = [
  { label: "Home", href: "#hero", id: "hero" },
  { label: "About", href: "#about", id: "about" },
  { label: "Education", href: "#education", id: "education" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Platforms", href: "#profiles", id: "profiles" },
  { label: "Contact", href: "#contact", id: "contact" },
];

function Navbar({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // Active section tracking using IntersectionObserver
  useEffect(() => {
    const sectionIds = navItems.map(item => item.id);

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -50% 0px", // Trigger when section occupies the middle of screen
      threshold: 0,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
      }
    });

    return () => {
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          observer.unobserve(el);
        }
      });
    };
  }, []);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 dark:bg-[#0b1120]/85 border-b border-slate-200/60 dark:border-[#2d3a4f]/60 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand Logo */}
        <a href="#hero" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-violet-400 bg-clip-text text-transparent hover:opacity-90 transition">
          Vinay Vaghani
        </a>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-8 items-center font-medium">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                className={`relative py-1 text-sm transition duration-300 ${
                  activeSection === item.id
                    ? "text-blue-600 dark:text-blue-400 font-semibold"
                    : "text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full" />
                )}
              </a>
            </li>
          ))}
          {/* Theme Toggle Button */}
          <li>
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-[#1a2332] text-slate-700 dark:text-amber-400 hover:bg-slate-200 dark:hover:bg-[#243044] border border-transparent dark:border-[#2d3a4f] transition duration-300"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <FaSun size={16} /> : <FaMoon size={16} />}
            </button>
          </li>
        </ul>

        {/* Mobile Navbar Controls */}
        <div className="flex items-center space-x-4 md:hidden">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl bg-slate-100 dark:bg-[#1a2332] text-slate-700 dark:text-amber-400 hover:bg-slate-200 dark:hover:bg-[#243044] border border-transparent dark:border-[#2d3a4f] transition duration-300"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <FaSun size={16} /> : <FaMoon size={16} />}
          </button>

          {/* Hamburger Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white dark:bg-[#111827] border-b border-slate-200 dark:border-[#2d3a4f] ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <ul className="px-6 py-4 space-y-4 font-medium">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block py-1 text-base transition duration-300 ${
                  activeSection === item.id
                    ? "text-blue-600 dark:text-blue-400 font-semibold"
                    : "text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
