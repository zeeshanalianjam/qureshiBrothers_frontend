import React from 'react'
import heroBg from '../assets/heroBg.png'

const NotFound = () => {
  return (
    <div className='flex items-center justify-center h-screen' style={{backgroundImage: `url(${heroBg})`, backgroundSize: 'cover'}}>
      <h1 className='text-4xl font-bold text-gray-800'>404 - Page Not Found</h1>
    </div>
  )
}

export default NotFound
