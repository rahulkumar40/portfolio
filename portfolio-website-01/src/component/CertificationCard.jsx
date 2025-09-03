import React from "react";
import { useParams } from "react-router-dom";
import certificateData from "../assets/certificat/certificate";

function CertificationCard() {
  const { id } = useParams();
  const cert = certificateData.find((d) => d.id === parseInt(id));

  if (!cert) {
    return (
      <div className="flex justify-center items-center h-screen text-red-500 text-xl">
        Certification not found.
      </div>
    );
  }

  return (
    <div className="px-4 md:px-12 py-8 max-w-6xl mx-auto">
      {/* Certificate Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 text-blue-700">
        {cert.title}
      </h1>

      {/* Certificate Image */}
      <div className="w-full rounded-xl overflow-hidden shadow-lg mb-8 flex justify-center items-center bg-gradient-to-bl to-blue-900  from-aqua-700 p-4">
        <img
          src={cert.img}
          alt={cert.title}
          loading="lazy"
          className="w-auto h-auto object-center max-h-[550px] rounded-xl"
        />
      </div>

      {/* Certificate Info */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 md:p-10 text-gray-800 dark:text-white">
        {/* Org and Description */}
        <div className="mb-4">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            <strong>Issued by:</strong> {cert.org}
          </p>
          <p className="text-lg font-medium mt-1">{cert.description}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            <strong>Date:</strong> {cert.date}
          </p>
        </div>

        {/* Body Paragraphs */}
        <div className="mt-6 space-y-4">
          {cert.body.map((para, index) => (
            <p key={index} className="leading-relaxed text-base md:text-lg">
              {para}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CertificationCard;
