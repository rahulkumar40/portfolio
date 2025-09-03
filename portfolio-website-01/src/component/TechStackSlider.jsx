// TechStackSlider.jsx with Swiper.js

import React, { useContext } from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaPython,
  FaDatabase,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiExpress,
  SiPostman,
} from "react-icons/si";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { AppContext } from "../context/AppContext";

const techStack = [
  { name: "React", icon: <FaReact className="text-sky-500" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-700" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-600" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "Java", icon: <FaJava className="text-red-700" /> },
  { name: "Python", icon: <FaPython className="text-blue-400" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
  { name: "GitHub", icon: <FaGithub className="text-red-800" /> },
  { name: "SQL/DB", icon: <FaDatabase className="text-indigo-700" /> },
];

const TechStackSlider = () => {
    const{color} = useContext(AppContext);
  return (
    <div className="pt-10 px-4 flex gap-x-4">
      <h2 className={`text-1xl font-bold text-center mb-6   ${!color?`text-gray-800`:`text-white`}`}>
        Tech Stack
      </h2>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={5}
        loop={true}
        autoplay={{ delay: 2000 }}
        breakpoints={{
          320: { slidesPerView: 3 },
          640: { slidesPerView: 6 },
          768: { slidesPerView: 5 },
          1024: { slidesPerView: 6 },
        }}
      >
        {techStack.map((tech, index) => (
          <SwiperSlide key={index}>
            <div className={`flex flex-col h-auto items-center justify-center   ${!color?`text-gray-800`:`text-white bg-black`} `}>
              <div className="text-[2rem] mb-1">{tech.icon}</div>
              <p className={`text-[0.8rem] text-center  ${!color?`text-gray-800`:`text-white`}`}>
                {tech.name}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TechStackSlider;
