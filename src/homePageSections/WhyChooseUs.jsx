import React from "react";
import chooseUsImage from "../assets/chooseUsImage.png";
import writeTick from "../assets/writeTick.png";
import company1 from "../assets/company1.png";
import company2 from "../assets/company2.png";
import company3 from "../assets/company3.png";
import company4 from "../assets/company4.png";
import company5 from "../assets/company5.png";
import chooseUsIcon from "../assets/chooseUsIcon.png";

const WhyChooseUs = () => {
  return (
    <div className="bg-white relative">
      {/* rightSide icon */}
      <div className="absolute right-0 -top-6">
        <img className="w-28" src={chooseUsIcon} alt="" />
      </div>

      {/* image and popupBox */}
      <div className="container mx-auto py-[30px]">
        <div className="flex justify-center  gap-28">
          {/* image */}
          <div className="relative hover:scale-110 transition-all duration-300">
            <img className="w-[300px]" src={chooseUsImage} alt="" />
            <div className="flex items-center justify-center py-2 px-4 rounded-[15px]  w-[170px]  bg-[#28BC34] text-white space-x-4 absolute bottom-12 -right-[86px]">
              <h2 className="text-3xl">35+</h2>
              <p className="text-xs">Years Of experience</p>
            </div>
          </div>

          {/* content */}
          <div className="space-y-6">
            <div>
              <p className="text-[#034833] font-bold text-xs">WHY CHOOSE US</p>
              <h2 className="text-3xl text-[#034833] font-bold">
                Decades of Integrity <br /> Global Excellence
              </h2>
            </div>

            <div>
              <div className="flex items-center space-x-4 ">
                <img className="w-4" src={writeTick} alt="" />
                <p className="text-[#034833]  font-bold">
                  Government Licensed
                </p>
              </div>
              <p className="text-[#03483380] relative left-10 text-sm">
                (OEP No. 0696/RWP)
              </p>
            </div>

            <div>
              <div className="flex items-center space-x-4 ">
                <img className="w-4" src={writeTick} alt="" />
                <p className="text-[#034833] font-bold">
                  ISO 9001 Certified.
                </p>
              </div>
              <p className="text-[#03483380] relative left-10 text-sm">
                Ensuring international quality standards
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* comapnies logos */}
      <div className="flex items-center justify-center space-x-20 pb-20 pt-14">
        <img className=" hover:scale-110 transition-all duration-300" src={company1} alt="" />
        <img className=" hover:scale-110 transition-all duration-300" src={company2} alt="" />
        <img className=" hover:scale-110 transition-all duration-300" src={company3} alt="" />
        <img className=" hover:scale-110 transition-all duration-300" src={company4} alt="" />
        <img className=" hover:scale-110 transition-all duration-300" src={company5} alt="" />
      </div>
    </div>
  );
};

export default WhyChooseUs;
