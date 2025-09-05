import React, { useContext, useState } from "react";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import img01 from "../assets/img/hero.png";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { color, setColor } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <div className="h-[3.5rem] sticky top-0 left-0 z-50 shadow-md backdrop-blur-md bg-white/70 dark:bg-black/70 transition-colors duration-300">
      <div className="w-11/12 max-w-[1100px] mx-auto flex justify-between items-center h-full">
        {/* Logo */}
        <img
          className="cursor-pointer w-auto h-[3rem] object-center rounded "
          src={img01}
          alt="Logo"
          onClick={() => navigate("/")}
        />

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 font-medium text-gray-700 dark:text-gray-200">
          <NavLink to="/" className="hover:text-blue-600">About</NavLink>
          <NavLink to="/project" className="hover:text-blue-600">Projects</NavLink>
          <NavLink to="/resume" className="hover:text-blue-600">Resume</NavLink>
          <NavLink to="/certification" className="hover:text-blue-600">Certification</NavLink>
          <NavLink to="/contact" className="hover:text-blue-600">Contact</NavLink>
        </div>

        {/* Dark mode toggle & mobile menu icon */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setColor(!color)}
            className="text-2xl text-gray-700 dark:text-gray-200 hover:text-blue-600 transition"
          >
            {color ? <MdOutlineDarkMode /> : <MdDarkMode />}
          </button>

          <button
            className="md:hidden text-3xl text-gray-700 dark:text-gray-200"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 py-4 bg-white dark:bg-black text-gray-700 dark:text-gray-200 font-medium shadow-md transition-all duration-300">
          <NavLink onClick={() => setMenuOpen(false)} to="/">About</NavLink>
          <NavLink onClick={() => setMenuOpen(false)} to="/project">Projects</NavLink>
          <NavLink onClick={() => setMenuOpen(false)} to="/resume">Resume</NavLink>
          <NavLink onClick={() => setMenuOpen(false)} to="/certification">Certification</NavLink>
          <NavLink onClick={() => setMenuOpen(false)} to="/contact">Contact</NavLink>
        </div>
      )}
    </div>
  );
}

export default NavBar;
