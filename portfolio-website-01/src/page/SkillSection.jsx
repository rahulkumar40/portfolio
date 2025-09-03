import React from 'react'

import { FaCode, FaDatabase, FaTools, FaLaptopCode, FaUsers } from "react-icons/fa";

const SkillsSection = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-200 mb-6">
        💡 My Tech Stack
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Programming Language */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border-l-4 border-blue-500">
          <div className="flex items-center space-x-3">
            <FaCode className="text-blue-500 text-2xl" />
            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Programming Language</h4>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Java (DSA)</p>
        </div>

        {/* Web Technologies */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border-l-4 border-green-500">
          <div className="flex items-center space-x-3">
            <FaLaptopCode className="text-green-500 text-2xl" />
            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Web Technologies</h4>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            HTML, CSS, Tailwind, React, Node.js, Express.js
          </p>
        </div>

        {/* Database */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border-l-4 border-purple-500">
          <div className="flex items-center space-x-3">
            <FaDatabase className="text-purple-500 text-2xl" />
            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Database</h4>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mt-2">MySQL, MongoDB</p>
        </div>

        {/* Tools & Frameworks */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border-l-4 border-red-500">
          <div className="flex items-center space-x-3">
            <FaTools className="text-red-500 text-2xl" />
            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Tools & Frameworks</h4>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Spring Boot, Eclipse IDE, Postman, VSCode
          </p>
        </div>

        {/* Soft Skills */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border-l-4 border-yellow-500 sm:col-span-2">
          <div className="flex items-center space-x-3">
            <FaUsers className="text-yellow-500 text-2xl" />
            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Soft Skills</h4>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Problem-solving, Teamwork, Time Management, Adaptable, Quick Learner
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;

