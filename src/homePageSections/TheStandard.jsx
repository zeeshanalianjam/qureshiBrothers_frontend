import React from "react";
import StandardBox from "../components/StandardBox";
import talentSourcing from "../assets/talentSourcing.png";
import rigorousTesting from "../assets/rigorousTesting.png";
import deployment from "../assets/deployment.png";

const TheStandard = () => {
  return (
    <div className="pt-[30px] ">
      <div className="container mx-auto shadow-md  bg-white/20 backdrop-blur-[10px] py-10 rounded-tl-[40px] rounded-tr-[40px]">
        <div className="w-[80%] mx-auto space-y-14">
          {/* heading */}
          <div>
            <h2 className="text-3xl font-bold">The Qureshi Standard</h2>
            <p className="uppercase text-[10px] font-semibold">How We Select</p>
          </div>

          {/* services */}
          <div className="flex items-center justify-between gap-6">
            <StandardBox
              title="Talent Sourcing"
              desc="We identify highly skilled Pakistani professionals through our nationwide network"
              image={talentSourcing}
            />
            <StandardBox
              title="Rigorous Testing"
              desc="Every candidate undergoes strict technical and safety evaluations to meet Gulf standards."
              image={rigorousTesting}
            />
            <StandardBox
              title="Deployment"
              desc="We manage all logistics and government documentation for a seamless transition."
              image={deployment}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheStandard;
