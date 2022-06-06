import React from 'react'

function Model({heading,text,image}) {
  return (
    <div className='max-w-5xl mx-auto'>

        <h1 className='text-3xl lg:text-4xl capitalize my-5'>{heading}</h1>
        <div>
            <p className='text-lg lg:text-xl'>{text}</p>
            <div>
                <img src={image} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Model