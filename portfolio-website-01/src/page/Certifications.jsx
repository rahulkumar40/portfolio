import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import certificateData from '../assets/certificat/certificate'
// Example certification data array


function Certifications() {
  const { color } = useContext(AppContext);

  return (
    <div
      className={`h-full w-full px-4 py-6 transition-all duration-500 ${
        color ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="w-11/12 max-w-[1100px] mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Certifications</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificateData.map((cert) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: cert.id * 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className={`rounded-lg overflow-hidden shadow-md hover:shadow-xl cursor-pointer transform hover:scale-105 transition-all duration-300 ${
                color ? "bg-balck text-white border-b-2" : "bg-white text-black"
              }`}
            >
              <img
                src={cert.img}
                alt={cert.title}
                loading="lazy"
                className="w-full h-56 object-cover"
              />
              <div className="p-4 flex flex-col gap-y-2">
                <h3 className="text-xl font-semibold">{cert.title}</h3>
                <p className="text-sm leading-relaxed line-clamp-3">
                  {cert.description}
                </p>
                <Link to={`/certification/${cert.id}`}>
                  <button
                    className="mt-auto bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
                  >
                    View Details
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Certifications;
