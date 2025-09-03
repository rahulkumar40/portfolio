import React, { useContext } from "react";
import { motion } from "framer-motion";
import { AppContext } from "../context/AppContext";

const AboutMe = () => {
  const { color } = useContext(AppContext);

  const content = [
    "I'm Rahul Kumar, a Computer Science student deeply passionate about crafting impactful digital experiences.",
    "With a solid foundation in Java, JavaScript, and full-stack development, I enjoy building scalable and efficient applications using technologies like React, Node.js, Express, and MongoDB.",
    "My core strength lies in problem-solving, particularly in data structures and algorithms. I’ve also completed a Java internship where I worked on hands-on development and performance optimization.",
    "Outside the tech world, you’ll often find me playing cricket, exploring new places, or engaging in competitive typing games to sharpen my focus and speed.",
    "I’m actively seeking collaborative opportunities and new challenges to learn and grow. Thanks for visiting my portfolio—let’s build something great together!",
  ];

  return (
    <section
      id="about"
      className={`w-full px-4 py-12 transition-colors duration-500 ${
        color ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="max-w-5xl mx-auto flex flex-col gap-y-8">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold border-b-4 border-blue-500 inline-block pb-2">
            About Me
          </h2>
          <p className="mt-2 text-sm md:text-base text-gray-500 dark:text-gray-400">
            A quick introduction to who I am and what I love to do.
          </p>
        </div>

        {/* Animated Paragraphs */}
        <div className="space-y-6 text-justify leading-relaxed px-2">
          {content.map((para, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * (i + 1), duration: 0.5 }}
              viewport={{ once: true, amount: 0.4 }}
              className={`${color ? "text-gray-300" : "text-gray-700"} text-base md:text-lg`}
            >
              {para}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
