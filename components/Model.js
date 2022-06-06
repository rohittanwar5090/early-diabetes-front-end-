import React from 'react'

function Model({ heading, text, image }) {
  return (
    <div className='max-w-5xl mx-auto'>

      <h1 className='text-3xl lg:text-4xl capitalize my-5'>{heading}</h1>
      <div>
        <p className='text-lg lg:text-xl'>{text}</p>
        <div className='w-full  flex justify-center h-48 my-10'>
          <img className='h-full w-full object-contain ' src={image} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Model