import React from "react";
import heroBg from "../assets/heroBg.png";
import homeIcon from "../assets/home.png";
import HeroIcon from "../components/HeroIcon";
import certifyStar from "../assets/certifyStar.png";
import calendar from "../assets/calendar.png";
import world from "../assets/world.png";
import skill from "../assets/skill.png";
import verifyTick from "../assets/verifyTick.png";

const Hero = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center overflow-hidden bg-black">


      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0  z-0">
        <img
          src={heroBg}
          alt="Background"
          className="w-full h-full object-cover opacity-60"
        />
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90"></div>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 container mx-auto px-4 pt-40 pb-12 flex flex-col items-center justify-center min-h-[90vh]">
        
        <div className="text-center max-w-4xl space-y-8">
          
          {/* Badge (Optional small tag above title) */}
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-[#fae92b] text-xs font-bold tracking-widest uppercase mb-2 backdrop-blur-md">
            Est. 1988
          </span>

          {/* Main Title */}
          <h1 className="text-4xl  font-extrabold text-white leading-tight tracking-tight drop-shadow-2xl">
            Pakistan’s Most Trusted Name in <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fae92b] to-[#ff9900]">
              International Manpower Recruitment
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Founded in 1988, Qureshi Brothers delivers highly skilled workforce solutions to power mega-projects across the Gulf with integrity and excellence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button className="group relative px-8 py-4 bg-[#fae92b] text-black rounded-full font-bold text-lg shadow-[0_0_20px_rgba(250,233,43,0.3)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(250,233,43,0.6)] overflow-hidden">
              <span className="relative z-10">Find Your Opportunity</span>
              <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/50 to-transparent z-0"></div>
            </button>
            
            
          </div>
        </div>

        {/* Stats / Icons Grid - Floating at bottom */}
        <div className="w-full mt-16 md:mt-24">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            
            {/* Icon Card Wrapper */}
            <div className="group flex flex-col items-center justify-center p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-[#fae92b]/50 transition-all duration-300">
              <HeroIcon src={homeIcon} text="Licensed OEP" />
            </div>

            <div className="group flex flex-col items-center justify-center p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-[#fae92b]/50 transition-all duration-300">
              <HeroIcon src={certifyStar} text="ISO 9001:2015" />
            </div>

            <div className="group flex flex-col items-center justify-center p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-[#fae92b]/50 transition-all duration-300">
              <HeroIcon src={calendar} text="35+ Years" />
            </div>

            <div className="group flex flex-col items-center justify-center p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-[#fae92b]/50 transition-all duration-300">
              <HeroIcon src={world} text="Gulf Partner" />
            </div>

            <div className="group flex flex-col items-center justify-center p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-[#fae92b]/50 transition-all duration-300">
              <HeroIcon src={skill} text="10k+ Placed" />
            </div>

            <div className="group flex flex-col items-center justify-center p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-[#fae92b]/50 transition-all duration-300">
              <HeroIcon src={verifyTick} text="Integrity First" />
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;