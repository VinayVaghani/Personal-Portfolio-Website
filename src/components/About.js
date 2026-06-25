import React, { useState } from "react";
import { FaLaptopCode, FaServer, FaCode, FaTools } from "react-icons/fa";

function About() {
  const [activeTab, setActiveTab] = useState("frontend");

  const skillCategories = [
    {
      id: "frontend",
      label: "Frontend",
      icon: FaLaptopCode,
      skills: ["React.js", "Tailwind CSS", "Bootstrap", "JavaScript (ES6+)", "HTML5", "CSS3", "Responsive Design"]
    },
    {
      id: "backend",
      label: "Backend & DB",
      icon: FaServer,
      skills: ["Node.js", "Express.js", "MongoDB", "RESTful APIs", "Mongoose", "Passport.js", "Cloudinary Integration"]
    },
    {
      id: "languages",
      label: "Languages",
      icon: FaCode,
      skills: ["C++", "JavaScript", "Python", "HTML", "CSS", "SQL"]
    },
    {
      id: "tools",
      label: "Tools & Others",
      icon: FaTools,
      skills: ["Git & GitHub", "VS Code", "Postman", "Streamlit", "Leaflet.js", "Data Structures & Algorithms", "Competitive Programming"]
    }
  ];

  const currentCategory = skillCategories.find(cat => cat.id === activeTab);

  return (
    <section id="about" className="py-20 bg-slate-100 dark:bg-[#111827] text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">About Me</h2>
          <div className="w-16 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full" />
        </div>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column - Biography */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
              Who is Vinay?
            </h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              I am currently pursuing a B.Tech in Computer Science and Engineering at Nirma University. I have a strong foundation in computer engineering concepts and a passionate interest in full-stack web development.
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Beyond standard web applications, I have a deep fascination for Data Structures and Algorithms (DSA) and Competitive Programming, constantly challenging myself on various coding platforms to sharpen my problem-solving capabilities.
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              I thrive on building highly functional, responsive, and beautifully designed web systems that provide users with seamless experiences.
            </p>
          </div>

          {/* Right Column - Skill Tabs Matrix */}
          <div className="lg:col-span-7 bg-white dark:bg-[#1a2332] rounded-2xl shadow-xl dark:shadow-2xl dark:shadow-black/20 p-8 border border-slate-200/50 dark:border-[#2d3a4f] transition-colors duration-300">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 text-center lg:text-left">
              Skills & Expertise
            </h3>

            {/* Tab Buttons */}
            <div className="flex flex-wrap gap-3 mb-8 justify-center lg:justify-start">
              {skillCategories.map((category) => {
                const Icon = category.icon;
                const isActive = activeTab === category.id;
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveTab(category.id)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 transform active:scale-95 ${
                      isActive
                        ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                        : "bg-slate-100 dark:bg-[#243044] text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-[#2d3a4f] border border-transparent dark:border-[#3d4f66]/50"
                    }`}
                  >
                    <Icon size={16} />
                    {category.label}
                  </button>
                );
              })}
            </div>

            {/* Tab Panels (Active Skill Category Grid) */}
            <div className="transition-all duration-300 animate-fade-in">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {currentCategory.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-[#111827] rounded-xl border border-slate-200/40 dark:border-[#2d3a4f] hover:border-blue-500/30 dark:hover:border-blue-400/40 hover:shadow-sm hover:-translate-y-0.5 transition duration-300"
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-600 dark:bg-blue-400 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-200 font-medium text-sm sm:text-base">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
