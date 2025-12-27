import React from 'react'
import saudiArabia from '../assets/saudiArabia.png'
import writeArrow from '../assets/writeArrow.png'

const CountryBox = ({image, title, point_1, point_2, point_3}) => {
  return (
    <div className='border-2 border-[#03483333] rounded-[20px] p-6 space-y-4 hover:scale-110 transition-all duration-300 '>
      {/* image */}
      <img className='w-14' src={image} alt="" />

      {/* title */} 
      <h3 className='font-semibold'>{title}</h3>

      {/* services */}
      <div className='flex items-center space-x-2'>
        <img className='w-3' src={writeArrow} alt="" />
        <p className='text-xs text-[#03483380]'>{point_1}</p>
      </div>
      <div className='flex items-center  space-x-2'>
        <img className='w-3' src={writeArrow} alt="" />
        <p className='text-xs text-[#03483380]'>{point_2}</p>
      </div>
      <div className='flex items-center  space-x-2'>
        <img className='w-3' src={writeArrow} alt="" />
        <p className='text-xs text-[#03483380]'>{point_3}</p>
      </div>
    </div>
  )
}

export default CountryBox
