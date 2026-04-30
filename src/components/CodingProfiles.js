import React from "react";
import { FaGithub, FaCode, FaFire, FaChess, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiCodeforces, SiGeeksforgeeks } from "react-icons/si";

function CodingProfiles() {
  const profiles = [
    { name: "GitHub", url: "https://github.com/VinayVaghani", icon: FaGithub },
    { name: "LinkedIn", url: "http://linkedin.com/in/vinay-vaghani/", icon: FaLinkedin },
    { name: "LeetCode", url: "https://leetcode.com/u/v317/", icon: SiLeetcode },
    { name: "Codeforces", url: "https://codeforces.com/profile/v31", icon: SiCodeforces },
    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/profile/v31", icon: SiGeeksforgeeks },
    { name: "CodeChef", url: "https://www.codechef.com/users/vv_1707", icon: FaCode },
  ];

  return (
    <section id="profiles" className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-blue-600">Platforms</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {profiles.map((profile, index) => {
            const IconComponent = profile.icon;
            return (
              <a
                key={index}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-[calc(50%-12px)] flex items-center justify-center p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg hover:bg-blue-50 transition"
              >
                <IconComponent className="text-4xl mr-4 text-blue-600" />
                <span className="text-xl font-semibold text-gray-700">{profile.name}</span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default CodingProfiles;