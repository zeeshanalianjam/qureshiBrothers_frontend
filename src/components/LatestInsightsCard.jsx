import React from "react";
import kindgomdomOfSaudiArabiyaEvent from "../assets/kindgomdomOfSaudiArabiyaEvent.png";
import { FaCalendarAlt } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const LatestInsightsCard = ({image, title, desc}) => {
  return (
    <div className="border border-[#D2A71980]/40 rounded-[20px] w-[330px] hover:scale-105 transition-all duration-300">
      {/* image */}
      <div>
        <img className="w-[330px]" src={image} alt="" />
      </div>

      {/* content */}
      <div className="space-y-4 p-4 pb-6">
        {/* date */}
        <div className="flex items-center font-semibold text-sm space-x-2">
          <FaCalendarAlt className="text-[#034833]" />
          <p className="text-[#03483380]">October 19, 2022</p>
        </div>

        <h3 className="text-xl font-semibold text-[#034833]">
            {title}
        </h3>

        <p className="text-[#03483380] leading-6 text-sm">
            {desc}
        </p>

        <div className="text-[#034833]">
          <button className="flex space-x-2 items-center justify-center font-semibold text-sm">
            <span>Read More</span>
            <FaArrowRightLong className="relative top-0.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LatestInsightsCard;
