import React from "react";
import servicesBg from "../assets/servicesBg.png";
import ServicesBox from "../components/ServicesBox";
import construction from "../assets/construction.png";
import energyOilGas from "../assets/energyOilGas.png";
import hospitality from "../assets/hospitality.png";
import healthcare from "../assets/healthcare.png";
import manufacturing from "../assets/manufacturing.png";
import adminStaff from "../assets/adminStaff.png";

const Services = () => {
  return (
    <div
      className="py-[20px]"
      style={{ backgroundImage: `url(${servicesBg})`, backgroundSize: "cover" }}
    >
      <div className="w-[75%] mx-auto">
        {/* heading with desc */}
        <div className="container mx- space-y-1 w-[50%] align-left">
          <h2 className="text-3xl text-[#034833] font-bold">
            Specialized Manpower Solutions
          </h2>
          <p className="text-[10px] uppercase font-semibold text-[#03483380]">
            We supply highly skilled, disciplined, and certified Pakistani
            workforce to leading companies in UAE, Saudi Arabia, Qatar,
            Oman, Bahrain, and beyond.Oil, Gas & Refinery Experts
          </p>
        </div>

        {/* All Services */}
        <div className="mt-10 pb-10 flex flex-wrap gap-10 justify-center">
          <ServicesBox
            title="Construction & Civil"
            desc="Skilled & unskilled workforce for mega infrastructure projects: roads,
          bridges, high-rise buildings, and metro systems."
            image={construction}
          />
          <ServicesBox
            title="Energy, Oil & Gas"
            desc="Certified engineers, technicians, rig workers, safety officers, and pipeline projects."
            image={energyOilGas}
          />
          <ServicesBox
            title="Hospitality & Tourism"
            desc="Professional chefs, hotel managers, housekeeping, office staff, and service crews hotels and resorts across the Gulf."
            image={hospitality}
          />
          <ServicesBox
            title="Healthcare Professionals"
            desc="Doctors, nurses, pharmacists, lab technicians, and paramedical staff for hospitals and medical centers."
            image={healthcare}
          />
          <ServicesBox
            title="Manufacturing & Industrial"
            desc="Welders, fabricators, electricians, mechanics, machine operators, and quality controllers for factories and industrial plants."
            image={manufacturing}
          />
          <ServicesBox
            title="IT & Administrative Staff"
            desc="Software engineers, accountants, HR professionals, admin officers, and secretaries for corporate and government offices."
            image={adminStaff}
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
