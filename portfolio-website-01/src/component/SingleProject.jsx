import React, { useContext } from "react";
import { useParams } from "react-router-dom";
// import { AppContext } from "../context/AppContext";
import { motion } from "framer-motion";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import { AppContext } from "../context/AppContext";
import {
  projectDatas,
  javaScriptProject,
} from "../assets/projectImag/projectData";
function SingleProject({}) {
  const { id } = useParams();
  const { color } = useContext(AppContext);
  const allProject = [...projectDatas, ...javaScriptProject];
  const project = allProject.find((p) => String(p._id || p.id) === id);
  //   console.log(allProject);
  //   console.log("project");
  //   console.log(id);
  if (!project) {
    return <div className="text-center mt-20 text-xl">Project Not Found</div>;
  }

  return (
    <div
      className={`min-h-screen px-4 md:px-12 py-10 transition-all duration-300 
      ${color ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"}`}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto mb-8"
      >
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          {project.name}
        </h1>
        <p className="mt-2 text-sm md:text-base opacity-70">
          {project.teachStack}
        </p>
      </motion.div>

      {/* Video Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-xl mb-10"
      >
        <LiteYouTubeEmbed
          id={project.youtubeId}
          title={project.name}
          poster="maxresdefault"
          wrapperClass="yt-lite rounded-2xl w-full aspect-video"
        />
      </motion.div>

      {/* Description */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-5xl mx-auto space-y-6"
      >
        <h2 className="text-2xl font-bold">Project Overview</h2>
        <p className="leading-relaxed opacity-90 whitespace-pre-line">
          {project.desc}
        </p>
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="max-w-5xl mx-auto mt-10 flex gap-4 flex-wrap"
      >
        <a
          href={project.gitHubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition"
        >
          View GitHub
        </a>

        <a
          href={project.liveDemo || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className={`px-6 py-3 rounded-xl font-semibold transition 
          ${
            color
              ? "bg-white text-black hover:bg-gray-200"
              : "bg-black text-white hover:bg-gray-800"
          }`}
        >
          Live Demo
        </a>
      </motion.div>
    </div>
  );
}

export default SingleProject;
