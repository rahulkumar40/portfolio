import React, { useContext } from "react";
import { FaArrowUp } from "react-icons/fa";
import { AppContext } from "../context/AppContext";
function Footer() {
    const {color, setColor} = useContext(AppContext);
    const handleClick = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };
  return (
    <div
      className={`h-[20px] w-full ${
        color ? `bg:black text-white` : `bg-white text-black`
      }  `}
    >
      <div className="w-11/12 max-w-[1100px] h-full mx-auto">
        <h3 className="text-center  text-xs">© 2025 Rahul Kumar. All Rights Reserved.</h3>
      </div>
    </div>
  );
}

export default Footer;
