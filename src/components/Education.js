import React from "react";

export default function Education() {
  return (
    <section id="education" className="py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Education</h2>
        <div className="space-y-8">
          {/* B.Tech */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">B.Tech in Computer Science and Engineering</h3>
            <p className="text-gray-600">Nirma University, Ahmedabad, Gujarat</p>
            <p className="text-sm text-gray-500">2023-2027</p>
          </div>

          {/* 12th Grade */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">12th Grade (HSC)</h3>
            <p className="text-gray-600">Ashadeep School, Surat, Gujarat</p>
            <p className="text-sm text-gray-500">Year: 2021-2023</p>
            <p className="text-sm text-gray-500">GSHEB Board Percentage: 86% | JEE Mains perrcentile: 96 (AIR: 6043 in GEN-EWS catagory)</p>
          </div>

          {/* 10th Grade */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">10th Grade (SSC)</h3>
            <p className="text-gray-600">MNJ patel School</p>
            <p className="text-sm text-gray-500">Year: 2019-2021</p>
            <p className="text-sm text-gray-500">GSEB   Percentage: 93.34%</p>
          </div>
        </div>
      </div>
    </section>
  );
}
