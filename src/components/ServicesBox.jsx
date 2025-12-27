import React from "react";
import arrow from "../assets/arrow.png";

const ServicesBox = ({ title, desc, image }) => {
  return (
    <div className="py-6  flex items-center gap-4 border rounded-[45px] w-[480px] bg-white/10  backdrop-blur-[10px] hover:bg-white/30 hover:scale-105 hover:backdrop-blur-[15px] transition-all duration-300">
      {/* image */}
      <div className="w-[40%]">
        <img className="w-[60px] mx-auto" src={image} alt="" />
      </div>

      {/* content */}
      <div className="text-white w-[60%] space-y-1 pr-4">
        <h3 className="font-medium text-xl">{title}</h3>
        <p className="text-xs leading-5 text-white/90">{desc}</p>
        <img className="w-10 " src={arrow} alt="" />
      </div>
    </div>
  );
};

export default ServicesBox;
