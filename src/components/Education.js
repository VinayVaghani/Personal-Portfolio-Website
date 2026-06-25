import React from "react";
import { FaGraduationCap, FaSchool } from "react-icons/fa";

export default function Education() {
  const educationData = [
    {
      title: "B.Tech in Computer Science and Engineering",
      institution: "Nirma University, Ahmedabad, Gujarat",
      period: "2023 - 2027",
      details: [
        "Pursuing a degree with a core focus on software systems, databases, networks, and advanced algorithms.",
        "Active member of the technical and programming clubs."
      ],
      icon: FaGraduationCap,
      highlight: true
    },
    {
      title: "12th Grade (HSC)",
      institution: "Ashadeep School, Surat, Gujarat",
      period: "2021 - 2023",
      details: [
        "Board: GSEB Board | Percentage: 86%",
        "JEE Mains Percentile: 96 (AIR: 6043 in GEN-EWS category)"
      ],
      icon: FaSchool,
      highlight: false
    },
    {
      title: "10th Grade (SSC)",
      institution: "MNJ Patel School, Surat, Gujarat",
      period: "2019 - 2021",
      details: [
        "Board: GSEB Board | Percentage: 93.34%"
      ],
      icon: FaSchool,
      highlight: false
    }
  ];

  return (
    <section id="education" className="py-20 bg-white dark:bg-[#0b1120] text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Education</h2>
          <div className="w-16 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full" />
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-200 dark:border-[#2d3a4f] ml-4 sm:ml-8 pl-8 sm:pl-12 space-y-12">
          {educationData.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="relative group">
                {/* Glowing Timeline Node */}
                <div className={`absolute -left-[45px] sm:-left-[61px] top-1 w-10 h-10 rounded-full flex items-center justify-center border-4 transition-all duration-300 ${
                  item.highlight
                    ? "bg-blue-600 text-white border-blue-100 dark:border-blue-900/50 shadow-md shadow-blue-500/30 group-hover:scale-110 group-hover:shadow-blue-500/50"
                    : "bg-white dark:bg-[#1a2332] text-slate-500 dark:text-slate-400 border-slate-200 dark:border-[#2d3a4f] group-hover:border-blue-600 dark:group-hover:border-blue-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:scale-110"
                }`}>
                  <Icon size={16} />
                </div>

                {/* Timeline Card */}
                <div className="bg-slate-50 dark:bg-[#1a2332] rounded-2xl p-6 sm:p-8 shadow-md dark:shadow-xl dark:shadow-black/15 border border-slate-100 dark:border-[#2d3a4f] hover:border-blue-600/30 dark:hover:border-blue-400/30 hover:shadow-xl hover:-translate-y-1 transition duration-300">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition duration-300">
                        {item.title}
                      </h3>
                      <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-1">
                        {item.institution}
                      </p>
                    </div>
                    <span className="inline-block px-3 py-1 bg-slate-200/60 dark:bg-[#243044] text-slate-600 dark:text-slate-300 rounded-full text-xs sm:text-sm font-semibold self-start sm:self-auto">
                      {item.period}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {item.details.map((detail, idx) => (
                      <li key={idx} className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-blue-400/60 mt-2 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
