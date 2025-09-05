// ✅ Corrected ProjectCard.jsx
import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { motion } from "framer-motion";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

function ProjectCard({ data }) {
  const { color } = useContext(AppContext);

  if (!data || !data.id || !data.name) {
    console.warn("Invalid data passed to ProjectCard:", data);
    return <div>Invalid Project Data</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: 0.2 * data.id }}
      viewport={{ once: true, amount: 0.1 }}
      className={`rounded-xl shadow-md p-2 md:p-4 flex gap-4 transition-all duration-300 md:flex-row sm:flex-col flex-col
      ${data.id % 2 === 0 ? "flex-rown-reverse" : ""} ${
        color ? "border-b-2" : ""
      }`}
    >
      {/* Lazy-loaded YouTube Video Preview */}
      <div className="w-full md:w-1/2 rounded-lg overflow-hidden aspect-video">
        <LiteYouTubeEmbed
          id={data.youtubeId}
          title={data.name}
          poster="maxresdefault"
          wrapperClass="yt-lite rounded-lg w-full h-full"
        />
      </div>

      {/* Project Description */}
      <div className="flex flex-col justify-between md:w-1/2 px-1 md:px-3 py-2 space-y-3">
        <div>
          <h3 className="text-xl md:text-2xl font-bold mb-1">{data.name}</h3>
          <p className="text-sm md:text-base mb-2 line-clamp-4">{data.desc}</p>
          <p className="text-xs italic text-gray-500">{data.teachStack}</p>
        </div>

        {/* Buttons */}
        <div className="flex justify-between gap-2 pt-2">
          <motion.a
            href={data.gitHubLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 rounded-lg text-sm"
          >
            GitHub
          </motion.a>
          <motion.a
            href={data.liveDemo || "#"} // ✅ this was previously data.liveDemo (wrong)
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 rounded-lg text-sm"
          >
            Website
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
