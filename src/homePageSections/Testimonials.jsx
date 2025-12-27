import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import TestimonialCard from "../components/TestimonialCard";
import TestimonialsUserCard from "../components/TestimonialsUserCard";

const Testimonials = () => {
  return (
    <div className=" ">
      <div className="container mx-auto  pt-10 pb-48">
        <div className="w-[80%] mx-auto space-y-14 ">
          {/* heading */}
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-3xl font-bold">GLOBAL TESTIMONIALS</h2>

              {/* sub heading */}
              <p className="uppercase text-[10px] font-semibold text-[#03483380]">
                Trusted by Industry Leaders
              </p>
            </div>

            {/* buttons */}
            <div className="flex gap-2">
              <button className="flex items-center  bg-[#e1ede9] shadow-md p-4 rounded-full relative top-3">
                <FaArrowLeft className="text-[#034833]" />
              </button>
              <button className="flex items-center  bg-[#e1ede9] shadow-md p-4 rounded-full relative top-3">
                <FaArrowRight className="text-[#034833]" />
              </button>
            </div>
          </div>

          {/* cards */}
          <div className="relative flex justify-between space-x-6">
            <TestimonialCard detail="“Qureshi Brothers provided us with 500+ certified welders for our refinery project. Their discipline and skill level are unmatched.”" />
            <TestimonialCard detail="“Reliable and efficient. They understand the urgency of mega-projects and always deliver highly qualified technical personnel on time.”" />
            <TestimonialCard detail="“A symbol of integrity. Their trade testing process ensures we only receive the best talent from Pakistan for our infrastructure works.”" />

            {/* cards users */}
            <div className="absolute -bottom-12 left-0.5">
              <TestimonialsUserCard name="Project Manager" country="KSA" />
            </div>
            <div className="absolute -bottom-12 left-[34.3%]">
              <TestimonialsUserCard name="HR Director" country="UAE" />
            </div>
            <div className="absolute -bottom-12 right-0">
              <TestimonialsUserCard name="Operations Head" country="Qatar" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
