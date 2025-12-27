import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import CountryBox from "../components/CountryBox";
import saudiArabia from "../assets/saudiArabia.png";
import uae from "../assets/uae.png";
import qatar from "../assets/qatar.png";
import oman from "../assets/oman.png";
import GlobalReachAdvertisement from "../components/GlobalReachAdvertisement";

const GlobalReach = () => {
  return (
    <div className=" ">
      <div className="container mx-auto py-10">
        <div className="w-[80%] mx-auto space-y-14 ">
          {/* heading */}
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-3xl font-bold">Our Global Reach</h2>

              {/* sub heading */}
              <p className="uppercase text-[10px] font-semibold text-[#03483380]">
                Available Countries
              </p>
            </div>

            <button className="flex items-center gap-2 bg-[#28BC34] px-4 py-3 rounded-[999px] text-white text-sm relative top-3">
              View More{" "}
              <span>
                <FaArrowRightLong />
              </span>
            </button>
          </div>

          {/* countries */}
          <div className="flex  items-center justify-between">
            <CountryBox
              image={saudiArabia}
              title="Saudi Arabia"
              point_1="Technical & MEP Specialists"
              point_2="Heavy Machinery Operators"
              point_3="Red Sea Infrastructure"
            />
            <CountryBox
              image={uae}
              title="UAE"
              point_1="MEP & High-Rise Specialist"
              point_2="5-Star Hotel & Retail Staff"
              point_3="Certified HSE Officers"
            />
            <CountryBox
              image={qatar}
              title="Qatar"
              point_1="Oil, Gas & Refinery Experts"
              point_2="Offshore Technical Personnel"
              point_3="Labor Law Compliance"
            />
            <CountryBox
              image={oman}
              title="Oman"
              point_1="Roads & Bridge Construction"
              point_2="Petrochemical Plant Crews"
              point_3="Oil, Gas & Refinery Experts"
            />
          </div>

          {/* advertisement */}
          <div className="pt-20 pb-10">
            <GlobalReachAdvertisement />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalReach;
