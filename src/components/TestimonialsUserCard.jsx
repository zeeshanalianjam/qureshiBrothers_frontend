import React from 'react'
import arrowButtonGreen from "../assets/arrowButtonGreen.png";

const TestimonialsUserCard = ({ name, country }) => {
  return (
    <div className='bg-white py-6 px-8 rounded-tl-[50px] rounded-bl-[50px] rounded-br-[50px] w-[300px]'>
      <h3 className='text-[#034833] font-semibold text-xl'>{name}</h3>
      <div className='flex items-center justify-between'>
        <p className='text-[#03483380] text-sm'>{country}</p>
        <img className="w-10 " src={arrowButtonGreen} alt="" />
      </div>
    </div>
  )
}

export default TestimonialsUserCard
