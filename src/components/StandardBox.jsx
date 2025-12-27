import React from "react";

const StandardBox = ({ title, desc, image }) => {
  return (
    <div className="py-6 pr-6 flex items-center border rounded-[45px] w-[340px] bg-white/20 hover:scale-110 transition-all duration-300 backdrop-blur-[10px]">
      {/* image */}
      <div className="w-[40%]">
        <img className="w-[40px] mx-auto" src={image} alt="" />
      </div>

      {/* content */}
      <div className=" w-[60%] space-y-1">
        <h3 className="font-semibold text-xl">{title}</h3>
        <p className="text-[11px] leading-5">{desc}</p>
      </div>
    </div>
  );
};

export default StandardBox;
