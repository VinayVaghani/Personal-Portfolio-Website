import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Full-Stack", "Frontend", "Machine Learning", "Utility"];

  const projects = [
    {
      title: "Property Lords",
      desc: "A full-stack property rental and booking platform featuring user authentication, cloud media storage, and interactive maps.",
      repo: "https://github.com/VinayVaghani/Property-Lords-property-renting-platform",
      demo: "https://property-lords.onrender.com/listings",
      tech: ["Node.js", "Express", "MongoDB", "Bootstrap"],
      category: "Full-Stack"
    },
    {
      title: "Email Fraud Detection App",
      desc: "Email fraud detection using machine learning and Streamlit.",
      repo: "https://github.com/VinayVaghani/Spam-E-mail-Detection-Model",
      demo: "https://spam-e-mail-detection-model-56oksduhxhgjdneqgpkxmb.streamlit.app/",
      tech: ["Python", "Machine Learning", "Streamlit"],
      category: "Machine Learning"
    },
    {
      title: "Portfolio Website",
      desc: "My personal portfolio site built with React & Tailwind CSS.",
      link: "https://github.com/VGvag31/Personal-Portfolio-Website",
      tech: ["React", "Tailwind CSS"],
      category: "Frontend"
    },
    {
      title: "To-Do App",
      desc: "A simple task management app using React.",
      link: "https://github.com/VGvag31/To-Do-Web-App",
      tech: ["React", "JavaScript"],
      category: "Frontend"
    },
    {
      title: "Calculator",
      desc: "Basic calculator built with JavaScript.",
      link: "https://github.com/VGvag31/Basic-calculator",
      tech: ["JavaScript", "HTML", "CSS"],
      category: "Utility"
    },
  ];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-[#111827] text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Featured Projects</h2>
          <div className="w-16 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full mb-6" />
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-base sm:text-lg">
            A collection of my recent projects showcasing my skills in web development, machine learning, and problem-solving.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 max-w-2xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-300 transform active:scale-95 ${
                activeFilter === cat
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                  : "bg-white dark:bg-[#1a2332] text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-[#2d3a4f] hover:bg-slate-100 dark:hover:bg-[#243044]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {filteredProjects.map((p, index) => (
            <div 
              key={index} 
              className="group bg-white dark:bg-[#1a2332] rounded-2xl p-8 border border-slate-200/60 dark:border-[#2d3a4f] hover:border-blue-600/30 dark:hover:border-blue-400/30 shadow-md dark:shadow-xl dark:shadow-black/15 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Category Badge */}
                <span className="inline-block px-2.5 py-0.5 mb-4 text-xs font-semibold rounded-full bg-slate-100 dark:bg-[#243044] text-slate-500 dark:text-slate-400 uppercase tracking-wider border border-transparent dark:border-[#3d4f66]/40">
                  {p.category}
                </span>

                <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition duration-300">
                  {p.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-6 text-sm sm:text-base leading-relaxed">
                  {p.desc}
                </p>
                
                {/* Tech Badges */}
                <div className="mb-8 flex flex-wrap gap-2">
                  {p.tech.map((t, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-100/50 dark:border-blue-500/20 rounded-xl text-xs font-semibold"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Actions Buttons */}
              <div className="flex flex-wrap gap-4 mt-auto">
                {p.link && (
                  <a 
                    href={p.link} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-md hover:shadow-blue-500/15 transition-all duration-300 font-semibold text-sm transform hover:-translate-y-0.5"
                  >
                    <FaGithub size={16} />
                    GitHub
                  </a>
                )}
                {p.repo && (
                  <a 
                    href={p.repo} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-[#243044] text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-[#2d3a4f] border border-transparent dark:border-[#3d4f66]/50 rounded-xl transition-all duration-300 font-semibold text-sm transform hover:-translate-y-0.5"
                  >
                    <FaGithub size={16} />
                    Repository
                  </a>
                )}
                {p.demo && (
                  <a 
                    href={p.demo} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl shadow-md hover:shadow-emerald-500/15 transition-all duration-300 font-semibold text-sm transform hover:-translate-y-0.5"
                  >
                    <FaExternalLinkAlt size={14} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
