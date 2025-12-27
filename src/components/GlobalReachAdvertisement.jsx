import React from 'react'
import globalReachVideoTemp from '../assets/globalReachVideoTemp.png'
import GlobalReachServicesShowCaseBox from './GlobalReachServicesShowCaseBox'
import globalReachIcon_1 from "../assets/globalReachIcon_1.png";
import globalReachIcon_2 from '../assets/globalReachIcon_2.png'
import globalReachIcon_3 from '../assets/globalReachIcon_3.png';
import globalReachIcon_4 from '../assets/globalReachIcon_4.png';

const GlobalReachAdvertisement = () => {
  return (
    <div className='flex items-center justify-between gap-8'>
      {/* video */}
      <div className='w-[48%]'>
        <img className='' src={globalReachVideoTemp} alt="" />
      </div>

      {/* content */}
      <div className='w-[52%] grid grid-cols-2 gap-6'>
        <GlobalReachServicesShowCaseBox title="200+" desc="Professionals Placed Successfully" image={globalReachIcon_1} wid="50px"/>
        <GlobalReachServicesShowCaseBox title="ISO 9001:2015" desc="Certified Quality Management" image={globalReachIcon_2} wid="45px" />
        <GlobalReachServicesShowCaseBox title="35+ Years" desc="Of Recruitment Excellence" image={globalReachIcon_3} wid="40px"/>
        <GlobalReachServicesShowCaseBox title="OEP 0696/RWP" desc="Government Licensed Agency" image={globalReachIcon_4} wid="45px" />
      </div>

    </div>
  )
}

export default GlobalReachAdvertisement
