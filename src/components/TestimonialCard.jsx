import React from 'react'

const TestimonialCard = ({detail}) => {
  return (
    <div className='relative bg-green-900 text-white w-[350px] h-[230px] py-8 px-4 text-center rounded-2xl shadow-md'>
        <div>
            <p>{detail}</p>
        </div>

        
    </div>
  )
}

export default TestimonialCard
