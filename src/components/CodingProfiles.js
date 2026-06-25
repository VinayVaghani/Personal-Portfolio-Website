import React from "react";
import { FaGithub, FaCode, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiCodeforces, SiGeeksforgeeks } from "react-icons/si";

function CodingProfiles() {
  const profiles = [
    { 
      name: "GitHub", 
      url: "https://github.com/VinayVaghani", 
      icon: FaGithub,
      brandColor: "group-hover:text-white",
      hoverBorder: "hover:border-slate-400",
      hoverBg: "hover:bg-slate-50 dark:hover:bg-[#243044]"
    },
    { 
      name: "LinkedIn", 
      url: "http://linkedin.com/in/vinay-vaghani/", 
      icon: FaLinkedin,
      brandColor: "group-hover:text-blue-500 dark:group-hover:text-blue-400",
      hoverBorder: "hover:border-blue-500 dark:hover:border-blue-400",
      hoverBg: "hover:bg-blue-50/50 dark:hover:bg-blue-500/10"
    },
    { 
      name: "LeetCode", 
      url: "https://leetcode.com/u/v317/", 
      icon: SiLeetcode,
      brandColor: "group-hover:text-orange-500 dark:group-hover:text-orange-400",
      hoverBorder: "hover:border-orange-500 dark:hover:border-orange-400",
      hoverBg: "hover:bg-orange-50/50 dark:hover:bg-orange-500/10"
    },
    { 
      name: "Codeforces", 
      url: "https://codeforces.com/profile/v31", 
      icon: SiCodeforces,
      brandColor: "group-hover:text-red-500 dark:group-hover:text-red-400",
      hoverBorder: "hover:border-red-500 dark:hover:border-red-400",
      hoverBg: "hover:bg-red-50/50 dark:hover:bg-red-500/10"
    },
    { 
      name: "GeeksforGeeks", 
      url: "https://www.geeksforgeeks.org/profile/v31?tab=activity", 
      icon: SiGeeksforgeeks,
      brandColor: "group-hover:text-emerald-500 dark:group-hover:text-emerald-400",
      hoverBorder: "hover:border-emerald-500 dark:hover:border-emerald-400",
      hoverBg: "hover:bg-emerald-50/50 dark:hover:bg-emerald-500/10"
    },
    { 
      name: "CodeChef", 
      url: "https://www.codechef.com/users/vv_1707", 
      icon: FaCode,
      brandColor: "group-hover:text-amber-600 dark:group-hover:text-amber-400",
      hoverBorder: "hover:border-amber-500 dark:hover:border-amber-400",
      hoverBg: "hover:bg-amber-50/50 dark:hover:bg-amber-500/10"
    },
  ];

  return (
    <section id="profiles" className="py-20 px-6 bg-white dark:bg-[#0b1120] text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Coding & Professional Profiles</h2>
          <div className="w-16 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full mb-6" />
          <p className="text-slate-600 dark:text-slate-300 max-w-xl mx-auto text-base sm:text-lg">
            Connect with me across various professional platforms, open-source communities, and competitive programming hubs.
          </p>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {profiles.map((profile, index) => {
            const IconComponent = profile.icon;
            return (
              <a
                key={index}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center justify-start p-5 bg-slate-50 dark:bg-[#1a2332] rounded-2xl border border-slate-200/50 dark:border-[#2d3a4f] shadow-sm dark:shadow-lg dark:shadow-black/10 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg ${profile.hoverBorder} ${profile.hoverBg}`}
              >
                <div className={`p-3 rounded-xl bg-white dark:bg-[#243044] text-slate-400 dark:text-slate-400 transition-colors duration-300 ${profile.brandColor}`}>
                  <IconComponent size={24} />
                </div>
                <span className="ml-4 text-lg font-bold text-slate-700 dark:text-slate-200 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300">
                  {profile.name}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default CodingProfiles;