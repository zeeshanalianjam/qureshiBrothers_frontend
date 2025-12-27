import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import LatestInsightsCard from "../components/LatestInsightsCard";
import kindgomdomOfSaudiArabiyaEvent from "../assets/kindgomdomOfSaudiArabiyaEvent.png";
import workingInUAE from "../assets/workingInUAE.png";
import qureshiBrothers from "../assets/qureshiBrothers.png";

const LatestInsights = () => {
  return (
    <div className=" ">
      <div className="container mx-auto  pt-20 pb-48">
        <div className="w-[80%] mx-auto space-y-14 ">
          {/* heading */}
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-3xl font-bold">LATEST INSIGHTS</h2>

              {/* sub heading */}
              <p className="uppercase text-[10px] font-semibold text-[#03483380]">
                Navigating the Future of Wor
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
          <div className="flex justify-between">
            <LatestInsightsCard
              image={kindgomdomOfSaudiArabiyaEvent}
              title="The Rise of Vision 2030: Opportunities for Pakistani"
              desc="Explore how Saudi Arabia’s mega-projects are creating a massive demand for skilled civil and mechanical engineers."
            />
            <LatestInsightsCard
              image={workingInUAE}
              title="Essential Certifications for Working in the UAE"
              desc="A comprehensive guide on the HSE and technical certifications required to excel in the Emirates' construction sector."
            />
            <LatestInsightsCard
              image={qureshiBrothers}
              title="Qureshi Brothers: 35 Years of Bridging Talent Gaps"
              desc="Reflecting on our journey from 1988 and how we became Pakistan’s most trusted name in international recruitment."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestInsights;
