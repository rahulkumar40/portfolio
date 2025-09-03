// Resume.jsx
import React, { useContext } from "react";
import { FaCode } from "react-icons/fa6";
import { AppContext } from "../context/AppContext";
import { motion } from "framer-motion";

function Resume() {
  const { color } = useContext(AppContext);

  return (
    <div className={`min-h-screen w-full ${color ? "bg-black text-white" : "bg-white text-black"} py-10 px-4`}>
      <div className="w-11/12 max-w-[1100px] mx-auto">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <h2 className="text-4xl font-bold">Resume</h2>
          <a
            href="/Updated_Resume_100 kok.pdf"
            download="Rahul_Kumar_Resume.pdf"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition text-sm md:text-base"
          >
            Download Resume
          </a>
        </div>

        {/* Resume Timeline Content */}
        <div className="space-y-12">
          {[
            {
              icon: "🗂",
              title: "Summary",
              content: "Passionate Full-Stack Developer with expertise in the MERN Stack and a strong foundation in Java & JavaScript. Experienced in building scalable applications, RESTful APIs, and solving DSA problems on LeetCode."
            },
            {
              icon: "🎓",
              title: "Education",
              content: (
                <ul className="space-y-2 text-sm">
                  <li>
                    <strong>B.Tech (CSE)</strong> – MM University, Haryana <br />
                    CGPA: 7.8 | <span className="text-gray-500">2022 – Present</span>
                  </li>
                  <li>
                    <strong>Higher Secondary School</strong> – VM Inter College, Bihar <br />
                    72.6% | <span className="text-gray-500">2019 – 2021</span>
                  </li>
                  <li>
                    <strong>10th Class</strong> – VM High School, Bihar <br />
                    79.8% | <span className="text-gray-500">2018 – 2019</span>
                  </li>
                </ul>
              )
            },
            {
              icon: <FaCode size={14} />,
              title: "Projects & Work Experience",
              content: (
                <ul className="text-sm space-y-2">
                  <li>
                    <strong>ERA Post</strong> – Freelance Full Stack Developer <br />
                    Built a political & business marketing platform using the MERN stack. Features include booking system, admin panel, and scalable performance. <br />
                    <a href="https://erapostd.onrender.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Visit Site</a>
                  </li>
                  <li>
                    <strong>Job Portal</strong> – MERN Stack <br />
                    Full-featured system for student and recruiter interaction. Efficient job posting, applications, and dashboard.
                  </li>
                  <li>
                    <strong>Intern – Code Clause</strong> (May 2024)<br />
                    Developed music player, pet selling system & image gallery.
                  </li>
                </ul>
              )
            },
            {
              icon: "💡",
              title: "Skills",
              content: (
                <ul className="text-sm space-y-1">
                  <li><strong>Languages:</strong> Java, C, JavaScript, Python</li>
                  <li><strong>Frontend:</strong> HTML, CSS, React, Tailwind</li>
                  <li><strong>Backend:</strong> Node.js, Express.js, REST APIs</li>
                  <li><strong>Databases:</strong> MongoDB, MySQL</li>
                  <li><strong>Tools:</strong> Git, GitHub, VSCode, Postman</li>
                </ul>
              )
            },
            {
              icon: "🏆",
              title: "Achievements",
              content: (
                <ul className="list-disc ml-5 text-sm space-y-1">
                  <li>Multiple full-stack projects completed.</li>
                  <li>DSA challenges solved consistently on LeetCode.</li>
                </ul>
              )
            },
            {
              icon: "🎓",
              title: "Certifications & Internships",
              content: (
                <ul className="list-disc ml-5 text-sm space-y-1">
                  <li>Decode Java + DSA 1.0 | PW</li>
                  <li>Internship: Codesoft, 2024 (Java Intern)</li>
                  <li>UniversumMM 2023 Participation</li>
                </ul>
              )
            },
            {
              icon: "⚽",
              title: "Hobbies",
              content: (
                <ul className="list-disc ml-5 text-sm space-y-1">
                  <li>Traveling</li>
                  <li>Playing cricket</li>
                  <li>Typing games to improve speed & focus</li>
                </ul>
              )
            },
          ].map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex gap-4 items-start"
            >
              <div className="w-8 h-8 rounded-full flex items-center justify-center bg-blue-200 dark:bg-blue-800 text-sm">
                {section.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">{section.title}</h3>
                <div className={`text-sm ${color ? "text-gray-300" : "text-gray-700"} text-justify`}>
                  {section.content}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Resume;
