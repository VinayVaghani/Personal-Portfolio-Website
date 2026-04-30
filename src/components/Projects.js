import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const projects = [
    { 
      title: "Portfolio Website", 
      desc: "My personal portfolio site built with React & Tailwind.", 
      link: "https://github.com/VGvag31/Personal-Portfolio-Website",
      tech: ["React", "Tailwind CSS"]
    },
    { 
      title: "To-Do App", 
      desc: "A simple task management app using React.", 
      link: "https://github.com/VGvag31/To-Do-Web-App",
      tech: ["React", "JavaScript"]
    },
    { 
      title: "Calculator", 
      desc: "Basic calculator built with JavaScript.", 
      link: "https://github.com/VGvag31/Basic-calculator",
      tech: ["JavaScript", "HTML", "CSS"]
    },
    { 
      title: "Email Fraud Detection App", 
      desc: "Email fraud detection using machine learning and Streamlit.", 
      repo: "https://github.com/VinayVaghani/Spam-E-mail-Detection-Model", 
      demo: "https://spam-e-mail-detection-model-56oksduhxhgjdneqgpkxmb.streamlit.app/",
      tech: ["Python", "Machine Learning", "Streamlit"]
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A collection of my recent projects showcasing my skills in web development, machine learning, and problem-solving.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((p, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 p-8 border border-gray-100 hover:border-blue-300"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{p.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{p.desc}</p>
              
              <div className="mb-6 flex flex-wrap gap-2">
                {p.tech.map((t, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                {p.link && (
                  <a 
                    href={p.link} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold"
                  >
                    <FaGithub size={18} />
                    GitHub
                  </a>
                )}
                {p.repo && (
                  <a 
                    href={p.repo} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-gray-700 transition font-semibold"
                  >
                    <FaGithub size={18} />
                    GitHub
                  </a>
                )}
                {p.demo && (
                  <a 
                    href={p.demo} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-semibold"
                  >
                    <FaExternalLinkAlt size={18} />
                    Demo
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
