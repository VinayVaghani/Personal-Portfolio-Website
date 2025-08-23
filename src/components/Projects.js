import React from "react";

function Projects() {
  const projects = [
    { title: "Portfolio Website", desc: "My personal portfolio site built with React & Tailwind.", link: "https://github.com/VGvag31/Personal-Portfolio-Website" },
    { title: "To-Do App", desc: "A simple task management app using React.", link: "https://github.com/VGvag31/To-Do-Web-App" },
    { title: "Calculator", desc: "Basic calculator built with JavaScript.", link: "https://github.com/VGvag31/Basic-calculator" },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-10">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, index) => (
            <div key={index} className="bg-gray-100 rounded-xl shadow-md p-6 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-gray-600">{p.desc}</p>
              <a href={p.link} className="mt-4 inline-block text-blue-600 hover:underline">View Project</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
