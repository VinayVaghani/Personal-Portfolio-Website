// import React from "react";

// function Hero() {
//   return (
//     <section id="hero" className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center">
//       <img src="photo.jpg"></img>
//       <h1 className="text-5xl font-bold">Hi, I'm Vinay Vaghani</h1>
//       <p className="mt-4 text-lg">A Full-Stack Developer </p>
//       <p> DSA enthusiasts</p>
//       <p> Competetive programming enthusiasts</p>
//       <p> Computer Engineering Student</p>
//       <a href="#projects" className="mt-6 px-6 py-3 bg-white text-blue-600 rounded-full shadow-lg hover:bg-gray-200">View My Work</a>
//     </section>
//   );
// }

// export default Hero;



import React from "react";

function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col md:flex-row items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center md:text-left px-6"
    >
      {/* Left Content */}
      <div className="md:w-1/2">
        <h1 className="text-5xl font-bold">Hi, I'm Vinay Vaghani</h1>
        <p className="mt-4 text-lg">A Full-Stack Developer </p>
        <p> DSA enthusiasts</p>
        <p> Competetive programming enthusiasts</p>
        <p> Computer Engineering Student</p>        <a
          href="#projects"
          className="mt-6 inline-block px-6 py-3 bg-white text-blue-600 rounded-full shadow-lg hover:bg-gray-200"
        >
          View My Work
        </a>
      </div>

      {/* Right Side Image */}
      <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
        <img
          src="photo.jpg"   // 👈 use the file name from /public
          alt="My Profile"
          className="w-64 h-64 object-cover rounded-full shadow-lg border-4 border-white"
        />
      </div>
    </section>
  );
}

export default Hero;

