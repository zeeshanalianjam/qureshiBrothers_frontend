import React from "react";
import heroBg from "../assets/heroBg.png";
import Navigation from "../components/navigation";
import homeIcon from "../assets/home.png";
import HeroIcon from "../components/HeroIcon";
import certifyStar from "../assets/certifyStar.png";
import calendar from "../assets/calendar.png";
import world from "../assets/world.png";
import skill from "../assets/skill.png";
import verifyTick from "../assets/verifyTick.png";

const Hero = () => {
  return (
    <div
      className="w-full "
      style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover" }}
    >
      {/* navigation */}
      {/* <Navigation /> */}

      {/* hero content */}
      <div className="container mx-auto pt-40">
        <div className="w-full bg-black/40 backdrop-blur-[2px] rounded-[45px]   border border-[#0000001A] px-[111px]">
          <div className="container flex justify-between items-center h-[500px]  mx-auto">
            <div className="flex flex-col items-center  justify-center mx-auto  text-white text-center space-y-16">
              {/* hero title */}
              <h1 className="text-3xl font-bold text-[#fff] [text-shadow:_2px_2px_4px_rgb(3_72_51_/_30%)] text-center">
                Pakistan’s Most Trusted Name in <br /> International Manpower
                Recruitment.
              </h1>

              {/* hero description with button */}
              <div>
                <p className="text-[#fff] [text-shadow:_0px_0px_2px_rgb(0_0_0_/_80%)]">
                  Founded in 1988, Qureshi Brothers delivers highly skilled{" "}
                  <br />
                  workforce solutions to power mega-projects across the Gulf.
                </p>

                <button className="relative rounded-[45px] px-4 py-2 bg-[#7f8489] font-semibold mt-2 border border-gray-400 hover:bg-[#28BC34] transition-all duration-300 overflow-hidden group">
                  <span className="absolute inset-0 bg-gradient-to-tr from-gray-600 via-gray-600  to-gray-400 transition-all duration-300 group-hover:from-[#28BC34] group-hover:via-[#28BC34] group-hover:to-[#28BC34]"></span>
                  <span className="relative z-10">Find Your Opportunity</span>
                </button>

                
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* hero icons */}
      <div className="container mx-auto py-[30px]">
       <div className="w-full bg-black/40 backdrop-blur-[2px] shadow-2xl rounded-[45px] border border-[#0000001A] px-[111px] flex  py-7">
     
          <HeroIcon
            src={homeIcon}
            text="Government Licensed OEP No. 0696/RWP"
          />
          <HeroIcon
            src={certifyStar}
            text="ISO 9001:2015 Certified Quality Management"
          />
          <HeroIcon
            src={calendar}
            text="35+ Years of Excellence (Est. 1988)"
          />
          <HeroIcon
            src={world}
            text="Trusted Partner Across the Gulf Region"
          />
          <HeroIcon
            src={skill}
            text="10,000+ Highly Skilled Professionals Placed"
          />
          <HeroIcon
            src={verifyTick}
            text="100% Recruitment Integrity & Faitht"
          />

        </div>
      </div>
    </div>
  );
};

export default Hero;
