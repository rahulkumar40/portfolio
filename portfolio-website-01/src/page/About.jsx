import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import profileImg from "../assets/img/heroI.png";
import { motion } from "framer-motion";
import SkillsSection from "./SkillSection";
import TechStackSlider from "../component/TechStackSlider";
import AboutMe from "../component/AboutMe";

function About() {
  const { color } = useContext(AppContext);

  return (
    <div
      className={`min-h-screen w-full ${
        color ? "bg-black text-white" : "bg-white text-black"
      } px-4 sm:py-5 transition-all duration-500 ease-in-out`}
    >
      <div className="max-w-[1100px] w-11/12 mx-auto flex flex-col items-center">
        {/* Hero Section */}
        <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-12 sm:sm-0">
          {/* Text Block */}
          <div className="text-center md:text-left space-y-6 ">
            <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Hi, I'm Rahul Kumar
            </h1>
            <p
              className={`text-lg ${color ? "text-gray-300" : "text-gray-600"}`}
            >
              Frontend Developer | Java Enthusiast | Lifelong Learner
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a
                href="https://github.com/rahulkumar40"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/rahul-kumar-163180250/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition"
              >
                LinkedIn
              </a>
              <a
                href="https://leetcode.com/u/rahul4004kumar/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition"
              >
                LeetCode
              </a>
            </div>
            <TechStackSlider />
          </div>

          {/* Image Block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center items-center md:mt-[-4rem]"
          >
            <div className="rounded-full overflow-hidden w-72 h-72 md:w-80 md:h-80 shadow-lg hover:scale-105 transition-transform duration-300">
              <img
                className="w-full h-full object-cover "
                src={profileImg}
                alt="Rahul Kumar Profile"
              />
            </div>
          </motion.div>
        </div>

        {/* About Me Section */}
        <AboutMe />
        <div className="mt-10 w-full">
          <SkillsSection />
        </div>
      </div>
    </div>
  );
}

export default About;
