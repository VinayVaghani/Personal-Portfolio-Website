import React from "react";

function Education() {
  const educationData = [
    {
      degree: "Bachelor of Technology (B.Tech) in Computer Science",
      school: "Nirma University",
      year: "2023 - 2027",
      details: "Focused on Web Development, Data Structures, and Algorithms and Machine Learning.",
    },
    {
      degree: "Higher Secondary Education (12th Grade)",
      school: "Ashadeep Secondary & Higher Secondary School",
      year: "2021 - 2023",
      details: "GHSEB Board result : 86% | AIR : 6043 (EWS) (96.65 PR) in JEE Mains .",
    },
    {
      degree: "Secondary Education (10th Grade)",
      school: "M.N.J patel high School",
      year: "2019 - 2021",
      details: "GSEB board result : 93.66%",
    },
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-10">Education</h2>
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-xl shadow-md p-6 hover:shadow-xl transition text-left"
            >
              <h3 className="text-xl font-semibold text-gray-800">
                {edu.degree}
              </h3>
              <p className="text-gray-600">{edu.school}</p>
              <p className="text-gray-500 text-sm">{edu.year}</p>
              <p className="mt-2 text-gray-700">{edu.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
