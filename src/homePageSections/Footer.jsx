import React from 'react'
import Logo from '../assets/Logo.png'

const Footer = () => {
  return (
    <div className=" ">
         <div className="container mx-auto  pt-20 pb-48">
           <div className="w-[80%] mx-auto space-y-14 ">
             {/* heading */}
             <div className="flex justify-between items-center">
               <div className='flex flex-col items-center'>
                 <img src={Logo} alt="" />
   
                 {/* sub heading */}
                 <p className="  font-semibold ">
                  Qureshi Brothers
                 </p>
               </div>
   
               {/* buttons */}
               <div className="flex gap-2">
                 <button className="flex items-center  bg-[#e1ede9] shadow-md p-4 rounded-full relative top-3">
                   
                 </button>
                 <button className="flex items-center  bg-[#e1ede9] shadow-md p-4 rounded-full relative top-3">
                   
                 </button>
               </div>
             </div>


      
      </div>
            </div>
    </div>
  )
}

export default Footer
