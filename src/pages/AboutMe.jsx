import React from "react";

function AboutMe() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-red-400 mb-6">About Me</h1>
      <hr className="border-red-500 w-full mt-2" />

      <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg mb-6">
        <h2 className="text-2xl font-semibold mb-4">Hi, I'm Harsh Tank</h2>
        <p className="text-lg">
          I'm a passionate web developer with a strong background in building
          dynamic and responsive web applications. I specialize in frontend
          technologies like React.js, HTML, CSS, and JavaScript, and I'm
          continuously expanding my skill set.
        </p>

        <p className="text-lg mt-4">
          I'm always eager to learn new technologies and embrace the challenges
          that come with creating interactive and engaging user experiences.
          Currently, I'm focusing on improving my skills in full-stack
          development, particularly with the MERN stack.
        </p>

        <div className="mt-6">
          <h3 className="text-xl font-semibold">Skills & Technologies</h3>
          <ul className="list-disc pl-6 text-lg">
            <li>React.js</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>JavaScript & ES6+</li>
            <li>CSS (Tailwind, Bootstrap)</li>
            <li>Git & GitHub</li>
            <li>API Integration</li>
          </ul>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold">Let's Connect!</h3>
          <p className="text-lg">
            Feel free to reach out to me for collaboration, freelance
            opportunities, or just to chat about web development!
          </p>
          <div className="mt-4 flex space-x-6 justify-center">
            <a
              href="https://www.linkedin.com/in/harsh-tank-744a31229?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              className="text-blue-500 hover:text-blue-700 hover:scale-105 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/HarshTank-0904"
              className="text-gray-300 hover:text-gray-500 hover:scale-105 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
