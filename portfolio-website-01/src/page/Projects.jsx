import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import {projectDatas} from "../assets/projectImag/projectData";
import ProjectCard from "../component/ProjectCard";
import { motion } from "framer-motion";
import { FaProjectDiagram } from "react-icons/fa";
import { javaScriptProject } from "../assets/projectImag/projectData";

function Projects() {
  const { color } = useContext(AppContext);
  return (
    <div
      className={`min-h-screen w-full ${
        color ? "bg-black text-white" : "bg-white text-black"
      } transition-all duration-500 ease-in-out`}
    >
      <div className="w-11/12 max-w-[1120px] mx-auto">
        {/* Hero / Header Section */}
        <motion.div
          className={`w-full rounded-t-lg py-10 px-6 md:px-10 flex flex-col items-center justify-center text-center ${
            color
              ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white"
              : "bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 text-black"
          }`}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <FaProjectDiagram className="text-5xl mb-4 text-blue-500" />
          <h1 className="text-4xl font-extrabold mb-2">My Projects</h1>
          <p className="text-md max-w-2xl">
            Showcasing my full-stack development work, real-world projects, and
            creative solutions that solve problems and demonstrate growth.
          </p>
        </motion.div>

        {/* Projects Grid */}
{/* Projects Section */}
<motion.div
  className={`rounded-b-md px-2 pb-10 pt-5 ${
    color ? "bg-gray-900" : "bg-gray-100"
  }`}
>
  {/* 🧱 Major Projects Section */}
  <div className="flex items-center gap-4 mt-10 mb-4">
    <span className="px-4 py-1 rounded-full text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-sm font-bold shadow-md">
      🧱 Major Projects
    </span>
    <div className="flex-1 h-[2px] bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400" />
  </div>
  <motion.div
    className="grid grid-cols-1 gap-6 w-full "
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.05 }}
    variants={{
      hidden: { opacity: 0, y: 50 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          staggerChildren: 0.2,
        },
      },
    }}
  >
    {projectDatas.map((data) => (
      <motion.div
        key={data.id}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <ProjectCard data={data} />
      </motion.div>
    ))}
  </motion.div>

  {/* 💻 JavaScript Projects Section */}
  <div className="flex items-center gap-4 mt-16 mb-4">
    <span className="px-4 py-1 rounded-full text-white bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-sm font-bold shadow-md">
      💻 JavaScript Mini Projects
    </span>
    <div className="flex-1 h-[2px] bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400" />
  </div>
  <motion.div
    className="flex flex-col gap-10 w-full"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.05 }}
    variants={{
      hidden: { opacity: 0, y: 50 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          staggerChildren: 0.2,
        },
      },
    }}
  >
    {javaScriptProject.map((data, index) => (
      <motion.div
        key={data.id}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        className={`w-full rounded-lg shadow-lg p-4  transition-all duration-300`}
      >
        <ProjectCard data={data} />
      </motion.div>
    ))}
  </motion.div>
</motion.div>

      </div>
    </div>
  );
}

export default Projects;
