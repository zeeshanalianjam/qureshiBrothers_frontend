import React from "react";


const GlobalReachServicesShowCaseBox = ({title, desc, image, wid}) => {
  return (
    <div className="py-12  flex   px-6 gap-4 border rounded-[20px] bg-[#EEF9F5]/20 hover:scale-110 transition-all duration-300 backdrop-blur-[10px]">
      {/* image */}
      <div className="">
        <img className={`w-[${wid}]`} src={image} alt="" />
      </div>

      {/* content */}
      <div className="  space-y-1">
        <h3 className="font-semibold text-sm">{title}</h3>
        <p className="text-[11px] leading-5 text-[#03483380]">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default GlobalReachServicesShowCaseBox;
