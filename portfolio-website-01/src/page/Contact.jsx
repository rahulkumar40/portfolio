import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { FaSquareInstagram, FaFacebook, FaSquareXTwitter, FaLinkedin, FaWhatsapp, FaGithub } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

function Contact() {
  const { color } = useContext(AppContext);

  // ✅ React Hook Form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  // ✅ Form Submit
  const onSubmit = async (data) => {
    try {
      const res = await axios.post("https://porserver.onrender.com/api/port/mailSend", data);
      toast.success(res.data.message || "Message sent successfully! 🚀", { position: "top-right" });
      reset();
    } catch (err) {
      console.error(err.response?.data || err.message);
      toast.error(err.response?.data?.message || "Something went wrong. Please try again later.", { position: "top-right" });
    }
  };

  return (
    <div
      className={`min-h-screen w-full ${
        color ? "bg-black text-white" : "bg-white text-black"
      } transition-all duration-500 ease-in-out`}
    >
      <div className="w-11/12 max-w-[1100px] mx-auto px-2 py-6">
        
        {/* Hero Section */}
        <div className="min-h-[25vh] flex flex-col justify-center items-center rounded-t-md relative mb-6">
          <h2 className="text-3xl font-bold uppercase text-center bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Contact Me
          </h2>
          <p className="text-lg text-center mt-2 px-2">
            Let’s connect and create something remarkable together!
          </p>
          <a
            href="mailto:rahul4004kumar@gmail.com"
            className="absolute bg-blue-500 px-4 py-2 text-lg font-semibold rounded-md hover:bg-blue-600 bottom-4 right-4 transition"
          >
            Hire Me
          </a>
        </div>

        {/* Get In Touch Section */}
        <div className="py-6 rounded-md shadow-md">
          <h2 className="text-2xl font-bold text-center mb-6">Get in touch with me!</h2>
          <div className="grid sm:grid-cols-3 grid-cols-1 divide-y sm:divide-y-0 sm:divide-x">
            <div className="flex flex-col items-center py-4">
              <h3 className="text-lg font-semibold">Phone</h3>
              <a href="tel:+918709612317" className=" hover:underline">+91 8709612317</a>
            </div>
            <div className="flex flex-col items-center py-4">
              <h3 className="text-lg font-semibold">Email</h3>
              <a href="mailto:rahul4004kumar@gmail.com" className=" hover:underline">rahul4004kumar@gmail.com</a>
            </div>
            <div className="flex flex-col items-center py-4">
              <h3 className="text-lg font-semibold">Address</h3>
              <p className="text-center">Maharishi Markandeshwar University, Mullana</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-10">
          <h2 className="text-center mb-4 text-xl">Every great connection starts with a conversation.</h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-gradient-to-r from-gray-950 to-gray-900 p-6 rounded-md shadow-lg max-w-4xl mx-auto flex flex-col gap-6"
          >
            <div className="grid md:grid-cols-2 gap-6 w-full">
              <div className="space-y-4">
                {/* Name */}
                <input
                  type="text"
                  placeholder="Your Name *"
                  {...register("name", { required: "Name is required" })}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

                {/* Email */}
                <input
                  type="email"
                  placeholder="Your Email *"
                  {...register("email", {
                    required: "Email is required",
                    pattern: { value: /^\S+@\S+$/i, message: "Enter a valid email" },
                  })}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

                {/* Subject */}
                <input
                  type="text"
                  placeholder="Subject"
                  {...register("subject")}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                />
              </div>

              {/* Message */}
              <textarea
                placeholder="Your Message..."
                {...register("message", { required: "Message is required" })}
                className="w-full h-40 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none resize-none"
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="self-center bg-blue-500 px-6 py-2 text-white font-medium rounded-md hover:bg-blue-600 transition-all disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* Map Section */}
        <div className="grid sm:grid-cols-2 gap-4 mt-10 items-center">
          <p className="text-center font-semibold text-lg">Maharishi Markandeshwar University, Mullana</p>
          <iframe
            className="w-full h-64 rounded-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3446.4980211078114!2d77.0468112!3d30.2513883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fad2d69058e33%3A0xc7d016db25112762!2sMaharishi%20Markandeshwar%20(Deemed%20to%20be%20University)!5e0!3m2!1sen!2sin!4v1737268790905!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Social Media Section */}
        <div className="mt-10 text-center">
          <h2 className="mb-4 text-xl font-semibold">Stay Connected</h2>
          <div className="grid md:grid-cols-7 grid-cols-3 gap-4 justify-items-center">
            <SocialIcon url="https://www.linkedin.com/in/rahul-kumar-163180250/" label="LinkedIn" Icon={FaLinkedin} />
            <SocialIcon url="https://github.com/rahulkumar40" label="GitHub" Icon={FaGithub} />
            <SocialIcon url="https://leetcode.com/u/rahul4004kumar/" label="LeetCode" Icon={SiLeetcode} />
            <SocialIcon url="https://x.com/Rahulku54034210" label="X" Icon={FaSquareXTwitter} />
            <SocialIcon url="https://www.instagram.com/rahulkumar_004.0/" label="Instagram" Icon={FaSquareInstagram} />
            <SocialIcon url="https://www.facebook.com/profile.php?id=100023658979736" label="Facebook" Icon={FaFacebook} />
            <SocialIcon url="https://wa.me/8709612317" label="WhatsApp" Icon={FaWhatsapp} />
          </div>
        </div>
      </div>

      {/* ✅ Toast Notification Container */}
      <ToastContainer />
    </div>
  );
}

// Small helper component
const SocialIcon = ({ url, label, Icon }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-col items-center hover:text-blue-500 transition"
  >
    <Icon className="text-2xl mb-1" />
    <span className="text-sm">{label}</span>
  </a>
);

export default Contact;
