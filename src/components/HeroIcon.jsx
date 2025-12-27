import React from "react";
import homeIcon from "../assets/home.png";
import { Link } from "react-router-dom";
const HeroIcon = ({ src, text }) => {
  return (
    <div className="text-white [text-shadow:_2px_2px_4px_rgb(0_0_0_/_80%)] hover:scale-110 py-2 px-3 rounded-md transition-all duration-300">
      <ul className="w-[148px] text-xs px-2">
        <Link to={"#"}>
          <li className="text-center flex flex-col items-center">
            <img  className="h-8" src={src} alt="" />
            <button>{text}</button>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default HeroIcon;
